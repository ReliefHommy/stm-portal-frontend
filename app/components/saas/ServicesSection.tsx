const services = [
  {
    title: 'เครื่องมือสร้างแคตตาล็อกสินค้า เมนู และโปรโมชัน',
    description:
      'อัปโหลดผลิตภัณฑ์ผ่าน CSV / Excel, สร้างชื่อและคำอธิบายผลิตภัณฑ์อัตโนมัติด้วย AI, การจัดการรูปภาพ + ราคา + หมวดหมู่, ลิงก์หน้าร้านที่แชร์ได้ (ไม่ต้องใช้เว็บไซต์), แดชบอร์ดผู้ดูแลระบบแบบง่ายสำหรับการอัปเดต',
  },
  {
    title: 'AI ผู้ช่วยตอบกลับข้อความของลูกค้าโดยอัตโนมัติและจัดการคำสั่งซื้อตลอด 24 ชั่วโมง',
    description:
      'AI ตอบกลับข้อความ Facebook / แชท ตอบคำถาม แนะน้ำเกี่ยวกับสินค้าจากแคตตาล็อกของคุณโดยอัตโนมัติ และจัดการคำสั่งซื้อโดยตรงผ่านแชท การฝึกอบรมคำถามที่พบบ่อย (เรียนรู้จากธุรกิจของคุณ)', 
  },
  {
    title: 'ระบบสั่งซื้อและตะกร้าสินค้าอัจฉริยะ',
    description:
      'Use ready-made campaign and menu templates designed for Thai food businesses to save setup time.',
  },
  {
    title: 'Multi-language support',
    description:
      'Serve Thai and local audiences with bilingual content support for menus, announcements, and promotions.',
  },
  {
    title: 'Analytics',
    description:
      'Track traffic, best-selling items, and campaign performance to make better weekly decisions.',
  },
  {
    title: 'Vendor dashboard',
    description:
      '',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
            Services
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-indigo-900 sm:text-3xl">
            Tools that help Thai vendors grow faster
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Everything needed to launch, promote, and operate your vendor
            presence in one scalable platform.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                <span className="text-sm font-bold">+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {service.description}
              </p>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
