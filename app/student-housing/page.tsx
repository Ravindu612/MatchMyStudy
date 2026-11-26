import JsonLd from "@/components/JsonLd";
import { PartnerGrid } from "@/components/resources/PartnerCard";
import {
  GuideBlock,
  GuideCopy,
  GuideNote,
  InfoGrid,
  PointList,
  ResourceHero,
  ResourcePager,
} from "@/components/resources/ResourceGuide";
import { housingPartners } from "@/data/partners";
import { hubPageJsonLd } from "@/lib/hub-jsonld";
import { pageMeta } from "@/lib/seo-meta";
import Link from "next/link";

const path = "/student-housing";
const title = "Student Housing Abroad: A Practical Guide | MatchMyStudy";
const description =
  "Find student housing abroad: halls, private residences, shared flats, and mid-term rentals, plus when to book, common scams, and what to check before you pay.";

export const metadata = pageMeta(path, title, description);

const housingTypes = [
  {
    icon: "🏫",
    title: "University halls",
    body: "Halls, also called dorms or a residence, are run by the university or by a company the university contracts. You may have a room in a larger building or a cluster flat with a shared kitchen. Rent often includes utilities and internet, and there is usually staff on site. Places are limited. Many universities give new students, including international students, priority or a guarantee if you apply by the date in your offer. The contract usually covers the academic year, and you may not be able to end it early.",
  },
  {
    icon: "🏢",
    title: "Private student residences",
    body: "These are purpose-built blocks run by a private company, often near a campus. A typical room is a private bedroom, sometimes with its own bathroom, plus a shared kitchen. Studios are also common. Bills are often included in the rent, and the contract is usually for a semester or an academic year. You book with the company or through a listing site. A university housing guarantee does not cover a private residence.",
  },
  {
    icon: "🏠",
    title: "Shared flats",
    body: "A shared flat or house means renting a room with other students or young professionals. It is often less expensive than a studio or a private residence, and it is how many students live after the first year. The lease may be in one person's name, or everyone may be responsible together for the full rent. Utilities are often extra. Ask who the landlord is, whether the bedroom is yours alone, and what happens if a flatmate moves out.",
  },
  {
    icon: "📅",
    title: "Mid-term rentals",
    body: "A mid-term rental is a furnished room or apartment let for a few months rather than a full year. It fits a short programme, a single semester, or the weeks before a university room starts. The listing should state the minimum stay and how much notice you must give. Staying somewhere short-term when you arrive also lets you view longer leases in person, which is harder for a scammer to fake.",
  },
] as const;

const bookingSteps = [
  {
    title: "University halls: use the deadline in your offer",
    body: "Apply when you accept your place, and before the housing date the university gives you. Do not wait for a visa if that date is earlier, but read what happens to your deposit if the visa is refused or your start is deferred. If the university may still offer you a hall, avoid signing a private contract you cannot cancel for the same dates.",
  },
  {
    title: "Private residences: early choice, early commitment",
    body: "Bookings often open months before the semester. Waiting can mean fewer rooms. Paying a deposit before you are sure you will attend can also lock you in. Ask, in writing, what you get back if your visa is refused or the university defers you, and keep that answer with the contract.",
  },
  {
    title: "Shared flats: look once your dates are real",
    body: "In a city with a shortage of rooms, start a couple of months ahead. Where rooms are easier to find, you can look closer to arrival. View the room before you pay whenever you can. A live video walk-through of that room, on that day, is the next best thing. A slideshow of old photos is not a viewing.",
  },
  {
    title: "Do not pay to hold a room you cannot identify",
    body: "A legitimate landlord, university, or housing company can wait until you have a written offer that names the room, the dates, the rent, and the legal name of the person or company you pay. Pressure to send money the same day is a reason to stop, not a reason to hurry.",
  },
] as const;

