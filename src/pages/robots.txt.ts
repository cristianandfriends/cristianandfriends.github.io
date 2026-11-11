import type { APIContext } from "astro";

export function GET({ site }: APIContext) {
  const base = site ?? new URL("https://cristianandfriends.github.io");
  const sitemap = new URL("/sitemap-index.xml", base);

  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemap.toString()}\n`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
