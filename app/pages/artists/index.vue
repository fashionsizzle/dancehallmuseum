<script setup lang="ts">
import { artists, ERA_ORDER, type ArtistEra } from "~/data/artists";

useSeoMeta({
  title: "Artist Archive — Dancehall Museum",
  description:
    "A comprehensive archive of the artists, selectors, musicians, and figures who built Jamaica's reggae and dancehall scene — their biographies and how they became known.",
});

const route = useRoute();
const query = ref("");
const activeEra = ref<ArtistEra | "All">("All");

const eraFilters: (ArtistEra | "All")[] = ["All", ...ERA_ORDER];

watch(
  () => route.query.era,
  (eraParam) => {
    if (typeof eraParam === "string" && (ERA_ORDER as string[]).includes(eraParam)) {
      activeEra.value = eraParam as ArtistEra;
    }
  },
  { immediate: true },
);

function effectiveEra(a: (typeof artists)[number]): ArtistEra {
  return a.era ?? "Roots & Culture-Bearers";
}

const grouped = computed(() => {
  const q = query.value.trim().toLowerCase();
  const filtered = artists.filter((a) => {
    const matchesQuery = !q || a.name.toLowerCase().includes(q) || a.knownFor.toLowerCase().includes(q);
    const matchesEra = activeEra.value === "All" || effectiveEra(a) === activeEra.value;
    return matchesQuery && matchesEra;
  });

  return ERA_ORDER.map((era) => ({
    era,
    items: filtered.filter((a) => effectiveEra(a) === era).sort((a, b) => a.name.localeCompare(b.name)),
  })).filter((g) => g.items.length > 0);
});

const totalShown = computed(() => grouped.value.reduce((n, g) => n + g.items.length, 0));
</script>

<template>
  <div>
    <section class="mx-auto max-w-[1400px] px-6 pb-16 pt-36 sm:px-10 sm:pt-44">
      <Reveal>
        <p class="label mb-6 inline-flex items-center gap-2">
          <RastaMark />
          Artist Archive
        </p>
        <h1 class="max-w-3xl font-display text-5xl leading-[0.98] sm:text-7xl">
          The people behind the culture
        </h1>
        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
          A growing archive of the artists, musicians, selectors, and
          cultural figures who shaped reggae and dancehall — organized by
          era, alphabetical within each — covering how each of them rose to
          prominence and the mark they left.
        </p>
      </Reveal>
    </section>

    <section class="mx-auto max-w-[1400px] px-6 pb-8 sm:px-10">
      <Reveal>
        <div class="flex flex-col gap-6 border-y border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <div class="flex flex-wrap gap-2">
            <button
              v-for="era in eraFilters"
              :key="era"
              type="button"
              class="label rounded-full border px-4 py-2 transition-colors"
              :class="
                activeEra === era
                  ? 'border-ink bg-ink text-paper'
                  : 'border-line text-ink-soft hover:border-ink hover:text-ink'
              "
              @click="activeEra = era"
            >
              {{ era }}
            </button>
          </div>

          <input
            v-model="query"
            type="search"
            placeholder="Search artists…"
            class="w-full border border-line bg-paper-raised px-4 py-2 font-sans text-sm text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none sm:w-64"
          />
        </div>
      </Reveal>
    </section>

    <section class="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10">
      <div v-if="totalShown === 0" class="border border-line px-8 py-10 text-center text-sm text-ink-soft">
        No artists match "{{ query }}" — try a different search.
      </div>

      <div v-for="group in grouped" :key="group.era" class="mb-16 last:mb-0">
        <p class="label mb-4 text-ink-faint">{{ group.era }}</p>
        <div class="divide-y divide-line border-t border-line">
          <NuxtLink
            v-for="artist in group.items"
            :key="artist.slug"
            :to="`/artists/${artist.slug}`"
            class="group flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
          >
            <div class="flex items-baseline gap-4">
              <span class="label w-8 shrink-0 text-ink-faint">{{ artist.name.charAt(0) }}</span>
              <h2 class="font-display text-3xl leading-tight text-ink transition-colors group-hover:text-brass">
                {{ artist.name }}
              </h2>
            </div>
            <p class="max-w-md text-sm text-ink-soft sm:text-right">{{ artist.knownFor }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
