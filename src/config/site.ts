/**
 * ─────────────────────────────────────────────────────────────────────────────
 * ACE STATIC CREATIVES — CENTRAL SITE CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Every piece of user-facing content lives here: brand colors, fonts, copy,
 * contact info, CTA links, pricing, FAQs, projects, and image paths.
 *
 * Copy follows the Copywriting SOP (NESB framework) and the brand-identity.md
 * positioning kit: forest green + charcoal + warm off-white + high-contrast
 * gold CTAs, Cormorant Garamond headers, Commissioner body.
 *
 * Conversion model (flywheel.md): NO free mockups. Every CTA routes to
 * WhatsApp or the portfolio preview page.
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
 * Visual brand kit — brand-identity.md, and nothing else.
 * Injected as CSS variables in Layout.astro and driving every Tailwind
 * utility on the site (bg-base, bg-surface, text-cream, bg-gold…).
 *
 *   base    #1C3010  Forest Green   — primary background
 *   surface #222524  Charcoal Black — cards & structural elements
 *   cream   #F7F4EF  Warm Off-White — primary text
 *   gold    #E5A93C  Vibrant Gold   — CTA buttons & accents (Design Execution Rule)
 *
 * There is deliberately no fifth colour. Dimmed text is off-white at reduced
 * opacity (text-cream/70) — the same hue, never a new one. Positive/negative
 * meaning is carried by the ✓ / ✕ glyph and by which surface a panel sits on,
 * not by introducing a warning hue.
 *
 * Contrast on this palette: cream-on-forest 15.3:1, cream-on-charcoal 15.7:1,
 * gold-on-forest 8.05:1, charcoal-on-gold (button labels) 8.26:1 — all well
 * past WCAG AA.
 */
export const colors = {
  base: '#1C3010', // forest green page background
  surface: '#222524', // charcoal black cards / structural panels
  cream: '#F7F4EF', // warm off-white primary text
  gold: '#E5A93C', // vibrant gold — CTA buttons, links, accents
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
    label: 'Claim Your Digital Salesman',
    href: 'https://wa.me/5926751884',
  },
};

export const footer = {
  blurb:
    'Ultra-fast, multi-optimized static websites and local SEO for Guyanese small businesses. We get you ranking on Google Maps and route the calls straight to your phone fully managed for one simple monthly retainer.',
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
      'Premium web design in Georgetown, Guyana. Ultra-fast static websites, local SEO and Google Business Profiles that bring Guyanese businesses daily calls.',
  },
  services: {
    title: 'Web Design & Local SEO Services in Georgetown, Guyana | Ace Static Creatives',
    description:
      'Web design services in Georgetown, Guyana: static websites, local SEO, Google Business Profiles and authority blogs. Two simple GYD retainers, no setup hassle.',
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
      'Contact our web design team in Georgetown, Guyana on WhatsApp today. Get local SEO advice, portfolio previews and honest, jargon-free answers for your business.',
  },
  blog: {
    title: 'Local SEO & Website Guides in Georgetown, Guyana | Ace Static Creatives',
    description:
      'Plain-English guides for Guyanese small business owners: local SEO, Google Maps ranking and website tips from a web design team in Georgetown, Guyana.',
  },
};

/* ═══════════════════════════════ HOME PAGE ═══════════════════════════════ */

