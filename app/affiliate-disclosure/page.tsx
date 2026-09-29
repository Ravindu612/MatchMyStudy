export const metadata = {
  title: "Affiliate Disclosure | MatchMyStudy",
  description:
    "Learn how MatchMyStudy may use affiliate links and commercial relationships.",
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Affiliate Disclosure
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Last updated: September 2026
          </p>

          <div className="mt-10 space-y-8 text-slate-700 leading-7">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900">
                About Affiliate Links
              </h2>
              <p className="mt-3">
                MatchMyStudy may use affiliate links on certain pages of the
                website. This means that we may receive a commission if you
                click an affiliate link and subsequently make a purchase,
                register for a service, or complete another qualifying action
                with the third-party provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">
                No Additional Cost to You
              </h2>
              <p className="mt-3">
                In most cases, using an affiliate link does not increase the
                price you pay. The applicable price, terms, and conditions are
                determined by the third-party provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">
                Our Content and Recommendations
              </h2>
              <p className="mt-3">
                Affiliate relationships do not change the basic purpose of
                MatchMyStudy: to help students explore study-abroad countries,
                universities, programmes, consultants, and online learning
                opportunities.
              </p>

              <p className="mt-3">
                Where affiliate relationships exist, we aim to present
                information clearly and avoid misleading claims about the
                products or services being presented.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">
                Third-Party Websites
              </h2>
              <p className="mt-3">
                When you follow an affiliate or other external link from
                MatchMyStudy, you may leave our website and visit a
                third-party website. Those websites have their own privacy
                policies, terms, pricing, and practices. We recommend
                reviewing the applicable information provided by the
                third-party provider before using its services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">
                Changes to Affiliate Relationships
              </h2>
              <p className="mt-3">
                MatchMyStudy may add, remove, or change affiliate relationships
                and commercial partnerships over time. This page may be
                updated when our practices change.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">
                Questions
              </h2>
              <p className="mt-3">
                If you have questions about affiliate links or commercial
                relationships on MatchMyStudy, please contact us through our{" "}
                <a
                  href="/contact"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Contact page
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}