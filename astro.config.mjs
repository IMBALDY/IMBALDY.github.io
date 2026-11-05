import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import remarkKexueMath from "./src/lib/remark-kexue-math.mjs";

export default defineConfig({
  site: "https://imbaldy.github.io",
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkMath, remarkKexueMath],
    shikiConfig: {
      theme: "github-light",
    },
  },
});
