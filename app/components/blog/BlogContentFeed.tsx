"use client";

import React, { useEffect, useMemo, useState } from "react";
import type { BlogCategoryKey, BlogItem } from "./types";
import { fetchBlogs } from "./api";
import { mapBlogsToBlogItems } from "./mappers";
import BlogCard from "./BlogCard";

export default function BlogContentFeed({
  title,
  subtitle,
  activePostCategory = "ALL",
}: {
  title: string;
  subtitle?: string;
  activePostCategory?: BlogCategoryKey | "ALL";
}) {
  const [allBlogs, setAllBlogs] = useState<BlogItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadBlogs() {
      try {
        const blogs = await fetchBlogs();
        if (cancelled) return;

        const mapped = mapBlogsToBlogItems(blogs);
        setAllBlogs(mapped);
        setLoaded(true);
      } catch (error) {
        console.error("Error loading blogs:", error);
        setLoaded(true);
      }
    }

    loadBlogs();

    return () => {
      cancelled = true;
    };
  }, []);

  const filteredBlogs = useMemo(() => {
    if (activePostCategory === "ALL") return allBlogs;
    return allBlogs.filter((blog) => blog.blogCategory === activePostCategory);
  }, [allBlogs, activePostCategory]);

  const showEmptyState = loaded && filteredBlogs.length === 0;

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-extrabold tracking-tight text-purple-700">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        ) : null}
      </div>

      <div className="max-w-[860px]">
        <div className="grid grid-cols-1 gap-6">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {showEmptyState ? (
          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            No blog posts yet.
          </div>
        ) : null}
      </div>
    </section>
  );
}