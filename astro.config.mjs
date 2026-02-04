import { defineConfig } from "astro/config";
import react from "@astrojs/react";
// import sitemap from "@astrojs/sitemap"; // Temporarily disabled due to build error
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://matheuscostadesign.github.io",
  integrations: [react(), tailwind()], // sitemap() temporarily removed
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
