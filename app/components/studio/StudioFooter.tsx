'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Settings, Wand2, FileText, Layers } from 'lucide-react'

const items = [
  { href: '/studio', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/studio/ai-tools', label: 'AI Tools', icon: Wand2 },
  { href: '/studio/posts', label: 'Posts', icon: FileText },
  { href: '/studio/templates', label: 'Templates', icon: Layers },
  { href: '/studio/settings', label: 'Settings', icon: Settings },
]
export default function StudioFooter() {
  const pathname = usePathname()
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between">
          <div>
          <h3 className="font-bold text-lg">STM Studio_1</h3>

          <Link href="/studio/campaign/backend" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-lg">
  Backend Campaigns
</Link>

        </div>
        {/* column 2 */}
        
        <div>
          <h3 className="font-bold text-lg">STM Studio_2</h3>
  <Link href="/studio/campaign/saved" className="...">Saved</Link>

        </div>
                <div>
         {/* column 3 */}
          <h3 className="font-bold text-lg">STM Studio_3</h3>
   <Link href="/studio/campaign" className="...">Campaign</Link>
        </div>





      </div>
      <div className="text mt-4 align-center text-sm flex justify-center gap-2">
             <span>⚡ Powered by <strong>STM Studio AI</strong></span>
      <span>•</span>
      <span>Next.js × Django × OpenAI</span>
        </div>
 
    </footer>
   
  )
}
