# -*- coding: utf-8 -*-
"""
扫描 drivers/ 目录里的驱动安装包，按文件名自动匹配机型，
生成 assets/local-drivers.js 供应用离线读取。

用法：
    python tools/scan_drivers.py
或双击：
    tools\\索引本地驱动.bat
"""
import os, re, json, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DRIVERS = os.path.join(ROOT, "drivers")
DATA = os.path.join(ROOT, "assets", "data.js")
OUT = os.path.join(ROOT, "assets", "local-drivers.js")
EXTS = (".exe", ".zip", ".rar", ".7z", ".msi", ".cab", ".dmg", ".pkg", ".bin")


def norm(s):
    return re.sub(r"[\s\-_./\\()（）\[\]+,，]", "", str(s)).lower()


def load_models():
    if not os.path.exists(DATA):
        return []
    with open(DATA, "r", encoding="utf-8") as f:
        raw = f.read()
    m = re.search(r"window\.RAW_DATA\s*=\s*`([^`]*)`", raw, re.S)
    if not m:
        return []
    out = []
    for line in m.group(1).strip().split("\n"):
        p = [x.strip() for x in line.split("|")]
        if len(p) >= 8:
            out.append((p[0], p[1]))
    return out


def main():
    models = load_models()
    if not models:
        print("[!] 未读到机型数据，检查 assets/data.js")
        return 1

    if not os.path.isdir(DRIVERS):
        os.makedirs(DRIVERS, exist_ok=True)

    files = []
    for dirpath, _dirs, names in os.walk(DRIVERS):
        for n in names:
            if n.lower().endswith(EXTS):
                full = os.path.join(dirpath, n)
                files.append((n, os.path.relpath(full, DRIVERS), os.path.getsize(full)))

    cands = []
    for brand, model in models:
        cands.append(norm(brand + model))
        cands.append(norm(model))
    cands = sorted(set(c for c in cands if len(c) > 2), key=len, reverse=True)

    entries, matched, unmatched = [], 0, []
    for name, rel, size in files:
        n = norm(re.sub(r"\.(exe|zip|rar|7z|msi|cab|dmg|pkg|bin)$", "", name, flags=re.I))
        hit = next((c for c in cands if c in n), None)
        entries.append({"file": name, "rel": rel.replace("\\", "/"), "size": size, "model": hit or ""})
        if hit:
            matched += 1
        else:
            unmatched.append(name)

    with open(OUT, "w", encoding="utf-8") as f:
        f.write("/* 由 tools/scan_drivers.py 自动生成，请勿手动编辑 */\n")
        f.write("window.LOCAL_DRIVERS = ")
        f.write(json.dumps(entries, ensure_ascii=False, indent=1))
        f.write(";\n")

    print(f"[✓] 扫描到安装包 : {len(files)}")
    print(f"[✓] 自动匹配机型 : {matched}")
    print(f"[✓] 已写入索引   : assets/local-drivers.js")
    if unmatched:
        print(f"[!] 未匹配 {len(unmatched)} 个（文件名里请带上完整型号，例如 HP_LaserJet_1020.exe）：")
        for n in unmatched[:20]:
            print("    -", n)
    return 0


if __name__ == "__main__":
    sys.exit(main())
