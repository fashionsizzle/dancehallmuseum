export type Exhibition = {
  slug: string;
  title: string;
  dek: string;
  image: string | null;
  highlights: string[];
};

export const exhibitions: Exhibition[] = [
  {
    slug: "dancehall-and-the-digital-revolution",
    title: "Dancehall & The Digital Revolution (1982–1995)",
    dek: "This exhibition explores one of the most transformative periods in Jamaican music history — the shift from analog instrumentation to digital production. With the emergence of drum machines, synthesizers, and computerized rhythms, dancehall entered a new sonic era that reshaped not only Jamaican music, but global music production.",
    image: "/images/sound-system.webp",
    highlights: [
      "The rise of digital riddims",
      "The role of producers and engineers",
      "The evolution of the deejay",
      "The transformation of sound system culture",
      "The global spread of the digital dancehall sound",
    ],
  },
  {
    slug: "sound-system-culture-the-architecture-of-power",
    title: "Sound System Culture: The Architecture of Power",
    dek: "At the heart of dancehall lies the sound system — a powerful cultural, technological, and social force. This exhibition examines sound systems as more than speakers — as spaces of community, competition, innovation, and identity.",
    image: "/images/sound-system-768x587.webp",
    highlights: [
      "Selectors and operators",
      "Dubplate culture",
      "Sound clashes",
      "Speaker box engineering",
      "Dancehall sessions and street dances",
      "The migration of sound system culture globally",
    ],
  },
  {
    slug: "style-and-swagger-fashion-in-dancehall",
    title: "Style & Swagger: Fashion in Dancehall",
    dek: "Dancehall is one of the most visually expressive cultures in the world — where style is identity, performance, and power. This exhibition explores the evolution of dancehall fashion from Kingston streets to global influence.",
    image: "/images/dancehall-queen-style-sho-warszawa-szkola-carlene.webp",
    highlights: [
      "Clarks, mesh marina, denim, and tailoring",
      "Dancehall queens and body aesthetics",
      "Hairstyles, jewelry, and beauty culture",
      "Designer influence and street fashion",
      "The role of style in status, identity, and performance",
    ],
  },
  {
    slug: "dancehall-queens-performance-beauty-and-cultural-influence",
    title: "Dancehall Queens: Performance, Beauty, and Cultural Influence",
    dek: "Dancehall queens represent one of the most powerful visual and performative expressions within the culture. Through photography, video, and cultural analysis, this exhibition highlights the role of women in shaping dancehall's visual identity.",
    image: "/images/Dancehall-Queen-Carlene-961x1200-1.webp",
    highlights: [
      "Femininity and power",
      "Dance and movement",
      "Fashion and body presentation",
      "Performance and spectacle",
      "Cultural influence and representation",
    ],
  },
  {
    slug: "flyers-vhs-and-street-promotion",
    title: "Flyers, VHS & Street Promotion",
    dek: "Before social media, dancehall was built through physical promotion, video culture, and street visibility. This exhibition explores the graphic and media language of dancehall — a vital archive of dancehall's visual history.",
    image: null,
    highlights: [
      "Handbills and flyers",
      "Poster culture",
      "VHS tapes and early video",
      "Cable television and dancehall broadcasts",
      "Street promotion and visual identity",
    ],
  },
  {
    slug: "from-kingston-to-the-world",
    title: "From Kingston to the World",
    dek: "Dancehall is a global language. This exhibition traces how dancehall culture traveled from Jamaica to influence music and style movements across the world — one of the most influential cultural exports of the modern era.",
    image: "/images/00-lede-sumfest-scaled.webp",
    highlights: [
      "Hip-hop",
      "Reggaeton",
      "Afrobeats",
      "UK bass culture",
      "Caribbean diaspora communities",
      "Global streetwear and fashion",
    ],
  },
];
