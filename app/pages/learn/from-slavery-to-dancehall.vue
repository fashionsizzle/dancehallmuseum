<script setup lang="ts">
import { historyTimeline, historyTimelineSources } from "~/data/history-timeline";

useSeoMeta({
  title: "From Slavery to Dancehall: A History Timeline — Dancehall Museum",
  description:
    "A chronological history tracing Jamaican dance and music from the West African traditions carried across the Atlantic during slavery, through emancipation-era Revival religions, mento, ska, rocksteady, and reggae, to the emergence of dancehall.",
});
</script>

<template>
  <div>
    <section class="mx-auto max-w-[1400px] px-6 pb-12 pt-36 sm:px-10 sm:pt-44">
      <Reveal>
        <NuxtLink to="/learn" class="editorial-link text-ink-faint">&larr; Learn</NuxtLink>
        <p class="label mt-8 inline-flex items-center gap-2 text-ink-faint">
          <RastaMark />
          History Timeline
        </p>
        <h1 class="mt-4 max-w-3xl font-display text-4xl leading-[1.05] sm:text-6xl">
          From Slavery to Dancehall
        </h1>
        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Dancehall did not begin in the 1970s. It is the latest expression
          of a cultural throughline that runs back nearly four centuries —
          from the West African musical and spiritual traditions carried
          across the Atlantic by enslaved people, through the communities
          that preserved and transformed them under and after slavery, to
          the sound systems and dance floors of 20th-century Kingston. This
          timeline traces that lineage with care, citing sources and noting
          where the historical record is thin or disputed rather than
          presenting speculation as settled fact.
        </p>
      </Reveal>
    </section>

    <section class="mx-auto max-w-3xl px-6 pb-20 sm:px-10">
      <div class="border-t border-line">
        <Reveal v-for="(entry, i) in historyTimeline" :key="i" :delay="0.02 * (i % 8)" as="div">
          <div class="grid gap-3 border-b border-line py-10 sm:grid-cols-[180px_1fr] sm:gap-10">
            <p class="label text-ink-faint">{{ entry.period }}</p>
            <div>
              <h2 class="font-display text-2xl leading-snug text-ink sm:text-3xl">{{ entry.title }}</h2>
              <p class="mt-4 text-base leading-relaxed text-ink-soft">{{ entry.body }}</p>
              <p v-if="entry.note" class="mt-4 border-l-2 border-line pl-4 text-sm italic leading-relaxed text-ink-faint">
                {{ entry.note }}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section class="mx-auto max-w-3xl px-6 pb-28 sm:px-10">
      <div class="border-t border-line pt-8">
        <p class="label mb-4 text-ink-faint">Sources</p>
        <ul class="space-y-2">
          <li v-for="src in historyTimelineSources" :key="src.url" class="text-sm">
            <a
              :href="src.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-ink-soft underline decoration-line underline-offset-4 hover:text-brass"
            >
              {{ src.title }}
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
