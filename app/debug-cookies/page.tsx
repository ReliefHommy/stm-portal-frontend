// app/debug-cookies/page.tsx
import { cookies } from 'next/headers'
export default function DebugCookies() {
  const all = cookies().getAll().map(c => `${c.name}=${c.value.slice(0,12)}…`)
  return <pre className="p-4">{JSON.stringify(all, null, 2)}</pre>
}
