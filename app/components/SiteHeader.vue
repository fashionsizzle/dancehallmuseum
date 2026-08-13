<script setup lang="ts">
import { Motion, AnimatePresence } from "motion-v";
import { NAV, SUPPORT } from "~/lib/content";
import { topics } from "~/data/topics";
import { learnTopics } from "~/data/learn-topics";
import { journalPosts } from "~/data/journal";
import { ERA_ORDER } from "~/data/artists";
import { exhibitions } from "~/data/exhibitions";

type MegaColumn = { label: string; href: string };
type MegaEntry = {
  title: string;
  dek: string;
  columns: MegaColumn[];
  extra?: MegaColumn[];
  viewAll: MegaColumn;
  image: string | null;
};

const MEGA: Record<string, MegaEntry> = {
  "/exhibitions": {
    title: "Exhibitions",
    dek: "Curated digital exhibitions.",
    columns: exhibitions.map((ex) => ({ label: ex.title.split(":")[0].split("(")[0].trim(), href: `/exhibitions#${ex.slug}` })),
    extra: [{ label: "Virtual Dancehall — Timeline Corridor", href: "/exhibitions/virtual-dancehall" }],
    viewAll: { label: "View all exhibitions", href: "/exhibitions" },
    image: "/images/770c6eaacf2c2fa7b48f297567285898-1.jpg",
  },
  "/collections": {
    title: "Collections",
    dek: "Browse the archive by theme.",
    columns: topics.map((t) => ({ label: t.shortLabel, href: `/collections/${t.slug}` })),
    viewAll: { label: "View all collections", href: "/collections" },
    image: "/images/sound-system.webp",
  },
  "/artists": {
    title: "Artist Archive",
    dek: "Browse the archive by era.",
    columns: ERA_ORDER.map((era) => ({ label: era, href: `/artists?era=${encodeURIComponent(era)}` })),
    viewAll: { label: "View full archive", href: "/artists" },
    image: "/images/story-dnc-MK_Supercat-_V8A3835-Edit-2-768x1152.webp",
  },
  "/learn": {
    title: "Learn",
    dek: "Dancehall 101 lessons.",
    columns: learnTopics.map((t) => ({ label: t.title, href: `/learn/${t.slug}` })),
    extra: [
      { label: "Glossary", href: "/learn/glossary" },
      { label: "From Slavery to Dancehall", href: "/learn/from-slavery-to-dancehall" },
    ],
    viewAll: { label: "View all lessons", href: "/learn" },
    image: "/images/sound-system-768x587.webp",
  },
  "/journal": {
    title: "Journal",
    dek: "Recent from the archive.",
    columns: journalPosts.slice(0, 6).map((p) => ({ label: p.title, href: `/journal/${p.slug}` })),
    viewAll: { label: "View all entries", href: "/journal" },
    image: journalPosts[0]?.images[0] ?? null,
  },
};

const scrolled = ref(false);
const open = ref(false);
const megaOpen = ref<string | null>(null);
let closeTimer: ReturnType<typeof setTimeout> | null = null;

function openMega(href: string) {
  if (!MEGA[href]) return;
  if (closeTimer) clearTimeout(closeTimer);
  megaOpen.value = href;
}
function scheduleClose() {
  if (closeTimer) clearTimeout(closeTimer);
  closeTimer = setTimeout(() => {
    megaOpen.value = null;
  }, 120);
}
function cancelClose() {
  if (closeTimer) clearTimeout(closeTimer);
}

