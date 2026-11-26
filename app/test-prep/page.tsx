import ItalkiSpeakingCta from "@/components/ItalkiSpeakingCta";
import JsonLd from "@/components/JsonLd";
import { PartnerGrid } from "@/components/resources/PartnerCard";
import {
  GuideBlock,
  GuideCopy,
  GuideNote,
  PointList,
  ResourceHero,
  ResourcePager,
} from "@/components/resources/ResourceGuide";
import { officialTests } from "@/data/officialTests";
import { PLAIN_LINK_REL, testPrepPartners } from "@/data/partners";
import { hubPageJsonLd } from "@/lib/hub-jsonld";
import { LANGUAGE_STUDY_DEVELOPMENT_NOTICE } from "@/lib/languageStudy/developmentNotice";
import {
  LANGUAGE_STUDY_HREF,
  LANGUAGE_STUDY_LABEL,
} from "@/lib/languageStudy/paths";
import { UNOFFICIAL_NOTICE } from "@/lib/languageStudy/rubric";
import { pageMeta } from "@/lib/seo-meta";
import Link from "next/link";

const path = "/test-prep";
const title = "Test Prep for Study Abroad: GRE, IELTS and More | MatchMyStudy";
const description =
  "Which programmes ask for the GRE, GMAT, SAT, ACT, IELTS, TOEFL, PTE, or the Duolingo English Test, and how to prepare before you book a test.";

export const metadata = pageMeta(path, title, description);

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700";

const admissionsTests = [
  {
    title: "SAT",
    body: "The SAT is an undergraduate admissions test used by colleges in the United States. It covers reading, writing, and math. The current test is delivered on a computer. Many US colleges do not require it, and a college can change that policy. Check the freshman admission page for the year you will apply. Universities outside the United States rarely ask for the SAT.",
  },
  {
    title: "ACT",
    body: "The ACT is the other main undergraduate admissions test in the United States. It covers English, math, and reading. Science and writing have been part of the test; check which sections the current exam includes and which ones your college wants. Colleges that require a test usually accept the SAT or the ACT. Confirm that on the college site, and use current official practice rather than an older book.",
  },
  {
    title: "GRE",
    body: "The GRE is used by master's and doctoral programmes, especially in the United States, and by some universities elsewhere. It covers verbal reasoning, quantitative reasoning, and analytical writing. Many programmes have made it optional or no longer ask for it. The department page for your programme, for your entry year, is the source of truth.",
  },
  {
    title: "GMAT",
    body: "The GMAT is aimed at business school, including MBA programmes and some specialised master's degrees in management, finance, and related fields. Some schools accept the GRE instead. The format of the GMAT has changed in recent years. Confirm which scores the school accepts and how long a score stays valid before you book.",
  },
] as const;

const englishTests = [
  {
    title: "IELTS Academic",
    body: "IELTS is widely used for university admission in the United Kingdom, Ireland, Australia, New Zealand, Canada, and many other countries. Universities usually want the Academic module. General Training is a different test and is not the usual requirement for a degree. Some visas require a named version of IELTS, taken in a specified way. Read the visa page as well as the university page.",
  },
  {
    title: "TOEFL iBT",
    body: "The TOEFL iBT is an English proficiency test accepted by universities in the United States and in many other countries. The format has been updated, so use the current official description. Universities often want the score sent by the test owner rather than a copy you upload yourself.",
  },
  {
    title: "PTE Academic",
    body: "PTE Academic is a computer-based English test. Many universities accept it, and the immigration authorities of some countries accept it for a visa. Those two lists are not the same, and both change. Check the programme and, if you need the score for a visa, the visa authority.",
  },
  {
    title: "Duolingo English Test",
    body: "The Duolingo English Test is a shorter online English test. Many universities accept it as an alternative to IELTS or TOEFL. Not every university does, and a visa route may not accept it even when the university does. Look for the test by name on the programme page. A general claim that universities accept it is not an offer from the university you want.",
  },
] as const;

const preparationSteps = [
  {
    title: "Read the official description first",
    body: "Sections, timing, scoring, and how long a score lasts are set by the test owner. Those rules change. The official site also has free practice that shows the real task types. Start there, then decide whether you want a course.",
  },
  {
    title: "Take one timed practice test before you plan",
    body: "A full practice test, under the real time limit, shows which section needs the work. After that, short regular sessions on the weak section are more useful than rereading a whole book. For a math section, the work is the math. For a writing section, the work is writing complete answers in the time.",
  },
  {
    title: "Produce the language, do not only recognise it",
    body: "Speaking and writing on an English test improve when you speak and write, and when someone responds. Record yourself against the clock. For speaking, a conversation partner is hard to replace with a textbook.",
  },
  {
    title: "Book with a retake in mind",
    body: "If the first score may not be enough, leave time to sit the test again before your application deadline. Test centres and online slots fill up. Dates, locations, and the rules for sending scores are on the official site. A prep company cannot register you.",
  },
] as const;

