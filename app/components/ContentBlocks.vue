<script setup lang="ts">
import type { ContentBlock } from "~/data/journal";

defineProps<{ blocks: ContentBlock[] }>();
</script>

<template>
  <div class="prose-museum">
    <template v-for="(block, i) in blocks" :key="i">
      <h2 v-if="block.type === 'h1' || block.type === 'h2'">{{ block.text }}</h2>
      <h3 v-else-if="block.type === 'h3'">{{ block.text }}</h3>
      <h4 v-else-if="block.type === 'h4'" class="text-lg">{{ block.text }}</h4>
      <li v-else-if="block.type === 'li'">{{ block.text }}</li>
      <p v-else>{{ block.text }}</p>
    </template>
  </div>
</template>