const scams = [
  {
    title: "A copied listing at a price that makes no sense",
    body: "Photos are taken from another advert, the rent is far below similar rooms nearby, and the landlord is always abroad or too busy to meet. Search the photo and the address. Ask for a live video call in which the person walks into the actual room and shows a street sign or a detail you name.",
  },
  {
    title: "Payment before any contract",
    body: "You are told to wire a deposit, send a gift card, pay in cryptocurrency, or transfer money to a personal account in someone else's name before you have seen a contract. A real landlord can be paid by a traceable method after you have the agreement. Walk away from gift cards and from accounts that do not match the name on the contract.",
  },
  {
    title: "A lookalike website",
    body: "The page looks like a known housing platform, a university, or a bank, but the web address is slightly different. Type the official address yourself, or use the links on this page, and then read the address bar before you log in or pay. Do not trust a link sent by a stranger.",
  },
  {
    title: "A fee just to view the room",
    body: "Some agencies charge an application fee on their own website, with a receipt in the company name. A person in a chat asking for a viewing fee, a key fee, or a reservation fee to their own account is a different thing. Do not pay an individual for the chance to see a room.",
  },
  {
    title: "The deal changes after you have paid",
    body: "The room, the dates, or the rent are not what you agreed. Keep the listing, the messages, and the receipt. Pay only the amount in the contract you signed, to the account named in that contract. If the story changes, stop paying and ask the university housing office or a local advice service for students what to do next.",
  },
  {
    title: "Your banking password, or your card, as a deposit",
    body: "Nobody needs your online banking password to reserve a room. A photo of your bank card is not a normal holding deposit. Identification can be part of a later, signed application with a named organisation. It is not the first step in a chat.",
  },
] as const;

const checks = [
  "The legal name of the landlord, the university, or the company, and a physical address.",
  "Contract dates that match your programme, including when you can move in.",
  "What happens if you leave early, or if your visa is refused or your course is deferred.",
  "What the rent includes: heat, electricity, water, internet, local taxes, and cleaning.",
  "The deposit: how much it is, who holds it, and when it comes back. In some countries a protected scheme holds tenant deposits. Ask if that applies.",
  "The specific room, not only the building, and whether the bedroom or bathroom is shared.",
  "Travel time to your campus at the hour you would actually go there, and whether you would feel safe walking back at night.",
  "A written inventory if the place is furnished, so you are not charged later for damage that was already there.",
  "A payment account whose name matches the name on the contract.",
  "A contract you can read. Do not sign a document you do not understand. Ask the university or a student advice service if you need help with it.",
];

export default function StudentHousingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <JsonLd
        data={hubPageJsonLd({
          type: "WebPage",
          name: "Student Housing",
          path,
          description,
          items: housingPartners.map((partner) => ({
            name: partner.name,
            url: partner.url,
          })),
        })}
      />

      <ResourceHero
        eyebrow="Living abroad"
        title="Student Housing"
        lede="University halls, private residences, shared flats, and mid-term rentals. How to time a booking, recognise a scam, and what to read before you pay."
      />

      <GuideBlock
        title="Start with your university"
        intro="The housing office, the accommodation portal, or the international student office is the first place to look. Rules differ by university and by country. This page is general guidance, not a substitute for the instructions in your offer."
      >
        <GuideCopy>
          <p>
            Many universities explain how to apply for a hall, whether new
            international students are guaranteed a room, and the date by which
            you must apply. Read that page before you sign anything private.
            Two contracts for the same months can leave you paying twice.
          </p>
          <p>
            If you will pay a deposit or rent from another country, the checks
            on{" "}
            <Link
              href="/money-transfer"
              className="font-semibold text-blue-700 hover:text-blue-800"
            >
              sending money abroad
            </Link>{" "}
            matter as much as the room itself. Pay the account named in the
            contract, and keep the receipt.
          </p>
        </GuideCopy>
      </GuideBlock>

      <GuideBlock
        title="Types of accommodation"
        intro="These four cover most of what international students actually rent. The names differ by country. The questions to ask do not."
        tone="white"
        width="wide"
      >
        <InfoGrid items={housingTypes} />
      </GuideBlock>

      <GuideBlock title="When to book">
        <PointList items={bookingSteps} />
      </GuideBlock>

      <GuideBlock
        title="Typical scams and how to avoid them"
        intro="Housing scams repeat the same patterns. None of them depend on a particular city. Slow down when money is requested before the room is identified."
        tone="white"
      >
        <PointList items={scams} />
      </GuideBlock>

      <GuideBlock
        title="What to check before you pay"
        intro="Read this against the contract, not against the advert. If a point is missing from the contract, ask for it in writing before you transfer money."
      >
        <ul className="grid gap-3">
          {checks.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 leading-7 text-slate-700 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </GuideBlock>

      <GuideBlock
        id="where-to-search"
        title="Where to search"
        intro="Use your university housing pages first. The sites below are commercial listing platforms. MatchMyStudy does not book rooms and does not check each listing."
        tone="white"
        width="wide"
      >
        <PartnerGrid partners={housingPartners} />
        <div className="mt-8">
          <GuideNote>
            <p>
              These buttons go to each provider&apos;s own website. Compare the
              listing with rooms on the university site and, if you can, with a
              second source. Check the contract and the platform&apos;s own
              terms before you pay.
            </p>
          </GuideNote>
        </div>
      </GuideBlock>

      <ResourcePager current={path} />
    </div>
  );
}
