import Image from "next/image";
import { notFound } from "next/navigation";

const API = "https://stm-food-backend-production.up.railway.app";

async function getPost(rawId: string) {
  const id = decodeURIComponent(rawId).replace(/[,\s]+$/g, ""); // remove trailing comma

  // 1) if numeric → fetch by pk
  if (/^\d+$/.test(id)) {
    const res = await fetch(`${API}/api/studio/stm-post/${id}/`, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  }

  // 2) if slug → fetch via list filter (?slug=...)
  const res = await fetch(`${API}/api/studio/stm-post/?slug=${encodeURIComponent(id)}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  return Array.isArray(data) ? data[0] ?? null : data;
}

export default async function PostDetail({ params }: any) {
  const post = await getPost(params.id);
  if (!post) notFound();

  return (
    <div className="px-4 py-10 max-w-3xl mx-auto">
      {post.image_url ? (
        <Image
          src={post.image_url}
          alt={post.title ?? "Post image"}
          width={1200}
          height={900}
          className="w-full rounded-xl mb-6"
        />
      ) : null}

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
        {post.overview ?? post.excerpt ?? ""}
      </p>
    </div>
  );
}
