// app/studio/posts/[id]/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

interface CampaignPost {
  id: number
  title: string
  channel: string
  image_prompt: string
  email_subject: string
  email_body: string
  fb_text: string
  ig_text: string
  pin_title: string
  pin_desc: string
  cta: string
  hashtags: string[] | string
}

export default function PostDetailPage() {
  const params = useParams()
  const id = params?.id
  const [post, setPost] = useState<CampaignPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    async function load() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/api/studio/cms-post/${id}/`,
          { cache: 'no-store' }
        )
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setPost(data)
      } catch (err) {
        console.error('Failed to load post:', err)
        setError(err instanceof Error ? err.message : 'Failed to load post')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  if (loading) return <div className="p-6">Loading post…</div>

  if (error || !post) {
    return (
      <div className="p-6 text-sm text-red-600">
        Couldn&apos;t load post{error ? ` — ${error}` : ''}. Try again.
      </div>
    )
  }

  const hashtagText = Array.isArray(post.hashtags)
    ? post.hashtags.join(' ')
    : post.hashtags || ''

  return (
    <section className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <header>
        <p className="text-xs uppercase tracking-wide text-gray-500">
          {post.channel || 'Multi-channel'}
        </p>
        <h1 className="text-2xl font-bold mt-1">{post.title}</h1>
        {post.cta && (
          <p className="mt-2 text-sm text-gray-700">
            <span className="font-semibold">CTA:</span> {post.cta}
          </p>
        )}
      </header>

      <section className="space-y-2">
        <h2 className="font-semibold">Email</h2>
        {post.email_subject && (
          <p className="text-sm font-medium">Subject: {post.email_subject}</p>
        )}
        <p className="whitespace-pre-wrap text-sm">{post.email_body}</p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold">Facebook</h2>
        <p className="whitespace-pre-wrap text-sm">{post.fb_text}</p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold">Instagram</h2>
        <p className="whitespace-pre-wrap text-sm">{post.ig_text}</p>
        {hashtagText && (
          <p className="mt-1 text-xs text-gray-600">{hashtagText}</p>
        )}
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold">Pinterest</h2>
        <p className="text-sm font-medium">Title: {post.pin_title}</p>
        <p className="whitespace-pre-wrap text-sm">{post.pin_desc}</p>
      </section>

      {post.image_prompt && (
        <section className="space-y-2">
          <h2 className="font-semibold">Image prompt</h2>
          <p className="whitespace-pre-wrap text-sm">{post.image_prompt}</p>
        </section>
      )}
    </section>
  )
}
