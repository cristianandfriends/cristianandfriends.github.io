# cristian's scratchpad

A static personal site for Cristian Gonzales, built with Astro. The visual direction is **Night Lab**: dot-matrix name, scientific signal plot, a restrained spectrum palette, and a lab-notebook layout.

## Local development

Use Node 22 if possible. The site builds on Node 20.18, but Astro's editor tooling prefers a current Node release.

```sh
npm install
npm run dev
```

Build the production output:

```sh
npm run build
npm run preview
```

## Pages

- `/` Home, musings, selected work, resume PDF
- `/about/` About page
- `/musings/` Musings archive
- `/musings/[slug]/` Individual musings
- `/resume.pdf` Resume PDF, opened inline by the header and full resume links
- `/rss.xml` RSS feed with full musing content
- `/robots.txt` and `/sitemap-index.xml`

## Content

Musings are Markdown files in `src/content/musings/`.

```md
---
title: "A musing title"
description: "A short summary for the archive and RSS."
pubDate: 2026-11-02
tags: ["AI", "systems"]
draft: false
---
```

Set `draft: true` to keep a musing out of the archive and the RSS feed.

The three included musings are **placeholder lorem ipsum**. One of them demonstrates inline and display math. Replace them with real writing before publishing.

### Math

KaTeX is enabled with `remark-math` and `rehype-katex`. Use standard Markdown math syntax:

```md
Inline math: $f_\theta(x)$

$$
\mathcal{L}(\theta) = \frac{1}{N}\sum_{i=1}^{N}(y_i - f_\theta(x_i))^2
$$
```

Equations render at build time into HTML and CSS. No client-side JavaScript is required. Long display equations scroll horizontally on narrow screens.

### Images

Standard Markdown images work:

```md
![Alt text](/images/example.jpg)
```

Put files in `public/images/` for the simplest path, or reference relative images from a musing for Astro's image optimization pipeline.

### Mermaid

Mermaid is not enabled by default. It can be added later in two ways:

- **Build-time SVG** with `rehype-mermaid`, which needs a browser during the build.
- **Client-side Mermaid**, which is simpler but adds JavaScript to musing pages.

The build-time option fits the current static, no-client-JS approach better, but it adds a Playwright dependency to CI.

## Resume and profile

- Replace `public/resume.pdf` with the current PDF.
- Update the selected Work entries in `src/data/resume.ts`.
- Update email, GitHub, and LinkedIn in `src/data/profile.ts`.
- The header and full resume links open the PDF in the browser. The Download resume button uses the `download` attribute.

## Deployment

The included workflow deploys to GitHub Pages on pushes to `main`.

1. Create a repository named `cristianandfriends.github.io` under the account that will host the site.
2. Push this project to that repository.
3. In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
4. Push to `main` or run the deploy workflow manually.

The default site URL is `https://cristianandfriends.github.io`. To use another URL, create a repository variable named `SITE_URL` with the final origin, for example:

```text
https://example.com
```

The workflow reads `SITE_URL` during the build, so canonical URLs, Open Graph URLs, RSS links, and the sitemap all use the same origin.

### Custom domain

If you use a custom domain:

1. Set the `SITE_URL` repository variable.
2. Add a `public/CNAME` file containing the domain.
3. Configure the DNS records GitHub Pages provides.

### Repository naming

This build assumes a **user site** at the root of the domain. If you use a project repository such as `personal-site`, the site will be served from `/personal-site/` and the internal links in this project will need adjusting. The simplest deployment is the `cristianandfriends.github.io` repository.

## Favicon

The favicon is the Rick Sanchez icon from Icons8, credited in the site footer. The files are versioned by content hash:

- `public/favicon-rick-sanchez-48-35bb6309.png`
- `public/apple-touch-icon-rick-sanchez-480-888209cd.png`

If the icon changes, replace the files, generate new hashes, and update the `<link>` tags in `src/layouts/BaseLayout.astro` and `src/pages/attributions.astro`. The footer links to the attribution page at `/attributions/`, with a raw copy at `/attributions.txt`.

## Fonts

- **Doto** by the Doto Project Authors, SIL Open Font License. License: `public/fonts/OFL-Doto.txt`.
- **Perfect DOS VGA 437** by Zeh Fernando, free for personal use. Source: CP437/PerfectDOSVGA437.

## Build notes

- No analytics or tracking scripts.
- No client-side framework runtime. Astro renders static HTML.
- The signal plot uses a single page-load draw animation and respects `prefers-reduced-motion`.
- The RSS feed contains the full rendered musing HTML.
