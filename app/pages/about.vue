<script setup lang="ts">
import { pageContent } from "~/data/pages";
import { stripPageHeader } from "~/lib/content-utils";

const page = pageContent.about;
const blocks = stripPageHeader(page.blocks);

useSeoMeta({
  title: "About — Dancehall Museum",
  description:
    "Dancehall Museum is a digital institution preserving, interpreting, and celebrating Jamaica's dancehall culture — curated by YardRock TV and researched by The Reggae Institute.",
});
</script>

<template>
  <div>
    <PageHero
      kicker="About the museum"
      title="A digital museum of Jamaican dancehall culture"
      dek="Dancehall Museum preserves, interprets, and elevates one of Jamaica's most influential cultural movements — its sound, style, language, and global reach."
    />

    <section class="mx-auto max-w-3xl px-6 pb-28 sm:px-10">
      <Reveal><ContentBlocks :blocks="blocks" /></Reveal>
    </section>
  </div>
</template>
