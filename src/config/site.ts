/**
 * ─────────────────────────────────────────────────────────────────────────────
 * ACE STATIC CREATIVES — CENTRAL SITE CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Every piece of user-facing content lives here: brand colors, copy, contact
 * info, CTA links, pricing, FAQs, projects, and image paths.
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
  forest: '#4d842b', // primary CTA green
  clay: '#b85c4a', // warning / "pain" accent
  clayDark: '#8a4538',
  warmBlue: '#4a6fa5',
};

/* ═══════════════════════════ CONTACT & LINKS ═══════════════════════════ */

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
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  cta: {
    label: 'Build My Digital Salesman',
    href: 'https://wa.me/5926751884',
  },
};

export const footer = {
  blurb:
    'High-performance static websites, scroll-stopping ads, and persuasive copy built exclusively for Guyanese small businesses.',
  exploreHeading: 'Explore',
  contactHeading: 'Contact',
  copyrightName: 'Ace Static Creatives',
  rightsText: 'All rights reserved.',
};

/* ═══════════════════════ SEO / PAGE METADATA ═══════════════════════ */

export const seo = {
  default: {
    title: 'Web Design Guyana | Static Websites & Digital Marketing | Ace Static Creatives',
    description:
      'Professional web design and website development in Guyana. We build fast static websites, digital marketing campaigns, and WhatsApp-integrated sales systems for Georgetown businesses.',
  },
  services: {
    title: 'Web Design Services Guyana | Static Websites & Digital Marketing | Ace Static Creatives',
    description:
      'Web design services in Guyana: static website development, digital marketing, Facebook ads, and WhatsApp lead generation. Get a free website mockup for your Guyana business.',
  },
  portfolio: {
    title: 'Web Design Portfolio Guyana | Website Examples | Ace Static Creatives',
    description:
      'See our web design portfolio in Guyana. Fast static websites, digital marketing campaigns, and sales systems built for Georgetown and Guyanese businesses.',
  },
  about: {
    title: 'About Ace Static Creatives | Web Design Guyana | Georgetown Web Developer',
    description:
      'Georgetown-based web design agency specializing in static websites and digital marketing for Guyanese businesses. WhatsApp-integrated sales systems and fast-loading websites.',
  },
  contact: {
    title: 'Contact Ace Static Creatives | Web Design Guyana | Georgetown',
    description:
      'Contact our Georgetown web design team. WhatsApp support, free website mockups, and digital marketing consultations for Guyanese businesses.',
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
        'Get pre-qualified leads via WhatsApp',
        'Automate sales & brand',
        'Scale paid ads',
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
    badge: "Guyana's Static Site Agency",
    /** Headline split so the highlighted phrase can be styled independently */
    headlineStart: 'Give your small business an enterprise-grade,',
    headlineHighlight: '24/7 digital salesman',
    headlineEnd: '—within 4 days.',
    subheadline:
      'Without bankrupting your cash flow on arrogant corporate agencies. Just a fast, bulletproof storefront and a team that answers on WhatsApp.',
    primaryCta: 'Claim Your FREE 24/7 Digital Salesman Mockup',
    secondaryCta: { label: 'See how it works', href: '/services' },
    reassurance: 'No tech skills needed. No hidden hosting fees. No surprise bills.',
    image: {
      src: '/hero-image-4.png',
      alt: 'Side-by-side comparison: a broken, slow website versus a fast, reliable static storefront',
      width: 1536,
      height: 1024,
    },
    stats: [
      { value: '4-day', label: 'mockup turnaround' },
      { value: '24/7', label: 'Digital Salesman' },
      { value: '$0', label: 'upfront launch option' },
    ],
  },

  marquee: [
    'Static DIGITAL SALESMAN',
    'Scroll-Stopping Ads',
    'Persuasive Copy',
    'WhatsApp Support',
  ],

  pain: {
    headingStart: 'The ',
    headingUnderlined: 'ugly truth',
    headingEnd: ' about local web developers in Guyana',
    paragraphs: [
      {
        before: 'Most tech guys and corporate agencies follow a lazy, profitable cycle: ',
        emphasis: 'they build once, collect your cash, and abandon you completely.',
        after: '',
      },
      {
        before:
          'You message them on WhatsApp to change a price or fix a broken link. You get single ticks, ignored messages, or a surprise hourly bill just to reply.',
        emphasis: '',
        after: '',
      },
      {
        before:
          'Meanwhile your business looks neglected, your links spin on weak mobile networks, and you waste hours repeating ',
        emphasis: '"check PM for price"',
        after: ' in chaotic Facebook comments.',
      },
    ],
    points: [
      'They take forever to reply',
      'Surprise hourly bills',
      'Broken plugins after updates',
      'Sites that spin on mobile data',
    ],
  },

  transformation: {
    heading: 'We killed the "build & abandon" model.',
    paragraphs: [
      "At Ace Static Creatives, we don't believe in charging you hundreds of thousands upfront just to ghost you next month.",
      "We build lightning-fast static DIGITAL SALESMAN that physically cannot break, don't use slow plugins, and load instantly on any smartphone data network in Georgetown.",
    ],
    closer: 'Best of all? We stay by your side as your permanent digital growth partners.',
    cards: [
      {
        icon: 'shield',
        title: 'Zero moving parts',
        body: 'No databases, no plugins, no update buttons. Just files that load.',
      },
      {
        icon: 'bolt',
        title: 'Built for Georgetown data speeds',
        body: 'Compressed assets, minimal requests, and instant first paint on mobile.',
      },
      {
        icon: 'chat',
        title: 'Updates over WhatsApp',
        body: 'Text us a price change, a new image, or a promo. We handle it fast.',
      },
    ],
  },

  tripleEngine: {
    headingUnderlined: 'Everything',
    headingEnd: ' you need to dominate the local market',
    subheading:
      "We don't hand you a website and leave you to figure out marketing alone. We build your entire customer-acquisition engine.",
    items: [
      {
        title: 'High-performance static Digital Salesman',
        body: 'Modern sites that convert casual visitors into paying leads.',
      },
      {
        title: 'High-stopping-power static ads',
        body: 'Bold, engineered creatives that own the scroll on Facebook and Instagram feeds.',
      },
      {
        title: 'Digital persuasion ads',
        body: 'Psychological copy that taps local desires, dismantles doubts, and drives WhatsApp inquiries.',
      },
    ],
  },

  process: {
    headingStart: 'Your',
    headingHighlight: 'digital salesman',
    headingMiddle: 'live in ',
    headingAccent: '3 simple steps',
    steps: [
      {
        tag: 'Step 1',
        title: 'The WhatsApp briefing',
        body: 'We look at your social pages, layout your goals, and outline your offer.',
      },
      {
        tag: 'Step 2',
        title: 'Review your free mockup',
        body: 'Within 4 days, you get an elite digital salesman layout built for your brand.',
      },
      {
        tag: 'Step 3',
        title: 'Launch & scale',
        body: 'We deploy, design your ads, and manage the tech monthly while you run your business.',
      },
    ],
  },

  faq: {
    heading: 'Frequently asked questions',
    items: [
      {
        question: 'Do I need to know how to code or manage web hosting?',
        answer:
          'Absolutely not. We handle all setup, hosting, and maintenance. You focus on running your business; we act as your dedicated digital mechanics.',
      },
      {
        question: 'How are static sites faster than normal websites?',
        answer:
          'Traditional sites rebuild themselves on every click. Static sites are pre-built, so the server hands the customer a ready-made page instantly. Zero processing time.',
      },
      {
        question: 'What if I want to change a price or layout later?',
        answer:
          'Just send us a WhatsApp message. As your permanent partners, we handle all updates, price changes, and layout tweaks.',
      },
    ],
  },

  finalCta: {
    heading: 'Put an expert team in your contacts today',
    body: 'No tech jargon. No hidden hosting fees. No surprise bills. Just an affordable, small-business-friendly monthly partnership that keeps your online presence sharp.',
    note: "Need an update, image change, or new promo? Text it to us on WhatsApp and it's done.",
    cta: 'Claim Your FREE 24/7 Digital Salesman Mockup',
  },
};

