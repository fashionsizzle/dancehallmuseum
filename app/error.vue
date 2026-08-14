<script setup lang="ts">
const props = defineProps<{
  error: { statusCode: number; statusMessage?: string };
}>();

const query = ref("");

useSeoMeta({
  title: "Page Not Found — Dancehall Museum",
  description: "The page you're looking for isn't in the archive.",
});

function handleClear() {
  clearError({ redirect: "/" });
}
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-noir px-6 text-center text-paper" data-theme="dark">
    <p class="label mb-6 inline-flex items-center gap-2 text-paper/60">
      <RastaMark />
      {{ error.statusCode }}
    </p>
    <h1 class="max-w-lg font-display text-4xl leading-[1.05] sm:text-6xl">
      This page isn't in the archive
    </h1>
    <p class="mt-8 max-w-md text-lg leading-relaxed text-paper/70">
      The page you're looking for may have been moved, renamed, or never
      existed. Try searching the archive, or head back to the museum.
    </p>

    <div class="mt-10 w-full max-w-md">
      <SiteSearch />
    </div>

    <div class="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
      <button type="button" class="editorial-link inline-flex text-paper" @click="handleClear">
        Back to the museum
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
          <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" stroke-width="1.3" />
        </svg>
      </button>
      <NuxtLink to="/artists" class="editorial-link inline-flex text-paper/70 hover:text-paper">
        Artist Archive
      </NuxtLink>
      <NuxtLink to="/sitemap" class="editorial-link inline-flex text-paper/70 hover:text-paper">
        Sitemap
      </NuxtLink>
    </div>
  </div>
</template>
