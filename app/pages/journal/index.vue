<script setup lang="ts">
import { journalPosts } from "~/data/journal";

useSeoMeta({
  title: "Journal — Dancehall Museum",
  description:
    "Long-form research and essays from Dancehall Museum — dancehall history, artists, fashion, language, dance, and Jamaican cultural influence.",
});

const [lead, ...rest] = journalPosts;
</script>

<template>
  <div>
    <section class="mx-auto max-w-[1400px] px-6 pb-16 pt-36 sm:px-10 sm:pt-44">
      <Reveal>
        <p class="label mb-6 inline-flex items-center gap-2">
          <RastaMark />
          The Journal
        </p>
        <h1 class="max-w-3xl font-display text-5xl leading-[0.98] sm:text-7xl">
          Research, essays &amp; artist histories
        </h1>
        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
          The museum's editorial and research component — long-form pieces on
          dancehall history, sound-system culture, fashion, language, and the
          artists who shaped the movement.
        </p>
        <a href="/rss.xml" class="editorial-link mt-8 inline-flex text-ink-faint hover:text-ink">Subscribe via RSS</a>
      </Reveal>
    </section>

    <section v-if="lead" class="mx-auto max-w-[1400px] px-6 pb-20 sm:px-10">
      <Reveal>
        <NuxtLink :to="`/journal/${lead.slug}`" class="group grid gap-8 sm:grid-cols-2 sm:items-center">
          <div class="overflow-hidden">
            <NuxtImg
              v-if="lead.images[0]"
              :src="lead.images[0]"
              :alt="lead.title"
              format="webp"
              loading="lazy"
              sizes="100vw sm:50vw"
              class="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <PlaceholderPlate v-else :label="lead.title" class="aspect-[4/3]" />
          </div>
          <div>
            <p class="label text-ink-faint">{{ lead.date }} &middot; Featured</p>
            <h2 class="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">{{ lead.title }}</h2>
            <p class="mt-4 max-w-lg text-ink-soft">{{ lead.dek }}</p>
            <span class="editorial-link mt-6 inline-flex text-ink">Read the feature</span>
          </div>
        </NuxtLink>
      </Reveal>
    </section>

    <div class="rule mx-auto max-w-[1400px]" />

    <section class="mx-auto max-w-[1400px] px-6 py-20 sm:px-10">
      <div class="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal v-for="(post, i) in rest" :key="post.slug" :delay="0.04 * (i % 6)" as="div">
          <NuxtLink :to="`/journal/${post.slug}`" class="block">
            <OverlayCard :image="post.images[0]" :label="post.date" :title="post.title" />
            <p class="mt-4 line-clamp-2 text-center text-sm text-ink-soft">{{ post.dek }}</p>
          </NuxtLink>
        </Reveal>
      </div>
    </section>
  </div>
</template>