/* ═════════════════════════════ SERVICES PAGE ═════════════════════════════ */

/** First-month discount applied to every package (0.35 = 35% off) */
export const PACKAGE_DISCOUNT = 0.35;

export const services = {
  hero: {
    eyebrow:
      'Attention Guyanese business owners & service providers: stop wasting money on websites that do nothing but sit there looking pretty!',
    headline:
      "We Build High-Converting Sales Engines That Turn Cold Visitors Into Loyal, High-Paying Clients On Autopilot Or You Don't Pay.",
    subheadline:
      'Most web agencies build you a "pretty digital brochure" and leave you to figure out the rest. We build complete, Digital Persuasion conversion systems engineered to dominate your local market, ring your cash register, and scale your revenue fast.',
    cta: 'Claim Your FREE 24/7 Digital Salesman Mockup',
    reassurance: 'No pushy sales pitch. No obligation. Just a clear roadmap to scale.',
  },

  pain: {
    heading: 'Are You Tired Of Playing "Digital Guesswork" With Your Business?',
    subheading:
      "Let's be honest for a second. You didn't get into business to work 80-hour weeks putting out digital fires, chasing down unqualified leads, or wondering where your next customer is coming from. Does any of this sound painfully familiar?",
    cards: [
      {
        title: 'The "Pretty Website" Trap',
        body: 'You paid a web designer who delivered a nice-looking site, but it brings in zero leads and zero calls.',
      },
      {
        title: 'The Feast-or-Famine Rollercoaster',
        body: 'You rely almost entirely on word-of-mouth or random referrals, leaving your monthly revenue completely unpredictable.',
      },
      {
        title: 'Wasted Ad Budget',
        body: "You've thrown money at Facebook or Google ads, only to get clicks from tire-kickers who vanish when you tell them your prices.",
      },
      {
        title: 'Working IN Your Business, Not ON It',
        body: "You're trapped doing low-level administrative chores instead of focusing on high-leverage, revenue-producing activities.",
      },
    ],
    truthLabel: 'Here is the brutal truth:',
    truthBody:
      "You don't have a traffic problem. You have a conversion problem. If you can't turn traffic into profit predictably, you don't have a scalable business, you have an expensive job.",
  },

  comparison: {
    heading: 'Why Our High-Converting Systems Out-Perform Standard Websites Every Single Time',
    standardHeading: 'What Standard Web Designers Give You 👎',
    aceHeading: 'What Ace Static Creatives Delivers 👍',
    rows: [
      {
        standard: 'Pretty graphics with zero psychology',
        ace: "Digital Persuasion that speaks directly to your dream buyer's fears and desires.",
      },
      {
        standard: 'Generic "Contact Us" forms that get ignored',
        ace: 'High-Value Lead Captures & Automated Funnels that capture leads 24/7/365.',
      },
      {
        standard: 'Slow, cluttered pages that lose visitors',
        ace: 'Lightning-Fast, Mobile-First Architecture built to rank and convert instantly.',
      },
      {
        standard: 'Vague claims like "Friendly & Experienced"',
        ace: 'Godfather Offers that make it impossible for prospects to say no.',
      },
    ],
  },

  packages: {
    heading: 'Our Offer Packages',
    subheading:
      'Presenting an offer so complete, risk-free, and valuable that saying no would be foolish.',
    discountLabel: '35% off your first month',
    items: [
      {
        name: 'Launch Engine',
        tag: 'Start risk-free',
        priceSetup: '$0 GYD upfront',
        priceMonthly: '$35,000 GYD/mo',
        renewal: 'Renews at $35,000 GYD/mo',
        note: 'Client runs their own ads',
        features: [
          '5-Page Premium Web System (Home, Services, About, Contact, Gallery)',
          '1 Custom Interactive Tool (e.g., Price Calculator / Service Toggle)',
          '2 Premium Static Ad Creatives + 2 High-Converting Written Ad Copies',
          'Direct WhatsApp Lead Routing',
          'Complete Digital Management (Premium Hosting & Security + 2 Free Monthly Content Updates)',
          'Monthly Performance Report via WhatsApp',
        ],
        cta: 'Get Started For $0 Upfront',
        featured: false,
      },
      {
        name: 'Local Authority',
        tag: 'Most popular',
        priceSetup: '$20,000 GYD setup',
        priceMonthly: '$50,000 GYD/mo',
        renewal: 'Renews at $50,000 GYD/mo',
        note: 'Client provides their own Meta ad budget',
        features: [
          'Everything in Launch Engine (5-Page Premium Web System)',
          'Active Facebook Ad Management (Campaign monitoring & tuning)',
          '3 High-Converting Written Ad Copies + 3 Premium Static Ad Creatives',
          'Local SEO Sweep (Google Maps & local search ranking)',
          '2x Per Month Campaign Performance Tuning',
          'Complete Digital Landlord Management (Hosting & Security)',
        ],
        cta: 'Claim Your Digital Salesman',
        featured: true,
      },
      {
        name: 'Hyper-Growth Engine',
        tag: 'Maximum dominance',
        priceSetup: '$40,000 GYD setup',
        priceMonthly: '$85,000 GYD/mo',
        renewal: 'Renews at $85,000 GYD/mo',
        note: 'Client provides their own Meta ad budget',
        features: [
          'Everything in Local Authority (5-Page Premium Web System)',
          'Advanced Facebook Ad Management (Daily tracking, scaling, Meta Ads Manager & Advanced Pixel Tracking)',
          '5 High-Converting Written Ad Copies + 5 Static Ad Creatives (Fresh visuals deployed monthly for maximum split-testing)',
          'Custom Lead Capture Dashboard & Integrated Lead Routing Automation',
          'Weekly Campaign Performance Tuning & Strategy Updates',
          'Priority Digital Landlord Management (Hosting, Security & instant updates)',
        ],
        cta: 'Dominate Your Market Now',
        featured: false,
      },
    ],
  },

  guarantee: {
    heading: 'Our Ironclad "Zero-Risk" Guarantee',
    body: "We are so confident in our direct-response conversion engines that we back every build with a simple guarantee: If your new sales system doesn't generate measurable, qualified leads within 60 days of launch, we will work with you for FREE until it does, or refund your build fee in full. No excuses, no fine print.",
  },

  finalCta: {
    heading: 'Ready To Take Control Of Your Business Revenue?',
    body: "We only work with a select number of business clients each month to ensure every build receives maximum attention and explosive results. Don't let your competitors steal another high-value client out from under you.",
    cta: 'Get My Free Custom Mockup',
    steps: [
      'Click the button above and message us on WhatsApp.',
      'Fill out a quick 2-minute questionnaire about your business goals.',
      'We hop on a call to map out a step-by-step strategy to double your lead flow completely free.',
    ],
  },
};

