/**
 * ─────────────────────────────────────────────────────────────────────────────
 * ACE STATIC CREATIVES — CENTRAL SITE CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Every piece of user-facing content lives here: brand colors, copy, contact
 * info, CTA links, pricing, FAQs, projects, and image paths.
 *
 * Copy follows the Copywriting SOP (NESB framework + Conditions Deck) and the
 * Local Authority Framework (local keywords, money pages, plain English).
 *
 * Edit this file to update the site — no component markup changes required.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/* ═══════════════════════════════ BRAND ═══════════════════════════════ */

/** Production domain. Change this when deploying to a different URL. */
export const siteUrl = 'https://ace-static-creatives.com';

export const brand = {
  name: 'Ace Static Creatives',
  shortName: 'Ace',
  logoInitial: 'A',
  tagline: 'Your 24/7 Digital Salesman in Guyana',
  location: 'Georgetown, Guyana',
  footerTagline: 'Built for speed on Georgetown mobile networks.',
};

/**
 * Brand colors. These are injected as CSS variables in Layout.astro and drive
 * every Tailwind utility on the site (bg-base, text-sand, bg-forest, …).
 * Change a hex here and the whole site updates.
 */
export const colors = {
  base: '#121414', // page background
  surface: '#1a1c1b', // raised panels
  surface2: '#222524', // higher-raised panels / chips
  cream: '#f7f4ef', // primary text
  creamDim: '#e9e3d4', // secondary text
  sand: '#b6c29a', // accent / highlights
  olive: '#90905c',
  forest: '#3d7a20', // primary CTA green (darker for better contrast)
  clay: '#b85c4a', // warning / "pain" accent
  clayDark: '#8a4538',
  warmBlue: '#4a6fa5',
};

/* ═══════════════════════ CONTACT & LINKS ═══════════════════════ */

export const contact = {
  /** International format, no leading + */
  whatsappNumber: '5926751884',
  whatsappUrl: 'https://wa.me/5926751884',
  email: 'acestaticcreatives93@gmail.com',
  location: 'Georgetown, Guyana',
  responseTime: 'Usually within a few hours on WhatsApp.',
};

export const nav = {
  links: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  cta: {
    label: 'Get My Free Mockup',
    href: 'https://wa.me/5926751884',
  },
};

export const footer = {
  blurb:
    'Fast static websites, local SEO and Google Business Profiles built for Guyanese small businesses. We get you found on Google and route the leads straight to your WhatsApp.',
  exploreHeading: 'Explore',
  contactHeading: 'Contact',
  copyrightName: 'Ace Static Creatives',
  rightsText: 'All rights reserved.',
  mapsLabel: 'Find us on Google Maps',
};

/* ═══════════════════════ SEO / PAGE METADATA ═══════════════════════ */
/* Titles follow: [Service] in Georgetown, Guyana | Ace Static Creatives
   Descriptions are 150–160 chars and mention Georgetown, Guyana. */

export const seo = {
  default: {
    title: 'Web Design in Georgetown, Guyana | Ace Static Creatives',
    description:
      'Professional web design in Georgetown, Guyana. Fast static websites, local SEO and Google Business Profiles that bring small businesses more customers.',
  },
  services: {
    title: 'Web Design & Local SEO Services in Georgetown, Guyana | Ace Static Creatives',
    description:
      'Web design services in Georgetown, Guyana: static websites, local SEO, Google Business Profiles and weekly blogs. Two simple GYD plans with no hidden fees.',
  },
  portfolio: {
    title: 'Web Design Portfolio in Georgetown, Guyana | Ace Static Creatives',
    description:
      'Our web design portfolio in Georgetown, Guyana: fast static websites and local SEO systems built for Guyanese small businesses. See the live examples today.',
  },
  about: {
    title: 'About Our Web Design Team in Georgetown, Guyana | Ace Static Creatives',
    description:
      'We are the web design team in Georgetown, Guyana behind static websites, local SEO and Google Business Profiles that grow small businesses across Guyana.',
  },
  contact: {
    title: 'Contact Our Web Design Team in Georgetown, Guyana | Ace Static Creatives',
    description:
      'Contact our web design team in Georgetown, Guyana on WhatsApp today. Get a free custom website mockup, local SEO advice and honest, jargon-free answers.',
  },
  blog: {
    title: 'Local SEO & Website Guides in Georgetown, Guyana | Ace Static Creatives',
    description:
      'Plain-English guides for Guyanese small business owners: local SEO, Google Maps ranking and website tips from a web design team in Georgetown, Guyana.',
  },
};

