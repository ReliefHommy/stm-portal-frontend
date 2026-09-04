"use client";

import React from "react";
import Link from "next/link";
import MainNavbar from "./components/hompage/MainNavbar";

import FooterSociety from "./components/hompage/FooterSociety";
import HeroSociety from "./components/hompage/Hero";
import FeaturedThisWeek from "./components/hompage/FeaturedThisWeek";
import CategoryBar from "./components/hompage/CategoryBar";
import CategoryTiles from "./components/hompage/CategoryTiles";
import BlogContentFeed from "./components/blog/BlogContentFeed";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-fuchsia-200 via-white to-white" />

      <div className="relative z-10">
        <MainNavbar />
    
<CategoryBar/>


        <HeroSociety/>
        <FeaturedThisWeek/>
< CategoryTiles/>
        <main className="mx-auto max-w-[1280px] px-4 pb-16 pt-6 lg:px-6">
          {/* Section 1: Hero */}
         

          {/* Section 2: Explore STM cards */}
      

          {/* Section 3: Upcoming Events preview */}


          {/* Section 4: Marketplace preview */}


          {/* Section 5: Latest Stories preview */}
          <BlogContentFeed
            title="Latest Stories"
            subtitle="Fresh posts from STM Studio"
          />

          {/* Section 6: About STM */}

        </main>

        <FooterSociety />
      </div>
    </div>
  );
}

function SectionHeader({
  title,
  subtitle,
  ctaHref,
  ctaLabel,
}: {
  title: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
          {title}
        </h2>
        {subtitle ? <p className="mt-1 text-sm text-slate-600">{subtitle}</p> : null}
      </div>

      {ctaHref && ctaLabel ? (
        <Link
          href={ctaHref}
          className="text-sm font-bold text-fuchsia-700 transition hover:text-fuchsia-800"
        >
          {ctaLabel}
        </Link>
      ) : null}
    </div>
  );
}

function ExploreCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="text-lg font-extrabold text-slate-900 group-hover:text-fuchsia-700">
        {title}
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-4 text-sm font-bold text-fuchsia-700">Open →</div>
    </Link>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

function StoryPreviewCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-fuchsia-100 via-orange-50 to-slate-100" />
      <h3 className="mt-4 text-lg font-extrabold leading-6 text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}






