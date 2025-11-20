'use client'

import { useEffect, useState } from 'react'
import { listCampaigns, deleteCampaign } from '@/lib/localCampaigns'
import Link from 'next/link'

type Row = {
  id: string
  createdAt: number
  payload: any
}

export default function SavedCampaignsPage() {
  const [rows, setRows] = useState<Row[]>([])

  const refresh = () => setRows(listCampaigns() as any)

  useEffect(()=>{ refresh() }, [])

  const exportJSON = (payload: any) => {
    const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = `stm-campaign-${payload?.id || Date.now()}.json`; a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Saved Campaigns (Local)</h1>

      {rows.length === 0 ? (
        <div className="rounded-xl border bg-white p-6 text-gray-600">
          No local campaigns yet. Generate one in <Link href="/studio/campaign" className="underline">/studio/campaign</Link>.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rows.map(({ id, createdAt, payload }) => (
            <div key={id} className="rounded-xl border bg-white p-4">
              <div className="font-medium">{payload?.campaign_title || payload?.topic || 'Untitled Campaign'}</div>
              <div className="text-xs text-gray-500 mt-1">
                {new Date(createdAt).toLocaleString()} • {payload?.pillar || '—'} • {payload?.language || 'en'}
              </div>
              <div className="text-sm text-gray-600 line-clamp-3 mt-2">{payload?.overview || '—'}</div>

              <div className="mt-3 flex gap-2 flex-wrap">
                <Link
                  href={`/studio/campaign?id=${id}`}
                  className="px-3 py-2 rounded bg-gray-100 hover:bg-gray-200"
                >
                  Open
                </Link>
                <button
                  onClick={()=>exportJSON(payload)}
                  className="px-3 py-2 rounded bg-gray-100 hover:bg-gray-200"
                >
                  Export JSON
                </button>
                <button
                  onClick={()=>{
                    if (!confirm('Delete this campaign?')) return
                    deleteCampaign(id)
                    refresh()
                  }}
                  className="px-3 py-2 rounded bg-red-50 hover:bg-red-100 text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
