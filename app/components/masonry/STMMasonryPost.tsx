'use client'

import Image from 'next/image'
import Link from 'next/link'

export type MasonryPost = {
  id: string | number
  title: string
  excerpt?: string
  image: string
  href: string
}

interface PostMasonryProps {
  posts: MasonryPost[]
  variant?: 'card' | 'image'
}


export default function STMMasonryPost({ posts, variant = 'card' }: PostMasonryProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="rounded-2xl border bg-white p-6 text-sm text-slate-600">
        No stories yet. Publish your first STM post and it will appear here.
      </div>
    )
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
      {posts.map((post) => (
        <article
          key={post.id}
          className="break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow"
        >
          <Link href={post.href} className="block">
            <div className="relative w-full">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="aspect-[4/3] w-full bg-slate-100 flex flex-col items-center justify-center text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7l1.5-2h5L16 7" />
                    <circle cx="12" cy="13" r="3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="text-xs mt-2">No image</div>
                </div>
              )}
            </div>

            {variant === 'card' && (
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-4">
                    {post.excerpt}
                  </p>
                )}
              </div>
            )}
          </Link>
        </article>
      ))}
    </div>
  )
}