/* ═══════════════════════ MOCKUP MODAL (LEAD FORM) ═══════════════════════ */

export const mockupForm = {
  defaultTriggerLabel: 'Claim Your Free Mockup',
  progressTag: 'Free mockup',
  steps: {
    industry: {
      question: 'What type of business are you operating?',
      options: [
        'Local Service',
        'Beauty, Health & Spa',
        'Professional Services',
        'E-Commerce / Retail',
        'Other',
      ],
    },
    status: {
      question: 'What is the current state of your website?',
      options: ['No website yet', 'Have a site but 0 leads', 'Need an update/overhaul'],
    },
    goal: {
      question: 'What is your main focus for the next 30 days?',
      options: [
        'Get found on Google Maps',
        'Get pre-qualified leads via WhatsApp',
        'Launch a fast new website',
      ],
    },
    capture: {
      question: 'Where should we send your free mockup?',
      businessLabel: 'Business Name',
      businessPlaceholder: 'e.g. Georgetown Auto Parts',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Jane Doe',
    },
  },
  backLabel: 'Back',
  nextLabel: 'Next',
  submitLabel: 'SUBMIT & CLAIM FREE MOCKUP VIA WHATSAPP',
  disclaimer: 'Takes 20 seconds. Zero obligation.',
  mockupValue: '$99,999 GYD',
  messageIntro: 'Hi Ace Static Creatives! I just requested my free mockup on your site.',
  messageOutro: 'Looking forward to seeing the preview!',
};

/* ═══════════════════════════════ HOME PAGE ═══════════════════════════════ */

