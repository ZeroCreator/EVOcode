import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://evoxide.com',
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
