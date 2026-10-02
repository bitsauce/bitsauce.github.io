import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bitsauce.github.io',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
