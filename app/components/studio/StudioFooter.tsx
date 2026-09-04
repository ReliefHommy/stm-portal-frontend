'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
  <Link href="/studio/campaign/saved" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-lg">Saved</Link>

        </div>
                <div>
         {/* column 3 */}
          <h3 className="font-bold text-lg">STM Studio_3</h3>
   <Link href="/studio/campaign" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-lg">Campaign</Link>
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
