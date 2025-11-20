// app/studio/campaign/backend/page.tsx
import Link from 'next/link'
import { apiGet } from '@/lib/fetcher'


type BackendCampaign = {
  id: number
  title: string
  overview: string
  pillar: string
  language: string
  goal: string
  keywords: string
  created_at: string
  posts: Array<{
    id: number
    title: string
  }>
}

export const dynamic = 'force-dynamic'

export default async function BackendCampaignListPage() {
  let campaigns: BackendCampaign[] = []
  try {
    campaigns = await apiGet<BackendCampaign[]>('/api/campaigns/')
  } catch (e) {
    // if not logged in or error from backend
    return (
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">STM Campaign Library (Backend)</h1>
        <div className="rounded-xl border bg-white p-6 text-sm text-red-600">
          Could not load campaigns from backend. Make sure you are logged in and the API is running.
        </div>
      </section>
    )
  }

  if (!campaigns.length) {
    return (
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">STM Campaign Library (Backend)</h1>
        <div className="rounded-xl border bg-white p-6 text-gray-600">
          No campaigns saved yet. Generate one in{' '}
          <Link href="/studio/campaign" className="underline">
            /studio/campaign
          </Link>{' '}
          and use <strong>Save to Backend</strong>.
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h1 className="text-2xl font-semibold">STM Campaign Library (Backend)</h1>
        <p className="text-xs text-gray-500">
          Total campaigns: {campaigns.length}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {campaigns.map(c => (
          <Link
            key={c.id}
            href={`/studio/campaign/backend/${c.id}`}
            className="rounded-xl border bg-white p-4 hover:shadow-sm transition-shadow"
          >
            <div className="text-xs uppercase tracking-wide text-gray-500">
              {c.pillar} • {c.language.toUpperCase()} • {c.goal}
            </div>
            <div className="mt-1 font-semibold line-clamp-2">{c.title}</div>
            <div className="mt-2 text-xs text-gray-500 line-clamp-3">
              {c.overview || 'No overview yet.'}
            </div>
            <div className="mt-3 text-[11px] text-gray-400 flex justify-between">
              <span>
                Posts: {c.posts?.length ?? 0}
              </span>
              <span>
                {new Date(c.created_at).toLocaleString()}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}


