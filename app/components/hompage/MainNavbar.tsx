//app/components/MainNavbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { Menu, X, Home, InfoIcon, User, ContactIcon, DoorOpenIcon, DoorClosedLocked, WorkflowIcon, } from 'lucide-react'; // optional: use lucide icons



export default function MainNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
     const navItems = [
    { name: 'Home', href: '/', icon: <Home size={16} /> },
    { name: 'About', href: '/about', icon: <InfoIcon size={16} /> },
    { name: 'Join as Partner', href: '/partner', icon: <User size={16} /> },
    { name: 'Contact', href: '/contact', icon: <ContactIcon size={16} /> },
    { name: 'Ai-Studio', href: '/ai-studio', icon: <WorkflowIcon size={16} /> },
    { name: 'Account', href: '/login', icon: <DoorClosedLocked size={16} /> },
  ];
     const linkClass = (href: string) =>
    `flex items-center gap-1 hover:text-indigo-500 transition ${
      pathname === href ? 'text-indigo-800 font-semibold' : 'text-gray-800'
    }`;


  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <Link href="/" className="logo">
           <Image
              src="/logo_red.png"
              alt="Somtam Society"
              width={80}
              height={80}
              priority
            />
        </Link>
          {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm-medium">
           {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.icon}
              {item.name}
            </Link>
          ))}




      
        
        </div>
        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 p-1 border rounded"
        >
                 {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Dropdown */}
      <div
      className={`md:hidden px-6 pb-4 flex flex-col gap-3 text-sm font-medium transition-all duration-300 ease-in-out ${
          menuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
        }`}
       
      >
                {[...navItems].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={linkClass(item.href)}
            onClick={() => setMenuOpen(false)}
          >
           
            {item.name}
          </Link>
        ))}
      
       
      </div>

    </nav>
  );
}
