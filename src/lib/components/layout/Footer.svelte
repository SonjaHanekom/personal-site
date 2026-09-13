<script lang="ts">
  import { profile } from "$lib/content/profile";
  import SocialLinks from "./SocialLinks.svelte";
</script>

<footer class="mx-auto mt-8 w-[min(calc(100%-2rem),var(--container-6xl))] pb-6">
  <div
    class="raised border-surface-950 bg-surface-50 flex flex-wrap items-center justify-between
           gap-4 rounded-2xl border-2 px-5 py-4"
  >
    <p class="font-bold">
      © {new Date().getFullYear()}
      {profile.name}
    </p>

    <SocialLinks />
  </div>
</footer>
