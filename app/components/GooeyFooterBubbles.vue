<script setup lang="ts">
// Deterministic pseudo-random (not Math.random()) so SSR and client hydration
// always produce identical values — avoids hydration mismatches.
function seeded(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

const bubbles = Array.from({ length: 60 }, (_, i) => ({
  size: (2 + seeded(i, 1) * 3.5).toFixed(2),
  distance: (5 + seeded(i, 2) * 3.5).toFixed(2),
  position: (-5 + seeded(i, 3) * 110).toFixed(1),
  time: (2.5 + seeded(i, 4) * 2.2).toFixed(2),
  delay: (-1 * (2.5 + seeded(i, 5) * 2.2)).toFixed(2),
}));
</script>

<template>
  <div class="gooey-wrap" aria-hidden="true">
    <div class="gooey-bubbles">
      <span
        v-for="(b, i) in bubbles"
        :key="i"
        class="gooey-bubble"
        :style="{
          '--size': `${b.size}rem`,
          '--distance': `${b.distance}rem`,
          '--position': `${b.position}%`,
          '--time': `${b.time}s`,
          '--delay': `${b.delay}s`,
        }"
      />
    </div>
    <svg width="0" height="0" style="position: absolute">
      <defs>
        <filter id="footer-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.gooey-wrap {
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  height: 0;
  pointer-events: none;
}

.gooey-bubbles {
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  height: 0.6rem;
  background: var(--color-brass);
  filter: url("#footer-goo");
}

.gooey-bubble {
  position: absolute;
  left: var(--position, 50%);
  bottom: -3rem;
  width: var(--size, 3rem);
  height: var(--size, 3rem);
  background: var(--color-brass);
  border-radius: 999px;
  transform: translateX(-50%);
  animation:
    gooey-bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s),
    gooey-bubble-rise var(--time, 4s) ease-in infinite var(--delay, 0s);
}

@keyframes gooey-bubble-size {
  0%,
  70% {
    width: var(--size, 3rem);
    height: var(--size, 3rem);
  }
  100% {
    width: 0;
    height: 0;
  }
}

@keyframes gooey-bubble-rise {
  0% {
    bottom: -3rem;
  }
  100% {
    bottom: var(--distance, 6rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .gooey-bubble {
    animation: none;
    opacity: 0;
  }
}
</style>
