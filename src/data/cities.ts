export type City = {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  metroDescription: string;
  /** Lowercased keywords like "philadelphia metro businesses". Used in body copy. */
  audienceLabel: string;
  /** Local industries this city's businesses skew toward — used to differentiate copy per city. */
  industries: [string, string, string, string];
  /** Custom website project price range for this market. */
  webDesignPriceRange: string;
  /** Monthly SEO retainer range for this market. */
  seoPriceRange: string;
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
    industries: [
      "financial services and fintech firms",
      "fashion and beauty brands",
      "hospitality groups",
      "professional services firms",
    ],
    webDesignPriceRange: "$6,000 to $20,000",
    seoPriceRange: "$2,500–$7,500",
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    state: "California",
    stateAbbr: "CA",
    metroDescription:
      "the greater Los Angeles area, from Downtown LA and Hollywood to Santa Monica, Pasadena, and Long Beach",
    audienceLabel: "Los Angeles businesses",
    industries: [
      "entertainment and media companies",
      "e-commerce and DTC brands",
      "wellness and fitness studios",
      "real estate teams",
    ],
    webDesignPriceRange: "$5,500 to $18,000",
    seoPriceRange: "$2,000–$6,500",
  },
  {
    slug: "philadelphia",
    name: "Philadelphia",
    state: "Pennsylvania",
    stateAbbr: "PA",
    metroDescription:
      "the Philadelphia metro, including Center City, Northern Liberties, the Main Line, and South Jersey",
    audienceLabel: "Philadelphia metro businesses",
    industries: [
      "healthcare practices",
      "universities and education nonprofits",
      "logistics and distribution companies",
      "restaurants and hospitality groups",
    ],
    webDesignPriceRange: "$4,000 to $14,000",
    seoPriceRange: "$1,500–$5,000",
  },
  {
    slug: "chicago",
    name: "Chicago",
    state: "Illinois",
    stateAbbr: "IL",
    metroDescription:
      "Chicagoland — from the Loop and River North to the North Shore and western suburbs",
    audienceLabel: "Chicago businesses",
    industries: [
      "manufacturing and industrial companies",
      "logistics and freight businesses",
      "professional services firms",
      "food and beverage brands",
    ],
    webDesignPriceRange: "$4,500 to $15,000",
    seoPriceRange: "$1,800–$5,500",
  },
  {
    slug: "miami",
    name: "Miami",
    state: "Florida",
    stateAbbr: "FL",
    metroDescription:
      "the Miami metro, from Brickell and Wynwood to Coral Gables, Fort Lauderdale, and the Beaches",
    audienceLabel: "Miami businesses",
    industries: [
      "hospitality and tourism businesses",
      "real estate developers",
      "international trade companies",
      "wellness and beauty brands",
    ],
    webDesignPriceRange: "$4,000 to $15,000",
    seoPriceRange: "$1,500–$5,000",
  },
];

export const getAllCities = () => cities;
export const getCityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
