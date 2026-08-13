<script setup lang="ts">
import { searchArchive, type SearchItem } from "~/lib/search-index";

const query = ref("");
const open = ref(false);
const activeIndex = ref(-1);
const rootEl = ref<HTMLElement | null>(null);

const results = computed<SearchItem[]>(() => searchArchive(query.value));

function onInput() {
  open.value = query.value.trim().length > 0;
  activeIndex.value = -1;
}

function onFocus() {
  if (query.value.trim().length > 0) open.value = true;
}

function close() {
  open.value = false;
  activeIndex.value = -1;
}

function onKeydown(e: KeyboardEvent) {
  if (!open.value || results.value.length === 0) return;
  if (e.key === "ArrowDown") {
    e.preventDefault();
    activeIndex.value = (activeIndex.value + 1) % results.value.length;
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    activeIndex.value = (activeIndex.value - 1 + results.value.length) % results.value.length;
  } else if (e.key === "Escape") {
    close();
  } else if (e.key === "Enter" && activeIndex.value >= 0) {
    e.preventDefault();
    const target = results.value[activeIndex.value];
    if (target) navigateTo(target.href);
    close();
  }
}

function onResultClick() {
  close();
  query.value = "";
}

function onClickOutside(e: MouseEvent) {
  if (rootEl.value && !rootEl.value.contains(e.target as Node)) close();
}

onMounted(() => {
  document.addEventListener("click", onClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", onClickOutside);
});
</script>

<template>
  <div ref="rootEl" class="relative w-full max-w-xl">
    <div class="relative">
      <svg
        class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.6" />
        <path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
      </svg>
      <input
        v-model="query"
        type="search"
        placeholder="Search artists, journal, learn, exhibitions…"
        class="w-full border border-line bg-paper py-3.5 pl-12 pr-4 font-sans text-sm text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none"
        aria-label="Search the archive"
        role="combobox"
        aria-expanded="open"
        aria-haspopup="listbox"
        @input="onInput"
        @focus="onFocus"
        @keydown="onKeydown"
      />
    </div>

    <div
      v-if="open"
      class="absolute inset-x-0 top-full z-30 mt-2 max-h-[28rem] overflow-y-auto border border-line bg-paper shadow-lg"
      role="listbox"
    >
      <NuxtLink
        v-for="(item, i) in results"
        :key="`${item.type}-${item.href}-${item.title}`"
        :to="item.href"
        class="block border-b border-line px-5 py-3.5 last:border-b-0"
        :class="i === activeIndex ? 'bg-paper-raised' : 'hover:bg-paper-raised'"
        role="option"
        @click="onResultClick"
      >
        <p class="label text-ink-faint">{{ item.type }}</p>
        <p class="mt-1 truncate font-display text-lg leading-snug text-ink">{{ item.title }}</p>
        <p class="mt-0.5 line-clamp-1 text-sm text-ink-soft">{{ item.dek }}</p>
      </NuxtLink>

      <p v-if="results.length === 0" class="px-5 py-6 text-center text-sm text-ink-faint">
        No results for &ldquo;{{ query }}&rdquo;
      </p>
    </div>
  </div>
</template>
