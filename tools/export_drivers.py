# -*- coding: utf-8 -*-
"""
导出全部机型的「官方驱动下载清单」：
  - 全部型号驱动清单.csv   （可导入迅雷/IDM 等批量下载工具）
  - 全部型号驱动清单.html  （可点击、可搜索的浏览器清单）

为什么不做「自动下载全部驱动」？
  1. 体积：上千款 × 平均 100MB+，总量 50~150GB，且企业复合机单个可到 1GB+；
  2. 直链：厂商不提供稳定直链，CDN 动态带 token，需逐款在官网点「下载」才拿得到真实地址；
  3. 安全/合规：批量抓取易下到错误或带毒的包，也违反部分厂商条款。
所以本工具把「官方深链清单」导出给你，你可以按需点击、或用下载工具批量导入。
"""
import os, re, csv
from urllib.parse import quote

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "assets", "data.js")

TYPE_CN = {"laser": "激光", "inkjet": "喷墨", "dotmatrix": "针式",
           "thermal": "热敏/标签", "wideformat": "大幅面", "solidink": "固体墨"}
COLOR_CN = {"mono": "黑白", "color": "彩色"}
FUNC_CN = {"print": "单打印", "mfp": "多功能一体"}
LEVEL_CN = {"home": "消费级", "office": "商用级", "enterprise": "企业级"}
BRAND_CN = {"HP": "惠普", "Canon": "佳能", "Epson": "爱普生", "Brother": "兄弟",
            "Lexmark": "利盟", "Xerox": "施乐", "Ricoh": "理光", "Kyocera": "京瓷",
            "Konica Minolta": "柯尼卡美能达", "Sharp": "夏普", "OKI": "冲电气",
            "Samsung": "三星", "Dell": "戴尔", "Lenovo": "联想", "Pantum": "奔图",
            "Fujifilm": "富士胶片", "Toshiba": "东芝", "Zebra": "斑马", "TSC": "台半",
            "Gprinter": "佳博", "Deli": "得力", "Star": "斯大", "Dascom": "得实",
            "Jolimark": "映美", "SNBC": "新北洋", "HPRT": "汉印", "Xprinter": "芯烨", "Argox": "立象"}


def norm(s):
    return re.sub(r"[\s\-_./\\()（）\[\]+,，]", "", str(s)).lower()


def visible_series(series, model):
    """Hide a series label when it is already contained in the model name."""
    return series if series and norm(series) not in norm(model) else ""


HP_ID_MAP = {
    "LaserJet P1007": "https://support.hp.com/cn-zh/drivers/hp-laserjet-p1007-printer/3435678",
    "LaserJet 1020": "https://support.hp.com/cn-zh/drivers/hp-laserjet-1020-printer-series/439423",
    "LaserJet P1102": "https://support.hp.com/cn-zh/drivers/hp-laserjet-pro-p1102-printer-series/4110394",
    "LaserJet P1102w": "https://support.hp.com/cn-zh/drivers/hp-laserjet-pro-p1102-printer-series/4110394",
}


def model_url(brand, model):
    q = quote(model)
    code = norm(model)
    table = {
        "Brother": "https://support.brother.com/g/b/downloadtop.aspx?c=us&lang=en&prod={}_us".format(code),
        "HP": HP_ID_MAP.get(model, "https://support.hp.com/cn-zh/drivers/printers?q=" + q),
        "Canon": "https://www.usa.canon.com/support/search?query=" + q,
        "Epson": "https://epson.com/Support/SearchResults?query=" + q,
        "Lexmark": "https://www.lexmark.com/en_us/support.html?q=" + q,
        "Xerox": "https://www.support.xerox.com/en-us/support?q=" + q,
        "Ricoh": "https://www.ricoh-usa.com/Support-Downloads?q=" + q,
        "Kyocera": "https://www.kyoceradocumentsolutions.us/us/support.html?q=" + q,
        "Konica Minolta": "https://www.konicaminoltaus.com/us/support?q=" + q,
        "Sharp": "https://www.sharpusa.com/ForBusiness/DocumentSystems/Support?q=" + q,
        "OKI": "https://my.okidata.com/?q=" + q,
        "Samsung": "https://www.samsung.com/us/support/?q=" + q,
        "Dell": "https://www.dell.com/support/search/en-us#q=" + q,
        "Lenovo": "https://newsupport.lenovo.com.cn/driveList.html?fromsource=driveList&selname=" + q,
        "Pantum": "https://www.pantum.com/support/downloads/?q=" + q,
        "Fujifilm": "https://www.bing.com/search?q=" + quote("富士施乐 " + model + " 驱动下载"),
        "Toshiba": "https://www.toshibatec.com/support/?q=" + q,
        "Zebra": "https://www.zebra.com/us/en/support-downloads.html?q=" + q,
        "TSC": "https://www.tscprinters.com/EN/support?q=" + q,
        "Gprinter": "http://www.gprinter.com.cn/service/download?q=" + q,
        "Deli": "https://www.deliworld.com/service/download?q=" + q,
        "Star": "https://www.starmicronics.com/support?q=" + q,
        "Dascom": "https://www.bing.com/search?q=" + quote("得实 " + model + " 驱动下载"),
        "Jolimark": "https://www.bing.com/search?q=" + quote("映美 " + model + " 驱动下载"),
        "SNBC": "https://www.bing.com/search?q=" + quote("新北洋 " + model + " 驱动下载"),
        "HPRT": "https://www.bing.com/search?q=" + quote("汉印 " + model + " 驱动下载"),
        "Xprinter": "https://www.bing.com/search?q=" + quote("芯烨 " + model + " 驱动下载"),
        "Argox": "https://www.bing.com/search?q=" + quote("立象 " + model + " 驱动下载"),
    }
    return table.get(brand)


