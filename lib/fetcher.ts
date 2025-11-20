import 'server-only'
import { cookies } from 'next/headers'

const API = process.env.NEXT_PUBLIC_API_BASE!

// Small helper to read the STM token from cookies
async function getStmToken() {
  const cookieStore = await cookies()
  return cookieStore.get('stm_token')?.value || ''
}

//*doFetch*//
async function doFetch(path: string, token?: string) {
  const r = await fetch(`${API}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    // never cache auth’d calls in dev
    cache: 'no-store',
  })
  return r
}

//*apiGet*//
export async function apiGet<T>(path: string): Promise<T> {
  const token = await getStmToken()
  const r = await doFetch(path, token)

  // try a one-time refresh on 401
  if (r.status === 401) {
    const refreshRes = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_ORIGIN ?? ''}/api/auth/refresh`,
      { method: 'POST' }
    )

    if (refreshRes.ok) {
      const token2 = await getStmToken() // cookie was replaced by refresh route
      const r2 = await doFetch(path, token2)
      if (!r2.ok) throw new Error(`GET ${path} -> ${r2.status}`)
      return r2.json()
    }
  }

  if (!r.ok) throw new Error(`GET ${path} -> ${r.status}`)
  return r.json()
}

//*apiGetMaybe*//
export async function apiGetMaybe<T>(path: string): Promise<T | null> {
  try {
    return await apiGet<T>(path)
  } catch {
    return null
  }
}

//*apiPost*//
export async function apiPost<T>(path: string, data: any): Promise<T> {
  const token = await getStmToken()

  const r = await fetch(`${API}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token || ''}`,
    },
    body: JSON.stringify(data),
    cache: 'no-store',
  })

  if (!r.ok) throw new Error(`POST ${path} -> ${r.status}`)
  return r.json()
}

//*apiDelete*//
export async function apiDelete<T>(path: string): Promise<T> {
  const token = await getStmToken()

  const r = await fetch(`${API}${path}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token || ''}`,
    },
    cache: 'no-store',
  })

  if (!r.ok) throw new Error(`DELETE ${path} -> ${r.status}`)
  return r.json()
}
