export const SITE_URL = "https://dancehallmuseum.org";

export const NAV = [
  { label: "About", href: "/about" },
  { label: "Exhibitions", href: "/exhibitions" },
  { label: "Collections", href: "/collections" },
  { label: "Artists", href: "/artists" },
  { label: "Learn", href: "/learn" },
  { label: "Journal", href: "/journal" },
] as const;

export const SUPPORT = { label: "Donate", href: "/support" } as const;

export const CREDIT = {
  curator: "YardRock TV",
  curatorUrl: "https://yardrocktv.com/",
  research: "The Reggae Institute",
  researchUrl: "https://thereggaeinstitute.org/",
} as const;
