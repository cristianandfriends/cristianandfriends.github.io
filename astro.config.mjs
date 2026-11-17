import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeMermaid from "rehype-mermaid";

const site = process.env.SITE_URL ?? "https://cristianandfriends.github.io";

export default defineConfig({
  site,
  trailingSlash: "always",
  integrations: [sitemap()],
  markdown: {
    smartypants: false,
    syntaxHighlight: { type: "shiki", excludeLangs: ["mermaid"] },
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [rehypeKatex, { throwOnError: false }],
      [rehypeMermaid, { strategy: "inline-svg", mermaidConfig: { theme: "dark" } }],
    ],
    shikiConfig: {
      theme: "night-owl",
      wrap: true,
    },
  },
});
