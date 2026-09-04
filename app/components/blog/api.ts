// app/components/blog/api.ts


export type PagedResponse<T> = {
  items: T[];
  count: number;
  limit: number;
  offset: number;
  next_offset: number | null;
};
export type PostsPagedResponse = {
  items: any[];
  count: number;
  limit: number;
  offset: number;
  next_offset: number | null;
};

//https://api.somtammarket.com/api/studio/stm-post/
export async function fetchBlogs() {
  const res = await fetch("/api/studio/stm-post", { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

// ✅ NEW: paged endpoint
export async function fetchPostsPaged(params?: {
  limit?: number;
  offset?: number;

  
  
  
  ids?: number[];
}) {
  const limit = params?.limit ?? 12;
  const offset = params?.offset ?? 0;

  const qs = new URLSearchParams();
  qs.set("limit", String(limit));
  qs.set("offset", String(offset));

  

  
 
  if (Array.isArray(params?.ids) && params.ids.length > 0) {
    qs.set("ids", params.ids.join(","));
  }

  const res = await fetch(`/api/studio/stm-post/paged?${qs.toString()}`, { cache: "no-store" });
  if (!res.ok) {
    return { items: [], count: 0, limit, offset, next_offset: null } as PagedResponse<any>;
  }

  const data = await res.json();
  // safety fallback
  return {
    items: Array.isArray(data?.items) ? data.items : [],
    count: typeof data?.count === "number" ? data.count : 0,
    limit: typeof data?.limit === "number" ? data.limit : limit,
    offset: typeof data?.offset === "number" ? data.offset : offset,
    next_offset:
      typeof data?.next_offset === "number" ? data.next_offset : null,
  } as PagedResponse<any>;
}

export async function fetchPostById(id: number) {
  const res = await fetch(`/api/studio/stm-post/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  const data = await res.json();
  return data || null;
}