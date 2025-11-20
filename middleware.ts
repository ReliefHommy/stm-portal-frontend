import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const STUDIO_PREFIX = '/studio'
const COOKIE_NAME = process.env.NEXT_PUBLIC_STM_TOKEN_COOKIE ?? 'stm_token'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (!pathname.startsWith(STUDIO_PREFIX)) return NextResponse.next()

  const token = req.cookies.get(COOKIE_NAME)?.value
  if (!token) {
    const url = req.nextUrl.clone()
    url.pathname = '/' // redirect to portal home (or /login if you have it)
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/studio/:path*'],
}
