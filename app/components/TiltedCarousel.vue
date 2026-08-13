<script setup lang="ts">
import { Motion } from "motion-v";

type CarouselItem = { label: string; href: string; copy: string; image: string | null };

const props = defineProps<{ items: CarouselItem[] }>();

const activeIndex = ref(Math.min(3, props.items.length - 1));

function toSlide(i: number) {
  activeIndex.value = i;
}
function toPrev() {
  activeIndex.value = Math.max(0, activeIndex.value - 1);
}
function toNext() {
  activeIndex.value = Math.min(props.items.length - 1, activeIndex.value + 1);
}
function onCardClick(i: number) {
  if (i === activeIndex.value) {
    navigateTo(props.items[i].href);
  } else {
    toSlide(i);
  }
}
</script>

<template>
  <div class="select-none overflow-hidden py-4">
    <div class="mx-auto w-[220px] sm:w-[280px]">
      <Motion
        as="div"
        class="flex w-fit items-start"
        :animate="{ x: `${(-activeIndex * 100) / items.length}%` }"
        :transition="{ type: 'spring', bounce: 0.2, duration: 0.8 }"
      >
        <div
          v-for="(item, i) in items"
          :key="item.href"
          class="w-[220px] shrink-0 px-3 sm:w-[280px]"
          style="perspective: 1400px"
        >
          <Motion
            as="div"
            class="flex cursor-pointer flex-col items-center gap-3 will-change-transform"
            :animate="{ rotateY: (activeIndex - i) * 42, scale: activeIndex === i ? 1 : 0.85 }"
            :transition="{ type: 'spring', bounce: 0.1, duration: 1 }"
            @click="onCardClick(i)"
          >
            <div class="aspect-[3/4] w-full overflow-hidden rounded-lg">
              <NuxtImg
                v-if="item.image"
                :src="item.image"
                :alt="item.label"
                format="webp"
                loading="lazy"
                sizes="280px"
                class="h-full w-full object-cover object-top"
              />
              <PlaceholderPlate v-else :label="item.label" hide-label class="h-full" />
            </div>
            <Motion
              as="div"
              class="text-center will-change-[opacity,filter]"
              :animate="{ filter: activeIndex === i ? 'blur(0px)' : 'blur(2px)', opacity: activeIndex === i ? 1 : 0 }"
            >
              <p class="font-display text-lg text-ink">{{ item.label }}</p>
              <p class="mt-1 max-w-[220px] text-xs text-ink-soft">{{ item.copy }}</p>
            </Motion>
          </Motion>
        </div>
      </Motion>
    </div>

    <div
      class="mx-auto mt-10 flex w-fit items-center gap-4 rounded-full border border-line bg-paper/70 px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-md"
    >
      <button type="button" aria-label="Previous" class="rounded-full p-2 text-ink-soft transition-colors hover:text-ink" @click="toPrev">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>
      <div class="flex items-center gap-2">
        <button
          v-for="(item, i) in items"
          :key="item.href"
          type="button"
          :aria-label="`Go to ${item.label}`"
          class="h-2 rounded-full bg-ink transition-[width,opacity] duration-300"
          :class="activeIndex === i ? 'w-7 opacity-100' : 'w-2 opacity-30'"
          @click="toSlide(i)"
        />
      </div>
      <button type="button" aria-label="Next" class="rounded-full p-2 text-ink-soft transition-colors hover:text-ink" @click="toNext">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>
    </div>
  </div>
</template>
