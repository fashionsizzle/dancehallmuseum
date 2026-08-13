<script setup lang="ts">
import { Motion } from "motion-v";
import { journalPosts } from "~/data/journal";

const heroLetters = "DANCEHALL".split("");

const heroSection = ref<HTMLElement | null>(null);
const parallax = reactive({ x: 0, y: 0 });
const finePointer = ref(false);

function onHeroMouseMove(e: MouseEvent) {
  if (!finePointer.value || !heroSection.value) return;
  const rect = heroSection.value.getBoundingClientRect();
  parallax.x = (e.clientX - rect.left) / rect.width - 0.5;
  parallax.y = (e.clientY - rect.top) / rect.height - 0.5;
}
function resetParallax() {
  parallax.x = 0;
  parallax.y = 0;
}

function onMagneticMove(e: MouseEvent) {
  if (!finePointer.value) return;
  const el = e.currentTarget as HTMLElement;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left - r.width / 2) * 0.25;
  const y = (e.clientY - r.top - r.height / 2) * 0.5;
  el.style.transform = `translate(${x}px, ${y}px)`;
}
function onMagneticLeave(e: MouseEvent) {
  (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)";
}

onMounted(() => {
  finePointer.value = window.matchMedia("(pointer: fine)").matches;
});

useSeoMeta({
  title: "Dancehall Museum — A Digital Archive of Jamaican Dancehall Culture",
  description:
    "Dancehall Museum preserves and interprets Jamaica's dancehall movement — sound systems, fashion, dance, language, and its global influence — curated by YardRock TV and researched by The Reggae Institute.",
});

const sections = [
  {
    label: "About",
    href: "/about",
    copy: "Who we are, and the institutions behind the archive.",
    image: null,
  },
  {
    label: "Exhibitions",
    href: "/exhibitions",
    copy: "Curated digital exhibitions on sound, style, and swagger.",
    image: "/images/770c6eaacf2c2fa7b48f297567285898-1.jpg",
  },
  {
    label: "Collections",
    href: "/collections",
    copy: "Fashion, flyers, photography, sound systems, and oral histories.",
    image: "/images/sWiTrjKQ-scaled-e1605022466911_2023-03-27-132921_juvl-1.jpeg",
  },
  {
    label: "Artists",
    href: "/artists",
    copy: "An alphabetical archive of the people who built the culture.",
    image: null,
  },
  {
    label: "Learn",
    href: "/learn",
    copy: "Dancehall 101 — sound systems, patois, style, and global reach.",
    image: "/images/sound-system.webp",
  },
  {
    label: "Journal",
    href: "/journal",
    copy: "Long-form research on the artists and eras who shaped the culture.",
    image: "/images/Dancehall-Queen-Carlene-961x1200-1.webp",
  },
  {
    label: "Donate",
    href: "/support",
    copy: "Help sustain the preservation of dancehall's living archive.",
    image: null,
  },
];

const featured = journalPosts.slice(0, 3);
</script>

