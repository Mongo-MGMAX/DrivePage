/* ═══════════════════════════════════════════════════════════
   DrivePage — 应用逻辑
   ═══════════════════════════════════════════════════════════ */
(function () {
'use strict';

/* ────────── 品牌元数据 ────────── */
const BRANDS = {
  HP:       { c:'#0096D6', alias:['惠普','惠浦','hp'],      cn:'https://support.hp.com/cn-zh/drivers/printers',                 intl:'https://support.hp.com/us-en/drivers/printers' },
  Canon:    { c:'#CC0000', alias:['佳能','canon'],          cn:'https://www.canon.com.cn/supports/',                            intl:'https://www.usa.canon.com/support' },
  Epson:    { c:'#1D4894', alias:['爱普生','精工爱普生'],   cn:'https://www.epson.com.cn/Apps/tech_support/',                  intl:'https://epson.com/support' },
  Brother:  { c:'#1B4F9C', alias:['兄弟'],                  cn:'https://www.brother.cn/support/download/',                     intl:'https://support.brother.com/g/b/downloadtop.aspx?c=us&lang=en' },
  Lexmark:  { c:'#D6001C', alias:['利盟'],                  cn:'https://www.lexmark.com/zh_cn/support.html',                   intl:'https://www.lexmark.com/en_us/support.html' },
  Xerox:    { c:'#FF6C2F', alias:['施乐','全录'],           cn:'https://www.support.xerox.com/zh-cn/support',                  intl:'https://www.support.xerox.com/en-us/support' },
  Ricoh:    { c:'#D6001B', alias:['理光'],                  cn:'https://www.ricoh.com.cn/support/',                            intl:'https://www.ricoh-usa.com/Support-Downloads' },
  Kyocera:  { c:'#D21034', alias:['京瓷'],                  cn:'https://www.kyoceradocumentsolutions.com.cn/support/',         intl:'https://kyocera.info/' },
  'Konica Minolta': { c:'#0057B8', alias:['柯尼卡美能达','柯美','konica'], cn:'https://www.konicaminolta.com.cn/support/',     intl:'https://www.konicaminoltaus.com/us/support' },
  Sharp:    { c:'#D6001B', alias:['夏普'],                  cn:'https://www.sharp.cn/support/',                                intl:'https://business.sharpusa.com/Search-Results' },
  OKI:      { c:'#0B5FA5', alias:['冲电气','冲电气工业'],   cn:'https://www.oki.com/cn/printing/support/',                     intl:'https://www.oki.com/cn/printing/support/drivers-and-utilities/' },
  Samsung:  { c:'#1428A0', alias:['三星'],                  cn:'https://www.samsung.com/cn/support/',                          intl:'https://www.samsung.com/us/support/' },
  Dell:     { c:'#007DB8', alias:['戴尔'],                  cn:'https://www.dell.com/support/home/zh-cn',                     intl:'https://www.dell.com/support/home/en-us' },
  Lenovo:   { c:'#E2231A', alias:['联想','lenovo'],         cn:'https://newsupport.lenovo.com.cn/driveList_index.html',        intl:'https://support.lenovo.com/us/en' },
  Pantum:   { c:'#D0021B', alias:['奔图','pantum'],         cn:'https://www.pantum.com/support/',                              intl:'https://global.pantum.com/support/download/driver/' },
  Fujifilm: { c:'#E2001A', alias:['富士胶片','富士施乐'],   cn:'https://www.fujifilm.com.cn/support/',                         intl:'https://www.fujifilm.com/fbglobal/eng/support/document' },
  Toshiba:  { c:'#D6001B', alias:['东芝'],                  cn:'https://www.toshiba-tec.com.cn/Service/driver-download.aspx', intl:'https://www.toshiba-tec.com.cn/Service/driver-download.aspx' },
  Zebra:    { c:'#A1791B', alias:['斑马','zebra'],          cn:'https://www.zebra.com/cn/zh/support-downloads.html',           intl:'https://www.zebra.com/us/en/support-downloads.html' },
  TSC:      { c:'#0F766E', alias:['台半','tsc'],            cn:'https://www.tscprinters.com/CN/support',                       intl:'https://www.tscprinters.com/EN/Support/Driver-Download' },
  Gprinter: { c:'#4B5563', alias:['佳博'],                  cn:'https://www.gprinter.net/qudong/',                             intl:'https://www.gprinter.net/qudong/' },
  Deli:     { c:'#C2410C', alias:['得力'],                  cn:'https://www.nbdeli.com/',                                      intl:'https://www.nbdeli.com/' },
  Star:     { c:'#5B4BC4', alias:['斯大','star'],           cn:'https://www.starmicronics.com.cn/support',                     intl:'https://www.starmicronics.com/support' },
  Dascom:   { c:'#0E7C31', alias:['得实','dascom'],         cn:'http://www.dascom.com.cn/',                                    intl:'http://www.dascom.com.cn/' },
  Jolimark: { c:'#D4112F', alias:['映美','jolimark'],       cn:'http://www.jolimark.com/',                                     intl:'http://www.jolimark.com/' },
  SNBC:     { c:'#005EB8', alias:['新北洋','snbc'],         cn:'https://www.snbc.com.cn/',                                     intl:'https://www.snbc.com.cn/' },
  HPRT:     { c:'#E60012', alias:['汉印','hprt'],           cn:'https://www.hprt.com.cn/',                                     intl:'https://www.hprt.com/' },
  Xprinter: { c:'#00A0E9', alias:['芯烨','xprinter'],       cn:'https://www.xprinter.net/',                                    intl:'https://www.xprintertech.com/' },
  Argox:    { c:'#F7941D', alias:['立象','argox'],          cn:'https://www.argox.com/',                                       intl:'https://www.argox.com/' }
};

/* HP 型号 → 精确驱动页映射（product ID 每个型号唯一、不可推导，需人工维护） */
const HP_ID_MAP = {
  'LaserJet P1007':  'https://support.hp.com/cn-zh/drivers/hp-laserjet-p1007-printer/3435678',
  'LaserJet 1020':   'https://support.hp.com/cn-zh/drivers/hp-laserjet-1020-printer-series/439423',
  'LaserJet P1102':  'https://support.hp.com/cn-zh/drivers/hp-laserjet-pro-p1102-printer-series/4110394',
  'LaserJet P1102w': 'https://support.hp.com/cn-zh/drivers/hp-laserjet-pro-p1102-printer-series/4110394',
  'LaserJet P1108':  'https://support.hp.com/cn-zh/drivers/hp-laserjet-pro-p1106-p1108-printer-series/model/5099195',
  'OfficeJet Pro 9130b':  'https://support.hp.com/cn-zh/drivers/hp-officejet-pro-9130-all-in-one-series/2101272884',
  'OfficeJet Pro 9130e':  'https://support.hp.com/cn-zh/drivers/hp-officejet-pro-9130-all-in-one-series/2101272884',
};

/* 判断某型号是否「精确直达」（URL 可猜或已录入映射），用于卡片徽章标记 */
function isExact(m) {
  if (m.brand === 'Brother' || m.brand === 'Lenovo') return true;
  if (m.brand === 'Xerox') return true;
  if (m.brand === 'HP' && HP_ID_MAP[m.model]) return true;          // HP 已录入映射的型号
  return false;
}

/* 按品牌 + 型号生成「型号级」驱动页深链（不是官网首页） */
function bingSearch(brandCn, model) {
  return 'https://www.bing.com/search?q=' + encodeURIComponent(brandCn + ' ' + model + ' 驱动下载');
}
function modelUrl(m) {
  const q = encodeURIComponent(m.model);
  const code = norm(m.model).toLowerCase();
  switch (m.brand) {
    case 'Brother':     // 兄弟：稳定可猜的型号下载页
      return `https://support.brother.com/g/b/downloadtop.aspx?c=us&lang=en&prod=${code}_us`;
    case 'HP':          return HP_ID_MAP[m.model] || `https://support.hp.com/cn-zh/drivers/printers?q=${q}`;
    case 'Canon':       return `https://www.usa.canon.com/support/search?query=${q}`;
    case 'Epson':       return `https://epson.com/support`;
    case 'Lexmark':     return `https://www.lexmark.com/en_us/support.html?q=${q}`;
    case 'Xerox':       // 施乐：slug 可猜（型号小写、空格转连字符）
      return `https://www.support.xerox.com/en-us/product/${m.model.toLowerCase().replace(/\s+/g, '-')}/downloads`;
    case 'Ricoh':       return `https://www.ricoh-usa.com/Support-Downloads?q=${q}`;
    case 'Kyocera':     return `https://kyocera.info/`;
    case 'Konica Minolta': return `https://www.konicaminoltaus.com/us/support?q=${q}`;
    case 'Sharp':       return `https://business.sharpusa.com/Search-Results?search=${q}`;
    case 'OKI':         return `https://www.oki.com/cn/printing/support/drivers-and-utilities/`;
    case 'Samsung':     return `https://www.samsung.com/us/support/?q=${q}`;
    case 'Dell':        return `https://www.dell.com/support/search/en-us#q=${q}`;
    case 'Lenovo':      return `https://newsupport.lenovo.com.cn/driveList.html?fromsource=driveList&selname=${q}`;
    case 'Pantum':      return `https://global.pantum.com/support/download/driver/`;
    case 'Fujifilm':    return bingSearch('富士施乐', m.model);
    case 'Toshiba':     return `https://www.toshiba-tec.com.cn/Service/driver-download.aspx`;
    case 'Zebra':       return `https://www.zebra.com/us/en/support-downloads.html?q=${q}`;
    case 'TSC':         return `https://www.tscprinters.com/EN/Support/Driver-Download`;
    case 'Gprinter':    return `https://www.gprinter.net/qudong/`;
    case 'Deli':        return bingSearch('得力', m.model + ' 驱动下载');
    case 'Star':        return `https://www.starmicronics.com/support?q=${q}`;
    case 'Dascom':      return bingSearch('得实', m.model);
    case 'Jolimark':    return bingSearch('映美', m.model);
    case 'SNBC':        return bingSearch('新北洋', m.model);
    case 'HPRT':        return bingSearch('汉印', m.model);
    case 'Xprinter':    return bingSearch('芯烨', m.model);
    case 'Argox':       return bingSearch('立象', m.model);
    default:            return (BRANDS[m.brand] ? BRANDS[m.brand].cn : bingSearch(m.brand, m.model));
  }
}

const TYPE_LABEL  = { laser:'激光', inkjet:'喷墨', dotmatrix:'针式', thermal:'热敏/标签', wideformat:'大幅面', solidink:'固体墨' };
const TYPE_ALIAS  = { 激光:'laser', 喷墨:'inkjet', 针式:'dotmatrix', 热敏:'thermal', 标签:'thermal', 大幅面:'wideformat' };
const COLOR_LABEL = { mono:'黑白', color:'彩色' };
const COLOR_ALIAS = { 黑白:'mono', 单色:'mono', 彩色:'color', 彩:'color' };
const FUNC_LABEL  = { print:'单打印', mfp:'多功能一体' };
const FUNC_ALIAS  = { 一体机:'mfp', 一体:'mfp', 多功能:'mfp', 单打印:'print', 打印:'print' };
const LEVEL_LABEL = { home:'消费级', office:'商用级', enterprise:'企业级' };
const LEVEL_ALIAS = { 消费级:'home', 家用:'home', 商用级:'office', 商用:'office', 企业级:'enterprise', 生产型:'enterprise' };

const ERAS = [
  { id:'all', label:'全部' },
  { id:'00-05', label:'2000-05' },
  { id:'06-10', label:'2006-10' },
  { id:'11-15', label:'2011-15' },
  { id:'16-20', label:'2016-20' },
  { id:'21-25', label:'2021-25' }
];

/* ────────── 数据解析 ────────── */
const norm = s => String(s).toLowerCase().replace(/[\s\-_./\\()（）\[\]+,，]/g, '');

// 系列只在提供额外信息时显示；若型号本身已包含系列，则不再重复展示。
const visibleSeries = (series, model) => {
  const s = norm(series), m = norm(model);
  return s && !m.includes(s) ? String(series).trim() : '';
};

const seenModelKeys = new Set();
const MODELS = (window.RAW_DATA || '').trim().split('\n').map((line, i) => {
  const p = line.split('|');
  if (p.length < 8) return null;
  const [brand, model, series, type, color, func, year, level] = p.map(x => x.trim());
  if (!brand || !model) return null;
  const b = BRANDS[brand] || { c:'#71717A', alias:[] };
  return {
    id: i, brand, model, series, seriesLabel: visibleSeries(series, model),
    type, color, func,
    year: parseInt(year, 10) || 2000, level,
    bc: b.c,
    modelHay: norm(brand + model + series),
    brandHay: norm(brand + (b.alias || []).join('')),
    hay: norm(brand + model + series + b.alias.join('') +
              TYPE_LABEL[type] + COLOR_LABEL[color] + FUNC_LABEL[func] + LEVEL_LABEL[level] +
              type + color + func + level + year),
    local: null
  };
}).filter(Boolean).filter(m => {
  // 防止后续增补数据时出现“品牌+型号”仅大小写/空格不同的重复卡片。
  const key = norm(m.brand + m.model);
  if (!key || seenModelKeys.has(key)) return false;
  seenModelKeys.add(key);
  return true;
});

const BRAND_ORDER = Object.keys(MODELS.reduce((a, m) => (a[m.brand] = (a[m.brand] || 0) + 1, a), {}))
  .sort((x, y) => MODELS.filter(m => m.brand === y).length - MODELS.filter(m => m.brand === x).length);

/* ────────── 状态 ────────── */
const S = {
  q: '', brand: 'all', type: 'all', color: 'all', func: 'all',
  level: 'all', era: 'all', direct: 'all', onlyLocal: false, sort: 'relevance',
  page: 1, size: 72, view: []
};

/* ────────── 本地驱动库 ────────── */
const LIB = { files: [], matched: 0, byModel: new Map(), source: '' };

function ingestStatic() {
  const arr = window.LOCAL_DRIVERS;
  if (!Array.isArray(arr) || !arr.length) return;
  LIB.files = arr.map(x => ({
    name: x.file || x.name, rel: x.rel || x.file, size: x.size || 0,
    href: 'drivers/' + encodeURI(x.rel || x.file)
  }));
  LIB.source = '索引文件';
  matchLibrary();
}
function ingestRuntime(fileList) {
  const arr = Array.from(fileList || []);
  if (!arr.length) return;
  const keep = LIB.files.filter(f => f.sourceTag === 'static');
  LIB.files = keep.concat(arr.map(f => ({
    name: f.name, size: f.size, file: f, sourceTag: 'runtime',
    href: (f.webkitRelativePath || f.name)
  })));
  LIB.source = '本次导入';
  matchLibrary();
}
function matchLibrary() {
  LIB.byModel = new Map();
  LIB.matched = 0;
  const cands = MODELS.map(m => ({ m, k: norm(m.brand + m.model) }))
    .concat(MODELS.map(m => ({ m, k: norm(m.model) })));
  LIB.files.forEach(f => {
    const n = norm(f.name.replace(/\.(exe|zip|rar|7z|msi|cab|dmg|pkg)$/i, ''));
    let best = null;
    cands.forEach(c => {
      if (c.k.length > 2 && n.includes(c.k) && (!best || c.k.length > best.k.length)) best = c;
    });
    if (best) {
      if (!LIB.byModel.has(best.m.id)) { LIB.byModel.set(best.m.id, f); LIB.matched++; }
    }
  });
  MODELS.forEach(m => { m.local = LIB.byModel.get(m.id) || null; });
}

/* ────────── 搜索 ────────── */
function scoreModel(m, tokens) {
  const full = m.hay, mk = norm(m.brand + m.model);
  let total = 0;
  for (const t of tokens) {
    let s = 99;
    if (mk === t) s = 0;
    else if (mk.startsWith(t)) s = 1;
    else if (mk.includes(t)) s = 2;
    else if (m.modelHay.includes(t)) s = 3;
    else if (m.brandHay.includes(t)) s = 4;
    // 特性词允许匹配类型/功能/定位；纯数字只认型号，避免年份或其他数字造成误命中。
    else if (!/^\d+$/.test(t) && full.includes(t)) s = 5;
    if (s === 99) return -1;
    total += s;
  }
  return total;
}
function expandTokens(raw) {
  const out = [];
  raw.trim().split(/\s+/).filter(Boolean).forEach(t => {
    const n = norm(t);
    if (!n) return;
    out.push(n);
    for (const k in BRANDS) if ((BRANDS[k].alias || []).some(a => norm(a) === n) || norm(k) === n) out.push(norm(k));
    if (TYPE_ALIAS[t])  out.push(norm(TYPE_ALIAS[t]));
    if (COLOR_ALIAS[t]) out.push(norm(COLOR_ALIAS[t]));
    if (FUNC_ALIAS[t])  out.push(norm(FUNC_ALIAS[t]));
    if (LEVEL_ALIAS[t]) out.push(norm(LEVEL_ALIAS[t]));
  });
  return out.length ? out : null;
}

function compute() {
  let list = MODELS.slice();
  const tokens = S.q ? expandTokens(S.q) : null;

  if (tokens) {
    const scored = [];
    list.forEach(m => {
      // 每个原始词至少命中一次（同义扩展取最好）
      let sum = 0, ok = true;
      S.q.trim().split(/\s+/).filter(Boolean).forEach(term => {
        const alt = [norm(term)];
        for (const k in BRANDS) if ((BRANDS[k].alias || []).some(a => norm(a) === norm(term)) || norm(k) === norm(term)) alt.push(norm(k));
        if (TYPE_ALIAS[term])  alt.push(norm(TYPE_ALIAS[term]));
        if (COLOR_ALIAS[term]) alt.push(norm(COLOR_ALIAS[term]));
        if (FUNC_ALIAS[term])  alt.push(norm(FUNC_ALIAS[term]));
        if (LEVEL_ALIAS[term]) alt.push(norm(LEVEL_ALIAS[term]));
        let best = -1;
        alt.forEach(a => { const s = scoreModel(m, [a]); if (s >= 0 && (best < 0 || s < best)) best = s; });
        if (best < 0) ok = false; else sum += best;
      });
      if (ok) scored.push({ m, s: sum });
    });
    list = scored.sort((a, b) => a.s - b.s || b.m.year - a.m.year).map(x => x.m);
  }

  if (S.brand !== 'all')  list = list.filter(m => m.brand === S.brand);
  if (S.type !== 'all')   list = list.filter(m => m.type === S.type);
  if (S.color !== 'all')  list = list.filter(m => m.color === S.color);
  if (S.func !== 'all')   list = list.filter(m => m.func === S.func);
  if (S.level !== 'all')  list = list.filter(m => m.level === S.level);
  if (S.era !== 'all') {
    const [a, b] = S.era.split('-').map(Number);
    list = list.filter(m => m.year >= 2000 + a && m.year <= 2000 + b);
  }
  if (S.onlyLocal) list = list.filter(m => m.local);
  if (S.direct === 'exact')  list = list.filter(m => isExact(m));
  if (S.direct === 'search') list = list.filter(m => !isExact(m));
  // "全部"时让精确直达排在前面（稳定排序，保留二级 sort 规则）
  if (S.direct === 'all') list = list.slice().sort((a, b) => (isExact(b) ? 1 : 0) - (isExact(a) ? 1 : 0));

  if (S.sort === 'year-desc') list.sort((a, b) => b.year - a.year || a.model.localeCompare(b.model));
  else if (S.sort === 'year-asc') list.sort((a, b) => a.year - b.year || a.model.localeCompare(b.model));
  else if (S.sort === 'brand') list.sort((a, b) => a.brand.localeCompare(b.brand) || a.model.localeCompare(b.model));
  else if (S.sort === 'model') list.sort((a, b) => a.model.localeCompare(b.model));

  S.view = list;
  S.page = 1;
  return list;
}

/* ────────── 插画（按机型形态程序化生成） ────────── */
function palette() {
  const dark = document.documentElement.dataset.theme === 'dark';
  return dark
    ? { sh:'#313139', shd:'#232329', pn:'#52525c', pp:'#D6D6DC', ac:'#5A5A66' }
    : { sh:'#DFDFE4', shd:'#C6C6CE', pn:'#9A9AA4', pp:'#FFFFFF', ac:'#B0B0BA' };
}

function svgWrap(inner, p) {
  return `<svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="134" rx="62" ry="7" fill="${p.ac}" opacity=".22"/>${inner}</svg>`;
}
function illLaser(m, p, isColor) {
  return svgWrap(`
    <rect x="44" y="46" width="112" height="78" rx="9" fill="${p.sh}"/>
    <rect x="44" y="46" width="112" height="26" rx="9" fill="${p.shd}"/>
    <rect x="56" y="56" width="72" height="7" rx="3.5" fill="${p.pn}" opacity=".55"/>
    <rect x="58" y="38" width="62" height="12" rx="2" fill="${p.pp}" stroke="${p.ac}"/>
    <rect x="64" y="30" width="50" height="10" rx="2" fill="${p.pp}" stroke="${p.ac}"/>
    <path d="M56 124h88l6 12H50z" fill="${p.shd}"/>
    <rect x="140" y="80" width="10" height="6" rx="3" fill="${m.bc}" opacity=".9"/>
    ${isColor ? `<g><circle cx="60" cy="98" r="4" fill="#E4002B"/><circle cx="72" cy="98" r="4" fill="#F5A800"/><circle cx="84" cy="98" r="4" fill="#00A0DF"/><circle cx="96" cy="98" r="4" fill="#3A3A3A"/></g>`
              : `<rect x="58" y="94" width="52" height="8" rx="4" fill="${p.pn}" opacity=".4"/>`}
  `, p);
}
function illMFP(m, p, isColor) {
  return svgWrap(`
    <rect x="38" y="58" width="124" height="66" rx="9" fill="${p.sh}"/>
    <rect x="46" y="40" width="108" height="20" rx="6" fill="${p.shd}"/>
    <rect x="54" y="45" width="62" height="10" rx="2" fill="${p.pp}" stroke="${p.ac}"/>
    <rect x="122" y="43" width="24" height="14" rx="3" fill="${p.pn}" opacity=".5"/>
    <rect x="52" y="22" width="76" height="20" rx="5" fill="${p.shd}"/>
    <rect x="62" y="16" width="44" height="8" rx="2" fill="${p.pp}" stroke="${p.ac}"/>
    <rect x="150" y="66" width="12" height="26" rx="4" fill="${m.bc}" opacity=".85"/>
    <path d="M50 124h100l6 12H44z" fill="${p.shd}"/>
    ${isColor ? `<g><circle cx="60" cy="98" r="3.6" fill="#E4002B"/><circle cx="71" cy="98" r="3.6" fill="#F5A800"/><circle cx="82" cy="98" r="3.6" fill="#00A0DF"/><circle cx="93" cy="98" r="3.6" fill="#3A3A3A"/></g>`
              : `<rect x="58" y="94" width="46" height="8" rx="4" fill="${p.pn}" opacity=".4"/>`}
  `, p);
}
function illCopier(m, p) {
  return svgWrap(`
    <rect x="30" y="62" width="104" height="30" rx="6" fill="${p.sh}"/>
    <rect x="134" y="52" width="42" height="60" rx="6" fill="${p.shd}"/>
    <rect x="40" y="34" width="86" height="24" rx="5" fill="${p.shd}"/>
    <rect x="46" y="26" width="62" height="10" rx="3" fill="${p.pp}" stroke="${p.ac}"/>
    <rect x="118" y="28" width="30" height="10" rx="2" fill="${p.pp}" stroke="${p.ac}"/>
    <rect x="150" y="58" width="22" height="16" rx="3" fill="${m.bc}" opacity=".9"/>
    <rect x="36" y="96" width="120" height="14" rx="4" fill="${p.pp}" stroke="${p.ac}"/>
    <rect x="40" y="110" width="112" height="20" rx="5" fill="${p.sh}"/>
    <rect x="46" y="114" width="60" height="7" rx="3" fill="${p.pn}" opacity=".45"/>
    <rect x="34" y="130" width="132" height="6" rx="3" fill="${p.shd}"/>
  `, p);
}
function illInkjet(m, p) {
  return svgWrap(`
    <path d="M44 74h112a6 6 0 0 1 6 6v34a10 10 0 0 1-10 10H48a10 10 0 0 1-10-10V80a6 6 0 0 1 6-6z" fill="${p.sh}"/>
    <path d="M50 54h96a8 8 0 0 1 8 8v12H42V62a8 8 0 0 1 8-8z" fill="${p.shd}"/>
    <rect x="60" y="42" width="60" height="14" rx="2" fill="${p.pp}" stroke="${p.ac}"/>
    <path d="M56 124h88l10 12H46z" fill="${p.shd}"/>
    <rect x="140" y="86" width="12" height="7" rx="3.5" fill="${m.bc}"/>
    <rect x="58" y="96" width="34" height="10" rx="5" fill="${p.pn}" opacity=".45"/>
  `, p);
}
function illDot(m, p) {
  return svgWrap(`
    <rect x="40" y="70" width="120" height="50" rx="7" fill="${p.sh}"/>
    <rect x="40" y="70" width="120" height="14" rx="7" fill="${p.shd}"/>
    <rect x="56" y="34" width="88" height="42" rx="3" fill="${p.pp}" stroke="${p.ac}"/>
    <rect x="56" y="34" width="88" height="7" rx="2" fill="${p.pn}" opacity=".3"/>
    <rect x="56" y="60" width="88" height="6" rx="2" fill="${p.pn}" opacity=".18"/>
    <rect x="46" y="90" width="108" height="9" rx="4" fill="${p.pn}" opacity=".45"/>
    <circle cx="150" cy="108" r="7" fill="${p.ac}"/>
    <circle cx="150" cy="108" r="2.5" fill="${p.shd}"/>
    <rect x="34" y="120" width="132" height="8" rx="4" fill="${p.shd}"/>
  `, p);
}
function illThermal(m, p) {
  return svgWrap(`
    <rect x="48" y="52" width="104" height="72" rx="12" fill="${p.sh}"/>
    <path d="M48 74h104v38a12 12 0 0 1-12 12H60a12 12 0 0 1-12-12V74z" fill="${p.shd}"/>
    <rect x="62" y="60" width="76" height="12" rx="6" fill="${p.pp}" stroke="${p.ac}"/>
    <rect x="70" y="90" width="60" height="22" rx="3" fill="${p.pp}" stroke="${p.ac}"/>
    <rect x="76" y="96" width="30" height="4" rx="2" fill="${p.pn}" opacity=".5"/>
    <rect x="76" y="104" width="44" height="4" rx="2" fill="${p.pn}" opacity=".35"/>
    <circle cx="138" cy="66" r="4" fill="${m.bc}"/>
  `, p);
}
function illWide(m, p) {
  return svgWrap(`
    <rect x="34" y="18" width="132" height="40" rx="8" fill="${p.sh}"/>
    <circle cx="100" cy="38" r="15" fill="${p.pn}" opacity=".35"/>
    <circle cx="100" cy="38" r="6" fill="${p.shd}"/>
    <rect x="150" y="26" width="14" height="24" rx="4" fill="${m.bc}" opacity=".9"/>
    <rect x="52" y="58" width="96" height="18" rx="4" fill="${p.shd}"/>
    <rect x="86" y="76" width="28" height="46" fill="${p.sh}"/>
    <rect x="60" y="122" width="80" height="8" rx="4" fill="${p.shd}"/>
    <path d="M64 58h72l6 18H58z" fill="${p.pp}" stroke="${p.ac}"/>
    <rect x="34" y="24" width="132" height="6" rx="3" fill="${p.shd}"/>
  `, p);
}
function illustration(m) {
  const p = palette();
  const isColor = m.color === 'color';
  if (m.type === 'wideformat') return illWide(m, p);
  if (m.type === 'dotmatrix')  return illDot(m, p);
  if (m.type === 'thermal')    return illThermal(m, p);
  if (m.type === 'inkjet')     return illInkjet(m, p);
  if (m.func === 'mfp')        return (m.level === 'enterprise' ? illCopier(m, p) : illMFP(m, p, isColor));
  return illLaser(m, p, isColor);
}

/* ────────── 渲染 ────────── */
const $ = s => document.querySelector(s);
const grid = $('#grid'), empty = $('#empty'), more = $('#loadMore');

function esc(s){ return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function highlight(text) {
  if (!S.q) return esc(text);
  const terms = S.q.trim().split(/\s+/).filter(t => t.length > 1);
  if (!terms.length) return esc(text);
  const pattern = new RegExp('(' + terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'gi');
  return String(text).split(pattern)
    .map((part, index) => index % 2 ? `<mark>${esc(part)}</mark>` : esc(part))
    .join('');
}

function cardHTML(m) {
  const ready = !!m.local;
  return `<article class="card" data-id="${m.id}" data-url="${esc(modelUrl(m))}" title="点击打开 ${esc(m.brand)} ${esc(m.model)} 驱动页" tabindex="0">
    <div class="card-ill">
      <span class="tag-brand"><i style="--bm:${m.bc}"></i>${esc(m.brand)}</span>
      ${ready ? `<span class="tag-local"><i></i>已入库</span>` : ''}
      ${illustration(m)}
    </div>
    <div class="card-body">
      ${isExact(m) ? `<span class="tag-exact"><i></i>精确直达</span>` : ''}
      <h3 class="card-model">${highlight(m.model)}</h3>
      ${m.seriesLabel ? `<p class="card-series">${esc(m.seriesLabel)}</p>` : ''}
      <div class="card-tags">
        <span class="mtag">${TYPE_LABEL[m.type] || m.type}</span>
        <span class="mtag">${COLOR_LABEL[m.color]}</span>
        <span class="mtag">${FUNC_LABEL[m.func]}</span>
        <span class="mtag lv">${LEVEL_LABEL[m.level]}</span>
      </div>
      <div class="card-foot">
        <span class="card-year">${m.year}</span>
        <button class="mini-btn" data-act="copy" data-id="${m.id}" title="复制型号">
          <svg viewBox="0 0 24 24" class="ic"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h8"/></svg>
        </button>
        <button class="dl ${ready ? 'ready' : ''}" data-act="${ready ? 'dl' : 'official'}" data-id="${m.id}">
          ${ready
            ? `<svg viewBox="0 0 24 24" class="ic"><path d="M12 4v11m0 0 4-4m-4 4-4-4"/><path d="M5 19h14"/></svg><span>下载</span>`
            : `<svg viewBox="0 0 24 24" class="ic"><path d="M14 4h6v6h-6z"/><path d="M18 12v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"/></svg><span>驱动页</span>`}
        </button>
      </div>
    </div>
  </article>`;
}

function render() {
  const list = S.view;
  const slice = list.slice(0, S.page * S.size);

  const exactTotal = list.filter(m => isExact(m)).length;
  const searchTotal = list.length - exactTotal;

  $('#resultCount').innerHTML = list.length
    ? `共 <b>${list.length}</b> 款机型${S.q ? ` · 匹配 “<b>${esc(S.q)}</b>”` : ''}`
    : '未找到匹配机型';

  if (!list.length) {
    grid.innerHTML = '';
    grid.hidden = true; more.hidden = true; empty.hidden = false;
    empty.innerHTML = `<h3>没搜到 “${esc(S.q)}”</h3>
      <p>试试只输型号数字（如 <code>1020</code>）、去掉品牌，或确认型号写法。也可以点下方清除全部筛选。</p>
      <button class="btn btn-soft" id="emptyReset">清除筛选条件</button>`;
    const b = $('#emptyReset'); if (b) b.onclick = resetAll;
    return;
  }
  empty.hidden = true; grid.hidden = false;

  // 分两组渲染：精确直达在前，搜索直达在后，各带分类标题
  const exactSlice = slice.filter(m => isExact(m));
  const searchSlice = slice.filter(m => !isExact(m));
  const head = (cls, dot, title, count) =>
    `<div class="group-head ${cls}"><i class="gh-dot" style="--gh:${dot}"></i><h2>${title}</h2><span class="gh-count">${count} 款</span></div>`;
  let html = '';
  if (exactSlice.length) {
    html += head('gh-exact', 'var(--accent)', '精确直达 · 官方型号页', exactTotal);
    html += `<div class="grid">${exactSlice.map(cardHTML).join('')}</div>`;
  }
  if (searchSlice.length) {
    html += head('gh-search', 'var(--line-2)', '搜索直达 · 型号搜索页', searchTotal);
    html += `<div class="grid">${searchSlice.map(cardHTML).join('')}</div>`;
  }
  grid.innerHTML = html;
  more.hidden = slice.length >= list.length;
  syncHero();
  updateStat();
}

function syncHero() {
  const busy = !!S.q || S.brand !== 'all' || S.type !== 'all' || S.color !== 'all' ||
               S.func !== 'all' || S.level !== 'all' || S.era !== 'all' || S.direct !== 'all' || S.onlyLocal;
  $('#hero').classList.toggle('compact', busy || heroCompactByScroll);
  $('#resetFilters').hidden = !busy;
}

/* 滚动状态由 IntersectionObserver 驱动（避免 scrollY 阈值附近反复跨越造成的 hero 闪烁） */
let heroCompactByScroll = false;

/* ────────── 筛选控件 ────────── */
function buildFilters() {
  const counts = MODELS.reduce((a, m) => (a[m.brand] = (a[m.brand] || 0) + 1, a), {});
  $('#brandList').innerHTML = BRAND_ORDER.map(b => {
    const bc = (BRANDS[b] || {}).c || '#71717A';
    return `<button class="brow" data-brand="${esc(b)}" style="--bm:${bc}">
      <i class="dot"></i><span class="nm">${esc(b)}</span><span class="ct">${counts[b]}</span></button>`;
  }).join('');

  const mk = (el, items, key) => {
    $(el).innerHTML = items.map(([v, l]) =>
      `<button class="fchip" data-k="${key}" data-v="${v}">${l}</button>`).join('');
  };
  mk('#typeList',  [['all','全部'], ...Object.keys(TYPE_LABEL).map(k => [k, TYPE_LABEL[k]])], 'type');
  mk('#colorList', [['all','全部'], ...Object.keys(COLOR_LABEL).map(k => [k, COLOR_LABEL[k]])], 'color');
  mk('#funcList',  [['all','全部'], ...Object.keys(FUNC_LABEL).map(k => [k, FUNC_LABEL[k]])], 'func');
  mk('#levelList', [['all','全部'], ...Object.keys(LEVEL_LABEL).map(k => [k, LEVEL_LABEL[k]])], 'level');
  mk('#eraList',   ERAS.map(e => [e.id, e.label]), 'era');
  mk('#directList', [
    ['all', '全部'],
    ['exact', `精确直达 ${MODELS.filter(m => isExact(m)).length}`],
    ['search', `搜索直达 ${MODELS.length - MODELS.filter(m => isExact(m)).length}`]
  ], 'direct');

  const q = ['LaserJet 1020', 'PIXMA G3020', 'L3251', 'M227', '惠普 激光', '施乐 一体机'];
  $('#quickChips').innerHTML = `<span class="quick-label">试试</span>` +
    q.map(t => `<button class="qchip" data-term="${esc(t)}">${esc(t)}</button>`).join('');
}

function paintFilters() {
  document.querySelectorAll('.brow').forEach(b =>
    b.classList.toggle('on', b.dataset.brand === S.brand));
  document.querySelectorAll('.fchip').forEach(c =>
    c.classList.toggle('on', S[c.dataset.k] === c.dataset.v));
}


/* ────────── 动作：下载 / 官方页 ────────── */
function doDownload(id) {
  const m = MODELS.find(x => x.id === id); if (!m) return;
  const f = m.local;
  if (!f) { doOfficial(id); return; }
  const btn = document.querySelector(`.dl[data-id="${id}"]`);
  if (btn) {
    btn.classList.add('is-loading');
    btn.innerHTML = `<svg viewBox="0 0 24 24" class="ic spin"><path d="M12 4a8 8 0 1 1-8 8"/><circle cx="12" cy="4" r="1.5" fill="currentColor"/></svg><span>下载中…</span>`;
  }
  setTimeout(() => {
    try {
      const url = f.file ? URL.createObjectURL(f.file) : f.href;
      const a = document.createElement('a');
      a.href = url; a.download = f.name || (m.model + '-driver');
      document.body.appendChild(a); a.click(); a.remove();
      if (f.file) setTimeout(() => URL.revokeObjectURL(url), 60000);
      toast(`✓ 已开始下载：${m.model}`);
      if (btn) {
        btn.classList.remove('is-loading');
        btn.classList.add('is-done');
        btn.innerHTML = `<svg viewBox="0 0 24 24" class="ic"><path d="M5 12l4 4 10-10"/></svg><span>已下载</span>`;
        setTimeout(() => { btn.classList.remove('is-done'); render(); }, 2200);
      }
    } catch (e) {
      toast('本地下载被拦截，正在打开官方页');
      doOfficial(id);
      if (btn) { btn.classList.remove('is-loading'); render(); }
    }
  }, 350);
}
function doOfficial(id) {
  const m = MODELS.find(x => x.id === id); if (!m) return;
  const u = modelUrl(m);
  if (u) { window.open(u, '_blank', 'noopener'); toast(`已打开 ${m.brand} ${m.model} 驱动页`); }
  else toast('该品牌暂未收录官方地址');
}

/* ────────── Toast ────────── */
let toastT;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.hidden = false;
  clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, 2600);
}

/* ────────── 驱动库面板 ────────── */
function openLib(){ renderLib(); $('#libDrawer').hidden = false; $('#libScrim').hidden = false; }
function closeLib(){ $('#libDrawer').hidden = true; $('#libScrim').hidden = true; }
function renderLib() {
  $('#libSummary').innerHTML = LIB.files.length
    ? `已索引 <b>${LIB.files.length}</b> 个文件，自动匹配到 <b>${LIB.matched}</b> 款机型。`
    : (LIB.source ? '没有匹配到可识别的安装包。' : '');
  $('#libList').innerHTML = LIB.files.slice(0, 300).map(f => {
    const n = norm(f.name.replace(/\.(exe|zip|rar|7z|msi|cab|dmg|pkg)$/i, ''));
    const hit = MODELS.find(m => n.includes(norm(m.brand + m.model)) || n.includes(norm(m.model)));
    return `<div class="lib-item ${hit ? 'ok' : ''}">
      <span class="li-l">
        <span class="li-t">${esc(f.name)}</span>
        <span class="li-s">${hit ? esc(hit.brand + ' ' + hit.model) : '未匹配 · 建议文件名包含型号'} · ${(f.size / 1048576).toFixed(1)} MB</span>
      </span>
      <button class="li-a" data-file="${esc(f.name)}">下载</button>
    </div>`;
  }).join('');
  $('#libCount').textContent = LIB.matched;
  $('#libCount').classList.toggle('live', LIB.matched > 0);
  updateStat();
}
function updateStat() {
  $('#statModels').textContent = MODELS.length;
  $('#statBrands').textContent = BRAND_ORDER.length;
  $('#statLocal').textContent = LIB.matched;
  const exportBtn = $('#btnExportList');
  if (exportBtn) exportBtn.title = `导出全部 ${MODELS.length} 款机型的官方驱动页清单（CSV）`;
}

/* ────────── 事件 ────────── */
function resetAll() {
  S.q = ''; $('#q').value = ''; $('#clearQ').hidden = true;
  S.brand = S.type = S.color = S.func = S.level = S.era = 'all';
  S.direct = 'all';
  S.onlyLocal = false; $('#onlyLocal').checked = false;
  S.sort = 'relevance'; $('#sortBy').value = 'relevance';
  paintFilters(); compute(); render();
}

function boot() {
  buildFilters(); paintFilters();
  ingestStatic();
  compute(); render(); renderLib();

  let t;
  $('#q').addEventListener('input', e => {
    S.q = e.target.value;
    $('#clearQ').hidden = !S.q;
    clearTimeout(t); t = setTimeout(() => { compute(); render(); }, 110);
  });
  $('#clearQ').onclick = () => { $('#q').value = ''; S.q = ''; $('#clearQ').hidden = true; compute(); render(); $('#q').focus(); };

  $('#brandList').addEventListener('click', e => {
    const b = e.target.closest('.brow'); if (!b) return;
    S.brand = S.brand === b.dataset.brand ? 'all' : b.dataset.brand;
    paintFilters(); compute(); render();
  });
  document.querySelectorAll('.chipset').forEach(set => {
    set.addEventListener('click', e => {
      const c = e.target.closest('.fchip'); if (!c) return;
      const k = c.dataset.k;
      S[k] = S[k] === c.dataset.v ? 'all' : c.dataset.v;
      paintFilters(); compute(); render();
    });
  });
  $('#onlyLocal').addEventListener('change', e => { S.onlyLocal = e.target.checked; compute(); render(); });
  $('#sortBy').addEventListener('change', e => { S.sort = e.target.value; compute(); render(); });
  $('#resetFilters').onclick = resetAll;
  $('#btnMore').onclick = () => { S.page++; render(); };

  $('#quickChips').addEventListener('click', e => {
    const c = e.target.closest('.qchip'); if (!c) return;
    $('#q').value = c.dataset.term; S.q = c.dataset.term; $('#clearQ').hidden = false;
    compute(); render(); $('#q').focus();
  });

  grid.addEventListener('click', e => {
    const btn = e.target.closest('[data-act]');
    const card = e.target.closest('.card');
    if (btn) {
      e.stopPropagation();
      const a = btn.dataset.act, id = +btn.dataset.id;
      if (a === 'dl')      doDownload(id);
      else if (a === 'copy') {
        const m = MODELS.find(x => x.id === id);
        navigator.clipboard?.writeText(m.model).then(() => {
          toast('✓ 已复制型号：' + m.model);
          btn.classList.add('is-done');
          setTimeout(() => btn.classList.remove('is-done'), 1500);
        }, () => toast('复制失败，请手动选择'));
      }
      else                  doOfficial(id);
      return;
    }
    if (card) doOfficial(+card.dataset.id);
  });
  grid.addEventListener('keydown', e => {
    if (e.key === 'Enter') { const c = e.target.closest('.card'); if (c) doOfficial(+c.dataset.id); }
  });

  $('#btnLibrary').onclick = openLib;
  $('#libScrim').addEventListener('click', closeLib);
  $('#libDrawer').addEventListener('click', e => {
    if (e.target.closest('[data-close-lib]')) { closeLib(); return; }
    if (e.target.id === 'libDrawer') { closeLib(); return; }
  });
  $('#btnPickDir').onclick = () => $('#dirInput').click();
  $('#btnExportList').onclick = () => {
    const header = ['品牌', '系列', '型号', '类型', '色彩', '功能', '定位', '年份', '官方驱动页'];
    const rows = MODELS.map(m => [
      m.brand, m.seriesLabel, m.model, TYPE_LABEL[m.type] || m.type,
      COLOR_LABEL[m.color], FUNC_LABEL[m.func], LEVEL_LABEL[m.level], m.year, modelUrl(m)
    ]);
    const csv = '\ufeff' + header.join(',') + '\n' +
      rows.map(r => r.map(c => '"' + String(c).replace(/"/g, '""') + '"').join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = '全部型号驱动清单.csv';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 30000);
    toast(`✓ 已导出 ${MODELS.length} 款型号清单`);
  };
  $('#dirInput').addEventListener('change', e => {
    ingestRuntime(e.target.files); renderLib(); compute(); render();
    toast(`已导入 ${LIB.files.length} 个文件，匹配 ${LIB.matched} 款机型`);
  });
  $('#libList').addEventListener('click', e => {
    const b = e.target.closest('[data-file]'); if (!b) return;
    const f = LIB.files.find(x => x.name === b.dataset.file); if (!f) return;
    try {
      const url = f.file ? URL.createObjectURL(f.file) : f.href;
      const a = document.createElement('a'); a.href = url; a.download = f.name;
      document.body.appendChild(a); a.click(); a.remove();
      if (f.file) setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch (err) { toast('下载失败'); }
  });

  $('#btnReload').onclick = () => { toast('正在重新加载…'); setTimeout(() => location.reload(), 240); };

  $('#btnTheme').onclick = () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('dh-theme', next); } catch (e) {}
    render();
  };

  window.addEventListener('scroll', () => {
    document.body.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // 观察 sentinel：滚出视口后 hero 切 compact（IntersectionObserver 单点切换，无 scrollY 阈值抖动）
  const sentinel = $('#heroSentinel');
  if (sentinel && 'IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => {
      heroCompactByScroll = !e.isIntersecting;
      syncHero();
    }, { threshold: 0 }).observe(sentinel);
  }

  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== $('#q')) { e.preventDefault(); $('#q').focus(); }
    if (e.key === 'Escape') { closeLib(); }
  });

  try {
    const th = localStorage.getItem('dh-theme');
    if (th) document.documentElement.dataset.theme = th;
  } catch (e) {}
}

document.addEventListener('DOMContentLoaded', boot);
})();
