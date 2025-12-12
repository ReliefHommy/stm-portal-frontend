// app/login/page.tsx
'use client'

import MainNavbar from "../components/hompage/MainNavbar";

export default function LoginPage() {
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const email = fd.get('email'); const password = fd.get('password')
    const r = await fetch('/api/auth/login', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ email, password })
    })
    if (r.ok) window.location.href = '/studio'
    else alert(await r.text())
  }
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <MainNavbar />
    <div>
      <form onSubmit={onSubmit} className="max-w-sm mx-auto p-6 space-y-4">
        <h1 className="text-xl font-semibold">Login</h1>
        <input name="email" placeholder="Email" className="w-full border rounded px-3 py-2" />
        <input type="password" name="password" placeholder="Password" className="w-full border rounded px-3 py-2" />
        <button className="w-full bg-black text-white rounded px-3 py-2">Login → Studio</button>
      </form>
    </div>

    </main>
     
 
  )
}
