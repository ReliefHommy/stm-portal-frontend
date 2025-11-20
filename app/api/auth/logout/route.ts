// app/api/auth/logout/route.ts

import { NextResponse } from 'next/server'

export async function POST() {
  const res = NextResponse.json({ ok: true })

  res.cookies.set('stm_token', '', {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    path: '/',
    maxAge: 0
  })

  res.cookies.set('stm_refresh', '', {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    path: '/',
    maxAge: 0
  })

  return res
}

