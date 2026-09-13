# sonjahanekom.github.io

Sonja Hanekom's portfolio — SvelteKit 5 + Tailwind CSS v4, statically built and
deployed to GitHub Pages. Content pages (case studies) are authored in
Markdown via [mdsvex](https://mdsvex.pngwn.io/).

Shares its design system (colour tokens, neobrutalist depth utilities, fonts)
with [something-store](https://github.com/SerenMcIntyre/something-store).

The previous Jekyll version of this site lives on the
[`archive/jekyll-version`](../../tree/archive/jekyll-version) branch.

## Running

```shell
npm install
npm run dev
```

## Building

```shell
npm run build
npm run preview
```

`npm run build` produces a fully static site in `build/` — no server
required. Pushing to `main` builds and deploys it to GitHub Pages via
`.github/workflows/deploy.yml`.

## Content

- `src/lib/content/profile.ts` — name, tagline, and social links. **Social
  links are placeholders (empty `href`) — fill them in.**
- `src/routes/work/<slug>/+page.svx` — one Markdown case study per project.
  Add a new folder + `+page.svx` to add a project; it's picked up
  automatically by the `/work` listing.

## Note

This site intentionally opts out of search indexing (`robots.txt` +
`<meta name="robots" content="noindex">`) — it's meant to be shared by link,
not crawled.
