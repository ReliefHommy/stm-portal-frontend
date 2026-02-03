import Link from 'next/link';
import Image from "next/image";

export default function FooterSociety() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-12 pb-8">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                             {/* Left: Logo */}
                     <div>        <Link href="/" className="logo">
           <Image
              src="/logo_red.png"
              alt="Somtam Society"
              width={60}
              height={60}
              priority
            />
        </Link></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          
          
          
          {/* Brand Section */}
          <div className="col-span-1">
            
            <h3 className="text-xl font-bold text-blue-900 mb-2">Somtam Society</h3>
            <p className="text-sm text-gray-600 max-w-xs mx-auto md:mx-0">
              Your gateway to the Thai community and cultural events across Europe.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-blue-900 transition-colors">Home</Link></li>
              <li><Link href="/" className="text-gray-600 hover:text-blue-900 transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                {/* This is the critical link for your Google Play Console fix */}
                <Link href="/privacy" className="text-gray-600 hover:text-blue-900 transition-colors font-medium">
                  Privacy Policy
                </Link>
              </li>
                 <li>
                {/* This is the critical link for your Google Play Console fix */}
                <Link href="/about" className="text-gray-600 hover:text-blue-900 transition-colors font-medium">
                  About us
                </Link>
              </li>
           
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} Somtam Society. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             {/* Add social links here later */}
             <span>Connecting Thai communities across the EU</span>
          </div>
        </div>
      </div>
      
    </footer>
  );
}