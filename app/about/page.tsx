export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          About MatchMyStudy
        </h1>

        <p className="text-slate-300 leading-7 mb-6">
          MatchMyStudy is a platform designed to help students navigate
          their global education journey.
        </p>

        <p className="text-slate-300 leading-7 mb-6">
          Our goal is to make it easier for students to discover suitable
          study opportunities, explore universities and study programmes,
          and connect with education consultants who can provide guidance
          throughout the process.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold mb-3 text-blue-400">
              Explore
            </h2>

            <p className="text-slate-400 leading-7">
              Explore countries, universities and study programmes to find
              opportunities that match your goals.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold mb-3 text-violet-400">
              Match
            </h2>

            <p className="text-slate-400 leading-7">
              Find study options and education consultants that are relevant
              to your needs and interests.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold mb-3 text-blue-400">
              Connect
            </h2>

            <p className="text-slate-400 leading-7">
              Connect with education consultants and get support as you plan
              your international education journey.
            </p>
          </div>

        </div>

        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold mb-4">
            Our Vision
          </h2>

          <p className="text-slate-300 leading-7">
            We aim to create a simple and accessible platform where students
            can make more informed decisions about studying abroad and find
            the right resources and guidance for their journey.
          </p>
        </div>

      </div>
    </main>
  );
}