/* ════════════════════════════ PORTFOLIO PAGE ════════════════════════════ */

export const portfolio = {
  hero: {
    badge: 'Portfolio',
    headlineStart: 'Work that',
    headlineHighlight: 'speaks for itself',
    subheadline:
      'Fast DIGITAL SALESMAN, bold ads, and persuasive copy built for real Guyanese small businesses.',
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
  ],
  visitLabel: 'Visit live site',
  finalCta: {
    heading: 'Ready to be our next win?',
    body: "Tell us about your business and we'll build a free mobile-optimized mockup this week.",
    cta: 'Claim Your FREE 24/7 Digital Salesman Mockup',
  },
};

/* ══════════════════════════════ ABOUT PAGE ══════════════════════════════ */

export const about = {
  hero: {
    eyebrow: 'The Story Behind Ace Static Creatives',
    headline:
      'We Didn\'t Start An Agency To Build "Pretty Websites." We Built It To End The Digital Guesswork For Guyanese Business Owners.',
    subheadlineStart:
      'For too long, local businesses have been forced to choose between over-priced, arrogant corporate agencies or cheap freelancers who build digital brochures that bring in zero leads. We built a third option:',
    subheadlineEmphasis: 'fast, enterprise-grade sales engines engineered to scale your revenue.',
  },

  whyFail: {
    heading: 'Why Most Small Business Websites Fail Miserably',
    paragraphs: [
      {
        before:
          'Let\'s be completely transparent. Most web designers in the market care about one thing: making a page look "aesthetic" so they can put it in their portfolio and collect your check. But aesthetics don\'t pay your bills.',
        emphasis: 'Conversions do.',
      },
      {
        before:
          'When you hire a traditional web designer, they hand you a site and expect you to figure out the copywriting, the lead routing, the marketing psychology, and the ad campaign.',
        emphasis: '',
      },
    ],
    traditionalLabel: 'Traditional Web Designer',
    traditionalBody: 'Pretty Layout + "Contact Us" Form + Zero Leads ❌',
    aceLabel: 'Ace Static Creatives',
    aceBody: 'Digital persuasion + Bulletproof Tech + WhatsApp Sales Engine 🚀',
    realizationStart:
      "We realized Guyanese service providers and business owners didn't need more \"digital art.\" They needed an",
    realizationEmphasis: 'automated, 24/7 Digital Salesman',
    realizationEnd: 'that works around the clock to turn cold traffic into pre-qualified leads.',
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
        title: 'Digital Persuasion',
        body: 'Every headline, button, and image on your page is placed with deliberate psychological intent—designed to capture attention and trigger action.',
      },
      {
        number: '3',
        title: 'Frictionless Local Routing',
        body: 'In Guyana, sales happen on WhatsApp. We engineer every system to route pre-qualified leads directly into your phone so you can close deals instantly.',
      },
      {
        number: '4',
        title: 'Shared Risk (The Godfather Commitment)',
        body: 'We do not believe in charging massive setup fees before proving our value. Offers like our $0 Upfront Launch Engine exist because we back our work completely.',
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
          'Whether you are a local courier service, a growing contractor, a spa owner, or a specialized professional service, you deserve enterprise-grade digital systems without corporate bloat or hidden fees. We act as your fractional digital growth team—handling the tech, the copy, and the management so you can focus entirely on running your operations and fulfilling sales.',
        emphasis: '',
      },
    ],
  },

  finalCta: {
    heading: 'Ready To Put A 24/7 Digital Salesman To Work For Your Business?',
    body: "You don't need to take our word for it. Let us prove it to you before you spend a single cent on setup fees.",
    cta: 'Tap Here To Claim Your FREE Custom Digital Salesman Mockup',
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
    headlineStart: 'Put an expert team in',
    headlineHighlight: 'your contacts',
    subheadline:
      "No tickets, no waiting rooms, no tech jargon. Just WhatsApp us and we'll handle the rest.",
  },
  whatsappCard: {
    heading: 'WhatsApp us',
    body: 'The fastest way to get help, request updates, or claim your free mockup.',
    cta: 'Claim Your FREE 24/7 Digital Salesman Mockup',
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
    cta: 'Claim Your FREE 24/7 Digital Salesman Mockup',
  },
};

/* ═══════════════════════════════ HELPERS ═══════════════════════════════ */

/** Compute the discounted first-month price from a "$50,000 GYD/mo" string. */
export function discountedPrice(monthly: string): string {
  const numeric = Number(monthly.replace(/[^0-9]/g, ''));
  const discounted = Math.round(numeric * (1 - PACKAGE_DISCOUNT));
  return `$${discounted.toLocaleString()} GYD/mo`;
}
