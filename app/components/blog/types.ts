// app/components/blog/types.ts


export type BlogCategoryKey =
  | "Thai's_Lifestyle_Abroad"
  | "ThaiFood_Recipes_and_Inspiration"
  | "Health_and_Wellness"
  | "Entertainment_and_Culture";

export type BlogCategory = {
  key: BlogCategoryKey;
  label: string;
};

export type SidebarNavKey = "HOME" | "EVENTS" | "BLOGS";

export type BlogItem = {
    blogCategory: string;
    id: string | number
    title: string
    pillar: string
    excerpt?: string
    published_at?: string | null;
    slug: string;
    image: string
    href: string
};



export type BlogDTO = {
  id?: number | string;
  title?: string;
  excerpt?: string;
  published_at?: string | null;
  slug: string;
  body?: string | null;
  pillar?: string;
  image?: string | null;
  [key: string]: unknown;
};

// UI model (what MainContentFeed uses)
export type EventUI = {
  id: number;
  title: string;
  excerpt: string;
  pillar: string;
  typePill: string;
  dateLine: string;
  image?: string | null;
  href: string;
};