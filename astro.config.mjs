import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  devToolbar: {
    enabled: false
  }
});

/**
 * Ideas:
 * tags, filters = tags
 * clicking a tag leads to page / opens modal justifying the opinion
 * 
 */