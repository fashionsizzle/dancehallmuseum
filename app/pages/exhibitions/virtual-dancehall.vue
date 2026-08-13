<script setup lang="ts">
useSeoMeta({
  title: "Virtual Dancehall — A Timeline Corridor — Dancehall Museum",
  description:
    "Walk the Virtual Dancehall corridor — an interactive 3D timeline of dancehall photography from sound-system culture to the modern era.",
});
</script>

<template>
  <div>
    <div class="fixed left-6 top-6 z-40 sm:left-10 sm:top-24">
      <NuxtLink to="/exhibitions" class="editorial-link inline-flex items-center gap-2 text-paper/70 hover:text-paper">
        &larr; Exhibitions
      </NuxtLink>
    </div>

    <ClientOnly>
      <VirtualDancehallCorridor />
      <template #fallback>
        <div class="flex h-screen w-full items-center justify-center bg-noir text-paper">
          <p class="label text-paper/60">Loading the corridor&hellip;</p>
        </div>
      </template>
    </ClientOnly>

    <section class="mx-auto max-w-3xl px-6 py-24 sm:px-10">
      <Reveal>
        <p class="label mb-6 inline-flex items-center gap-2 text-ink-faint">
          <RastaMark />
          Virtual Dancehall
        </p>
        <h1 class="font-display text-4xl leading-[1.05] text-ink sm:text-5xl">A timeline you can walk through</h1>
        <p class="mt-8 text-lg leading-relaxed text-ink-soft">
          Virtual Dancehall is an experimental exhibition format — a 3D
          corridor built from the Museum's photo archive, arranged
          chronologically from the foundations of sound-system culture
          through today's global scene. Scroll or move your mouse to drift
          through the timeline, and click any frame to read its story.
        </p>
      </Reveal>
    </section>
  </div>
</template>
