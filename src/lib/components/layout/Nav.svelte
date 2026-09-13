<script lang="ts">
  import { page } from "$app/state";

  const links = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
  ];

  const isActive = (href: string) =>
    href === "/"
      ? page.url.pathname === href
      : page.url.pathname.startsWith(href);
</script>

<nav
  class="border-surface-950 bg-surface-50 sticky top-2 z-50 mx-auto
         flex w-[min(calc(100%-2rem),var(--container-6xl))] flex-wrap items-center justify-between gap-3
         rounded-2xl border-2 px-4 py-2.5"
>
  <a href="/" class="wordmark shrink-0" aria-label="Sonja Hanekom — home">
    Sonja Hanekom
  </a>

  <ul class="flex flex-wrap items-center gap-2">
    {#each links as link (link.href)}
      <li class="shadow-offset flex size-fit rounded-xl pr-1 pb-1.5">
        <a
          href={link.href}
          class="face border-surface-950 bg-surface-50 z-10 block rounded-xl border-2 px-3 py-2 font-bold {isActive(
            link.href,
          )
            ? 'bg-primary-50!'
            : ''}"
        >
          {link.name}
        </a>
      </li>
    {/each}
    <li>
      <a
        href="/about#contact"
        class="raised smush border-surface-950 bg-secondary-50 text-surface-950 inline-block
               rounded-xl border-2 px-3 py-2 font-bold"
      >
        Say hi
      </a>
    </li>
  </ul>
</nav>

<style>
  .wordmark {
    font-family: "Nerko One", cursive;
    font-size: 1.5rem;
    color: var(--color-surface-950);
    text-decoration: none;
  }

  .face {
    text-decoration: none;
    transition: translate 0.12s ease;
  }
  li:hover .face,
  li:active .face,
  li:has(:focus-visible) .face {
    translate: 3px 3px;
  }
  @media (prefers-reduced-motion: reduce) {
    .face {
      transition: none;
    }
  }
</style>