export const home = {
  hero: {
    badge: 'Georgetown, Guyana Web Design & Local SEO',
    /** H1 split so the local keyword can be styled independently */
    headlineStart: 'Premium Static Websites & Local SEO ',
    headlineHighlight: 'in Georgetown, Guyana',
    headlineEnd: '',
    /** Exact UVP from brand-identity.md */
    subheadline:
      'We build ultra-fast, multi-optimized static websites for local Guyanese businesses that load instantly, rank on Google Maps, and drive daily phone calls fully managed for a simple monthly retainer, with zero setup hassle.',
    primaryCta: 'Claim Your Digital Salesman',
    secondaryCta: { label: 'View Our Portfolio', href: '/portfolio' },
    reassurance: 'Zero setup hassle. Fully managed. One simple monthly retainer — no surprise bills.',
    image: {
      src: '/assets/hero-1536w.d6d1429f81.webp',
      alt: 'Illustration of a static website window and smartphone loading instantly, with a gold call-to-action button and a local map pin',
      width: 1536,
      height: 1024,
    },
    stats: [
      { value: '3', label: 'retainer slots left this month' },
      { value: '90-day', label: 'Google visibility guarantee' },
      { value: '$0', label: 'setup on the Digital Salesman' },
    ],
  },

  marquee: [
    'Static Websites',
    'Local SEO',
    'Google Business Profile',
    'WhatsApp Leads',
  ],

  /** Section 2 — positioning: generic designers vs Ace Static Creatives */
  positioning: {
    heading: 'Generic Web Designers vs. Your Digital Growth Partner',
    subheading:
      'Most designers sell you a file and disappear. We sell you a fully managed system that keeps bringing in customers.',
    themHeading: 'What Generic Designers Do',
    usHeading: 'What Ace Static Creatives Does',
    rows: [
      {
        pain: 'Overcharging Upfront',
        painBody: 'Massive, unaffordable setup fees before you have seen a single result.',
        solution: 'Zero Setup Hassle',
        solutionBody:
          'Low-risk, predictable $25,000 or $50,000 GYD monthly retainers. It feels like a utility bill, not a capital expense.',
      },
      {
        pain: 'No Copy or SEO Support',
        painBody: 'They ask you for text and drop it unoptimized on a page, then wonder why nothing ranks.',
        solution: 'Full Brand Discovery & Copywriting',
        solutionBody:
          'We handle direct-response copywriting, positioning, and complete Google Business Profile optimization for you.',
      },
      {
        pain: 'Left High & Dry',
        painBody: 'A password, a wave goodbye, and nobody to call when a price changes or something breaks.',
        solution: 'Continuous Monthly Partnership',
        solutionBody:
          'Ongoing management, updates and local content every month. We stay your long-term digital growth partner.',
      },
    ],
  },

  /** Internal links to the four money pages (Local Authority SOP) */
  servicesGrid: {
    heading: 'Everything you need to get found in Georgetown',
    subheading:
      "We don't sell you a website and walk away. We build the whole system that turns local searches into phone calls.",
    items: [
      {
        href: '/services/web-design',
        title: 'Static Web Design',
        blurb: 'A custom 5-page website that loads instantly and never breaks. Built to convert visitors into calls.',
        anchor: 'our static web design service in Georgetown',
      },
      {
        href: '/services/local-seo',
        title: 'Local SEO',
        blurb: 'Rank for searches like "your service Georgetown". Authority blogs and smart internal linking that climb Google.',
        anchor: 'our local SEO service in Georgetown',
      },
      {
        href: '/services/google-business-profile',
        title: 'Google Business Profile',
        blurb: 'Real photos, real reviews, correct categories. The Map Pack is where locals buy we get you in it.',
        anchor: 'our Google Business Profile setup in Georgetown',
      },
      {
        href: '/services/website-maintenance',
        title: 'Website Maintenance',
        blurb: 'Hosting, security and updates handled for you. One WhatsApp message and it\'s done no hourly bills.',
        anchor: 'our website maintenance service in Georgetown',
      },
    ],
  },

  /** Section 3 — the two retainers (offers.md) */
  plans: {
    heading: 'Two Simple Retainers. Priced in GYD.',
    subheading: 'No hidden fees, no surprise bills ever. Pick the pace that matches your ambition.',
    items: [
      {
        name: 'The Digital Salesman',
        tag: 'Subscription',
        priceSetup: '$0 GYD setup',
        priceMonthly: '$25,000 GYD/mo',
        term: '12-month agreement',
        features: [
          'Custom 5-page static website (Home, Services, About, Contact, Gallery)',
          'Fully managed hosting & security',
          'Google Business Profile setup & optimization',
          'Local SEO foundation (rank for your city)',
          'WhatsApp lead routing',
          '1 new blog post every 2 weeks (delivered every other Monday)',
          'Up to 8 website updates per month',
        ],
        cta: 'Claim Your Digital Salesman',
        featured: false,
      },
      {
        name: 'The Local Authority',
        tag: 'Growth Plan',
        priceSetup: '$20,000 GYD setup',
        priceMonthly: '$50,000 GYD/mo',
        term: 'Monthly retainer',
        features: [
          'Custom 5-page static website (Home, Services, About, Contact, Gallery)',
          'Fully managed hosting & security',
          'Google Business Profile setup + active monthly management',
          'Continuous local SEO (climb Google search & maps)',
          '1 new blog post every single week (delivered every Monday)',
          'WhatsApp lead routing',
          'Up to 15 website updates per month',
        ],
        cta: 'Claim Your Local Authority',
        featured: true,
      },
    ],
  },

  /** Section 4 — update policy transparency (offers.md) */
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
    notIncludedNote: 'These are billed separately as project add-ons quoted upfront, always.',
  },

  /** Section 5 — the guarantee (Safe) */
  guarantee: {
    heading: 'The 90-Day Google Visibility Guarantee',
    body: 'If your website and Google Business Profile do not show up on Google for your core local services within 90 days of going live, we work for free until they do. No excuses. No fine print.',
  },

  /** How the partnership works (flywheel: portfolio previews, no mockups) */
  process: {
    headingStart: 'Your',
    headingHighlight: 'digital salesman',
    headingMiddle: 'starts in',
    headingAccent: ' 3 simple steps',
    steps: [
      {
        tag: 'Step 1',
        title: 'Chat with us on WhatsApp',
        body: 'Tell us what your business does and who you serve. Twenty minutes, plain English, zero pressure.',
      },
      {
        tag: 'Step 2',
        title: 'Preview real work, pick your plan',
        body: 'We walk you through live portfolio previews and documented client results, then match you to the retainer that fits your goals.',
      },
      {
        tag: 'Step 3',
        title: 'Launch, rank, and take calls',
        body: 'We build, deploy and optimize your Google Business Profile — then climb local search while you run the business.',
      },
    ],
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
          'Swapping a photo, changing a price, adding a testimonial, updating business hours or editing text anything under 15 minutes. New pages or full redesigns are billed separately as project add-ons.',
      },
      {
        question: 'Why a monthly retainer instead of a one-time fee?',
        answer:
          'Because ranking on Google and keeping a site sharp is ongoing work. The retainer means you never pay a surprise hourly bill again updates, hosting, security and content are all handled every month.',
      },
    ],
  },

  finalCta: {
    heading: 'Put a Digital Salesman on Your Payroll',
    body: 'No tech jargon. No hidden hosting fees. No surprise bills. Just a fully managed system that keeps your business visible on Google and ringing on WhatsApp.',
    note: 'We only take on 3 new retainers per month so every client gets real attention. Message us on WhatsApp and we\'ll show you live previews of work like yours.',
    cta: 'Claim Your Digital Salesman',
  },
};

