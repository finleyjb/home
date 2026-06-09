// @ts-check

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  output: 'static',
  site: 'https://welcomehome.city',

  session: {
    driver: {
      entrypoint: 'unstorage/drivers/null',
    },
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Bespoke Slab',
      cssVariable: '--font-bespoke-slab',
      fallbacks: ['serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/BespokeSlab-Variable.woff2'],
            weight: '300 800',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/BespokeSlab-VariableItalic.woff2'],
            weight: '300 800',
            style: 'italic',
          },
        ],
      },
    },

    {
      provider: fontProviders.npm(),
      name: 'Metropolis',
      cssVariable: '--font-metropolis',
      fallbacks: ['sans-serif'],
      weights: ['700'],
      styles: ['normal'],
      options: {
        package: '@typehaus/metropolis',
        file: '700.css',
      },
    },
  ],

  integrations: [sitemap()],
});
