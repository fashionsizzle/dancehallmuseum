import { journalPosts } from "../../app/data/journal";
import { artists } from "../../app/data/artists";
import { topics } from "../../app/data/topics";
import { learnTopics } from "../../app/data/learn-topics";

const SITE_URL = "https://dancehallmuseum.org";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/exhibitions",
  "/exhibitions/virtual-dancehall",
  "/collections",
  "/artists",
  "/learn",
  "/journal",
  "/learn/glossary",
  "/learn/from-slavery-to-dancehall",
  "/support",
  "/privacy",
  "/terms",
  "/cookies",
  "/accessibility",
];

export default defineEventHandler((event) => {
  const urls = [
    ...STATIC_ROUTES.map((path) => ({ path, priority: path === "/" ? "1.0" : "0.8" })),
    ...journalPosts.map((p) => ({ path: `/journal/${p.slug}`, priority: "0.6", lastmod: p.date })),
    ...artists.map((a) => ({ path: `/artists/${a.slug}`, priority: "0.6" })),
    ...topics.map((t) => ({ path: `/collections/${t.slug}`, priority: "0.5" })),
    ...learnTopics.map((t) => ({ path: `/learn/${t.slug}`, priority: "0.6" })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (u) =>
        `  <url>\n    <loc>${SITE_URL}${u.path}</loc>\n${
          "lastmod" in u && u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>\n` : ""
        }    <priority>${u.priority}</priority>\n  </url>`,
    )
    .join("\n")}\n</urlset>\n`;

  setHeader(event, "content-type", "application/xml; charset=utf-8");
  return body;
});
