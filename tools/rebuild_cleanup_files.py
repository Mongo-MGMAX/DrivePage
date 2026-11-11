# -*- coding: utf-8 -*-
"""
重建被误删的 DrivePage 派生文件：
  全部型号驱动清单.csv / 全部型号驱动清单.html / 打印机型号统计清单.xlsx
数据源: assets/data.js（动态读取当前机型数）
逻辑参照: assets/app.js 中 modelUrl() 与导出逻辑
"""
import re, os, html, csv, io

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'assets', 'data.js')

# ---- 读取 RAW_DATA ----
with open(DATA, 'r', encoding='utf-8') as f:
    content = f.read()
m = re.search(r"window\.RAW_DATA\s*=\s*`(.*?)`\s*;?\s*$", content, re.S)
raw = m.group(1)
lines = [l.strip() for l in raw.split('\n') if l.strip() and '|' in l]

models = []
for i, line in enumerate(lines):
    p = [x.strip() for x in line.split('|')]
    if len(p) < 8:
        continue
    brand, model, series, typ, color, func, year, level = p[:8]
    models.append({
        'brand': brand, 'series': visible_series(series, model), 'model': model,
        'type': typ, 'color': color, 'func': func,
        'year': int(year) if year.isdigit() else 2000, 'level': level
    })

TYPE = {'laser':'激光','inkjet':'喷墨','dotmatrix':'针式','thermal':'热敏/标签','wideformat':'大幅面','solidink':'固体墨'}
COLOR = {'mono':'黑白','color':'彩色'}
FUNC = {'print':'单打印','mfp':'多功能一体'}
LEVEL = {'home':'消费级','office':'商用级','enterprise':'企业级'}

BRAND_CN = {
 'HP':'惠普','Canon':'佳能','Epson':'爱普生','Brother':'兄弟','Lexmark':'利盟','Xerox':'施乐',
 'Ricoh':'理光','Kyocera':'京瓷','Konica Minolta':'柯尼卡美能达','Sharp':'夏普','OKI':'冲电气',
 'Samsung':'三星','Dell':'戴尔','Lenovo':'联想','Pantum':'奔图','Fujifilm':'富士胶片','Toshiba':'东芝',
 'Zebra':'斑马','TSC':'台半','Gprinter':'佳博','Deli':'得力','Star':'斯大','Dascom':'得实',
 'Jolimark':'映美','SNBC':'新北洋','HPRT':'汉印','Xprinter':'芯烨','Argox':'立象'
}

def norm(s):
    return re.sub(r'[\s\-_./\\()（）\[\]+,，]', '', str(s).lower())

def visible_series(series, model):
    """型号已包含系列时返回空串，避免重复展示同一个名称。"""
    return series if series and norm(series) not in norm(model) else ''

def bing(brand_cn, model):
    from urllib.parse import quote
    return 'https://www.bing.com/search?q=' + quote(brand_cn + ' ' + model + ' 驱动下载')

# HP 精确映射（从 app.js 读取）
HP_ID_MAP = {
 'LaserJet P1007':'https://support.hp.com/cn-zh/drivers/hp-laserjet-p1007-printer/3435678',
 'LaserJet 1020':'https://support.hp.com/cn-zh/drivers/hp-laserjet-1020-printer-series/439423',
 'LaserJet P1102':'https://support.hp.com/cn-zh/drivers/hp-laserjet-pro-p1102-printer-series/4110394',
 'LaserJet P1102w':'https://support.hp.com/cn-zh/drivers/hp-laserjet-pro-p1102-printer-series/4110394',
 'OfficeJet Pro 9130b':'https://support.hp.com/cn-zh/drivers/hp-officejet-pro-9130-all-in-one-series/2101272884',
 'OfficeJet Pro 9130e':'https://support.hp.com/cn-zh/drivers/hp-officejet-pro-9130-all-in-one-series/2101272884',
}

