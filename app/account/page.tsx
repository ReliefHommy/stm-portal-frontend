import type { Metadata } from "next";
import Link from "next/link";
import MainNavbar from "../components/hompage/MainNavbar";
import Footer from "../components/hompage/Footer";

export const metadata: Metadata = {
  title: "My Account | STM Marketplace",
  description:
    "Manage your profile, orders, wellness bookings, and game access in one place on STM Marketplace.",
};

const AccountPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
        <MainNavbar />
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-16 md:px-6 lg:px-8">
        {/* Header */}
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            My Account
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Manage Your STM Experience
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            Manage your profile, orders, and experiences across Food, Wellness,
            and Games in one place.
          </p>
        </header>

        {/* Main Grid Navigation */}
        <section className="grid gap-4 md:grid-cols-2">
          {/* Overview */}
          <NavCard
            title="Overview"
            description="A quick snapshot of your recent orders, wellness bookings, and game activity."
            href="/login"

          />

          {/* Profile & Login */}
          <NavCard
            title="Profile & Login"
            description="Update your name, contact details, language, and login settings."
            href="/login"
          />



      
   

    

          {/* Sign Out */}
          <NavCard
            title="Sign Out"
            description="Log out from your STM Marketplace account."
            href="/logout"
          />
          
        </section>
      </div>
    </main>
  );
};

export default AccountPage;

type NavCardProps = {
  title: string;
  description: string;
  href: string;
};

function NavCard({ title, description, href }: NavCardProps) {
  return (
     <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <Link href={href} className="group">
      <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-[2px] hover:shadow-md group-hover:ring-emerald-500/50">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {description}
          </p>
        </div>
        <div className="mt-4 text-xs font-semibold text-emerald-700 group-hover:underline">
          Manage {title.toLowerCase()}
        </div>
      </div>
    </Link>
     <Footer />

     </section>

  );
}


