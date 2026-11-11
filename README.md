# cristian's scratchpad

Astro site for Cristian Gonzales. Static Night Lab design with a dot-matrix title, signal plot, and restrained spectrum palette.

## Development

Use Node 22.

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Pages

- `/` Home
- `/about/`
- `/musings/` and `/musings/[slug]/`
- `/resume.pdf`
- `/rss.xml`, `/robots.txt`, `/sitemap-index.xml`

## Content

Musings live in `src/content/musings/`.

```md
---
title: "A musing title"
description: "A short summary for the archive and RSS."
pubDate: 2026-11-02
tags: ["AI", "systems"]
draft: false
---
```

Set `draft: true` to hide a musing from the archive and RSS. The included notes are placeholders. One includes KaTeX math.

### Math

KaTeX runs at build time through `remark-math` and `rehype-katex`.

```md
Inline: $f_\theta(x)$

$$
\mathcal{L}(\theta) = \frac{1}{N}\sum_{i=1}^{N}(y_i - f_\theta(x_i))^2
$$
```

Long equations scroll horizontally on narrow screens.

### Images

```md
![Alt text](/images/example.jpg)
```

Use `public/images/` for static files or relative images for Astro image optimization.

### Mermaid

Mermaid is not enabled. Add `rehype-mermaid` for build-time SVG, or load Mermaid on the client.

## Resume and profile

- Replace `public/resume.pdf` with the current PDF.
- Update Work entries in `src/data/resume.ts`.
- Update email, GitHub, and LinkedIn in `src/data/profile.ts`.

The header and full resume links open the PDF inline. The download button saves it.

## Deploy

1. Create the public repository `cristianandfriends.github.io`.
2. Push this project to it.
3. Open **Settings → Pages → Build and deployment** and choose **GitHub Actions**.
4. Push to `main` or run the deploy workflow manually.

The default origin is `https://cristianandfriends.github.io`. Set the `SITE_URL` repository variable for another origin. The workflow passes it through the build, so canonical URLs, RSS, and the sitemap stay consistent.

### Custom domain

1. Set `SITE_URL`.
2. Add `public/CNAME` with the domain.
3. Configure the DNS records GitHub Pages provides.

### Repository naming

Use `cristianandfriends.github.io` for a root-domain user site. A project repository serves from `/repository-name/` and needs link adjustments.

## Favicon and fonts

The favicon is the Rick Sanchez icon from Icons8, credited at `/attributions/` with a raw copy at `/attributions.txt`. Versioned files:

- `public/favicon-rick-sanchez-48-35bb6309.png`
- `public/apple-touch-icon-rick-sanchez-480-888209cd.png`

Fonts: Doto (SIL OFL) and Perfect DOS VGA 437. License files live in `public/fonts/`.

## Build notes

- No analytics.
- No client-side framework runtime.
- The signal plot respects `prefers-reduced-motion`.
- RSS includes the full rendered musing HTML.
