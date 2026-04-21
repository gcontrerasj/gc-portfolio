import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gcontrerasj.github.io',
  base: '/gc-portfolio',
  integrations: [tailwind()],
  output: 'static',
});
