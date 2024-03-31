import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()]
});


/**
 * Ideas:
 * tags, filters = tags
 * clicking a tag leads to page / opens modal justifying the opinion
 * 
 */