export const home = {
  hero: {
    badge: 'Based in Georgetown, Guyana',
    /** Headline split so the highlighted phrase can be styled independently */
    headlineStart: 'Static Websites That Bring You Customers',
    headlineHighlight: 'in Georgetown, Guyana',
    headlineEnd: '— While You Sleep.',
    subheadline:
      "We build fast, bulletproof websites, fix your Google Business Profile, and rank you for local searches. You don't touch a thing. You just answer the WhatsApp leads.",
    primaryCta: 'Claim Your FREE Website Mockup',
    secondaryCta: { label: 'See our services', href: '/services' },
    reassurance: 'No tech skills needed. No hidden hosting fees. No surprise bills.',
    image: {
      src: '/hero-image-4.png',
      alt: 'Side-by-side comparison: a broken, slow website versus a fast, reliable static storefront',
      width: 1536,
      height: 1024,
    },
    stats: [
      { value: '3', label: 'build slots left this month' },
      { value: '90-day', label: 'Google visibility guarantee' },
      { value: '$0', label: 'upfront on the Digital Salesman' },
    ],
  },

  marquee: [
    'Static Websites',
    'Local SEO',
    'Google Business Profile',
    'WhatsApp Leads',
  ],

  pain: {
    headingStart: 'The ',
    headingUnderlined: 'ugly truth',
    headingEnd: ' about your online presence right now',
    paragraphs: [
      {
        before: 'Your business runs on referrals and repeat customers. ',
        emphasis: 'Strangers who search for you on Google find nothing — or worse, they find your competitor.',
        after: '',
      }, {
        before:
          'You message a web developer to fix a price or a broken link. Single ticks. Ignored messages. Or a surprise hourly bill just to get a reply.',
        emphasis: '',
        after: '',
      }, {
        before:
          'Meanwhile your customers type "check PM for price" into chaotic Facebook comments, your Google Maps listing sits empty with zero reviews, and ',
        emphasis: 'every day you stay invisible is a job you handed to your competitor.',
        after: '',
      },
    ],
    points: [
      'Developers who ghost you after payment',
      'Surprise hourly bills for tiny fixes',
      'Zero reviews on your Google Maps listing',
      'A site that spins on GTT & DigiCell data',
    ],
  },

  transformation: {
    heading: 'We killed the "build & abandon" model.',
    paragraphs: [
      "At Ace Static Creatives, we don't charge you hundreds of thousands upfront just to ghost you next month. We stay on your team every single month.",
      "We build lightning-fast static websites that physically cannot break, set up your Google Business Profile properly, and write weekly content that tells Google you are THE local expert. All managed by us. All on Guyana's mobile networks.",
    ],
    closer: 'Best of all? If you\'re not on Google for your core services within 90 days, we work for free until you are.',
    cards: [
      {
        icon: 'shield',
        title: 'Zero moving parts',
        body: 'No databases, no plugins, no update buttons. Just files that load instantly on any phone in Guyana.',
      },
      {
        icon: 'bolt',
        title: 'Built for Georgetown data speeds',
        body: 'Compressed assets, minimal requests, instant first paint on GTT and DigiCell mobile data.',
      },
      {
        icon: 'chat',
        title: 'Updates over WhatsApp',
        body: 'Text us a price change, a new photo, or your new business hours. We handle it fast — up to 15 times a month.',
      },
    ],
  },

  servicesGrid: {
    heading: 'Everything you need to get found in Georgetown',
    subheading:
      "We don't sell you a website and walk away. We build the whole system that turns local searches into WhatsApp leads.",
    items: [
      {
        href: '/services/web-design',
        title: 'Static Web Design',
        blurb: 'A custom 5-page website that loads instantly and never breaks. Built to convert visitors into WhatsApp leads.',
        anchor: 'our static web design service in Georgetown',
      },
      {
        href: '/services/local-seo',
        title: 'Local SEO',
        blurb: 'Rank for searches like "your service Georgetown". Weekly blog posts and smart internal linking that climb Google.',
        anchor: 'our local SEO service in Georgetown',
      },
      {
        href: '/services/google-business-profile',
        title: 'Google Business Profile',
        blurb: 'Real photos, real reviews, correct categories. The Map Pack is where locals buy — we get you in it.',
        anchor: 'our Google Business Profile setup in Georgetown',
      },
      {
        href: '/services/website-maintenance',
        title: 'Website Maintenance',
        blurb: 'Hosting, security and updates handled for you. One WhatsApp message and it\'s done — no hourly bills.',
        anchor: 'our website maintenance service in Georgetown',
      },
    ],
  },

  method: {
    heading: 'How we get your business found on Google',
    subheading: 'Six steps. Plain English. No marketing jargon.',
    steps: [
      {
        title: '1. Your Google Map Profile comes first.',
        body: 'When people need help fast, they search Google Maps first. We clean your profile, replace stock photos with real pictures of your work, and help you collect your first 10 real reviews so new clients trust you instantly.',
      },
      {
        title: '2. We build pages that actually bring in customers.',
        body: 'Not generic "Services" pages people scroll past. We build pages that match exactly what people type when they\'re ready to hire — like "Emergency Roof Repair in Georgetown — Same Day Service, No Hidden Fees."',
      },
      {
        title: '3. We write helpful, local articles that build trust.',
        body: 'Short, useful guides about real local problems — like how to prepare your business for the Georgetown rainy season. Locals share them, and Google learns you\'re the go-to expert in your city.',
      },
      {
        title: '4. We connect your pages so nobody gets lost.',
        body: 'A website with no links between pages is a house with no doors. We link your articles to your service pages and your homepage, so visitors find what they need in one click — and Google ranks you faster.',
      },
      {
        title: '5. We get respected local sites to vouch for you.',
        body: 'No cheap spam links — Google penalizes those. We build real relationships with local businesses, community blogs and verified directories so Google sees Georgetown vouching for you.',
      },
      {
        title: '6. We focus 100% on your city.',
        body: 'We ignore national vanity keywords that bring traffic that can\'t buy. We target "your service Georgetown" — the exact searches typed by people ready to book today.',
      },
    ],
  },

  process: {
    headingStart: 'Your',
    headingHighlight: 'digital salesman',
    headingMiddle: 'lives in ',
    headingAccent: '3 simple steps',
    steps: [
      {
        tag: 'Step 1',
        title: 'The WhatsApp briefing',
        body: 'We look at your social pages, your Google listing and your goals. 20 minutes on WhatsApp. That\'s it.',
      },
      {
        tag: 'Step 2',
        title: 'Review your free mockup',
        body: 'Within 4 days you get an elite website layout built for your brand — before you pay a single dollar.',
      },
      {
        tag: 'Step 3',
        title: 'Launch & get found',
        body: 'We deploy your site, optimize your Google Business Profile, and start climbing local search while you run your business.',
      },
    ],
  },

  guarantee: {
    heading: 'The 90-Day Google Visibility Guarantee',
    body: 'If your website and Google Business Profile don\'t show up on Google for your core local services within 90 days of going live, we work for free until they do. No excuses. No fine print.',
    seal: '🛡️',
  },

  faq: {
    heading: 'Frequently asked questions',
    items: [
      {
        question: 'Do I need to know how to code or manage web hosting?',
        answer:
          'Absolutely not. We handle hosting, security and every update. You focus on running your business; we act as your dedicated digital mechanics.',
      },
      {
        question: 'How are static sites faster than normal websites?',
        answer:
          'Traditional sites rebuild themselves on every click. Static sites are pre-built, so the server hands the customer a ready-made page instantly. Zero processing time. Perfect for Guyana\'s mobile networks.',
      },
      {
        question: 'What counts as a website update?',
        answer:
          'Swapping a photo, changing a price, adding a testimonial, updating business hours or editing text — anything under 15 minutes. New pages or full redesigns are billed separately as project add-ons.',
      },
      {
        question: 'What if I want to change a price or layout later?',
        answer:
          'Just send us a WhatsApp message. As your permanent partners, we handle all updates, price changes and layout tweaks quickly — it\'s included in your plan.',
      },
    ],
  },

  finalCta: {
    heading: 'Put an expert team in your contacts today',
    body: 'No tech jargon. No hidden hosting fees. No surprise bills. Just an affordable monthly partnership that keeps your business visible on Google and sharp online.',
    note: 'We only take on 3 new builds per month so every client gets real attention. Need an update or a new promo? Text it to us on WhatsApp and it\'s done.',
    cta: 'Claim Your FREE Website Mockup',
  },
};

