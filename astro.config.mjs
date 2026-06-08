// @ts-check

import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  output: "static",
  site: "https://welcomehome.city",

  session: {
    driver: {
      entrypoint: "unstorage/drivers/null",
    },
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Zodiak",
      cssVariable: "--font-zodiak",
      fallbacks: ["serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Zodiak-Variable.woff2"],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Plus Jakarta Sans",
      cssVariable: "--font-plus-jakarta-sans",
      fallbacks: ["sans-serif", "system-ui"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/PlusJakartaSans-Variable.woff2"],
            weight: "200 800",
            style: "normal",
          },
        ],
      },
    },
  ],

  integrations: [sitemap()],
});

