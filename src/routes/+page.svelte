<script lang="ts">
  import { profile } from "$lib/content/profile";
  import { work } from "$lib/content/work";
  import Button from "$lib/components/atomic/Button.svelte";
  import WorkCard from "$lib/components/work/WorkCard.svelte";

  const featured = $derived(work.slice(0, 3));
</script>

<svelte:head>
  <title>{profile.name} — {profile.role}</title>
</svelte:head>

<section class="grid gap-6 py-8 text-center">
  <p class="text-primary-600 mx-auto font-bold">{profile.role}</p>
  <h1 class="text-4xl text-balance sm:text-5xl">{profile.name}</h1>
  <p class="text-surface-700 mx-auto max-w-prose text-lg text-balance">
    {profile.tagline}
  </p>

  <div class="mx-auto flex flex-wrap justify-center gap-3">
    <Button href="/work" tone="primary" size="lg">See my work</Button>
    <Button href="/about#contact" tone="surface" size="lg">Get in touch</Button>
  </div>
</section>

{#if featured.length}
  <section class="mt-10">
    <h2 class="text-2xl">Recent work</h2>
    <div
      class="mt-4 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {#each featured as entry (entry.slug)}
        <WorkCard {entry} />
      {/each}
    </div>
  </section>
{/if}
