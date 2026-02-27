//app/components/partner/vendorMock.ts
export type Vendor = {
  slug: string;
  name: string;
  tagline: string;
  note: string;
  city: string;
  country: string;
  categories: string[];
  verified?: boolean;
};
export const vendors: Vendor[] = [
  {
    slug: "Farmer-kitchen",
    name: "Farmer Kitchen",
    tagline: "Authentic Thai Food",
    note: "Providing traditional snacks for events.",
    city: "Malmö",
    country: "Sweden",
    categories: ["Thai Snacks", "Catering", "Street Food"],
    verified: true,
  },
  {
    slug: "bkk-dessert-farm",
    name: "BKK Dessert Farm",
    tagline: "Thai Desserts & Tea",
    note: "Sweet sets for temple days & parties.",
    city: "Lund",
    country: "Sweden",
    categories: ["Desserts", "Tea", "Set Boxes"],
    verified: true,
  },
  {
    slug: "nordic-thai-Farm",
    name: "Nordic Thai Farm",
    tagline: "Thai Ingredients",
    note: "Fresh herbs & essentials for home cooking.",
    city: "Göteborg",
    country: "Sweden",
    categories: ["Grocery", "Ingredients", "Bundles"],
  },
];