/* ═════════════════════════════ SERVICES PAGE ═════════════════════════════ */

export const services = {
  hero: {
    eyebrow:
      'Attention Guyanese business owners: stop paying for websites that sit there looking pretty while your competitors take your customers!',
    headline:
      "We Build Fast Static Websites That Get You Found On Google And Route Leads Straight To Your WhatsApp — Or You Don't Pay.",
    subheadline:
      'Most web designers hand you a "pretty digital brochure" and disappear. We build a complete local visibility system: website, Google Business Profile, local SEO and weekly content — managed every month.',
    cta: 'Claim Your FREE Website Mockup',
    reassurance: 'No pushy sales pitch. No obligation. Just a clear roadmap to get found.',
  },

  pain: {
    heading: 'Are You Tired Of Playing "Digital Guesswork" With Your Business?',
    subheading:
      "Let's be honest. You didn't get into business to chase down unqualified leads or wonder where your next customer is coming from. Does any of this sound painfully familiar?",
    cards: [
      {
        title: 'The "Pretty Website" Trap',
        body: 'You paid a web designer who delivered a nice-looking site, but it brings in zero leads and zero calls.',
      },
      {
        title: 'Invisible On Google Maps',
        body: 'When locals search for your service, your competitor shows up with 40 reviews and you show up with none — or not at all.',
      },
      {
        title: 'The Ghosted-By-Developer Cycle',
        body: 'You paid upfront, they built once, and now every tiny fix costs you an hourly bill or a week of begging on WhatsApp.',
      },
      {
        title: 'Working IN Your Business, Not ON It',
        body: "You're trapped doing low-level admin chores instead of focusing on high-leverage, revenue-producing activities.",
      },
    ],
    truthLabel: 'Here is the brutal truth:',
    truthBody:
      "You don't have a traffic problem. You have a visibility problem. If locals can't find you on Google when they're ready to buy, you don't have a scalable business — you have an expensive job.",
  },

  comparison: {
    heading: 'Why Our Systems Out-Perform Standard Websites Every Single Time',
    standardHeading: 'What Standard Web Designers Give You 👎',
    aceHeading: 'What Ace Static Creatives Delivers 👍',
    rows: [
      {
        standard: 'Pretty graphics with zero psychology',
        ace: 'Copy that speaks directly to your dream buyer\'s fears and desires.',
      },
      {
        standard: 'Generic "Contact Us" forms that get ignored',
        ace: 'Direct WhatsApp lead routing that captures leads 24/7/365.',
      },
      {
        standard: 'Slow, cluttered pages that lose visitors',
        ace: 'Lightning-fast, mobile-first static architecture built to rank and convert.',
      },
      {
        standard: 'A one-time build, then silence',
        ace: 'Monthly management: hosting, security, updates and weekly local content.',
      },
    ],
  },

  plans: {
    heading: 'Our Offer Packages',
    subheading:
      'Two simple plans. Priced in GYD. No hidden fees, no surprise bills — ever.',
    items: [
      {
        name: 'The Digital Salesman',
        tag: 'Start risk-free',
        priceSetup: '$0 GYD setup',
        priceMonthly: '$20,000 GYD/mo',
        term: '12-month agreement',
        features: [
          'Custom 5-page static website (Home, Services, About, Contact, Gallery)',
          'Fully managed hosting & security',
          'Google Business Profile setup & optimization',
          'Local SEO foundation (rank for your city)',
          'WhatsApp lead routing',
          'Up to 8 website updates per month',
        ],
        cta: 'Get Started For $0 Upfront',
        featured: false,
      },
      {
        name: 'The Local Authority',
        tag: 'Most popular',
        priceSetup: '$20,000 GYD setup',
        priceMonthly: '$50,000 GYD/mo',
        term: 'Monthly retainer',
        features: [
          'Custom 5-page static website (Home, Services, About, Contact, Gallery)',
          'Fully managed hosting & security',
          'Google Business Profile setup + active monthly management',
          'Continuous local SEO (climb Google search & maps)',
          '1 new blog post every week (delivered every Monday)',
          'WhatsApp lead routing',
          'Up to 15 website updates per month',
        ],
        cta: 'Claim Your Local Authority',
        featured: true,
      },
    ],
  },

  updates: {
    heading: 'What counts as an "update"? (So nobody gets surprised)',
    included: [
      'Swapping a photo',
      'Changing a price',
      'Adding a new testimonial',
      'Updating business hours',
      'Editing text',
      'Adding a new gallery image',
    ],
    includedNote: 'Any task that takes less than 15 minutes to execute.',
    notIncluded: [
      'Designing brand-new pages',
      'Changing the entire layout or color scheme',
      'Adding complex features',
    ],
    notIncludedNote: 'These are billed separately as project add-ons — quoted upfront, always.',
  },

  guarantee: {
    heading: 'Our Ironclad 90-Day Guarantee',
    body: 'If your website and Google Business Profile do not show up on Google for your core local services within 90 days of going live, we work for free until they do. No excuses. No fine print.',
  },

  finalCta: {
    heading: 'Ready To Take Control Of Your Business Revenue?',
    body: 'We only take on 3 new clients each month so every build gets maximum attention. Don\'t let your competitors steal another customer while you wait.',
    cta: 'Get My Free Custom Mockup',
    steps: [
      'Click the button above and message us on WhatsApp.',
      'Fill out a quick 2-minute questionnaire about your business goals.',
      'We map out a step-by-step strategy to get you found on Google — completely free.',
    ],
  },
};

