<script setup lang="ts">
import { topics } from "~/data/topics";
import { journalPosts } from "~/data/journal";
import { artists } from "~/data/artists";

const route = useRoute();
const topic = topics.find((t) => t.slug === route.params.topic);

if (!topic) {
  throw createError({ statusCode: 404, statusMessage: "Topic not found" });
}

function matches(text: string) {
  const lower = text.toLowerCase();
  return topic!.keywords.some((k) => lower.includes(k));
}

const relatedPosts = journalPosts
  .filter((p) => matches(`${p.title} ${p.dek}`))
  .slice(0, 6);

const relatedArtists = artists
  .filter((a) => matches(`${a.knownFor} ${a.bio.join(" ")}`))
  .slice(0, 6);

useSeoMeta({
  title: `${topic.label} — Dancehall Museum Collections`,
  description: topic.dek,
});
</script>

<template>
  <div v-if="topic">
    <PageHero :kicker="topic.kicker" :title="topic.label" :dek="topic.dek" />

    <section class="mx-auto max-w-[1400px] px-6 pb-12 sm:px-10">
      <div class="flex flex-wrap gap-2 border-y border-line py-6">
        <NuxtLink
          v-for="t in topics"
          :key="t.slug"
          :to="`/collections/${t.slug}`"
          class="label rounded-full border px-4 py-2 transition-colors"
          :class="
            t.slug === topic.slug
              ? 'border-ink bg-ink text-paper'
              : 'border-line text-ink-soft hover:border-ink hover:text-ink'
          "
        >
          {{ t.shortLabel }}
        </NuxtLink>
      </div>
    </section>

    <section class="mx-auto max-w-3xl px-6 pb-16 sm:px-10">
      <div class="prose-museum">
        <p v-for="(para, i) in topic.intro" :key="i">{{ para }}</p>
      </div>
    </section>

    <section v-if="relatedPosts.length" class="mx-auto max-w-[1400px] px-6 pb-20 sm:px-10">
      <div class="rule mb-16" />
      <p class="label mb-8">Related from the Journal</p>
      <div class="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal v-for="(post, i) in relatedPosts" :key="post.slug" :delay="0.04 * i" as="div">
          <NuxtLink :to="`/journal/${post.slug}`" class="group block">
            <div class="overflow-hidden">
              <NuxtImg
                v-if="post.images[0]"
                :src="post.images[0]"
                :alt="post.title"
                format="webp"
                loading="lazy"
                sizes="100vw sm:50vw lg:33vw"
                class="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <PlaceholderPlate v-else :label="post.title" />
            </div>
            <p class="label mt-5 text-ink-faint">{{ post.date }}</p>
            <h3 class="mt-2 font-display text-xl leading-snug text-ink">{{ post.title }}</h3>
          </NuxtLink>
        </Reveal>
      </div>
    </section>

    <section v-if="relatedArtists.length" class="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10">
      <div class="rule mb-16" />
      <p class="label mb-8">Related artists</p>
      <div class="divide-y divide-line border-t border-line">
        <NuxtLink
          v-for="artist in relatedArtists"
          :key="artist.slug"
          :to="`/artists/${artist.slug}`"
          class="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
        >
          <h3 class="font-display text-2xl text-ink transition-colors group-hover:text-brass">{{ artist.name }}</h3>
          <p class="max-w-md text-sm text-ink-soft sm:text-right">{{ artist.knownFor }}</p>
        </NuxtLink>
      </div>
    </section>

    <section v-if="!relatedPosts.length && !relatedArtists.length" class="mx-auto max-w-3xl px-6 pb-28 sm:px-10">
      <div class="border border-line px-8 py-10 text-center">
        <p class="text-sm text-ink-soft">
          No cross-referenced entries yet for this theme — check back as the
          Journal and Artist Archive grow, or
          <NuxtLink to="/journal" class="underline decoration-line underline-offset-4">browse the full Journal</NuxtLink>.
        </p>
      </div>
    </section>
  </div>
</template>
