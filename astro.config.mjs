import { defineConfig } from 'astro/config';
import tailwindcjs from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcjs()]
  }
});
