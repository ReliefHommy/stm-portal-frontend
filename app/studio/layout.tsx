
import type { ReactNode } from 'react'
import Topbar from '../components/studio/Topbar'
import Sidebar from '../components/studio/Sidebar'
import MainNavbar from '../components/hompage/MainNavbar'


export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <div className="min-h-screen w-full bg-gray-50">
       <MainNavbar />
      <div className="flex">
             <Sidebar />
     <div className="flex-1 flex flex-col">
         
      
          <Topbar />
                   
          <main className="p-4 md:p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
