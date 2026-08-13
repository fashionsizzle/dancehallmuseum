<template>
  <div class="min-h-full">
    <a href="#main-content" class="skip-link">Skip to content</a>
    <SiteHeader />
    <main id="main-content" tabindex="-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
