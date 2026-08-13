<script setup lang="ts">
import { Motion } from "motion-v";

withDefaults(defineProps<{ delay?: number; as?: string }>(), {
  delay: 0,
  as: "div",
});
</script>

<template>
  <Motion
    :as="as"
    :initial="{ opacity: 1, y: 22 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :viewport="{ once: true, margin: '-80px' }"
    :transition="{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }"
  >
    <slot />
  </Motion>
</template>
