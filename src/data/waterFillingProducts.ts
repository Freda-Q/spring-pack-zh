export type ProductImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type 水灌装产品 = {
  name: string;
  slug: string;
  capacityLabel: string;
  capacityRange: string;
  configuration: string;
  model: string;
  bottleRange: string;
  seoDescription: string;
  intro: string;
  sourceUrl?: string;
  sourceVideoUrl?: string;
  gallery: ProductImage[];
  keySpecs: [string, string][];
  bestFit: string[];
  highlights: string[];
  sourceNote: string;
};

const genericImage = '/assets/first-machinery/2026/05/water-filling-machine-product.webp';

const commonBestFit = [
  '纯净水、矿泉水和山泉水灌装厂',
  'PET瓶装水项目，从试验线到中型产能工厂',
  '独立灌装机更换或整线报价',
  '需要水处理、吹瓶、贴标和包装集成的项目案例',
];

const commonHighlights = [
  '三合一冲洗、灌装和封盖结构，减少瓶子转运和产线占地面积。',
  '不锈钢机架和卫生接触件，确保瓶装水生产稳定可靠。',
  'PLC控制、电驱动和自动理盖系统，使工厂团队日常操作更加便捷。',
  '可连接水处理、风送输送、吹瓶、贴标、日期打码、热收缩包装和纸箱包装设备。',
  '最终配置可根据瓶型尺寸、盖型、当地电压和车间布局进行调整。',
  '可在发货前安排工厂测试、视频验厂、备件和安装支持。',
];

const standardSpecs = {
  bottleShape: '圆形或方形PET瓶',
  bottleDiameter: 'Dia50-Dia115mm',
  bottleHeight: '160-320mm',
  compressorAir: '0.3-0.7MPa',
  washingMedium: '无菌水',
  rinsingPressure: '>0.06MPa 且 <0.2MPa',
  application: '瓶装水生产线',
};

