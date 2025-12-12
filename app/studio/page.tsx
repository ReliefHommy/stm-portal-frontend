// app/studio/page.tsx


import { apiGet } from "../../lib/fetcher"
import StudioFooter from "../components/studio/StudioFooter"


export default async function StudioDashboard() {
  let me: any = null
  try { me = await apiGet('/api/users/me/') } catch {}
  // Example: fetch counts (replace with your Django endpoints)
  // const stats = await apiGet<{ posts: number; templates: number }>('/api/studio/stats/')
  const stats = { posts: 0, templates: 0 } // placeholder

  return (
    
       <section className="p-6">

        <h1 className="text-2xl font-semibold">Studio Dashboard</h1>
        <p className="text-gray-500">
        Auth status: {me ? `Hello ${me.username || me.email}` : 'not connected'}
      </p>
    <div className="grid gap-4 md:grid-cols-3">


      <div className="rounded-xl border bg-white p-4">
        <div className="text-sm text-gray-500">AI Posts</div>
        <div className="text-3xl font-semibold">{stats.posts}</div>
      </div>
      <div className="rounded-xl border bg-white p-4">
        <div className="text-sm text-gray-500">Templates</div>
        <div className="text-3xl font-semibold">{stats.templates}</div>
      </div>
      <div className="rounded-xl border bg-white p-4">
        <div className="text-sm text-gray-500">Status</div>
        <div className="text-base">Ready for integrations</div>
      </div>
    </div>
       <StudioFooter />
    </section>
  )
  
}
