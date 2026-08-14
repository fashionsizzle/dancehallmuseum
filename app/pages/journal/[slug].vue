<script setup lang="ts">
import { journalPosts } from "~/data/journal";

const route = useRoute();
const post = journalPosts.find((p) => p.slug === route.params.slug);

if (!post) {
  throw createError({ statusCode: 404, statusMessage: "Journal entry not found" });
}

const idx = journalPosts.findIndex((p) => p.slug === post.slug);
const next = journalPosts[(idx + 1) % journalPosts.length];
const pageUrl = `https://dancehallmuseum.org/journal/${post.slug}`;

function keywords(title: string) {
  const stop = new Set(["the", "a", "an", "of", "and", "to", "in", "for", "on", "from", "how", "why", "is", "are", "at", "as", "&", "with"]);
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 3 && !stop.has(w));
}

const postKeywords = keywords(post.title);
const related = journalPosts
  .filter((p) => p.slug !== post.slug)
  .map((p) => ({ post: p, score: keywords(p.title).filter((w) => postKeywords.includes(w)).length }))
  .sort((a, b) => b.score - a.score)
  .slice(0, 3)
  .map((r) => r.post);

useSeoMeta({
  title: `${post.title} — Dancehall Museum Journal`,
  description: post.dek || post.title,
  ogImage: post.images[0],
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.dek || post.title,
        image: post.images[0] ? `https://dancehallmuseum.org${post.images[0]}` : undefined,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Organization", name: "The Reggae Institute" },
        publisher: {
          "@type": "Organization",
          name: "Dancehall Museum",
          logo: { "@type": "ImageObject", url: "https://dancehallmuseum.org/favicon.svg" },
        },
        mainEntityOfPage: pageUrl,
        url: pageUrl,
      }),
    },
  ],
});
</script>

<template>
  <article v-if="post">
    <section class="mx-auto max-w-3xl px-6 pb-12 pt-36 sm:px-10 sm:pt-44">
      <Reveal>
        <NuxtLink to="/journal" class="editorial-link text-ink-faint">&larr; Journal</NuxtLink>
        <p class="label mt-8 inline-flex items-center gap-2 text-ink-faint">
          <RastaMark />
          {{ post.date }}
        </p>
        <h1 class="mt-4 font-display text-4xl leading-[1.05] sm:text-6xl">{{ post.title }}</h1>
        <p v-if="post.dek" class="mt-8 text-lg leading-relaxed text-ink-soft">{{ post.dek }}</p>
        <p class="label mt-8 text-ink-faint">Curated by YardRock TV &middot; Researched by The Reggae Institute</p>
      </Reveal>
    </section>

    <Reveal v-if="post.images[0]" :delay="0.1" class="mx-auto max-w-5xl px-6 sm:px-10">
      <NuxtImg
        :src="post.images[0]"
        :alt="post.title"
        format="webp"
        quality="82"
        loading="lazy"
        sizes="100vw sm:1024px"
        class="max-h-[600px] w-full object-cover object-top"
      />
    </Reveal>

    <section class="mx-auto max-w-3xl px-6 py-20 sm:px-10">
      <Reveal><ContentBlocks :blocks="post.blocks" /></Reveal>

      <div v-if="post.images.length > 1" class="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <NuxtImg
          v-for="src in post.images.slice(1)"
          :key="src"
          :src="src"
          :alt="post.title"
          format="webp"
          loading="lazy"
          sizes="50vw sm:33vw"
          class="aspect-square w-full object-cover"
        />
      </div>
    </section>

    <div v-if="related.length" class="rule mx-auto max-w-[1400px]" />

    <section v-if="related.length" class="mx-auto max-w-[1400px] px-6 py-20 sm:px-10">
      <p class="label mb-8">Related articles</p>
      <div class="grid gap-10 sm:grid-cols-3">
        <NuxtLink v-for="r in related" :key="r.slug" :to="`/journal/${r.slug}`" class="block">
          <OverlayCard :image="r.images[0]" :label="r.date" :title="r.title" />
        </NuxtLink>
      </div>
    </section>

    <div class="rule mx-auto max-w-[1400px]" />

    <section class="mx-auto max-w-[1400px] px-6 py-20 sm:px-10">
      <p class="label mb-6">Continue reading</p>
      <NuxtLink :to="`/journal/${next.slug}`" class="group grid gap-8 sm:grid-cols-2 sm:items-center">
        <div class="overflow-hidden">
          <NuxtImg
            v-if="next.images[0]"
            :src="next.images[0]"
            :alt="next.title"
            format="webp"
            loading="lazy"
            sizes="100vw sm:50vw"
            class="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <PlaceholderPlate v-else :label="next.title" class="aspect-[4/3]" />
        </div>
        <h2 class="font-display text-3xl leading-tight text-ink sm:text-4xl">{{ next.title }}</h2>
      </NuxtLink>
    </section>
  </article>
</template>