const products: 水灌装产品[] = [
  {
    name: '4000BPH 水灌装机',
    slug: '4000bph-water-filling-machine',
    capacityLabel: '4,000 BPH',
    capacityRange: '3,000-4,000 瓶/小时',
    configuration: '12-12-5',
    model: 'XGF12-12-5',
    bottleRange: '100ml-10L',
    seoDescription:
      '4000BPH 全自动水灌装机，适用于纯净水、矿泉水和山泉水PET瓶。三合一冲洗、灌装和封盖单机，可搭配完整生产线方案。',
    intro:
      '4000BPH水灌装机是一款紧凑型全自动瓶装水生产线，适用于中小型生产基地。它将洗瓶、灌水和封盖集成于一台单机中，并可连接水处理、吹瓶、贴标和末端包装设备。',
    sourceUrl: 'https://www.alibaba.com/product-detail/4000BPH-水-灌装-Machine_1601784780866.html',
    sourceVideoUrl: 'https://cloud.video.alibaba.com/play/u/2153292369/p/1/e/6/t/1/d/hd/6000330428674.mp4',
    gallery: [
      {
        src: '/assets/first-machinery/products/water-filling-machine/4000bph-water-filling-machine/4000bph-water-filling-machine-hero-01.webp',
        alt: '4000BPH XGF12-12-5水灌装机，适用于100ml至10L PET瓶',
        caption: '4000BPH水灌装机主图',
      },
      {
        src: '/assets/first-machinery/products/water-filling-machine/4000bph-water-filling-machine/4000bph-water-filling-machine-hero-02.webp',
        alt: '4000BPH瓶装水灌装机内部的冲洗、灌装和封盖区域',
        caption: '冲洗、灌装和封盖单机细节',
      },
      {
        src: '/assets/first-machinery/products/water-filling-machine/4000bph-water-filling-machine/4000bph-water-filling-machine-hero-03.webp',
        alt: '4000BPH全自动瓶装水灌装机正面视图，适用于PET瓶生产线',
        caption: '全自动水灌装机正面视图',
      },
      {
        src: '/assets/first-machinery/products/water-filling-machine/4000bph-water-filling-machine/4000bph-water-filling-machine-hero-04.webp',
        alt: '4000BPH水灌装设备不锈钢瓶体输送和灌装细节',
        caption: '瓶体输送和灌装细节',
      },
      {
        src: '/assets/first-machinery/products/water-filling-machine/4000bph-water-filling-machine/4000bph-water-filling-machine-hero-05.webp',
        alt: '4000BPH瓶装水生产线设备细节图',
        caption: '原始产品描述中的设备细节',
      },
      {
        src: '/assets/first-machinery/products/water-filling-machine/4000bph-water-filling-machine/4000bph-water-filling-machine-hero-06.webp',
        alt: '4000BPH水灌装机全自动封盖系统细节',
        caption: '封盖系统细节',
      },
    ],
    keySpecs: [
      ['产能', '3,000-4,000 瓶/小时'],
      ['型号', 'XGF12-12-5'],
      ['配置', '12个冲洗头、12个灌装阀、5个封盖头'],
      ['适用瓶型', standardSpecs.bottleShape],
      ['瓶子直径', standardSpecs.bottleDiameter],
      ['瓶子高度', standardSpecs.bottleHeight],
      ['瓶子范围', '100ml-10L，以瓶子图纸确认为准'],
      ['压缩空气', standardSpecs.compressorAir],
      ['冲洗介质', standardSpecs.washingMedium],
      ['冲洗压力', standardSpecs.rinsingPressure],
      ['应用', standardSpecs.application],
      ['总功率', '4.4kW'],
      ['外形尺寸', '约 2.5m x 1.9m'],
      ['设备高度', '约 2.5m'],
      ['设备重量', '约 3,200kg'],
      ['原始产品ID', 'Alibaba 1601784780866'],
    ],
    bestFit: commonBestFit,
    highlights: commonHighlights,
    sourceNote:
      '本页面使用从阿里巴巴原始产品采集的资料，包括产品描述、产品图片和原始视频链接。文案已针对First Machinery的SEO和买家理解进行了重写。',
  },
  {
    name: '6000BPH 水灌装机',
    slug: '6000bph-water-filling-machine',
    capacityLabel: '6,000 BPH',
    capacityRange: '5,000-6,000 瓶/小时',
    configuration: '18-18-6',
    model: 'XGF18-18-6',
    bottleRange: '100ml-10L',
    seoDescription:
      '6000BPH 全自动水灌装机，适用于PET瓶装纯净水、矿泉水和山泉水生产线。',
    intro:
      '6000BPH水灌装机是一款中等产能三合一灌装方案，适合超出入门级产量的工厂。适用于需要稳定生产并留有下游自动化空间的瓶装纯净水、矿泉水和山泉水项目。',
    sourceUrl: 'https://www.alibaba.com/product-detail/6000BPH-水-灌装-Machine_1601784784944.html',
    gallery: [],
    keySpecs: [
      ['产能', '5,000-6,000 瓶/小时'],
      ['型号', 'XGF18-18-6'],
      ['配置', '18个冲洗头、18个灌装阀、6个封盖头'],
      ['适用瓶型', standardSpecs.bottleShape],
      ['瓶子直径', standardSpecs.bottleDiameter],
      ['瓶子高度', standardSpecs.bottleHeight],
      ['压缩空气', standardSpecs.compressorAir],
      ['冲洗介质', standardSpecs.washingMedium],
      ['总功率', '4.4kW'],
      ['外形尺寸', '约 2.8m x 2.15m'],
      ['设备高度', '约 2.5m'],
      ['设备重量', '约 4,000kg'],
      ['原始产品ID', 'Alibaba 1601784784944'],
    ],
    bestFit: commonBestFit,
    highlights: commonHighlights,
    sourceNote: '阿里巴巴原始页面已知，但完整媒体和iframe内容仍需登录后手动采集。',
  },
  {
    name: '12000BPH 水灌装机',
    slug: '12000bph-water-filling-machine',
    capacityLabel: '12,000 BPH',
    capacityRange: '8,000-12,000 瓶/小时',
    configuration: '24-24-8',
    model: 'XGF24-24-8',
    bottleRange: '100ml-10L',
    seoDescription:
      '12000BPH 全自动水灌装机，适用于中型瓶装水工厂，配备冲洗、灌装和封盖单机配置。',
    intro:
      '12000BPH水灌装机专为需要更强日产能的中型瓶装水工厂设计，同时保持可靠的三合一冲洗、灌装和封盖结构。可作为独立灌装机报价，也可作为完整瓶装水生产线的一部分。',
    sourceUrl: 'https://www.alibaba.com/product-detail/12000BPH-水-灌装-Machine_1601784816700.html',
    gallery: [
      {
        src: '/assets/first-machinery/products/water-filling-machine/12000bph-water-filling-machine/12000bph-water-filling-machine-main.webp',
        alt: '12000BPH XGF全自动瓶装水灌装机，用于PET瓶生产',
        caption: '12000BPH水灌装机主图',
      },
      {
        src: '/assets/first-machinery/products/water-filling-machine/12000bph-water-filling-machine/12000bph-water-filling-machine-overview.webp',
        alt: '供应商图库中12000BPH水灌装机的不锈钢旋转区域',
        caption: '旋转灌装区域',
      },
      {
        src: '/assets/first-machinery/products/water-filling-machine/12000bph-water-filling-machine/12000bph-water-filling-machine-rinsing-system.webp',
        alt: '12000BPH瓶装水生产线冲洗、灌装和封盖单机俯视图',
        caption: '冲洗、灌装和封盖单机',
      },
      {
        src: '/assets/first-machinery/products/water-filling-machine/12000bph-water-filling-machine/12000bph-water-filling-machine-front-view.webp',
        alt: '12000BPH水灌装机输送和转瓶区域细节',
        caption: '瓶体输送区域',
      },
      {
        src: '/assets/first-machinery/products/water-filling-machine/12000bph-water-filling-machine/12000bph-water-filling-machine-filling-valve.webp',
        alt: '12000BPH瓶装水灌装机灌装阀细节',
        caption: '灌装阀特写',
      },
    ],
    keySpecs: [
      ['产能', '8,000-12,000 瓶/小时'],
      ['型号', 'XGF24-24-8'],
      ['配置', '24个冲洗头、24个灌装阀、8个封盖头'],
      ['适用瓶型', standardSpecs.bottleShape],
      ['瓶子直径', standardSpecs.bottleDiameter],
      ['瓶子高度', standardSpecs.bottleHeight],
      ['灌装容量', '500 mL, 200mL, 100mL, 300mL, 400 mL, 1L, 2000 mL, 1000 mL, 5000 ml'],
      ['电压', '110V, 220V, 380V 或 415V'],
      ['总功率', '5.2kW'],
      ['灌装精度', '+/- 1mm'],
      ['包装材料', '塑料、玻璃和金属瓶'],
      ['材质', 'SUS304/316'],
      ['外形尺寸', '约 3.1m x 2.5m'],
      ['设备高度', '约 2.5m'],
      ['设备重量', '3,500kg'],
      ['保修期', '供应商属性显示为2年'],
      ['检验文件', '提供设备测试报告和视频出厂检验'],
      ['原始产品ID', 'Alibaba 1601784816700'],
    ],
    bestFit: commonBestFit,
    highlights: commonHighlights,
    sourceNote:
      '本页面使用从Chrome中打开的阿里巴巴原始产品采集的资料，包括供应商属性和主要图库图片。文案已针对First Machinery的SEO和买家理解进行了重写。',
  },
  {
    name: '15000BPH 水灌装机',
    slug: '15000bph-water-filling-machine',
    capacityLabel: '15,000 BPH',
    capacityRange: '13,000-15,000 瓶/小时',
    configuration: '32-32-10',
    model: 'XGF32-32-10',
    bottleRange: '100ml-10L',
    seoDescription:
      '15000BPH 全自动水灌装机，适用于集成冲洗、灌装和封盖的瓶装水生产线。',
    intro:
      '15000BPH水灌装机适用于需要更高产量和更完善产线自动化的成熟瓶装水工厂。该设备可连接水处理、吹瓶、贴标、包装和码垛设备。',
    sourceUrl: 'https://www.alibaba.com/product-detail/15000BPH-水-灌装-Machine_1601784813906.html',
    gallery: [],
    keySpecs: [
      ['产能', '13,000-15,000 瓶/小时'],
      ['型号', 'XGF32-32-10'],
      ['配置', '32个冲洗头、32个灌装阀、10个封盖头'],
      ['适用瓶型', standardSpecs.bottleShape],
      ['瓶子直径', standardSpecs.bottleDiameter],
      ['瓶子高度', standardSpecs.bottleHeight],
      ['总功率', '6.2kW'],
      ['外形尺寸', '约 3.8m x 2.8m'],
      ['设备高度', '约 2.5m'],
      ['设备重量', '约 6,500kg'],
      ['原始产品ID', 'Alibaba 1601784813906'],
    ],
    bestFit: commonBestFit,
    highlights: commonHighlights,
    sourceNote: '阿里巴巴原始页面已知，但完整媒体和iframe内容仍需登录后手动采集。',
  },
  {
    name: '20000BPH 水灌装机',
    slug: '20000bph-water-filling-machine',
    capacityLabel: '20,000 BPH',
    capacityRange: '15,000-20,000 瓶/小时',
    configuration: '40-40-15',
    model: 'XGF40-40-15',
    bottleRange: '100ml-10L',
    seoDescription:
      '20000BPH 全自动水灌装机，适用于高产瓶装纯净水、矿泉水和山泉水生产。',
    intro:
      '20000BPH水灌装机是一款高产能全自动瓶装水解决方案，面向具有成熟分销需求的工厂。适用于整线规划，包括水处理、瓶体输送、灌装、贴标、包装和码垛。',
    sourceUrl: 'https://www.alibaba.com/product-detail/20000BPH-水-灌装-Machine_1601784871525.html',
    gallery: [],
    keySpecs: [
      ['产能', '15,000-20,000 瓶/小时'],
      ['型号', 'XGF40-40-15'],
      ['配置', '40个冲洗头、40个灌装阀、15个封盖头'],
      ['适用瓶型', standardSpecs.bottleShape],
      ['瓶子直径', standardSpecs.bottleDiameter],
      ['瓶子高度', standardSpecs.bottleHeight],
      ['总功率', '7.8kW'],
      ['外形尺寸', '约 4.5m x 3.3m'],
      ['设备高度', '约 2.6m'],
      ['设备重量', '约 8,000kg'],
      ['原始产品ID', 'Alibaba 1601784871525'],
    ],
    bestFit: commonBestFit,
    highlights: commonHighlights,
    sourceNote: '阿里巴巴原始页面已知，但完整媒体和iframe内容仍需登录后手动采集。',
  },
  {
    name: '24000BPH 水灌装机',
    slug: '24000bph-water-filling-machine',
    capacityLabel: '24,000 BPH',
    capacityRange: '最高 24,000 瓶/小时，以瓶型规格确认',
    configuration: '待确认',
    model: '高速XGF系列',
    bottleRange: '100ml-10L',
    seoDescription:
      '24000BPH 全自动水灌装机，适用于高速瓶装水生产线和整厂项目。',
    intro:
      '24000BPH水灌装机页面为高速瓶装水生产线准备。最终冲洗、灌装和封盖配置需在确认瓶容、瓶型、盖型和工厂布局后确定。',
    sourceUrl: 'https://www.alibaba.com/product-detail/24000BPH-水-灌装-Machine_1601784930234.html',
    gallery: [],
    keySpecs: [
      ['产能', '最高 24,000 瓶/小时'],
      ['型号', '高速XGF系列'],
      ['配置', '根据瓶型和盖型规格确认'],
      ['适用瓶型', standardSpecs.bottleShape],
      ['瓶子直径', standardSpecs.bottleDiameter],
      ['瓶子高度', standardSpecs.bottleHeight],
      ['产线范围', '灌装机或完整瓶装水生产线'],
      ['原始产品ID', 'Alibaba 1601784930234'],
    ],
    bestFit: commonBestFit,
    highlights: commonHighlights,
    sourceNote: '阿里巴巴原始页面已知，但完整媒体和iframe内容仍需登录后手动采集。',
  },
  {
    name: '30000BPH 水灌装机',
    slug: '30000bph-water-filling-machine',
    capacityLabel: '30,000 BPH',
    capacityRange: '最高 30,000 瓶/小时，以瓶型规格确认',
    configuration: '待确认',
    model: '高速XGF系列',
    bottleRange: '100ml-10L',
    seoDescription:
      '30000BPH 全自动水灌装机，适用于大型瓶装水工厂和交钥匙高速水生产线。',
    intro:
      '30000BPH水灌装机页面为大型瓶装水工厂和交钥匙高速生产项目准备。最终机型、阀门数量和产线布局需在获取并审核阿里巴巴原始页面后确认。',
    gallery: [],
    keySpecs: [
      ['产能', '最高 30,000 瓶/小时'],
      ['型号', '高速XGF系列'],
      ['配置', '根据原始页面和瓶型规格确认'],
      ['瓶子范围', '100ml-10L，以瓶子图纸确认为准'],
      ['产线范围', '水处理、吹瓶、灌装、贴标、包装和码垛选配'],
      ['原始产品ID', '待采集阿里巴巴页面'],
    ],
    bestFit: commonBestFit,
    highlights: commonHighlights,
    sourceNote: '本地页面已就绪，阿里巴巴原始URL和完整媒体仍需登录后手动采集。',
  },
].map((product) => ({
  ...product,
  gallery:
    product.gallery.length > 0
      ? product.gallery
      : [
          {
            src: genericImage,
            alt: `${product.name} 全自动瓶装水灌装机产品图片`,
            caption: `${product.name} 产品图片占位`,
          },
        ],
}));

export const water灌装产品中心 = Object.fromEntries(products.map((product) => [product.slug, product])) as Record<
  string,
  水灌装产品
>;
