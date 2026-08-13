<script setup lang="ts">
import { pageContent } from "~/data/pages";
import { stripPageHeader } from "~/lib/content-utils";
import { topics } from "~/data/topics";

const page = pageContent.collections;
const blocks = stripPageHeader(page.blocks);

const featuredSlides = [
  {
    kicker: "Collection",
    title: "Music & Sound-System Culture",
    dek: "The speaker stacks, selectors, and dubplates that built dancehall from the ground up.",
    href: "/collections/music-sound-system-culture",
    image: "/images/sound-system.webp",
  },
  {
    kicker: "Collection",
    title: "Fashion & Style",
    dek: "Clarks, gold, tailoring, and the dancehall queens who turned the dance floor into a runway.",
    href: "/collections/fashion-style",
    image: "/images/dancehall-queen-style-sho-warszawa-szkola-carlene.webp",
  },
  {
    kicker: "Collection",
    title: "Dance & Performance",
    dek: "The dance floor as stage — the moves, dancers, and performance culture that gave dancehall its name.",
    href: "/collections/dance-performance",
    image: "/images/story-dnc-MK_Supercat-_V8A3835-Edit-2-scaled.webp",
  },
  {
    kicker: "Collection",
    title: "Global Cultural Influence",
    dek: "From Kingston to the world — how dancehall reshaped fashion, music, and youth culture globally.",
    href: "/collections/global-cultural-influence",
    image: "/images/00-lede-sumfest-scaled.webp",
  },
];

useSeoMeta({
  title: "Collections — Dancehall Museum",
  description:
    "The Dancehall Museum collections preserve fashion, flyers, photography, sound systems, video, and oral histories — the material and cultural record of dancehall.",
});
</script>

<template>
  <div>
    <PageHero
      kicker="Collections"
      title="The archive of dancehall"
      dek="Dancehall is not only heard — it is seen, worn, performed, circulated, and lived. The collections preserve its material, visual, sonic, and cultural record."
      image="/images/sWiTrjKQ-scaled-e1605022466911_2023-03-27-132921_juvl-1.jpeg"
    />

    <section class="mx-auto max-w-3xl px-6 pb-16 pt-4 text-center sm:px-10">
      <Reveal><ContentBlocks :blocks="blocks" /></Reveal>
    </section>

    <section class="mx-auto max-w-[1400px] px-6 pb-24 sm:px-10">
      <Reveal>
        <FeaturedSlider :slides="featuredSlides" />
      </Reveal>
    </section>

    <section class="mx-auto max-w-[1400px] px-6 pb-24 sm:px-10">
      <Reveal>
        <p class="label mb-10 text-center text-ink-faint">Browse by theme</p>
      </Reveal>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal v-for="(t, i) in topics" :key="t.slug" :delay="0.04 * (i % 6)" as="div">
          <NuxtLink :to="`/collections/${t.slug}`" class="block">
            <OverlayCard :label="t.shortLabel" :title="t.label" />
          </NuxtLink>
        </Reveal>
      </div>
    </section>

    <section class="mx-auto max-w-[1400px] px-6 pb-12 sm:px-10">
      <Reveal>
        <div class="flex flex-wrap justify-center gap-2 border-y border-line py-6">
          <NuxtLink
            v-for="t in topics"
            :key="t.slug"
            :to="`/collections/${t.slug}`"
            class="label rounded-full border border-line px-4 py-2 text-ink-soft transition-colors hover:border-ink hover:text-ink hover:scale-105"
          >
            {{ t.shortLabel }}
          </NuxtLink>
        </div>
      </Reveal>
    </section>

    <section class="mx-auto max-w-3xl px-6 pb-28 sm:px-10">
      <Reveal>
        <NuxtLink
          to="/artists"
          class="group flex items-center justify-between gap-6 border border-line px-8 py-8 transition-colors hover:border-ink"
        >
          <div>
            <p class="label text-ink-faint">Part of the collections</p>
            <h2 class="mt-2 font-display text-2xl text-ink">The Artist Archive</h2>
            <p class="mt-2 text-sm text-ink-soft">
              Alphabetically ordered biographies of the artists, musicians,
              and figures who built reggae and dancehall.
            </p>
          </div>
          <span class="editorial-link shrink-0 text-ink transition-transform group-hover:translate-x-1">Browse &rarr;</span>
        </NuxtLink>
      </Reveal>
    </section>
  </div>
</template>
