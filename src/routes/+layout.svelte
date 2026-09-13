<script lang="ts">
  import "../app.css";
  import type { Snippet } from "svelte";
  import Nav from "$lib/components/layout/Nav.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";

  interface Props {
    children: Snippet;
  }
  let { children }: Props = $props();
</script>

<Nav />

<main class="mx-auto w-[min(calc(100%-2rem),var(--container-6xl))] py-10">
  {@render children()}
</main>

<Footer />
