export type Topic = {
  slug: string;
  label: string;
  shortLabel: string;
  kicker: string;
  dek: string;
  intro: string[];
  keywords: string[];
};

export const topics: Topic[] = [
  {
    slug: "music-sound-system-culture",
    label: "Music & Sound-System Culture",
    shortLabel: "Sound System",
    kicker: "Collections — Theme",
    dek: "The speaker stacks, selectors, and dubplates that built dancehall from the ground up.",
    intro: [
      "Sound system culture is the foundation of dancehall — a mobile architecture of speaker boxes, selectors, deejays, and dubplates that turned recorded music into a public, competitive, communal event. This section of the archive gathers the Museum's research and artist histories connected to sound systems and the music built on them.",
      "This is a growing collection. As Dancehall Museum's oral-history and sound-system directory initiatives develop, this page will expand with named sound systems, selectors, and audio archives.",
    ],
    keywords: ["sound system", "music", "dj", "selector", "riddim"],
  },
  {
    slug: "dance-performance",
    label: "Dance & Performance",
    shortLabel: "Dance",
    kicker: "Collections — Theme",
    dek: "The dance floor as stage — the moves, dancers, and performance culture that gave dancehall its name.",
    intro: [
      "Dancehall takes its name from the dance itself — the physical, improvisational, competitive movement culture born in Kingston's dance spaces. This section collects the Museum's research on dancers, choreography, and performance as a central pillar of dancehall culture, alongside the artists whose stagecraft defined eras of the genre.",
      "This is a growing collection. Future additions will include a dedicated visual archive of dance styles and the dancers who originated them.",
    ],
    keywords: ["dance", "dancer", "performance", "movement", "choreograph"],
  },
  {
    slug: "fashion-style",
    label: "Fashion & Style",
    shortLabel: "Fashion",
    kicker: "Collections — Theme",
    dek: "From tracksuits to gold chains — how dancehall turned personal style into cultural language.",
    intro: [
      "Dancehall fashion is a visual record of the culture's evolution — bold, expressive, and constantly reinventing itself across eras. This section brings together the Museum's fashion-focused journal features and the artists most closely associated with defining dancehall style.",
      "This is a growing collection, developed alongside the Museum's Style & Swagger exhibition research.",
    ],
    keywords: ["fashion", "style", "swagger", "dress", "wear"],
  },
  {
    slug: "photography",
    label: "Photography",
    shortLabel: "Photography",
    kicker: "Collections — Theme",
    dek: "The photographers and images that documented dancehall's dance floors, backstages, and streets.",
    intro: [
      "Photography preserves what sound alone cannot — the faces, fashion, and atmosphere of dancehall's live moments. This section gathers the Museum's photography-referencing research and archival features.",
      "This is a growing collection. Dancehall Museum is working to expand its photographic archive and welcomes contributions — see the Support page for how to help.",
    ],
    keywords: ["photograph", "photo", "image", "archive"],
  },
  {
    slug: "video-media",
    label: "Video & Media",
    shortLabel: "Media",
    kicker: "Collections — Theme",
    dek: "Moving-image history — from VHS dance videos to the digital platforms carrying dancehall today.",
    intro: [
      "From locally circulated VHS recordings to global streaming platforms, video and media have shaped how dancehall is documented and discovered. This section gathers the Museum's research connected to dancehall's media and screen history.",
      "This is a growing collection. Future additions will include a media timeline tracing dancehall's journey from VHS to digital platforms.",
    ],
    keywords: ["video", "media", "film", "footage", "youtube", "tv"],
  },
  {
    slug: "flyers-posters",
    label: "Flyers & Posters",
    shortLabel: "Flyers",
    kicker: "Collections — Theme",
    dek: "The hand-drawn and desktop-published flyers that announced every dance and built dancehall's visual identity.",
    intro: [
      "Dancehall flyers are a folk-art tradition in their own right — vivid, promotional, and full of the era's visual slang. This section collects the Museum's research into the visual language of dancehall flyers and posters.",
      "This is a growing collection. Dancehall Museum is actively archiving flyers from private collections — see the Support page to contribute.",
    ],
    keywords: ["flyer", "poster", "print", "visual language"],
  },
  {
    slug: "oral-histories",
    label: "Oral Histories",
    shortLabel: "Oral History",
    kicker: "Collections — Theme",
    dek: "First-person accounts from the people who lived dancehall's history — in their own words.",
    intro: [
      "Oral history is one of the most direct ways to preserve culture — the voices of the artists, selectors, and communities who built dancehall, telling their own stories. This section will house the Museum's oral-history recordings and interview-based research as the collection grows.",
      "This is a growing collection. The Museum is in the process of recording and archiving oral-history interviews; check back as this section expands.",
    ],
    keywords: ["oral history", "interview", "testimony", "in his own words", "in her own words"],
  },
  {
    slug: "jamaican-patois",
    label: "Jamaican Patois",
    shortLabel: "Patois",
    kicker: "Collections — Theme",
    dek: "The language of dancehall — patois as identity, wordplay, and cultural authority.",
    intro: [
      "Patois is inseparable from dancehall — its rhythm, humor, and directness shape both the music's lyrics and its culture of speech. This section gathers the Museum's research on language, identity, and the role patois plays in dancehall's cultural authority.",
      "This is a growing collection. A full Patois glossary is planned as part of the Learn section — see Learn for current language-focused resources.",
    ],
    keywords: ["patois", "language", "identity", "slang"],
  },
  {
    slug: "global-cultural-influence",
    label: "Global Cultural Influence",
    shortLabel: "Global",
    kicker: "Collections — Theme",
    dek: "How Kingston's sound reshaped music, fashion, and language far beyond Jamaica.",
    intro: [
      "Dancehall's reach extends well past Jamaica — into UK bass culture, North American hip-hop and R&B, Afrobeats, reggaeton, and global fashion and nightlife. This section gathers the Museum's research tracing that international influence.",
      "This is a growing collection, expanded as the Museum documents dancehall's ongoing global impact.",
    ],
    keywords: ["global", "world", "influence", "international", "diaspora", "new york"],
  },
];
