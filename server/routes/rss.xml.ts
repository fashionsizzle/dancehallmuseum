import { journalPosts } from "../../app/data/journal";

const SITE_URL = "https://dancehallmuseum.org";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export default defineEventHandler((event) => {
  const sorted = [...journalPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  const items = sorted
    .map((p) => {
      const url = `${SITE_URL}/journal/${p.slug}`;
      const pubDate = new Date(`${p.date}T00:00:00Z`).toUTCString();
      return `  <item>
    <title>${escapeXml(p.title)}</title>
    <link>${url}</link>
    <guid isPermaLink="true">${url}</guid>
    <pubDate>${pubDate}</pubDate>
    <description>${escapeXml(p.dek || p.title)}</description>
  </item>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Dancehall Museum Journal</title>
    <link>${SITE_URL}/journal</link>
    <description>Long-form research and essays from Dancehall Museum — dancehall history, artists, fashion, language, dance, and Jamaican cultural influence.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;

  setHeader(event, "content-type", "application/rss+xml; charset=utf-8");
  return body;
});
