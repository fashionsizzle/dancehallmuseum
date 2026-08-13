<script setup lang="ts">
import type { Exhibition } from "~/data/exhibitions";
import { toRoman } from "~/lib/content-utils";

defineProps<{
  exhibition: Exhibition;
  index: number;
  total: number;
}>();
</script>

<template>
  <section :id="exhibition.slug" class="hairline-grid border-t border-line">
    <div class="mx-auto grid max-w-[1400px] gap-x-6 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1fr_auto_1fr]">
      <div class="flex flex-col justify-center py-6">
        <Reveal>
          <p class="label inline-flex items-center gap-2 text-ink-faint">
            <RastaMark />
            Exhibit &middot; {{ exhibition.title.split(":")[0] }}
          </p>
          <h2 class="mt-6 max-w-lg font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
            {{ exhibition.title }}
          </h2>
          <p class="mt-8 max-w-md text-base leading-relaxed text-ink-soft">{{ exhibition.dek }}</p>

          <ul class="mt-10 flex max-w-md flex-wrap gap-2">
            <li
              v-for="h in exhibition.highlights"
              :key="h"
              class="label rounded-full border border-line px-3 py-1.5 text-ink-soft"
            >
              {{ h }}
            </li>
          </ul>
        </Reveal>
      </div>

      <div class="hidden items-center justify-center py-6 lg:flex">
        <span class="rotated-index text-ink-faint">{{ toRoman(index) }} / {{ toRoman(total) }}</span>
      </div>

      <Reveal :delay="0.1" class="py-6" as="div">
        <div class="aspect-[4/5] overflow-hidden lg:aspect-[3/4]">
          <NuxtImg
            v-if="exhibition.image"
            :src="exhibition.image"
            :alt="exhibition.title"
            format="webp"
            quality="82"
            loading="lazy"
            sizes="100vw lg:600px"
            class="h-full w-full object-cover object-top"
          />
          <PlaceholderPlate v-else :label="exhibition.title" class="h-full" />
        </div>
      </Reveal>
    </div>
  </section>
</template>
