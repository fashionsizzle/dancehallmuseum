import type { ContentBlock } from "~/data/journal";

const CREDIT_LINE = /curated by|researched by/i;

export function stripPageHeader(blocks: ContentBlock[]): ContentBlock[] {
  const rest = blocks[0]?.type === "h2" ? blocks.slice(1) : blocks;
  return rest.filter((b) => !CREDIT_LINE.test(b.text));
}

const ROMAN: [number, string][] = [
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

export function toRoman(n: number): string {
  let rest = n;
  let out = "";
  for (const [value, symbol] of ROMAN) {
    while (rest >= value) {
      out += symbol;
      rest -= value;
    }
  }
  return out;
}
