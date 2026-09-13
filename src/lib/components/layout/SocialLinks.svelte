<script lang="ts">
  import Mail from "@lucide/svelte/icons/mail";
  import { socials, profile } from "$lib/content/profile";

  const visibleSocials = $derived(socials.filter((s) => s.href));
</script>

{#if visibleSocials.length || profile.email}
  <ul class="flex flex-wrap items-center gap-2">
    {#if profile.email}
      <li>
        <a
          href="mailto:{profile.email}"
          class="raised smush border-surface-950 bg-surface-50 flex items-center gap-1.5
                 rounded-xl border-2 px-3 py-2 font-bold"
        >
          <Mail aria-hidden="true" size={18} />
          Email
        </a>
      </li>
    {/if}
    {#each visibleSocials as social (social.name)}
      <li>
        <a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          class="raised smush border-surface-950 bg-surface-50 inline-flex items-center
                 rounded-xl border-2 px-3 py-2 font-bold"
        >
          {social.name}
        </a>
      </li>
    {/each}
  </ul>
{:else}
  <p class="text-surface-600">Contact links coming soon.</p>
{/if}