def load_models():
    raw = open(DATA, encoding="utf-8").read()
    m = re.search(r"window\.RAW_DATA\s*=\s*`([^`]*)`", raw, re.S)
    out = []
    for line in m.group(1).strip().split("\n"):
        p = [x.strip() for x in line.split("|")]
        if len(p) >= 8:
            out.append(p)
    return out


def main():
    models = load_models()
    rows = []
    for brand, model, series, typ, color, func, year, level in models:
        url = model_url(brand, model)
        if not url:
            continue
        rows.append({
            "品牌": brand, "系列": visible_series(series, model),
            "型号": model, "类型": TYPE_CN.get(typ, typ), "色彩": COLOR_CN.get(color, color),
            "功能": FUNC_CN.get(func, func), "定位": LEVEL_CN.get(level, level),
            "年份": year, "官方驱动页": url,
        })

    # ── CSV ──
    csv_path = os.path.join(ROOT, "全部型号驱动清单.csv")
    with open(csv_path, "w", newline="", encoding="utf-8-sig") as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        w.writeheader()
        w.writerows(rows)

    # ── HTML ──
    trs = []
    for r in rows:
        trs.append(
            '<tr data-k="{k}"><td>{b}</td><td><a href="{u}" target="_blank">{m}</a></td>'
            '<td>{t}</td><td>{l}</td><td>{y}</td></tr>'.format(
                k=(r["品牌"] + r["型号"]).lower(),
                b=r["品牌"], m=r["型号"], u=r["官方驱动页"],
                t=r["类型"], l=r["定位"], y=r["年份"])
        )
    html = """<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>全部打印机驱动下载清单</title>
<style>
*{box-sizing:border-box} body{margin:0;background:#f4f4f5;color:#18181b;
font-family:"Microsoft YaHei",-apple-system,"Segoe UI",sans-serif}
.wrap{max-width:1100px;margin:0 auto;padding:24px 20px 60px}
h1{font-size:22px;margin:0 0 6px} .sub{color:#71717a;font-size:13px;margin:0 0 18px}
.search{width:100%;height:46px;padding:0 16px;font-size:15px;border:1px solid #d4d4d8;
border-radius:10px;margin-bottom:16px;outline:none}
.search:focus{border-color:#c2410c;box-shadow:0 0 0 3px rgba(194,65,12,.12)}
table{width:100%;border-collapse:collapse;background:#fff;border-radius:12px;overflow:hidden;
box-shadow:0 1px 3px rgba(0,0,0,.06)} th,td{padding:10px 12px;text-align:left;font-size:13.5px;
border-bottom:1px solid #ececee} th{background:#fafafa;font-weight:600;color:#52525b;
position:sticky;top:0} tr:last-child td{border-bottom:none} tr:hover td{background:#fafafa}
a{color:#c2410c;text-decoration:none} a:hover{text-decoration:underline}
.tip{font-size:12.5px;color:#8a8a93;margin-top:14px;line-height:1.7}
.count{font-size:13px;color:#52525b;margin-bottom:8px} .count b{color:#18181b}
</style></head><body><div class="wrap">
<h1>打印机驱动下载清单</h1>
<p class="sub">全部 __TOTAL__ 款机型 · 点击型号直达对应官方驱动页</p>
<input class="search" id="q" placeholder="输入型号 / 品牌，如 1020、L3251、惠普、兄弟 …">
<p class="count">共 <b>__TOTAL__</b> 款</p>
<table><thead><tr><th>品牌</th><th>型号</th><th>类型</th><th>定位</th><th>年份</th></tr></thead>
<tbody>__TRS__</tbody></table>
<p class="tip">说明：本清单为「官方驱动页深链」，点击直达各品牌该型号的支持页。<br>
为什么不是直链？厂商（HP/佳能/爱普生/兄弟…）均不提供稳定直链——CDN 地址动态带 token、
版本一更新即失效，无法批量预置。需要离线直下时，把官网下载到的安装包放进 <code>drivers</code>
目录并运行 <code>tools\\索引本地驱动.bat</code>，应用内即变「一键直接下载」。</p>
</div><script>
var q=document.getElementById('q');var rows=[].slice.call(document.querySelectorAll('tbody tr'));
q.addEventListener('input',function(){var k=q.value.trim().toLowerCase();
rows.forEach(function(tr){tr.style.display=(!k||tr.dataset.k.indexOf(k)>-1)?'':'none';});});
</script></body></html>"""
    html = html.replace("__TOTAL__", str(len(rows))).replace("__TRS__", "".join(trs))
    html_path = os.path.join(ROOT, "全部型号驱动清单.html")
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html)

    print(f"[OK] CSV  -> {csv_path}  ({len(rows)} 条)")
    print(f"[OK] HTML -> {html_path}")


if __name__ == "__main__":
    main()
