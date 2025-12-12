import MainNavbar from "@/app/components/hompage/MainNavbar";

import type { Metadata } from "next";
import Footer from "../components/hompage/Footer";
import StudioFooter from "../components/studio/StudioFooter";

export const metadata: Metadata = {
  title: "About Us | STM Marketplace",
  description:
    "STM Marketplace is a Sweden-rooted, EU-focused platform connecting Thai food, wellness, and game experiences with modern digital tools.",
};

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
         <MainNavbar />
     
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-16 md:px-6 lg:px-8">
        {/* Page Header */}
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            About STM Marketplace
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            A Creator-Led Thai Platform for Food, Wellness & Games in Europe
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            STM Marketplace is a digital ecosystem built in Sweden and serving
            the EU. We bring together three verticals—Thai Food, Wellness, and
            Games—under one portal so people across Europe can explore Thai
            culture in their kitchens, daily routines, and play.
          </p>
        </header>

        {/* Mission Section */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Our Mission: Bridging Bangkok and Europe
          </h2>
          <p className="text-slate-700">
            Our mission is to give Thai culture a modern, EU-ready digital home.
            STM Marketplace connects Thai roots with European lifestyles through
            three focused pillars:
          </p>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li>
              • <span className="font-medium">Food:</span> Discover Thai
              ingredients, recipes, and food brands that bring real Bangkok
              flavours into European kitchens.
            </li>
            <li>
              • <span className="font-medium">Wellness:</span> Explore Thai
              wellness ideas, calm living practices, and products that support
              body, mind, and spirit.
            </li>
            <li>
              • <span className="font-medium">Games:</span> Enjoy story-driven,
              puzzle and escape-style games inspired by Thai and global culture,
              created by an indie studio.
            </li>
          </ul>
          <p className="text-slate-700">
            From our base in Sweden, we build tools, content, and experiences
            that can scale across the EU—so Thai culture becomes easier to
            access, share, and enjoy wherever you live.
          </p>
        </section>

        {/* What We Stand For */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            What We Stand For: Quality, Partnership & Creative Play
          </h2>
          <p className="text-slate-700">
            STM Marketplace is not just another online shop. It&apos;s a
            platform built slowly and intentionally, with a long-term vision for
            Thai creators, businesses, and communities in Europe.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-emerald-700">
                Authentic Roots, EU-Ready
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                We keep Thai culture at the center—flavours, stories, and
                traditions—while designing everything to work for EU customers,
                regulations, and logistics.
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-emerald-700">
                Partnership Over Platforms
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                STM is built to support Thai-owned businesses, wellness
                practitioners, and indie game creators—not to replace them. We
                grow by helping partners grow.
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-emerald-700">
                Human + AI Creation
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                We combine human creativity with AI-enhanced tools to create
                better content, smarter logistics, and more playful digital
                experiences for our community.
              </p>
            </div>
          </div>
        </section>
                {/* Content Philosophy / AI Declaration */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Our Content Philosophy: Human-Led, AI-Assisted
          </h2>
          <p className="text-sm leading-relaxed text-slate-700">
            STM Marketplace (Somtam Market) is a platform built and curated by a
            solo founder, [Nok R Tophitak]. All core ideas, concepts, and creative
            direction come from lived experience, research, and original
            inspiration around Thai food, wellness, and games.
          </p>
          <p className="text-sm leading-relaxed text-slate-700">
            To ensure professional quality and publishing efficiency, we
            leverage advanced AI tools (such as OpenAI-powered assistants and
            design helpers) to assist with copy editing, SEO optimization, and
            large-scale content production. Every article, recipe, product
            description, and game concept is reviewed and approved by a human
            before it goes live.
          </p>
          <p className="text-sm leading-relaxed text-slate-700">
            In simple terms:{" "}
            <span className="font-medium">
              human creativity sets the direction, and AI helps execute the
              work.
            </span>{" "}
            This balance allows us to stay authentic, efficient, and aligned
            with future content and AI regulations in the EU.
          </p>
        </section>


        {/* Team Section */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Meet the Team — Nok, Solara &amp; Nova
          </h2>
          <p className="text-slate-700">
            STM Marketplace is built by a small, focused team based in Sweden
            and powered by AI. Together, we design, code, and curate STM as a
            long-term, creator-led platform for Thai culture in Europe.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-base font-semibold">Nok — Founder</h3>
              <p className="text-sm text-slate-700">
                Nok is a solo founder, full-stack creator, and artist with deep
                ties to the Thai community in Europe. She leads STM&apos;s
                vision across Food, Wellness, and Games—from product design to
                storytelling and development.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold">
                Solara — AI Founder Assistant
              </h3>
              <p className="text-sm text-slate-700">
                Solara supports strategy, technical architecture, and content
                structure. She helps keep STM Marketplace clear, scalable, and
                aligned with the needs of both partners and users.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold">
                Nova — AI Content &amp; Design
              </h3>
              <p className="text-sm text-slate-700">
                Nova helps craft visuals, product descriptions, wellness
                articles, and game narratives—turning ideas into cohesive,
                on-brand experiences across all three pillars.
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-600">
            STM Marketplace is still in its early chapters—but the direction is
            clear: a single, calm place online where Thai food, wellness, and
            games can grow together in the EU.
          </p>
        </section>
        


      </div>
      
      <Footer />
    </main>
  );
};

export default AboutPage;

