import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const site = process.env.SITE_URL ?? "https://cristianandfriends.github.io";

export default defineConfig({
  site,
  trailingSlash: "always",
  integrations: [sitemap()],
  markdown: {
    smartypants: false,
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { throwOnError: false }]],
    shikiConfig: {
      theme: "night-owl",
      wrap: true,
    },
  },
});
