import Image from "next/image";
import FooterSociety from "@/app/components/hompage/FooterSociety";
import TopNav from "@/app/components/society/TopNav";

async function getEventFromList(id: string) {
  const res = await fetch(
    "https://society-somtam-backend.onrender.com/api/society/events",
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const events = await res.json();
  if (!Array.isArray(events)) return null;

  const numericId = Number(id);
  return events.find((e: any) => e?.id === numericId) ?? null;
}

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const event = await getEventFromList(params.id);

  if (!event) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Event not found</h1>
        <p className="mt-2 text-slate-600">
          This event may have been removed or the API is unavailable.
        </p>
      </div>
    );
  }

  return (
    
    <div className="p-6">
        <TopNav/>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-extrabold tracking-tight">{event.title}</h1>
        <p className="mt-2 text-slate-600">
          {event.location_name} • {event.country_code}
        </p>

        {event.banner_image ? (
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
             <div className="aspect-square w-full relative">
   <Image
              src={event.banner_image}
              alt={event.title}
              fill
              className="object-cover object-center"
            />
             </div>
         
          </div>
        ) : null}

        {event.description ? (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold">About this event</h2>
            <p className="mt-2 whitespace-pre-line text-slate-700">
              {event.description}
            </p>
          </div>
        ) : null}
      </div>
         <FooterSociety/>
    </div>
  );
}
