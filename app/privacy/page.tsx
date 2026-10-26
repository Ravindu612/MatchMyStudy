import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo-meta";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import JsonLd from "@/components/JsonLd";
import { hubPageJsonLd } from "@/lib/hub-jsonld";

export const metadata: Metadata = pageMeta(
  "/privacy",
  "Privacy Policy | MatchMyStudy",
  "How MatchMyStudy collects, uses and protects personal data, including cookies, Google Consent Mode, advertising, and how to export or delete your account."
);

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <JsonLd data={hubPageJsonLd({ name: "Privacy Policy", path: "/privacy" })} />
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>

          <p className="text-slate-400">
            Last updated: 15 October 2026
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
            Where consent is required by applicable law, we will request
            consent before carrying out the relevant processing.
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
                Technical and usage information:
              </strong>{" "}
              information that may be generated automatically when you
              access and use the website, such as browser information,
              device information, approximate location information,
              pages viewed, interactions, and technical and security
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
            <li>To understand website usage and improve user experience.</li>
            <li>To measure website traffic and engagement.</li>
            <li>To provide advertising where applicable.</li>
            <li>To support affiliate relationships where applicable.</li>
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
              law requires consent, including certain uses of cookies,
              analytics, advertising, and similar technologies.
            </li>
          </ul>
        </section>

        {/* Cookies and similar technologies */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            6. Cookies and Similar Technologies
          </h2>

          <p className="text-slate-300 leading-7">
            MatchMyStudy may use cookies, local storage, and similar
            technologies to operate the website, maintain security,
            remember preferences, understand website usage, measure
            performance, and support advertising services.
          </p>

          <p className="text-slate-300 leading-7">
            Some cookies or similar technologies may be necessary for the
            operation and security of the website. Other technologies,
            including certain analytics and advertising technologies, may
            require your consent depending on applicable law.
          </p>

          <p className="text-slate-300 leading-7">
            MatchMyStudy uses a cookie banner on this website together
            with Google Consent Mode version 2. For visitors in the
            European Economic Area, the United Kingdom, and Switzerland,
            Consent Mode defaults to denied for advertising storage
            (ad_storage), analytics storage (analytics_storage), ad user
            data (ad_user_data), and ad personalisation
            (ad_personalization) until you choose. If you accept, those
            signals are updated to granted. If you reject non-essential
            cookies, they stay denied. Cookies needed to sign in and
            keep the site secure are not used for advertising.
          </p>

          <p className="text-slate-300 leading-7">
            You can change or withdraw that choice at any time with the
            Cookie settings control in the footer or the button below.
            The choice is stored in your browser. This banner is our own
            consent control, not the certified platform in Google AdSense
            Privacy and messaging. If a message is later published for
            this site there, it can use the same Consent Mode signals.
          </p>

          <CookieSettingsButton className="inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500" />
        </section>

        {/* Analytics */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            7. Google Analytics
          </h2>

          <p className="text-slate-300 leading-7">
            MatchMyStudy uses Google Analytics to understand how visitors
            use the website, measure traffic and engagement, and improve
            the service.
          </p>

          <p className="text-slate-300 leading-7">
            Google Analytics may collect information such as website
            interactions, pages viewed, technical information about the
            device and browser, and other usage information. Google may
            process this information on behalf of MatchMyStudy and in
            accordance with its applicable policies.
          </p>

          <p className="text-slate-300 leading-7">
            Where consent is required, analytics-related storage and
            processing follow the analytics_storage Consent Mode signal
            and the choice you make in the cookie banner.
          </p>

          <p className="text-slate-300 leading-7">
            For more information about how Google handles data from
            websites and applications, please see Google&apos;s privacy
            information:
          </p>

          <p className="text-slate-300 leading-7">
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Google Privacy & Terms
            </a>
          </p>
        </section>

        {/* Service Providers */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            8. Service Providers and Third Parties
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

          <p className="text-slate-300 leading-7">
            MatchMyStudy also uses Google services, including Google
            Analytics. If advertising services are enabled, Google
            advertising services such as Google AdSense may also process
            information in connection with advertising and measurement.
          </p>

          <p className="text-slate-300 leading-7">
            Third-party services may process information according to
            their own privacy policies and applicable contractual and
            legal requirements.
          </p>
        </section>

        {/* Advertising */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            9. Advertising
          </h2>

          <p className="text-slate-300 leading-7">
            MatchMyStudy may use advertising services such as Google
            AdSense to display advertisements on the website.
          </p>

          <p className="text-slate-300 leading-7">
            Advertising providers may use cookies, identifiers, or other
            technologies to deliver, measure, and personalize advertising
            where permitted by applicable law and based on the user&apos;s
            consent choices.
          </p>

          <p className="text-slate-300 leading-7">
            When advertising services are enabled, Google and its
            advertising partners may process information associated with
            advertising requests, ad interactions, and measurement.
          </p>

          <p className="text-slate-300 leading-7">
            Users in the European Economic Area, the United Kingdom, and
            Switzerland are shown a consent message with choices for
            advertising-related processing. Those choices update Consent
            Mode: ad_storage, ad_user_data, and ad_personalization stay
            denied for visitors in those regions until they accept.
          </p>

          <p className="text-slate-300 leading-7">
            More information about Google&apos;s use of cookies for
            advertising can be found in Google&apos;s documentation:
          </p>

          <p className="text-slate-300 leading-7">
            <a
              href="https://support.google.com/adsense/answer/7549925"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              How Google AdSense uses cookies
            </a>
          </p>
        </section>

        {/* Affiliate links */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            10. Affiliate Links and Commercial Relationships
          </h2>

          <p className="text-slate-300 leading-7">
            MatchMyStudy may use affiliate links or other commercial
            relationships with third-party websites, education providers,
            learning platforms, products, or services.
          </p>

          <p className="text-slate-300 leading-7">
            If you click an affiliate link and subsequently make a
            qualifying purchase or take another qualifying action,
            MatchMyStudy may receive a commission or other compensation
            from the third party. The price you pay is not necessarily
            affected by the use of an affiliate link.
          </p>

          <p className="text-slate-300 leading-7">
            Affiliate relationships do not necessarily mean that
            MatchMyStudy endorses or guarantees the products or services
            offered by third parties. Users should review the terms and
            privacy policies of third-party websites before using their
            services.
          </p>

          <p className="text-slate-300 leading-7">
            Additional information is available on our{" "}
            <a
              href="/affiliate-disclosure"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Affiliate Disclosure
            </a>{" "}
            page.
          </p>
        </section>

        {/* Data sharing */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            11. When We Share Information
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
            Some third-party services, including analytics and
            advertising providers, may process information as described
            in this Privacy Policy and according to applicable consent
            choices.
          </p>

          <p className="text-slate-300 leading-7">
            We may also disclose information where required by law,
            legal proceedings, or a lawful request from an authority.
          </p>
        </section>

        {/* Public information */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            12. Publicly Visible Information
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
            13. Data Retention
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

          <p className="text-slate-300 leading-7">
            You can delete your account from profile settings. Deletion
            removes your login, profile, posts, comments, likes, follows,
            and blocks. Messages you sent in someone else&apos;s
            conversation are kept so that person still has the thread,
            and your name on those messages is replaced with &quot;Deleted
            user&quot;. Reports filed about an account are kept for
            moderation, with the deleted account&apos;s name removed. A
            consultant page you created is removed. A directory listing
            you claimed stays on MatchMyStudy and is disconnected from
            your account.
          </p>
        </section>

        {/* Security */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            14. Data Security
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
            15. Your Data Protection Rights
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
            You can download a JSON copy of the personal data stored for
            your account, including links to files you uploaded, or delete
            your account, from{" "}
            <a
              href="/settings/profile"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              profile settings
            </a>
            . Those tools are available when you are signed in. To
            exercise another right, or if you cannot sign in, contact us
            using the details below.
          </p>
        </section>

        {/* Complaints */}
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-white">
            16. Complaints
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
            17. Children
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
            18. Changes to This Privacy Policy
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
            19. Contact Us
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