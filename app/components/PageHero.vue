<script setup lang="ts">
withDefaults(
  defineProps<{
    kicker: string;
    title: string;
    dek?: string;
    image?: string | null;
  }>(),
  { dek: "", image: null },
);
</script>

<template>
  <section class="mx-auto max-w-[1400px] px-6 pb-16 pt-36 sm:px-10 sm:pt-44">
    <Reveal>
      <p class="label mb-6 inline-flex items-center gap-2">
        <RastaMark />
        {{ kicker }}
      </p>
      <h1 class="max-w-3xl font-display text-5xl leading-[0.98] sm:text-7xl">{{ title }}</h1>
      <p v-if="dek" class="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">{{ dek }}</p>
      <p class="label mt-10 text-ink-faint">Curated by YardRock TV &middot; Researched by The Reggae Institute</p>
    </Reveal>

    <Reveal v-if="image" :delay="0.1" class="mt-16">
      <NuxtImg
        :src="image"
        :alt="title"
        format="webp"
        quality="82"
        loading="lazy"
        sizes="100vw sm:1400px"
        class="max-h-[560px] w-full object-cover object-top"
      />
    </Reveal>
    <Reveal v-else :delay="0.1" class="mt-16">
      <PlaceholderPlate :label="title" class="max-h-[560px]" />
    </Reveal>
  </section>
</template>
