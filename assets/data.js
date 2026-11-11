/* ============================================================
   DrivePage · 打印机机型数据集
   ------------------------------------------------------------
   格式: 品牌|型号|系列|类型|色彩|功能|年份|级别
     类型 type : laser / inkjet / dotmatrix / thermal / wideformat / solidink
     色彩 color: mono / color
     功能 func : print(单打印) / mfp(多功能一体)
     级别 level: home(消费级) / office(商用级) / enterprise(企业级·生产型)
   说明: 年份为上市/主流在售年份，用于区间筛选，非精确发布日。
   ============================================================ */
window.RAW_DATA = `
HP|LaserJet 1000|LaserJet|laser|mono|print|2001|office
HP|LaserJet 1005|LaserJet|laser|mono|print|2002|office
HP|LaserJet 1010|LaserJet|laser|mono|print|2003|office
HP|LaserJet 1012|LaserJet|laser|mono|print|2004|office
HP|LaserJet 1015|LaserJet|laser|mono|print|2004|office
HP|LaserJet 1018|LaserJet|laser|mono|print|2007|office
HP|LaserJet 1020|LaserJet|laser|mono|print|2004|office
HP|LaserJet 1022|LaserJet|laser|mono|print|2005|office
HP|LaserJet 1100|LaserJet|laser|mono|print|2000|office
HP|LaserJet 1150|LaserJet|laser|mono|print|2001|office
HP|LaserJet 1160|LaserJet|laser|mono|print|2002|office
HP|LaserJet 1200|LaserJet|laser|mono|print|2000|office
HP|LaserJet 1300|LaserJet|laser|mono|print|2002|office
HP|LaserJet 1320|LaserJet|laser|mono|print|2004|office
HP|LaserJet 2100|LaserJet|laser|mono|print|2000|office
HP|LaserJet 2200|LaserJet|laser|mono|print|2002|office
HP|LaserJet 2300|LaserJet|laser|mono|print|2003|office
HP|LaserJet 2400|LaserJet|laser|mono|print|2005|office
HP|LaserJet 2420|LaserJet|laser|mono|print|2006|office
HP|LaserJet 2430|LaserJet|laser|mono|print|2007|office
HP|LaserJet 3015|LaserJet|laser|mono|mfp|2003|office
HP|LaserJet 3020|LaserJet|laser|mono|mfp|2004|office
HP|LaserJet 3030|LaserJet|laser|mono|mfp|2005|office
HP|LaserJet 3050|LaserJet|laser|mono|mfp|2006|office
HP|LaserJet 3052|LaserJet|laser|mono|mfp|2006|office
HP|LaserJet 3055|LaserJet|laser|mono|mfp|2007|office
HP|LaserJet 3380|LaserJet|laser|mono|mfp|2005|office
HP|LaserJet 3390|LaserJet|laser|mono|mfp|2004|office
HP|LaserJet 4240|LaserJet|laser|mono|print|2006|enterprise
HP|LaserJet 4250|LaserJet|laser|mono|print|2006|enterprise
HP|LaserJet 4345|LaserJet|laser|mono|mfp|2006|enterprise
HP|LaserJet 4350|LaserJet|laser|mono|print|2006|enterprise
HP|LaserJet 5200|LaserJet|laser|mono|print|2006|enterprise
HP|LaserJet 9040|LaserJet|laser|mono|print|2005|enterprise
HP|LaserJet 9050|LaserJet|laser|mono|print|2005|enterprise
HP|LaserJet P1005|LaserJet|laser|mono|print|2008|home
HP|LaserJet P1006|LaserJet|laser|mono|print|2008|home
HP|LaserJet P1007|LaserJet|laser|mono|print|2009|home
HP|LaserJet P1008|LaserJet|laser|mono|print|2009|home
HP|LaserJet P1102|LaserJet|laser|mono|print|2011|home
HP|LaserJet P1102w|LaserJet|laser|mono|print|2011|home
HP|LaserJet P1108|LaserJet|laser|mono|print|2010|home
HP|LaserJet P1505|LaserJet|laser|mono|print|2008|office
HP|LaserJet P1515n|LaserJet|laser|mono|print|2009|office
HP|LaserJet P1566|LaserJet|laser|mono|print|2010|office
HP|LaserJet P1606dn|LaserJet|laser|mono|print|2010|office
HP|LaserJet P2014|LaserJet|laser|mono|print|2008|office
HP|LaserJet P2015|LaserJet|laser|mono|print|2007|office
HP|LaserJet P2035|LaserJet|laser|mono|print|2009|office
HP|LaserJet P2055d|LaserJet|laser|mono|print|2009|office
HP|LaserJet P2055dn|LaserJet|laser|mono|print|2009|office
HP|LaserJet P3015|LaserJet|laser|mono|print|2009|enterprise
HP|LaserJet P4014|LaserJet|laser|mono|print|2009|enterprise
HP|LaserJet P4015|LaserJet|laser|mono|print|2009|enterprise
HP|LaserJet P4515|LaserJet|laser|mono|print|2009|enterprise
HP|LaserJet M1005|LaserJet|laser|mono|mfp|2007|office
HP|LaserJet M1120|LaserJet|laser|mono|mfp|2007|office
HP|LaserJet M1136|LaserJet|laser|mono|mfp|2011|office
HP|LaserJet M1213nf|LaserJet Pro|laser|mono|mfp|2011|office
HP|LaserJet M1216nfh|LaserJet Pro|laser|mono|mfp|2011|office
HP|LaserJet M125a|LaserJet Pro|laser|mono|mfp|2014|home
HP|LaserJet M125nw|LaserJet Pro|laser|mono|mfp|2014|home
HP|LaserJet M126a|LaserJet Pro|laser|mono|mfp|2014|home
HP|LaserJet M126nw|LaserJet Pro|laser|mono|mfp|2014|home
HP|LaserJet M127fn|LaserJet Pro|laser|mono|mfp|2015|home
HP|LaserJet M127fw|LaserJet Pro|laser|mono|mfp|2015|home
HP|LaserJet M128fn|LaserJet Pro|laser|mono|mfp|2016|home
HP|LaserJet M128fw|LaserJet Pro|laser|mono|mfp|2016|home
HP|LaserJet M132a|LaserJet Pro|laser|mono|mfp|2017|home
HP|LaserJet M132fn|LaserJet Pro|laser|mono|mfp|2017|office
HP|LaserJet M132fw|LaserJet Pro|laser|mono|mfp|2017|office
HP|LaserJet M132nw|LaserJet Pro|laser|mono|mfp|2017|office
HP|LaserJet M134fn|LaserJet Pro|laser|mono|mfp|2018|office
HP|LaserJet M148fdw|LaserJet Pro|laser|mono|mfp|2018|office
HP|LaserJet M1522nf|LaserJet|laser|mono|mfp|2008|office
HP|LaserJet M1536dnf|LaserJet Pro|laser|mono|mfp|2011|office
HP|LaserJet M203dw|LaserJet Pro|laser|mono|print|2018|office
HP|LaserJet M203dn|LaserJet Pro|laser|mono|print|2018|office
HP|LaserJet M206dn|LaserJet Pro|laser|mono|print|2018|office
HP|LaserJet M227fdn|LaserJet Pro|laser|mono|mfp|2018|office
HP|LaserJet M227fdw|LaserJet Pro|laser|mono|mfp|2018|office
HP|LaserJet M227sdn|LaserJet Pro|laser|mono|mfp|2018|office
HP|LaserJet M402dn|LaserJet Pro|laser|mono|print|2016|office
HP|LaserJet M402dw|LaserJet Pro|laser|mono|print|2016|office
HP|LaserJet M403d|LaserJet Pro|laser|mono|print|2016|office
HP|LaserJet M403dn|LaserJet Pro|laser|mono|print|2016|office
HP|LaserJet M403dw|LaserJet Pro|laser|mono|print|2016|office
HP|LaserJet M404dn|LaserJet Pro|laser|mono|print|2018|office
HP|LaserJet M404dw|LaserJet Pro|laser|mono|print|2018|office
HP|LaserJet M405dn|LaserJet Pro|laser|mono|print|2019|office
HP|LaserJet M405dw|LaserJet Pro|laser|mono|print|2019|office
HP|LaserJet M426fdn|LaserJet Pro|laser|mono|mfp|2017|office
HP|LaserJet M426fdw|LaserJet Pro|laser|mono|mfp|2017|office
HP|LaserJet M427fdn|LaserJet Pro|laser|mono|mfp|2018|office
HP|LaserJet M427fdw|LaserJet Pro|laser|mono|mfp|2018|office
HP|LaserJet M501dn|LaserJet Pro|laser|mono|print|2016|enterprise
HP|LaserJet M506dn|LaserJet Pro|laser|mono|print|2015|enterprise
HP|LaserJet M507dn|LaserJet Pro|laser|mono|print|2018|enterprise
HP|LaserJet M604dn|LaserJet Enterprise|laser|mono|print|2014|enterprise
HP|LaserJet M605dn|LaserJet Enterprise|laser|mono|print|2014|enterprise
HP|LaserJet M606dn|LaserJet Enterprise|laser|mono|print|2014|enterprise
HP|LaserJet M607dn|LaserJet Enterprise|laser|mono|print|2017|enterprise
HP|LaserJet M608dn|LaserJet Enterprise|laser|mono|print|2017|enterprise
HP|LaserJet M609dn|LaserJet Enterprise|laser|mono|print|2017|enterprise
HP|LaserJet M701n|LaserJet Pro|laser|mono|print|2017|enterprise
HP|LaserJet M706n|LaserJet Pro|laser|mono|print|2017|enterprise
HP|LaserJet M712dn|LaserJet Enterprise|laser|mono|print|2013|enterprise
HP|LaserJet M725dn|LaserJet Enterprise|laser|mono|mfp|2013|enterprise
HP|LaserJet M806dn|LaserJet Enterprise|laser|mono|print|2013|enterprise
HP|LaserJet M830z|LaserJet Enterprise|laser|mono|mfp|2013|enterprise
HP|LaserJet M4555|LaserJet Enterprise|laser|mono|mfp|2011|enterprise
HP|LaserJet M525|LaserJet Enterprise|laser|mono|mfp|2012|enterprise
HP|LaserJet M601dn|LaserJet Enterprise|laser|mono|print|2011|enterprise
HP|LaserJet M602dn|LaserJet Enterprise|laser|mono|print|2011|enterprise
HP|LaserJet M603dn|LaserJet Enterprise|laser|mono|print|2011|enterprise
HP|LaserJet M3027|LaserJet|laser|mono|mfp|2007|enterprise
HP|LaserJet M3035|LaserJet|laser|mono|mfp|2007|enterprise
HP|LaserJet M4345|LaserJet|laser|mono|mfp|2007|enterprise
HP|LaserJet M5025|LaserJet|laser|mono|mfp|2007|enterprise
HP|LaserJet M5035|LaserJet|laser|mono|mfp|2007|enterprise
HP|LaserJet M9040|LaserJet|laser|mono|mfp|2008|enterprise
HP|LaserJet M9050|LaserJet|laser|mono|mfp|2008|enterprise
HP|LaserJet Pro M454dn|LaserJet Pro|laser|color|print|2018|office
HP|LaserJet Enterprise M406dn|LaserJet Enterprise|laser|mono|print|2020|enterprise
HP|LaserJet Enterprise M407dn|LaserJet Enterprise|laser|mono|print|2020|enterprise
HP|LaserJet Enterprise M430|LaserJet Enterprise|laser|mono|print|2020|enterprise
HP|LaserJet Enterprise M431|LaserJet Enterprise|laser|mono|print|2020|enterprise
HP|LaserJet Enterprise M455|LaserJet Enterprise|laser|mono|print|2022|enterprise
HP|LaserJet Enterprise M480|LaserJet Enterprise|laser|mono|mfp|2022|enterprise
HP|LaserJet Enterprise M634|LaserJet Enterprise|laser|mono|mfp|2019|enterprise
HP|LaserJet Enterprise M635|LaserJet Enterprise|laser|mono|mfp|2019|enterprise
HP|LaserJet Enterprise Flow M527z|LaserJet Enterprise|laser|mono|mfp|2015|enterprise
HP|LaserJet Enterprise Flow M528|LaserJet Enterprise|laser|mono|mfp|2018|enterprise
HP|LaserJet Enterprise Flow M630z|LaserJet Enterprise|laser|mono|mfp|2015|enterprise
HP|LaserJet Enterprise Flow M631z|LaserJet Enterprise|laser|mono|mfp|2017|enterprise
HP|LaserJet Enterprise E50045|LaserJet Enterprise|laser|mono|mfp|2018|enterprise
HP|LaserJet Enterprise E52545|LaserJet Enterprise|laser|mono|mfp|2018|enterprise
HP|LaserJet Enterprise E52645|LaserJet Enterprise|laser|mono|mfp|2018|enterprise
HP|LaserJet Enterprise E62555|LaserJet Enterprise|laser|mono|mfp|2019|enterprise
HP|LaserJet Enterprise E62565|LaserJet Enterprise|laser|mono|mfp|2019|enterprise
HP|LaserJet Enterprise E65050|LaserJet Enterprise|laser|mono|print|2019|enterprise
HP|LaserJet Enterprise E65150|LaserJet Enterprise|laser|mono|print|2019|enterprise
HP|LaserJet Enterprise E67550|LaserJet Enterprise|laser|mono|mfp|2020|enterprise
HP|LaserJet Enterprise E72425|LaserJet Enterprise|laser|mono|mfp|2021|enterprise
HP|LaserJet Enterprise E72430|LaserJet Enterprise|laser|mono|print|2021|enterprise
HP|LaserJet Enterprise E72525|LaserJet Enterprise|laser|mono|mfp|2021|enterprise
HP|LaserJet Enterprise E73025|LaserJet Enterprise|laser|mono|mfp|2021|enterprise
HP|LaserJet Enterprise E77622|LaserJet Enterprise|laser|mono|mfp|2021|enterprise
HP|LaserJet Enterprise E77630|LaserJet Enterprise|laser|mono|mfp|2021|enterprise
HP|LaserJet Enterprise E77825|LaserJet Enterprise|laser|mono|mfp|2021|enterprise
HP|LaserJet Enterprise E77830|LaserJet Enterprise|laser|mono|mfp|2021|enterprise
HP|Color LaserJet 1500|Color LaserJet|laser|color|print|2002|office
HP|Color LaserJet 2500|Color LaserJet|laser|color|print|2003|office
HP|Color LaserJet 2550|Color LaserJet|laser|color|print|2004|office
HP|Color LaserJet 2600n|Color LaserJet|laser|color|print|2006|office
HP|Color LaserJet 2605dn|Color LaserJet|laser|color|print|2007|office
HP|Color LaserJet 2700n|Color LaserJet|laser|color|print|2007|office
HP|Color LaserJet 2820|Color LaserJet|laser|color|mfp|2006|office
HP|Color LaserJet 2840|Color LaserJet|laser|color|mfp|2006|office
HP|Color LaserJet 3500|Color LaserJet|laser|color|print|2004|office
HP|Color LaserJet 3600|Color LaserJet|laser|color|print|2006|office
HP|Color LaserJet 3800|Color LaserJet|laser|color|print|2007|office
HP|Color LaserJet 4500|Color LaserJet|laser|color|print|2000|enterprise
HP|Color LaserJet 4550|Color LaserJet|laser|color|print|2001|enterprise
HP|Color LaserJet 4600|Color LaserJet|laser|color|print|2002|enterprise
HP|Color LaserJet 4650|Color LaserJet|laser|color|print|2003|enterprise
HP|Color LaserJet 4700|Color LaserJet|laser|color|print|2004|enterprise
HP|Color LaserJet 5500|Color LaserJet|laser|color|print|2003|enterprise
HP|Color LaserJet 5550|Color LaserJet|laser|color|print|2004|enterprise
HP|Color LaserJet 9500|Color LaserJet|laser|color|print|2004|enterprise
HP|Color LaserJet CP1025|Color LaserJet|laser|color|print|2010|home
HP|Color LaserJet CP1215|Color LaserJet|laser|color|print|2008|home
HP|Color LaserJet CP1515n|Color LaserJet|laser|color|print|2008|office
HP|Color LaserJet CP1518ni|Color LaserJet|laser|color|print|2009|office
HP|Color LaserJet CP1525nw|Color LaserJet|laser|color|print|2010|office
HP|Color LaserJet CP2025dn|Color LaserJet|laser|color|print|2009|office
HP|Color LaserJet CP3525dn|Color LaserJet|laser|color|print|2009|office
HP|Color LaserJet CP4025dn|Color LaserJet|laser|color|print|2010|enterprise
HP|Color LaserJet CP4525dn|Color LaserJet|laser|color|print|2010|enterprise
HP|Color LaserJet CP5225dn|Color LaserJet|laser|color|print|2011|enterprise
HP|Color LaserJet CP5525dn|Color LaserJet|laser|color|print|2011|enterprise
HP|Color LaserJet M252n|Color LaserJet Pro|laser|color|print|2015|office
HP|Color LaserJet M252dw|Color LaserJet Pro|laser|color|print|2015|office
HP|Color LaserJet M254dw|Color LaserJet Pro|laser|color|print|2018|office
HP|Color LaserJet M255dw|Color LaserJet Pro|laser|color|print|2019|office
HP|Color LaserJet M276nw|Color LaserJet Pro|laser|color|mfp|2015|office
HP|Color LaserJet M277dw|Color LaserJet Pro|laser|color|mfp|2015|office
HP|Color LaserJet M281fdw|Color LaserJet Pro|laser|color|mfp|2018|office
HP|Color LaserJet M351a|Color LaserJet Pro|laser|color|print|2012|office
HP|Color LaserJet M451dn|Color LaserJet Pro|laser|color|print|2012|office
HP|Color LaserJet M451dw|Color LaserJet Pro|laser|color|print|2012|office
HP|Color LaserJet M452dn|Color LaserJet Pro|laser|color|print|2015|office
HP|Color LaserJet M452dw|Color LaserJet Pro|laser|color|print|2015|office
HP|Color LaserJet M454dw|Color LaserJet Pro|laser|color|print|2018|office
HP|Color LaserJet M477fdn|Color LaserJet Pro|laser|color|mfp|2016|office
HP|Color LaserJet M477fdw|Color LaserJet Pro|laser|color|mfp|2016|office
HP|Color LaserJet M479fdw|Color LaserJet Pro|laser|color|mfp|2019|office
HP|Color LaserJet M479fnw|Color LaserJet Pro|laser|color|mfp|2019|office
HP|Color LaserJet M552dn|Color LaserJet Enterprise|laser|color|print|2015|enterprise
HP|Color LaserJet M553dn|Color LaserJet Enterprise|laser|color|print|2015|enterprise
HP|Color LaserJet M554dn|Color LaserJet Enterprise|laser|color|print|2018|enterprise
HP|Color LaserJet M555dn|Color LaserJet Enterprise|laser|color|print|2018|enterprise
HP|Color LaserJet M575|Color LaserJet Enterprise|laser|color|mfp|2012|enterprise
HP|Color LaserJet M577|Color LaserJet Enterprise|laser|color|mfp|2015|enterprise
HP|Color LaserJet M578|Color LaserJet Enterprise|laser|color|mfp|2018|enterprise
HP|Color LaserJet M651|Color LaserJet Enterprise|laser|color|print|2012|enterprise
HP|Color LaserJet M680|Color LaserJet Enterprise|laser|color|mfp|2012|enterprise
HP|Color LaserJet M750|Color LaserJet Enterprise|laser|color|print|2013|enterprise
HP|Color LaserJet M775|Color LaserJet Enterprise|laser|color|mfp|2013|enterprise
HP|Color LaserJet M855|Color LaserJet Enterprise|laser|color|print|2014|enterprise
HP|Color LaserJet M880|Color LaserJet Enterprise|laser|color|mfp|2014|enterprise
HP|Color LaserJet Enterprise E45028|Color LaserJet Enterprise|laser|color|print|2020|enterprise
HP|Color LaserJet Enterprise E47528|Color LaserJet Enterprise|laser|color|mfp|2020|enterprise
HP|Color LaserJet Enterprise E55040|Color LaserJet Enterprise|laser|color|print|2019|enterprise
HP|Color LaserJet Enterprise E57540|Color LaserJet Enterprise|laser|color|mfp|2019|enterprise
HP|Color LaserJet Enterprise E65050dn|Color LaserJet Enterprise|laser|color|print|2020|enterprise
HP|Color LaserJet Enterprise E65150dn|Color LaserJet Enterprise|laser|color|print|2020|enterprise
HP|Color LaserJet Enterprise E67550dn|Color LaserJet Enterprise|laser|color|mfp|2020|enterprise
HP|DeskJet 2000|DeskJet|inkjet|color|print|2017|home
HP|DeskJet 2130|DeskJet|inkjet|color|print|2015|home
HP|DeskJet 2135|DeskJet|inkjet|color|print|2016|home
HP|DeskJet 2630|DeskJet|inkjet|color|mfp|2017|home
HP|DeskJet 2720|DeskJet|inkjet|color|mfp|2019|home
HP|DeskJet 2723|DeskJet|inkjet|color|mfp|2020|home
HP|DeskJet 3630|DeskJet|inkjet|color|mfp|2016|home
HP|DeskJet 3720|DeskJet|inkjet|color|mfp|2017|home
HP|DeskJet 3755|DeskJet|inkjet|color|mfp|2017|home
HP|DeskJet 3775|DeskJet|inkjet|color|mfp|2017|home
HP|DeskJet 4100e|DeskJet|inkjet|color|mfp|2020|home
HP|DeskJet 4155e|DeskJet|inkjet|color|mfp|2021|home
HP|DeskJet 4200e|DeskJet|inkjet|color|mfp|2021|home
HP|DeskJet 4255e|DeskJet|inkjet|color|mfp|2022|home
HP|DeskJet 4535|DeskJet|inkjet|color|mfp|2018|home
HP|DeskJet 4675|DeskJet|inkjet|color|mfp|2018|home
HP|DeskJet Ink Advantage 1110|Ink Advantage|inkjet|color|print|2013|home
HP|DeskJet Ink Advantage 3788|Ink Advantage|inkjet|color|mfp|2017|home
HP|DeskJet Ink Advantage 5075|Ink Advantage|inkjet|color|mfp|2018|home
HP|DeskJet Ink Advantage 5275|Ink Advantage|inkjet|color|mfp|2019|home
HP|DeskJet Ink Advantage 6075|Ink Advantage|inkjet|color|mfp|2019|home
HP|DeskJet Ink Advantage 6475|Ink Advantage|inkjet|color|mfp|2020|home
HP|Smart Tank 500|Smart Tank|inkjet|color|mfp|2019|home
HP|Smart Tank 530|Smart Tank|inkjet|color|mfp|2020|home
HP|Smart Tank 580|Smart Tank|inkjet|color|mfp|2021|home
HP|Smart Tank 610|Smart Tank|inkjet|color|mfp|2020|home
HP|Smart Tank 720|Smart Tank|inkjet|color|mfp|2021|home
HP|Smart Tank 750|Smart Tank|inkjet|color|mfp|2021|home
HP|Smart Tank 6000|Smart Tank|inkjet|color|mfp|2021|home
HP|Smart Tank 7000|Smart Tank|inkjet|color|mfp|2021|home
HP|Smart Tank 7600|Smart Tank|inkjet|color|mfp|2022|home
HP|OfficeJet 250|OfficeJet|inkjet|color|mfp|2016|home
HP|OfficeJet 2620|OfficeJet|inkjet|color|mfp|2017|home
HP|OfficeJet 3830|OfficeJet|inkjet|color|mfp|2017|home
HP|OfficeJet 4655|OfficeJet|inkjet|color|mfp|2016|home
HP|OfficeJet 5220|OfficeJet|inkjet|color|mfp|2018|home
HP|OfficeJet 5255|OfficeJet|inkjet|color|mfp|2018|home
HP|OfficeJet 6600|OfficeJet|inkjet|color|mfp|2004|office
HP|OfficeJet 6700|OfficeJet|inkjet|color|mfp|2008|office
HP|OfficeJet 7110|OfficeJet|inkjet|color|print|2012|office
HP|OfficeJet 7500|OfficeJet|inkjet|color|mfp|2011|office
HP|OfficeJet 7610|OfficeJet|inkjet|color|mfp|2012|office
HP|OfficeJet 8015|OfficeJet Pro|inkjet|color|mfp|2020|office
HP|OfficeJet 8025|OfficeJet Pro|inkjet|color|mfp|2020|office
HP|OfficeJet 9010|OfficeJet Pro|inkjet|color|mfp|2019|office
HP|OfficeJet 9025|OfficeJet Pro|inkjet|color|mfp|2019|office
HP|OfficeJet Pro 6960|OfficeJet Pro|inkjet|color|mfp|2016|office
HP|OfficeJet Pro 6970|OfficeJet Pro|inkjet|color|mfp|2017|office
HP|OfficeJet Pro 7720|OfficeJet Pro|inkjet|color|mfp|2017|office
HP|OfficeJet Pro 7740|OfficeJet Pro|inkjet|color|mfp|2018|office
HP|OfficeJet Pro 8210|OfficeJet Pro|inkjet|color|print|2016|office
HP|OfficeJet Pro 8710|OfficeJet Pro|inkjet|color|mfp|2016|office
HP|OfficeJet Pro 8720|OfficeJet Pro|inkjet|color|mfp|2016|office
HP|OfficeJet Pro 8730|OfficeJet Pro|inkjet|color|mfp|2016|office
HP|OfficeJet Pro 8740|OfficeJet Pro|inkjet|color|mfp|2016|office
HP|OfficeJet Pro 9020|OfficeJet Pro|inkjet|color|mfp|2019|office
HP|OfficeJet Pro 9125|OfficeJet Pro|inkjet|color|mfp|2022|office
HP|OfficeJet Pro 9135|OfficeJet Pro|inkjet|color|mfp|2023|office
HP|OfficeJet Pro 9720|OfficeJet Pro|inkjet|color|mfp|2023|office
HP|ENVY 4520|ENVY|inkjet|color|mfp|2014|home
HP|ENVY 5020|ENVY|inkjet|color|mfp|2016|home
HP|ENVY 5055|ENVY|inkjet|color|mfp|2017|home
HP|ENVY 5640|ENVY|inkjet|color|mfp|2013|home
HP|ENVY 6020|ENVY|inkjet|color|mfp|2017|home
HP|ENVY 6055|ENVY|inkjet|color|mfp|2018|home
HP|ENVY 6420|ENVY|inkjet|color|mfp|2020|home
HP|ENVY 6455|ENVY|inkjet|color|mfp|2021|home
HP|ENVY 7155|ENVY|inkjet|color|mfp|2019|home
HP|ENVY 7640|ENVY|inkjet|color|mfp|2016|home
HP|ENVY 7855|ENVY|inkjet|color|mfp|2018|home
HP|ENVY Photo 6220|ENVY Photo|inkjet|color|mfp|2020|home
HP|ENVY Photo 7855|ENVY Photo|inkjet|color|mfp|2019|home
HP|ENVY Photo 7900|ENVY Photo|inkjet|color|mfp|2022|home
HP|ENVY Pro 6455|ENVY Pro|inkjet|color|mfp|2019|home
HP|PageWide 352dw|PageWide|inkjet|color|print|2015|office
HP|PageWide 377dw|PageWide|inkjet|color|mfp|2015|office
HP|PageWide Pro 452dw|PageWide Pro|inkjet|color|print|2016|office
HP|PageWide Pro 477dw|PageWide Pro|inkjet|color|mfp|2016|office
HP|PageWide Pro 552dw|PageWide Pro|inkjet|color|print|2016|enterprise
HP|PageWide Pro 577dw|PageWide Pro|inkjet|color|mfp|2016|enterprise
HP|PageWide Pro 772dw|PageWide Pro|inkjet|color|print|2016|enterprise
HP|PageWide Pro 777dw|PageWide Pro|inkjet|color|mfp|2017|enterprise
HP|PageWide Pro 779dw|PageWide Pro|inkjet|color|mfp|2017|enterprise
HP|PageWide Enterprise 556dw|PageWide Enterprise|inkjet|color|print|2017|enterprise
HP|PageWide Enterprise 586dw|PageWide Enterprise|inkjet|color|mfp|2017|enterprise
HP|PageWide Enterprise 785|PageWide Enterprise|inkjet|color|mfp|2018|enterprise
HP|PageWide XL 4500|PageWide XL|wideformat|color|print|2018|enterprise
HP|PageWide XL 5000|PageWide XL|wideformat|color|mfp|2019|enterprise
HP|PageWide XL 8000|PageWide XL|wideformat|color|mfp|2019|enterprise
HP|DesignJet 500|DesignJet|wideformat|color|print|2000|enterprise
HP|DesignJet 800|DesignJet|wideformat|color|print|2002|enterprise
HP|DesignJet 5000|DesignJet|wideformat|color|print|2001|enterprise
HP|DesignJet 5500|DesignJet|wideformat|color|print|2003|enterprise
HP|DesignJet T120|DesignJet|wideformat|color|print|2013|enterprise
HP|DesignJet T520|DesignJet|wideformat|color|print|2013|enterprise
HP|DesignJet T530|DesignJet|wideformat|color|print|2018|enterprise
HP|DesignJet T730|DesignJet|wideformat|color|print|2016|enterprise
HP|DesignJet T830|DesignJet|wideformat|color|mfp|2016|enterprise
HP|DesignJet T930|DesignJet|wideformat|color|print|2019|enterprise
HP|DesignJet T1200|DesignJet|wideformat|color|print|2007|enterprise
HP|DesignJet T1500|DesignJet|wideformat|color|print|2014|enterprise
HP|DesignJet T1600|DesignJet|wideformat|color|print|2018|enterprise
HP|DesignJet T1700|DesignJet|wideformat|color|print|2019|enterprise
HP|DesignJet T2300|DesignJet|wideformat|color|mfp|2011|enterprise
HP|DesignJet T2500|DesignJet|wideformat|color|mfp|2015|enterprise
HP|DesignJet T3500|DesignJet|wideformat|color|mfp|2015|enterprise
HP|DesignJet Z2100|DesignJet|wideformat|color|print|2007|enterprise
HP|DesignJet Z2600|DesignJet|wideformat|color|print|2018|enterprise
HP|DesignJet Z3100|DesignJet|wideformat|color|print|2007|enterprise
HP|DesignJet Z3200|DesignJet|wideformat|color|print|2008|enterprise
HP|DesignJet Z5200|DesignJet|wideformat|color|print|2009|enterprise
HP|DesignJet Z6100|DesignJet|wideformat|color|print|2006|enterprise
HP|DesignJet Z6600|DesignJet|wideformat|color|print|2013|enterprise
HP|DesignJet Z6800|DesignJet|wideformat|color|print|2013|enterprise
HP|DesignJet Z9+|DesignJet|wideformat|color|print|2018|enterprise
HP|DesignJet Studio 36|DesignJet|wideformat|color|print|2019|enterprise
Canon|PIXMA iP1000|PIXMA|inkjet|color|print|2004|home
Canon|PIXMA iP1600|PIXMA|inkjet|color|print|2005|home
Canon|PIXMA iP2000|PIXMA|inkjet|color|print|2004|home
Canon|PIXMA iP3000|PIXMA|inkjet|color|print|2005|home
Canon|PIXMA iP4200|PIXMA|inkjet|color|print|2005|home
Canon|PIXMA iP4300|PIXMA|inkjet|color|print|2006|home
Canon|PIXMA iP4500|PIXMA|inkjet|color|print|2007|home
Canon|PIXMA iP4700|PIXMA|inkjet|color|print|2009|home
Canon|PIXMA iP4820|PIXMA|inkjet|color|print|2010|home
Canon|PIXMA iP4920|PIXMA|inkjet|color|print|2011|home
Canon|PIXMA iP7220|PIXMA|inkjet|color|print|2013|home
Canon|PIXMA iP8720|PIXMA|inkjet|color|print|2014|home
Canon|PIXMA iP8780|PIXMA|inkjet|color|print|2015|home
Canon|PIXMA iP110|PIXMA|inkjet|color|print|2014|home
Canon|PIXMA iX6500|PIXMA|inkjet|color|print|2010|office
Canon|PIXMA iX6800|PIXMA|inkjet|color|print|2014|office
Canon|PIXMA iX7000|PIXMA|inkjet|color|print|2012|office
Canon|PIXMA MG2400|PIXMA|inkjet|color|mfp|2014|home
Canon|PIXMA MG2500|PIXMA|inkjet|color|mfp|2014|home
Canon|PIXMA MG2900|PIXMA|inkjet|color|mfp|2015|home
Canon|PIXMA MG3600|PIXMA|inkjet|color|mfp|2016|home
Canon|PIXMA MG3620|PIXMA|inkjet|color|mfp|2016|home
Canon|PIXMA MG5700|PIXMA|inkjet|color|mfp|2015|home
Canon|PIXMA MG6600|PIXMA|inkjet|color|mfp|2015|home
Canon|PIXMA MG6800|PIXMA|inkjet|color|mfp|2015|home
Canon|PIXMA MG7700|PIXMA|inkjet|color|mfp|2016|home
Canon|PIXMA MX470|PIXMA|inkjet|color|mfp|2014|office
Canon|PIXMA MX490|PIXMA|inkjet|color|mfp|2015|office
Canon|PIXMA MX530|PIXMA|inkjet|color|mfp|2014|office
Canon|PIXMA MX922|PIXMA|inkjet|color|mfp|2013|office
Canon|PIXMA TS202|PIXMA|inkjet|color|print|2019|home
Canon|PIXMA TS3120|PIXMA|inkjet|color|mfp|2018|home
Canon|PIXMA TS3320|PIXMA|inkjet|color|mfp|2019|home
Canon|PIXMA TS3520|PIXMA|inkjet|color|mfp|2020|home
Canon|PIXMA TS5020|PIXMA|inkjet|color|mfp|2017|home
Canon|PIXMA TS6020|PIXMA|inkjet|color|mfp|2017|home
Canon|PIXMA TS6320|PIXMA|inkjet|color|mfp|2019|home
Canon|PIXMA TS702|PIXMA|inkjet|color|print|2020|home
Canon|PIXMA TS8120|PIXMA|inkjet|color|mfp|2018|home
Canon|PIXMA TS8320|PIXMA|inkjet|color|mfp|2019|home
Canon|PIXMA TS9120|PIXMA|inkjet|color|mfp|2017|home
Canon|PIXMA TS9520|PIXMA|inkjet|color|mfp|2019|home
Canon|PIXMA TR150|PIXMA|inkjet|color|print|2019|home
Canon|PIXMA TR4520|PIXMA|inkjet|color|mfp|2019|home
Canon|PIXMA TR7020|PIXMA|inkjet|color|mfp|2020|office
Canon|PIXMA TR7520|PIXMA|inkjet|color|mfp|2019|home
Canon|PIXMA TR8520|PIXMA|inkjet|color|mfp|2019|office
Canon|PIXMA TR8620|PIXMA|inkjet|color|mfp|2020|office
Canon|PIXMA G1020|PIXMA G|inkjet|color|print|2019|home
Canon|PIXMA G2020|PIXMA G|inkjet|color|mfp|2019|home
Canon|PIXMA G2060|PIXMA G|inkjet|color|mfp|2021|home
Canon|PIXMA G3020|PIXMA G|inkjet|color|mfp|2020|home
Canon|PIXMA G3260|PIXMA G|inkjet|color|mfp|2022|home
Canon|PIXMA G4010|PIXMA G|inkjet|color|mfp|2019|office
Canon|PIXMA G4060|PIXMA G|inkjet|color|mfp|2021|office
Canon|PIXMA G5060|PIXMA G|inkjet|color|mfp|2021|office
Canon|PIXMA G6060|PIXMA G|inkjet|color|mfp|2021|office
Canon|PIXMA G7060|PIXMA G|inkjet|color|mfp|2021|office
Canon|PIXMA GX3020|MAXIFY GX|inkjet|color|mfp|2022|office
Canon|PIXMA GX4020|MAXIFY GX|inkjet|color|mfp|2022|office
Canon|PIXMA GX5020|MAXIFY GX|inkjet|color|mfp|2022|office
Canon|PIXMA GX6020|MAXIFY GX|inkjet|color|mfp|2022|office
Canon|PIXMA GX7020|MAXIFY GX|inkjet|color|mfp|2022|office
Canon|PIXMA E410|PIXMA E|inkjet|color|mfp|2016|home
Canon|PIXMA E470|PIXMA E|inkjet|color|mfp|2016|home
Canon|PIXMA E480|PIXMA E|inkjet|color|mfp|2016|home
Canon|PIXMA E560|PIXMA E|inkjet|color|mfp|2016|home
Canon|PIXMA E610|PIXMA E|inkjet|color|mfp|2017|home
Canon|PIXMA Pro-10|PIXMA Pro|inkjet|color|print|2013|enterprise
Canon|PIXMA Pro-100|PIXMA Pro|inkjet|color|print|2013|enterprise
Canon|PIXMA Pro-200|PIXMA Pro|inkjet|color|print|2020|enterprise
Canon|PIXMA Pro-300|PIXMA Pro|inkjet|color|print|2020|enterprise
Canon|PIXMA Pro-1000|PIXMA Pro|inkjet|color|print|2016|enterprise
Canon|MAXIFY MB2100|MAXIFY|inkjet|color|mfp|2020|office
Canon|MAXIFY MB2700|MAXIFY|inkjet|color|mfp|2015|office
Canon|MAXIFY MB5100|MAXIFY|inkjet|color|mfp|2015|office
Canon|MAXIFY MB5400|MAXIFY|inkjet|color|mfp|2016|office
Canon|MAXIFY iB4100|MAXIFY|inkjet|color|print|2015|office
Canon|imageCLASS LBP2900|imageCLASS|laser|mono|print|2007|office
Canon|imageCLASS LBP3000|imageCLASS|laser|mono|print|2008|office
Canon|imageCLASS LBP3018|imageCLASS|laser|mono|print|2008|home
Canon|imageCLASS LBP3108|imageCLASS|laser|mono|print|2009|home
Canon|imageCLASS LBP3200|imageCLASS|laser|mono|print|2005|office
Canon|imageCLASS LBP3300|imageCLASS|laser|mono|print|2006|office
Canon|imageCLASS LBP6000|imageCLASS|laser|mono|print|2011|home
Canon|imageCLASS LBP6018|imageCLASS|laser|mono|print|2011|home
Canon|imageCLASS LBP6030|imageCLASS|laser|mono|print|2014|home
Canon|imageCLASS LBP6200d|imageCLASS|laser|mono|print|2013|office
Canon|imageCLASS LBP6310|imageCLASS|laser|mono|print|2015|office
Canon|imageCLASS LBP5050|imageCLASS|laser|color|print|2008|office
Canon|imageCLASS LBP5100|imageCLASS|laser|color|print|2007|office
Canon|imageCLASS LBP5300|imageCLASS|laser|color|print|2008|office
Canon|imageCLASS LBP7010C|imageCLASS|laser|color|print|2010|home
Canon|imageCLASS LBP7110Cw|imageCLASS|laser|color|print|2013|office
Canon|imageCLASS LBP7200C|imageCLASS|laser|color|print|2009|office
Canon|imageCLASS LBP8100n|imageCLASS|laser|color|print|2010|office
Canon|imageCLASS LBP9100C|imageCLASS|laser|color|print|2012|office
Canon|imageCLASS MF3010|imageCLASS|laser|mono|mfp|2011|office
Canon|imageCLASS MF4010|imageCLASS|laser|mono|mfp|2007|office
Canon|imageCLASS MF4320d|imageCLASS|laser|mono|mfp|2008|office
Canon|imageCLASS MF4410|imageCLASS|laser|mono|mfp|2011|office
Canon|imageCLASS MF4750|imageCLASS|laser|mono|mfp|2013|office
Canon|imageCLASS MF4770n|imageCLASS|laser|mono|mfp|2013|office
Canon|imageCLASS MF4890dw|imageCLASS|laser|mono|mfp|2014|office
Canon|imageCLASS MF515dw|imageCLASS|laser|mono|mfp|2016|office
Canon|imageCLASS MF525dw|imageCLASS|laser|mono|mfp|2018|office
Canon|imageCLASS MF543dw|imageCLASS|laser|mono|mfp|2019|office
Canon|imageCLASS MF642Cdw|imageCLASS|laser|color|mfp|2018|office
Canon|imageCLASS MF645Cx|imageCLASS|laser|color|mfp|2019|office
Canon|imageCLASS MF731Cdw|imageCLASS|laser|color|mfp|2017|office
Canon|imageCLASS MF735Cx|imageCLASS|laser|color|mfp|2018|office
Canon|imageCLASS MF743Cdw|imageCLASS|laser|color|mfp|2019|office
Canon|imageCLASS MF746Cx|imageCLASS|laser|color|mfp|2021|office
Canon|imageCLASS MF8080Cw|imageCLASS|laser|color|mfp|2011|office
Canon|imageCLASS MF8350Cdn|imageCLASS|laser|color|mfp|2011|office
Canon|imageCLASS MF8560Cdw|imageCLASS|laser|color|mfp|2012|office
Canon|imageCLASS MF8580Cdw|imageCLASS|laser|color|mfp|2012|office
Canon|imageCLASS D520|imageCLASS|laser|mono|print|2009|office
Canon|imageCLASS D530|imageCLASS|laser|mono|mfp|2010|office
Canon|imageCLASS D570|imageCLASS|laser|mono|mfp|2013|office
Canon|imageRUNNER 2206|imageRUNNER|laser|mono|mfp|2018|enterprise
Canon|imageRUNNER 2425|imageRUNNER|laser|mono|mfp|2019|enterprise
Canon|imageRUNNER 2625|imageRUNNER|laser|mono|mfp|2021|enterprise
Canon|imageRUNNER 2630|imageRUNNER|laser|mono|mfp|2021|enterprise
Canon|imageRUNNER 1600|imageRUNNER|laser|mono|mfp|2001|enterprise
Canon|imageRUNNER 2200|imageRUNNER|laser|mono|mfp|2003|enterprise
Canon|imageRUNNER 3300|imageRUNNER|laser|mono|mfp|2003|enterprise
Canon|imageRUNNER 5000|imageRUNNER|laser|mono|mfp|2001|enterprise
Canon|imageRUNNER 8500|imageRUNNER|laser|mono|mfp|2003|enterprise
Canon|imageRUNNER ADVANCE 4025|imageRUNNER ADVANCE|laser|mono|mfp|2013|enterprise
Canon|imageRUNNER ADVANCE 4045|imageRUNNER ADVANCE|laser|mono|mfp|2013|enterprise
Canon|imageRUNNER ADVANCE 4245|imageRUNNER ADVANCE|laser|mono|mfp|2014|enterprise
Canon|imageRUNNER ADVANCE 4545|imageRUNNER ADVANCE|laser|mono|mfp|2013|enterprise
Canon|imageRUNNER ADVANCE 6055|imageRUNNER ADVANCE|laser|mono|mfp|2012|enterprise
Canon|imageRUNNER ADVANCE 6075|imageRUNNER ADVANCE|laser|mono|mfp|2012|enterprise
Canon|imageRUNNER ADVANCE 6255|imageRUNNER ADVANCE|laser|mono|mfp|2013|enterprise
Canon|imageRUNNER ADVANCE 6275|imageRUNNER ADVANCE|laser|mono|mfp|2013|enterprise
Canon|imageRUNNER ADVANCE 8085|imageRUNNER ADVANCE|laser|mono|mfp|2013|enterprise
Canon|imageRUNNER ADVANCE 8105|imageRUNNER ADVANCE|laser|mono|mfp|2013|enterprise
Canon|imageRUNNER ADVANCE 8505|imageRUNNER ADVANCE|laser|mono|mfp|2017|enterprise
Canon|imageRUNNER ADVANCE 8705|imageRUNNER ADVANCE|laser|mono|mfp|2017|enterprise
Canon|imageRUNNER ADVANCE C2020|imageRUNNER ADVANCE|laser|color|mfp|2011|enterprise
Canon|imageRUNNER ADVANCE C5030|imageRUNNER ADVANCE|laser|color|mfp|2010|enterprise
Canon|imageRUNNER ADVANCE C5045|imageRUNNER ADVANCE|laser|color|mfp|2010|enterprise
Canon|imageRUNNER ADVANCE C7055|imageRUNNER ADVANCE|laser|color|mfp|2012|enterprise
Canon|imageRUNNER ADVANCE C7065|imageRUNNER ADVANCE|laser|color|mfp|2012|enterprise
Canon|imageRUNNER ADVANCE C9075|imageRUNNER ADVANCE|laser|color|mfp|2013|enterprise
Canon|imageRUNNER ADVANCE C5560|imageRUNNER ADVANCE|laser|color|mfp|2019|enterprise
Canon|imageRUNNER ADVANCE C5800|imageRUNNER ADVANCE|laser|color|mfp|2019|enterprise
Canon|imageRUNNER ADVANCE DX 4725|imageRUNNER ADVANCE DX|laser|mono|mfp|2020|enterprise
Canon|imageRUNNER ADVANCE DX 4751|imageRUNNER ADVANCE DX|laser|mono|mfp|2020|enterprise
Canon|imageRUNNER ADVANCE DX 6780|imageRUNNER ADVANCE DX|laser|mono|mfp|2019|enterprise
Canon|imageRUNNER ADVANCE DX 6870|imageRUNNER ADVANCE DX|laser|mono|mfp|2019|enterprise
Canon|imageRUNNER ADVANCE DX C257|imageRUNNER ADVANCE DX|laser|color|mfp|2020|enterprise
Canon|imageRUNNER ADVANCE DX C357|imageRUNNER ADVANCE DX|laser|color|mfp|2020|enterprise
Canon|imageRUNNER ADVANCE DX C477|imageRUNNER ADVANCE DX|laser|color|mfp|2020|enterprise
Canon|imageRUNNER ADVANCE DX C3830|imageRUNNER ADVANCE DX|laser|color|mfp|2022|enterprise
Canon|imageRUNNER ADVANCE DX C3826|imageRUNNER ADVANCE DX|laser|color|mfp|2022|enterprise
Canon|imagePROGRAF iPF500|imagePROGRAF|wideformat|color|print|2006|enterprise
Canon|imagePROGRAF iPF700|imagePROGRAF|wideformat|color|print|2007|enterprise
Canon|imagePROGRAF iPF5100|imagePROGRAF|wideformat|color|print|2007|enterprise
Canon|imagePROGRAF iPF6100|imagePROGRAF|wideformat|color|print|2008|enterprise
Canon|imagePROGRAF iPF8100|imagePROGRAF|wideformat|color|print|2009|enterprise
Canon|imagePROGRAF iPF8300|imagePROGRAF|wideformat|color|print|2012|enterprise
Canon|imagePROGRAF iPF8400|imagePROGRAF|wideformat|color|print|2013|enterprise
Canon|imagePROGRAF iPF9400|imagePROGRAF|wideformat|color|print|2014|enterprise
Canon|imagePROGRAF iPF765|imagePROGRAF|wideformat|color|print|2014|enterprise
Canon|imagePROGRAF iPF770|imagePROGRAF|wideformat|color|print|2015|enterprise
Canon|imagePROGRAF iPF785|imagePROGRAF|wideformat|color|mfp|2016|enterprise
Canon|imagePROGRAF PRO-2000|imagePROGRAF PRO|wideformat|color|print|2016|enterprise
Canon|imagePROGRAF PRO-4000|imagePROGRAF PRO|wideformat|color|print|2016|enterprise
Canon|imagePROGRAF PRO-6000|imagePROGRAF PRO|wideformat|color|print|2018|enterprise
Canon|imagePROGRAF TM-200|imagePROGRAF TM|wideformat|color|print|2018|enterprise
Canon|imagePROGRAF TM-300|imagePROGRAF TM|wideformat|color|print|2018|enterprise
Canon|imagePROGRAF TM-305|imagePROGRAF TM|wideformat|color|print|2020|enterprise
Canon|imagePROGRAF TM-350|imagePROGRAF TM|wideformat|color|print|2023|enterprise
Canon|imagePROGRAF TX-2100|imagePROGRAF TX|wideformat|color|mfp|2018|enterprise
Canon|imagePROGRAF TX-3100|imagePROGRAF TX|wideformat|color|mfp|2018|enterprise
Canon|imagePROGRAF TX-4100|imagePROGRAF TX|wideformat|color|mfp|2019|enterprise
Canon|imagePROGRAF TZ-30000|imagePROGRAF TZ|wideformat|color|mfp|2019|enterprise
Epson|Stylus Photo 700|Stylus Photo|inkjet|color|print|2000|home
Epson|Stylus Photo 810|Stylus Photo|inkjet|color|print|2002|home
Epson|Stylus Photo 830|Stylus Photo|inkjet|color|print|2003|home
Epson|Stylus Photo 900|Stylus Photo|inkjet|color|print|2003|home
Epson|Stylus Photo 950|Stylus Photo|inkjet|color|print|2004|home
Epson|Stylus Photo 1280|Stylus Photo|inkjet|color|print|2001|home
Epson|Stylus Photo 1290|Stylus Photo|inkjet|color|print|2002|home
Epson|Stylus Photo 2100|Stylus Photo|inkjet|color|print|2003|enterprise
Epson|Stylus Photo R200|Stylus Photo|inkjet|color|print|2004|home
Epson|Stylus Photo R230|Stylus Photo|inkjet|color|print|2006|home
Epson|Stylus Photo R270|Stylus Photo|inkjet|color|print|2007|home
Epson|Stylus Photo R290|Stylus Photo|inkjet|color|print|2008|home
Epson|Stylus Photo R330|Stylus Photo|inkjet|color|print|2011|home
Epson|Stylus Photo T50|Stylus Photo|inkjet|color|print|2010|home
Epson|Stylus Photo R1800|Stylus Photo|inkjet|color|print|2006|enterprise
Epson|Stylus Photo R1900|Stylus Photo|inkjet|color|print|2008|enterprise
Epson|Stylus Photo R2400|Stylus Photo|inkjet|color|print|2006|enterprise
Epson|Stylus Photo R2880|Stylus Photo|inkjet|color|print|2008|enterprise
Epson|Stylus Photo R3000|Stylus Photo|inkjet|color|print|2011|enterprise
Epson|Stylus Photo 1400|Stylus Photo|inkjet|color|print|2008|office
Epson|Stylus C41|Stylus|inkjet|color|print|2001|home
Epson|Stylus C43|Stylus|inkjet|color|print|2002|home
Epson|Stylus C63|Stylus|inkjet|color|print|2003|home
Epson|Stylus C65|Stylus|inkjet|color|print|2004|home
Epson|Stylus C67|Stylus|inkjet|color|print|2005|home
Epson|Stylus CX3500|Stylus|inkjet|color|mfp|2004|home
Epson|Stylus CX4700|Stylus|inkjet|color|mfp|2006|home
Epson|Stylus CX5900|Stylus|inkjet|color|mfp|2005|home
Epson|Stylus CX6900F|Stylus|inkjet|color|mfp|2006|home
Epson|Stylus CX9300F|Stylus|inkjet|color|mfp|2007|home
Epson|Stylus Office BX310FN|Stylus Office|inkjet|color|mfp|2009|office
Epson|Stylus Office BX535WD|Stylus Office|inkjet|color|mfp|2010|office
Epson|Stylus Office BX625FWD|Stylus Office|inkjet|color|mfp|2010|office
Epson|Stylus Office BX935FWD|Stylus Office|inkjet|color|mfp|2011|office
Epson|L100|EcoTank L|inkjet|color|print|2011|home
Epson|L200|EcoTank L|inkjet|color|mfp|2011|home
Epson|L300|EcoTank L|inkjet|color|print|2012|home
Epson|L350|EcoTank L|inkjet|color|mfp|2012|home
Epson|L360|EcoTank L|inkjet|color|mfp|2014|home
Epson|L365|EcoTank L|inkjet|color|mfp|2014|home
Epson|L380|EcoTank L|inkjet|color|mfp|2015|home
Epson|L385|EcoTank L|inkjet|color|mfp|2015|home
Epson|L405|EcoTank L|inkjet|color|mfp|2014|home
Epson|L455|EcoTank L|inkjet|color|mfp|2015|home
Epson|L485|EcoTank L|inkjet|color|mfp|2015|home
Epson|L550|EcoTank L|inkjet|color|mfp|2014|office
Epson|L565|EcoTank L|inkjet|color|mfp|2015|office
Epson|L605|EcoTank L|inkjet|color|print|2015|office
Epson|L655|EcoTank L|inkjet|color|mfp|2015|office
Epson|L130|EcoTank L|inkjet|color|print|2015|home
Epson|L310|EcoTank L|inkjet|color|print|2015|home
Epson|L382|EcoTank L|inkjet|color|mfp|2016|home
Epson|L395|EcoTank L|inkjet|color|mfp|2016|home
Epson|L805|EcoTank L|inkjet|color|print|2015|home
Epson|L850|EcoTank L|inkjet|color|mfp|2016|home
Epson|L1300|EcoTank L|inkjet|color|print|2016|office
Epson|L1800|EcoTank L|inkjet|color|print|2016|office
Epson|L3150|EcoTank L|inkjet|color|mfp|2018|home
Epson|L3156|EcoTank L|inkjet|color|mfp|2019|home
Epson|L3158|EcoTank L|inkjet|color|mfp|2019|home
Epson|L3210|EcoTank L|inkjet|color|mfp|2020|home
Epson|L3218|EcoTank L|inkjet|color|mfp|2021|home
Epson|L3251|EcoTank L|inkjet|color|mfp|2021|home
Epson|L3256|EcoTank L|inkjet|color|mfp|2022|home
Epson|L3260|EcoTank L|inkjet|color|mfp|2023|home
Epson|L3268|EcoTank L|inkjet|color|mfp|2023|home
Epson|L4150|EcoTank L|inkjet|color|mfp|2019|home
Epson|L4160|EcoTank L|inkjet|color|mfp|2019|home
Epson|L4260|EcoTank L|inkjet|color|mfp|2021|home
Epson|L4266|EcoTank L|inkjet|color|mfp|2022|home
Epson|L5290|EcoTank L|inkjet|color|mfp|2021|office
Epson|L5296|EcoTank L|inkjet|color|mfp|2022|office
Epson|L6170|EcoTank L|inkjet|color|mfp|2020|office
Epson|L6190|EcoTank L|inkjet|color|mfp|2020|office
Epson|L6270|EcoTank L|inkjet|color|mfp|2021|office
Epson|L6360|EcoTank L|inkjet|color|mfp|2021|office
Epson|L14150|EcoTank L|inkjet|color|mfp|2021|office
Epson|L15150|EcoTank L|inkjet|color|mfp|2021|office
Epson|L15168|EcoTank L|inkjet|color|mfp|2022|office
Epson|L8180|EcoTank L|inkjet|color|mfp|2020|home
Epson|L8188|EcoTank L|inkjet|color|mfp|2021|home
Epson|EcoTank ET-2750|EcoTank ET|inkjet|color|mfp|2019|home
Epson|EcoTank ET-2800|EcoTank ET|inkjet|color|mfp|2021|home
Epson|EcoTank ET-2850|EcoTank ET|inkjet|color|mfp|2021|home
Epson|EcoTank ET-3760|EcoTank ET|inkjet|color|mfp|2019|office
Epson|EcoTank ET-3850|EcoTank ET|inkjet|color|mfp|2021|office
Epson|EcoTank ET-4760|EcoTank ET|inkjet|color|mfp|2019|office
Epson|EcoTank ET-4850|EcoTank ET|inkjet|color|mfp|2021|office
Epson|EcoTank ET-5800|EcoTank ET|inkjet|color|mfp|2022|office
Epson|EcoTank ET-5850|EcoTank ET|inkjet|color|mfp|2022|office
Epson|EcoTank ET-8550|EcoTank ET|inkjet|color|print|2021|enterprise
Epson|EcoTank ET-15000|EcoTank ET|inkjet|color|print|2021|office
Epson|EcoTank ET-16600|EcoTank ET|inkjet|color|mfp|2022|office
Epson|EcoTank ET-16650|EcoTank ET|inkjet|color|mfp|2022|office
Epson|WorkForce WF-2530|WorkForce|inkjet|color|mfp|2013|home
Epson|WorkForce WF-2540|WorkForce|inkjet|color|mfp|2013|home
Epson|WorkForce WF-2650|WorkForce|inkjet|color|mfp|2015|home
Epson|WorkForce WF-2750|WorkForce|inkjet|color|mfp|2016|home
Epson|WorkForce WF-2830|WorkForce|inkjet|color|mfp|2020|home
Epson|WorkForce WF-2860|WorkForce|inkjet|color|mfp|2020|home
Epson|WorkForce WF-2930|WorkForce|inkjet|color|mfp|2023|home
Epson|WorkForce WF-2950|WorkForce|inkjet|color|mfp|2023|home
Epson|WorkForce WF-3520|WorkForce|inkjet|color|mfp|2012|office
Epson|WorkForce WF-3620|WorkForce|inkjet|color|mfp|2014|office
Epson|WorkForce WF-3720|WorkForce|inkjet|color|mfp|2017|office
Epson|WorkForce WF-3820|WorkForce|inkjet|color|mfp|2021|office
Epson|WorkForce WF-4740|WorkForce|inkjet|color|mfp|2017|office
Epson|WorkForce WF-4820|WorkForce|inkjet|color|mfp|2020|office
Epson|WorkForce WF-4825|WorkForce|inkjet|color|mfp|2022|office
Epson|WorkForce WF-5230|WorkForce|inkjet|color|print|2021|office
Epson|WorkForce WF-5690|WorkForce|inkjet|color|mfp|2015|office
Epson|WorkForce WF-6590|WorkForce|inkjet|color|mfp|2015|office
Epson|WorkForce WF-7110|WorkForce|inkjet|color|print|2014|office
Epson|WorkForce WF-7210|WorkForce|inkjet|color|print|2016|office
Epson|WorkForce WF-7310|WorkForce|inkjet|color|print|2021|office
Epson|WorkForce WF-7620|WorkForce|inkjet|color|mfp|2015|office
Epson|WorkForce WF-7710|WorkForce|inkjet|color|mfp|2017|office
Epson|WorkForce WF-7720|WorkForce|inkjet|color|mfp|2017|office
Epson|WorkForce WF-7840|WorkForce|inkjet|color|mfp|2021|office
Epson|WorkForce WF-8590|WorkForce|inkjet|color|mfp|2014|enterprise
Epson|WorkForce WF-C529R|WorkForce Pro|inkjet|color|print|2019|enterprise
Epson|WorkForce WF-C579R|WorkForce Pro|inkjet|color|mfp|2019|enterprise
Epson|WorkForce WF-C8610|WorkForce Pro|inkjet|color|print|2018|enterprise
Epson|WorkForce WF-C871R|WorkForce Pro|inkjet|color|mfp|2019|enterprise
Epson|WorkForce WF-C17590|WorkForce Pro|inkjet|color|mfp|2019|enterprise
Epson|WorkForce WF-C20590|WorkForce Pro|inkjet|color|mfp|2019|enterprise
Epson|WorkForce WF-C21000|WorkForce Pro|inkjet|color|mfp|2021|enterprise
Epson|WorkForce WF-100|WorkForce|inkjet|color|print|2016|home
Epson|WorkForce WF-110|WorkForce|inkjet|color|print|2018|home
Epson|WorkForce EC-4020|WorkForce|inkjet|color|mfp|2022|office
Epson|WorkForce EC-4030|WorkForce|inkjet|color|mfp|2023|office
Epson|WorkForce ST-2000|WorkForce ST|inkjet|mono|print|2020|office
Epson|WorkForce ST-3000|WorkForce ST|inkjet|mono|print|2021|office
Epson|WorkForce ST-4000|WorkForce ST|inkjet|mono|mfp|2021|office
Epson|WorkForce ST-5000|WorkForce ST|inkjet|mono|mfp|2021|office
Epson|WorkForce ST-C210|WorkForce ST|inkjet|color|mfp|2022|office
Epson|WorkForce ST-M1000|WorkForce ST|inkjet|mono|print|2022|office
Epson|WorkForce M105|WorkForce M|inkjet|mono|print|2016|office
Epson|WorkForce M205|WorkForce M|inkjet|mono|print|2017|office
Epson|WorkForce M3170|WorkForce M|inkjet|mono|mfp|2020|office
Epson|EPL-6200|EPL|laser|mono|print|2004|office
Epson|EPL-6200L|EPL|laser|mono|print|2005|office
Epson|EPL-N2050|EPL|laser|mono|print|2004|office
Epson|EPL-N2500|EPL|laser|mono|print|2005|office
Epson|EPL-N2700|EPL|laser|mono|print|2006|office
Epson|AcuLaser C1100|AcuLaser|laser|color|print|2004|office
Epson|AcuLaser C1900|AcuLaser|laser|color|print|2005|office
Epson|AcuLaser C2600|AcuLaser|laser|color|print|2006|office
Epson|AcuLaser C2800|AcuLaser|laser|color|print|2007|office
Epson|AcuLaser C3000|AcuLaser|laser|color|print|2008|office
Epson|AcuLaser C3800|AcuLaser|laser|color|print|2008|office
Epson|AcuLaser C4200|AcuLaser|laser|color|print|2006|office
Epson|AcuLaser C8600|AcuLaser|laser|color|print|2005|enterprise
Epson|AcuLaser C9200|AcuLaser|laser|color|print|2008|enterprise
Epson|AcuLaser M1200|AcuLaser|laser|mono|print|2008|office
Epson|AcuLaser M2000|AcuLaser|laser|mono|print|2009|office
Epson|AcuLaser M2300|AcuLaser|laser|mono|print|2009|office
Epson|AcuLaser M2400|AcuLaser|laser|mono|print|2010|office
Epson|AcuLaser CX16|AcuLaser|laser|color|mfp|2009|office
Epson|AcuLaser CX28|AcuLaser|laser|color|mfp|2007|office
Epson|AcuLaser CX37|AcuLaser|laser|color|mfp|2008|office
Epson|AL-M200|AL|laser|mono|print|2012|office
Epson|AL-M300|AL|laser|mono|print|2013|office
Epson|AL-MX300|AL|laser|mono|mfp|2013|office
Epson|AL-C300|AL|laser|color|print|2013|office
Epson|AL-M310|AL|laser|mono|print|2016|office
Epson|AL-M320|AL|laser|mono|print|2018|office
Epson|LP-M8180|LP|laser|mono|mfp|2017|enterprise
Epson|LP-S8180|LP|laser|mono|print|2017|enterprise
Epson|LP-M7300|LP|laser|mono|mfp|2022|enterprise
Epson|LM-C6000|LM|laser|color|mfp|2021|enterprise
Epson|SureColor SC-P400|SureColor P|wideformat|color|print|2014|enterprise
Epson|SureColor SC-P600|SureColor P|wideformat|color|print|2015|enterprise
Epson|SureColor SC-P800|SureColor P|wideformat|color|print|2015|enterprise
Epson|SureColor SC-P5000|SureColor P|wideformat|color|print|2016|enterprise
Epson|SureColor SC-P6000|SureColor P|wideformat|color|print|2016|enterprise
Epson|SureColor SC-P8000|SureColor P|wideformat|color|print|2016|enterprise
Epson|SureColor SC-P7500|SureColor P|wideformat|color|print|2020|enterprise
Epson|SureColor SC-P9500|SureColor P|wideformat|color|print|2020|enterprise
Epson|SureColor SC-P5300|SureColor P|wideformat|color|print|2023|enterprise
Epson|SureColor SC-P7300|SureColor P|wideformat|color|print|2023|enterprise
Epson|SureColor SC-T3000|SureColor T|wideformat|color|print|2013|enterprise
Epson|SureColor SC-T5000|SureColor T|wideformat|color|print|2013|enterprise
Epson|SureColor SC-T7000|SureColor T|wideformat|color|print|2013|enterprise
Epson|SureColor SC-T3200|SureColor T|wideformat|color|print|2016|enterprise
Epson|SureColor SC-T5200|SureColor T|wideformat|color|print|2016|enterprise
Epson|SureColor SC-T7200|SureColor T|wideformat|color|print|2016|enterprise
Epson|SureColor SC-T3400|SureColor T|wideformat|color|mfp|2018|enterprise
Epson|SureColor SC-T5400|SureColor T|wideformat|color|mfp|2018|enterprise
Epson|SureColor SC-T3100|SureColor T|wideformat|color|print|2020|enterprise
Epson|SureColor SC-T5100|SureColor T|wideformat|color|print|2020|enterprise
Epson|SureColor SC-T7100|SureColor T|wideformat|color|print|2020|enterprise
Epson|SureColor SC-T3130|SureColor T|wideformat|color|mfp|2021|enterprise
Epson|SureColor SC-T5130|SureColor T|wideformat|color|mfp|2021|enterprise
Epson|SureColor SC-T7130|SureColor T|wideformat|color|mfp|2021|enterprise
Epson|SureColor SC-T3160|SureColor T|wideformat|color|mfp|2022|enterprise
Epson|SureColor SC-T5160|SureColor T|wideformat|color|mfp|2022|enterprise
Epson|SureColor SC-T7160|SureColor T|wideformat|color|mfp|2022|enterprise
Epson|SureColor SC-T3170|SureColor T|wideformat|color|mfp|2023|enterprise
Epson|SureColor SC-T5170|SureColor T|wideformat|color|mfp|2023|enterprise
Epson|SureColor SC-T7170|SureColor T|wideformat|color|mfp|2023|enterprise
Epson|SureColor SC-F5300|SureColor F|wideformat|color|print|2021|enterprise
Epson|SureColor SC-F6300|SureColor F|wideformat|color|print|2019|enterprise
Epson|SureColor SC-F9400|SureColor F|wideformat|color|print|2021|enterprise
Epson|TM-U220|TM|dotmatrix|mono|print|2000|office
Epson|TM-T88III|TM|thermal|mono|print|2003|office
Epson|TM-T88IV|TM|thermal|mono|print|2007|office
Epson|TM-T88V|TM|thermal|mono|print|2011|office
Epson|TM-T88VI|TM|thermal|mono|print|2018|office
Epson|TM-T20II|TM|thermal|mono|print|2014|office
Epson|TM-T20III|TM|thermal|mono|print|2019|office
Epson|TM-T82II|TM|thermal|mono|print|2015|office
Epson|TM-T70II|TM|thermal|mono|print|2014|office
Epson|TM-m30|TM|thermal|mono|print|2017|office
Epson|TM-m30II|TM|thermal|mono|print|2020|office
Epson|TM-P80|TM|thermal|mono|print|2016|office
Epson|TM-L90|TM|thermal|mono|print|2005|office
Epson|TM-C3500|TM|thermal|color|print|2014|office
Brother|HL-1240|HL|laser|mono|print|2000|office
Brother|HL-1430|HL|laser|mono|print|2002|office
Brother|HL-1440|HL|laser|mono|print|2003|office
Brother|HL-2030|HL|laser|mono|print|2005|home
Brother|HL-2140|HL|laser|mono|print|2008|home
Brother|HL-2150N|HL|laser|mono|print|2009|office
Brother|HL-2170W|HL|laser|mono|print|2009|home
Brother|HL-2240|HL|laser|mono|print|2011|home
Brother|HL-2240D|HL|laser|mono|print|2011|home
Brother|HL-2250DN|HL|laser|mono|print|2012|office
Brother|HL-2270DW|HL|laser|mono|print|2012|home
Brother|HL-2280DW|HL|laser|mono|print|2013|home
Brother|HL-3040CN|HL|laser|color|print|2010|office
Brother|HL-3070CW|HL|laser|color|print|2011|office
Brother|HL-3140CW|HL|laser|color|print|2013|office
Brother|HL-3150CDN|HL|laser|color|print|2014|office
Brother|HL-3170CDW|HL|laser|color|print|2015|office
Brother|HL-4150CDN|HL|laser|color|print|2011|office
Brother|HL-4570CDW|HL|laser|color|print|2012|office
Brother|HL-5450DN|HL|laser|mono|print|2013|office
Brother|HL-5470DW|HL|laser|mono|print|2013|office
Brother|HL-6180DW|HL|laser|mono|print|2014|office
Brother|HL-5130|HL|laser|mono|print|2004|office
Brother|HL-5150D|HL|laser|mono|print|2006|office
Brother|HL-5240|HL|laser|mono|print|2008|office
Brother|HL-5250DN|HL|laser|mono|print|2009|office
Brother|HL-5350DN|HL|laser|mono|print|2011|office
Brother|HL-5370DW|HL|laser|mono|print|2012|office
Brother|HL-6050D|HL|laser|mono|print|2005|office
Brother|HL-2700CN|HL|laser|color|print|2008|office
Brother|HL-4040CN|HL|laser|color|print|2009|office
Brother|HL-4070CDW|HL|laser|color|print|2011|office
Brother|HL-L2300D|HL-L|laser|mono|print|2014|home
Brother|HL-L2340DW|HL-L|laser|mono|print|2015|home
Brother|HL-L2360DW|HL-L|laser|mono|print|2016|home
Brother|HL-L2365DW|HL-L|laser|mono|print|2017|home
Brother|HL-L2370DN|HL-L|laser|mono|print|2018|office
Brother|HL-L2375DW|HL-L|laser|mono|print|2019|home
Brother|HL-L2390DW|HL-L|laser|mono|print|2020|home
Brother|HL-L2395DW|HL-L|laser|mono|print|2020|office
Brother|HL-L2400D|HL-L|laser|mono|print|2023|home
Brother|HL-L2405W|HL-L|laser|mono|print|2023|home
Brother|HL-L2440DW|HL-L|laser|mono|print|2024|home
Brother|HL-L2460DW|HL-L|laser|mono|print|2024|office
Brother|HL-L3210CW|HL-L|laser|color|print|2019|home
Brother|HL-L3230CDW|HL-L|laser|color|print|2019|office
Brother|HL-L3270CDW|HL-L|laser|color|print|2020|office
Brother|HL-L3280CDW|HL-L|laser|color|print|2021|office
Brother|HL-L3290CDW|HL-L|laser|color|print|2022|office
Brother|HL-L3300CDW|HL-L|laser|color|print|2024|office
Brother|HL-L5100DN|HL-L|laser|mono|print|2018|office
Brother|HL-L5200DW|HL-L|laser|mono|print|2018|office
Brother|HL-L5210DW|HL-L|laser|mono|print|2020|office
Brother|HL-L6200DW|HL-L|laser|mono|print|2016|office
Brother|HL-L6250DW|HL-L|laser|mono|print|2017|office
Brother|HL-L6300DW|HL-L|laser|mono|print|2017|office
Brother|HL-L6400DW|HL-L|laser|mono|print|2018|office
Brother|HL-L8260CDW|HL-L|laser|color|print|2018|office
Brother|HL-L8360CDW|HL-L|laser|color|print|2019|office
Brother|HL-L9310CDW|HL-L|laser|color|print|2019|enterprise
Brother|DCP-7030|DCP|laser|mono|mfp|2009|home
Brother|DCP-7055|DCP|laser|mono|mfp|2012|home
Brother|DCP-7065DN|DCP|laser|mono|mfp|2013|home
Brother|DCP-7080|DCP|laser|mono|mfp|2015|home
Brother|DCP-7090DW|DCP|laser|mono|mfp|2017|home
Brother|DCP-1610W|DCP|laser|mono|mfp|2016|home
Brother|DCP-1618W|DCP|laser|mono|mfp|2017|home
Brother|DCP-L2500D|DCP-L|laser|mono|mfp|2016|home
Brother|DCP-L2520DW|DCP-L|laser|mono|mfp|2017|home
Brother|DCP-L2530DW|DCP-L|laser|mono|mfp|2018|home
Brother|DCP-L2535DW|DCP-L|laser|mono|mfp|2019|home
Brother|DCP-L2550DW|DCP-L|laser|mono|mfp|2020|home
Brother|DCP-L2628DW|DCP-L|laser|mono|mfp|2023|office
Brother|DCP-L3500CDW|DCP-L|laser|color|mfp|2019|office
Brother|DCP-L3550CDW|DCP-L|laser|color|mfp|2020|office
Brother|DCP-8110DN|DCP|laser|mono|mfp|2014|office
Brother|DCP-8150DN|DCP|laser|mono|mfp|2015|office
Brother|DCP-8250DN|DCP|laser|mono|mfp|2016|office
Brother|DCP-9010CN|DCP|laser|color|mfp|2009|office
Brother|DCP-9042CDN|DCP|laser|color|mfp|2011|office
Brother|DCP-L8410CDW|DCP-L|laser|color|mfp|2017|office
Brother|DCP-L8450CDW|DCP-L|laser|color|mfp|2018|office
Brother|DCP-J105|DCP-J|inkjet|color|mfp|2015|home
Brother|DCP-J152W|DCP-J|inkjet|color|mfp|2012|home
Brother|DCP-J4110DW|DCP-J|inkjet|color|mfp|2014|office
Brother|DCP-J562DW|DCP-J|inkjet|color|mfp|2016|home
Brother|DCP-J572DW|DCP-J|inkjet|color|mfp|2017|home
Brother|DCP-J772DW|DCP-J|inkjet|color|mfp|2017|home
Brother|DCP-J1200W|DCP-J|inkjet|color|mfp|2022|home
Brother|MFC-7320|MFC|laser|mono|mfp|2008|office
Brother|MFC-7360|MFC|laser|mono|mfp|2010|office
Brother|MFC-7460DN|MFC|laser|mono|mfp|2012|office
Brother|MFC-7470D|MFC|laser|mono|mfp|2013|office
Brother|MFC-7480D|MFC|laser|mono|mfp|2014|office
Brother|MFC-7880DN|MFC|laser|mono|mfp|2015|office
Brother|MFC-8370|MFC|laser|mono|mfp|2012|office
Brother|MFC-8510DN|MFC|laser|mono|mfp|2014|office
Brother|MFC-8530DN|MFC|laser|mono|mfp|2016|office
Brother|MFC-8880DN|MFC|laser|mono|mfp|2014|office
Brother|MFC-8950DW|MFC|laser|mono|mfp|2016|office
Brother|MFC-9120CN|MFC|laser|color|mfp|2010|office
Brother|MFC-9320CW|MFC|laser|color|mfp|2011|office
Brother|MFC-9330CDW|MFC|laser|color|mfp|2013|office
Brother|MFC-9340CDW|MFC|laser|color|mfp|2014|office
Brother|MFC-9460CDN|MFC|laser|color|mfp|2015|office
Brother|MFC-9465CDN|MFC|laser|color|mfp|2016|office
Brother|MFC-9970CDW|MFC|laser|color|mfp|2017|office
Brother|MFC-L2700DW|MFC-L|laser|mono|mfp|2015|office
Brother|MFC-L2710DW|MFC-L|laser|mono|mfp|2016|office
Brother|MFC-L2730DW|MFC-L|laser|mono|mfp|2019|office
Brother|MFC-L2750DW|MFC-L|laser|mono|mfp|2019|office
Brother|MFC-L2800DW|MFC-L|laser|mono|mfp|2023|office
Brother|MFC-L2885DW|MFC-L|laser|mono|mfp|2024|office
Brother|MFC-L3740CDW|MFC-L|laser|color|mfp|2020|office
Brother|MFC-L3770CDW|MFC-L|laser|color|mfp|2021|office
Brother|MFC-L5700DN|MFC-L|laser|mono|mfp|2016|office
Brother|MFC-L5750DW|MFC-L|laser|mono|mfp|2017|office
Brother|MFC-L5900DW|MFC-L|laser|mono|mfp|2018|office
Brother|MFC-L6900DW|MFC-L|laser|mono|mfp|2019|enterprise
Brother|MFC-L8600CDW|MFC-L|laser|color|mfp|2017|office
Brother|MFC-L8900CDW|MFC-L|laser|color|mfp|2019|enterprise
Brother|MFC-L9570CDW|MFC-L|laser|color|mfp|2020|enterprise
Brother|MFC-J220|MFC-J|inkjet|color|mfp|2010|home
Brother|MFC-J430W|MFC-J|inkjet|color|mfp|2012|home
Brother|MFC-J470DW|MFC-J|inkjet|color|mfp|2014|home
Brother|MFC-J480DW|MFC-J|inkjet|color|mfp|2015|home
Brother|MFC-J491DW|MFC-J|inkjet|color|mfp|2017|home
Brother|MFC-J5330DW|MFC-J|inkjet|color|mfp|2017|office
Brother|MFC-J5720DW|MFC-J|inkjet|color|mfp|2016|office
Brother|MFC-J5930DW|MFC-J|inkjet|color|mfp|2018|office
Brother|MFC-J6530DW|MFC-J|inkjet|color|mfp|2018|office
Brother|MFC-J6930DW|MFC-J|inkjet|color|mfp|2018|office
Brother|MFC-J6945DW|MFC-J|inkjet|color|mfp|2018|office
Brother|MFC-J6955DW|MFC-J|inkjet|color|mfp|2020|enterprise
Brother|MFC-J6995DW|MFC-J|inkjet|color|mfp|2020|enterprise
Brother|MFC-J995DW|MFC-J|inkjet|color|mfp|2019|home
Brother|MFC-J1010DW|MFC-J|inkjet|color|mfp|2021|home
Brother|MFC-J1205W|MFC-J|inkjet|color|mfp|2022|home
Brother|MFC-J1300DW|MFC-J|inkjet|color|mfp|2022|home
Brother|MFC-J4335DW|MFC-J|inkjet|color|mfp|2021|office
Brother|MFC-J5340DW|MFC-J|inkjet|color|mfp|2022|office
Brother|MFC-J5955DW|MFC-J|inkjet|color|mfp|2021|enterprise
Lexmark|E120|E|laser|mono|print|2005|office
Lexmark|E230|E|laser|mono|print|2003|office
Lexmark|E250d|E|laser|mono|print|2007|office
Lexmark|E260d|E|laser|mono|print|2008|office
Lexmark|E360d|E|laser|mono|print|2010|office
Lexmark|E460dn|E|laser|mono|print|2010|office
Lexmark|T630|T|laser|mono|print|2002|enterprise
Lexmark|T640|T|laser|mono|print|2005|enterprise
Lexmark|T650n|T|laser|mono|print|2008|enterprise
Lexmark|T654dn|T|laser|mono|print|2010|enterprise
Lexmark|X203n|X|laser|mono|mfp|2009|office
Lexmark|X264dn|X|laser|mono|mfp|2010|office
Lexmark|X363dn|X|laser|mono|mfp|2011|office
Lexmark|X463de|X|laser|mono|mfp|2011|office
Lexmark|X560n|X|laser|color|mfp|2008|office
Lexmark|X792de|X|laser|color|mfp|2011|enterprise
Lexmark|X950de|X|laser|color|mfp|2012|enterprise
Lexmark|C540n|C|laser|color|print|2008|office
Lexmark|C544dn|C|laser|color|print|2009|office
Lexmark|C746dn|C|laser|color|print|2011|office
Lexmark|C792de|C|laser|color|print|2011|enterprise
Lexmark|C950de|C|laser|color|print|2012|enterprise
Lexmark|MS310d|MS|laser|mono|print|2013|office
Lexmark|MS312dn|MS|laser|mono|print|2014|office
Lexmark|MS410dn|MS|laser|mono|print|2014|office
Lexmark|MS510dn|MS|laser|mono|print|2014|office
Lexmark|MS610dn|MS|laser|mono|print|2014|office
Lexmark|MS710dn|MS|laser|mono|print|2014|enterprise
Lexmark|MS810dn|MS|laser|mono|print|2014|enterprise
Lexmark|MS911de|MS|laser|mono|print|2015|enterprise
Lexmark|MX310dn|MX|laser|mono|mfp|2013|office
Lexmark|MX410de|MX|laser|mono|mfp|2014|office
Lexmark|MX510de|MX|laser|mono|mfp|2014|office
Lexmark|MX610de|MX|laser|mono|mfp|2014|office
Lexmark|MX710de|MX|laser|mono|mfp|2014|enterprise
Lexmark|MX810de|MX|laser|mono|mfp|2014|enterprise
Lexmark|MX911dte|MX|laser|mono|mfp|2015|enterprise
Lexmark|CS310dn|CS|laser|color|print|2013|office
Lexmark|CS410dn|CS|laser|color|print|2014|office
Lexmark|CS510de|CS|laser|color|print|2014|office
Lexmark|CS720de|CS|laser|color|print|2016|office
Lexmark|CS820de|CS|laser|color|print|2017|enterprise
Lexmark|CX310dn|CX|laser|color|mfp|2013|office
Lexmark|CX410de|CX|laser|color|mfp|2014|office
Lexmark|CX510de|CX|laser|color|mfp|2014|office
Lexmark|CX725de|CX|laser|color|mfp|2016|office
Lexmark|CX820de|CX|laser|color|mfp|2017|enterprise
Lexmark|CX920de|CX|laser|color|mfp|2017|enterprise
Xerox|Phaser 3110|Phaser|laser|mono|print|2004|office
Xerox|Phaser 3124|Phaser|laser|mono|print|2007|office
Xerox|Phaser 3140|Phaser|laser|mono|print|2008|office
Xerox|Phaser 3250|Phaser|laser|mono|print|2010|office
Xerox|Phaser 3320|Phaser|laser|mono|print|2013|office
Xerox|Phaser 3330|Phaser|laser|mono|print|2016|office
Xerox|Phaser 6010|Phaser|laser|color|print|2011|office
Xerox|Phaser 6020|Phaser|laser|color|print|2013|home
Xerox|Phaser 6022|Phaser|laser|color|print|2014|home
Xerox|Phaser 6500|Phaser|laser|color|print|2011|office
Xerox|Phaser 6600|Phaser|laser|color|print|2012|office
Xerox|Phaser 6700|Phaser|laser|color|print|2013|office
Xerox|Phaser 7100|Phaser|laser|color|print|2012|office
Xerox|Phaser 7500|Phaser|laser|color|print|2011|enterprise
Xerox|Phaser 7800|Phaser|laser|color|print|2013|enterprise
Xerox|WorkCentre 3119|WorkCentre|laser|mono|mfp|2007|office
Xerox|WorkCentre 3210|WorkCentre|laser|mono|mfp|2010|office
Xerox|WorkCentre 3220|WorkCentre|laser|mono|mfp|2010|office
Xerox|WorkCentre 3315|WorkCentre|laser|mono|mfp|2013|office
Xerox|WorkCentre 3345|WorkCentre|laser|mono|mfp|2015|office
Xerox|WorkCentre 3655|WorkCentre|laser|mono|mfp|2014|enterprise
Xerox|WorkCentre 5865|WorkCentre|laser|mono|mfp|2013|enterprise
Xerox|WorkCentre 5875|WorkCentre|laser|mono|mfp|2013|enterprise
Xerox|WorkCentre 5945|WorkCentre|laser|mono|mfp|2014|enterprise
Xerox|WorkCentre 6015|WorkCentre|laser|color|mfp|2011|office
Xerox|WorkCentre 6027|WorkCentre|laser|color|mfp|2013|office
Xerox|WorkCentre 6505|WorkCentre|laser|color|mfp|2011|office
Xerox|WorkCentre 6605|WorkCentre|laser|color|mfp|2012|office
Xerox|WorkCentre 6655|WorkCentre|laser|color|mfp|2013|enterprise
Xerox|WorkCentre 7225|WorkCentre|laser|color|mfp|2011|enterprise
Xerox|WorkCentre 7835|WorkCentre|laser|color|mfp|2014|enterprise
Xerox|WorkCentre 7970|WorkCentre|laser|color|mfp|2015|enterprise
Xerox|VersaLink B400|VersaLink|laser|mono|print|2017|office
Xerox|VersaLink B405|VersaLink|laser|mono|mfp|2017|office
Xerox|VersaLink B600|VersaLink|laser|mono|print|2018|office
Xerox|VersaLink B605|VersaLink|laser|mono|mfp|2018|office
Xerox|VersaLink B7025|VersaLink|laser|mono|mfp|2018|enterprise
Xerox|VersaLink C400|VersaLink|laser|color|print|2017|office
Xerox|VersaLink C405|VersaLink|laser|color|mfp|2017|office
Xerox|VersaLink C500|VersaLink|laser|color|print|2018|office
Xerox|VersaLink C505|VersaLink|laser|color|mfp|2018|office
Xerox|VersaLink C7000|VersaLink|laser|color|print|2018|enterprise
Xerox|VersaLink C7020|VersaLink|laser|color|mfp|2018|enterprise
Xerox|VersaLink C8000|VersaLink|laser|color|print|2019|enterprise
Xerox|AltaLink B8045|AltaLink|laser|mono|mfp|2018|enterprise
Xerox|AltaLink B8075|AltaLink|laser|mono|mfp|2018|enterprise
Xerox|AltaLink C8030|AltaLink|laser|color|mfp|2018|enterprise
Xerox|AltaLink C8055|AltaLink|laser|color|mfp|2018|enterprise
Xerox|AltaLink C8170|AltaLink|laser|color|mfp|2020|enterprise
Xerox|DocuPrint M105|DocuPrint|laser|mono|mfp|2011|office
Xerox|DocuPrint P105|DocuPrint|laser|mono|print|2011|office
Xerox|DocuPrint M228|DocuPrint|laser|mono|mfp|2015|office
Xerox|DocuPrint P228|DocuPrint|laser|mono|print|2015|office
Xerox|DocuPrint CP105|DocuPrint|laser|color|print|2011|office
Xerox|DocuPrint CM205|DocuPrint|laser|color|mfp|2011|office
Xerox|DocuPrint CP225|DocuPrint|laser|color|print|2014|office
Xerox|DocuPrint CM228|DocuPrint|laser|color|mfp|2016|office
Ricoh|Aficio SP 100|Aficio SP|laser|mono|print|2010|home
Ricoh|Aficio SP 200|Aficio SP|laser|mono|print|2011|home
Ricoh|Aficio SP 210|Aficio SP|laser|mono|print|2012|home
Ricoh|Aficio SP 311|Aficio SP|laser|mono|mfp|2013|office
Ricoh|Aficio SP 3400|Aficio SP|laser|mono|print|2009|office
Ricoh|Aficio SP 3600|Aficio SP|laser|mono|print|2011|office
Ricoh|Aficio SP 4510|Aficio SP|laser|mono|print|2013|office
Ricoh|Aficio SP C240|Aficio SP|laser|color|print|2011|office
Ricoh|Aficio SP C250|Aficio SP|laser|color|print|2012|office
Ricoh|Aficio SP C320|Aficio SP|laser|color|print|2013|office
Ricoh|Aficio SP C840|Aficio SP|laser|color|print|2016|enterprise
Ricoh|SP 200|SP|laser|mono|print|2011|home
Ricoh|SP 210|SP|laser|mono|print|2012|home
Ricoh|SP 330|SP|laser|mono|print|2015|office
Ricoh|SP 3710|SP|laser|mono|print|2017|office
Ricoh|SP 4510|SP|laser|mono|print|2013|office
Ricoh|SP 6430|SP|laser|mono|print|2015|enterprise
Ricoh|SP C260|SP|laser|color|print|2015|office
Ricoh|SP C261|SP|laser|color|mfp|2016|office
Ricoh|SP C360|SP|laser|color|print|2017|office
Ricoh|SP C840|SP|laser|color|print|2016|enterprise
Ricoh|MP 2014|MP|laser|mono|mfp|2015|office
Ricoh|MP 2501|MP|laser|mono|mfp|2013|office
Ricoh|MP 305|MP|laser|mono|mfp|2015|office
Ricoh|MP 4054|MP|laser|mono|mfp|2015|enterprise
Ricoh|MP 5054|MP|laser|mono|mfp|2015|enterprise
Ricoh|MP 6054|MP|laser|mono|mfp|2015|enterprise
Ricoh|MP 7503|MP|laser|mono|mfp|2015|enterprise
Ricoh|MP C2004|MP|laser|color|mfp|2017|office
Ricoh|MP C3004|MP|laser|color|mfp|2016|office
Ricoh|MP C3504|MP|laser|color|mfp|2016|office
Ricoh|MP C4504|MP|laser|color|mfp|2016|enterprise
Ricoh|MP C6004|MP|laser|color|mfp|2017|enterprise
Ricoh|MP C6503|MP|laser|color|mfp|2015|enterprise
Ricoh|IM C300|IM|laser|color|mfp|2019|enterprise
Ricoh|IM C4500|IM|laser|color|mfp|2020|enterprise
Ricoh|IM C5300|IM|laser|color|mfp|2021|enterprise
Ricoh|IM 350|IM|laser|mono|mfp|2019|office
Ricoh|IM 430|IM|laser|mono|mfp|2020|office
Ricoh|IM C6000|IM|laser|color|mfp|2022|enterprise
Kyocera|FS-1020MFP|FS|laser|mono|mfp|2011|office
Kyocera|FS-1040|FS|laser|mono|print|2012|home
Kyocera|FS-1060DN|FS|laser|mono|print|2013|home
Kyocera|FS-1120MFP|FS|laser|mono|mfp|2012|office
Kyocera|FS-1135MFP|FS|laser|mono|mfp|2013|office
Kyocera|FS-1320D|FS|laser|mono|print|2011|office
Kyocera|FS-1370DN|FS|laser|mono|print|2012|office
Kyocera|FS-2100DN|FS|laser|mono|print|2013|enterprise
Kyocera|FS-4200DN|FS|laser|mono|print|2014|enterprise
Kyocera|FS-C1020MFP|FS-C|laser|color|mfp|2011|office
Kyocera|FS-C2026MFP|FS-C|laser|color|mfp|2011|office
Kyocera|FS-C5250DN|FS-C|laser|color|print|2011|office
Kyocera|FS-C5400DN|FS-C|laser|color|print|2011|enterprise
Kyocera|ECOSYS M2030dn|ECOSYS|laser|mono|mfp|2015|office
Kyocera|ECOSYS M2135dn|ECOSYS|laser|mono|mfp|2016|office
Kyocera|ECOSYS M2635dn|ECOSYS|laser|mono|mfp|2017|office
Kyocera|ECOSYS M3040dn|ECOSYS|laser|mono|mfp|2016|office
Kyocera|ECOSYS M3660idn|ECOSYS|laser|mono|mfp|2018|enterprise
Kyocera|ECOSYS M5521cdn|ECOSYS|laser|color|mfp|2016|office
Kyocera|ECOSYS M5526cdw|ECOSYS|laser|color|mfp|2018|office
Kyocera|ECOSYS M6230cidn|ECOSYS|laser|color|mfp|2018|enterprise
Kyocera|ECOSYS M8130cidn|ECOSYS|laser|color|mfp|2020|enterprise
Kyocera|ECOSYS P2040dn|ECOSYS|laser|mono|print|2015|office
Kyocera|ECOSYS P3055dn|ECOSYS|laser|mono|print|2016|office
Kyocera|ECOSYS P3155dn|ECOSYS|laser|mono|print|2017|office
Kyocera|ECOSYS P3260dn|ECOSYS|laser|mono|print|2018|office
Kyocera|ECOSYS P4040dn|ECOSYS|laser|mono|print|2017|enterprise
Kyocera|ECOSYS P5021cdn|ECOSYS|laser|color|print|2016|office
Kyocera|ECOSYS P5026cdw|ECOSYS|laser|color|print|2017|office
Kyocera|ECOSYS P6230cdn|ECOSYS|laser|color|print|2017|enterprise
Kyocera|ECOSYS P7240cdn|ECOSYS|laser|color|print|2019|enterprise
Kyocera|TASKalfa 2552ci|TASKalfa|laser|color|mfp|2017|enterprise
Kyocera|TASKalfa 3252ci|TASKalfa|laser|color|mfp|2017|enterprise
Kyocera|TASKalfa 4052ci|TASKalfa|laser|color|mfp|2018|enterprise
Kyocera|TASKalfa 6052ci|TASKalfa|laser|color|mfp|2018|enterprise
Kyocera|TASKalfa 2553ci|TASKalfa|laser|color|mfp|2019|enterprise
Kyocera|TASKalfa 3553ci|TASKalfa|laser|color|mfp|2019|enterprise
Kyocera|TASKalfa 7003i|TASKalfa|laser|mono|mfp|2019|enterprise
Kyocera|TASKalfa 8002i|TASKalfa|laser|mono|mfp|2018|enterprise
Kyocera|TASKalfa MZ4000i|TASKalfa|laser|mono|mfp|2022|enterprise
Konica Minolta|bizhub 162|bizhub|laser|mono|mfp|2005|office
Konica Minolta|bizhub 215|bizhub|laser|mono|mfp|2010|office
Konica Minolta|bizhub 283|bizhub|laser|mono|mfp|2009|enterprise
Konica Minolta|bizhub 363|bizhub|laser|mono|mfp|2010|enterprise
Konica Minolta|bizhub 423|bizhub|laser|mono|mfp|2010|enterprise
Konica Minolta|bizhub 501|bizhub|laser|mono|mfp|2011|enterprise
Konica Minolta|bizhub 601|bizhub|laser|mono|mfp|2011|enterprise
Konica Minolta|bizhub 227|bizhub|laser|mono|mfp|2015|office
Konica Minolta|bizhub 287|bizhub|laser|mono|mfp|2015|office
Konica Minolta|bizhub 367|bizhub|laser|mono|mfp|2015|office
Konica Minolta|bizhub 458|bizhub|laser|mono|mfp|2016|enterprise
Konica Minolta|bizhub 558|bizhub|laser|mono|mfp|2016|enterprise
Konica Minolta|bizhub 658|bizhub|laser|mono|mfp|2016|enterprise
Konica Minolta|bizhub 758|bizhub|laser|mono|mfp|2017|enterprise
Konica Minolta|bizhub 950i|bizhub i|laser|mono|mfp|2020|enterprise
Konica Minolta|bizhub C200|bizhub|laser|color|mfp|2008|office
Konica Minolta|bizhub C280|bizhub|laser|color|mfp|2010|office
Konica Minolta|bizhub C360|bizhub|laser|color|mfp|2011|office
Konica Minolta|bizhub C452|bizhub|laser|color|mfp|2011|enterprise
Konica Minolta|bizhub C552|bizhub|laser|color|mfp|2012|enterprise
Konica Minolta|bizhub C652|bizhub|laser|color|mfp|2012|enterprise
Konica Minolta|bizhub C224|bizhub|laser|color|mfp|2014|office
Konica Minolta|bizhub C284|bizhub|laser|color|mfp|2014|office
Konica Minolta|bizhub C364|bizhub|laser|color|mfp|2014|office
Konica Minolta|bizhub C454|bizhub|laser|color|mfp|2015|enterprise
Konica Minolta|bizhub C554|bizhub|laser|color|mfp|2015|enterprise
Konica Minolta|bizhub C658|bizhub|laser|color|mfp|2017|enterprise
Konica Minolta|bizhub C250i|bizhub i|laser|color|mfp|2019|office
Konica Minolta|bizhub C300i|bizhub i|laser|color|mfp|2019|office
Konica Minolta|bizhub C360i|bizhub i|laser|color|mfp|2020|office
Konica Minolta|bizhub C450i|bizhub i|laser|color|mfp|2020|enterprise
Konica Minolta|bizhub C550i|bizhub i|laser|color|mfp|2020|enterprise
Konica Minolta|bizhub C650i|bizhub i|laser|color|mfp|2021|enterprise
Konica Minolta|bizhub C750i|bizhub i|laser|color|mfp|2021|enterprise
Konica Minolta|bizhub 300i|bizhub i|laser|mono|mfp|2020|office
Konica Minolta|bizhub 360i|bizhub i|laser|mono|mfp|2020|office
Konica Minolta|magicolor 1600W|magicolor|laser|color|print|2008|home
Konica Minolta|magicolor 4650EN|magicolor|laser|color|print|2009|office
Konica Minolta|pagepro 1400W|pagepro|laser|mono|print|2009|home
Konica Minolta|pagepro 4650EN|pagepro|laser|mono|print|2010|office
Sharp|AR-2008D|AR|laser|mono|mfp|2010|office
Sharp|AR-5620|AR|laser|mono|mfp|2008|office
Sharp|AR-M236|AR|laser|mono|mfp|2005|office
Sharp|AR-M620N|AR|laser|mono|mfp|2005|enterprise
Sharp|MX-2300N|MX|laser|color|mfp|2008|office
Sharp|MX-2700N|MX|laser|color|mfp|2009|office
Sharp|MX-3500N|MX|laser|color|mfp|2009|enterprise
Sharp|MX-5001N|MX|laser|color|mfp|2010|enterprise
Sharp|MX-2614N|MX|laser|color|mfp|2013|office
Sharp|MX-3115N|MX|laser|color|mfp|2014|office
Sharp|MX-2615N|MX|laser|color|mfp|2015|office
Sharp|MX-4071|MX|laser|mono|mfp|2017|enterprise
Sharp|MX-5071|MX|laser|mono|mfp|2017|enterprise
Sharp|MX-3070N|MX|laser|color|mfp|2017|office
Sharp|MX-3570N|MX|laser|color|mfp|2018|office
Sharp|MX-4070N|MX|laser|color|mfp|2018|enterprise
Sharp|MX-5070N|MX|laser|color|mfp|2018|enterprise
Sharp|MX-6070N|MX|laser|color|mfp|2019|enterprise
Sharp|MX-3050V|MX|laser|color|mfp|2019|office
Sharp|MX-4061|MX|laser|mono|mfp|2020|enterprise
Sharp|BP-30M28|BP|laser|mono|mfp|2021|office
Sharp|BP-50C45|BP|laser|color|mfp|2021|enterprise
Sharp|BP-70C65|BP|laser|color|mfp|2022|enterprise
OKI|B2200|B|laser|mono|print|2004|home
OKI|B410|B|laser|mono|print|2008|office
OKI|B430|B|laser|mono|print|2009|office
OKI|B4400|B|laser|mono|print|2007|office
OKI|B4600|B|laser|mono|print|2008|office
OKI|B721|B|laser|mono|print|2012|enterprise
OKI|B830|B|laser|mono|print|2013|enterprise
OKI|C310|C|laser|color|print|2010|home
OKI|C330|C|laser|color|print|2011|home
OKI|C510|C|laser|color|print|2010|office
OKI|C530|C|laser|color|print|2011|office
OKI|C610|C|laser|color|print|2012|office
OKI|C810|C|laser|color|print|2011|enterprise
OKI|C830|C|laser|color|print|2012|enterprise
OKI|C911|C|laser|color|print|2015|enterprise
OKI|MC361|MC|laser|color|mfp|2011|office
OKI|MC562|MC|laser|color|mfp|2013|office
OKI|MC573|MC|laser|color|mfp|2017|office
OKI|MB441|MB|laser|mono|mfp|2010|office
OKI|MB471|MB|laser|mono|mfp|2011|office
OKI|MB760|MB|laser|mono|mfp|2013|enterprise
OKI|ES7411|ES|laser|color|print|2014|enterprise
OKI|ES8455|ES|laser|color|mfp|2016|enterprise
OKI|ML1120|ML|dotmatrix|mono|print|2003|office
Samsung|ML-1660|ML|laser|mono|print|2009|home
Samsung|ML-1670|ML|laser|mono|print|2010|home
Samsung|ML-1860|ML|laser|mono|print|2011|home
Samsung|ML-2160|ML|laser|mono|print|2012|home
Samsung|ML-2165|ML|laser|mono|print|2013|home
Samsung|ML-2510|ML|laser|mono|print|2006|office
Samsung|ML-2850D|ML|laser|mono|print|2008|office
Samsung|ML-3310D|ML|laser|mono|print|2010|office
Samsung|ML-3710ND|ML|laser|mono|print|2011|office
Samsung|ML-4510ND|ML|laser|mono|print|2011|enterprise
Samsung|SCX-3200|SCX|laser|mono|mfp|2010|home
Samsung|SCX-3400|SCX|laser|mono|mfp|2011|home
Samsung|SCX-4200|SCX|laser|mono|mfp|2006|office
Samsung|SCX-4521F|SCX|laser|mono|mfp|2007|office
Samsung|SCX-4623F|SCX|laser|mono|mfp|2009|office
Samsung|SCX-4833FD|SCX|laser|mono|mfp|2011|office
Samsung|SCX-5637FR|SCX|laser|mono|mfp|2011|office
Samsung|CLP-315|CLP|laser|color|print|2008|home
Samsung|CLP-365|CLP|laser|color|print|2012|home
Samsung|CLP-680ND|CLP|laser|color|print|2013|office
Samsung|CLX-3185|CLX|laser|color|mfp|2010|home
Samsung|CLX-3305|CLX|laser|color|mfp|2012|home
Samsung|CLX-6260FD|CLX|laser|color|mfp|2013|office
Samsung|CLX-9201NA|CLX|laser|color|mfp|2012|enterprise
Dell|1100|Laser Printer|laser|mono|print|2004|home
Dell|1720|Laser Printer|laser|mono|print|2007|office
Dell|2330d|Laser Printer|laser|mono|print|2009|office
Dell|2350d|Laser Printer|laser|mono|print|2010|office
Dell|B1160w|B Series|laser|mono|print|2013|home
Dell|B2360d|B Series|laser|mono|print|2014|office
Dell|B3465dnf|B Series|laser|mono|mfp|2015|office
Dell|C1660w|C Series|laser|color|print|2013|home
Dell|C1760nw|C Series|laser|color|print|2013|home
Dell|C3760dn|C Series|laser|color|print|2012|office
Dell|C3765dnf|C Series|laser|color|mfp|2012|office
Dell|S2810dn|S Series|laser|mono|print|2015|office
Dell|E310dw|E Series|laser|mono|print|2016|office
Lenovo|LJ2000|LJ|laser|mono|print|2008|office
Lenovo|LJ2200|LJ|laser|mono|print|2010|office
Lenovo|LJ2250|LJ|laser|mono|print|2012|office
Lenovo|LJ2600|LJ|laser|mono|print|2010|office
Lenovo|LJ2605D|LJ|laser|mono|print|2014|office
Lenovo|LJ2655DN|LJ|laser|mono|print|2015|office
Lenovo|LJ4000D|LJ|laser|mono|print|2017|office
Lenovo|M2040|M|laser|mono|mfp|2011|office
Lenovo|M2250|M|laser|mono|mfp|2013|office
Lenovo|M7400|M|laser|mono|mfp|2013|office
Lenovo|M7605D|M|laser|mono|mfp|2015|office
Lenovo|M7675DXF|M|laser|mono|mfp|2016|office
Lenovo|CS2010DW|CS|laser|color|print|2016|office
Lenovo|CM7110W|CM|laser|color|mfp|2017|office
Pantum|P2200|P|laser|mono|print|2014|home
Pantum|P2500|P|laser|mono|print|2016|home
Pantum|P2506|P|laser|mono|print|2018|home
Pantum|P3000|P|laser|mono|print|2016|office
Pantum|P3300|P|laser|mono|print|2018|office
Pantum|M6200|M|laser|mono|mfp|2015|home
Pantum|M6500|M|laser|mono|mfp|2017|home
Pantum|M6700|M|laser|mono|mfp|2019|office
Pantum|M7100|M|laser|mono|mfp|2020|office
Pantum|CP2200|CP|laser|color|print|2018|home
Pantum|CP2500|CP|laser|color|print|2020|home
Pantum|CM7000|CM|laser|color|mfp|2019|office
Pantum|CM7115|CM|laser|color|mfp|2021|office
Pantum|BM5100|BM|laser|mono|mfp|2022|office
Pantum|CP2506|CP|laser|color|print|2023|office
Pantum|M7300FDW|M|laser|mono|mfp|2023|office
Fujifilm|DocuPrint M115|DocuPrint|laser|mono|mfp|2012|office
Fujifilm|DocuPrint P115|DocuPrint|laser|mono|print|2012|office
Fujifilm|DocuPrint M265z|DocuPrint|laser|mono|mfp|2015|office
Fujifilm|DocuPrint P265dw|DocuPrint|laser|mono|print|2015|office
Fujifilm|DocuPrint CM315z|DocuPrint|laser|color|mfp|2015|office
Fujifilm|DocuPrint CP315dw|DocuPrint|laser|color|print|2015|office
Fujifilm|Apeos 2350|Apeos|laser|mono|mfp|2020|office
Fujifilm|Apeos C2560|Apeos|laser|color|mfp|2020|enterprise
Fujifilm|Apeos C7070|Apeos|laser|color|mfp|2021|enterprise
Fujifilm|Apeos 4500|Apeos|laser|mono|mfp|2021|enterprise
Fujifilm|ApeosPort C4570|ApeosPort|laser|color|mfp|2022|enterprise
Fujifilm|ApeosPort 7500|ApeosPort|laser|mono|mfp|2022|enterprise
Toshiba|e-STUDIO 2006|e-STUDIO|laser|mono|mfp|2016|office
Toshiba|e-STUDIO 2505|e-STUDIO|laser|mono|mfp|2016|office
Toshiba|e-STUDIO 3005|e-STUDIO|laser|mono|mfp|2017|office
Toshiba|e-STUDIO 5005|e-STUDIO|laser|mono|mfp|2017|enterprise
Toshiba|e-STUDIO 5506|e-STUDIO|laser|mono|mfp|2018|enterprise
Toshiba|e-STUDIO 7506|e-STUDIO|laser|mono|mfp|2019|enterprise
Toshiba|e-STUDIO 2050C|e-STUDIO|laser|color|mfp|2013|office
Toshiba|e-STUDIO 2555C|e-STUDIO|laser|color|mfp|2015|office
Toshiba|e-STUDIO 3055C|e-STUDIO|laser|color|mfp|2016|office
Toshiba|e-STUDIO 5070C|e-STUDIO|laser|color|mfp|2017|enterprise
Toshiba|e-STUDIO 5508A|e-STUDIO|laser|mono|mfp|2020|enterprise
Toshiba|e-STUDIO 5008A|e-STUDIO|laser|mono|mfp|2020|enterprise
Toshiba|e-STUDIO 3015AC|e-STUDIO|laser|color|mfp|2021|office
Zebra|ZD220|ZD|thermal|mono|print|2018|office
Zebra|ZD421|ZD|thermal|mono|print|2021|office
Zebra|ZD620|ZD|thermal|mono|print|2019|office
Zebra|ZD888|ZD|thermal|mono|print|2023|office
Zebra|ZT230|ZT|thermal|mono|print|2012|enterprise
Zebra|ZT411|ZT|thermal|mono|print|2018|enterprise
Zebra|ZT610|ZT|thermal|mono|print|2017|enterprise
Zebra|ZP505|ZP|thermal|mono|print|2013|office
Zebra|GX430t|GX|thermal|mono|print|2010|office
Zebra|LP2824|LP|thermal|mono|print|2003|office
TSC|TTP-244 Pro|TTP|thermal|mono|print|2010|office
TSC|TTP-345|TTP|thermal|mono|print|2014|office
TSC|TA210|TA|thermal|mono|print|2017|office
TSC|TC210|TC|thermal|mono|print|2019|office
TSC|TE210|TE|thermal|mono|print|2020|office
Gprinter|GP-3120TU|GP|thermal|mono|print|2016|office
Gprinter|GP-1324D|GP|thermal|mono|print|2018|office
Gprinter|GP-5890XIII|GP|thermal|mono|print|2014|office
Deli|DL-888A|DL|thermal|mono|print|2017|office
Deli|DL-581P|DL|thermal|mono|print|2019|office
Deli|DL-720W|DL|thermal|mono|print|2021|office
Star|SP712|SP|thermal|mono|print|2005|office
Star|TSP100III|TSP|thermal|mono|print|2013|office
Star|TSP650II|TSP|thermal|mono|print|2014|office
Dascom|DS-1100|DS|dotmatrix|mono|print|2010|office
Dascom|DS-2100|DS|dotmatrix|mono|print|2012|office
Dascom|DS-300|DS|dotmatrix|mono|print|2008|office
Dascom|DL-6400|DL|dotmatrix|mono|print|2015|office
Dascom|AR-540|AR|dotmatrix|mono|print|2005|office
Jolimark|FP-620K|FP|dotmatrix|mono|print|2011|office
Jolimark|FP-630K|FP|dotmatrix|mono|print|2013|office
Jolimark|FP-660K|FP|dotmatrix|mono|print|2016|office
Jolimark|LQ-300K|LQ|dotmatrix|mono|print|2007|office
SNBC|BTP-L42|BTP|thermal|mono|print|2016|office
SNBC|BTP-2200E|BTP|thermal|mono|print|2012|office
SNBC|BTP-3200E|BTP|thermal|mono|print|2014|office

HP|LaserJet Pro 3001dw|LaserJet Pro|laser|mono|print|2023|office
HP|LaserJet Pro 3003dw|LaserJet Pro|laser|mono|print|2023|office
HP|LaserJet Pro 4004d|LaserJet Pro|laser|mono|print|2024|office
HP|LaserJet Pro 4004dn|LaserJet Pro|laser|mono|print|2024|office
HP|LaserJet Pro 4004dw|LaserJet Pro|laser|mono|print|2024|office
HP|LaserJet Pro MFP 4101fdw|LaserJet Pro|laser|mono|mfp|2024|office
HP|LaserJet Pro MFP 4102fdw|LaserJet Pro|laser|mono|mfp|2024|office
HP|LaserJet Pro MFP 4103fdw|LaserJet Pro|laser|mono|mfp|2024|office
HP|Color LaserJet Pro 3202dw|Color LaserJet Pro|laser|color|print|2024|office
HP|Color LaserJet Pro 4201dw|Color LaserJet Pro|laser|color|print|2024|office
HP|Color LaserJet Pro 4202dw|Color LaserJet Pro|laser|color|print|2024|office
HP|Color LaserJet Pro 4203dw|Color LaserJet Pro|laser|color|print|2024|office
HP|Color LaserJet Pro MFP 4301fdw|Color LaserJet Pro|laser|color|mfp|2024|office
HP|Color LaserJet Pro MFP 4302fdw|Color LaserJet Pro|laser|color|mfp|2024|office
HP|Color LaserJet Pro MFP 4303fdw|Color LaserJet Pro|laser|color|mfp|2024|office
HP|OfficeJet Pro 8135e|OfficeJet Pro|inkjet|color|mfp|2023|office
HP|OfficeJet Pro 9130e|OfficeJet Pro|inkjet|color|mfp|2023|office
HP|OfficeJet Pro 9130b|OfficeJet Pro|inkjet|color|mfp|2024|office
Epson|ET-1910|EcoTank|inkjet|color|print|2025|home
Epson|ET-2910|EcoTank|inkjet|color|mfp|2025|home
Epson|ET-2920|EcoTank|inkjet|color|mfp|2025|home
Epson|ET-2950|EcoTank|inkjet|color|mfp|2025|home
Epson|ET-2956|EcoTank|inkjet|color|mfp|2025|home
Epson|ET-3950|EcoTank|inkjet|color|mfp|2025|office
Epson|ET-3956|EcoTank|inkjet|color|mfp|2025|office
Epson|ET-4900|EcoTank|inkjet|color|mfp|2025|office
Epson|ET-4950|EcoTank|inkjet|color|mfp|2025|office
Epson|ET-4956|EcoTank|inkjet|color|mfp|2025|office
Epson|ET-4958|EcoTank|inkjet|color|mfp|2025|office
Canon|PIXMA TS7780|PIXMA|inkjet|color|mfp|2024|home
Canon|PIXMA TS7780A|PIXMA|inkjet|color|mfp|2024|home
Canon|MAXIFY GX1050|MAXIFY|inkjet|color|mfp|2023|office
Canon|MAXIFY GX2050|MAXIFY|inkjet|color|mfp|2023|office
Canon|MAXIFY GX4050|MAXIFY|inkjet|color|mfp|2023|office
Canon|MAXIFY GX5550|MAXIFY|inkjet|color|print|2023|office
Canon|MAXIFY GX1080|MAXIFY|inkjet|color|mfp|2024|office
Canon|MAXIFY GX2080|MAXIFY|inkjet|color|mfp|2024|office
Canon|MAXIFY GX5580|MAXIFY|inkjet|color|print|2024|office
Canon|MAXIFY GX6150|MAXIFY|inkjet|color|mfp|2025|office
Canon|MAXIFY GX7150|MAXIFY|inkjet|color|mfp|2025|office
Canon|MAXIFY GX5170|MAXIFY|inkjet|color|print|2025|office
Canon|MAXIFY GX6170|MAXIFY|inkjet|color|mfp|2025|office
Canon|MAXIFY GX7170|MAXIFY|inkjet|color|mfp|2025|office
Brother|HL-L1240W|HL-L|laser|mono|print|2025|home
Brother|DCP-L1640W|DCP-L|laser|mono|mfp|2025|home
Brother|DCP-L1660W|DCP-L|laser|mono|mfp|2025|home
Brother|HL-L2480DW|HL-L|laser|mono|print|2024|office
Brother|DCP-L2620DW|DCP-L|laser|mono|mfp|2024|office
Brother|DCP-L2640DW|DCP-L|laser|mono|mfp|2024|office
Brother|DCP-L5510DN|DCP-L|laser|mono|mfp|2024|office
Brother|MFC-L5915DW|MFC-L|laser|mono|mfp|2024|enterprise
Brother|DCP-T730DW|DCP-T|inkjet|color|mfp|2024|home

Lenovo|LJ2205|LJ|laser|mono|print|2014|home
Lenovo|LJ2206|LJ|laser|mono|print|2016|home
Lenovo|LJ2206W|LJ|laser|mono|print|2016|home
Lenovo|LJ2400 Pro|LJ|laser|mono|print|2016|office
Lenovo|LJ2405|LJ|laser|mono|print|2017|home
Lenovo|LJ2405D|LJ|laser|mono|print|2017|office
Lenovo|LJ2455D|LJ|laser|mono|print|2018|office
Lenovo|LJ5000DN|LJ|laser|mono|print|2019|office
Lenovo|M7206|M|laser|mono|mfp|2014|office
Lenovo|M7206W|M|laser|mono|mfp|2014|office
Lenovo|M7216|M|laser|mono|mfp|2016|office
Lenovo|M7216NWA|M|laser|mono|mfp|2016|office
Lenovo|M7255F|M|laser|mono|mfp|2016|office
Lenovo|M7256HF|M|laser|mono|mfp|2016|office
Lenovo|M7400 Pro|M|laser|mono|mfp|2017|office
Lenovo|M7400W|M|laser|mono|mfp|2017|office
Lenovo|M7405D|M|laser|mono|mfp|2017|office
Lenovo|M7405DW|M|laser|mono|mfp|2018|office
Lenovo|M7450F Pro|M|laser|mono|mfp|2017|office
Lenovo|M7455DNF|M|laser|mono|mfp|2018|office
Lenovo|M7460|M|laser|mono|mfp|2016|office
Lenovo|M7480|M|laser|mono|mfp|2018|office
Lenovo|M7605DW|M|laser|mono|mfp|2017|office
Lenovo|M7615DNA|M|laser|mono|mfp|2018|office
Lenovo|M7625DWA|M|laser|mono|mfp|2019|office
Lenovo|M7626DNA|M|laser|mono|mfp|2019|office
Lenovo|M7628DNA|M|laser|mono|mfp|2019|office
Lenovo|M7655DHF|M|laser|mono|mfp|2019|office
Lenovo|M7680D|M|laser|mono|mfp|2017|office
Lenovo|M7685DXF|M|laser|mono|mfp|2020|office
Lenovo|M7686DXF|M|laser|mono|mfp|2021|office
Lenovo|M7690DNA|M|laser|mono|mfp|2019|office
Lenovo|M8650DN|M|laser|mono|mfp|2020|office
Lenovo|M8950DNF|M|laser|mono|mfp|2021|office
Brother|HL-2260D|HL|laser|mono|print|2015|home
Brother|HL-2560DN|HL|laser|mono|print|2016|office
Brother|HL-2595DW|HL|laser|mono|print|2019|office
Brother|HL-5590DN|HL|laser|mono|print|2016|office
Brother|HL-5595DN|HL|laser|mono|print|2018|office
Brother|DCP-7180DN|DCP|laser|mono|mfp|2017|office
Brother|DCP-7190DW|DCP|laser|mono|mfp|2019|office
Brother|DCP-7195DW|DCP|laser|mono|mfp|2019|office
Brother|DCP-B7500D|DCP-B|laser|mono|mfp|2020|office
Brother|DCP-B7520DW|DCP-B|laser|mono|mfp|2020|office
Brother|DCP-B7535DW|DCP-B|laser|mono|mfp|2021|office
Brother|MFC-7380|MFC|laser|mono|mfp|2016|office
Brother|MFC-8535DN|MFC|laser|mono|mfp|2018|office
Brother|MFC-8540DN|MFC|laser|mono|mfp|2019|office
Brother|MFC-7895DW|MFC|laser|mono|mfp|2019|office
Brother|MFC-9350CDW|MFC|laser|color|mfp|2020|office
Brother|MFC-9140CDN|MFC|laser|color|mfp|2020|office
Brother|HL-B2000D|HL-B|laser|mono|print|2022|home
Brother|HL-B2050DN|HL-B|laser|mono|print|2022|office
HP|LaserJet M15a|LaserJet Pro|laser|mono|print|2019|home
HP|LaserJet M15w|LaserJet Pro|laser|mono|print|2019|home
HP|LaserJet M17a|LaserJet Pro|laser|mono|print|2020|home
HP|LaserJet M17w|LaserJet Pro|laser|mono|print|2020|home
HP|LaserJet M110|LaserJet Pro|laser|mono|print|2021|home
HP|LaserJet M111|LaserJet Pro|laser|mono|print|2021|home
HP|LaserJet M140|LaserJet Pro|laser|mono|print|2021|office
HP|LaserJet M141|LaserJet Pro|laser|mono|mfp|2021|office
HP|LaserJet M208dw|LaserJet Pro|laser|mono|print|2020|home
HP|LaserJet M211dw|LaserJet Pro|laser|mono|print|2020|home
HP|LaserJet M232dw|LaserJet Pro|laser|mono|mfp|2020|home
HP|LaserJet M233dw|LaserJet Pro|laser|mono|mfp|2020|home
HP|LaserJet M234dw|LaserJet Pro|laser|mono|mfp|2021|office
HP|LaserJet M236dw|LaserJet Pro|laser|mono|mfp|2021|office
HP|LaserJet M329dw|LaserJet Pro|laser|mono|mfp|2019|office
HP|LaserJet M437|LaserJet Pro|laser|mono|mfp|2020|office
HP|LaserJet M439|LaserJet Pro|laser|mono|mfp|2020|office
HP|LaserJet M440|LaserJet Pro|laser|mono|mfp|2022|office
HP|Color Laser 150nw|Color LaserJet Pro|laser|color|print|2019|office
HP|Color Laser 178nw|Color LaserJet Pro|laser|color|mfp|2021|office
HP|Color Laser MFP 179fnw|Color LaserJet Pro|laser|color|mfp|2021|office
HP|Color LaserJet Pro 4301|Color LaserJet Pro|laser|color|mfp|2022|office
HP|Color LaserJet Pro 4302|Color LaserJet Pro|laser|color|mfp|2022|office
HP|Color LaserJet Pro 4303|Color LaserJet Pro|laser|color|mfp|2022|office
HP|Neverstop Laser 1200|Neverstop|laser|mono|mfp|2019|home
HP|Neverstop Laser 1202|Neverstop|laser|mono|mfp|2020|office
Pantum|M6506|M|laser|mono|mfp|2020|home
Pantum|M6536|M|laser|mono|mfp|2021|home
Pantum|M6556|M|laser|mono|mfp|2021|home
Pantum|M6760|M|laser|mono|mfp|2021|office
Pantum|M6800|M|laser|mono|mfp|2022|office
Pantum|P2500W|P|laser|mono|print|2020|home
Pantum|P3010|P|laser|mono|print|2021|office
Pantum|P3300DN|P|laser|mono|print|2022|office
Pantum|M7100DN|M|laser|mono|mfp|2022|office
Pantum|CM2200|CM|laser|color|mfp|2021|office
HPRT|N31|N|thermal|mono|print|2019|office
HPRT|N41|N|thermal|mono|print|2020|office
HPRT|N51|N|thermal|mono|print|2021|office
HPRT|TP808|TP|thermal|mono|print|2018|office
HPRT|D45BT|D|thermal|mono|print|2020|office
HPRT|LPQ80|LPQ|thermal|mono|print|2022|office
Xprinter|XP-365B|XP|thermal|mono|print|2016|office
Xprinter|XP-460B|XP|thermal|mono|print|2018|office
Xprinter|XP-Q200|XP-Q|thermal|mono|print|2020|office
Xprinter|XP-DT108B|XP-DT|thermal|mono|print|2021|office
Xprinter|XP-C260H|XP-C|thermal|mono|print|2021|office
Argox|OS-214Plus|OS|thermal|mono|print|2008|office
Argox|OS-2140|OS|thermal|mono|print|2012|office
Argox|CP-2140|CP|thermal|mono|print|2013|office
Argox|X-1000VL|X|thermal|mono|print|2014|office
Argox|A-2240|A|thermal|mono|print|2020|office
`;
