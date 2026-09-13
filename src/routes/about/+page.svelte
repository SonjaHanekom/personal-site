<script lang="ts">
  import { profile } from "$lib/content/profile";
  import SocialLinks from "$lib/components/layout/SocialLinks.svelte";
  import Tag from "$lib/components/atomic/Tag.svelte";

  const skills = [
    "Brand Identity",
    "UI Design",
    "Product Design",
    "Illustration",
    "Design Systems",
  ];
</script>

<svelte:head>
  <title>About — {profile.name}</title>
</svelte:head>

<article class="grid gap-10">
  <section>
    <h1 class="text-3xl">About</h1>
    <p class="prose text-surface-700 mt-4 max-w-prose text-lg">
      {profile.tagline}
    </p>

    <div class="mt-5 flex flex-wrap gap-2">
      {#each skills as skill (skill)}
        <Tag label={skill} tone="secondary" size="md" />
      {/each}
    </div>
  </section>

  <section id="contact" class="scroll-mt-24">
    <h2 class="text-2xl">Get in touch</h2>
    <p class="text-surface-700 mt-2 max-w-prose">
      Have a project in mind, or just want to say hi? Find me here:
    </p>
    <div class="mt-4">
      <SocialLinks />
    </div>
  </section>
</article>
