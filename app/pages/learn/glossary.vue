<script setup lang="ts">
import { glossary, type GlossaryCategory } from "~/data/glossary";

useSeoMeta({
  title: "Glossary — Learn — Dancehall Museum",
  description:
    "A glossary of Jamaican Patois and dancehall terminology — sound system and music terms, dance moves, fashion and style, and everyday Patois.",
});

const query = ref("");
const activeCategory = ref<GlossaryCategory | "All">("All");

const categories: (GlossaryCategory | "All")[] = [
  "All",
  "Sound & Music",
  "Dance",
  "Fashion & Style",
  "Everyday Patois",
];

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  return glossary
    .filter((t) => activeCategory.value === "All" || t.category === activeCategory.value)
    .filter((t) => !q || t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q))
    .sort((a, b) => a.term.localeCompare(b.term));
});
</script>

<template>
  <div>
    <section class="mx-auto max-w-[1400px] px-6 pb-12 pt-36 sm:px-10 sm:pt-44">
      <Reveal>
        <NuxtLink to="/learn" class="editorial-link text-ink-faint">&larr; Learn</NuxtLink>
        <p class="label mt-8 mb-6 inline-flex items-center gap-2">
          <RastaMark />
          Glossary
        </p>
        <h1 class="max-w-3xl font-display text-5xl leading-[0.98] sm:text-7xl">
          The language of dancehall
        </h1>
        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
          A growing reference of Jamaican Patois and dancehall terminology —
          sound system and music vocabulary, dance moves, fashion and style,
          and everyday speech. This is a living document; the archive will
          keep expanding it.
        </p>
      </Reveal>
    </section>

    <section class="mx-auto max-w-[1400px] px-6 pb-8 sm:px-10">
      <Reveal>
        <div class="flex flex-col gap-6 border-y border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <div class="flex flex-wrap gap-2">
            <button
              v-for="cat in categories"
              :key="cat"
              type="button"
              class="label rounded-full border px-4 py-2 transition-colors"
              :class="
                activeCategory === cat
                  ? 'border-ink bg-ink text-paper'
                  : 'border-line text-ink-soft hover:border-ink hover:text-ink'
              "
              @click="activeCategory = cat"
            >
              {{ cat }}
            </button>
          </div>

          <input
            v-model="query"
            type="search"
            placeholder="Search terms…"
            class="w-full border border-line bg-paper-raised px-4 py-2 font-sans text-sm text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none sm:w-64"
          />
        </div>
      </Reveal>
    </section>

    <section class="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10">
      <div v-if="filtered.length" class="divide-y divide-line border-t border-line">
        <div
          v-for="item in filtered"
          :key="item.term"
          class="grid gap-2 py-6 sm:grid-cols-[220px_100px_1fr] sm:items-baseline sm:gap-8"
        >
          <h2 class="font-display text-2xl leading-snug text-ink">{{ item.term }}</h2>
          <p class="label text-ink-faint">{{ item.category }}</p>
          <p class="text-sm leading-relaxed text-ink-soft">{{ item.definition }}</p>
        </div>
      </div>
      <p v-else class="border border-line px-8 py-10 text-center text-sm text-ink-soft">
        No terms match "{{ query }}" — try a different search.
      </p>
    </section>
  </div>
</template>
