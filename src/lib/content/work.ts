export interface WorkMeta {
  title: string;
  summary: string;
  tags: string[];
  year: string;
  /** External link to the live thing (store, site, post) this case study is about. */
  link?: string;
  /** Thumbnail shown on the work grid. This comes from frontmatter (plain
   *  YAML), so it has to be a static path, not a Vite import — drop the
   *  file under `static/work/<slug>/` and point here with a root-relative
   *  path, e.g. "/work/bristol-stationery-crawl/cover.jpg". Omit it and
   *  the card just falls back to text, no layout change. In-body images
   *  inside the case study itself can still use a Vite import (see the
   *  mdsvex image guidance). */
  cover?: string;
  /** Alt text for `cover`. Defaults to the entry's title if omitted. */
  coverAlt?: string;
}

export interface WorkEntry extends WorkMeta {
  slug: string;
}

const modules = import.meta.glob<{ metadata: WorkMeta }>(
  "/src/routes/work/*/+page.svx",
  { eager: true },
);

export const work: WorkEntry[] = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.split("/").at(-2)!;
    return { slug, ...mod.metadata };
  })
  .sort((a, b) => Number(b.year) - Number(a.year));
