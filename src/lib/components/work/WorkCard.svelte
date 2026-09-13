<script lang="ts">
  import type { WorkEntry } from "$lib/content/work";
  import Card from "$lib/components/atomic/Card.svelte";
  import Tag from "$lib/components/atomic/Tag.svelte";

  interface Props {
    entry: WorkEntry;
  }
  let { entry }: Props = $props();
</script>

<Card fill href="/work/{entry.slug}">
  <p class="text-surface-600 text-sm font-bold">{entry.year}</p>
  <h2 class="text-xl">{entry.title}</h2>
  <p class="text-surface-700 mt-1">{entry.summary}</p>

  {#snippet meta()}
    {#each entry.tags as tag (tag)}
      <Tag label={tag} tone="tertiary" />
    {/each}
  {/snippet}
</Card>
