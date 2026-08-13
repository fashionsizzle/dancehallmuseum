import { artists } from "~/data/artists";
import { journalPosts } from "~/data/journal";
import { learnTopics } from "~/data/learn-topics";
import { exhibitions } from "~/data/exhibitions";
import { topics } from "~/data/topics";
import { glossary } from "~/data/glossary";

export type SearchType = "Artist" | "Journal" | "Learn" | "Exhibition" | "Collection" | "Glossary";

export type SearchItem = {
  type: SearchType;
  title: string;
  dek: string;
  href: string;
};

let index: SearchItem[] | null = null;

export function getSearchIndex(): SearchItem[] {
  if (index) return index;

  index = [
    ...artists.map((a) => ({
      type: "Artist" as const,
      title: a.name,
      dek: a.knownFor,
      href: `/artists/${a.slug}`,
    })),
    ...journalPosts.map((p) => ({
      type: "Journal" as const,
      title: p.title,
      dek: p.dek,
      href: `/journal/${p.slug}`,
    })),
    ...learnTopics.map((t) => ({
      type: "Learn" as const,
      title: t.title,
      dek: t.dek,
      href: `/learn/${t.slug}`,
    })),
    ...exhibitions.map((e) => ({
      type: "Exhibition" as const,
      title: e.title,
      dek: e.dek,
      href: `/exhibitions#${e.slug}`,
    })),
    ...topics.map((t) => ({
      type: "Collection" as const,
      title: t.label,
      dek: t.dek,
      href: `/collections/${t.slug}`,
    })),
    ...glossary.map((g) => ({
      type: "Glossary" as const,
      title: g.term,
      dek: g.definition,
      href: `/learn/glossary`,
    })),
  ];

  return index;
}

export function searchArchive(query: string, limit = 8): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchItem[] = [];
  for (const item of getSearchIndex()) {
    if (item.title.toLowerCase().includes(q) || item.dek.toLowerCase().includes(q)) {
      results.push(item);
      if (results.length >= limit) break;
    }
  }
  return results;
}