/* ══════════════════════════════ PORTFOLIO PAGE ══════════════════════════════ */

export const portfolio = {
  hero: {
    badge: 'Portfolio',
    headlineStart: 'Web design work in Georgetown, Guyana that',
    headlineHighlight: 'speaks for itself',
    subheadline:
      'Fast static websites and local SEO systems built for real Guyanese small businesses.',
  },
  projects: [
    {
      title: 'Specialist Cleaning Solutions',
      category: 'Multi-Service Business Site',
      description:
        'A full-service cleaning and maintenance website for a Georgetown-based company handling residential, commercial, and industrial jobs across Guyana.',
      url: 'https://specialcleaningsolutions.com/',
      image:
        'https://api.microlink.io/?url=https%3A%2F%2Fspecialcleaningsolutions.com%2F&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      title: 'Mendonca Global Gateway',
      category: 'Logistics Platform',
      description:
        'A US-to-Guyana air freight logistics site with personal US shipping addresses, real-time tracking flow, and Georgetown & Mabaruma pickup options.',
      url: 'https://mendoncagg.com/',
      image:
        'https://api.microlink.io/?url=https%3A%2F%2Fmendoncagg.com%2F&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      title: "Three A's Cleaning & Maintenance",
      category: 'Service Business Website',
      description:
        'A professional cleaning and maintenance service website for a Guyana-based company offering residential and commercial cleaning solutions.',
      url: 'https://three-a-s-cleaning-and-maintenance-service.pages.dev/',
      image:
        'https://api.microlink.io/?url=https%3A%2F%2Fthree-a-s-cleaning-and-maintenance-service.pages.dev%2F&screenshot=true&meta=false&embed=screenshot.url',
    },
  ],
  visitLabel: 'Visit live site',
  finalCta: {
    heading: 'Ready to be our next win?',
    body: "Tell us about your business and we'll build a free mobile-optimized mockup this week.",
    cta: 'Claim Your FREE Website Mockup',
  },
};

