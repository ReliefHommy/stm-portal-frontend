import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, BrainCircuit, Workflow, Bot } from "lucide-react";
import MainNavbar from "@/app/components/hompage/MainNavbar";
import Footer from "../components/hompage/Footer";

export const metadata: Metadata = {
  title: "Nok in House | AI Studio",
  description:
    "Discover Nok in House — the AI Studio behind STM Marketplace. Explore AI-powered design tools, automation systems, and creator-focused SaaS solutions.",
};

const AiStudioPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <MainNavbar />
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-16 md:px-6 lg:px-8">

        {/* Header */}
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Our AI Studio
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Nok in House — AI Studio & Creative Technology Lab
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            Nok in House is the AI engine powering STM Marketplace.  
            It is where ideas, automation, and creator tools come alive — blending
            human imagination with advanced AI systems to accelerate content,
            design, marketing, and product development across the EU.
          </p>

          {/* External Link Button */}
          <div className="pt-2">
            <a
              href="https://nokinhouse.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Visit Nok in House
              <Sparkles size={16} />
            </a>
          </div>
        </header>

        {/* Section: What is Nok in House */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            What is Nok in House?
          </h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Nok in House is a creator-led, AI-assisted studio dedicated to
            building tools that support Food, Wellness, and Game creators in
            Europe. From automated content systems to AI-powered design assets,
            the studio develops the next generation of digital helpers for
            independent businesses.
          </p>

          <p className="text-sm leading-relaxed text-slate-700">
            Everything starts from human creativity — AI amplifies it.  
            This is where Nok’s ideas turn into production-ready tools, apps,
            templates, and automation systems.
          </p>
        </section>

        {/* Section: Core Areas */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Core Areas of Development
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {/* AI Content Tools */}
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <BrainCircuit className="text-emerald-700" size={22} />
              <h3 className="mt-2 text-sm font-semibold text-slate-900">
                AI Content Tools
              </h3>
              <p className="mt-2 text-xs text-slate-700">
                Automated writing, SEO content engines, recipe copy, blog
                drafts, and partner marketing kits.
              </p>
            </div>

            {/* AI Workflow Automation */}
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <Workflow className="text-emerald-700" size={22} />
              <h3 className="mt-2 text-sm font-semibold text-slate-900">
                Workflow Automation
              </h3>
              <p className="mt-2 text-xs text-slate-700">
                Pipelines for mass content scheduling, campaign batches, and
                social media integration.
              </p>
            </div>

            {/* AI SaaS Services */}
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <Bot className="text-emerald-700" size={22} />
              <h3 className="mt-2 text-sm font-semibold text-slate-900">
                AI SaaS Services
              </h3>
              <p className="mt-2 text-xs text-slate-700">
                Smart mini-apps for creators: design helpers, auto-post engines,
                product description generators, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Future Vision */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Vision for the Future
          </h2>

          <p className="text-sm leading-relaxed text-slate-700">
            Nok in House aims to become a full ecosystem of AI tools designed
            specifically for independent creators, small businesses, and
            cultural entrepreneurs. Every tool we build will integrate with STM
            Marketplace — allowing partners to automate content, enhance
            visibility, and grow sustainably.
          </p>

          <p className="text-sm leading-relaxed text-slate-700">
            From Food brands to Wellness practitioners to Game studios, Nok in
            House is committed to supporting EU-based creators through accessible
            and human-centered AI innovation.
          </p>
        </section>

        {/* Global CTA */}
        <section className="rounded-2xl bg-black p-6 text-white shadow-md md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Explore the Studio Behind the Vision
          </h2>
          <p className="mt-3 max-w-2xl text-sm md:text-base">
            Visit Nok in House to explore the ideas, tools, and AI apps driving
            STM Marketplace forward.
          </p>
          <div className="mt-6">
            <a
              href="https://nokinhouse.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
            >
              Go to Nok in House Website
              <Sparkles size={16} />
            </a>
          </div>
        </section>
      </div>
            <Footer />
    </main>
  );
};

export default AiStudioPage;
