
import { cookies } from 'next/headers'

export async function getStmToken() {
  const name = process.env.NEXT_PUBLIC_STM_TOKEN_COOKIE ?? 'stm_token'
  const cookieStore = await cookies()
  return cookieStore.get(name)?.value || ''
}

