<script setup lang="ts">
const AMOUNTS = [25, 50, 100, 250] as const;

const selected = ref<number | "custom">(50);
const customAmount = ref("");

function selectAmount(amount: number) {
  selected.value = amount;
  customAmount.value = "";
}

function selectCustom() {
  selected.value = "custom";
}
</script>

<template>
  <div class="border border-line bg-paper-raised px-6 py-10 sm:px-12 sm:py-14">
    <div class="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
      <div>
        <p class="label mb-4 text-ink-faint">Make a donation</p>
        <h2 class="font-display text-3xl leading-tight text-ink sm:text-4xl">
          Every contribution helps preserve dancehall history
        </h2>
        <p class="mt-5 max-w-md text-sm leading-relaxed text-ink-soft">
          Donations directly fund archival research, digital exhibitions, and
          the ongoing documentation of the artists and culture that built
          dancehall.
        </p>
      </div>

      <div>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <button
            v-for="amount in AMOUNTS"
            :key="amount"
            type="button"
            class="label rounded-full border px-4 py-3 transition-colors"
            :class="
              selected === amount
                ? 'border-ink bg-ink text-paper'
                : 'border-line text-ink-soft hover:border-ink hover:text-ink'
            "
            @click="selectAmount(amount)"
          >
            ${{ amount }}
          </button>
          <button
            type="button"
            class="label col-span-2 rounded-full border px-4 py-3 transition-colors sm:col-span-4"
            :class="
              selected === 'custom'
                ? 'border-ink bg-ink text-paper'
                : 'border-line text-ink-soft hover:border-ink hover:text-ink'
            "
            @click="selectCustom"
          >
            Custom amount
          </button>
        </div>

        <input
          v-if="selected === 'custom'"
          v-model="customAmount"
          type="number"
          min="1"
          placeholder="Enter an amount"
          class="mt-3 w-full border border-line bg-paper px-4 py-2.5 font-sans text-sm text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none"
        />

        <button
          type="button"
          disabled
          title="Online donations are launching soon"
          class="mt-6 w-full cursor-not-allowed border border-ink/30 bg-ink/30 px-6 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-paper"
        >
          Donate{{ selected === "custom" ? (customAmount ? ` $${customAmount}` : "" ) : ` $${selected}` }}
        </button>
        <p class="mt-3 text-xs leading-relaxed text-ink-faint">
          Online donations are launching soon. Check back shortly, or reach
          out via the Contact page to support the museum directly in the
          meantime.
        </p>
      </div>
    </div>
  </div>
</template>
