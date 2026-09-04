// app/components/blog/mappers.ts

import type { BlogCategoryKey, BlogDTO, BlogItem } from "./types";

function pickString(...values: Array<unknown>): string {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return "";
}

function normalize(value: string): string {
  return value.trim().toUpperCase();
}

function toBlogCategory(blogTypeRaw: string): BlogCategoryKey {
  const blogType = normalize(blogTypeRaw);

  // Map backend/blog_type values to your frontend BlogCategoryKey values
  if (
    blogType === "LIFE-STYLE" ||
    blogType === "LIFESTYLE" ||
    blogType === "THAI'S_LIFESTYLE_ABROAD"
  ) {
    return "Thai's_Lifestyle_Abroad";
  }

  if (
    blogType === "FOOD" ||
    blogType === "THAIFOOD" ||
    blogType === "THAI FOOD" ||
    blogType === "FOOD/RECIPE RESTAURANT" ||
    blogType === "THAIFOOD_RECIPES_AND_INSPIRATION"
  ) {
    return "ThaiFood_Recipes_and_Inspiration";
  }

  if (
    blogType === "HEALTH" ||
    blogType === "HEALTH AND WELLNESS" ||
    blogType === "HEALTH_AND_WELLNESS"
  ) {
    return "Health_and_Wellness";
  }

  if (
    blogType === "ENTERTAINMENT" ||
    blogType === "CULTURE" ||
    blogType === "ENTERTAINMENT_AND_CULTURE"
  ) {
    return "Entertainment_and_Culture";
  }

  return "Entertainment_and_Culture";
}

function getDateString(value: string): string {
  return value || new Date().toISOString();
}

export function mapBlogsToBlogItems(blogs: BlogDTO[]): BlogItem[] {
  return blogs.map((blog, index) => {
    const title = pickString(blog.title, (blog as any).name, "Untitled blog");

    const blogTypeRaw = pickString(
      (blog as any).blog_type,
      (blog as any).type,
      "ENTERTAINMENT"
    );

    const blogCategory = toBlogCategory(blogTypeRaw);

    const publishedAt = pickString(
      (blog as any).created_at,
      (blog as any).createdAt,
      (blog as any).published_at,
      (blog as any).publishedAt
    );

    const imageUrl = pickString(
      (blog as any).image,
      (blog as any).image_url
    );

    const id = String(blog.id ?? index);

    return {
      id,
      title,
      excerpt: pickString((blog as any).excerpt) || null,
      body: pickString((blog as any).body) || null,
      slug: pickString((blog as any).slug) || null,
      href: pickString((blog as any).href) || null,
      pillar: pickString((blog as any).pillar) || null,
      blogCategory,
      published_at: getDateString(publishedAt),
      image: imageUrl || null,
    };
  });
}