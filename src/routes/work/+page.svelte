<script lang="ts">
  import { work } from "$lib/content/work";
  import WorkCard from "$lib/components/work/WorkCard.svelte";
</script>

<svelte:head>
  <title>Work — Sonja Hanekom</title>
</svelte:head>

<h1 class="text-3xl">Work</h1>
<p class="text-surface-700 mt-2 max-w-prose text-lg">
  A few of the things I've designed — brands, interfaces, and the products that
  came out the other side.
</p>

<div
  class="mt-8 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
>
  {#each work as entry, i (entry.slug)}
    <WorkCard {entry} priority={i === 0} />
  {/each}

  <div
    class="pressed border-surface-300 text-surface-500 grid size-full place-items-center
           rounded-2xl border-2 border-dashed p-6 text-center"
  >
    <p class="font-bold">More case studies coming soon</p>
  </div>
</div>
