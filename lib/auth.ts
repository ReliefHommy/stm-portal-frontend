import { cookies } from 'next/headers'

export function getStmToken() {
  const name = process.env.NEXT_PUBLIC_STM_TOKEN_COOKIE ?? 'stm_token'
  return cookies().get(name)?.value || ''
}
