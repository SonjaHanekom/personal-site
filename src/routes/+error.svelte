<script lang="ts">
  import { page } from "$app/state";
  import Button from "$lib/components/atomic/Button.svelte";
</script>

<svelte:head>
  <title>{page.status} — Sonja Hanekom</title>
</svelte:head>

<section class="grid justify-items-center gap-4 py-16 text-center">
  <h1 class="text-4xl">{page.status}</h1>
  <p class="text-surface-700 max-w-prose text-lg">
    {page.error?.message ?? "That page doesn't exist."}
  </p>
  <Button href="/" tone="primary">Back home</Button>
</section>
