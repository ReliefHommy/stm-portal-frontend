//app/api/studio/campaign/save/route.ts
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
const API = process.env.NEXT_PUBLIC_API_BASE! 

export async function POST(req: Request) {
  const cookieStore = await cookies()
  const token = cookieStore.get('stm_token')?.value

  if (!token) {
    return NextResponse.json({ detail: 'No auth token' }, { status: 401 })
  }

  const body = await req.text()

  const r = await fetch(`${API}/api/studio/campaigns/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body,
  })

  const text = await r.text()

  return new NextResponse(text, {
    status: r.status,
    headers: { 'Content-Type': 'application/json' },
  })
}




