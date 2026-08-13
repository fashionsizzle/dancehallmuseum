import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/fonts", "@nuxt/image"],

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    families: [
      { name: "Fraunces", provider: "google", global: true },
      { name: "Inter", provider: "google", global: true },
    ],
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/sitemap.xml"],
    },
  },
});
