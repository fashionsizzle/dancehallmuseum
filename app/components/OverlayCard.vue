<script setup lang="ts">
withDefaults(
  defineProps<{
    image?: string | null;
    label?: string;
    title: string;
    aspect?: string;
  }>(),
  { aspect: "aspect-[4/5]" },
);
</script>

<template>
  <div class="group relative overflow-hidden" :class="aspect">
    <NuxtImg
      v-if="image"
      :src="image"
      :alt="title"
      format="webp"
      loading="lazy"
      sizes="100vw sm:50vw lg:33vw"
      class="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
    />
    <PlaceholderPlate v-else :label="title" hide-label dark class="absolute inset-0 h-full w-full" />

    <div class="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/15 to-transparent" />

    <div class="absolute inset-x-0 bottom-0 p-6 text-center text-paper sm:p-8">
      <p v-if="label" class="label text-paper/70">{{ label }}</p>
      <h3 class="mt-2 font-display text-xl leading-snug sm:text-2xl">{{ title }}</h3>
      <slot />
    </div>
  </div>
</template>
