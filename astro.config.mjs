// @ts-check

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  output: 'static',
  site: 'https://welcomehome.city',
  compressHTML: true,

  session: {
    driver: {
      entrypoint: 'unstorage/drivers/null',
    },
  },

  fonts: [
    {
      provider: fontProviders.fontshare(),
      name: 'Pilcrow Rounded',
      cssVariable: '--font-pilcrow-rounded',
    },

    {
      provider: fontProviders.fontshare(),
      name: 'Archivo',
      cssVariable: '--font-archivo',
    },

    {
      provider: fontProviders.fontshare(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
    },

    {
      provider: fontProviders.npm(),
      name: 'Metropolis',
      cssVariable: '--font-metropolis-display',
      fallbacks: ['sans-serif'],
      weights: ['700'],
      styles: ['normal'],
      options: {
        package: '@fontsource/metropolis',
        file: 'latin-700.css',
      },
    },

    {
      provider: fontProviders.npm(),
      name: 'Metropolis',
      cssVariable: '--font-metropolis-body',
      fallbacks: ['sans-serif'],
      weights: ['400'],
      styles: ['normal'],
      options: {
        package: '@fontsource/metropolis',
        file: 'latin-400.css',
      },
    },
  ],

  integrations: [sitemap()],
});
