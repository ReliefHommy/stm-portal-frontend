'use client'

import { LogoutButton } from "./LogoutButton"

export default function Topbar() {
  return (
    <header className="w-full h-14 border-b bg-white flex items-center justify-between px-4">
      <div className="font-medium">Workspace: STM Food</div>
      <div className="text-sm text-gray-500">Authenticated via STM</div>
      <LogoutButton />
    </header>
    
  )
}
