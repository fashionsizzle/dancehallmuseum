<script setup lang="ts">
import { pageContent } from "~/data/pages";
import { stripPageHeader } from "~/lib/content-utils";

const page = pageContent.support;
const blocks = stripPageHeader(page.blocks);

useSeoMeta({
  title: "Support — Dancehall Museum",
  description:
    "Support Dancehall Museum's mission to preserve, interpret, and elevate Jamaica's dancehall culture for future generations.",
});
</script>

<template>
  <div>
    <PageHero
      kicker="Support the museum"
      title="Help sustain the archive"
      dek="Support for Dancehall Museum sustains its mission and strengthens the preservation of one of Jamaica's most influential cultural movements."
    />

    <section class="mx-auto max-w-[1400px] px-6 pb-20 sm:px-10">
      <Reveal><DonationBox /></Reveal>
    </section>

    <section class="mx-auto max-w-3xl px-6 pb-28 sm:px-10">
      <Reveal><ContentBlocks :blocks="blocks" /></Reveal>
    </section>
  </div>
</template>
