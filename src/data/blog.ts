/**
 * Local blog content per the Local Authority Framework SOP:
 * - 500–800 words, plain English, short paragraphs
 * - Solve real local problems; mention Georgetown landmarks / weather
 * - Every post links to the relevant money page with descriptive anchor text
 * - External links get rel="nofollow"
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  author: string;
  /** money page this post links to */
  relatedService: { href: string; anchor: string };
  /** paragraphs; strings starting with "## " render as h2 */
  body: string[];
  /** external links cited in the post (rendered nofollow in the CTA/links block) */
  externalLinks: { label: string; href: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-georgetown-customers-cant-find-your-business-on-google',
    title:
      "Why Georgetown Customers Can't Find Your Business on Google (And the 3 Fixes That Work)",
    description:
      'A plain-English guide for Guyanese business owners: the three reasons your business is invisible on Google Maps in Georgetown, and how to fix each one.',
    date: '2026-09-01',
    author: 'Ace Static Creatives',
    relatedService: {
      href: '/services/google-business-profile',
      anchor: 'our Google Business Profile setup in Georgetown',
    },
    body: [
      'Picture this. A customer in Kitty needs an electrician before dark. They pull out their phone, open Google, and type "electrician near me." Three businesses show up on the map with photos and reviews. Yours is not one of them.',
      'That customer did not choose your competitor because they are better. They chose them because they were visible. In Georgetown, visibility is the whole game.',
      'Here are the three reasons your business stays invisible, and the fixes that actually work.',
      '## 1. Your Google Business Profile is empty or wrong',
      'Most Guyanese businesses either have no Google Business Profile at all, or one that was created years ago with a wrong address, no hours, and a blurry logo. Google treats an incomplete profile like an abandoned shopfront.',
      'The fix: claim your profile and fill every single field. Correct name, address and phone number that match your website exactly. Real opening hours. Every service you offer, written the way locals search for it. Then replace stock photos with real pictures of your team, your van, and your actual finished work. Google detects stock photos and quietly suppresses them.',
      '## 2. You have zero reviews (or worse, unanswered bad ones)',
      'When a local compares two plumbers on the map, they look at reviews first. Zero reviews reads as "nobody trusts this business." One angry unanswered review reads as "this business does not care."',
      'The fix: run a ten-review sprint. Message your past happy clients individually on WhatsApp with your direct review link and a simple ask. Ten real five-star reviews in your first week changes everything. And answer every review, good and bad, within a day. It shows future customers you show up.',
      '## 3. Your website says nothing Google can rank',
      'A homepage that says "Welcome to our world of excellence" tells Google nothing. Google ranks pages that match what people actually type. "Roof repair Georgetown" ranks. "Excellence" does not.',
      'The fix: build one dedicated page per service, titled with the exact local phrase people search — like "Emergency Roof Repair in Georgetown — Same Day Service, No Hidden Fees." Then write short, helpful articles about real local problems, like preparing your shop for the rainy season that floods sections of Regent Road every year. Link those articles to your service pages. That is how Google learns you are the local expert.',
      '## What "found on Google" actually looks like for your business',
      'It is not abstract. It is a customer in Stabroek searching "air conditioning repair Georgetown" at 9pm and finding your number before your competitor\'s. It is a shop owner on Vlissengen Road checking "best catering near me" and seeing your profile with twelve fresh reviews. Those are real jobs, from real people, in your own city — and every single one of them is currently going to whoever shows up first.',
      '## The honest truth about timing',
      'None of this works overnight. Most Georgetown businesses start seeing movement in sixty to ninety days. Anyone promising page one in a week is selling you something broken.',
      'But the businesses that start today are the ones locals find next quarter. The ones that wait are the ones customers scroll past forever.',
      'If you want this handled for you — profile, reviews, pages, articles — see our Google Business Profile setup in Georgetown or message us on WhatsApp. We will tell you honestly what your business needs, in plain English.',
    ],
    externalLinks: [
      { label: 'Google Business Profile Help', href: 'https://support.google.com/business/answer/3038177' },
    ],
  },
  {
    slug: 'how-to-prepare-your-georgetown-business-website-for-rainy-season',
    title:
      "How to Prepare Your Georgetown Business Website for the Rainy Season (Before the Floods Hit)",
    description:
      "Guyana's rainy season changes what locals search for. A checklist for Georgetown business owners to update their website and Google listing before the floods.",
    date: '2026-09-06',
    author: 'Ace Static Creatives',
    relatedService: {
      href: '/services/local-seo',
      anchor: 'our local SEO service in Georgetown',
    },
    body: [
      'Every year the rains come, and every year Georgetown search behaviour shifts overnight. People stop searching "patio cleaning" and start searching "emergency leak repair," "waterproofing," "same-day gutter cleaning," and "generator servicing near me."',
      'If your website and Google listing still describe your dry-season services, you are invisible for the exact searches that spike during the rainy months. Here is your pre-rain checklist.',
      '## 1. Add your rainy-season services as their own pages',
      'Do not bury "leak repair" in a paragraph on your homepage. Give it a dedicated page with a headline that matches the search: "Emergency Roof Leak Repair in Georgetown — Same Day Response, No Hidden Fees." Include your WhatsApp number above the fold, because nobody emails during a flood.',
      '## 2. Update your Google Business Profile hours and services',
      'If you offer extended hours during storm weeks, say so on your profile. Add the seasonal services to your service list. Post one Google update per week during the season with a real photo of your crew at work. Profiles that post regularly get more map clicks.',
      '## 3. Make sure your site loads on wet-day mobile data',
      'During heavy rain, mobile networks in Georgetown slow down and people browse on patchy signal. A heavy WordPress site with ten plugins will spin forever. A lightweight static page paints in under a second even on two bars. If your site takes more than three seconds to load today, that is customers walking to your competitor in the rain.',
      '## 4. Publish one helpful local article before the season starts',
      'Something like "Five Things Every Georgetown Shop Owner Should Check Before the First Heavy Rain." Mention real areas — Kitty, Bourda, Campbellville, Ruimveldt. Locals share articles that feel written for them, and Google reads those local references as a strong signal that you actually serve this city.',
      '## 5. Set up WhatsApp lead routing now, not mid-storm',
      'When the rains hit, response speed decides who gets the job. Route every website enquiry straight to a WhatsApp that a real human answers within the hour. The business that replies first wins the job, every single time.',
      'Contact forms are a dead end during an emergency. A customer with water coming through their ceiling in Subryanville is not filling out a three-field form and waiting two days for an email reply. They are messaging whoever answers first. Make sure that is you.',
      '## 6. Prepare for the power and network hiccups that come with the rain',
      'Heavy rain in Georgetown means blackouts, patchy signal, and people refreshing pages over and over. Heavy websites punish everyone in that moment. Keep your pages lightweight: compressed images, no auto-playing videos, no chat widgets that load eight scripts before the page is even readable. The site that loads first on a bad connection gets the call.',
      '## Start before the first drop',
      'The businesses that win the rainy season prepare in the dry one. Updating pages, profiles and articles takes days, not weeks, but only if you start now.',
      'Want the whole checklist done for you? See our local SEO service in Georgetown, or WhatsApp us and we will audit your current setup for free.',
    ],
    externalLinks: [
      { label: 'Guyana Hydrometeorological Service', href: 'https://hydromet.gov.gy/' },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