def model_url(brand, model):
    from urllib.parse import quote
    q = quote(model)
    code = norm(model)
    br = brand
    if br == 'Brother':
        return f'https://support.brother.com/g/b/downloadtop.aspx?c=us&lang=en&prod={code}_us'
    if br == 'HP':
        return HP_ID_MAP.get(model) or f'https://support.hp.com/cn-zh/drivers/printers?q={q}'
    if br == 'Canon': return 'https://www.usa.canon.com/support/search?query=' + q
    if br == 'Epson': return 'https://epson.com/support'
    if br == 'Lexmark': return 'https://www.lexmark.com/en_us/support.html?q=' + q
    if br == 'Xerox':
        return f"https://www.support.xerox.com/en-us/product/{model.lower().replace(' ','-')}/downloads"
    if br == 'Ricoh': return 'https://www.ricoh-usa.com/Support-Downloads?q=' + q
    if br == 'Kyocera': return 'https://kyocera.info/'
    if br == 'Konica Minolta': return 'https://www.konicaminoltaus.com/us/support?q=' + q
    if br == 'Sharp': return 'https://business.sharpusa.com/Search-Results?search=' + q
    if br == 'OKI': return 'https://www.oki.com/cn/printing/support/drivers-and-utilities/'
    if br == 'Samsung': return 'https://www.samsung.com/us/support/?q=' + q
    if br == 'Dell': return 'https://www.dell.com/support/search/en-us#q=' + q
    if br == 'Lenovo': return 'https://newsupport.lenovo.com.cn/driveList.html?fromsource=driveList&selname=' + q
    if br == 'Pantum': return 'https://global.pantum.com/support/download/driver/'
    if br == 'Fujifilm': return bing('富士施乐', model)
    if br == 'Toshiba': return 'https://www.toshiba-tec.com.cn/Service/driver-download.aspx'
    if br == 'Zebra': return 'https://www.zebra.com/us/en/support-downloads.html?q=' + q
    if br == 'TSC': return 'https://www.tscprinters.com/EN/Support/Driver-Download'
    if br == 'Gprinter': return 'https://www.gprinter.net/qudong/'
    if br == 'Deli': return bing('得力', model + ' 驱动下载')
    if br == 'Star': return 'https://www.starmicronics.com/support?q=' + q
    if br == 'Dascom': return bing('得实', model)
    if br == 'Jolimark': return bing('映美', model)
    if br == 'SNBC': return bing('新北洋', model)
    if br == 'HPRT': return bing('汉印', model)
    if br == 'Xprinter': return bing('芯烨', model)
    if br == 'Argox': return bing('立象', model)
    return BRAND_CN.get(brand, brand)

# ============ 1. CSV ============
csv_path = os.path.join(ROOT, '全部型号驱动清单.csv')
with open(csv_path, 'w', encoding='utf-8-sig', newline='') as f:
    w = csv.writer(f)
    w.writerow(['品牌','系列','型号','类型','色彩','功能','定位','年份','官方驱动页'])
    for m in models:
        w.writerow([m['brand'], m['series'], m['model'],
                    TYPE.get(m['type'],m['type']), COLOR.get(m['color'],m['color']),
                    FUNC.get(m['func'],m['func']), LEVEL.get(m['level'],m['level']),
                    m['year'], model_url(m['brand'], m['model'])])
print(f'CSV 完成: {len(models)} 行 -> {csv_path}')

# ============ 2. HTML 清单 ============
html_path = os.path.join(ROOT, '全部型号驱动清单.html')
rows_html = []
for m in models:
    url = model_url(m['brand'], m['model'])
    rows_html.append(
        f'<tr><td>{html.escape(m["brand"])}</td><td>{html.escape(m["series"])}</td>'
        f'<td>{html.escape(m["model"])}</td><td>{TYPE.get(m["type"],m["type"])}</td>'
        f'<td>{COLOR.get(m["color"],m["color"])}</td><td>{FUNC.get(m["func"],m["func"])}</td>'
        f'<td>{LEVEL.get(m["level"],m["level"])}</td><td>{m["year"]}</td>'
        f'<td><a href="{html.escape(url)}" target="_blank" rel="noopener">{html.escape(url)}</a></td></tr>'
    )
