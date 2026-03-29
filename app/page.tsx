'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="px-8 pt-32 pb-36 max-w-6xl mx-auto">
        <h1 className="text-6xl font-serif font-light tracking-tight leading-[1.1] text-burgundy">
          Dermatology with clarity, <span className="font-semibold text-burgundy-dark">precision</span> and calm.
        </h1>
        <p className="mt-8 text-xl text-gray-600 max-w-xl">
          Evidence‑based dermatology delivered with modern clinical standards and a calm, patient‑centred experience.
        </p>
        <div className="mt-12 flex gap-4">
          <a href="/book" className="px-7 py-3.5 bg-burgundy hover:bg-burgundy-dark text-white rounded-md text-sm font-medium transition">Book Consultation</a>
          <a href="/services" className="px-7 py-3.5 border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white rounded-md text-sm font-medium transition">Explore Services</a>
        </div>
      </section>

      <section className="px-8 py-28 bg-gray-50 border-t-2 border-burgundy-light">
        <h2 className="text-4xl font-serif font-semibold text-burgundy">Clinical services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          Evidence‑based dermatology delivered with precision, clarity, and a calm clinical experience.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="p-8 bg-white rounded-2xl border-2 border-gold hover:border-gold-dark hover:shadow-lg transition">
            <h3 className="text-xl font-serif font-medium text-burgundy">Acne & Rosacea</h3>
            <p className="mt-3 text-gray-600 text-sm">Targeted treatment plans for persistent or complex cases.</p>
          </div>

          <div className="p-8 bg-white rounded-2xl border-2 border-gold hover:border-gold-dark hover:shadow-lg transition">
            <h3 className="text-xl font-serif font-medium text-burgundy">Mole Checks</h3>
            <p className="mt-3 text-gray-600 text-sm">Dermatoscopic assessment with clear, actionable outcomes.</p>
          </div>

          <div className="p-8 bg-white rounded-2xl border-2 border-gold hover:border-gold-dark hover:shadow-lg transition">
            <h3 className="text-xl font-serif font-medium text-burgundy">Eczema & Psoriasis</h3>
            <p className="mt-3 text-gray-600 text-sm">Long‑term condition management with modern therapies.</p>
          </div>

          <div className="p-8 bg-white rounded-2xl border-2 border-gold hover:border-gold-dark hover:shadow-lg transition">
            <h3 className="text-xl font-serif font-medium text-burgundy">Skin Cancer</h3>
            <p className="mt-3 text-gray-600 text-sm">Early detection, monitoring, and specialist referral pathways.</p>
          </div>

          <div className="p-8 bg-white rounded-2xl border-2 border-gold hover:border-gold-dark hover:shadow-lg transition">
            <h3 className="text-xl font-serif font-medium text-burgundy">Hair & Scalp</h3>
            <p className="mt-3 text-gray-600 text-sm">Diagnosis and management of alopecia and scalp conditions.</p>
          </div>

          <div className="p-8 bg-white rounded-2xl border-2 border-gold hover:border-gold-dark hover:shadow-lg transition">
            <h3 className="text-xl font-serif font-medium text-burgundy">Cosmetic Dermatology</h3>
            <p className="mt-3 text-gray-600 text-sm">Subtle, natural interventions with clinical oversight.</p>
          </div>

        </div>
      </section>

      <section className="px-8 py-32 bg-gradient-to-b from-burgundy to-burgundy-dark text-center">
        <h2 className="text-4xl font-serif font-semibold text-white">Ready for clarity?</h2>
        <p className="mt-6 text-lg text-gold max-w-xl mx-auto">
          Book a consultation with a GMC‑registered dermatologist and receive a clear, personalised plan.
        </p>
        <a href="/book" className="inline-block mt-12 px-10 py-4 bg-gold hover:bg-gold-dark text-burgundy-dark font-semibold rounded-md text-base transition">
          Book Consultation
        </a>
      </section>

      <footer className="px-8 py-20 bg-charcoal text-white border-t-4 border-gold">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">

          <div>
            <h3 className="text-lg font-serif font-semibold text-gold">ableDERM</h3>
            <p className="mt-4 text-sm text-gray-300 max-w-xs">
              Modern, evidence‑based dermatology delivered with clarity, precision and calm.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wide">Clinic</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li><a href="/services" className="hover:text-gold transition">Services</a></li>
              <li><a href="/book" className="hover:text-gold transition">Book Consultation</a></li>
              <li><a href="/about" className="hover:text-gold transition">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wide">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li><a href="/privacy" className="hover:text-gold transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-gold transition">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gold-dark text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ableDERM. All rights reserved.
        </div>
      </footer>

    </main>
  );
}