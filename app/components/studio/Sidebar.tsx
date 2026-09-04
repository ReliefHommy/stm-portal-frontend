'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Settings, Wand2, FileText } from 'lucide-react'

const items = [
  { href: '/studio', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/studio/ai-tools', label: 'AI Tools', icon: Wand2 },
  { href: '/studio/posts', label: 'Posts', icon: FileText },
  { href: '/studio/settings', label: 'Settings', icon: Settings },
]

const campaignItems = [
  { href: '/studio/campaign', label: 'Campaign' },
  { href: '/studio/campaign/saved', label: 'Saved' },
  { href: '/studio/campaign/backend', label: 'Backend Campaigns' },
]

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="hidden md:flex w-64 min-h-screen border-r bg-gray-300 p-4 sticky top-0">
      <nav className="w-full">
        <div className="mb-6">
          <span className="text-xl font-bold">STM Studio</span>
          <p className="text-xs text-gray-600">AI CMS & Automation</p>
        </div>
        <ul className="space-y-1">
          {items.map(({ href, label, icon: Icon }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-100 ${
                    active ? 'bg-gray-100 font-medium' : ''
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="mt-6">
          <p className="px-3 mb-1 text-xs font-semibold uppercase tracking-wide text-gray-600">
            Campaigns
          </p>
          <ul className="space-y-1">
            {campaignItems.map(({ href, label }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block px-3 py-2 text-sm hover:bg-gray-100 rounded-lg ${
                      active ? 'bg-gray-100 font-medium' : ''
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </aside>
  )
}