html_doc = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>DrivePage · 全部型号驱动清单</title>
<style>
 body{{font-family:-apple-system,'Segoe UI','Microsoft YaHei',sans-serif;margin:24px;background:#f4f4f5;color:#18181b}}
 h1{{font-size:20px}}
 .meta{{color:#71717a;font-size:13px;margin-bottom:16px}}
 table{{border-collapse:collapse;width:100%;background:#fff;font-size:13px}}
 th,td{{border:1px solid #e4e4e7;padding:6px 10px;text-align:left}}
 th{{background:#ececee;position:sticky;top:0}}
 td a{{color:#b4450f;text-decoration:none;word-break:break-all}}
 tr:nth-child(even){{background:#fafafa}}
</style>
</head>
<body>
<h1>DrivePage · 全部型号驱动清单</h1>
<p class="meta">共 {len(models)} 款机型 · 生成于 {__import__('datetime').datetime.now().strftime('%Y-%m-%d %H:%M')} · 品牌|系列|型号|类型|色彩|功能|定位|年份|官方驱动页</p>
<table>
<thead><tr><th>品牌</th><th>系列</th><th>型号</th><th>类型</th><th>色彩</th><th>功能</th><th>定位</th><th>年份</th><th>官方驱动页</th></tr></thead>
<tbody>
{''.join(rows_html)}
</tbody>
</table>
</body>
</html>
"""
with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html_doc)
print(f'HTML 完成: {len(rows_html)} 行 -> {html_path}')

# ============ 3. XLSX 统计清单 ============
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment
from openpyxl.utils import get_column_letter

wb = Workbook()
ws = wb.active
ws.title = '型号统计'

# 统计品牌
brand_count = {}
for m in models:
    brand_count[m['brand']] = brand_count.get(m['brand'], 0) + 1
brand_sorted = sorted(brand_count.items(), key=lambda x: -x[1])

headers = ['品牌', '中文名', '机型数', '占比']
ws.append(headers)
for i, h in enumerate(headers, 1):
    c = ws.cell(row=1, column=i)
    c.font = Font(bold=True, color='FFFFFF')
    c.fill = PatternFill('solid', fgColor='B4450F')
    c.alignment = Alignment(horizontal='center')

total = len(models)
for b, cnt in brand_sorted:
    ws.append([b, BRAND_CN.get(b, ''), cnt, f'{cnt/total*100:.1f}%'])

# 总统计行
ws.append([])
ws.append(['合计', '', total, '100%'])
last = ws.max_row
for col in range(1, 5):
    ws.cell(row=last, column=col).font = Font(bold=True)

# 按年份
ws2 = wb.create_sheet('年份统计')
ws2.append(['年份', '机型数'])
year_count = {}
for m in models:
    year_count[m['year']] = year_count.get(m['year'], 0) + 1
for y in sorted(year_count):
    ws2.append([y, year_count[y]])

# 按类型
ws3 = wb.create_sheet('类型统计')
ws3.append(['类型', '机型数'])
type_count = {}
for m in models:
    type_count[TYPE.get(m['type'],m['type'])] = type_count.get(TYPE.get(m['type'],m['type']), 0) + 1
for t, c in sorted(type_count.items(), key=lambda x: -x[1]):
    ws3.append([t, c])

xlsx_path = os.path.join(ROOT, '打印机型号统计清单.xlsx')
wb.save(xlsx_path)
print(f'XLSX 完成 -> {xlsx_path}')
print(f'\n共重建 {len(models)} 款机型数据')
