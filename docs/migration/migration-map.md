# Dancehall Museum — URL & Content Migration Map

Source: https://dancehallmuseum.org — crawled via `wp-sitemap.xml`. 35 URLs inventoried.

## SEO gaps found on the old site

- **No `<meta name="description">` on any of the 35 crawled URLs.** Every page must get a written meta description during rebuild — this is not optional, it's a wholesale gap.

- **Duplicate/near-duplicate pages**: `/` vs `/home/`, `/about/` vs `/about-2/`, `/archive/` (38-word stub) vs `/collections/`. Consolidated below.

- **Thin taxonomy pages**: all `/category/*` and `/tag/*` pages are 123–906 words of auto-generated listing, no unique copy.


## Migration map

| Old URL | New URL | Type | Redirect | Notes |
|---|---|---|---|---|
| `/2026/04/02/welcome-to-the-dancehall-museum-a-cultural-game-changer-from-yardrock-tv/` | `/journal/welcome-to-the-dancehall-museum-a-cultural-game-changer-from-yardrock-tv/` | blog_post | 301 | Editorial/journal article. Migrate full content. |
| `/2026/04/01/the-complete-history-of-dancehall-from-kingstons-dance-floors-to-a-global-cultural-force/` | `/journal/the-complete-history-of-dancehall-from-kingstons-dance-floors-to-a-global-cultural-force/` | blog_post | 301 | Editorial/journal article. Migrate full content. |
| `/2026/04/02/sound-system-culture-in-jamaica-the-foundation-of-dancehall/` | `/journal/sound-system-culture-in-jamaica-the-foundation-of-dancehall/` | blog_post | 301 | Editorial/journal article. Migrate full content. |
| `/2026/04/02/dancehall-fashion-the-evolution-of-jamaican-style/` | `/journal/dancehall-fashion-the-evolution-of-jamaican-style/` | blog_post | 301 | Editorial/journal article. Migrate full content. |
| `/2026/04/02/dancehall-queens-style-power-and-cultural-influence/` | `/journal/dancehall-queens-style-power-and-cultural-influence/` | blog_post | 301 | Editorial/journal article. Migrate full content. |
| `/2026/04/02/from-kingston-to-the-world-how-dancehall-influenced-global-fashion-music-and-culture/` | `/journal/from-kingston-to-the-world-how-dancehall-influenced-global-fashion-music-and-culture/` | blog_post | 301 | Editorial/journal article. Migrate full content. |
| `/2026/04/02/from-the-archive-the-visual-language-of-dancehall-flyers/` | `/journal/from-the-archive-the-visual-language-of-dancehall-flyers/` | blog_post | 301 | Editorial/journal article. Migrate full content. |
| `/2026/04/02/icons-of-dancehall-style-artists-who-defined-the-image-of-the-culture/` | `/journal/icons-of-dancehall-style-artists-who-defined-the-image-of-the-culture/` | blog_post | 301 | Editorial/journal article. Migrate full content. |
| `/2026/04/02/the-evolution-of-dancehall-fashion-a-journey-through-six-eras/` | `/journal/the-evolution-of-dancehall-fashion-a-journey-through-six-eras/` | blog_post | 301 | Editorial/journal article. Migrate full content. |
| `/2026/04/02/dancehall-dancers-fashion-icons-bogle-latonya-style-and-the-legacy-of-style-in-motion/` | `/journal/dancehall-dancers-fashion-icons-bogle-latonya-style-and-the-legacy-of-style-in-motion/` | blog_post | 301 | Editorial/journal article. Migrate full content. |
| `/2026/04/02/dancehall-origins-from-kingston-jamaica-to-the-world/` | `/journal/dancehall-origins-from-kingston-jamaica-to-the-world/` | blog_post | 301 | Editorial/journal article. Migrate full content. |
| `/2026/04/02/how-jamaican-culture-shaped-new-york-the-entertainment-industry-and-the-world/` | `/journal/how-jamaican-culture-shaped-new-york-the-entertainment-industry-and-the-world/` | blog_post | 301 | Editorial/journal article. Migrate full content. |
| `/2026/04/02/the-history-of-dancehall-queens-the-legacy-of-carlene-smith/` | `/journal/the-history-of-dancehall-queens-the-legacy-of-carlene-smith/` | blog_post | 301 | Editorial/journal article. Migrate full content. |
| `/2026/04/02/the-language-of-dancehall-patois-style-and-identity/` | `/journal/the-language-of-dancehall-patois-style-and-identity/` | blog_post | 301 | Editorial/journal article. Migrate full content. |
| `/2026/04/02/shabba-ranks-and-the-global-dancehall-image/` | `/journal/shabba-ranks-and-the-global-dancehall-image/` | blog_post | 301 | Editorial/journal article. Migrate full content. |
| `/2026/04/03/super-cat-cool-authority-style-and-the-architecture-of-dancehall-swagger/` | `/journal/super-cat-cool-authority-style-and-the-architecture-of-dancehall-swagger/` | blog_post | 301 | Editorial/journal article. Migrate full content. |
| `/2026/04/02/yellowman-the-legendary-voice-who-helped-define-dancehall/` | `/journal/yellowman-the-legendary-voice-who-helped-define-dancehall/` | blog_post | 301 | Editorial/journal article. Migrate full content. |
| `/` | `/` | page | n/a (canonical home) | Canonical homepage. Keep at root. |
| `/about/` | `/about/` | page (duplicate) | n/a (merge into canonical) | Older/shorter About draft (600 words). Merge best content into the /about-2/ version, then this URL keeps working as the live /about/ slug. |
| `/home/` | `/` | page (duplicate) | 301 | Duplicate/legacy homepage draft (505 words vs 903 on '/'). Redirect to root, do not migrate content separately. |
| `/about-2/` | `/about/` | page (duplicate - content source) | 301 | Longer/more current About draft (870 words). Use this as the CONTENT SOURCE for the new /about/ page; then redirect this URL to /about/. |
| `/exhibitions/` | `/exhibitions/` | page | n/a (canonical) | Primary site page. Migrate content as-is. |
| `/collections/` | `/collections/` | page | n/a (canonical) | Canonical Collections page (1174 words). |
| `/archive/` | `/collections/` | page (stub duplicate) | 301 | 38-word stub, same H1 'Collections' as /collections/. Redirect, no unique content to migrate. |
| `/learn/` | `/learn/` | page | n/a (canonical) | Primary site page. Migrate content as-is. |
| `/journal/` | `/journal/` | page | n/a (canonical) | Primary site page. Migrate content as-is. |
| `/support/` | `/support/` | page | n/a (canonical) | Primary site page. Migrate content as-is. |
| `/category/journal/` | `/journal/category/journal/` | taxonomy (category) | 301 | WP category archive, thin (906 words, auto-generated post listing). Recreate as a filtered journal view if the new site supports it; otherwise redirect to /journal/. |
| `/category/about/` | `/journal/category/about/` | taxonomy (category) | 301 | WP category archive, thin (127 words, auto-generated post listing). Recreate as a filtered journal view if the new site supports it; otherwise redirect to /journal/. |
| `/category/artist/` | `/journal/category/artist/` | taxonomy (category) | 301 | WP category archive, thin (291 words, auto-generated post listing). Recreate as a filtered journal view if the new site supports it; otherwise redirect to /journal/. |
| `/tag/bogle/` | `/journal/` | taxonomy (tag) | 301 | Thin tag archive (134 words). Low SEO value standalone — redirect to /journal/ rather than rebuilding. |
| `/tag/latonya-style/` | `/journal/` | taxonomy (tag) | 301 | Thin tag archive (136 words). Low SEO value standalone — redirect to /journal/ rather than rebuilding. |
| `/tag/carlene-smith/` | `/journal/` | taxonomy (tag) | 301 | Thin tag archive (129 words). Low SEO value standalone — redirect to /journal/ rather than rebuilding. |
| `/tag/dancehall-queen-carlene/` | `/journal/` | taxonomy (tag) | 301 | Thin tag archive (131 words). Low SEO value standalone — redirect to /journal/ rather than rebuilding. |
| `/tag/shabba-ranks/` | `/journal/` | taxonomy (tag) | 301 | Thin tag archive (123 words). Low SEO value standalone — redirect to /journal/ rather than rebuilding. |
