<script setup lang="ts">
type Slide = { kicker: string; title: string; dek: string; href: string; image: string | null };

const props = defineProps<{ slides: Slide[] }>();

const active = ref(0);
const count = computed(() => props.slides.length);

function next() {
  active.value = (active.value + 1) % count.value;
}
function prev() {
  active.value = (active.value - 1 + count.value) % count.value;
}

const current = computed(() => props.slides[active.value]);
</script>

<template>
  <div class="relative">
    <div class="aspect-[16/10] overflow-hidden bg-paper-raised sm:aspect-[16/8]">
      <img
        v-if="current.image"
        :key="current.image"
        :src="current.image"
        :alt="current.title"
        loading="lazy"
        class="h-full w-full object-cover object-top"
      />
      <PlaceholderPlate v-else :label="current.title" class="h-full" />
    </div>

    <div class="absolute inset-x-6 bottom-0 flex justify-start sm:inset-x-10 sm:bottom-10">
      <div class="w-full max-w-md border-t-4 border-brass bg-noir p-8 text-paper sm:p-10">
        <p class="label text-paper/60">{{ current.kicker }}</p>
        <h3 class="mt-4 font-display text-2xl leading-tight sm:text-3xl">{{ current.title }}</h3>
        <p class="mt-4 max-w-sm text-sm leading-relaxed text-paper/75">{{ current.dek }}</p>
        <NuxtLink :to="current.href" class="editorial-link mt-6 inline-flex text-paper">
          Learn more
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
            <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" stroke-width="1.3" />
          </svg>
        </NuxtLink>
      </div>
    </div>

    <div class="absolute left-6 top-6 flex gap-2 sm:left-10 sm:top-10">
      <button
        type="button"
        aria-label="Previous slide"
        class="flex h-10 w-10 items-center justify-center border border-paper/30 bg-noir/40 text-paper backdrop-blur-sm transition-colors hover:bg-noir/70"
        @click="prev"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        class="flex h-10 w-10 items-center justify-center border border-paper/30 bg-noir/40 text-paper backdrop-blur-sm transition-colors hover:bg-noir/70"
        @click="next"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>
    </div>

    <div class="absolute bottom-6 right-6 flex gap-2 sm:bottom-10 sm:right-10">
      <button
        v-for="(s, i) in slides"
        :key="s.href"
        type="button"
        :aria-label="`Go to slide ${i + 1}`"
        class="h-2 w-2 rounded-full transition-colors"
        :class="i === active ? 'bg-paper' : 'bg-paper/35'"
        @click="active = i"
      />
    </div>
  </div>
</template>
