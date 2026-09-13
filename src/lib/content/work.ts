export interface WorkMeta {
  title: string;
  summary: string;
  tags: string[];
  year: string;
  /** External link to the live thing (store, site, post) this case study is about. */
  link?: string;
  /** Set on unfinished/placeholder entries so the grid can grey them out. */
  comingSoon?: boolean;
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
