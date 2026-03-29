export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="px-8 pt-32 pb-36 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-light tracking-tight leading-[1.1] text-gray-900">
            Dermatology with clarity,  
            <span className="font-semibold">precision</span> and calm.
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
            Evidence‑based dermatology delivered with modern clinical standards
            and a calm, patient‑centred experience designed for clarity and
            confidence.
          </p>

          <div className="mt-12 flex gap-4">
            <a
              href="/book"
              className="px-7 py-3.5 bg-teal-600 text-white rounded-md text-sm font-medium tracking-wide hover:bg-teal-700 transition"
            >
              Book Consultation
            </a>
            <a
              href="/services"
              className="px-7 py-3.5 border border-gray-300 rounded-md text-sm font-medium tracking-wide hover:bg-gray-50 transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