/* ══════════════════════════════ ABOUT PAGE ══════════════════════════════ */

export const about = {
  hero: {
    eyebrow: 'The Story Behind Ace Static Creatives',
    headline:
      'We Didn\'t Start An Agency To Build "Pretty Websites." We Built It To End The Digital Guesswork For Business Owners in Georgetown, Guyana.',
    subheadlineStart:
      'For too long, local businesses have been forced to choose between over-priced corporate agencies or cheap freelancers who build digital brochures that bring in zero leads. We built a third option:',
    subheadlineEmphasis: 'fast, enterprise-grade sales engines engineered to get you found and scale your revenue.',
  },

  whyFail: {
    heading: 'Why Most Small Business Websites Fail Miserably',
    paragraphs: [
      {
        before:
          'Let\'s be completely transparent. Most web designers care about one thing: making a page look "aesthetic" so they can put it in their portfolio and collect your check. But aesthetics don\'t pay your bills.',
        emphasis: 'Visibility and conversions do.',
      },
      {
        before:
          'When you hire a traditional web designer, they hand you a site and expect you to figure out the copywriting, the Google Business Profile, the local SEO, and the content that makes Google trust you.',
        emphasis: '',
      },
    ],
    traditionalLabel: 'Traditional Web Designer',
    traditionalBody: 'Pretty Layout + "Contact Us" Form + Zero Leads ❌',
    aceLabel: 'Ace Static Creatives',
    aceBody: 'Fast Static Tech + Google Business Profile + Local SEO + WhatsApp Sales Engine 🚀',
    realizationStart:
      "We realized Guyanese service providers and business owners didn't need more \"digital art.\" They needed an",
    realizationEmphasis: 'automated, 24/7 Digital Salesman',
    realizationEnd: 'that works around the clock to turn local searches into pre-qualified leads.',
  },

  pillars: {
    heading: 'The Ace Static Standards',
    subheading: 'The four pillars that define every system we build.',
    items: [
      {
        number: '1',
        title: 'Speed & Security Over Clutter',
        body: 'We build on lightning-fast, modern static architecture. No slow load times, no broken server plugins, and zero vulnerability to crashes.',
      },
      {
        number: '2',
        title: 'Local Visibility First',
        body: 'Your Google Business Profile and local SEO come before anything else. If locals can\'t find you on Maps, nothing else matters.',
      },
      {
        number: '3',
        title: 'Frictionless Local Routing',
        body: 'In Guyana, sales happen on WhatsApp. We engineer every system to route pre-qualified leads directly into your phone so you can close deals instantly.',
      },
      {
        number: '4',
        title: 'Shared Risk (The 90-Day Commitment)',
        body: 'We do not believe in charging massive setup fees before proving our value. If you\'re not on Google for your core services in 90 days, we work free until you are.',
      },
    ],
  },

  mission: {
    heading: 'We Measure Our Success On Your Cash Register, Not Design Awards.',
    paragraphs: [
      {
        before: 'At Ace Static Creatives, our core focus is simple:',
        emphasis: 'to help local businesses claim their market dominance.',
      },
      {
        before:
          'Whether you are a local courier service, a growing contractor, a spa owner, or a specialized professional service, you deserve enterprise-grade digital systems without corporate bloat or hidden fees. We act as your fractional digital growth team—handling the tech, the SEO, and the content so you can focus entirely on running your operations and fulfilling sales.',
        emphasis: '',
      },
    ],
  },

  finalCta: {
    heading: 'Ready To Put A 24/7 Digital Salesman To Work For Your Business?',
    body: "You don't need to take our word for it. Let us prove it to you before you spend a single cent on setup fees.",
    cta: 'Tap Here To Claim Your FREE Custom Mockup',
    nextHeading: 'What happens next?',
    nextSteps: [
      'Fill out our 20-second questionnaire.',
      'We build a custom preview tailored to your exact industry.',
      'You review it on WhatsApp—zero pressure, zero obligation.',
    ],
  },
};

/* ═════════════════════════════ CONTACT PAGE ═════════════════════════════ */

export const contactPage = {
  hero: {
    badge: 'Contact',
    headlineStart: 'Put a Georgetown, Guyana web design team in',
    headlineHighlight: 'your contacts',
    subheadline:
      "No tickets, no waiting rooms, no tech jargon. Just WhatsApp us and we'll handle the rest.",
  },
  whatsappCard: {
    heading: 'WhatsApp us',
    body: 'The fastest way to get help, request updates, or claim your free mockup.',
    cta: 'Claim Your FREE Website Mockup',
  },
  otherWays: {
    heading: 'Other ways to reach us',
    emailLabel: 'Email',
    locationLabel: 'Location',
    responseLabel: 'Response time',
  },
  finalCta: {
    heading: 'Let us prove it first',
    body: "We'll build a custom, mobile-optimized homepage mockup for your business this week before you pay us a single dollar.",
    cta: 'Claim Your FREE Website Mockup',
  },
};
