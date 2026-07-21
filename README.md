# Ace Static Creatives

A high-performance, multi-page agency website for Ace Static Creatives — built with Astro.js and Tailwind CSS. Pure static output, zero hydration overhead, and optimized for local mobile networks in Guyana.

## 🎨 Design System

- **Base Background:** `#293681` Deep Navy
- **Primary Accent / CTAs:** `#4274D9` Royal Blue
- **Secondary Accent / Borders:** `#95CCDD` Soft Ice Blue
- **Highlight Text / Surface Accent:** `#D0E7E6` Mint Ice

## 🚀 Project Structure

```text
/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── WhatsAppCta.astro
│   │   └── Marquee.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/              # Multi-page routes
│   │   ├── index.astro
│   │   ├── services.astro
│   │   ├── portfolio.astro
│   │   ├── about.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css
└── package.json
```

## 🧞 Commands

Run these from the project root:

| Command             | Action                                      |
| :------------------ | :------------------------------------------ |
| `npm install`       | Installs dependencies                       |
| `npm run dev`       | Starts local dev server at `localhost:4321` |
| `npm run build`     | Builds production site to `./dist/`         |
| `npm run preview`   | Previews the built site locally             |

## 📱 WhatsApp Number

Update the default WhatsApp link in `src/components/WhatsAppCta.astro` before launch.
