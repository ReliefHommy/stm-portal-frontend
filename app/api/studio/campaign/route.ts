import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { pillar, language, topic, goal, keywords = '', count = 3 } = await req.json()

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ ok: false, error: 'Missing OPENAI_API_KEY' }, { status: 500 })
  }

  const prompt = `
You are STM Studio's marketing strategist.
Create a ${language} campaign for the STM ${pillar} pillar.
Goal: ${goal}. Core topic: ${topic}.
Extra keywords/context: ${keywords}.
Return exactly ${count} diverse posts that fit STM's tone: friendly, cultural, and useful.

Format strictly as JSON with:
{
  "campaign_title": "...",
  "overview": "...",
  "posts": [
    {
      "title": "...",
      "image_prompt": "...",
      "email": {"subject": "...", "body": "..."},
      "social": {
        "facebook": {"text": "..."},
        "instagram": {"text": "..."},
        "pinterest": {"title": "...", "description": "..."}
      },
      "cta": "...",
      "hashtags": ["#tag1","#tag2","#STMStudio"]
    }
  ]
}
Only JSON. No prose or commentary.
`

  try {
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: 'Return valid JSON only.' },
          { role: 'user', content: prompt },
        ],
      }),
    })

    const data = await r.json()
    if (!r.ok) {
      console.error('OpenAI error', data)
      return NextResponse.json({ ok: false, error: data }, { status: r.status })
    }

    const content = data.choices?.[0]?.message?.content ?? '{}'
    const campaign = JSON.parse(content)

    return NextResponse.json({ ok: true, campaign })
  } catch (e: any) {
    console.error(e)
    return NextResponse.json({ ok: false, error: e.message || 'Failed' }, { status: 500 })
  }
}

