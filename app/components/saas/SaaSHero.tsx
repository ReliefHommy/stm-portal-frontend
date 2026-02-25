export default function SaaSHero() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl space-y-6">
          <p className="inline-flex w-fit rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
            Built for Thai Food Businesses
          </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-indigo-900 sm:text-5xl">
            STM Food SaaS <span className=" text-indigo-400">  forThai  Vendors in EU</span>
          </h1>

          <p className="max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Manage orders, menus, promotions, and customer communication in one
            place, so your team can serve faster and grow steady revenue.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-indigo-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              Try one month Free (€0)
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-indigo-400 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-400 hover:bg-gray-50"
            >
              See Plans
            </a>
          </div>

          <ul className="grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
            <li>• Thai/English menu support for local EU customers</li>
            <li>• Delivery + pickup flow with clear order tracking</li>
            <li>• Built-in promo tools to lift repeat purchases</li>
          </ul>
        </div>

        <div className="w-full max-w-md rounded-2xl border border-indigo-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-gray-900">Why teams switch</p>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Replace scattered tools with one dashboard for menu updates, orders,
            and customer follow-up. Launch quickly and scale location by
            location.
          </p>
        </div>
      </div>
    </section>
  );
}
