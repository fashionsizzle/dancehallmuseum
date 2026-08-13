<script setup lang="ts">
import { learnTopics } from "~/data/learn-topics";
import { journalPosts } from "~/data/journal";
import { artists } from "~/data/artists";

const route = useRoute();
const topic = learnTopics.find((t) => t.slug === route.params.slug);

if (!topic) {
  throw createError({ statusCode: 404, statusMessage: "Lesson not found" });
}

const idx = learnTopics.findIndex((t) => t.slug === topic!.slug);
const next = learnTopics[(idx + 1) % learnTopics.length];

function matches(text: string) {
  const lower = text.toLowerCase();
  return topic!.keywords.some((k) => lower.includes(k));
}

const relatedPosts = journalPosts.filter((p) => matches(`${p.title} ${p.dek}`)).slice(0, 3);
const relatedArtists = artists.filter((a) => matches(`${a.knownFor} ${a.bio.join(" ")}`)).slice(0, 4);

useSeoMeta({
  title: `${topic.title} — Learn — Dancehall Museum`,
  description: topic.dek,
});
</script>

<template>
  <article v-if="topic">
    <section class="mx-auto max-w-3xl px-6 pb-12 pt-36 sm:px-10 sm:pt-44">
      <Reveal>
        <NuxtLink to="/learn" class="editorial-link text-ink-faint">&larr; Learn</NuxtLink>
        <p class="label mt-8 inline-flex items-center gap-2 text-ink-faint">
          <RastaMark />
          Dancehall 101 &middot; Lesson {{ idx + 1 }} of {{ learnTopics.length }}
        </p>
        <h1 class="mt-4 font-display text-4xl leading-[1.05] sm:text-6xl">{{ topic.title }}</h1>
        <p class="mt-8 text-lg leading-relaxed text-ink-soft">{{ topic.dek }}</p>
      </Reveal>
    </section>

    <section class="mx-auto max-w-3xl px-6 py-12 sm:px-10">
      <div class="prose-museum">
        <Reveal v-for="(para, i) in topic.body" :key="i" :delay="0.03 * (i % 6)" as="p">{{ para }}</Reveal>
      </div>
    </section>

    <section v-if="relatedPosts.length || relatedArtists.length" class="mx-auto max-w-[1400px] px-6 pb-20 sm:px-10">
      <div class="rule mb-16" />

      <div v-if="relatedPosts.length" class="mb-16">
        <p class="label mb-8">Go deeper in the Journal</p>
        <div class="grid gap-x-8 gap-y-12 sm:grid-cols-3">
          <NuxtLink
            v-for="post in relatedPosts"
            :key="post.slug"
            :to="`/journal/${post.slug}`"
            class="group block"
          >
            <div class="overflow-hidden">
              <NuxtImg
                v-if="post.images[0]"
                :src="post.images[0]"
                :alt="post.title"
                format="webp"
                loading="lazy"
                sizes="100vw sm:33vw"
                class="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <PlaceholderPlate v-else :label="post.title" class="aspect-[4/3]" />
            </div>
            <h3 class="mt-4 font-display text-lg leading-snug text-ink group-hover:text-brass">{{ post.title }}</h3>
          </NuxtLink>
        </div>
      </div>

      <div v-if="relatedArtists.length">
        <p class="label mb-8">Related artists</p>
        <div class="divide-y divide-line border-t border-line">
          <NuxtLink
            v-for="artist in relatedArtists"
            :key="artist.slug"
            :to="`/artists/${artist.slug}`"
            class="group flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
          >
            <h3 class="font-display text-xl text-ink transition-colors group-hover:text-brass">{{ artist.name }}</h3>
            <p class="max-w-md text-sm text-ink-soft sm:text-right">{{ artist.knownFor }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <div class="rule mx-auto max-w-[1400px]" />

    <section class="mx-auto max-w-[1400px] px-6 py-20 sm:px-10">
      <p class="label mb-6">Next lesson</p>
      <NuxtLink :to="`/learn/${next.slug}`" class="group flex items-baseline justify-between gap-8">
        <h2 class="font-display text-3xl leading-tight text-ink transition-colors group-hover:text-brass sm:text-4xl">
          {{ next.title }}
        </h2>
        <span class="editorial-link shrink-0 text-ink">View &rarr;</span>
      </NuxtLink>
    </section>
  </article>
</template>
