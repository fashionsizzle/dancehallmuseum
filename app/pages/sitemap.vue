<script setup lang="ts">
import { artists, ERA_ORDER, type ArtistEra } from "~/data/artists";
import { journalPosts } from "~/data/journal";
import { learnTopics } from "~/data/learn-topics";
import { topics } from "~/data/topics";
import { exhibitions } from "~/data/exhibitions";

useSeoMeta({
  title: "Sitemap — Dancehall Museum",
  description: "A complete, plain-English guide to every page and section on Dancehall Museum.",
});

function effectiveEra(a: (typeof artists)[number]): ArtistEra {
  return a.era ?? "Roots & Culture-Bearers";
}

const artistsByEra = ERA_ORDER.map((era) => ({
  era,
  items: artists.filter((a) => effectiveEra(a) === era).sort((a, b) => a.name.localeCompare(b.name)),
})).filter((g) => g.items.length > 0);

const journalSorted = [...journalPosts].sort((a, b) => a.title.localeCompare(b.title));
</script>

<template>
  <div>
    <PageHero
      kicker="Sitemap"
      title="Every page on Dancehall Museum"
      dek="A plain-English guide to everything on the site — organized by section, so you can find exactly what you're looking for."
    />

    <section class="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10">
      <div class="grid gap-16 lg:grid-cols-2">
        <!-- MAIN PAGES -->
        <Reveal as="div">
          <p class="label mb-6 text-ink-faint">Main pages</p>
          <ul class="space-y-3">
            <li><NuxtLink to="/" class="text-lg text-ink hover:text-brass">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-lg text-ink hover:text-brass">About</NuxtLink></li>
            <li><NuxtLink to="/exhibitions" class="text-lg text-ink hover:text-brass">Exhibitions</NuxtLink></li>
            <li><NuxtLink to="/collections" class="text-lg text-ink hover:text-brass">Collections</NuxtLink></li>
            <li><NuxtLink to="/artists" class="text-lg text-ink hover:text-brass">Artist Archive</NuxtLink></li>
            <li><NuxtLink to="/learn" class="text-lg text-ink hover:text-brass">Learn</NuxtLink></li>
            <li><NuxtLink to="/journal" class="text-lg text-ink hover:text-brass">Journal</NuxtLink></li>
            <li><NuxtLink to="/support" class="text-lg text-ink hover:text-brass">Support / Donate</NuxtLink></li>
          </ul>
        </Reveal>

        <!-- LEGAL -->
        <Reveal as="div">
          <p class="label mb-6 text-ink-faint">Legal</p>
          <ul class="space-y-3">
            <li><NuxtLink to="/privacy" class="text-lg text-ink hover:text-brass">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/terms" class="text-lg text-ink hover:text-brass">Terms of Use</NuxtLink></li>
            <li><NuxtLink to="/cookies" class="text-lg text-ink hover:text-brass">Cookie Policy</NuxtLink></li>
            <li><NuxtLink to="/accessibility" class="text-lg text-ink hover:text-brass">Accessibility</NuxtLink></li>
          </ul>
        </Reveal>

        <!-- EXHIBITIONS -->
        <Reveal as="div">
          <p class="label mb-6 text-ink-faint">Exhibitions</p>
          <ul class="space-y-3">
            <li v-for="ex in exhibitions" :key="ex.slug">
              <a :href="`/exhibitions#${ex.slug}`" class="text-lg text-ink hover:text-brass">{{ ex.title }}</a>
            </li>
            <li><NuxtLink to="/exhibitions/virtual-dancehall" class="text-lg text-ink hover:text-brass">Virtual Dancehall (interactive)</NuxtLink></li>
          </ul>
        </Reveal>

        <!-- COLLECTIONS -->
        <Reveal as="div">
          <p class="label mb-6 text-ink-faint">Collections</p>
          <ul class="space-y-3">
            <li v-for="t in topics" :key="t.slug">
              <NuxtLink :to="`/collections/${t.slug}`" class="text-lg text-ink hover:text-brass">{{ t.label }}</NuxtLink>
            </li>
          </ul>
        </Reveal>

        <!-- LEARN -->
        <Reveal as="div">
          <p class="label mb-6 text-ink-faint">Learn</p>
          <ul class="space-y-3">
            <li v-for="t in learnTopics" :key="t.slug">
              <NuxtLink :to="`/learn/${t.slug}`" class="text-lg text-ink hover:text-brass">{{ t.title }}</NuxtLink>
            </li>
            <li><NuxtLink to="/learn/from-slavery-to-dancehall" class="text-lg text-ink hover:text-brass">From Slavery to Dancehall (timeline)</NuxtLink></li>
            <li><NuxtLink to="/learn/glossary" class="text-lg text-ink hover:text-brass">Glossary</NuxtLink></li>
          </ul>
        </Reveal>

        <!-- JOURNAL -->
        <Reveal as="div" class="lg:col-span-2">
          <p class="label mb-6 text-ink-faint">Journal — {{ journalSorted.length }} articles</p>
          <ul class="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="post in journalSorted" :key="post.slug">
              <NuxtLink :to="`/journal/${post.slug}`" class="text-sm text-ink-soft hover:text-brass">{{ post.title }}</NuxtLink>
            </li>
          </ul>
        </Reveal>

        <!-- ARTISTS -->
        <Reveal as="div" class="lg:col-span-2">
          <p class="label mb-6 text-ink-faint">Artist Archive — {{ artists.length }} artists</p>
          <div class="space-y-10">
            <div v-for="group in artistsByEra" :key="group.era">
              <p class="mb-3 font-display text-lg text-ink">{{ group.era }}</p>
              <ul class="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                <li v-for="artist in group.items" :key="artist.slug">
                  <NuxtLink :to="`/artists/${artist.slug}`" class="text-sm text-ink-soft hover:text-brass">{{ artist.name }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
</template>
