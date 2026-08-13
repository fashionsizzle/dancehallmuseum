<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    image: string;
    alt: string;
    layers?: number;
  }>(),
  { layers: 7 },
);

const sceneEl = ref<HTMLElement | null>(null);
const mouseNorm = ref(0.5);
const finePointer = ref(false);

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function onMove(e: MouseEvent) {
  if (!finePointer.value || !sceneEl.value) return;
  const rect = sceneEl.value.getBoundingClientRect();
  mouseNorm.value = clamp((e.clientX - rect.left) / rect.width, 0, 1);
}
function onLeave() {
  mouseNorm.value = 0.5;
}

onMounted(() => {
  finePointer.value = window.matchMedia("(pointer: fine)").matches;
});

const planes = computed(() => {
  const total = props.layers;
  const spacing = 20;
  const focusIndex = mouseNorm.value * (total - 1);
  const spreadLayers = 0.62 * (total - 1);

  return Array.from({ length: total }, (_, i) => {
    const t = total <= 1 ? 0 : i / (total - 1);
    const dist = Math.abs(i - focusIndex);
    const focus = clamp(1 - dist / spreadLayers, 0, 1);
    const fade = focus * focus;

    const opacity = lerp(0.45, 1, fade);
    const blur = lerp(7, 0, focus);

    const tx = lerp(-18, 26, t) - spacing * i;
    const ty = lerp(-14, 10, t);
    const tz = lerp(-280, 140, t);
    const scale = lerp(0.97, 1, t);

    return {
      key: i,
      style: {
        opacity: String(opacity),
        transform: `translate3d(${tx}px, ${ty}px, ${tz}px) scale(${scale})`,
        filter: `blur(${blur}px)`,
        zIndex: String(i),
      },
    };
  });
});
</script>

<template>
  <div
    ref="sceneEl"
    class="relative h-full w-full"
    style="perspective: 1400px"
    @mousemove="onMove"
    @mouseleave="onLeave"
  >
    <div class="relative h-full w-full" style="transform-style: preserve-3d">
      <div
        v-for="plane in planes"
        :key="plane.key"
        class="absolute inset-0 overflow-hidden will-change-transform"
        :style="plane.style"
      >
        <NuxtImg
          :src="image"
          :alt="alt"
          format="webp"
          quality="85"
          loading="eager"
          sizes="100vw md:50vw"
          class="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  </div>
</template>
