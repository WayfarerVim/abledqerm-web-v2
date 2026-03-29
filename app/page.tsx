export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="px-8 pt-28 pb-32 max-w-6xl mx-auto">
        <h1 className="text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
          Dermatology with clarity, precision, and calm.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
          ableDERM delivers modern, evidence‑based dermatology for patients who
          value expertise, transparency, and a calm clinical experience.
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
      </section>

      {/* Services Overview */}
      <section className="px-8 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
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
                title
