"use client";

import Link from "next/link";
import Image from "next/image";
export default function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 lg:px-6">
        <div className="flex items-center gap-3">
               {/* Left: Logo */}
        <Link href="/" className="logo">
           <Image
              src="/logo_red.png"
              alt="Somtam Society"
              width={60}
              height={60}
              priority
            />
        </Link>
          <div>
            <div className="text-sm font-extrabold text-slate-900">Somtam Society</div>
            <div className="text-xs text-slate-500">Thai culture & events in Europe</div>
          </div>
        </div>

        <nav className="flex items-center gap-4 text-sm font-semibold text-slate-700">
          <Link className="hover:text-slate-900" href="/">Home</Link>
          <Link className="hover:text-slate-900" href="/collaborator">Join as Collaborator</Link>
        </nav>
      </div>
    </header>
  );
}
