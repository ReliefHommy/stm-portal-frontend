// app/studio/posts/page.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { PublishButton } from '@/app/components/studio/PublishButton'

interface CampaignPost {
  id: number
  title: string
  channel: string
  cta: string
  created_at: string
  blog_excerpt?: string
  blog_body?: string
}

export default function PostListPage() {
  const [posts, setPosts] = useState<CampaignPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/api/studio/cms-post/`,
          { cache: 'no-store' }
        )
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setPosts(data)
      } catch (err) {
        console.error('Failed to load posts:', err)
        setError(err instanceof Error ? err.message : 'Failed to load posts')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="p-6">Loading posts…</div>

  if (error) {
    return (
      <div className="p-6 text-sm text-red-600">
        Couldn&apos;t load posts — {error}. Try again.
      </div>
    )
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-8 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Campaign Posts</h1>

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map(p => (
          <article
            key={p.id}
            className="rounded-xl border bg-white p-4 shadow-sm flex flex-col gap-2"
          >
            <h2 className="font-semibold text-lg line-clamp-2">{p.title}</h2>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              {p.channel || 'Multi-channel'}
            </p>
            <p className="text-sm text-gray-700 line-clamp-3">{p.cta}</p>
            <Link
              href={`/studio/posts/${p.id}`}
              className="mt-auto inline-flex text-sm font-medium text-orange-600 hover:underline"
            >
              View details →
            </Link>
            {/* ⭐ Publish Button STM-post*/}
  <PublishButton
    campaignId={p.id}
    title={p.title}
    excerpt={p.blog_excerpt}
    body={p.blog_body}
  />
         
          </article>

        
        ))}

      
      </div>
        {/* ✅ Suspense boundary that wraps all /studio children */}
        
        
    </section>
  )
}