/* ═════════════════════════════ SERVICES PAGE ═════════════════════════════ */

export const services = {
  hero: {
    eyebrow:
      'Attention Guyanese business owners: stop paying for websites that sit there looking pretty while your competitors take your customers!',
    headline:
      'Ultra-Fast Static Websites That Rank on Google Maps and Drive Daily Phone Calls Fully Managed, Zero Setup Hassle.',
    subheadline:
      'Most web designers hand you a "pretty digital brochure" and disappear. We build a complete local visibility system: website, Google Business Profile, local SEO and authority content managed every single month.',
    cta: 'Claim Your Digital Salesman',
    secondaryCta: { label: 'View Our Portfolio', href: '/portfolio' },
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
        body: 'When locals search for your service, your competitor shows up with 40 reviews and you show up with none or not at all.',
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
      "You don't have a traffic problem. You have a visibility problem. If locals can't find you on Google when they're ready to buy, you don't have a scalable business you have an expensive job.",
  },

  comparison: {
    heading: 'Why Our Systems Out-Perform Standard Websites Every Single Time',
    standardHeading: 'What Standard Web Designers Give You',
    aceHeading: 'What Ace Static Creatives Delivers',
    rows: [
      {
        standard: 'Massive upfront fees before any result',
        ace: 'Zero setup hassle — one predictable monthly retainer in GYD.',
      },
      {
        standard: 'Your own unoptimized text dropped on a page',
        ace: 'Full brand discovery, direct-response copywriting and GBP optimization.',
      },
      {
        standard: 'A password, a goodbye, and silence',
        ace: 'A continuous monthly partnership updates, hosting, security, content.',
      },
      {
        standard: 'Slow, cluttered pages that lose visitors',
        ace: 'Lightning-fast, mobile-first static architecture built to rank and convert.',
      },
    ],
  },

  plans: {
    heading: 'Our Offer Packages',
    subheading:
      'Two simple retainers. Priced in GYD. No hidden fees, no surprise bills — ever.',
    items: [
      {
        name: 'The Digital Salesman',
        tag: 'Subscription',
        priceSetup: '$0 GYD setup',
        priceMonthly: '$25,000 GYD/mo',
        term: '12-month agreement',
        features: [
          'Custom 5-page static website (Home, Services, About, Contact, Gallery)',
          'Fully managed hosting & security',
          'Google Business Profile setup & optimization',
          'Local SEO foundation (rank for your city)',
          'WhatsApp lead routing',
          '1 new blog post every 2 weeks (delivered every other Monday)',
          'Up to 8 website updates per month',
        ],
        cta: 'Claim Your Digital Salesman',
        featured: false,
      },
      {
        name: 'The Local Authority',
        tag: 'Growth Plan',
        priceSetup: '$20,000 GYD setup',
        priceMonthly: '$50,000 GYD/mo',
        term: 'Monthly retainer',
        features: [
          'Custom 5-page static website (Home, Services, About, Contact, Gallery)',
          'Fully managed hosting & security',
          'Google Business Profile setup + active monthly management',
          'Continuous local SEO (climb Google search & maps)',
          '1 new blog post every single week (delivered every Monday)',
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
    notIncludedNote: 'These are billed separately as project add-ons quoted upfront, always.',
  },

  guarantee: {
    heading: 'Our Ironclad 90-Day Guarantee',
    body: 'If your website and Google Business Profile do not show up on Google for your core local services within 90 days of going live, we work for free until they do. No excuses. No fine print.',
  },

  finalCta: {
    heading: 'Ready To Take Control Of Your Business Revenue?',
    body: 'We only take on 3 new clients each month so every build gets maximum attention. Don\'t let your competitors steal another customer while you wait.',
    cta: 'Claim Your Digital Salesman',
    steps: [
      'Message us on WhatsApp using the button above.',
      'We show you live portfolio previews and documented client results.',
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
    body: 'Message us on WhatsApp and we\'ll walk you through previews built for businesses like yours.',
    cta: 'Claim Your Digital Salesman',
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
    traditionalBody: 'Pretty Layout + "Contact Us" Form + Zero Leads',
    aceLabel: 'Ace Static Creatives',
    aceBody: 'Fast Static Tech + Google Business Profile + Local SEO + WhatsApp Sales Engine',
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
    body: "You don't need to take our word for it. We'll show you live previews and documented results before you commit to anything.",
    cta: 'Claim Your Digital Salesman',
    nextHeading: 'What happens next?',
    nextSteps: [
      'Message us on WhatsApp — twenty minutes, plain English.',
      'We walk you through portfolio previews built for businesses like yours.',
      'You pick the retainer that fits. Zero pressure, zero obligation.',
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
    body: 'The fastest way to get help, request updates, or see portfolio previews.',
    cta: 'Claim Your Digital Salesman',
  },
  otherWays: {
    heading: 'Other ways to reach us',
    emailLabel: 'Email',
    locationLabel: 'Location',
    responseLabel: 'Response time',
  },
  finalCta: {
    heading: 'Let us prove it first',
    body: 'We\'ll show you live previews of work like yours and a clear plan to get you found on Google before you commit a single dollar.',
    cta: 'Claim Your Digital Salesman',
  },
};
