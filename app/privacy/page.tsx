export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>

          <p className="text-slate-400">
            Last updated: 31 August 2026
          </p>
        </div>

        {/* Introduction */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            1. Introduction
          </h2>

          <p className="text-slate-300 leading-7">
            MatchMyStudy respects your privacy and is committed to
            protecting your personal data. This Privacy Policy explains
            how MatchMyStudy collects, uses, stores, and protects
            personal information when you use our website and services.
          </p>

          <p className="text-slate-300 leading-7">
            By using MatchMyStudy, you acknowledge that your personal
            data may be processed as described in this Privacy Policy.
          </p>
        </section>

        {/* Controller */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            2. Data Controller
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-300 leading-7">
              <strong className="text-white">Business name:</strong>{" "}
              MatchMyStudy
            </p>

            <p className="text-slate-300 leading-7">
              <strong className="text-white">Business ID:</strong>{" "}
              3547356-1
            </p>

            <p className="text-slate-300 leading-7">
              <strong className="text-white">Business form:</strong>{" "}
              Private trader
            </p>

            <p className="text-slate-300 leading-7">
              <strong className="text-white">Location:</strong>{" "}
              Hämeenlinna, Finland
            </p>

            <p className="text-slate-300 leading-7">
              <strong className="text-white">Email:</strong>{" "}
              dravindu120@gmail.com
            </p>
          </div>
        </section>

        {/* Data collected */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            3. Personal Data We Collect
          </h2>

          <p className="text-slate-300 leading-7">
            Depending on how you use MatchMyStudy, we may process the
            following categories of personal data:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>
              <strong className="text-white">Account information:</strong>{" "}
              email address, password credentials handled by our
              authentication provider, and account role.
            </li>

            <li>
              <strong className="text-white">Profile information:</strong>{" "}
              information that you choose to provide as part of your
              MatchMyStudy profile.
            </li>

            <li>
              <strong className="text-white">
                Consultant information:
              </strong>{" "}
              information provided by consultants when creating or
              maintaining consultant profiles.
            </li>

            <li>
              <strong className="text-white">
                Reviews and feedback:
              </strong>{" "}
              information submitted through consultant reviews and
              ratings.
            </li>

            <li>
              <strong className="text-white">
                Verification information:
              </strong>{" "}
              information submitted by consultants as part of
              verification or claim processes.
            </li>

            <li>
              <strong className="text-white">
                Technical information:
              </strong>{" "}
              information that may be generated automatically when you
              access and use the website, such as technical and security
              information.
            </li>
          </ul>
        </section>

        {/* How we use data */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            4. How We Use Personal Data
          </h2>

          <p className="text-slate-300 leading-7">
            We use personal data where necessary to operate and improve
            MatchMyStudy and provide its features.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>To create and manage user accounts.</li>
            <li>To authenticate users and maintain account security.</li>
            <li>To provide student and consultant features.</li>
            <li>To display consultant profiles and relevant information.</li>
            <li>To manage reviews and ratings.</li>
            <li>To process consultant verification requests.</li>
            <li>To prevent misuse, fraud, and security problems.</li>
            <li>To maintain and improve the MatchMyStudy platform.</li>
            <li>To comply with applicable legal obligations.</li>
          </ul>
        </section>

        {/* Legal basis */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            5. Legal Basis for Processing
          </h2>

          <p className="text-slate-300 leading-7">
            Where the General Data Protection Regulation (GDPR) applies,
            we process personal data on one or more lawful bases depending
            on the purpose of the processing.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>
              <strong className="text-white">
                Performance of a contract:
              </strong>{" "}
              where processing is necessary to provide services or
              manage your account.
            </li>

            <li>
              <strong className="text-white">
                Legitimate interests:
              </strong>{" "}
              where necessary to operate, secure, maintain, and improve
              the platform, provided that these interests do not override
              your rights.
            </li>

            <li>
              <strong className="text-white">
                Legal obligations:
              </strong>{" "}
              where processing is necessary to comply with applicable
              laws and regulations.
            </li>

            <li>
              <strong className="text-white">Consent:</strong>{" "}
              where we specifically ask for your consent and applicable
              law requires consent.
            </li>
          </ul>
        </section>

        {/* Supabase */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            6. Service Providers
          </h2>

          <p className="text-slate-300 leading-7">
            MatchMyStudy uses third-party service providers to operate
            parts of the platform. These providers may process personal
            data on our behalf where necessary to provide their services.
          </p>

          <p className="text-slate-300 leading-7">
            MatchMyStudy currently uses Supabase for authentication and
            database services. Information required to create and manage
            your account may therefore be processed through Supabase.
          </p>
        </section>

        {/* Data sharing */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            7. When We Share Information
          </h2>

          <p className="text-slate-300 leading-7">
            We do not sell your personal data.
          </p>

          <p className="text-slate-300 leading-7">
            Personal data may be shared with service providers that help
            us operate MatchMyStudy, where necessary and subject to
            appropriate safeguards.
          </p>

          <p className="text-slate-300 leading-7">
            We may also disclose information where required by law,
            legal proceedings, or a lawful request from an authority.
          </p>
        </section>

        {/* Public information */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            8. Publicly Visible Information
          </h2>

          <p className="text-slate-300 leading-7">
            Some information provided by consultants may be displayed
            publicly on MatchMyStudy so that students can discover and
            evaluate consultants.
          </p>

          <p className="text-slate-300 leading-7">
            Consultants should not submit sensitive personal information
            or information that they do not want to be publicly displayed
            unless MatchMyStudy specifically requests it for a legitimate
            purpose.
          </p>
        </section>

        {/* Retention */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            9. Data Retention
          </h2>

          <p className="text-slate-300 leading-7">
            We retain personal data only for as long as reasonably
            necessary for the purposes described in this Privacy Policy,
            including providing our services, maintaining security,
            resolving disputes, and complying with legal obligations.
          </p>

          <p className="text-slate-300 leading-7">
            Retention periods may vary depending on the type of
            information and the purpose for which it is processed.
          </p>
        </section>

        {/* Security */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            10. Data Security
          </h2>

          <p className="text-slate-300 leading-7">
            We take reasonable technical and organisational measures to
            protect personal data against unauthorised access,
            alteration, disclosure, loss, or destruction.
          </p>

          <p className="text-slate-300 leading-7">
            However, no internet-based service can guarantee complete
            security.
          </p>
        </section>

        {/* GDPR rights */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            11. Your Data Protection Rights
          </h2>

          <p className="text-slate-300 leading-7">
            Depending on the circumstances and applicable law, you may
            have rights including:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>The right to access your personal data.</li>
            <li>The right to correct inaccurate information.</li>
            <li>The right to request deletion of your personal data.</li>
            <li>
              The right to request restriction of processing in certain
              circumstances.
            </li>
            <li>
              The right to object to certain processing activities.
            </li>
            <li>
              The right to data portability where applicable.
            </li>
            <li>
              The right to withdraw consent where processing is based on
              consent.
            </li>
          </ul>

          <p className="text-slate-300 leading-7">
            To exercise your rights, contact us using the contact details
            provided below.
          </p>
        </section>

        {/* Complaints */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            12. Complaints
          </h2>

          <p className="text-slate-300 leading-7">
            If you believe that your data protection rights have not been
            respected, you may contact us first. You may also have the
            right to lodge a complaint with the relevant data protection
            supervisory authority.
          </p>
        </section>

        {/* Children */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            13. Children
          </h2>

          <p className="text-slate-300 leading-7">
            MatchMyStudy is not intended to knowingly collect personal
            data from children in circumstances where applicable law
            requires parental consent.
          </p>
        </section>

        {/* Changes */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            14. Changes to This Privacy Policy
          </h2>

          <p className="text-slate-300 leading-7">
            We may update this Privacy Policy from time to time to
            reflect changes to MatchMyStudy, our data processing
            practices, or applicable legal requirements. The latest
            version will always be published on this page.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            15. Contact Us
          </h2>

          <p className="text-slate-300 leading-7">
            If you have questions about this Privacy Policy or wish to
            exercise your data protection rights, please contact:
          </p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="font-semibold text-white">
              MatchMyStudy
            </p>

            <p className="text-slate-300 mt-2">
              Hämeenlinna, Finland
            </p>

            <p className="text-slate-300 mt-1">
              Email: dravindu120@gmail.com
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}