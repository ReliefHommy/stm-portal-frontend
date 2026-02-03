import MainNavbar from "@/app/components/hompage/MainNavbar";

import type { Metadata } from "next";
import FooterSociety from "../components/hompage/FooterSociety";


export const metadata: Metadata = {
  title: "About Somtam Society | Thai Events & Marketplace in Europe",
  description:
    "-Discover the heart of Thai culture in the EU. We map Thai events, festivals, and authentic marketplaces across Europe, starting from our home in Sweden.-STM Marketplace is a Sweden-rooted, EU-focused platform connecting Thai food, wellness, and game experiences with modern digital tools.",
alternates: {
    canonical: 'https://somtammarket.com/about',
  },
  openGraph: {
    title: 'About Somtam Society',
    description: 'Bridging Bangkok and Europe through events, food, and wellness.',
    images: [{ url: '/logo_red.png' }], // Use a high-quality "Community" photo
  }


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
            Connecting Thai Culture Across Europe
          </h1>
          <p className="max-w-2xl text-base font-semibold uppercase leading-relaxed text-slate-600">
            Your digital home for Thai events, authentic flavors, and community wellness.
          </p>
        </header>
                {/* Our story */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Our Story: From Sweden with a Global Heart.
          </h2>
          <p className="text-slate-700">
           STM (Somtam Society) began with a simple observation in Sweden: the Thai community in Europe is vibrant and growing, but its information was scattered. We started as a creator-led platform to share the "Secret Spices" of our culture—from traditional food and wellness practices to indie games inspired by Thai roots.
          </p>
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            The Evolution: Events, Stories, and Solutions.
          </h2>
          <p className="text-slate-700">
         Today, we have grown into a multi-layered ecosystem designed to serve the Thai Diaspora and EU culture-seekers in three clear steps:</p>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li>
              • <span className="font-medium">Thai-EU Events (The Pulse):</span>  We are the first place to look for Thai festivals, temple fairs, and community meetups across all EU countries. We believe that physical connection is the heart of our society.
            </li>
            <li>
              • <span className="font-medium">Content-First Exploration (The Soul):</span>  We dive deep into Thai food, holistic wellness, and creative play (Games), providing the context and stories that make our traditions meaningful.
            </li>
            <li>
              • <span className="font-medium">The STM Marketplace (The Engine):</span>  We provide the infrastructure for Thai vendors in Europe. Our marketplace connects you directly with trusted Thai groceries, wellness practitioners, and authentic restaurant partners.
            </li>
          </ul>

        </section>

        {/* Mission Section */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          Our Mission: Bridging Thai Culture and Europe
          </h2>
          <p className="text-slate-700">
            Bridging Bangkok and Europe Our mission is to give Thai culture a modern, EU-ready digital home. From our base in Sweden, we build tools and experiences that scale across the EU—so Thai culture becomes easier to access, share, and enjoy, no matter which city you call home.
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




        


      </div>
      
      <FooterSociety/>
    </main>
  );
};

export default AboutPage;