<template>
  <div>
    <!-- HERO -->
    <section
      ref="heroSection"
      class="relative grid min-h-screen bg-noir text-paper lg:grid-cols-2"
      data-theme="dark"
      @mousemove="onHeroMouseMove"
      @mouseleave="resetParallax"
    >
      <!-- Smokey side -->
      <div class="relative order-1 flex flex-col justify-end overflow-hidden px-6 py-16 sm:px-10 sm:py-20 lg:py-0">
        <div
          class="grain grain-dark absolute inset-0"
          style="background: radial-gradient(ellipse 90% 70% at 20% 30%, rgba(217,165,63,0.08), transparent 55%), radial-gradient(ellipse 80% 60% at 80% 90%, rgba(0,0,0,0.5), transparent 60%), var(--color-noir)"
        />
        <div
          class="pointer-events-none absolute inset-y-0 right-0 hidden w-20 bg-gradient-to-r from-transparent via-noir/50 to-noir lg:block"
        />

        <div
          class="relative z-10 transition-transform duration-700 ease-out"
          :style="{ transform: `translate(${parallax.x * -14}px, ${parallax.y * -10}px)` }"
        >
          <Motion
            as="p"
            class="label inline-flex items-center gap-2 text-paper/60"
            :initial="{ opacity: 0, y: -12 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.15 }"
          >
            <RastaMark />
            Digital Museum &middot; Jamaica, New York
          </Motion>

          <h1 class="mt-6 font-display leading-[0.9] tracking-tight">
            <span class="flex flex-nowrap text-[clamp(2.6rem,7.6vw,7.5rem)]">
              <span v-for="(letter, i) in heroLetters" :key="i" class="inline-block overflow-hidden">
                <Motion
                  as="span"
                  class="inline-block"
                  :initial="{ y: '110%', opacity: 0 }"
                  :animate="{ y: '0%', opacity: 1 }"
                  :transition="{ duration: 0.7, delay: 0.35 + i * 0.045, ease: [0.16, 1, 0.3, 1] }"
                >
                  {{ letter }}
                </Motion>
              </span>
            </span>
            <Motion
              as="span"
              class="mt-2 block font-sans text-[0.85rem] font-semibold uppercase tracking-[0.5em] text-paper/60"
              :initial="{ opacity: 0, y: 10 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.6, delay: 0.75 }"
            >
              Museum
            </Motion>
          </h1>

          <Motion
            as="p"
            class="mt-8 max-w-md text-lg leading-relaxed text-paper/80"
            :initial="{ opacity: 0, x: -12 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.6, delay: 0.85 }"
          >
            A living cultural archive — preserving and interpreting Jamaica's
            dancehall movement, from Kingston's sound systems to its
            worldwide influence on fashion, language, and style.
          </Motion>

          <Motion
            as="div"
            class="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
            :initial="{ opacity: 0, y: 12 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 1.05 }"
          >
            <NuxtLink
              to="/exhibitions"
              class="editorial-link inline-flex shrink-0 text-paper transition-transform duration-300 ease-out"
              @mousemove="onMagneticMove"
              @mouseleave="onMagneticLeave"
            >
              Enter the Museum
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" stroke-width="1.3" />
              </svg>
            </NuxtLink>
            <a
              href="https://thereggaemuseum.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="editorial-link inline-flex shrink-0 text-paper/70 transition-transform duration-300 ease-out hover:text-paper"
              @mousemove="onMagneticMove"
              @mouseleave="onMagneticLeave"
            >
              The Reggae Museum
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" stroke-width="1.3" />
              </svg>
            </a>
          </Motion>
        </div>
      </div>

      <!-- Full, uncropped image side -->
      <div class="relative order-2 min-h-[50vh] overflow-hidden bg-noir lg:min-h-screen">
        <div
          class="h-full w-full transition-transform duration-700 ease-out"
          :style="{ transform: `translate(${parallax.x * -22}px, ${parallax.y * -14}px)` }"
        >
          <Motion
            as="div"
            class="hero-float h-full w-full"
            :initial="{ opacity: 0, x: 60 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }"
          >
            <OnionSkinStack
              image="/images/hero.jpg"
              alt="Dancehall artist in an elaborate blue crystal-embellished editorial look"
            />
          </Motion>
        </div>
        <div
          class="pointer-events-none absolute inset-y-0 left-0 hidden w-24 backdrop-blur-md lg:block"
          style="mask-image: linear-gradient(to right, black, transparent); -webkit-mask-image: linear-gradient(to right, black, transparent)"
        />
        <div
          class="pointer-events-none absolute inset-y-0 left-0 hidden w-20 bg-gradient-to-l from-transparent via-noir/50 to-noir lg:block"
        />
        <div class="pointer-events-none absolute inset-x-0 top-0 hidden h-16 bg-gradient-to-b from-noir to-transparent lg:block" />
      </div>
    </section>

    <!-- SEARCH -->
    <section class="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 sm:py-24">
      <Reveal class="flex flex-col items-center text-center">
        <p class="label mb-5">Search the archive</p>
        <SiteSearch />
      </Reveal>
    </section>

    <div class="rule mx-auto max-w-[1400px]" />

    <!-- MISSION STATEMENT -->
    <section class="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
      <Reveal>
        <p class="label mb-6">The central idea</p>
        <p class="max-w-4xl font-display text-3xl leading-[1.15] text-ink sm:text-5xl">
          Dancehall is more than a genre of music — it's a cultural system
          built through Jamaican communities, sound systems, dance spaces,
          language, fashion, and identity.
        </p>
      </Reveal>
    </section>

    <div class="rule mx-auto max-w-[1400px]" />

    <!-- SIX SECTIONS -->
    <section class="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
      <Reveal>
        <p class="label mb-4 text-center">Explore the museum</p>
        <h2 class="mx-auto max-w-2xl text-center font-display text-4xl leading-tight sm:text-5xl">
          Seven ways into the archive
        </h2>
      </Reveal>

      <Reveal :delay="0.1">
        <TiltedCarousel :items="sections" class="mt-16" />
      </Reveal>
    </section>

    <!-- EDITORIAL QUOTE -->
    <section class="hairline-grid border-y border-line">
      <div class="mx-auto grid max-w-[1400px] gap-x-10 gap-y-12 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-2">
        <Reveal>
          <div class="aspect-[3/4]">
            <NuxtImg
              src="/images/story-dnc-MK_Supercat-_V8A3835-Edit-2-768x1152.webp"
              alt="Portrait from the Dancehall Museum archive"
              format="webp"
              quality="82"
              loading="lazy"
              sizes="100vw lg:600px"
              class="h-full w-full object-cover object-top"
            />
          </div>
        </Reveal>
        <Reveal :delay="0.1" class="flex flex-col justify-center">
          <p class="label mb-6 text-ink-faint">From the Journal</p>
          <h2 class="max-w-lg font-display text-3xl leading-[1.15] text-ink sm:text-4xl">
            The architecture of sound
          </h2>
          <p class="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
            &ldquo;The Jamaican sound system is one of the great inventions of
            modern Black culture: a mobile architecture of sound,
            performance, technology, community, competition, and public
            imagination.&rdquo;
          </p>
          <NuxtLink
            to="/journal/sound-system-culture-in-jamaica-the-foundation-of-dancehall"
            class="editorial-link mt-10 inline-flex text-ink"
          >
            Read the essay
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
              <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" stroke-width="1.3" />
            </svg>
          </NuxtLink>
        </Reveal>
      </div>
    </section>

    <!-- JOURNAL TEASER -->
    <section class="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
      <Reveal>
        <div class="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p class="label mb-4">From the Journal</p>
            <h2 class="max-w-xl font-display text-4xl leading-tight sm:text-5xl">
              Research, essays, and artist histories
            </h2>
          </div>
          <NuxtLink to="/journal" class="editorial-link">All journal entries</NuxtLink>
        </div>
      </Reveal>

      <div class="mt-16 grid gap-10 sm:grid-cols-3">
        <Reveal v-for="(post, i) in featured" :key="post.slug" :delay="0.05 * i" as="div">
          <NuxtLink :to="`/journal/${post.slug}`" class="block">
            <OverlayCard :image="post.images[0]" :label="post.date" :title="post.title" />
          </NuxtLink>
        </Reveal>
      </div>
    </section>

    <!-- SUPPORT CTA -->
    <section class="border-t border-line bg-paper-raised py-28">
      <div class="mx-auto max-w-[1400px] px-6 text-center sm:px-10">
        <Reveal>
          <p class="label mb-6">Support the mission</p>
          <h2 class="mx-auto max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Help preserve the sound, style, and legacy of dancehall.
          </h2>
          <NuxtLink
            to="/support"
            class="mt-10 inline-flex border border-ink px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Donate to Dancehall Museum
          </NuxtLink>
        </Reveal>
      </div>
    </section>
  </div>
</template>
