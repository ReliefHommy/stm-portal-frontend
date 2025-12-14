//app/studio/PublishButton.tsx
'use client'

type PublishProps = {
  campaignId: number
}

export function PublishButton({ campaignId }: PublishProps) {
  async function publish() {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE
     if (!API_BASE) {
      alert('Missing NEXT_PUBLIC_API_BASE')
      return
    }
    const url = `${API_BASE}/api/studio/${campaignId}/`

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({}) // no body required for now
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('Publish failed:', res.status, text, url)
      alert('Publish failed: ' + res.status)
      return
    }

    const data = await res.json()
    console.log('Published:', data)
    alert('Published to STM!')
  }

  return (
    <button
      onClick={publish}
      className="mt-2 inline-flex items-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700"
    >
      Publish to STM
    </button>
  )
}

