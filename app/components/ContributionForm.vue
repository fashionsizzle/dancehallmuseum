<script setup lang="ts">
const TYPES = ["Photographs", "Flyers & Posters", "Video / VHS", "Oral History", "Memorabilia", "Other"] as const;

const form = reactive({
  name: "",
  email: "",
  type: TYPES[0] as string,
  description: "",
});

const sent = ref(false);
const pending = ref(false);
const error = ref(false);

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");
}

async function submit() {
  if (!form.name || !form.email || !form.description) return;
  pending.value = true;
  error.value = false;
  try {
    const res = await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contribution", ...form }),
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
  <div class="border border-line bg-paper-raised px-6 py-10 sm:px-12 sm:py-14">
    <div class="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
      <div>
        <p class="label mb-4 text-ink-faint">Contribute to the archive</p>
        <h2 class="font-display text-3xl leading-tight text-ink sm:text-4xl">
          Help us preserve dancehall's history
        </h2>
        <p class="mt-5 max-w-md text-sm leading-relaxed text-ink-soft">
          Have photographs, flyers, video, memorabilia, or a story to share?
          Tell us about it below — a member of the research team will follow
          up about next steps.
        </p>
      </div>

      <div v-if="sent" class="flex items-center border border-line px-6 py-8 text-sm text-ink-soft">
        Thank you — your submission has been received. Someone from the museum will be in touch.
      </div>

      <form v-else class="flex flex-col gap-4" @submit.prevent="submit">
        <div class="grid gap-4 sm:grid-cols-2">
          <input
            v-model="form.name"
            type="text"
            required
            placeholder="Your name"
            class="w-full border border-line bg-paper px-4 py-2.5 font-sans text-sm text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none"
          />
          <input
            v-model="form.email"
            type="email"
            required
            placeholder="Email address"
            class="w-full border border-line bg-paper px-4 py-2.5 font-sans text-sm text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none"
          />
        </div>

        <select
          v-model="form.type"
          class="w-full border border-line bg-paper px-4 py-2.5 font-sans text-sm text-ink focus:border-ink focus:outline-none"
        >
          <option v-for="t in TYPES" :key="t" :value="t">{{ t }}</option>
        </select>

        <textarea
          v-model="form.description"
          required
          rows="4"
          placeholder="Tell us what you'd like to contribute…"
          class="w-full border border-line bg-paper px-4 py-2.5 font-sans text-sm text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none"
        />

        <button
          type="submit"
          :disabled="pending"
          class="self-start border border-ink bg-ink px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-paper hover:text-ink disabled:opacity-50"
        >
          {{ pending ? "Sending…" : "Submit Contribution" }}
        </button>
        <p v-if="error" class="text-xs text-rasta-red">Something went wrong — please try again.</p>
      </form>
    </div>
  </div>
</template>