export default function TestPrepPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <JsonLd
        data={hubPageJsonLd({
          type: "WebPage",
          name: "Test Prep",
          path,
          description,
          items: [
            ...officialTests.map((test) => ({
              name: test.name,
              url: test.url,
            })),
            ...testPrepPartners.map((partner) => ({
              name: partner.name,
              url: partner.url,
            })),
            { name: LANGUAGE_STUDY_LABEL, url: LANGUAGE_STUDY_HREF },
          ],
        })}
      />

      <ResourceHero
        eyebrow="Admissions tests"
        title="Test Prep"
        lede="GRE, GMAT, SAT, ACT, IELTS, TOEFL, PTE, and the Duolingo English Test. Which programmes ask for which, and how to prepare without guessing the rules."
      />

      <GuideBlock
        title="Check the programme before you choose a test"
        intro="A programme page states which tests it accepts and whether a test is required at all. Test-optional policies, accepted English tests, and minimum scores change. Read the page for your programme and your entry year."
      >
        <GuideCopy>
          <p>
            An admission test and a visa test are different requirements. A
            university may accept one English test while the student visa for
            that country names another, or names none. If you need a score for
            a visa, read the visa authority&apos;s list as well as the
            university&apos;s list.
          </p>
          <p>
            English-taught degrees in countries where English is not the local
            language still commonly ask for an English test when your previous
            education was not in English. Some programmes are taught in the
            local language and ask for that instead, or as well. A waiver is
            sometimes available if you completed a set period of study in
            English. The waiver rules are on the admissions page. Do not assume
            one.
          </p>
          <p>
            The United States is the main place that asks for the SAT or ACT at
            undergraduate level, and it is where the GRE and GMAT are most
            often requested. Elsewhere, an English test is the requirement you
            are more likely to meet. None of this replaces the line on your
            programme page.
          </p>
        </GuideCopy>
      </GuideBlock>

      <GuideBlock
        title="Undergraduate and graduate tests"
        intro="These tests are about admission to a programme. They are separate from an English proficiency test, and a school may ask for both, one, or neither."
        tone="white"
        width="wide"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {admissionsTests.map((test) => (
            <article
              key={test.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">{test.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{test.body}</p>
            </article>
          ))}
        </div>
      </GuideBlock>

      <GuideBlock
        title="English tests"
        intro="If your previous education was not in English, an English-taught programme commonly asks for one of these. The university decides which names are on its list."
        width="wide"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {englishTests.map((test) => (
            <article
              key={test.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">{test.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{test.body}</p>
            </article>
          ))}
        </div>
      </GuideBlock>

      <GuideBlock title="How to prepare" tone="white">
        <PointList items={preparationSteps} />
      </GuideBlock>

      <GuideBlock
        title="Official test sites"
        intro="Register, check dates, and read the current format on the test owner's website. A prep company is not the test owner."
        width="wide"
      >
        <ul className="grid gap-4 md:grid-cols-2">
          {officialTests.map((test) => (
            <li
              key={test.id}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">{test.name}</h3>
              <p className="mt-1 text-sm font-semibold text-indigo-600">
                {test.owner}
              </p>
              <p className="mt-3 flex-1 leading-7 text-slate-600">{test.note}</p>
              <a
                href={test.url}
                target="_blank"
                rel={PLAIN_LINK_REL}
                className={`mt-5 inline-flex font-semibold text-blue-700 hover:text-blue-800 ${focus}`}
              >
                Official {test.name} website
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </GuideBlock>

      <GuideBlock
        id="prep-courses"
        title="A course for the GRE, GMAT, SAT, and ACT"
        intro="Magoosh is an online prep provider for those four tests. It is not the place to register, and it is not a source of official scores. For IELTS, TOEFL, PTE, and the Duolingo English Test, start with the official practice material above."
        tone="white"
        width="wide"
      >
        <PartnerGrid partners={testPrepPartners} />
      </GuideBlock>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <ItalkiSpeakingCta note="Speaking is the part of IELTS, TOEFL, PTE, and the Duolingo English Test that is hard to rehearse alone. Practice out loud with a tutor, then use the official practice test for the real timing and task types." />
          <div className="mt-8">
            <GuideNote>
              <p>
                <Link
                  href={LANGUAGE_STUDY_HREF}
                  className={`font-semibold text-blue-700 hover:text-blue-800 ${focus}`}
                >
                  {LANGUAGE_STUDY_LABEL}
                </Link>{" "}
                on MatchMyStudy has reading, writing, and listening practice in
                English. {UNOFFICIAL_NOTICE} {LANGUAGE_STUDY_DEVELOPMENT_NOTICE}
              </p>
            </GuideNote>
          </div>
        </div>
      </section>

      <ResourcePager current={path} />
    </div>
  );
}
