import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { render } from "astro:content";
import { profile } from "../data/profile";
import { getPublishedMusings } from "../lib/musings";

export async function GET(context: APIContext) {
  const musings = await getPublishedMusings();
  const site = context.site ?? new URL("https://cristianandfriends.github.io");
  const container = await AstroContainer.create();

  const items = await Promise.all(
    musings.map(async (musing) => {
      const { Content } = await render(musing);
      const content = await container.renderToString(Content);

      return {
        title: musing.data.title,
        pubDate: musing.data.pubDate,
        description: musing.data.description,
        link: `/musings/${musing.id}/`,
        content,
        categories: musing.data.tags,
      };
    }),
  );

  return rss({
    title: `${profile.siteTitle} / musings`,
    description:
      "Essays, musings, ideas, and everything in between by Cristian Gonzales.",
    site,
    items,
    customData: "<language>en-us</language>",
  });
}
