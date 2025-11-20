import 'server-only'
import { cookies } from 'next/headers'
const API = process.env.NEXT_PUBLIC_API_BASE!
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
  const token = cookies().get('stm_token')?.value
  const r = await doFetch(path, token)

  // try a one-time refresh on 401
  if (r.status === 401) {
    const rr = await fetch(`${process.env.NEXT_PUBLIC_SITE_ORIGIN ?? ''}/api/auth/refresh`, { method: 'POST' })
    if (rr.ok) {
      const token2 = cookies().get('stm_token')?.value // cookie was replaced
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
  try { return await apiGet<T>(path) } catch { return null }
}

//*apiPost*//
export async function apiPost<T>(path: string, data: any): Promise<T> {
  const token = cookies().get('stm_token')?.value
  const r = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type':'application/json', Authorization: `Bearer ${token||''}` },
    body: JSON.stringify(data),
    cache: 'no-store',
  })
  if (!r.ok) throw new Error(`POST ${path} -> ${r.status}`)
  return r.json()
}
//*apiDelete*//
export async function apiDelete<T>(path: string): Promise<T> {
  const token = cookies().get('stm_token')?.value
  const r = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}${path}`, {
    method: 'DELETE',
    headers: { 'Content-Type':'application/json', Authorization: `Bearer ${token||''}` },
    cache: 'no-store',
  })
  if (!r.ok) throw new Error(`DELETE ${path} -> ${r.status}`)
  return r.json()
}