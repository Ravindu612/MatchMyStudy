export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">
          Contact MatchMyStudy
        </h1>

        <p className="text-slate-300 leading-7 mb-10">
          Have a question about studying abroad, universities, programs,
          or education consultants? Get in touch with us and we will be
          happy to help.
        </p>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold mb-4">
              Get in touch
            </h2>

            <div className="space-y-4 text-slate-300">

              <div>
                <p className="text-sm text-slate-500">
                  Email
                </p>
                <a
                  href="mailto:dravindu120@gmail.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  dravindu120@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Location
                </p>
                <p>Hämeenlinna, Finland</p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold mb-4">
              Send us a message
            </h2>

            <form className="space-y-4">

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-300">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-300">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500 resize-none"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </main>
  );
}