import ConsultantSearch from "@/components/ConsultantSearch";
import ConsultantCTA from "@/components/ConsultantCTA";

export default function ConsultantsPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

            {/* Left */}
            <div className="max-w-3xl">

              <h1 className="text-5xl font-bold text-white leading-tight">
                Find Trusted Study Abroad Consultants
              </h1>

              <p className="mt-6 text-xl text-blue-100">
                Search verified education consultants based on your home
                country and your desired study destination.
              </p>

            </div>

            {/* Right */}
            <ConsultantCTA />

          </div>

          <div className="mt-12">
            <ConsultantSearch />
          </div>

        </div>

      </section>

    </main>
  );
}