<script setup lang="ts">
import { exhibitions } from "~/data/exhibitions";

useSeoMeta({
  title: "Exhibitions — Dancehall Museum",
  description:
    "Curated digital exhibitions from Dancehall Museum — Dancehall & the Digital Revolution, Sound System Culture, Style & Swagger, and Dancehall Queens.",
});
</script>

<template>
  <div>
    <PageHero
      kicker="Exhibitions"
      title="Curated digital exhibitions"
      dek="Exploring the sound, style, movement, and global impact of dancehall through curatorial research, archival material, and oral history."
      image="/images/770c6eaacf2c2fa7b48f297567285898-1.jpg"
    />

    <section class="mx-auto max-w-[1400px] px-6 pb-24 sm:px-10">
      <Reveal>
        <p class="label mb-10 text-ink-faint">All exhibitions</p>
      </Reveal>
      <div class="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-2">
        <Reveal
          v-for="(ex, i) in exhibitions"
          :key="ex.slug"
          :delay="0.04 * i"
          as="div"
          :class="i === 0 ? 'col-span-2 row-span-2' : ''"
        >
          <a :href="`#${ex.slug}`" class="block h-full">
            <OverlayCard :image="ex.image" :title="ex.title" class="h-full" :aspect="i === 0 ? 'aspect-square lg:aspect-auto lg:h-full' : 'aspect-square'" />
          </a>
        </Reveal>
      </div>
    </section>

    <section class="mx-auto max-w-[1400px] px-6 pb-24 sm:px-10">
      <Reveal>
        <NuxtLink
          to="/exhibitions/virtual-dancehall"
          class="group relative block overflow-hidden bg-noir text-paper"
          data-theme="dark"
        >
          <div class="grain grain-dark absolute inset-0 opacity-70" />
          <div class="relative z-10 flex flex-col items-start gap-6 px-8 py-16 sm:px-14 sm:py-24">
            <p class="label inline-flex items-center gap-2 text-paper/60">
              <RastaMark />
              New &middot; Interactive Exhibition
            </p>
            <h2 class="max-w-2xl font-display text-4xl leading-[1.05] sm:text-6xl">Virtual Dancehall</h2>
            <p class="max-w-lg text-lg leading-relaxed text-paper/75">
              Walk a 3D timeline corridor of dancehall photography — from
              sound-system culture to the modern era. Scroll to move through
              time, click any frame to read its story.
            </p>
            <span class="editorial-link inline-flex text-paper transition-transform group-hover:translate-x-1">
              Enter the corridor &rarr;
            </span>
          </div>
        </NuxtLink>
      </Reveal>
    </section>

    <ExhibitionSection
      v-for="(ex, i) in exhibitions"
      :key="ex.slug"
      :exhibition="ex"
      :index="i + 1"
      :total="exhibitions.length"
    />

    <section class="border-t border-line bg-paper-raised py-24">
      <div class="mx-auto grid max-w-[1400px] gap-16 px-6 sm:px-10 lg:grid-cols-2">
        <Reveal>
          <p class="label mb-4 text-ink-faint">A museum without walls</p>
          <h2 class="font-display text-3xl leading-tight text-ink sm:text-4xl">Exhibition approach &amp; digital experience</h2>
          <p class="mt-6 max-w-md text-ink-soft">
            Each exhibition integrates archival materials, photography and
            visual culture, music and sound references, oral histories,
            fashion and performance documentation, and scholarly research —
            grounded in curatorial work by The Reggae Institute. As a digital
            museum, this material is accessible globally: visitors can
            explore curated themes, engage with multimedia content, and
            connect historical context with contemporary culture without the
            limits of a physical space.
          </p>
        </Reveal>
        <Reveal :delay="0.1">
          <p class="label mb-4 text-ink-faint">In development</p>
          <h2 class="font-display text-3xl leading-tight text-ink sm:text-4xl">Upcoming exhibitions</h2>
          <ul class="mt-6 divide-y divide-line border-t border-line">
            <li
              v-for="u in [
                'The Dancehall Body & Movement',
                'Icons of Dancehall Style',
                'Women in Dancehall',
                'Kingston Dance Spaces',
                'Dancehall Media & Television',
                'The Global Dancehall Diaspora',
              ]"
              :key="u"
              class="py-3 text-sm text-ink-soft"
            >
              {{ u }}
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  </div>
</template>
