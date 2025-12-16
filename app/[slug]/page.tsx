import Image from "next/image";
import { notFound } from "next/navigation";
import MainNavbar from "../components/hompage/MainNavbar";
import Hero from "../components/hompage/Hero";
import Footer from "../components/hompage/Footer";
import Link from "next/link";


const API = "https://stm-food-backend-production.up.railway.app";

async function getPost(Id: string) {
  const id = decodeURIComponent(Id).replace(/[,\s]+$/g, ""); // remove trailing comma

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

   if (!res.ok) throw new Error("Failed to fetch post")
  return res.json()


}
function formatDate(input?: string) {
  if (!input) return null
  const d = new Date(input)
  if (isNaN(d.getTime())) return null
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}


export default async function PostDetail({ params }: any) {
  const post = await getPost(params.id);
  const dateLabel = formatDate(post.created_at || post.updated_at)
  const readTime =
    post.overview ? `${Math.max(2, Math.round(post.overview.split(/\s+/).length / 180))} min read` : null
  
  
    return (
     <><main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <MainNavbar />
            <Hero />
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

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
            {dateLabel && <span>{dateLabel}</span>}
            {readTime && (
              <>
                <span className="text-slate-300">•</span>
                <span>{readTime}</span>
              </>
            )}
            {post.pillar && (
              <>
                <span className="text-slate-300">•</span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-slate-700">
                  {post.pillar}
                </span>
              </>
            )}
          </div>

          {/* Actions */}
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                `https://www.somtammarket.com/${params.id}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:shadow transition"
            >
              Share
            </a>

            <a
              href="#content"
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition"
            >
              Read
            </a>
          </div>
        </header>

        {/* Hero image */}
        {post.image_url ? (
          <div className="relative overflow-hidden rounded-3xl border bg-slate-100 shadow-sm">
            <div className="relative aspect-[16/9]">
              <Image
                src={post.image_url}
                alt={post.title}
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
                {post.overview}
              </p>
            </div>

            {/* Footer CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between border-t pt-6">
              <Link
                href="/"
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
   </>
  );
}
