<script setup lang="ts">
import { artists } from "~/data/artists";

const route = useRoute();
const artist = artists.find((a) => a.slug === route.params.slug);

if (!artist) {
  throw createError({ statusCode: 404, statusMessage: "Artist not found" });
}

const sorted = [...artists].sort((a, b) => a.name.localeCompare(b.name));
const idx = sorted.findIndex((a) => a.slug === artist.slug);
const next = sorted[(idx + 1) % sorted.length];

useSeoMeta({
  title: `${artist.name} — Dancehall Museum Artist Archive`,
  description: artist.knownFor,
});
</script>

<template>
  <article v-if="artist" class="apc-page">
    <div class="apc-stars" aria-hidden="true" />

    <section class="mx-auto max-w-6xl px-6 pb-8 pt-36 sm:px-10 sm:pt-44">
      <Reveal>
        <NuxtLink to="/artists" class="editorial-link text-paper/50 hover:text-paper">&larr; Artist Archive</NuxtLink>
      </Reveal>
    </section>

    <section class="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
      <Reveal>
        <div class="apc-card">
          <div class="apc-card-inner grid gap-10 lg:grid-cols-[360px_1fr]">
            <!-- Portrait -->
            <div class="relative">
              <div class="apc-flourish apc-flourish-l" aria-hidden="true" />
              <div class="apc-flourish apc-flourish-r" aria-hidden="true" />
              <div class="apc-portrait">
                <NuxtImg
                  v-if="artist.image"
                  :src="artist.image"
                  :alt="artist.name"
                  format="webp"
                  quality="85"
                  loading="lazy"
                  sizes="360px"
                  class="h-full w-full object-cover object-top"
                />
                <PlaceholderPlate v-else :label="artist.name" hide-label dark class="h-full" />
              </div>

              <h1 class="apc-name">{{ artist.name }}</h1>
              <p v-if="artist.era" class="apc-subtitle">{{ artist.era }}</p>
            </div>

            <!-- Info panels -->
            <div class="relative flex flex-col gap-6">
              <div class="apc-panel">
                <p class="apc-panel-title">known for</p>
                <p class="apc-panel-body">{{ artist.knownFor }}</p>
              </div>

              <div class="apc-panel apc-panel-wide">
                <p class="apc-panel-title">record</p>
                <dl class="apc-facts">
                  <div v-if="artist.bornName">
                    <dt>Birth name</dt>
                    <dd>{{ artist.bornName }}</dd>
                  </div>
                  <div v-if="artist.born">
                    <dt>Born</dt>
                    <dd>{{ artist.born }}</dd>
                  </div>
                  <div v-if="artist.died">
                    <dt>Died</dt>
                    <dd>{{ artist.died }}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>

    <section class="mx-auto max-w-3xl px-6 pb-28 sm:px-10">
      <Reveal>
        <p class="label mb-8 text-paper/50">Full biography</p>
      </Reveal>
      <div class="apc-prose">
        <Reveal v-for="(para, i) in artist.bio" :key="i" :delay="0.03 * (i % 6)" as="p">{{ para }}</Reveal>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-6 pb-28 sm:px-10">
      <div class="apc-rule" />
      <Reveal :delay="0.05">
        <p class="label mb-6 mt-16 text-paper/50">Next in the archive</p>
        <NuxtLink :to="`/artists/${next.slug}`" class="group flex items-baseline justify-between gap-8">
          <h2 class="apc-next-name">{{ next.name }}</h2>
          <span class="editorial-link shrink-0 text-paper/70 transition-colors group-hover:text-paper">View &rarr;</span>
        </NuxtLink>
      </Reveal>
    </section>
  </article>
</template>

<style scoped>
.apc-page {
  position: relative;
  background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(184, 137, 47, 0.08), transparent 60%), #0c0c0e;
  color: #eae6de;
  overflow: hidden;
}

.apc-stars {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(1.5px 1.5px at 10% 15%, rgba(217, 165, 63, 0.55), transparent),
    radial-gradient(1.5px 1.5px at 80% 10%, rgba(217, 165, 63, 0.4), transparent),
    radial-gradient(1px 1px at 30% 40%, rgba(255, 255, 255, 0.35), transparent),
    radial-gradient(1px 1px at 65% 70%, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(1.5px 1.5px at 90% 55%, rgba(217, 165, 63, 0.4), transparent),
    radial-gradient(1px 1px at 45% 85%, rgba(255, 255, 255, 0.25), transparent);
  background-size: 100% 100%;
  opacity: 0.8;
}

.apc-card {
  position: relative;
  border-radius: 28px;
  padding: 1px;
  background: linear-gradient(155deg, rgba(217, 165, 63, 0.45), rgba(217, 165, 63, 0.05) 40%, rgba(217, 165, 63, 0.35));
  box-shadow: 0 40px 100px -40px rgba(0, 0, 0, 0.8);
}

.apc-card-inner {
  border-radius: 27px;
  background: linear-gradient(165deg, #17171a, #0e0e10 60%);
  padding: 2.5rem;
}

@media (min-width: 640px) {
  .apc-card-inner {
    padding: 3.5rem;
  }
}

.apc-portrait {
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 999px 999px 24px 24px;
  border: 1px solid rgba(217, 165, 63, 0.3);
  box-shadow: 0 0 60px -10px rgba(217, 165, 63, 0.25);
}

.apc-flourish {
  position: absolute;
  top: 10%;
  width: 90px;
  height: 220px;
  opacity: 0.35;
  background: linear-gradient(180deg, transparent, rgba(217, 165, 63, 0.4), transparent);
  pointer-events: none;
}
.apc-flourish-l {
  left: -50px;
  transform: skewY(8deg);
}
.apc-flourish-r {
  right: -50px;
  transform: skewY(-8deg);
}

.apc-name {
  margin-top: 2rem;
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 500;
  font-size: clamp(2.1rem, 4vw, 2.75rem);
  line-height: 1.05;
  text-align: center;
  color: #f5f0e6;
}

.apc-subtitle {
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(217, 165, 63, 0.8);
}

.apc-panel {
  position: relative;
  border-radius: 18px;
  border: 1px solid rgba(217, 165, 63, 0.22);
  background: rgba(255, 255, 255, 0.02);
  padding: 1.75rem 2rem;
  backdrop-filter: blur(6px);
}

.apc-panel-title {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.1rem;
  color: #d9a53f;
  margin-bottom: 0.75rem;
}

.apc-panel-body {
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(234, 230, 222, 0.85);
}

.apc-facts {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}
.apc-facts dt {
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(217, 165, 63, 0.7);
}
.apc-facts dd {
  margin-top: 0.35rem;
  font-size: 0.9rem;
  color: rgba(234, 230, 222, 0.85);
}

.apc-prose p {
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(234, 230, 222, 0.85);
}

.apc-rule {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(217, 165, 63, 0.3), transparent);
}

.apc-next-name {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  line-height: 1.1;
  color: #f5f0e6;
  transition: color 0.2s ease;
}
.group:hover .apc-next-name {
  color: #d9a53f;
}
</style>
