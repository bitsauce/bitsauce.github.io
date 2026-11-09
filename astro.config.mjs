import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://marcusv.io',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
