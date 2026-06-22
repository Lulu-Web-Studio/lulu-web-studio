export type City = {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  metroDescription: string;
  /** Lowercased keywords like "philadelphia metro businesses". Used in body copy. */
  audienceLabel: string;
};

export const cities: City[] = [
  {
    slug: "new-york",
    name: "New York",
    state: "New York",
    stateAbbr: "NY",
    metroDescription:
      "the New York metro area, from Manhattan and Brooklyn to Long Island and Westchester",
    audienceLabel: "New York City businesses",
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    state: "California",
    stateAbbr: "CA",
    metroDescription:
      "the greater Los Angeles area, from Downtown LA and Hollywood to Santa Monica, Pasadena, and Long Beach",
    audienceLabel: "Los Angeles businesses",
  },
  {
    slug: "philadelphia",
    name: "Philadelphia",
    state: "Pennsylvania",
    stateAbbr: "PA",
    metroDescription:
      "the Philadelphia metro, including Center City, Northern Liberties, the Main Line, and South Jersey",
    audienceLabel: "Philadelphia metro businesses",
  },
  {
    slug: "chicago",
    name: "Chicago",
    state: "Illinois",
    stateAbbr: "IL",
    metroDescription:
      "Chicagoland — from the Loop and River North to the North Shore and western suburbs",
    audienceLabel: "Chicago businesses",
  },
  {
    slug: "miami",
    name: "Miami",
    state: "Florida",
    stateAbbr: "FL",
    metroDescription:
      "the Miami metro, from Brickell and Wynwood to Coral Gables, Fort Lauderdale, and the Beaches",
    audienceLabel: "Miami businesses",
  },
];

export const getAllCities = () => cities;
export const getCityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
