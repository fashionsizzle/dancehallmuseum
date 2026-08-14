<script setup lang="ts">
import { events } from "~/data/events";

useSeoMeta({
  title: "Events — Dancehall Museum",
  description: "Upcoming exhibitions, screenings, and programming from Dancehall Museum.",
});
</script>

<template>
  <div>
    <PageHero
      kicker="Events"
      title="Exhibitions, screenings & programming"
      dek="Dancehall Museum's public programming — in-person and virtual events connected to the archive."
    />

    <section class="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10">
      <div v-if="events.length" class="divide-y divide-line border-t border-line">
        <div v-for="ev in events" :key="ev.slug" class="flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
          <div>
            <p class="label text-ink-faint">{{ ev.date }} &middot; {{ ev.location }}</p>
            <h2 class="mt-2 font-display text-2xl leading-tight text-ink sm:text-3xl">{{ ev.title }}</h2>
            <p class="mt-2 max-w-xl text-sm text-ink-soft">{{ ev.description }}</p>
          </div>
          <a v-if="ev.link" :href="ev.link" target="_blank" rel="noopener noreferrer" class="editorial-link shrink-0 text-ink">Details</a>
        </div>
      </div>

      <Reveal v-else class="border border-line px-8 py-16 text-center">
        <p class="label mb-4 text-ink-faint">No events scheduled</p>
        <p class="mx-auto max-w-md text-lg leading-relaxed text-ink-soft">
          There are no upcoming exhibitions or screenings on the calendar
          right now. Check back soon, or subscribe to the
          <NuxtLink to="/journal" class="underline decoration-line underline-offset-4 hover:text-ink">Journal</NuxtLink>
          for updates.
        </p>
      </Reveal>
    </section>
  </div>
</template>
