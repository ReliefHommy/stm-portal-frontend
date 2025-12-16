import Image from "next/image";
import { notFound } from "next/navigation";

import Link from "next/link";
import MainNavbar from "@/app/components/hompage/MainNavbar";
import Footer from "@/app/components/hompage/Footer";



const API = "https://stm-food-backend-production.up.railway.app";

async function getPost(rawSlug: string) {
  const id = decodeURIComponent(rawSlug).replace(/[,\s]+$/g, ""); // remove trailing comma

   // 1) numeric → fetch by pk
  if (/^\d+$/.test(id)) {
    const res = await fetch(
      `${API}/api/studio/stm-post/${id}/`,
      { cache: "no-store" }
    )
    if (!res.ok) return null
    return res.json()
  }


 // 2) slug → fetch via DRF action
  const res = await fetch(
    `${API}/api/studio/stm-post/by-slug/${encodeURIComponent(id)}/`,
    { cache: "no-store" }
  )
  if (!res.ok) return null
  return res.json()
}



export default async function PostDetail({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  const dateLabel = post.created_at
    ? new Date(post.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null
  
    return (
     <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <MainNavbar />
         
               {/* Top bar */}
        <div className="border-b bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium text-slate-700 hover:text-slate-900 inline-flex items-center gap-2"
          >
            <span aria-hidden>←</span> Back to posts
          </Link>
          <div className="flex items-center gap-2">
             <Link
              href="/studio/posts"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              Studio
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-sm text-slate-500">Post</span>
          </div>
        </div>
        </div>
    {/* Content */}   
     <article className="mx-auto max-w-4xl px-4 py-10">
        {/* Title + meta */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            STM Stories
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {post.title}
          </h1>

          {dateLabel && <div className="mt-3 text-sm text-slate-600">{dateLabel}</div>}
        


        </header>
           {/* Post image */}
        {post.image_url && (
          <div className="relative overflow-hidden rounded-3xl border bg-slate-100 shadow-sm">
            <div className="relative aspect-[16/9]">
              <Image
                src={post.image_url}
                alt={post.title ?? "Post image"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          </div>
        )}

        {/* Hero image */}
        {post.image_url ? (
          <div className="relative overflow-hidden rounded-3xl border bg-slate-100 shadow-sm">
            <div className="relative aspect-[16/9]">
              <Image
                src={post.image_url}
                alt={post.title ?? "Post image"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>

            {/* soft overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="rounded-3xl border bg-slate-50 p-10 text-slate-500">
            No cover image.
          </div>
        )}

        {/* Body */}
        <section
          id="content"
          className="mt-10 rounded-3xl border bg-white shadow-sm"
        >
          <div className="p-6 sm:p-10">
            <div className="prose prose-slate max-w-none prose-headings:scroll-mt-24 prose-a:text-slate-900">
              <p className="whitespace-pre-line leading-relaxed text-slate-700">
                {post.excerpt}
              </p>
            </div>

            {/* Footer CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between border-t pt-6">
              <Link
                href="/stm-posts"
                className="text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                ← Back to latest stories
              </Link>

              <div className="text-xs text-slate-500">
                Published via STM Studio
              </div>
            </div>
          </div>
        </section>

     </article>
       



       <Footer />

  </main>
  );
}
