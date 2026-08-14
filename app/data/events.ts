export type MuseumEvent = {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  link?: string;
};

// No events scheduled yet. Add entries here as they're announced —
// the /events page automatically switches from its empty state once
// this array is non-empty.
export const events: MuseumEvent[] = [];
