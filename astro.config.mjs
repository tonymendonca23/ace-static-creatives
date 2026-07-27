import { defineConfig } from 'astro/config';
import tailwindcjs from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://docs.astro.build/en/guides/deploy/
// https://docs.astro.build/en/guides/integrations-guide/sitemap/
export default defineConfig({
  site: 'https://ace-static-creatives.com',

  integrations: [
    sitemap({
      // Exclude non-content routes from the sitemap.
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/preview') &&
        !page.includes('/admin'),

      // Customize per-route priority and changefreq.
      // Pages not listed here get sensible defaults from the integration.
      // The homepage gets the highest priority.
      //
      // `lastmod` uses the build timestamp for static pages. Content-collection
      // pages automatically get their frontmatter `lastmod` if present.
      serialize(item) {
        const now = new Date().toISOString();
        const lastmod = item.lastmod || now;

        if (item.url === 'https://ace-static-creatives.com/') {
          return { ...item, changefreq: 'weekly', priority: 1.0, lastmod };
        }
        if (item.url.includes('/services')) {
          return { ...item, changefreq: 'weekly', priority: 0.9, lastmod };
        }
        if (item.url.includes('/portfolio')) {
          return { ...item, changefreq: 'monthly', priority: 0.8, lastmod };
        }
        if (item.url.includes('/about') || item.url.includes('/contact')) {
          return { ...item, changefreq: 'monthly', priority: 0.7, lastmod };
        }
        return { ...item, changefreq: 'monthly', priority: 0.5, lastmod };
      },
    }),
  ],

  vite: {
    plugins: [tailwindcjs()],
  },

  adapter: cloudflare(),
});