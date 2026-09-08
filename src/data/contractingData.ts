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
    shortDesc: 'تخصصنا الأول: تجديد المباني وتشطيبات ديلوكس بأعلى دقة ومعالجة التصدعات.',
    fullDesc: 'تنفيذ أعمال التشطيب الداخلي والخارجي، دهانات حديثة، بديل رخام وخشب، وجبس بورد، وترميم شامل للمباني القديمة.',
    badge: 'تخصصنا الأبرز',
    isPrimaryFocus: true,
    iconName: 'Paintbrush',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    features: [
      'ترميم ومعالجة التشققات والرطوبة',
      'دهانات وديكورات بديل رخام وخشب',
      'تجديد السباكة والكهرباء والإنارة',
      'عزل مائي وحراري معتمد'
    ]
  },
  {
    id: 'villas-construction',
    title: 'بناء فلل سكنية',
    shortDesc: 'بناء فلل عصرية عظم وتسليم مفتاح وفق كود البناء السعودي.',
    fullDesc: 'تنفيذ الفلل السكنية بمختلف المساحات والتصاميم المودرن مع إشراف هندسي يومي.',
    iconName: 'Home',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop',
    features: [
      'عظم بالمواد أو بدون مواد',
      'تسليم مفتاح متكامل',
      'مطابقة كود البناء السعودي'
    ]
  },
  {
    id: 'buildings-construction',
    title: 'بناء عمائر وأدوار',
    shortDesc: 'تشييد العمائر السكنية والاستثمارية والتجارية بمتانة عالية.',
    fullDesc: 'إنشاء العمائر والأدوار المتكررة مع دقة التسليح والصب والتشطيب الخارجي.',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?q=80&w=1000&auto=format&fit=crop',
    features: [
      'هيكل إنشائي خرساني معتمد',
      'سرعة إنجاز والتزام بالمخطط',
      'تشطيب واجهات حديثة'
    ]
  },
  {
    id: 'annexes-construction',
    title: 'بناء ملاحق ومجالس',
    shortDesc: 'ملاحق أسطح، ملاحق أرضية، ومجالس ضيافة راقية بعوازل ممتازة.',
    fullDesc: 'توسعة وتشييد الملاحق والمجالس الخارجية والخيام الملكية بأحدث الديكورات.',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop',
    features: [
      'ملاحق أسطح خفيفة الأحمال',
      'مجالس مودرن وزجاجية',
      'عوازل كاملة للحرارة والمطر'
    ]
  },
  {
    id: 'sandwich-panel',
    title: 'غرف ساندوتش بانل',
    shortDesc: 'حلول سريعة وعازلة بنسبة 100% لغرف الأسطح والمستودعات والسائقين.',
    fullDesc: 'تركيب ألواح صاج مجلفن معزولة بالبولي يوريثان المقاوم للحرارة والرطوبة بجدة.',
    iconName: 'Box',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop',
    features: [
      'عزل حراري وصوتي فائق',
      'خفيف الوزن وتركيب سريع',
      'مقاوم للصدأ والرطوبة'
    ]
  },
  {
    id: 'hangars-shades',
    title: 'مظلات وسواتر وهناجر',
    shortDesc: 'هناجر مستودعات، مظلات سيارات حديثة، وسواتر خصوصية متينة.',
    fullDesc: 'تصميم وتنفيذ كافة أعمال الحدادة والمظلات والسواتر والهناجر بمواصفات معتمدة.',
    iconName: 'Warehouse',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop',
    features: [
      'هناجر ومستودعات مطابقة للمواصفات',
      'مظلات سيارات قماش وخشب',
      'سواتر جدارية لحفظ الخصوصية'
    ]
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterItem[] = [
  {
    id: 'case-1',
    title: 'تجديد وترميم فيلا سكنية بالكامل',
    location: 'جدة - حي الروضة',
    category: 'ترميم فلل',
    description: 'تحويل فيلا قديمة إلى طراز مودرن مع تجديد الواجهات والسباكة والدهانات.',
    stats: 'إنجاز قياسي خلال 45 يوماً',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'case-2',
    title: 'تشطيب صالات ومجالس مودرن',
    location: 'جدة - حي المحمدية',
    category: 'تشطيب داخلي',
    description: 'تنفيذ جبس بورد مضيء، بديل خشب ورخام، وأرضيات بورسلان ليزري.',
    stats: 'تشطيب VIP فاخر',
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'case-3',
    title: 'معالجة تصدعات وترميم واجهة عمارة',
    location: 'جدة - حي الصفا',
    category: 'ترميم واجهات',
    description: 'حقن الشروخ بمواد إيبوكسية، عزل مائي، ودهانات بروفايل حديثة مقاومة للرطوبة.',
    stats: 'ضمان رسمي 10 سنوات',
    beforeImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'proj-1',
    title: 'تشطيب داخلي لفيلا دوبلكس',
    category: 'renovation',
    categoryLabel: 'تشطيب وترميم',
    location: 'جدة - حي الشاطئ',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=900&auto=format&fit=crop',
    description: 'تشطيب صالات مفتوحة، جبس بورد، وإضاءات ليد مخفية.',
    highlights: ['دهانات جوتن ناعمة', 'بورسلان ليزري', 'إنارة مخفية']
  },
  {
    id: 'proj-2',
    title: 'تجديد وترميم واجهة عمارة',
    category: 'renovation',
    categoryLabel: 'تشطيب وترميم',
    location: 'جدة - حي السلامة',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=900&auto=format&fit=crop',
    description: 'علاج التصدعات وعمل دهان بروفايل حديث مقاوم للرطوبة.',
    highlights: ['معالجة الشروخ', 'بروفايل مقاوم للرطوبة', 'إنارة ليلية']
  },
  {
    id: 'proj-3',
    title: 'ملحق سطح وجلسة زجاجية',
    category: 'annex',
    categoryLabel: 'بناء ملاحق',
    location: 'جدة - حي الحمدانية',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=900&auto=format&fit=crop',
    description: 'مجلس ضيافة مودرن بواجهات زجاجية واسعة وعوازل كاملة.',
    highlights: ['هيكل خفيف', 'زجاج دبل جلاس', 'عوازل ممتازة']
  },
  {
    id: 'proj-4',
    title: 'بناء فيلا مودرن عظم بالمواد',
    category: 'construction',
    categoryLabel: 'بناء فلل وعمائر',
    location: 'جدة - أبحر الشمالية',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=900&auto=format&fit=crop',
    description: 'تنفيذ القواعد والأعمدة والأسقف وفق كود البناء السعودي.',
    highlights: ['حديد سابك أصلي', 'خرسانة مقاومة', 'إشراف هندسي']
  },
  {
    id: 'proj-5',
    title: 'غرف ساندوتش بانل معزولة',
    category: 'sandwich',
    categoryLabel: 'ساندوتش بانل',
    location: 'جدة - حي السامر',
    image: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?q=80&w=900&auto=format&fit=crop',
    description: 'غرف سطح معزولة عزل تام لحرارة الصيف وصوت الرياح.',
    highlights: ['عازل بولي يوريثان', 'أبواب ألمنيوم معزولة', 'تركيب سريع']
  },
  {
    id: 'proj-6',
    title: 'مظلات سيارات وسواتر شرائح',
    category: 'hangars',
    categoryLabel: 'مظلات وسواتر',
    location: 'جدة - حي المرجان',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?q=80&w=900&auto=format&fit=crop',
    description: 'مظلات قماش PVC كوري وسواتر لحفظ الخصوصية بجودة عالية.',
    highlights: ['هياكل حديد ثقيلة', 'دهانات ضد الصدأ', 'حماية من الشمس']
  },
  {
    id: 'proj-7',
    title: 'هنجر مستودع تجاري',
    category: 'hangars',
    categoryLabel: 'هناجر ومستودعات',
    location: 'جدة - الخمرة الصناعية',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop',
    description: 'جملونات حديدية متينة وأسقف زنك معزولة لمستودعات التخزين.',
    highlights: ['مواصفات الدفاع المدني', 'ارتفاع صافي 8 م', 'أرضيات مروحية']
  },
  {
    id: 'proj-8',
    title: 'تجديد حمامات ومطابخ بالكامل',
    category: 'renovation',
    categoryLabel: 'تشطيب وترميم',
    location: 'جدة - حي البوادي',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=900&auto=format&fit=crop',
    description: 'تغيير شبكة السباكة القديمة وتركيب كراسي معلقة وسيراميك فاخر.',
    highlights: ['سباكة حرارية', 'عزل مائي مجرب', 'خلاطات ألمانية']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'معاينة مجانية بجدة',
    description: 'فحص الموقع ورفع المقاسات بدقة في أي حي بجدة.',
    details: 'زيارة ميدانية سريعة بدون أي رسوم.',
    iconName: 'PhoneCall'
  },
  {
    stepNumber: 2,
    title: 'مقايسة أسعار شفافة',
    description: 'تحديد التكلفة ونوعية المواد بوضوح تام وبدون تكاليف خفية.',
    details: 'خيارات متعددة تناسب ميزانيتك.',
    iconName: 'Calculator'
  },
  {
    stepNumber: 3,
    title: 'عقد رسمي وضمان',
    description: 'تحديد جدول زمني دقيق ودفعات ميسرة مرتبطة بالإنجاز.',
    details: 'حفظ حقوق الطرفين بضمان معتمد.',
    iconName: 'FileCheck'
  },
  {
    stepNumber: 4,
    title: 'تنفيذ بإشراف أبو وافي',
    description: 'مباشرة العمل بفنيين مهرة ومتابعة يومية ميدانية.',
    details: 'إتقان مستمر والتزام بالنظافة والهدوء.',
    iconName: 'HardHat'
  },
  {
    stepNumber: 5,
    title: 'تسليم متقن وضمان',
    description: 'فحص نهائي وتسليم على المفتاح مع شهادة الضمان.',
    details: 'رضا تام ودعم ما بعد التسليم.',
    iconName: 'Award'
  }
];

export const TRUST_PILLARS: TrustBadge[] = [
  {
    title: 'إشراف مباشر من أبو وافي',
    desc: 'متابعة ميدانية يومية للموقع خطوة بخطوة.',
    iconName: 'UserCheck'
  },
  {
    title: 'تخصص دقيق بالتشطيب والترميم',
    desc: 'إتقان أحدث الديكورات وعلاج التصدعات والرطوبة.',
    iconName: 'Sparkles'
  },
  {
    title: 'التزام تام بالمواعيد',
    desc: 'تسليم في الوقت المحدد دون أي تأخير.',
    iconName: 'Clock'
  },
  {
    title: 'أسعار مناسبة ومنافسة',
    desc: 'جودة ممتازة بتكلفة مدروسة وعقود واضحة.',
    iconName: 'BadgeCheck'
  },
  {
    title: 'مواد أصلية وضمان معتمد',
    desc: 'دهانات جوتن، حديد سابك، وسباكة أصلية.',
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
  'حي المحمدية والنعيم',
  'حي الروضة والسلامة',
  'حي الشاطئ والمرجان',
  'حي البساتين والزهراء',
  'حي السامر والأجواد',
  'حي الحمدانية والصالحية',
  'حي الصفا والمروة',
  'حي الفيصلية والربوة',
  'حي النسيم وبني مالك'
];

export const DETAILED_FINISHING_AREAS = [
  {
    category: 'دهانات وديكورات حديثة',
    points: [
      'دهانات داخلية جوتن والجزيرة بأحدث الدرجات',
      'بديل خشب وبديل رخام للجدران والمداخل',
      'جبس بورد عصري مع إنارة ليد مخفية'
    ]
  },
  {
    category: 'ترميم ومعالجة التصدعات',
    points: [
      'معالجة الشروخ الإنشائية بحقن الإيبوكسي',
      'علاج الرطوبة والنزيز المائي نهائياً',
      'تجديد واجهات المباني القديمة لتصبح مودرن'
    ]
  },
  {
    category: 'أرضيات وعزل وسباكة',
    points: [
      'تركيب بورسلان ورخام وسيراميك بميزان ليزري',
      'تجديد كامل لشبكات السباكة وتأسيس الكراسي المعلقة',
      'عزل مائي وحراري للأسطح والحمامات بضمان'
    ]
  }
];
