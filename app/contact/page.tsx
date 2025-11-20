import MainNavbar from "@/app/components/hompage/MainNavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | STM Marketplace",
  description:
    "Get in touch with STM Marketplace. Send us a message about partnerships, support, or general inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
       <MainNavbar />
      <div className="mx-auto w-full max-w-2xl px-4 py-16 md:px-6 lg:px-8">
        
        {/* Header */}
        <header className="space-y-3 text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Contact Us
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Get in Touch
          </h1>
          <p className="text-base leading-relaxed text-slate-600 max-w-lg mx-auto">
            If you have questions about partnerships, content, support,
            or any of our STM Marketplace pillars — Food, Wellness, or Games —
            feel free to reach out. We’ll respond as soon as we can.
          </p>
        </header>

        {/* Contact Form */}
        <form className="space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 shadow-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 shadow-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          {/* Contact Reason */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">
              Reason for Contact
            </label>
            <select
              className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 shadow-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            >
              <option value="">Select a reason</option>
              <option value="food">Food Marketplace</option>
              <option value="wellness">Wellness Marketplace</option>
              <option value="games">Games Marketplace</option>
              <option value="partners">Partnership Inquiry</option>
              <option value="support">Support / Help</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">
              Your Message
            </label>
            <textarea
              rows={4}
              placeholder="Write your message here..."
              className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 shadow-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
          >
            Send Message
          </button>
        </form>

        {/* Extra Contact Info Section */}
        <div className="mt-12 text-center text-sm text-slate-500">
          <p>You may also reach us through email:</p>
          <p className="font-medium text-slate-700 mt-1">
            nokinhouse.service@gmail.com
          </p>
        </div>
      </div>
    </main>
  );
}
