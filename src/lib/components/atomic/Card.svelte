<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    meta?: Snippet;
    href?: string;
    img?: string | null;
    imgAlt?: string;
    /** Extra classes for the <img>, e.g. an aspect-ratio utility. */
    imgClass?: string;
    /** Set on the likely LCP candidate so it loads eagerly. */
    imgPriority?: boolean;
    /** Stretch the card to fill its grid/flex cell (equal-height rows). */
    fill?: boolean;
    [key: string]: unknown;
  }
  let {
    children,
    meta,
    href,
    img,
    imgAlt,
    imgClass = "",
    imgPriority = false,
    fill = false,
    ...rest
  }: Props = $props();

  let classList = $derived([
    "block border-2 transition-all rounded-2xl overflow-hidden",
    "bg-surface-50 border-surface-950 text-surface-950",
    href &&
      "hover:translate-x-1 hover:translate-y-1.5 hover:shadow-none focus-visible:translate-x-1 focus-visible:translate-y-1.5 focus-visible:shadow-none",
    "grid",
    fill && "size-full",
    rest.class,
  ]);

  let bWidth = $state();
  let bHeight = $state();
</script>

<div class="relative grid pr-1 pb-1.5 {fill ? 'size-full' : 'size-fit'}">
  {#snippet content()}
    <section class="grid h-full grid-rows-[auto_1fr_auto]">
      {#if img}
        <div class="relative">
          <img
            src={img}
            alt={imgAlt ?? ""}
            class="border-surface-950 w-full border-b-4 object-cover {imgClass}"
            loading={imgPriority ? "eager" : "lazy"}
            fetchpriority={imgPriority ? "high" : undefined}
          />
        </div>
      {/if}
      <div class="px-4 py-3">
        {@render children()}
      </div>
      {#if meta}
        <div class="flex flex-wrap gap-1 px-4 pt-1 pb-3">
          {@render meta()}
        </div>
      {/if}
    </section>
  {/snippet}

  {#if href}
    <a
      {href}
      bind:offsetWidth={bWidth}
      bind:offsetHeight={bHeight}
      {...{ ...rest, class: classList }}
    >
      {@render content()}
    </a>
  {:else}
    <div
      bind:offsetWidth={bWidth}
      bind:offsetHeight={bHeight}
      {...{ ...rest, class: classList }}
    >
      {@render content()}
    </div>
  {/if}

  <div
    style="width: {bWidth}px; height: {bHeight}px;"
    class="bg-surface-950 pointer-events-none absolute top-0 left-0 -z-10 translate-x-1 translate-y-1.5 rounded-2xl"
  ></div>
</div>
