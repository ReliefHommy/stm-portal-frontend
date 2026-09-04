//app/studio/PublishButton.tsx
'use client'

type PublishProps = {
  campaignId: number
  title?: string
  excerpt?: string
  body?: string
  image_url?: string
}

export function PublishButton({ campaignId, title, excerpt, body, image_url }: PublishProps) {
  async function publish() {
    const url = `/api/studio/publish/${campaignId}`

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, excerpt, body, image_url }),
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

