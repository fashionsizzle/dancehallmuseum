<script setup lang="ts">
useSeoMeta({
  ogSiteName: "Dancehall Museum",
  ogType: "website",
  ogImage: "https://dancehallmuseum.org/images/og-default.jpg",
  twitterCard: "summary_large_image",
  twitterImage: "https://dancehallmuseum.org/images/og-default.jpg",
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
