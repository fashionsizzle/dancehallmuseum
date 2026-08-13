<script setup lang="ts">
withDefaults(defineProps<{ size?: "sm" | "md" }>(), { size: "sm" });
</script>

<template>
  <span
    aria-hidden="true"
    class="inline-flex shrink-0 items-center gap-[3px] align-middle"
    :class="size === 'sm' ? 'h-[7px]' : 'h-[9px]'"
  >
    <span class="block w-[3px] rounded-full bg-rasta-green" style="height: 100%" />
    <span class="block w-[3px] rounded-full bg-rasta-gold" style="height: 100%" />
    <span class="block w-[3px] rounded-full bg-rasta-red" style="height: 100%" />
  </span>
</template>
