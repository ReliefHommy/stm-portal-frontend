// app/api/auth/refresh/route.ts
import { NextResponse } from 'next/server'
const API = process.env.NEXT_PUBLIC_API_BASE!

export async function POST(req: Request) {
  const cookie = (req.headers.get('cookie') || '')
  const match = cookie.match(/stm_refresh=([^;]+)/)
  const refresh = match?.[1]
  if (!refresh) return NextResponse.json({ detail:'No refresh' }, { status: 401 })

  const r = await fetch(`${API}/api/token/refresh/`, {
    method:'POST',
    headers:{ 'Content-Type':'application/json' },
    body: JSON.stringify({ refresh }),
  })
  const data = await r.json()
  if (!r.ok) return NextResponse.json(data, { status: r.status })

  const res = NextResponse.json({ ok: true })
  res.cookies.set('stm_token', data.access, {
    httpOnly: true,
    secure: false,        // you can flip this to NODE_ENV check later
    sameSite: 'lax',
    path: '/',
    maxAge: 60*15,
  })
  return res
}
