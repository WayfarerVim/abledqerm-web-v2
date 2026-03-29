export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="px-8 pt-32 pb-20 max-w-4xl mx-auto">
        <h1 className="text-5xl font-light tracking-tight leading-[1.1]">
          Dermatology with clarity and calm
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl">
          ableDERM was created to bring modern, evidence‑based dermatology into a calm, clear and patient‑centred clinical experience.
        </p>
      </section>

      <section className="px-8 py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto space-y-16">

          <div>
            <h2 className="text-3xl font-semibold">Our approach</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              We believe dermatology should feel precise, modern and reassuring. Every consultation is structured to provide clarity, evidence‑based guidance and a personalised plan that patients can trust.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Clinical standards</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              All assessments follow contemporary clinical guidelines, with a focus on accuracy, safety and transparent decision‑making. We prioritise clear explanations and shared understanding at every step.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">A calm environment</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              The clinical experience is designed to feel unhurried and composed. From the physical environment to the consultation structure, everything is shaped to reduce noise and support thoughtful, confident care.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Evidence‑based care</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Treatment plans are grounded in current research and best practice. We use modern therapies, clear diagnostic reasoning and a transparent approach to ensure patients understand their options.
            </p>
          </div>

        </div>
      </section>

      <section className="px-8 py-32 bg-white text-center">
        <h2 className="text-4xl font-semibold">Book a consultation</h2>
        <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
          If you’re ready for a clear, structured and evidence‑based dermatology assessment, we’re here to help.
        </p>
        <a href="/book" className="inline-block mt-12 px-10 py-4 bg-teal-600 text-white rounded-md text-base">
          Book Consultation
        </a>
      </section>

    </main>
  );
}
