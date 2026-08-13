<script setup lang="ts">
import { pageContent } from "~/data/pages";
import { stripPageHeader } from "~/lib/content-utils";
import { learnTopics } from "~/data/learn-topics";

const page = pageContent.learn;
const blocks = stripPageHeader(page.blocks);

useSeoMeta({
  title: "Learn — Dancehall Museum",
  description:
    "Dancehall 101 — educational resources on sound-system basics, Jamaican Patois, fashion and style, and dancehall's global influence.",
});
</script>

<template>
  <div>
    <PageHero
      kicker="Learn"
      title="Understand dancehall"
      dek="Accessible guides and research-based content on the sound, style, movement, and cultural impact of dancehall — from sound-system basics to a glossary of patois."
      image="/images/sound-system.webp"
    />

    <section class="mx-auto max-w-3xl px-6 pb-16 sm:px-10">
      <ContentBlocks :blocks="blocks" />
    </section>

    <section class="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10">
      <div class="rule mb-16" />
      <p class="label mb-4">Dancehall 101</p>
      <h2 class="max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
        Eight lessons in the culture
      </h2>

      <div class="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal v-for="(topic, i) in learnTopics" :key="topic.slug" :delay="0.03 * i" as="div">
          <NuxtLink :to="`/learn/${topic.slug}`" class="group block border-t border-line pt-6">
            <span class="label text-ink-faint">0{{ i + 1 }}</span>
            <h3 class="mt-3 font-display text-xl leading-snug text-ink transition-colors group-hover:text-brass">
              {{ topic.title }}
            </h3>
            <p class="mt-2 text-sm text-ink-soft">{{ topic.dek }}</p>
          </NuxtLink>
        </Reveal>
      </div>
    </section>

    <section class="mx-auto max-w-3xl px-6 pb-8 sm:px-10">
      <NuxtLink
        to="/learn/from-slavery-to-dancehall"
        class="group flex items-center justify-between gap-6 border border-line px-8 py-8 transition-colors hover:border-ink"
      >
        <div>
          <p class="label text-ink-faint">History Timeline</p>
          <h2 class="mt-2 font-display text-2xl text-ink">From Slavery to Dancehall</h2>
          <p class="mt-2 text-sm text-ink-soft">
            A sourced chronology tracing the throughline from West African
            traditions carried during slavery to emancipation-era Revival
            religions, mento, ska, rocksteady, reggae, and dancehall's
            emergence.
          </p>
        </div>
        <span class="editorial-link shrink-0 text-ink">Read &rarr;</span>
      </NuxtLink>
    </section>

    <section class="mx-auto max-w-3xl px-6 pb-28 sm:px-10">
      <NuxtLink
        to="/learn/glossary"
        class="group flex items-center justify-between gap-6 border border-line px-8 py-8 transition-colors hover:border-ink"
      >
        <div>
          <p class="label text-ink-faint">Reference</p>
          <h2 class="mt-2 font-display text-2xl text-ink">Glossary</h2>
          <p class="mt-2 text-sm text-ink-soft">
            A searchable reference of Jamaican Patois and dancehall
            terminology — sound, dance, style, and everyday speech.
          </p>
        </div>
        <span class="editorial-link shrink-0 text-ink">Browse &rarr;</span>
      </NuxtLink>
    </section>
  </div>
</template>
