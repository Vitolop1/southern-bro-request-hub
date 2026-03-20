export type Language = "en" | "es" | "zh" | "vi" | "ar" | "fr";

export const supportedLanguages: Array<{
  code: Language;
  label: string;
}> = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "zh", label: "中文" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "ar", label: "العربية" },
  { code: "fr", label: "Français" },
];

export const translations = {
  en: {
    nav: {
      home: "Home",
      whatWeDo: "What We Do",
      requestServices: "Request Our Services",
      meetTeam: "Meet Our Team",
      contactUs: "Contact Us",
      requestHope: "Request H.O.P.E. Grant Aid",
      donateHope: "Donate for H.O.P.E.",
      needRide: "Delivery",
    },
    hero: {
      eyebrow: "Southern Bro Enterprises LLC",
      title: "A Multi-Level Business & Community Support Services Company",
      tagline: "Putting Our Communities 1st by Southern Hospitality & Care",
      intro:
        "Southern Bro Enterprises helps local people, businesses, and community partners grow through practical support, stronger service access, and a clear customer path.",
      serviceArea: "Service Area: Lynchburg, VA & Virginia Region",
      whatWeDo: "Learn More",
      requestServices: "Request Our Services Here",
      callUs: "Call Us To Figure Out More",
    },
    footer: {
      brandSummary:
        "Business support, delivery help, event support, and community-focused programs serving Lynchburg, Virginia and the wider region.",
      mainPages: "Main Pages",
      morePages: "More Pages",
      contact: "Contact",
      serviceArea: "Service Area: Lynchburg, VA & Virginia Region",
      copyright: "Copyright 2026 Southern Bro Enterprises LLC",
    },
    theme: {
      light: "Light",
      dark: "Dark",
    },
    language: {
      label: "Language",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      whatWeDo: "Qué Hacemos",
      requestServices: "Solicitar Servicios",
      meetTeam: "Conoce al Equipo",
      contactUs: "Contáctanos",
      requestHope: "Solicitar Ayuda H.O.P.E.",
      donateHope: "Donar a H.O.P.E.",
      needRide: "Delivery",
    },
    hero: {
      eyebrow: "Southern Bro Enterprises LLC",
      title: "Una Empresa Multinivel de Servicios Comerciales y Apoyo Comunitario",
      tagline: "Poniendo a Nuestras Comunidades Primero con Hospitalidad y Cuidado Sureño",
      intro:
        "Southern Bro Enterprises ayuda a personas, negocios y socios comunitarios a crecer con apoyo práctico, mejor acceso a servicios y un camino claro para el cliente.",
      serviceArea: "Área de Servicio: Lynchburg, VA y la Región de Virginia",
      whatWeDo: "Más Información",
      requestServices: "Solicitar Servicios",
      callUs: "Llámanos para Saber Más",
    },
    footer: {
      brandSummary:
        "Apoyo comercial, ayuda de entregas, soporte para eventos y programas comunitarios para Lynchburg, Virginia y la región.",
      mainPages: "Páginas Principales",
      morePages: "Más Páginas",
      contact: "Contacto",
      serviceArea: "Área de Servicio: Lynchburg, VA y la Región de Virginia",
      copyright: "Copyright 2026 Southern Bro Enterprises LLC",
    },
    theme: {
      light: "Claro",
      dark: "Oscuro",
    },
    language: {
      label: "Idioma",
    },
  },
  zh: {
    nav: {
      home: "首页",
      whatWeDo: "我们的业务",
      requestServices: "申请服务",
      meetTeam: "团队介绍",
      contactUs: "联系我们",
      requestHope: "申请 H.O.P.E. 援助",
      donateHope: "向 H.O.P.E. 捐赠",
      needRide: "配送服务",
    },
    hero: {
      eyebrow: "Southern Bro Enterprises LLC",
      title: "多层级商业与社区支持服务公司",
      tagline: "以南方式的热情与关怀，把社区放在第一位",
      intro:
        "Southern Bro Enterprises 通过务实支持、更好的服务入口和清晰的客户流程，帮助个人、企业与社区伙伴共同成长。",
      serviceArea: "服务区域：弗吉尼亚州 Lynchburg 及周边地区",
      whatWeDo: "了解更多",
      requestServices: "立即申请服务",
      callUs: "立即致电了解更多",
    },
    footer: {
      brandSummary:
        "为弗吉尼亚州 Lynchburg 及周边地区提供商业支持、配送帮助、活动支持和社区项目。",
      mainPages: "主要页面",
      morePages: "更多页面",
      contact: "联系信息",
      serviceArea: "服务区域：弗吉尼亚州 Lynchburg 及周边地区",
      copyright: "Copyright 2026 Southern Bro Enterprises LLC",
    },
    theme: {
      light: "浅色",
      dark: "深色",
    },
    language: {
      label: "语言",
    },
  },
  vi: {
    nav: {
      home: "Trang Chủ",
      whatWeDo: "Chúng Tôi Làm Gì",
      requestServices: "Yêu Cầu Dịch Vụ",
      meetTeam: "Gặp Đội Ngũ",
      contactUs: "Liên Hệ",
      requestHope: "Yêu Cầu Hỗ Trợ H.O.P.E.",
      donateHope: "Ủng Hộ H.O.P.E.",
      needRide: "Giao Hàng",
    },
    hero: {
      eyebrow: "Southern Bro Enterprises LLC",
      title: "Doanh Nghiệp Hỗ Trợ Kinh Doanh và Cộng Đồng Đa Dịch Vụ",
      tagline: "Ưu Tiên Cộng Đồng Bằng Sự Chăm Sóc và Hiếu Khách Miền Nam",
      intro:
        "Southern Bro Enterprises giúp cá nhân, doanh nghiệp và đối tác cộng đồng phát triển thông qua hỗ trợ thực tế, tiếp cận dịch vụ tốt hơn và quy trình khách hàng rõ ràng.",
      serviceArea: "Khu Vực Phục Vụ: Lynchburg, VA và khu vực Virginia",
      whatWeDo: "Tìm Hiểu Thêm",
      requestServices: "Yêu Cầu Dịch Vụ Ngay",
      callUs: "Gọi Chúng Tôi Để Biết Thêm",
    },
    footer: {
      brandSummary:
        "Hỗ trợ kinh doanh, giao nhận, sự kiện và chương trình cộng đồng cho Lynchburg, Virginia và khu vực lân cận.",
      mainPages: "Trang Chính",
      morePages: "Trang Khác",
      contact: "Liên Hệ",
      serviceArea: "Khu Vực Phục Vụ: Lynchburg, VA và khu vực Virginia",
      copyright: "Copyright 2026 Southern Bro Enterprises LLC",
    },
    theme: {
      light: "Sáng",
      dark: "Tối",
    },
    language: {
      label: "Ngôn Ngữ",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      whatWeDo: "ماذا نقدم",
      requestServices: "طلب الخدمات",
      meetTeam: "فريقنا",
      contactUs: "اتصل بنا",
      requestHope: "طلب دعم H.O.P.E.",
      donateHope: "التبرع لـ H.O.P.E.",
      needRide: "التوصيل",
    },
    hero: {
      eyebrow: "Southern Bro Enterprises LLC",
      title: "شركة متعددة الخدمات لدعم الأعمال والمجتمع",
      tagline: "نضع مجتمعاتنا أولاً بالضيافة والرعاية الجنوبية",
      intro:
        "تساعد Southern Bro Enterprises الأفراد والشركات وشركاء المجتمع على النمو من خلال دعم عملي ومسار خدمة أوضح وتجربة عميل أفضل.",
      serviceArea: "منطقة الخدمة: لينشبرغ، فيرجينيا والمنطقة المحيطة",
      whatWeDo: "اعرف المزيد",
      requestServices: "اطلب خدماتنا الآن",
      callUs: "اتصل بنا لمعرفة المزيد",
    },
    footer: {
      brandSummary:
        "دعم للأعمال، وخدمات التوصيل، ودعم الفعاليات، وبرامج مجتمعية في لينشبرغ بفيرجينيا والمناطق المحيطة.",
      mainPages: "الصفحات الرئيسية",
      morePages: "صفحات إضافية",
      contact: "التواصل",
      serviceArea: "منطقة الخدمة: لينشبرغ، فيرجينيا والمنطقة المحيطة",
      copyright: "Copyright 2026 Southern Bro Enterprises LLC",
    },
    theme: {
      light: "فاتح",
      dark: "داكن",
    },
    language: {
      label: "اللغة",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      whatWeDo: "Nos Services",
      requestServices: "Demander un Service",
      meetTeam: "Notre Équipe",
      contactUs: "Contact",
      requestHope: "Demander l'Aide H.O.P.E.",
      donateHope: "Faire un Don à H.O.P.E.",
      needRide: "Livraison",
    },
    hero: {
      eyebrow: "Southern Bro Enterprises LLC",
      title: "Une Entreprise Multi-Services de Soutien Commercial et Communautaire",
      tagline: "Mettre Nos Communautés en Premier avec Hospitalité et Bienveillance du Sud",
      intro:
        "Southern Bro Enterprises aide les personnes, les entreprises et les partenaires communautaires à progresser grâce à un soutien concret, un meilleur accès aux services et un parcours client plus clair.",
      serviceArea: "Zone de Service : Lynchburg, Virginie et région de Virginie",
      whatWeDo: "En Savoir Plus",
      requestServices: "Demander Nos Services",
      callUs: "Appelez-Nous pour En Savoir Plus",
    },
    footer: {
      brandSummary:
        "Soutien commercial, aide à la livraison, appui événementiel et programmes communautaires pour Lynchburg, Virginie et la région.",
      mainPages: "Pages Principales",
      morePages: "Autres Pages",
      contact: "Contact",
      serviceArea: "Zone de Service : Lynchburg, Virginie et région de Virginie",
      copyright: "Copyright 2026 Southern Bro Enterprises LLC",
    },
    theme: {
      light: "Clair",
      dark: "Sombre",
    },
    language: {
      label: "Langue",
    },
  },
} as const;

export type TranslationSet = (typeof translations)[Language];
