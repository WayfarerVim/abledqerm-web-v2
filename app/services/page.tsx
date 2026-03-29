export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="px-8 pt-32 pb-20 max-w-4xl mx-auto">
        <h1 className="text-5xl font-light tracking-tight leading-[1.1]">
          Clinical dermatology services
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl">
          Evidence‑based, consultant‑led dermatology delivered with clarity, precision and a calm clinical experience.
        </p>
      </section>

      <section className="px-8 py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto space-y-20">

          <div>
            <h2 className="text-3xl font-semibold">Acne & Rosacea</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Comprehensive assessment and tailored treatment plans for persistent, complex or scarring acne and rosacea.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Mole Checks</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Full‑body or focused mole checks using dermatoscopy, with clear outcomes and referral pathways when required.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Eczema & Psoriasis</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Diagnosis and long‑term management of inflammatory skin conditions using modern, evidence‑based therapies.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Skin Cancer</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Early detection, monitoring and management of skin cancer, including rapid escalation to specialist pathways.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Hair & Scalp</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Assessment and treatment of alopecia, scalp inflammation and hair‑loss conditions with a clear diagnostic plan.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Cosmetic Dermatology</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Subtle, natural interventions delivered with clinical oversight, focusing on skin quality, texture and confidence.
            </p>
          </div>

        </div>
      </section>

      <section className="px-8 py-32 bg-white text-center">
        <h2 className="text-4xl font-semibold">Ready to book?</h2>
        <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
          Schedule a consultation with a GMC‑registered dermatologist for a clear, personalised treatment plan.
        </p>
        <a href="/book" className="inline-block mt-12 px-10 py-4 bg-teal-600 text-white rounded-md text-base">
          Book Consultation
        </a>
      </section>

    </main>
  );
}
