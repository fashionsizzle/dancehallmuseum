<script setup lang="ts">
import { NAV, SUPPORT, CREDIT } from "~/lib/content";

const BOTTOM_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Artist Archive", href: "/artists" },
  { label: "Journal", href: "/journal" },
  { label: "Donate", href: "/support" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Sitemap", href: "/sitemap" },
] as const;

// NOTE: placeholder hrefs — swap in the museum's real social profile URLs.
const SOCIALS = [
  { name: "Instagram", href: "#" },
  { name: "TikTok", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "X", href: "#" },
] as const;

const email = ref("");
const sent = ref(false);
const pending = ref(false);
const error = ref(false);

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");
}

async function submitNewsletter() {
  if (!email.value) return;
  pending.value = true;
  error.value = false;
  try {
    const res = await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "newsletter", email: email.value }),
    });
    if (!res.ok) throw new Error(String(res.status));
    sent.value = true;
  } catch {
    error.value = true;
  } finally {
    pending.value = false;
  }
}
</script>

<template>
  <footer class="relative border-t border-line bg-paper">
    <div class="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
      <div class="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <RastaMark class="mb-3" />
          <p class="font-display text-2xl text-ink">Dancehall Museum</p>
          <p class="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            A digital museum preserving, documenting, and elevating Jamaican
            dancehall culture — its sound, fashion, dance, language, and
            global influence.
          </p>
          <p class="label mt-6">
            Curated by
            <a :href="CREDIT.curatorUrl" target="_blank" rel="noopener noreferrer" class="underline decoration-line underline-offset-4 hover:text-ink">{{ CREDIT.curator }}</a>
            &middot; Researched by
            <a :href="CREDIT.researchUrl" target="_blank" rel="noopener noreferrer" class="underline decoration-line underline-offset-4 hover:text-ink">{{ CREDIT.research }}</a>
          </p>
        </div>

        <div>
          <p class="label mb-4">Explore</p>
          <ul class="space-y-3">
            <li v-for="item in [...NAV, SUPPORT]" :key="item.href">
              <NuxtLink :to="item.href" class="text-sm text-ink-soft transition-colors hover:text-ink">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <p class="label mb-4">Institution</p>
          <p class="text-sm text-ink-soft">
            <a :href="CREDIT.curatorUrl" target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-ink">{{ CREDIT.curator }}</a><br />
            <a :href="CREDIT.researchUrl" target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-ink">{{ CREDIT.research }}</a>
          </p>
        </div>

        <div>
          <p class="label mb-4">Legal</p>
          <ul class="space-y-3">
            <li><NuxtLink to="/privacy" class="text-sm text-ink-soft transition-colors hover:text-ink">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/terms" class="text-sm text-ink-soft transition-colors hover:text-ink">Terms of Use</NuxtLink></li>
            <li><NuxtLink to="/cookies" class="text-sm text-ink-soft transition-colors hover:text-ink">Cookie Policy</NuxtLink></li>
            <li><NuxtLink to="/accessibility" class="text-sm text-ink-soft transition-colors hover:text-ink">Accessibility</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="rule mt-14" />

      <!-- Socials + newsletter -->
      <div class="grid gap-10 py-12 sm:grid-cols-2 sm:items-start">
        <div class="flex items-center gap-5">
          <a
            v-for="social in SOCIALS"
            :key="social.name"
            :href="social.href"
            :aria-label="social.name"
            class="text-ink-soft transition-colors hover:text-ink"
          >
            <svg v-if="social.name === 'Instagram'" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.6" />
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.6" />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
            </svg>
            <svg v-else-if="social.name === 'TikTok'" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M14 3v10.7a2.9 2.9 0 1 1-2.4-2.86V8.2A5.6 5.6 0 1 0 16.2 13.7V9.8a6.9 6.9 0 0 0 4 1.3V8.4a4.2 4.2 0 0 1-4-4.1V3h-2.2Z"
                stroke="currentColor"
                stroke-width="1.3"
                stroke-linejoin="round"
              />
            </svg>
            <svg v-else-if="social.name === 'YouTube'" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" stroke-width="1.6" />
              <path d="M10.5 9.5 15 12l-4.5 2.5v-5Z" fill="currentColor" />
            </svg>
            <svg v-else-if="social.name === 'Facebook'" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6" />
              <path d="M13.5 8.5h1.5V6h-1.8c-1.6 0-2.7 1.1-2.7 2.8V10H9v2.5h1.5V18h2.4v-5.5h1.7l.3-2.5h-2V9c0-.3.1-.5.6-.5Z" fill="currentColor" />
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 4l16 16M20 4 4 20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
            </svg>
          </a>
        </div>

        <div>
          <div v-if="sent" class="border border-line px-4 py-3 text-sm text-ink-soft">
            Thanks — you're on the list.
          </div>
          <form v-else class="flex flex-col gap-3 sm:flex-row" @submit.prevent="submitNewsletter">
            <input
              v-model="email"
              type="email"
              required
              placeholder="Enter your email"
              class="w-full border border-line bg-paper-raised px-4 py-2.5 font-sans text-sm text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none"
            />
            <button
              type="submit"
              :disabled="pending"
              class="shrink-0 border border-ink bg-ink px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-paper hover:text-ink disabled:opacity-50"
            >
              {{ pending ? "Signing Up…" : "Sign Up" }}
            </button>
          </form>
          <p v-if="error" class="mt-2 text-xs text-rasta-red">Something went wrong — please try again.</p>
          <p class="mt-3 text-xs leading-relaxed text-ink-faint">
            By signing up you agree to our
            <NuxtLink to="/terms" class="underline decoration-line underline-offset-4 hover:text-ink">Terms of Use</NuxtLink>
            and
            <NuxtLink to="/privacy" class="underline decoration-line underline-offset-4 hover:text-ink">Privacy Policy</NuxtLink>.
          </p>
        </div>
      </div>

      <div class="rule mb-8" />

      <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <nav class="flex flex-wrap gap-x-6 gap-y-2">
          <NuxtLink
            v-for="link in BOTTOM_LINKS"
            :key="link.href"
            :to="link.href"
            class="text-xs uppercase tracking-[0.1em] text-ink-soft transition-colors hover:text-ink"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="flex flex-wrap items-center gap-4 text-xs text-ink-faint">
          <span class="font-display text-sm text-ink">Dancehall Museum</span>
          <span>&copy; {{ new Date().getFullYear() }} Dancehall Museum. All rights reserved.</span>
          <span>Jamaica, New York</span>
        </div>
      </div>
    </div>
    <GooeyFooterBubbles />
  </footer>
</template>