function onScroll() {
  scrolled.value = window.scrollY > 24;
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

watch(open, (v) => {
  document.body.style.overflow = v ? "hidden" : "";
});

const allLinks = [...NAV, SUPPORT];
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
    <div
      class="mx-auto flex max-w-4xl items-center justify-between gap-2 rounded-full border border-white/60 bg-white/70 py-2 pl-5 pr-2 shadow-[0_8px_30px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-shadow duration-300"
      :class="scrolled ? 'bg-white/85 shadow-[0_8px_30px_rgba(0,0,0,0.16)]' : ''"
    >
      <NuxtLink to="/" class="shrink-0 font-display text-base leading-none tracking-tight text-ink">
        Dancehall
        <span class="ml-1 align-middle text-[0.55rem] font-sans font-semibold uppercase tracking-[0.2em] text-ink-faint">
          Museum
        </span>
      </NuxtLink>

      <nav class="hidden items-center gap-1 md:flex">
        <div
          v-for="item in NAV"
          :key="item.href"
          class="relative"
          @mouseenter="openMega(item.href)"
          @mouseleave="scheduleClose"
        >
          <NuxtLink
            :to="item.href"
            class="flex items-center gap-1.5 rounded-full px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
            :class="megaOpen === item.href ? 'bg-noir text-paper' : 'text-ink-soft hover:text-ink'"
            @click="megaOpen = null"
          >
            {{ item.label }}
            <svg
              v-if="MEGA[item.href]"
              width="9"
              height="9"
              viewBox="0 0 24 24"
              fill="none"
              class="transition-transform duration-200"
              :class="megaOpen === item.href ? 'rotate-180' : ''"
            >
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </NuxtLink>
        </div>
      </nav>

      <NuxtLink
        :to="SUPPORT.href"
        class="hidden shrink-0 rounded-full bg-ink px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-brass md:inline-flex"
      >
        {{ SUPPORT.label }}
      </NuxtLink>

      <button
        type="button"
        class="rounded-full px-3 py-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ink md:hidden"
        aria-label="Open menu"
        @click="open = true"
      >
        Menu
      </button>
    </div>

    <AnimatePresence>
      <Motion
        v-if="megaOpen && MEGA[megaOpen]"
        as="div"
        class="mx-auto mt-3 max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-noir/90 text-paper shadow-2xl backdrop-blur-2xl"
        :initial="{ opacity: 0, y: -10 }"
        :animate="{ opacity: 1, y: 0 }"
        :exit="{ opacity: 0, y: -10 }"
        :transition="{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }"
        @mouseenter="cancelClose"
        @mouseleave="scheduleClose"
      >
        <div class="flex flex-col gap-8 p-8 sm:flex-row sm:items-start sm:justify-between sm:p-10">
          <div class="flex-1">
            <p class="label text-paper/50">{{ MEGA[megaOpen].title }}</p>
            <ul class="mt-4 grid gap-x-8 sm:grid-cols-2" :class="MEGA[megaOpen].columns.length > 6 ? 'sm:grid-cols-2' : ''">
              <li v-for="col in MEGA[megaOpen].columns" :key="col.href">
                <NuxtLink
                  :to="col.href"
                  class="block truncate rounded-lg py-1.5 font-display text-lg text-paper/90 transition-colors hover:text-brass-bright"
                  @click="megaOpen = null"
                >
                  {{ col.label }}
                </NuxtLink>
              </li>
            </ul>
            <div v-if="MEGA[megaOpen].extra" class="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5">
              <NuxtLink
                v-for="ex in MEGA[megaOpen].extra"
                :key="ex.href"
                :to="ex.href"
                class="text-xs font-semibold uppercase tracking-[0.1em] text-paper/60 transition-colors hover:text-paper"
                @click="megaOpen = null"
              >
                {{ ex.label }}
              </NuxtLink>
            </div>
            <NuxtLink :to="MEGA[megaOpen].viewAll.href" class="editorial-link mt-8 inline-flex text-paper" @click="megaOpen = null">
              {{ MEGA[megaOpen].viewAll.label }} &rarr;
            </NuxtLink>
          </div>

          <div class="hidden w-[260px] shrink-0 overflow-hidden rounded-2xl sm:block">
            <img
              v-if="MEGA[megaOpen].image"
              :src="MEGA[megaOpen].image"
              :alt="MEGA[megaOpen].title"
              loading="lazy"
              class="aspect-[4/3] w-full object-cover object-top"
            />
            <PlaceholderPlate v-else :label="MEGA[megaOpen].title" hide-label dark class="aspect-[4/3] h-full" />
          </div>
        </div>
      </Motion>
    </AnimatePresence>
  </header>

  <AnimatePresence>
    <Motion
      v-if="open"
      as="div"
      class="fixed inset-0 z-[80] bg-noir text-paper"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      :transition="{ duration: 0.35 }"
    >
      <div class="flex items-center justify-between px-6 py-5 sm:px-10">
        <span class="font-display text-lg">Dancehall Museum</span>
        <button
          type="button"
          class="font-sans text-xs font-semibold uppercase tracking-[0.2em]"
          aria-label="Close menu"
          @click="open = false"
        >
          Close
        </button>
      </div>

      <nav class="mt-12 flex flex-col gap-1 px-6 sm:px-10">
        <Motion
          v-for="(item, i) in allLinks"
          :key="item.href"
          as="div"
          :initial="{ opacity: 0, y: 16 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.08 + i * 0.05, duration: 0.4 }"
        >
          <NuxtLink
            :to="item.href"
            class="flex items-baseline justify-between border-b border-white/15 py-5"
            @click="open = false"
          >
            <span class="font-display text-4xl">{{ item.label }}</span>
            <span class="font-sans text-xs tracking-[0.2em] text-white/40">0{{ i + 1 }}</span>
          </NuxtLink>
        </Motion>
      </nav>
    </Motion>
  </AnimatePresence>
</template>
