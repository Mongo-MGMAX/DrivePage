# -*- coding: utf-8 -*-
"""纯标准库生成 256x256 应用图标（PNG + ICO 封装），无第三方依赖。"""
import os, struct, zlib

SIZE = 256
SS = 3                      # 超采样倍数
BG = (180, 69, 15)          # 焦橙
FG = (255, 255, 255)


def rounded_rect_alpha(x, y, w, h, r):
    """返回该像素在圆角矩形内的覆盖率(0..1)"""
    if w <= 0 or h <= 0:
        return 0.0
    r = min(r, w / 2, h / 2)
    dx = max(x - (x + w / 2) + w / 2, abs(x - (x + w / 2)) - (w / 2 - r))
    dy = max(y - (y + h / 2) + h / 2, abs(y - (y + h / 2)) - (h / 2 - r))
    dx = max(0.0, abs(x - (x + w / 2)) - (w / 2 - r))
    dy = max(0.0, abs(y - (y + h / 2)) - (h / 2 - r))
    d = (dx * dx + dy * dy) ** 0.5
    if d <= r:
        return 1.0
    return 0.0


def inside(x, y, x0, y0, x1, y1, r):
    """圆角矩形内部测试（带 1px 软边）"""
    if x < x0 or x > x1 or y < y0 or y > y1:
        return 0.0
    r = min(r, (x1 - x0) / 2, (y1 - y0) / 2)
    cx = min(max(x, x0 + r), x1 - r)
    cy = min(max(y, y0 + r), y1 - r)
    d = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5
    if d <= r - 0.5:
        return 1.0
    if d >= r + 0.5:
        return 0.0
    return (r + 0.5 - d)


SHAPES = [
    # (x0, y0, x1, y1, radius, 颜色, 类型) 类型: 'bg' | 'fg' | 'cut'
    (0, 0, 255, 255, 56, BG, 'bg'),
    (98, 44, 158, 74, 6, FG, 'fg'),      # 顶部进纸
    (56, 76, 200, 168, 12, FG, 'fg'),    # 机身
    (82, 100, 174, 116, 4, BG, 'cut'),   # 出纸口
    (84, 168, 172, 212, 5, FG, 'fg'),    # 出纸
]


def render():
    buf = []
    for py in range(SIZE):
        row = bytearray()
        for px in range(SIZE):
            acc = [0.0, 0.0, 0.0, 0.0]
            for sy in range(SS):
                for sx in range(SS):
                    x = px + (sx + 0.5) / SS
                    y = py + (sy + 0.5) / SS
                    r, g, b, a = 0, 0, 0, 0.0
                    for (x0, y0, x1, y1, rad, col, kind) in SHAPES:
                        cov = inside(x, y, x0, y0, x1, y1, rad)
                        if cov <= 0:
                            continue
                        if kind == 'cut':
                            a = max(0.0, a - cov)
                        else:
                            a = a * (1 - cov) + cov
                            if a > 0:
                                r = int(col[0] * (cov / a if a else 0) + r * (1 - cov / a if a else 0)) if False else col[0]
                                g, b = col[1], col[2]
                    acc[0] += r * a; acc[1] += g * a; acc[2] += b * a; acc[3] += a
            n = SS * SS
            row += bytes((int(acc[0] / n), int(acc[1] / n), int(acc[2] / n), int(acc[3] / n * 255)))
        buf.append(bytes(row))
    return buf


def png_bytes(rows):
    def chunk(tag, data):
        c = struct.pack(">I", len(data)) + tag + data
        return c + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)

    raw = b"".join(b"\x00" + r for r in rows)
    ihdr = struct.pack(">IIBBBBB", SIZE, SIZE, 8, 6, 0, 0, 0)
    return (b"\x89PNG\r\n\x1a\n"
            + chunk(b"IHDR", ihdr)
            + chunk(b"IDAT", zlib.compress(raw, 9))
            + chunk(b"IEND", b""))


def ico_bytes(png):
    head = struct.pack("<HHH", 0, 1, 1)
    entry = struct.pack("<BBBBHHII", 0, 0, 0, 0, 1, 32, len(png), 22)
    return head + entry + png


if __name__ == "__main__":
    out = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                       "assets", "app.ico")
    rows = render()
    data = ico_bytes(png_bytes(rows))
    with open(out, "wb") as f:
        f.write(data)
    print("icon ->", out, len(data), "bytes")
