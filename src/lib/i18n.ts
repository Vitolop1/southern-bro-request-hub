export type Language = "en" | "es" | "fr";

export const defaultLanguage: Language = "en";

export const supportedLanguages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
] as const;

export function isLanguage(value: string | undefined | null): value is Language {
  return value === "en" || value === "es" || value === "fr";
}

export const translations = {
  en: {
    nav: {
      brand: "Southern Bro Enterprises",
      brandLine: "Southern Bro Enterprises LLC",
      home: "Home",
      whatWeDo: "What We Do",
      requestServices: "Request Services",
      meetTeam: "Meet Our Team",
      contactUs: "Contact Us",
      requestHope: "Request H.O.P.E. Grant Aid",
      donateHope: "Donate for H.O.P.E.",
      needRide: "Delivery",
      menuOpen: "Open navigation menu",
      menuClose: "Close navigation menu",
    },
    hero: {
      eyebrow: "Southern Bro Enterprises LLC",
      title: "Business Support, Detailing, and Lawn Care in One Place",
      tagline: "Licensed, insured, and built around Southern hospitality and care",
      intro:
        "Southern Bro Enterprises helps local people, businesses, and property owners with clear request paths for landscaping, detailing, consulting, and community-focused support.",
      serviceArea: "Service Area: Lynchburg, VA & Virginia Region",
      whatWeDo: "Learn More",
      requestServices: "Request Our Services Here",
      callUs: "Call Us for More Information",
    },
    theme: {
      light: "Light",
      dark: "Dark",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
    },
    language: {
      label: "Language",
    },
    footer: {
      brandSummary:
        "Business support, landscaping, detailing, and community-focused services serving Lynchburg, Virginia and the wider region.",
      mainPages: "Main Pages",
      morePages: "More Pages",
      contact: "Contact",
      serviceArea: "Service Area: Lynchburg, VA & Virginia Region",
      copyright: "Copyright 2026 Southern Bro Enterprises LLC",
    },
    common: {
      learnMore: "Learn More",
      requestQuote: "Request a Quote",
      requestService: "Request Service Here",
      callUs: "Call Us",
      quickAccess: "Quick Access",
      whyThisPageMatters: "Why This Page Matters",
      clearQuoteCapture: "Clear and centralized quote capture",
      businessHours: "Business Hours",
      generalContact: "General Contact",
      leadershipContacts: "Leadership Contacts",
      nextBestStep: "Next Best Step",
      viewResources: "View Resources",
    },
    home: {
      overviewEyebrow: "What Do We Do?",
      overviewTitle: "Business support, service requests, and community access in one place",
      overviewMission:
        "Southern Bro Enterprises was built to support local people, businesses, and community partners through dependable service, ethical leadership, and responsive follow-up.",
      overviewOffer:
        "We organize multiple service lanes under one parent company so customers can quickly understand what we offer, where to go, and how to request help.",
      overviewBrands:
        "Current service focuses include Southern Bro Landscaping LLC, Detailing Specials, Southern Bro Enterprises consulting and operations support, community-focused programs, and additional branded service lanes.",
      hopeTitle: "The H.O.P.E. Grant Aid",
      hopeFounder: "Established by William Soteria",
      hopeParagraphs: [
        "The H.O.P.E. Grant Program was created to promote educational access, economic opportunity, and community betterment.",
        "The program supports individuals and community projects that show financial need and a real desire to move forward through education, training, or betterment work.",
      ],
      hopeLegal:
        "Awards depend on available company funds and managerial approval. Every request is reviewed case by case.",
      stepsEyebrow: "How the Request System Works",
      stepsTitle: "Clear steps for booking service",
      steps: [
        {
          title: "Choose the Right Page",
          description:
            "Start with What We Do, Meet Our Team, Contact Us, H.O.P.E. Grant Aid, or the service request page depending on what you need.",
        },
        {
          title: "Send the Right Request",
          description:
            "Use the quote form, delivery request, or community support path to submit the details, timing, and service needs.",
        },
        {
          title: "Get Confirmed",
          description:
            "The Southern Bro team reviews the request, confirms next steps, and follows up with scheduling or support details.",
        },
      ],
      teamEyebrow: "Meet Our Team",
      teamTitle: "Leadership you can contact directly",
      teamIntro:
        "Meet the people behind Southern Bro and use the direct team pages for clearer outreach and follow-up.",
      contactEyebrow: "Contact Us",
      contactTitle: "Built for Lynchburg, VA and the wider Virginia region",
      contactIntro:
        "Southern Bro Enterprises connects customers with landscaping, detailing, consulting, and community-focused programs through one organized brand family.",
    },
    aboutSection: {
      eyebrow: "About Us",
      title: "Southern Bro Enterprises organizes multiple service lanes under one professional parent company",
      intro:
        "Southern Bro Enterprises brings together customer-facing service brands, business support, and community-focused programs under one clear structure.",
      body:
        "That structure helps customers find the right service faster, submit cleaner requests, and receive more dependable follow-up from the team.",
      ctaPrimary: "Learn What We Do",
      ctaSecondary: "Request a Quote",
      logoBlurb:
        "The company connects multiple service identities without losing the core Southern Bro brand. That creates one professional experience while keeping the full service family visible and easy to understand.",
      highlights: [
        {
          title: "Multi-Brand Support",
          description:
            "One company structure connecting landscaping, auto detailing, business services, delivery solutions, events, and community initiatives.",
        },
        {
          title: "Locally Grounded",
          description:
            "Built around Lynchburg, Virginia and regional service needs with a clear focus on responsiveness and reliability.",
        },
        {
          title: "Professional and Flexible",
          description:
            "Designed to support both everyday customer requests and more specialized business or community-driven service needs.",
        },
      ],
    },
    priorityServices: {
      eyebrow: "Featured Services",
      title: "Landscaping, detailing, and business support",
      intro:
        "Browse the current service lines available for direct booking, quote requests, and project intake.",
      exploreService: "Explore Service",
      ctas: ["Request Landscaping", "Request Detailing", "Request Consulting"],
    },
    serviceCards: {
      eyebrow: "Full Brand Family",
      title: "Every current and upcoming brand stays visible in one organized directory",
      intro:
        "The cards below present each brand with its logo, service lineup, audience, and request path in a polished customer-ready format.",
      learnMore: "Learn More",
      priorityNow: "Priority Now",
      activeService: "Active Service",
      secondaryFocus: "Secondary Focus",
      viewBrand: "View Brand",
      comingSoon: "Coming Soon",
    },
    brandStrip: {
      comingSoon: "Coming Soon",
    },
    resourcePreview: {
      eyebrow: "Resources",
      title: "Helpful content that supports SEO and customer education",
      button: "View Resources",
      learnMore: "Learn More",
      categories: ["Customer Guide", "Consulting", "Detailing", "Ticketing"],
      titles: [
        "How to Prepare for a Service Quote",
        "Business Startup Support Checklist",
        "What to Include in a Detailing Request",
        "Ticket Vibez Event Intake Overview",
      ],
      descriptions: [
        "A practical checklist showing what information customers should gather before requesting service.",
        "A simple resource for business owners who need structure before launch, setup, or operational support.",
        "A simple guide for customers requesting detailing work, location details, and scheduling preferences.",
        "A short guide to the details event organizers should provide when requesting ticketing or promotional support.",
      ],
    },
    teamGrid: {
      cta: "Learn More About Me",
      titles: ["Managing Equity Partner", "Equity Partner", "Equity Partner"],
      roles: [
        "Founder / C.E.O.",
        "Chief Business Development Officer",
        "Chief Operations Officer",
      ],
      summaries: [
        "Founder and lead operator guiding Southern Bro Enterprises, the H.O.P.E. Grant mission, and the broader business support direction.",
        "Business development lead focused on partnerships, outreach, and strengthening the Southern Bro service network.",
        "Service-driven professional with healthcare, hospitality, and customer experience roots, helping Southern Bro pair strong operations with community-centered care.",
      ],
    },
    requestQuotePage: {
      eyebrow: "Request Quote",
      title: "One professional intake page for Southern Bro service requests",
      intro:
        "Submit one organized request for landscaping, detailing, consulting, delivery, community support, and other Southern Bro service inquiries.",
      benefits: [
        "One central quote path for landscaping, detailing, consulting, and support services.",
        "Organized lead capture ready for follow-up and CRM routing.",
        "A professional intake flow for both mobile and desktop visitors.",
      ],
      categoryLabels: [
        "Business Consulting",
        "Detailing Services",
        "Landscaping Services",
        "Ticket Vibez / Event Support",
        "Delivery Support",
        "VA Recovery Services / Community Support",
        "General Business Support",
        "Other",
      ],
    },
    serviceForm: {
      sectionLabel: "Service Request",
      title: "Request a Quote",
      description:
        "Fill out the form below to request support from Southern Bro Enterprises or one of the active services highlighted on the site.",
      submitLabel: "Submit Quote Request",
      submitting: "Submitting...",
      labels: {
        fullName: "Full Name",
        companyName: "Company / Organization",
        phone: "Phone Number",
        email: "Email Address",
        category: "Service Category",
        description: "Description",
        address: "Address",
        timeline: "Preferred Timeline",
        budget: "Budget Range",
        urgency: "Urgency",
        referralSource: "How Did You Hear About Us?",
      },
      placeholders: {
        fullName: "Enter your full name",
        companyName: "Enter your company name if applicable",
        phone: "Enter your phone number",
        email: "Enter your email",
        description: "Describe the service needed",
        address: "Enter the service address if applicable",
        timeline: "Example: This week or next month",
        budget: "Example: Under $500 or open to quote",
        referralSource: "Google, flyer, referral, social media, etc.",
      },
      urgency: ["Low", "Normal", "High", "Urgent"],
    },
    whatWeDoPage: {
      eyebrow: "What We Do",
      title: "Business support, branded services, and community betterment",
      intro:
        "Southern Bro Enterprises brings together business support, branded service lanes, and community-minded programs under one parent company.",
      currentNetworksEyebrow: "Current Networks",
      currentNetworksTitle: "Southern Bro operates across these service lanes",
      networkDescriptions: [
        "Parent company and umbrella support system for the brand family.",
        "Business services and support network connected to the broader company structure.",
        "Community aid, advocacy, and stability-focused support initiatives.",
        "Event and ticket support brand focused on access, promotions, and customer support.",
      ],
      brandedServicesEyebrow: "Our Branded Services",
      brandedServicesTitle: "A licensed and insured brand family with clear structure",
      hopeEyebrow: "H.O.P.E. Grant Program",
      hopeTitle: "Educational access and community betterment support remain part of the story",
      hopeBody:
        "The H.O.P.E. Grant Program supports people and community projects that demonstrate financial need and a strong desire to pursue education, training, or betterment work that strengthens their communities.",
    },
    contactPage: {
      eyebrow: "Contact Us",
      title: "Get in touch with the Southern Bro team",
      intro:
        "Reach the team through direct email, phone, and service request paths without digging through multiple pages.",
      contactLabels: ["General Support", "Call or Text"],
    },
    teamPage: {
      eyebrow: "Meet Our Team",
      title: "Meet the Southern Bro leadership team",
      intro:
        "Learn who leads each part of the company and connect with the right person through direct profile pages and contact paths.",
      networksEyebrow: "Our Networks",
    },
  },
  es: {
    nav: {
      brand: "Southern Bro Enterprises",
      brandLine: "Southern Bro Enterprises LLC",
      home: "Inicio",
      whatWeDo: "Qué Hacemos",
      requestServices: "Solicitar Servicios",
      meetTeam: "Conoce al Equipo",
      contactUs: "Contáctanos",
      requestHope: "Solicitar Ayuda H.O.P.E.",
      donateHope: "Donar a H.O.P.E.",
      needRide: "Delivery",
      menuOpen: "Abrir menú de navegación",
      menuClose: "Cerrar menú de navegación",
    },
    hero: {
      eyebrow: "Southern Bro Enterprises LLC",
      title: "Una Empresa Multinivel de Servicios Comerciales y Apoyo Comunitario",
      tagline: "Poniendo a Nuestras Comunidades Primero con Hospitalidad y Cuidado del Sur",
      intro:
        "Southern Bro Enterprises ayuda a personas, negocios y socios comunitarios a crecer con apoyo práctico, mejor acceso a servicios y un camino claro para el cliente.",
      serviceArea: "Área de Servicio: Lynchburg, VA y la Región de Virginia",
      whatWeDo: "Más Información",
      requestServices: "Solicitar Servicios",
      callUs: "Llámanos para Saber Más",
    },
    theme: {
      light: "Claro",
      dark: "Oscuro",
      switchToLight: "Cambiar a modo claro",
      switchToDark: "Cambiar a modo oscuro",
    },
    language: {
      label: "Idioma",
    },
    footer: {
      brandSummary:
        "Apoyo comercial, ayuda con entregas, soporte para eventos y programas comunitarios para Lynchburg, Virginia y la región.",
      mainPages: "Páginas Principales",
      morePages: "Más Páginas",
      contact: "Contacto",
      serviceArea: "Área de Servicio: Lynchburg, VA y la Región de Virginia",
      copyright: "Copyright 2026 Southern Bro Enterprises LLC",
    },
    common: {
      learnMore: "Más Información",
      requestQuote: "Solicitar Cotización",
      requestService: "Solicitar Servicio",
      callUs: "Llámanos",
      quickAccess: "Acceso Rápido",
      whyThisPageMatters: "Por Qué Importa Esta Página",
      clearQuoteCapture: "Captura de cotizaciones clara y centralizada",
      businessHours: "Horario Comercial",
      generalContact: "Contacto General",
      leadershipContacts: "Contactos del Liderazgo",
      nextBestStep: "Siguiente Paso",
      viewResources: "Ver Recursos",
    },
    home: {
      overviewEyebrow: "¿Qué Hacemos?",
      overviewTitle: "Apoyo comercial, solicitudes de servicio y acceso comunitario en un solo lugar",
      overviewMission:
        "En Southern Bro Enterprises mantenemos una posición ética y moral fuerte para ayudar a nuestras comunidades a prosperar. Todos tenemos una historia, incluida la nuestra, y la empresa está diseñada para ayudar a personas, negocios y socios comunitarios a crecer con apoyo práctico y atención confiable.",
      overviewOffer:
        "En Southern Bro Enterprises trabajamos para apoyar a negocios locales y miembros de la comunidad mediante una mezcla amplia de servicios y caminos de apoyo.",
      overviewBrands:
        "Los enfoques actuales incluyen Southern Bro Landscaping LLC, Detailing Specials, la consultoría y el apoyo operativo de Southern Bro Enterprises, los programas comunitarios y otras líneas de servicio de marca.",
      hopeTitle: "La Ayuda de Subvención H.O.P.E.",
      hopeFounder: "Establecida por William Soteria",
      hopeParagraphs: [
        "El programa H.O.P.E. fue creado para promover el acceso educativo, la oportunidad económica y el mejoramiento comunitario.",
        "El programa apoya a personas y proyectos comunitarios que demuestran necesidad financiera y un deseo real de avanzar mediante educación, formación o trabajo de mejoramiento.",
      ],
      hopeLegal:
        "Las ayudas dependen de los fondos disponibles y de la aprobación gerencial. Cada solicitud se revisa caso por caso.",
      stepsEyebrow: "Cómo Funciona el Sistema de Solicitudes",
      stepsTitle: "Pasos claros para reservar un servicio",
      steps: [
        {
          title: "Elige la Página Correcta",
          description:
            "Comienza con Qué Hacemos, Conoce al Equipo, Contáctanos, Ayuda H.O.P.E. o la página de solicitud de servicios según lo que necesites.",
        },
        {
          title: "Envía la Solicitud Correcta",
          description:
            "Usa el formulario de cotización, la solicitud de delivery o la vía de apoyo comunitario para enviar detalles, tiempos y necesidades del servicio.",
        },
        {
          title: "Recibe Confirmación",
          description:
            "El equipo de Southern Bro revisa la solicitud, confirma los próximos pasos y hace el seguimiento correspondiente.",
        },
      ],
      teamEyebrow: "Conoce al Equipo",
      teamTitle: "Liderazgo al que puedes contactar directamente",
      teamIntro:
        "Conoce a las personas detrás de Southern Bro y usa las páginas directas del equipo para una comunicación más clara.",
      contactEyebrow: "Contáctanos",
      contactTitle: "Diseñado para Lynchburg, VA y la región de Virginia",
      contactIntro:
        "Southern Bro Enterprises conecta a los clientes con consultoría, detailing, ticketing, delivery, servicios de marca y programas comunitarios a través de una sola familia de marca reconocible.",
    },
    aboutSection: {
      eyebrow: "Sobre Nosotros",
      title: "Southern Bro Enterprises está diseñada para organizar múltiples líneas de servicio de forma profesional",
      intro:
        "Southern Bro Enterprises reúne una amplia variedad de servicios de apoyo comercial, marcas orientadas al cliente y programas comunitarios bajo una sola empresa matriz.",
      body:
        "La meta es simple: facilitar que clientes, aliados y miembros de la comunidad entiendan qué servicios están disponibles y cómo solicitar ayuda de forma rápida y profesional.",
      ctaPrimary: "Conoce Qué Hacemos",
      ctaSecondary: "Solicitar Cotización",
      logoBlurb:
        "La empresa conecta varias identidades de servicio sin perder la marca central Southern Bro. Eso crea una experiencia profesional y mantiene visible toda la familia de servicios.",
      highlights: [
        {
          title: "Soporte de Múltiples Marcas",
          description:
            "Una estructura que conecta servicios comerciales, auto detailing, delivery, eventos e iniciativas comunitarias.",
        },
        {
          title: "Con Raíces Locales",
          description:
            "Construida alrededor de Lynchburg, Virginia y de las necesidades regionales, con un enfoque claro en respuesta rápida y confiabilidad.",
        },
        {
          title: "Profesional y Flexible",
          description:
            "Diseñada para apoyar tanto solicitudes cotidianas como necesidades más especializadas de negocios o comunidad.",
        },
      ],
    },
    priorityServices: {
      eyebrow: "Servicios Destacados",
      title: "Landscaping, detailing y apoyo comercial",
      intro:
        "Revisa las líneas de servicio actuales disponibles para reservas directas, solicitudes de cotización e intake de proyectos.",
      exploreService: "Ver Servicio",
      ctas: ["Solicitar Landscaping", "Solicitar Detailing", "Solicitar Consultoría"],
    },
    serviceCards: {
      eyebrow: "Familia Completa de Marcas",
      title: "Cada marca actual y futura sigue visible en un directorio organizado",
      intro:
        "Las tarjetas presentan cada marca con su logo, servicios, público y vía de solicitud en un formato más pulido y listo para clientes.",
      learnMore: "Más Información",
      priorityNow: "Prioridad Actual",
      activeService: "Servicio Activo",
      secondaryFocus: "Enfoque Secundario",
      viewBrand: "Ver Marca",
      comingSoon: "Próximamente",
    },
    brandStrip: {
      comingSoon: "Próximamente",
    },
    resourcePreview: {
      eyebrow: "Recursos",
      title: "Contenido útil que apoya el SEO y la educación del cliente",
      button: "Ver Recursos",
      learnMore: "Más Información",
      categories: ["Guía del Cliente", "Consultoría", "Detailing", "Ticketing"],
      titles: [
        "Cómo Prepararse para una Cotización de Servicio",
        "Lista de Apoyo para el Lanzamiento de Negocios",
        "Qué Incluir en una Solicitud de Detailing",
        "Resumen de Intake para Eventos de Ticket Vibez",
      ],
      descriptions: [
        "Una lista práctica de la información que los clientes deberían reunir antes de solicitar un servicio.",
        "Un recurso simple para dueños de negocios que necesitan estructura antes del lanzamiento, la configuración o el apoyo operativo.",
        "Una guía simple para clientes que solicitan trabajo de detailing, detalles de ubicación y preferencias de horario.",
        "Una guía corta sobre los detalles que los organizadores deben proporcionar al solicitar ticketing o apoyo promocional.",
      ],
    },
    teamGrid: {
      cta: "Conoce Más",
      titles: ["Socio Gerente de Capital", "Socio de Capital", "Socia de Capital"],
      roles: ["Fundador / C.E.O.", "Director de Desarrollo Comercial", "Directora de Operaciones"],
      summaries: [
        "Fundador y operador principal que guía Southern Bro Enterprises, la misión de H.O.P.E. y la dirección general del apoyo comercial.",
        "Líder de desarrollo comercial enfocado en alianzas, alcance y fortalecimiento de la red de servicios de Southern Bro.",
        "Profesional orientada al servicio con experiencia en salud, hospitalidad y atención al cliente, ayudando a Southern Bro a unir operaciones sólidas con cuidado comunitario.",
      ],
    },
    requestQuotePage: {
      eyebrow: "Solicitar Cotización",
      title: "Una página profesional de intake para los servicios de Southern Bro",
      intro:
        "Envía una solicitud organizada para landscaping, detailing, consultoría, delivery, apoyo comunitario y otras consultas de servicio de Southern Bro.",
      benefits: [
        "Una ruta central de cotización para landscaping, detailing, consultoría y servicios de apoyo.",
        "Captura organizada de leads lista para seguimiento y CRM.",
        "Un flujo profesional de intake tanto para visitantes móviles como de escritorio.",
      ],
      categoryLabels: [
        "Consultoría de Negocios",
        "Servicios de Detailing",
        "Servicios de Landscaping",
        "Ticket Vibez / Soporte para Eventos",
        "Delivery",
        "VA Recovery Services / Apoyo Comunitario",
        "Apoyo Comercial General",
        "Otro",
      ],
    },
    serviceForm: {
      sectionLabel: "Solicitud de Servicio",
      title: "Solicitar Cotización",
      description:
        "Completa el formulario para solicitar apoyo de Southern Bro Enterprises o de uno de los servicios activos destacados en el sitio.",
      submitLabel: "Enviar Solicitud de Cotización",
      submitting: "Enviando...",
      labels: {
        fullName: "Nombre Completo",
        companyName: "Empresa / Organización",
        phone: "Número de Teléfono",
        email: "Correo Electrónico",
        category: "Categoría de Servicio",
        description: "Descripción",
        address: "Dirección",
        timeline: "Plazo Preferido",
        budget: "Rango de Presupuesto",
        urgency: "Urgencia",
        referralSource: "¿Cómo Nos Conociste?",
      },
      placeholders: {
        fullName: "Ingresa tu nombre completo",
        companyName: "Ingresa el nombre de tu empresa si aplica",
        phone: "Ingresa tu número de teléfono",
        email: "Ingresa tu correo electrónico",
        description: "Describe el servicio que necesitas",
        address: "Ingresa la dirección del servicio si aplica",
        timeline: "Ejemplo: Esta semana o el próximo mes",
        budget: "Ejemplo: Menos de $500 o abierto a cotización",
        referralSource: "Google, volante, referido, redes sociales, etc.",
      },
      urgency: ["Baja", "Normal", "Alta", "Urgente"],
    },
    whatWeDoPage: {
      eyebrow: "Qué Hacemos",
      title: "Apoyo comercial, servicios de marca y mejoramiento comunitario",
      intro:
        "Southern Bro Enterprises reúne apoyo comercial, líneas de servicio de marca y programas con enfoque comunitario bajo una sola empresa matriz.",
      currentNetworksEyebrow: "Redes Actuales",
      currentNetworksTitle: "Southern Bro opera a través de estas líneas de servicio",
      networkDescriptions: [
        "Empresa matriz y sistema principal de apoyo para la familia de marcas.",
        "Red de servicios y apoyo comercial conectada a la estructura general de la compañía.",
        "Iniciativas de ayuda comunitaria, defensa y estabilidad.",
        "Marca de apoyo para eventos y tickets enfocada en acceso, promociones y servicio al cliente.",
      ],
      brandedServicesEyebrow: "Nuestros Servicios de Marca",
      brandedServicesTitle: "Una familia de marcas con licencia, seguro y estructura clara",
      hopeEyebrow: "Programa de Subvención H.O.P.E.",
      hopeTitle: "El acceso educativo y el mejoramiento comunitario siguen siendo parte de la historia",
      hopeBody:
        "El programa H.O.P.E. apoya a personas y proyectos comunitarios que demuestran necesidad financiera y un fuerte deseo de avanzar mediante educación, capacitación o trabajo de mejoramiento comunitario.",
    },
    contactPage: {
      eyebrow: "Contáctanos",
      title: "Ponte en contacto con el equipo de Southern Bro",
      intro:
        "Llega al equipo mediante correo directo, teléfono y rutas de solicitud de servicio sin tener que buscar en múltiples páginas.",
      contactLabels: ["Soporte General", "Llamar o Escribir"],
    },
    teamPage: {
      eyebrow: "Conoce al Equipo",
      title: "Conoce al equipo de liderazgo de Southern Bro",
      intro:
        "Conoce quién lidera cada parte de la compañía y conéctate con la persona correcta mediante perfiles directos y rutas claras de contacto.",
      networksEyebrow: "Nuestras Redes",
    },
  },
  fr: {
    nav: {
      brand: "Southern Bro Enterprises",
      brandLine: "Southern Bro Enterprises LLC",
      home: "Accueil",
      whatWeDo: "Nos Services",
      requestServices: "Demander un Service",
      meetTeam: "Notre Équipe",
      contactUs: "Contact",
      requestHope: "Demander l'Aide H.O.P.E.",
      donateHope: "Faire un Don à H.O.P.E.",
      needRide: "Livraison",
      menuOpen: "Ouvrir le menu de navigation",
      menuClose: "Fermer le menu de navigation",
    },
    hero: {
      eyebrow: "Southern Bro Enterprises LLC",
      title: "Une Entreprise Multi-Services de Soutien Commercial et Communautaire",
      tagline: "Mettre Nos Communautés en Premier avec Hospitalité et Bienveillance du Sud",
      intro:
        "Southern Bro Enterprises aide les particuliers, les entreprises et les partenaires communautaires à progresser grâce à un soutien concret, un meilleur accès aux services et un parcours client plus clair.",
      serviceArea: "Zone de Service : Lynchburg, Virginie et région de Virginie",
      whatWeDo: "En Savoir Plus",
      requestServices: "Demander Nos Services",
      callUs: "Appelez-Nous pour En Savoir Plus",
    },
    theme: {
      light: "Clair",
      dark: "Sombre",
      switchToLight: "Passer au mode clair",
      switchToDark: "Passer au mode sombre",
    },
    language: {
      label: "Langue",
    },
    footer: {
      brandSummary:
        "Soutien commercial, aide à la livraison, appui événementiel et programmes communautaires au service de Lynchburg, Virginie et de la région.",
      mainPages: "Pages Principales",
      morePages: "Autres Pages",
      contact: "Contact",
      serviceArea: "Zone de Service : Lynchburg, Virginie et région de Virginie",
      copyright: "Copyright 2026 Southern Bro Enterprises LLC",
    },
    common: {
      learnMore: "En Savoir Plus",
      requestQuote: "Demander un Devis",
      requestService: "Demander un Service",
      callUs: "Appelez-Nous",
      quickAccess: "Accès Rapide",
      whyThisPageMatters: "Pourquoi Cette Page Compte",
      clearQuoteCapture: "Capture de devis claire et centralisée",
      businessHours: "Heures d'Ouverture",
      generalContact: "Contact Général",
      leadershipContacts: "Contacts de Direction",
      nextBestStep: "Meilleure Étape Suivante",
      viewResources: "Voir les Ressources",
    },
    home: {
      overviewEyebrow: "Que Faisons-Nous ?",
      overviewTitle: "Soutien commercial, demandes de service et accès communautaire en un seul endroit",
      overviewMission:
        "Chez Southern Bro Enterprises, nous défendons une position éthique forte pour aider nos communautés à progresser. Nous avons tous une histoire, nous compris, et l'entreprise est pensée pour aider les particuliers, les entreprises et les partenaires communautaires à grandir grâce à un soutien concret et réactif.",
      overviewOffer:
        "Southern Bro Enterprises soutient les entreprises locales et les membres de la communauté grâce à un large mélange de services et de parcours d'accompagnement.",
      overviewBrands:
        "Les activités mises en avant incluent Southern Bro Landscaping LLC, Detailing Specials, le conseil et le soutien opérationnel de Southern Bro Enterprises, les programmes communautaires et d'autres lignes de service de marque.",
      hopeTitle: "L'Aide de Subvention H.O.P.E.",
      hopeFounder: "Établie par William Soteria",
      hopeParagraphs: [
        "Le programme H.O.P.E. a été créé pour promouvoir l'accès à l'éducation, les opportunités économiques et l'amélioration communautaire.",
        "Le programme soutient des personnes et des projets communautaires qui démontrent un besoin financier réel et une volonté sérieuse d'avancer par l'éducation, la formation ou l'amélioration communautaire.",
      ],
      hopeLegal:
        "Les aides dépendent des fonds disponibles et de l'approbation de la direction. Chaque demande est examinée au cas par cas.",
      stepsEyebrow: "Comment Fonctionne le Système de Demande",
      stepsTitle: "Des étapes claires pour réserver un service",
      steps: [
        {
          title: "Choisissez la Bonne Page",
          description:
            "Commencez par Nos Services, Notre Équipe, Contact, l'aide H.O.P.E. ou la page de demande de service selon votre besoin.",
        },
        {
          title: "Envoyez la Bonne Demande",
          description:
            "Utilisez le formulaire de devis, la demande de livraison ou la voie de soutien communautaire pour transmettre les détails, le délai et les besoins du service.",
        },
        {
          title: "Recevez la Confirmation",
          description:
            "L'équipe Southern Bro examine la demande, confirme les prochaines étapes et assure le suivi approprié.",
        },
      ],
      teamEyebrow: "Notre Équipe",
      teamTitle: "Une direction que vous pouvez contacter directement",
      teamIntro:
        "Découvrez les personnes derrière Southern Bro et utilisez les pages directes de l'équipe pour une prise de contact plus claire.",
      contactEyebrow: "Contact",
      contactTitle: "Conçu pour Lynchburg, Virginie et la région élargie",
      contactIntro:
        "Southern Bro Enterprises relie les clients à la consultation, au detailing, au ticketing, à la livraison, aux services de marque et aux programmes communautaires à travers une seule famille de marque reconnaissable.",
    },
    aboutSection: {
      eyebrow: "À Propos",
      title: "Southern Bro Enterprises est conçue pour organiser plusieurs lignes de service avec professionnalisme",
      intro:
        "Southern Bro Enterprises rassemble une grande variété de services de soutien commercial, de marques orientées client et de programmes communautaires sous une même société mère.",
      body:
        "L'objectif est simple : aider les clients, partenaires et membres de la communauté à comprendre les services disponibles et à demander de l'aide rapidement et professionnellement.",
      ctaPrimary: "Découvrir Nos Services",
      ctaSecondary: "Demander un Devis",
      logoBlurb:
        "L'entreprise relie plusieurs identités de service sans perdre la marque centrale Southern Bro. Cela crée une expérience professionnelle tout en gardant visible l'ensemble de la famille de services.",
      highlights: [
        {
          title: "Soutien Multi-Marques",
          description:
            "Une structure d'entreprise reliant les services aux entreprises, l'auto detailing, la livraison, les événements et les initiatives communautaires.",
        },
        {
          title: "Ancrée Localement",
          description:
            "Construite autour de Lynchburg, en Virginie, et des besoins régionaux, avec un accent clair sur la réactivité et la fiabilité.",
        },
        {
          title: "Professionnelle et Flexible",
          description:
            "Pensée pour soutenir aussi bien les demandes du quotidien que les besoins plus spécialisés liés aux entreprises ou à la communauté.",
        },
      ],
    },
    priorityServices: {
      eyebrow: "Services Mis en Avant",
      title: "Landscaping, detailing et soutien commercial",
      intro:
        "Parcourez les lignes de service actuellement disponibles pour les réservations directes, les demandes de devis et l'intake de projet.",
      exploreService: "Voir le Service",
      ctas: ["Demander le Landscaping", "Demander un Detailing", "Demander un Conseil"],
    },
    serviceCards: {
      eyebrow: "Famille Complète de Marques",
      title: "Chaque marque actuelle et future reste visible dans un répertoire organisé",
      intro:
        "Les cartes présentent chaque marque avec son logo, ses services, son public et son parcours de demande dans un format plus soigné et prêt pour les clients.",
      learnMore: "En Savoir Plus",
      priorityNow: "Priorité Actuelle",
      activeService: "Service Actif",
      secondaryFocus: "Accent Secondaire",
      viewBrand: "Voir la Marque",
      comingSoon: "Bientôt Disponible",
    },
    brandStrip: {
      comingSoon: "Bientôt Disponible",
    },
    resourcePreview: {
      eyebrow: "Ressources",
      title: "Un contenu utile qui soutient le SEO et l'information client",
      button: "Voir les Ressources",
      learnMore: "En Savoir Plus",
      categories: ["Guide Client", "Conseil", "Detailing", "Ticketing"],
      titles: [
        "Comment Se Préparer à une Demande de Devis",
        "Checklist de Lancement d'Entreprise",
        "Ce qu'il Faut Inclure dans une Demande de Detailing",
        "Vue d'Ensemble de l'Intake Événementiel Ticket Vibez",
      ],
      descriptions: [
        "Une checklist pratique indiquant les informations à rassembler avant de demander un service.",
        "Une ressource simple pour les entrepreneurs qui ont besoin de structure avant le lancement, la mise en place ou le soutien opérationnel.",
        "Un guide simple pour les clients demandant du detailing, avec détails de lieu et préférences de planning.",
        "Un court guide sur les informations que les organisateurs doivent fournir pour demander un support de ticketing ou de promotion.",
      ],
    },
    teamGrid: {
      cta: "En Savoir Plus",
      titles: ["Associé Gérant en Capital", "Associé en Capital", "Associée en Capital"],
      roles: ["Fondateur / C.E.O.", "Directeur du Développement Commercial", "Directrice des Opérations"],
      summaries: [
        "Fondateur et opérateur principal guidant Southern Bro Enterprises, la mission H.O.P.E. et la direction générale du soutien commercial.",
        "Responsable du développement commercial axé sur les partenariats, l'action de terrain et le renforcement du réseau de services Southern Bro.",
        "Professionnelle orientée service avec une expérience en santé, hospitalité et relation client, aidant Southern Bro à allier opérations solides et soutien communautaire.",
      ],
    },
    requestQuotePage: {
      eyebrow: "Demander un Devis",
      title: "Une page d'intake professionnelle pour les services Southern Bro",
      intro:
        "Soumettez une demande organisée pour le landscaping, le detailing, le conseil, la livraison, le soutien communautaire et les autres demandes de service Southern Bro.",
      benefits: [
        "Un parcours central de devis pour le landscaping, le detailing, le conseil et les services de soutien.",
        "Une capture de leads organisée, prête pour le suivi et l'orientation CRM.",
        "Un parcours d'intake professionnel pour mobile et bureau.",
      ],
      categoryLabels: [
        "Conseil aux Entreprises",
        "Services de Detailing",
        "Services de Landscaping",
        "Ticket Vibez / Support Événementiel",
        "Livraison",
        "VA Recovery Services / Soutien Communautaire",
        "Soutien Commercial Général",
        "Autre",
      ],
    },
    serviceForm: {
      sectionLabel: "Demande de Service",
      title: "Demander un Devis",
      description:
        "Remplissez le formulaire ci-dessous pour demander de l'aide auprès de Southern Bro Enterprises ou d'un des services actifs mis en avant sur le site.",
      submitLabel: "Envoyer la Demande de Devis",
      submitting: "Envoi en cours...",
      labels: {
        fullName: "Nom Complet",
        companyName: "Entreprise / Organisation",
        phone: "Numéro de Téléphone",
        email: "Adresse Email",
        category: "Catégorie de Service",
        description: "Description",
        address: "Adresse",
        timeline: "Délai Souhaité",
        budget: "Fourchette de Budget",
        urgency: "Urgence",
        referralSource: "Comment Avez-Vous Entendu Parler de Nous ?",
      },
      placeholders: {
        fullName: "Entrez votre nom complet",
        companyName: "Entrez le nom de votre entreprise si applicable",
        phone: "Entrez votre numéro de téléphone",
        email: "Entrez votre email",
        description: "Décrivez le service nécessaire",
        address: "Entrez l'adresse du service si applicable",
        timeline: "Exemple : cette semaine ou le mois prochain",
        budget: "Exemple : moins de 500 $ ou ouvert à un devis",
        referralSource: "Google, flyer, recommandation, réseaux sociaux, etc.",
      },
      urgency: ["Faible", "Normale", "Élevée", "Urgent"],
    },
    whatWeDoPage: {
      eyebrow: "Nos Services",
      title: "Soutien commercial, services de marque et amélioration communautaire",
      intro:
        "Southern Bro Enterprises rassemble le soutien commercial, les lignes de service de marque et les programmes à vocation communautaire sous une même société mère.",
      currentNetworksEyebrow: "Réseaux Actuels",
      currentNetworksTitle: "Southern Bro intervient à travers ces lignes de service",
      networkDescriptions: [
        "Société mère et système central de soutien pour la famille de marques.",
        "Réseau de services commerciaux connecté à la structure générale de l'entreprise.",
        "Initiatives de soutien communautaire, plaidoyer et stabilité.",
        "Marque de support événementiel et ticketing axée sur l'accès, la promotion et le service client.",
      ],
      brandedServicesEyebrow: "Nos Services de Marque",
      brandedServicesTitle: "Une famille de marques assurée, autorisée et structurée clairement",
      hopeEyebrow: "Programme de Subvention H.O.P.E.",
      hopeTitle: "L'accès à l'éducation et l'amélioration communautaire restent au cœur du projet",
      hopeBody:
        "Le programme H.O.P.E. soutient les personnes et projets communautaires qui démontrent un besoin financier et une volonté forte de progresser par l'éducation, la formation ou l'amélioration communautaire.",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Entrer en contact avec l'équipe Southern Bro",
      intro:
        "Contactez l'équipe par email direct, téléphone ou via les parcours de demande de service sans devoir fouiller plusieurs pages.",
      contactLabels: ["Support Général", "Appeler ou Écrire"],
    },
    teamPage: {
      eyebrow: "Notre Équipe",
      title: "Rencontrez l'équipe de direction Southern Bro",
      intro:
        "Découvrez qui dirige chaque partie de l'entreprise et contactez la bonne personne via des profils directs et des parcours de contact clairs.",
      networksEyebrow: "Nos Réseaux",
    },
  },
} as const;

export type TranslationSet = (typeof translations)[Language];
