export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-semibold">ableDERM v2</h1>
      <p className="mt-4 text-gray-600">Deployment successful.</p>
    </main>
  );
}export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="px-8 pt-24 pb-32 max-w-5xl mx-auto">
        <h1 className="text-5xl font-semibold tracking-tight leading-tight">
          Dermatology, done with clinical clarity.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
          ableDERM delivers safe, modern dermatology care for patients who value
          precision, transparency, and a calm clinical experience.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#book"
            className="px-6 py-3 bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-700 transition"
          >
            Book Consultation
          </a>
          <a
            href="#services"
            className="px-6 py-3 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="px-8 py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight">
            Clinical services
          </h2>
          <p className="mt-3 text-gray-600 max-w-lg">
            Evidence‑based dermatology delivered with precision and care.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Acne & Rosacea",
                desc: "Targeted treatment plans for persistent or complex cases."
              },
              {
                title: "Mole Checks",
                desc: "Dermatoscopic assessment with clear, actionable outcomes."
              },
              {
                title: "Eczema & Psoriasis",
                desc: "Long‑term condition management with modern therapies."
              },
              {
                title: "Skin Cancer",
                desc: "Early detection, monitoring, and specialist referral pathways."
              },
              {
                title: "Hair & Scalp",
                desc: "Diagnosis and management of alopecia and scalp conditions."
              },
              {
                title: "Cosmetic Dermatology",
                desc: "Subtle, natural interventions with clinical oversight."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-sm transition"
              >
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ready for clarity?
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Book a consultation with a GMC‑registered dermatologist and get a
            clear, personalised plan.
          </p>

          <a
            href="#"
            className="inline-block mt-10 px-8 py-4 bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-700 transition"
          >
            Book Now
          </a>
        </div>
      </section>
    </main>
  );
}
