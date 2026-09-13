import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: [".svx"],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".svx"],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  compilerOptions: {
    // Force runes mode project-wide. Can be removed in Svelte 6.
    runes: ({ filename }) =>
      filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
  },
  kit: {
    // Fully static site — every route is prerendered, no server at runtime.
    // Pages served straight from the built files by GitHub Pages.
    adapter: adapter({
      pages: "build",
      assets: "build",
      // GitHub Pages serves this for any unmatched path, so it doubles as
      // the site's 404 (SvelteKit's client router then renders +error.svelte).
      fallback: "404.html",
      precompress: false,
      strict: true,
    }),
  },
};

export default config;
