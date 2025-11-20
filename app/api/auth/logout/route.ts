// app/api/auth/logout/route.ts
import { NextResponse } from 'next/server'

export async function POST() {
  const res = NextResponse.json({ ok: true })
  const clear = { httpOnly: true, secure: false, sameSite: 'lax', path: '/', maxAge: 0 as any }
  res.cookies.set('stm_token', '', clear)
  res.cookies.set('stm_refresh', '', clear)
  return res
}
