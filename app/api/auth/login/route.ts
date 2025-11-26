// app/api/auth/login/route.ts
import { NextResponse } from 'next/server'

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        { detail: 'email and password are required' },
        { status: 400 }
      )
    }

    const r = await fetch(`${API_BASE}/api/token/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    const data = await r.json().catch(() => ({}))

    if (!r.ok) {
      console.error('JWT login failed:', r.status, data)
      return NextResponse.json(data, { status: r.status })
    }

    const res = NextResponse.json({ ok: true })
    res.cookies.set('stm_token', data.access, {
      httpOnly: true,
      secure: false,  // dev only
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 15,
    })
    res.cookies.set('stm_refresh', data.refresh, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })
    return res
  } catch (e: any) {
    console.error('login route error', e)
    return NextResponse.json({ detail: 'Bad request' }, { status: 400 })
  }
}

