'use client'

import { useEffect, useMemo, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import {

  getCampaign,
  saveCampaign,
  importCampaign as importC,
} from '@/lib/localCampaigns'

type CampaignPost = {
  title?: string
  overview?: string
  image_prompt?: string
  email?: { subject?: string; body?: string }
  social?: {
    facebook?: { text?: string }
    instagram?: { text?: string }
    pinterest?: { title?: string; description?: string }
  }
  cta?: string
  hashtags?: string[]
}

type CampaignData = {
  campaign_title?: string
  overview?: string
  posts?: CampaignPost[]
  id?: string
}

type GenResp = {
  ok: boolean
  pillar: 'Food'|'Game'|'Wellness'
  topic: string
  language: 'en'|'sv'|'th'
  goal: 'awareness'|'traffic'|'engagement'
  keywords?: string
  campaign: CampaignData
}

function CopyBtn({ text, label="Copy" }: { text?: string; label?: string }) {
  const [done, setDone] = useState(false)
  return (
    <button
      onClick={async ()=>{
        if (!text) return
        await navigator.clipboard.writeText(text)
        setDone(true)
        setTimeout(()=>setDone(false), 1200)
      }}
      className="text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
      type="button"
    >
      {done ? 'Copied!' : label}
    </button>
  )
}

export default function CampaignPage() {
  const search = useSearchParams()
  const router = useRouter()

  // form state
  const [pillar, setPillar] = useState<'Food'|'Game'|'Wellness'>('Food')
  const [language, setLanguage] = useState<'en'|'sv'|'th'>('en')
  const [topic, setTopic] = useState('')
  const [goal, setGoal] = useState<'awareness'|'traffic'|'engagement'>('awareness')
  const [keywords, setKeywords] = useState('')

  // result state
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<GenResp | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Load saved campaign by id (when navigated from Saved page)
  useEffect(()=>{
    const id = search.get('id')
    if (!id) return
    const saved = getCampaign(id)
    if (saved?.posts || saved?.campaign_title) {
      // normalize into GenResp shape for preview
      const normalized: GenResp = {
        ok: true,
        pillar: (saved.pillar ?? 'Food') as any,
        topic: saved.topic ?? '',
        language: (saved.language ?? 'en') as any,
        goal: (saved.goal ?? 'awareness') as any,
        keywords: saved.keywords ?? '',
        campaign: saved,
      }
      setData(normalized)
      // prefill form for convenience
      setPillar(normalized.pillar)
      setLanguage(normalized.language)
      setGoal(normalized.goal)
      setTopic(normalized.topic)
      setKeywords(normalized.keywords ?? '')
    }

  }, [search])

  async function onGenerate(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true); setError(null); setData(null)
    const r = await fetch('/api/studio/campaign', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ pillar, language, topic, goal, keywords, count: 3 }),
    })
    if (!r.ok) {
      setError(await r.text()); setLoading(false); return
    }
    const j = await r.json()
    setData(j); setLoading(false)
  }

  const csv = useMemo(() => {
    if (!data?.campaign?.posts?.length) return ''
    const rows = [
      ['title','overview','email_subject','email_body','fb_text','ig_text','pin_title','pin_desc','cta','hashtags','image_prompt']
    ]
    for (const p of data.campaign.posts!) {
      rows.push([
        p.title ?? '',
        p.overview ?? '',
        p.email?.subject ?? '',
        (p.email?.body ?? '').replace(/\n/g,' '),
        p.social?.facebook?.text ?? '',
        p.social?.instagram?.text ?? '',
        p.social?.pinterest?.title ?? '',
        p.social?.pinterest?.description ?? '',
        p.cta ?? '',
        (p.hashtags ?? []).join(' '),
        p.image_prompt ?? ''
      ])
    }
    return rows.map(r=>r.map(v=>`"${(v||'').replace(/"/g,'""')}"`).join(',')).join('\n')
  }, [data])

  const exportJSON = () => {
    if (!data?.campaign) return
    const payload = {
      ...data.campaign,
      pillar, language, topic, goal, keywords,
    }
    const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = `stm-campaign-${Date.now()}.json`; a.click()
    URL.revokeObjectURL(url)
  }
  const exportCSV = () => {
    if (!csv) return
    const blob = new Blob([csv], {type:'text/csv'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = `stm-campaign-${Date.now()}.csv`; a.click()
    URL.revokeObjectURL(url)
  }

  const onSaveLocal = () => {
    if (!data?.campaign) return
    const id = saveCampaign({
      ...data.campaign,
      pillar, language, topic, goal, keywords,
    })
    // go to saved list
    router.push('/studio/campaign/saved')
  }
  const onSaveBackend = async () => {
  if (!data?.campaign) return
  const payload = {
    title: data.campaign.campaign_title || topic,
    overview: data.campaign.overview || '',
    pillar, language, goal, keywords,
    posts: (data.campaign.posts||[]).map(p=>({
      title: p.title||'',
      image_prompt: p.image_prompt||'',
      email_subject: p.email?.subject||'',
      email_body: p.email?.body||'',
      fb_text: p.social?.facebook?.text||'',
      ig_text: p.social?.instagram?.text||'',
      pin_title: p.social?.pinterest?.title||'',
      pin_desc: p.social?.pinterest?.description||'',
      cta: p.cta||'',
      hashtags: p.hashtags||[],
    })),
  }
  const r = await fetch('/api/studio/campaign/save', { // tiny proxy to attach cookies on server if you prefer
    method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)
  })
  if(!r.ok) return alert(await r.text())
  alert('Saved to backend ✅')
}


  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Campaigns</h1>

      <form onSubmit={onGenerate} className="grid gap-3 md:grid-cols-3 bg-white border rounded-xl p-4">
        <div className="md:col-span-3">
          <label className="text-sm">Core topic</label>
          <input value={topic} onChange={e=>setTopic(e.target.value)} required
                 className="mt-1 w-full border rounded-lg px-3 py-2"
                 placeholder="e.g., Winter Som Tam series for Malmö foodies" />
        </div>

        <div>
          <label className="text-sm">Pillar</label>
          <select value={pillar} onChange={e=>setPillar(e.target.value as any)}
                  className="mt-1 w-full border rounded-lg px-3 py-2">
            <option>Food</option><option>Game</option><option>Wellness</option>
          </select>
        </div>

        <div>
          <label className="text-sm">Language</label>
          <select value={language} onChange={e=>setLanguage(e.target.value as any)}
                  className="mt-1 w-full border rounded-lg px-3 py-2">
            <option value="en">English</option>
            <option value="sv">Svenska</option>
            <option value="th">ไทย</option>
          </select>
        </div>

        <div>
          <label className="text-sm">Goal</label>
          <select value={goal} onChange={e=>setGoal(e.target.value as any)}
                  className="mt-1 w-full border rounded-lg px-3 py-2">
            <option value="awareness">Awareness</option>
            <option value="traffic">Traffic</option>
            <option value="engagement">Engagement</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="text-sm">Keywords (optional)</label>
          <input value={keywords} onChange={e=>setKeywords(e.target.value)}
                 className="mt-1 w-full border rounded-lg px-3 py-2"
                 placeholder="gluten-free, Thai basil, Malmö, family budget" />
        </div>

        <div className="md:col-span-3">
  
          <button
            disabled={loading}
            className="w-full md:w-auto bg-black text-white rounded-lg px-4 py-2 hover:opacity-90 disabled:opacity-60"
          >
            {loading ? 'Generating…' : 'Generate Campaign'}
          </button>
        </div>
      </form>

      {error && <div className="text-red-600 text-sm whitespace-pre-wrap">{error}</div>}

      {data?.campaign && (
        <div className="space-y-4">
          <div className="rounded-xl border bg-white p-4">
            <div className="font-semibold">{data.campaign.campaign_title || 'Campaign'}</div>
            <div className="text-sm text-gray-600 mt-1">{data.campaign.overview}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <button onClick={onSaveLocal} className="px-3 py-2 rounded bg-gray-100 hover:bg-gray-200">💾 Save Locally</button>
              <button onClick={onSaveBackend} className="px-3 py-2 rounded bg-gray-100 hover:bg-gray-200">💾 Save to Backend</button>
              <button onClick={exportJSON} className="px-3 py-2 rounded bg-gray-100 hover:bg-gray-200">Download JSON</button>
              {csv && <button onClick={exportCSV} className="px-3 py-2 rounded bg-gray-100 hover:bg-gray-200">Download CSV</button>}
              <button
                onClick={()=>document.getElementById('importFile')?.click()}
                className="px-3 py-2 rounded bg-gray-100 hover:bg-gray-200"
              >
                📥 Import JSON
              </button>
              
              <input id="importFile" type="file" accept="application/json" hidden
                onChange={async (e) => {
                  const f = e.target.files?.[0]; if(!f) return;
                  const txt = await f.text(); importC(JSON.parse(txt))
                }} />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.campaign.posts?.map((p, i) => (
              <div key={i} className="rounded-xl border bg-white p-4 space-y-3">
                <div className="font-medium">{p.title || `Post ${i+1}`}</div>
                {p.overview && <div className="text-xs text-gray-500"></div>

                }
                <div className="text-sm"><span className="font-semibold">CTA:</span> {p.cta || '—'}</div>
                <div className="text-xs text-gray-500">{p.hashtags?.join(' ')}</div>

                <div className="pt-2 border-t">
                  <div className="text-sm font-semibold flex items-center gap-2">
                    Email <CopyBtn text={p.email?.subject} label="Copy subject" />
                  </div>
                  <div className="text-sm mt-1 whitespace-pre-wrap">{p.email?.body || '—'}</div>
                  <div className="mt-2"><CopyBtn text={`${p.email?.subject}\n\n${p.email?.body}`} label="Copy email" /></div>
                </div>

                <div className="pt-2 border-t">
                  <div className="text-sm font-semibold flex items-center gap-2">
                    Facebook <CopyBtn text={p.social?.facebook?.text} />
                  </div>
                  <pre className="text-sm whitespace-pre-wrap">{p.social?.facebook?.text || '—'}</pre>
                </div>

                <div className="pt-2 border-t">
                  <div className="text-sm font-semibold flex items-center gap-2">
                    Instagram <CopyBtn text={p.social?.instagram?.text} />
                  </div>
                  <pre className="text-sm whitespace-pre-wrap">{p.social?.instagram?.text || '—'}</pre>
                </div>

                <div className="pt-2 border-t">
                  <div className="text-sm font-semibold flex items-center gap-2">
                    Pinterest
                    <CopyBtn text={p.social?.pinterest?.title} label="Copy title" />
                    <CopyBtn text={p.social?.pinterest?.description} label="Copy desc" />
                  </div>
                  <div className="text-sm"><span className="font-medium">Title:</span> {p.social?.pinterest?.title || '—'}</div>
                  <div className="text-sm"><span className="font-medium">Description:</span> {p.social?.pinterest?.description || '—'}</div>
                </div>

                {p.image_prompt && (
                  <div className="pt-2 border-t text-xs text-gray-400">
                    Image prompt: {p.image_prompt}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
