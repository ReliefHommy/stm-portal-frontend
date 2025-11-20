// app/studio/campaign/backend/[id]/page.tsx
import { apiGet } from '@/lib/fetcher'
import CopyBtn from '@/app/components/studio/CopyBtn'





type BackendPost = {
  id: number
  title: string
  angle: string
  image_prompt: string
  email_subject: string
  email_body: string
  fb_text: string
  ig_text: string
  pin_title: string
  pin_desc: string
  cta: string
  hashtags: string[]
}

type BackendCampaign = {
  id: number
  title: string
  overview: string
  pillar: string
  language: string
  goal: string
  keywords: string
  created_at: string
  posts: BackendPost[]
}

export const dynamic = 'force-dynamic'


export default async function BackendCampaignDetailPage({
  params,
}: {
  params: { id: string }
}) {
  let campaign: BackendCampaign
  try {
    campaign = await apiGet<BackendCampaign>(`/api/campaigns/${params.id}/`)
  } catch (e) {
    return (
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">Campaign not found</h1>
        <p className="text-sm text-gray-600">
          Could not load this campaign from the backend. It may have been removed or you are not authorized.
        </p>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      <div className="rounded-xl border bg-white p-4 space-y-2">
        <div className="text-xs uppercase tracking-wide text-gray-500">
          {campaign.pillar} • {campaign.language.toUpperCase()} • {campaign.goal}
        </div>
        <h1 className="text-2xl font-semibold">{campaign.title}</h1>
        {campaign.overview && (
          <p className="text-sm text-gray-600 whitespace-pre-wrap">{campaign.overview}</p>
        )}
        {campaign.keywords && (
          <p className="text-xs text-gray-500">
            Keywords: <span className="italic">{campaign.keywords}</span>
          </p>
        )}
        <p className="text-[11px] text-gray-400">
          Created: {new Date(campaign.created_at).toLocaleString()}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {campaign.posts?.map((p) => (
          <div key={p.id} className="rounded-xl border bg-white p-4 space-y-3">
            <div>
              <div className="font-medium">{p.title || 'Untitled Post'}</div>
              {p.angle && (
                <div className="text-xs text-gray-500 mt-1">
                  Angle: {p.angle}
                </div>
              )}
              <div className="text-xs text-gray-500 mt-1">
                CTA: {p.cta || '—'}
              </div>
              {p.hashtags?.length ? (
                <div className="text-[11px] text-gray-400 mt-1">
                  {p.hashtags.join(' ')}
                </div>
              ) : null}
            </div>

            {/* Facebook */}
            <div className="pt-2 border-t">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold">Facebook</span>
                <CopyBtn text={p.fb_text} />
              </div>
              <pre className="text-sm whitespace-pre-wrap mt-1">
                {p.fb_text || '—'}
              </pre>
            </div>

            {/* Instagram */}
            <div className="pt-2 border-t">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold">Instagram</span>
                <CopyBtn text={p.ig_text} />
              </div>
              <pre className="text-sm whitespace-pre-wrap mt-1">
                {p.ig_text || '—'}
              </pre>
            </div>

            {/* Pinterest */}
            <div className="pt-2 border-t space-y-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold">Pinterest</span>
              </div>
              <div className="text-sm">
                <span className="font-medium">Title:</span> {p.pin_title || '—'}
              </div>
              <div className="text-sm">
                <span className="font-medium">Description:</span> {p.pin_desc || '—'}
              </div>
            </div>

            {/* Email (may be empty now – fine for seeding phase) */}
            {(p.email_subject || p.email_body) && (
              <div className="pt-2 border-t">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold">Email</span>
                  <CopyBtn
                    text={`${p.email_subject}\n\n${p.email_body}`}
                    label="Copy email"
                  />
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Subject: {p.email_subject || '—'}
                </div>
                <pre className="text-sm whitespace-pre-wrap mt-1">
                  {p.email_body || '—'}
                </pre>
              </div>
            )}

            {p.image_prompt && (
              <div className="pt-2 border-t text-[11px] text-gray-400">
                Image prompt: {p.image_prompt}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

