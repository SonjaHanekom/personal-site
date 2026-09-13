<script lang="ts">
  import ArrowLeft from "@lucide/svelte/icons/arrow-left";
  import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
  import Tag from "$lib/components/atomic/Tag.svelte";
  import { tagTone } from "$lib/content/tags";

  interface Props {
    title: string;
    summary: string;
    tags: string[];
    year: string;
    link?: string;
  }
  let { title, summary, tags, year, link }: Props = $props();
</script>

<header class="mb-8">
  <a
    href="/work"
    class="text-surface-700 hover:text-surface-950 mb-4 inline-flex items-center gap-1 font-bold"
  >
    <ArrowLeft aria-hidden="true" size={18} />
    Back to work
  </a>

  <h1 class="text-3xl">{title}</h1>
  <p class="text-surface-700 mt-2 text-lg">{summary}</p>

  <div class="mt-4 flex flex-wrap items-center gap-2">
    <Tag label={year} tone="secondary" size="md" />
    {#each tags as tag (tag)}
      <Tag label={tag} tone={tagTone(tag)} size="md" />
    {/each}
    {#if link}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        class="raised smush border-surface-950 bg-surface-50 ml-auto inline-flex items-center
               gap-1 rounded-xl border-2 px-3 py-1.5 font-bold"
      >
        Visit
        <ArrowUpRight aria-hidden="true" size={16} />
      </a>
    {/if}
  </div>
</header>
