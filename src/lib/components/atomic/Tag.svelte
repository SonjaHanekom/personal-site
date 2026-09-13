<script lang="ts">
  interface Props {
    label: string;
    tone?: "primary" | "secondary" | "tertiary" | "surface";
    size?: "sm" | "md";
    [key: string]: unknown;
  }
  let { label, tone = "surface", size = "sm", ...rest }: Props = $props();

  const classList = $derived([
    "inline-block rounded-2xl border-2 border-surface-950 font-bold",
    `tone-${tone}`,
    size === "sm" && "px-2 py-0.5 text-xs",
    size === "md" && "px-2.5 py-1 text-sm",
    rest.class,
  ]);
</script>

<span class={classList}>{label}</span>

<style>
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
</style>
