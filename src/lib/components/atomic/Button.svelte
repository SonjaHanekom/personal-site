<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    /** Render an <a> to here; omit for a <button>. */
    href?: string;
    /** <button> type — ignored when `href` is set. */
    type?: "button" | "submit" | "reset";
    tone?: "primary" | "secondary" | "tertiary" | "surface";
    size?: "sm" | "md" | "lg";
    /** Stretch to the container's width. */
    block?: boolean;
    onclick?: (event: MouseEvent) => void;
    [key: string]: unknown;
  }
  let {
    children,
    href,
    type = "button",
    tone = "primary",
    size = "md",
    block = false,
    ...rest
  }: Props = $props();

  const classList = $derived([
    "button raised smush",
    `tone-${tone}`,
    `size-${size}`,
    block && "block",
    rest.class,
  ]);
</script>

{#if href}
  <a {href} {...rest} class={classList}>{@render children()}</a>
{:else}
  <button {type} {...rest} class={classList}>{@render children()}</button>
{/if}

<style>
  .button {
    display: inline-grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: 2px solid var(--color-surface-950);
    border-radius: 0.875rem;
    background: var(--color-surface-50);
    color: var(--color-surface-950);
    font: inherit;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }
  .button.block {
    display: grid;
    inline-size: 100%;
  }
  .button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tone-primary {
    background: var(--color-primary-50);
  }
  .tone-secondary {
    background: var(--color-secondary-50);
  }
  .tone-tertiary {
    background: var(--color-tertiary-50);
  }
  .tone-surface {
    background: var(--color-surface-50);
  }

  .size-sm {
    padding: 0.4rem 0.75rem;
    border-radius: 0.625rem;
    font-size: 0.9375rem;
  }
  .size-md {
    padding: 0.625rem 1.1rem;
  }
  .size-lg {
    padding: 0.875rem 1.5rem;
    font-size: 1.125rem;
  }
</style>
