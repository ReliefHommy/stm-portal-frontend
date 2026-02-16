import Image from "next/image";

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
      <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white font-sans text-slate-900 rounded-2xl shadow-lg">
        
          <header className="mb-8">
    <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden mb-6 shadow-lg">


     
   <Image
              src={event.banner_image}
              alt={event.title}
              fill
              className="object-cover object-center w-full h-full"
            />


      <div className="absolute top-4 left-4 flex gap-2">
        <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">{event.event_type}</span>
        <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold shadow-sm border border-slate-200">{event.country_code}</span>
      </div>
    </div>

    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{event.title}</h1>
    <h2 className="text-3xl font-extrabold text-indigo-600 mb-4 font-thai">{event.sub_title_thai}</h2>
    
    <div className="flex items-center text-slate-500 text-sm gap-4 border-b pb-6">
      <span className="flex items-center gap-1">📍  {event.location_name} • {event.country_code}</span>
      <span className="flex items-center gap-1">📅 start_date-{event.start_date}</span>
    </div>
  </header>
        
         
             <section className="md:col-span-2 space-y-6">
      <div className="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-500">
        <h3 className="text-lg font-bold text-indigo-900 mb-2 flex items-center gap-2">
          <span>✍️</span> Writers Note 
        </h3>
       
        <p className="text-slate-600 leading-relaxed italic">
          As a writer living in Sweden, I have often missed the spiritual warmth of home. This ceremony is a bridge back to our roots, a chance to reconnect with our culture and find solace in shared traditions. I hope this event brings comfort and joy to all who attend.
        </p>
      </div>
     

      <article className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 prose prose-slate max-w-none">
        <h3 className="text-xl font-bold">About the Event</h3>
        <p>{event.description}</p>
      </article>
    </section>
                 <section className="md:col-span-2 space-y-6">
      <div className="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-500">
        <h3 className="text-lg font-bold text-indigo-900 mb-2 flex items-center gap-2">
          <span>✍️</span> บันทึกจากผู้เขียน
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4 font-thai text-lg">
          กลิ่นธูปหอมและแสงเทียนในคืนวันเพ็ญ... มาร่วมสัมผัสบรรยากาศความสงบที่เชื่อมโยงหัวใจคนไทยในต่างแดนเข้าด้วยกัน..
          
        </p>
      
      </div>
     

      <article className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 prose prose-slate max-w-none">
        <h3 className="text-xl font-bold">รายละเอียด</h3>
        <p>{event.description_thai}</p>
      </article>
    </section>
      <aside className="space-y-6">
      <div className="flex flex-col gap-3">
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition shadow-md">
          Add to Calendar
        </button>
        <button className="w-full bg-white border-2 border-slate-200 hover:border-indigo-600 text-slate-700 py-3 rounded-xl transition flex justify-center items-center gap-2">
          <span>Share to LINE</span>
        </button>
      </div>

      <div className="border rounded-2xl p-4 bg-slate-50">
        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Partner Vendor</h4>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
          <div>
            <p className="font-bold text-sm">Somtam Kitchen</p>
            <p className="text-xs text-slate-500">Authentic Thai Food</p>
          </div>
        </div>
        <p className="text-xs text-slate-600 mb-3 italic">Providing traditional snacks for this event.</p>
        <a href="#" className="text-xs text-indigo-600 font-bold hover:underline">View Marketplace Shop →</a>
      </div>
    </aside>
         </div>
      
      

    

      
      </div>
        
  
  );
}
