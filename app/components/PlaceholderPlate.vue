<script setup lang="ts">
const props = withDefaults(
  defineProps<{ label: string; variant?: 0 | 1 | 2 | 3; dark?: boolean; hideLabel?: boolean }>(),
  { variant: 0, dark: false, hideLabel: false },
);

// Deterministic pick so the same label always renders the same motif.
const v = computed(() => props.variant ?? Math.abs(hash(props.label)) % 4);

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return h;
}
</script>

<template>
  <div
    class="relative flex aspect-[4/5] w-full items-end overflow-hidden"
    :class="dark ? 'bg-noir' : 'bg-paper-raised border border-line'"
  >
    <svg class="absolute inset-0 h-full w-full" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <!-- concentric rings (sound system) -->
      <g v-if="v === 0" :stroke="dark ? '#d9a53f' : '#b8892f'" fill="none" stroke-width="1" opacity="0.55">
        <circle v-for="r in [40, 80, 120, 160, 200]" :key="r" cx="200" cy="220" :r="r" />
      </g>
      <!-- soundwave bars -->
      <g v-else-if="v === 1" :fill="dark ? '#d9a53f' : '#b8892f'" opacity="0.5">
        <rect v-for="(h, i) in [40, 90, 60, 130, 70, 110, 50, 100, 45, 85]" :key="i" :x="30 + i * 34" :y="260 - h" width="14" :height="h" />
      </g>
      <!-- record grooves -->
      <g v-else-if="v === 2" :stroke="dark ? '#d9a53f' : '#b8892f'" fill="none" stroke-width="0.8" opacity="0.5">
        <circle cx="200" cy="220" r="150" />
        <circle cx="200" cy="220" r="130" />
        <circle cx="200" cy="220" r="110" />
        <circle cx="200" cy="220" r="90" />
        <circle cx="200" cy="220" r="70" />
        <circle :fill="dark ? '#d9a53f' : '#b8892f'" cx="200" cy="220" r="10" opacity="0.8" />
      </g>
      <!-- diagonal weave (fabric / textile) -->
      <g v-else :stroke="dark ? '#d9a53f' : '#b8892f'" stroke-width="1" opacity="0.4">
        <line v-for="i in 12" :key="i" :x1="-50 + i * 45" y1="0" :x2="-50 + i * 45 + 220" y2="500" />
      </g>
    </svg>
    <div v-if="!hideLabel" class="relative z-10 w-full p-5">
      <p
        class="label"
        :class="dark ? 'text-paper/50' : 'text-ink-faint'"
      >
        {{ label }}
      </p>
    </div>
  </div>
</template>
