import { ServiceItem, BeforeAfterItem, PortfolioItem, ProcessStep, TrustBadge } from '../types';

export const BUSINESS_INFO = {
  name: 'مؤسسة البصمة للمقاولات',
  contractor: 'المقاول أبو وافي',
  city: 'جدة',
  country: 'المملكة العربية السعودية',
  phone: '0507995065',
  phoneFormatted: '050 799 5065',
  internationalPhone: '+966507995065',
  whatsappUrl: 'https://wa.me/966507995065?text=' + encodeURIComponent('السلام عليكم مقاول أبو وافي.. أود الاستفسار عن أعمال المقاولات في جدة.'),
  workingHours: 'يومياً: 8 ص - 10 م',
  addressDescription: 'جدة - خدمة كافة الأحياء والمناطق',
  experienceYears: 'خبرة أكثر من 15 عاماً بجدة',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'finishing-renovation',
    title: 'تشطيب وترميم فاخر',
    shortDesc: 'تجديد المباني وتشطيبات ديلوكس بأعلى دقة ومعالجة التصدعات.',
    fullDesc: 'تشطيب داخلي وخارجي، دهانات حديثة، بديل رخام وخشب، وجبس بورد، وترميم متكامل.',
    badge: 'تخصصنا الأبرز',
    isPrimaryFocus: true,
    iconName: 'Paintbrush',
    image: '/assets/fluted_wood_tv_wall_1788967385789.jpg',
    features: [
      'معالجة التشققات والرطوبة',
      'دهانات وديكورات بديل رخام وخشب',
      'تجديد سباكة وكهرباء وإنارة',
      'عزل مائي وحراري معتمد'
    ]
  },
  {
    id: 'villas-construction',
    title: 'بناء فلل سكنية',
    shortDesc: 'بناء فلل عصرية عظم وتسليم مفتاح وفق كود البناء السعودي.',
    fullDesc: 'تنفيذ فلل مودرن بمختلف المساحات مع إشراف هندسي يومي.',
    iconName: 'Home',
    image: '/assets/villa_facade_scaffolding_1788967565703.jpg',
    features: [
      'عظم بالمواد أو بدون مواد',
      'تسليم مفتاح متكامل',
      'مطابقة كود البناء السعودي'
    ]
  },
  {
    id: 'buildings-construction',
    title: 'بناء عمائر وأدوار',
    shortDesc: 'تشييد عمائر سكنية واستثمارية بمتانة عالية وتنفيذ هندسي دقيق.',
    fullDesc: 'إنشاء عمائر وأدوار متكررة مع دقة التسليح والصب والواجهات الحديثة.',
    iconName: 'Building2',
    image: '/assets/villa_concrete_bone_1788967403056.jpg',
    features: [
      'هيكل خرساني معتمد',
      'التزام صارم بالمخططات',
      'تشطيب واجهات حديثة'
    ]
  },
  {
    id: 'annexes-construction',
    title: 'بناء ملاحق ومجالس',
    shortDesc: 'ملاحق أسطح ومجالس ضيافة راقية بعوازل ممتازة.',
    fullDesc: 'تشييد ملاحق ومجالس خارجية بأحدث الديكورات وعوازل تامة.',
    iconName: 'Layers',
    image: '/assets/terrace_annex_majlis_1788967550330.jpg',
    features: [
      'ملاحق أسطح خفيفة الأحمال',
      'مجالس مودرن وزجاجية',
      'عوازل كاملة للحرارة والأمطار'
    ]
  },
  {
    id: 'sandwich-panel',
    title: 'غرف ساندوتش بانل',
    shortDesc: 'غرف أسطح ومستودعات عازلة 100% للحرارة والصوت.',
    fullDesc: 'ألواح صاج مجلفن معزولة بالبولي يوريثان المقاوم لحرارة ورطوبة جدة.',
    iconName: 'Box',
    image: '/assets/sandwich_panel_room_1788967613170.jpg',
    features: [
      'عزل حراري وصوتي 100%',
      'خفيف الوزن وتركيب سريع',
      'مقاوم للصدأ والرطوبة'
    ]
  },
  {
    id: 'hangars-shades',
    title: 'مظلات وسواتر وهناجر',
    shortDesc: 'هناجر مستودعات، مظلات سيارات، وسواتر خصوصية متينة.',
    fullDesc: 'تصميم وتنفيذ أعمال الحدادة والمظلات والهناجر بمواصفات معتمدة.',
    iconName: 'Warehouse',
    image: '/assets/car_shades_canopy_1788967490066.jpg',
    features: [
      'هناجر مطابقة لاشتراطات الدفاع المدني',
      'مظلات سيارات قماش وخشب',
      'سواتر جدارية لحفظ الخصوصية'
    ]
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterItem[] = [
  {
    id: 'case-1',
    title: 'تجديد وترميم فيلا سكنية',
    location: 'جدة - حي الروضة',
    category: 'ترميم فلل',
    description: 'تحويل فيلا قديمة إلى طراز مودرن مع تجديد الواجهات والسباكة والدهانات.',
    stats: 'إنجاز قياسي خلال 45 يوماً',
    beforeImage: '/assets/brick_renovation_site_1788967514641.jpg',
    afterImage: '/assets/luxury_living_interior_1788967366578.jpg'
  },
  {
    id: 'case-2',
    title: 'تشطيب صالات ومجالس مودرن',
    location: 'جدة - حي المحمدية',
    category: 'تشطيب داخلي',
    description: 'جبس بورد مضيء، بديل خشب ورخام، وأرضيات بورسلان ليزري.',
    stats: 'تشطيب VIP فاخر',
    beforeImage: '/assets/brick_renovation_site_1788967514641.jpg',
    afterImage: '/assets/luxury_villa_pool_hall_1788967630001.jpg'
  },
  {
    id: 'case-3',
    title: 'معالجة تصدعات وترميم واجهة',
    location: 'جدة - حي الصفا',
    category: 'ترميم واجهات',
    description: 'حقن الشروخ بإيبوكسي معتمد، عزل مائي، ودهان بروفايل مقاوم للرطوبة.',
    stats: 'ضمان رسمي معتمد',
    beforeImage: '/assets/villa_facade_scaffolding_1788967565703.jpg',
    afterImage: '/assets/hero_finishing_1788967342617.jpg'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'proj-1',
    title: 'تشطيب صالة فاخرة وديكور رخام وخشب',
    category: 'renovation',
    categoryLabel: 'تشطيب وترميم',
    location: 'جدة - حي الشاطئ',
    image: '/assets/fluted_wood_tv_wall_1788967385789.jpg',
    description: 'تشطيب صالات مفتوحة، بديل خشب ورخام، وإضاءات ليد مخفية.',
    highlights: ['دهانات جوتن ناعمة', 'بورسلان ليزري', 'إنارة مخفية']
  },
  {
    id: 'proj-2',
    title: 'تشطيب أسقف وجبس بورد مودرن',
    category: 'renovation',
    categoryLabel: 'تشطيب وترميم',
    location: 'جدة - حي السلامة',
    image: '/assets/gypsum_ceiling_lights_1788967472056.jpg',
    description: 'تنفيذ أسقف جبسية هندسية مع سبوت لايت وإنارة ليد مدمجة.',
    highlights: ['جبس بورد معالج', 'إنارة ليد مدمجة', 'دهانات فاخرة']
  },
  {
    id: 'proj-3',
    title: 'تشطيب ممرات وفلل نيوكلاسيك',
    category: 'renovation',
    categoryLabel: 'تشطيب وترميم',
    location: 'جدة - حي الزهراء',
    image: '/assets/moulding_wall_interior_1788967532623.jpg',
    description: 'إطارات فوم جدارية (بانوهات) وبورسلان ليزري براق.',
    highlights: ['بانوهات جدارية دقيقة', 'أبواب سحاب زجاجية', 'دهانات ناعمة']
  },
  {
    id: 'proj-4',
    title: 'بناء فيلا وعمائر سكنية عظم',
    category: 'construction',
    categoryLabel: 'بناء فلل وعمائر',
    location: 'جدة - أبحر الشمالية',
    image: '/assets/villa_concrete_bone_1788967403056.jpg',
    description: 'تنفيذ القواعد والأعمدة والأسقف وفق كود البناء السعودي.',
    highlights: ['حديد سابك أصلي', 'خرسانة مقاومة', 'إشراف هندسي']
  },
  {
    id: 'proj-5',
    title: 'ملحق سطح وجلسة خارجية بالقرميد',
    category: 'annex',
    categoryLabel: 'بناء ملاحق',
    location: 'جدة - حي الحمدانية',
    image: '/assets/terrace_annex_majlis_1788967550330.jpg',
    description: 'مجلس ضيافة وقرميد فاخر للأسطح بعوازل مائية وحرارية تامة.',
    highlights: ['قرميد إسباني', 'عوازل كاملة', 'مجلس مستقل']
  },
  {
    id: 'proj-6',
    title: 'غرف ساندوتش بانل معزولة للأسطح',
    category: 'sandwich',
    categoryLabel: 'ساندوتش بانل',
    location: 'جدة - حي السامر',
    image: '/assets/sandwich_panel_room_1788967613170.jpg',
    description: 'غرف سطح ومستودعات عازلة عزل تام لحرارة الصيف وأمطار الشتاء.',
    highlights: ['عازل بولي يوريثان', 'أبواب وشبابيك ألمنيوم', 'تركيب سريع']
  },
  {
    id: 'proj-7',
    title: 'مظلات سيارات وسواتر شرائح حديثة',
    category: 'hangars',
    categoryLabel: 'مظلات وسواتر',
    location: 'جدة - حي المرجان',
    image: '/assets/car_shades_canopy_1788967490066.jpg',
    description: 'مظلات كابولي للسيارات وسواتر خصوصية شرائح ومجدول.',
    highlights: ['هياكل حديد مجلفنة', 'دهانات بودرة ضد الصدأ', 'قماش بي في سي ألماني']
  },
  {
    id: 'proj-8',
    title: 'سواتر جدارية وخصوصية للمباني',
    category: 'hangars',
    categoryLabel: 'مظلات وسواتر',
    location: 'جدة - حي البساتين',
    image: '/assets/privacy_fence_screens_1788967579986.jpg',
    description: 'سواتر بلاستيك خشبية مجدولة لحفظ الخصوصية وحجب الرؤية.',
    highlights: ['حجب رؤية 100%', 'مقاومة لرياح البحر', 'تثبيت متين']
  },
  {
    id: 'proj-9',
    title: 'هناجر ومستودعات حديدية عملاقة',
    category: 'hangars',
    categoryLabel: 'هناجر ومستودعات',
    location: 'جدة - الخمرة الصناعية',
    image: '/assets/hangar_steel_warehouse_1788967423818.jpg',
    description: 'جملونات حديدية متينة وأسقف ساندوتش بانل بمواصفات الدفاع المدني.',
    highlights: ['مواصفات الدفاع المدني', 'ارتفاعات كبيرة', 'دهانات إيبوكسي']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'معاينة مجانية',
    description: 'رفع المقاسات وفحص الموقع بأي حي بجدة.',
    details: 'زيارة ميدانية سريعة.',
    iconName: 'PhoneCall'
  },
  {
    stepNumber: 2,
    title: 'مقايسة شفافة',
    description: 'تحديد التكلفة والمواد بوضوح تام.',
    details: 'خيارات تناسب ميزانيتك.',
    iconName: 'Calculator'
  },
  {
    stepNumber: 3,
    title: 'عقد وضمان',
    description: 'جدول زمني محدد ودفعات ميسرة.',
    details: 'حفظ حقوق الطرفين.',
    iconName: 'FileCheck'
  },
  {
    stepNumber: 4,
    title: 'تنفيذ ميداني',
    description: 'فنيون مهرة ومتابعة يومية من أبو وافي.',
    details: 'إتقان وسرعة إنجاز.',
    iconName: 'HardHat'
  },
  {
    stepNumber: 5,
    title: 'تسليم معتمد',
    description: 'فحص نهائي وتسليم مفتاح مع شهادة الضمان.',
    details: 'دعم ما بعد التسليم.',
    iconName: 'Award'
  }
];

export const TRUST_PILLARS: TrustBadge[] = [
  {
    title: 'إشراف مباشر من أبو وافي',
    desc: 'متابعة ميدانية يومية خطوة بخطوة.',
    iconName: 'UserCheck'
  },
  {
    title: 'تخصص تشطيب وترميم',
    desc: 'إتقان الديكورات وعلاج التصدعات والرطوبة.',
    iconName: 'Sparkles'
  },
  {
    title: 'التزام بالمواعيد',
    desc: 'تسليم دقيق في الموعد المحدد.',
    iconName: 'Clock'
  },
  {
    title: 'أسعار مناسبة ومنافسة',
    desc: 'جودة عالية بتكلفة مدروسة وعقود واضحة.',
    iconName: 'BadgeCheck'
  },
  {
    title: 'مواد أصلية وضمان',
    desc: 'دهانات جوتن وحديد سابك وسباكة معتمدة.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'تغطية كافة أحياء جدة',
    desc: 'سرعة استجابة ووصول فوري لموقعك.',
    iconName: 'MapPin'
  }
];

export const JEDDAH_DISTRICTS = [
  'أبحر الشمالية والجنوبية',
  'المحمدية والنعيم',
  'الروضة والسلامة',
  'الشاطئ والمرجان',
  'البساتين والزهراء',
  'السامر والأجواد',
  'الحمدانية والصالحية',
  'الصفا والمروة',
  'الفيصلية والربوة',
  'النسيم وبني مالك'
];

export const DETAILED_FINISHING_AREAS = [
  {
    category: 'دهانات وديكورات حديثة',
    points: [
      'دهانات داخلية جوتن والجزيرة',
      'بديل خشب ورخام للجدران',
      'جبس بورد عصري وإنارة ليد'
    ]
  },
  {
    category: 'ترميم ومعالجة التصدعات',
    points: [
      'معالجة الشروخ بحقن الإيبوكسي',
      'علاج الرطوبة والنزيز المائي نهائياً',
      'تجديد واجهات المباني القديمة'
    ]
  },
  {
    category: 'أرضيات وسباكة وعوازل',
    points: [
      'بورسلان ورخام بميزان ليزري',
      'تجديد شبكات السباكة وتأسيس الكراسي المعلقة',
      'عزل مائي وحراري معتمد بضمان'
    ]
  }
];
