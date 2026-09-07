/**
 * Service categories for the money pages (/services/[category]).
 * Each category is a dedicated, conversion-first landing page targeting a
 * high-intent local keyword: "[Service] in Georgetown, Guyana".
 *
 * Follows the Local Authority Framework SOP: specific money pages beat one
 * generic services page. The homepage and blog link here with descriptive
 * anchor text.
 */

export interface ServiceCategory {
  id: string;
  /** H1 keyword phrase: [Service] in Georgetown, Guyana */
  keyword: string;
  /** Hand-written meta description, 150–160 chars, mentions Georgetown, Guyana */
  metaDescription: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  /** What the client gets — plain English, benefit-first */
  bullets: string[];
  /** Local proof / trust line */
  trustLine: string;
  /** Starting price shown in GYD */
  priceLabel: string;
  priceNote: string;
  faq: { question: string; answer: string }[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'web-design',
    keyword: 'Web Design in Georgetown, Guyana',
    metaDescription:
      'Fast static web design in Georgetown, Guyana. Custom 5-page websites, WhatsApp lead routing and managed hosting from $0 setup. Claim your free mockup today.',
    eyebrow: 'Static Web Design',
    headline: 'Fast Static Web Design in Georgetown, Guyana — Built to Bring You WhatsApp Leads',
    subheadline:
      'A custom 5-page website that loads instantly on GTT and DigiCell data, never breaks, and routes every interested visitor straight to your WhatsApp. No hidden fees. No surprise bills.',
    bullets: [
      'Custom 5-page static website: Home, Services, About, Contact, Gallery',
      'Mobile-first build tuned for Guyana\'s mobile networks — instant first paint',
      'WhatsApp lead routing on every page so customers reach you in one tap',
      'Fully managed hosting & security included in your monthly plan',
      'Up to 8–15 website updates per month — just text us the change',
    ],
    trustLine: 'Built and managed by a team based in Georgetown, Guyana. You never touch the tech.',
    priceLabel: 'From $0 GYD setup + $20,000 GYD/mo',
    priceNote: 'The Digital Salesman plan starts at $0 upfront on a 12-month agreement.',
    faq: [
      {
        question: 'How fast will my website load in Guyana?',
        answer:
          'Static pages are pre-built, so the server hands the visitor a ready-made page instantly. On typical Georgetown mobile data our sites paint in under a second — no databases, no plugins slowing anything down.',
      },
      {
        question: 'Can I update prices or photos myself later?',
        answer:
          'You don\'t have to. Send us a WhatsApp message with the change and we handle it. Updates are included in your monthly plan (8 on the Digital Salesman, 15 on the Local Authority).',
      },
    ],
  },
  {
    id: 'local-seo',
    keyword: 'Local SEO in Georgetown, Guyana',
    metaDescription:
      'Local SEO in Georgetown, Guyana that ranks you for "your service Georgetown" searches. Weekly local blogs and money pages. 90-day guarantee included.',
    eyebrow: 'Local SEO',
    headline: 'Local SEO in Georgetown, Guyana — Rank for the Searches That Make Your Phone Ring',
    subheadline:
      'We ignore national vanity keywords that bring traffic that can\'t buy. We target "your service Georgetown" — the exact searches typed by people ready to book today.',
    bullets: [
      'Keyword targeting for high-intent local searches like "your service Georgetown"',
      'Dedicated money pages that match exactly what buyers type when ready to hire',
      '1 new local blog post every week on the Local Authority plan (delivered every Monday)',
      'Smart internal linking so Google understands and ranks your whole site faster',
      'Real local backlinks from respected Guyanese businesses and verified directories — never spam',
    ],
    trustLine: 'Plain English, no jargon: we make you the first name locals see when they\'re ready to buy.',
    priceLabel: 'Included in plans from $20,000 GYD/mo',
    priceNote: 'Local SEO foundation is included in every plan; continuous climbing on the Local Authority.',
    faq: [
      {
        question: 'How long does local SEO take to show results?',
        answer:
          'Most Georgetown businesses start seeing movement in 60–90 days. That\'s why we back it: if you\'re not on Google for your core local services within 90 days of going live, we work free until you are.',
      },
      {
        question: 'Do blog posts really help a small business?',
        answer:
          'Yes — when they solve local problems. A short guide like "how to prepare your shop for the Georgetown rainy season" builds trust with locals and tells Google you\'re the go-to expert in your city.',
      },
    ],
  },
  {
    id: 'google-business-profile',
    keyword: 'Google Business Profile Setup in Georgetown, Guyana',
    metaDescription:
      'Google Business Profile setup in Georgetown, Guyana: profile cleanup, real photos and a 10-review sprint to get your business into the Google Maps local pack.',
    eyebrow: 'Google Business Profile',
    headline: 'Google Business Profile Setup in Georgetown, Guyana — Get Into the Map Pack',
    subheadline:
      'When people need help fast, they search Google Maps first. If your listing is empty, outdated, or missing reviews, those customers go to your competitor. We fix that first — before anything else.',
    bullets: [
      'Full profile cleanup: name, address, phone and hours matching exactly across the web',
      'Stock photos removed and replaced with real pictures of your team and actual work',
      'A 10-review sprint: we help you collect your first 10 real five-star reviews from past clients',
      'Every field filled: correct categories, all services, and a description focused on local terms',
      'Active monthly management on the Local Authority plan so your listing keeps climbing',
    ],
    trustLine: 'The Map Pack is where locals buy. We get you in it — and keep you there.',
    priceLabel: 'Included in plans from $20,000 GYD/mo',
    priceNote: 'Setup & optimization on every plan; active monthly management on the Local Authority.',
    faq: [
      {
        question: 'Why does my Google Business Profile matter more than my website?',
        answer:
          'The website is the closing tool, but the Google Business Profile is the discovery tool. Most locals tap the Map Pack before they ever visit a website — so we optimize your profile before we build anything else.',
      },
      {
        question: 'I have zero reviews. Can you still help?',
        answer:
          'That\'s exactly who this is for. We generate your direct review link and give you a simple WhatsApp script to message past clients. Most businesses collect their first 10 five-star reviews within the first week.',
      },
    ],
  },
  {
    id: 'website-maintenance',
    keyword: 'Website Maintenance in Georgetown, Guyana',
    metaDescription:
      'Website maintenance in Georgetown, Guyana with no hourly bills. Managed hosting, security and up to 15 updates per month over WhatsApp. From $20,000 GYD/mo.',
    eyebrow: 'Website Maintenance',
    headline: 'Website Maintenance in Georgetown, Guyana — No More Ghosting Developers',
    subheadline:
      'Tired of single ticks and surprise hourly bills just to change a price? We become your permanent digital mechanics: hosting, security and updates handled every month, over WhatsApp.',
    bullets: [
      'Fully managed hosting & security — your site stays online and protected',
      'Up to 8 website updates per month on the Digital Salesman, 15 on the Local Authority',
      'Photo swaps, price changes, new testimonials, hours edits — anything under 15 minutes',
      'One WhatsApp message and it\'s done. No hourly bills. No begging for replies.',
      'Static architecture means no broken plugins after updates — there are no plugins',
    ],
    trustLine: 'We stay by your side as your permanent digital partners in Guyana. That\'s the whole model.',
    priceLabel: 'From $20,000 GYD/mo',
    priceNote: 'Maintenance is bundled into both plans — you never pay per fix.',
    faq: [
      {
        question: 'What counts as an update, exactly?',
        answer:
          'Swapping a photo, changing a price, adding a testimonial, updating business hours, editing text, or adding a gallery image — any task under 15 minutes. New pages, full redesigns or complex features are quoted separately as project add-ons, always upfront.',
      },
      {
        question: 'What happens if my current developer disappears mid-project?',
        answer:
          'We can take over most static and simple sites. Message us on WhatsApp with what you have and we\'ll tell you honestly whether we can rescue it or recommend a clean rebuild.',
      },
    ],
  },
];

export function getCategory(id: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.id === id);
}
