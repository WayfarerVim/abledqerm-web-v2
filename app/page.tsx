export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="px-8 pt-28 pb-32 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tight leading-tight">
            Dermatology with clarity, precision, and calm.
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
            Evidence‑based dermatology delivered with modern clinical standards
            and a calm, patient‑centred experience.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="/book"
              className="px-6 py-3 bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-700 transition"
            >
              Book Consultation
            </a>
            <a
              href="/services"
              className="px-6 py-3 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
