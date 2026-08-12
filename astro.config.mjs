import { defineConfig } from "astro/config";
import { aeoAstroIntegration } from "aeo.js/astro";

export default defineConfig({
  image: {
    domains: [],
  },
  integrations: [
    aeoAstroIntegration({
      title: "Matheus Costa - UX/UI Designer e Desenvolvedor Front-end",
      description:
        "UX/UI Designer e Desenvolvedor Front-end em São José do Rio Preto/SP. Sites, landing pages e e-commerces com estratégia, estética e clareza.",
      url: "https://matheuscostadesign.github.io",
      generators: {
        robotsTxt: true,
        llmsTxt: true,
        llmsFullTxt: true,
        rawMarkdown: true,
        sitemap: true,
        aiIndex: true,
        schema: true,
      },
      schema: {
        enabled: true,
        organization: {
          name: "Matheus Costa",
          url: "https://matheuscostadesign.github.io",
        },
        defaultType: "WebPage",
      },
      og: {
        enabled: true,
        image: "https://matheuscostadesign.github.io/assets/ogimage.jpg",
      },
      widget: {
        enabled: true,
        position: "bottom-right",
      },
    }),
  ],
});
