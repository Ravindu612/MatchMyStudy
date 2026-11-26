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
import { moneyTransferPartners } from "@/data/partners";
import { hubPageJsonLd } from "@/lib/hub-jsonld";
import { pageMeta } from "@/lib/seo-meta";
import Link from "next/link";

const path = "/money-transfer";
const title =
  "Sending Money Abroad: Transfers and Fees | MatchMyStudy";
const description =
  "How international students can pay tuition, rent, and living costs: bank transfers, online services, exchange rates, fees, and opening a local bank account.";

export const metadata = pageMeta(path, title, description);

const paymentRoutes = [
  {
    title: "A transfer from your bank",
    body: "You tell your bank to send money to an account in another country. This is the method many universities print on a tuition invoice. Your bank may charge a sending fee. Banks along the way may deduct their own fee, so the university can receive less than the amount you sent. The exchange rate is usually the bank's own rate, not the rate you see on a news site. A transfer often takes a few business days, and longer if it is sent just before a weekend or a public holiday in either country.",
  },
  {
    title: "An online money transfer service",
    body: "You pay a company in your local currency, by a method that company offers, such as a local bank transfer or a debit card. The company pays the recipient. Before you confirm, you should be able to see a fee and an exchange rate. How fast the money arrives depends on the countries and the option you choose. Some universities do not accept a payment that comes from a company rather than from you, or they want the sender's name to match the student. Use the instructions on your invoice.",
  },
] as const;

const feeQuestions = [
  {
    title: "What do I pay to send this?",
    body: "Ask for the sending fee on this transfer, not a general claim that the service is free. A low fee can sit next to a weak exchange rate. The two belong in the same conversation.",
  },
  {
    title: "What exchange rate will you use?",
    body: "The mid-market rate, the one published on public currency sites, is a reference. It is not automatically the rate you receive. Ask which rate applies to this payment, and compare providers using that rate plus every fee.",
  },
  {
    title: "Can anyone deduct money on the way?",
    body: "With a traditional bank transfer, an intermediary bank can take a fee out of the amount, so the recipient gets less. Ask whether the amount you enter is the amount that should arrive, and what to type so that fees are not taken from the tuition payment.",
  },
  {
    title: "Does the recipient pay to receive it?",
    body: "The university or the landlord's bank may charge to receive an international payment. For a shared flat, ask whether the landlord wants a local transfer once you have a local account. That is often simpler than an international transfer every month.",
  },
] as const;

const tips = [
  {
    title: "Pay the account on the official invoice",
    body: "If an email says the bank details have changed, phone the university finance office on a number from the university website. Do not use the phone number or the link in the email. Fraudsters send convincing invoices with a different account. The same caution applies to a landlord who changes account by message.",
  },
  {
    title: "Send a small test, then the rest",
    body: "The first time you pay a new recipient, or the first time you use a service, send a small amount. Confirm it arrived and that the reference was visible. Then send the rest. Keep the receipt, the rate, and the reference number.",
  },
  {
    title: "Put the reference where you are told to",
    body: "Universities match payments with a student number or an invoice number. If that reference is missing, the money can sit in a holding account while your record still shows the fee as unpaid. Copy the reference exactly.",
  },
  {
    title: "Start before the deadline",
    body: "Count business days in both countries, and count public holidays. A payment that leaves your account on the due date has not necessarily arrived. Tell your own bank before a large or unusual transfer so it is not blocked as fraud.",
  },
  {
    title: "Be careful with card payments and informal brokers",
    body: "Paying a large tuition bill by card can add a fee from your card company and sometimes from the university. A card can be a reasonable way to pay a small charge and an expensive way to pay a year of fees. Check both sides. Do not hand cash to someone who offers a better rate than the bank, and do not send money to a stranger who says they will pass it on. If it never arrives, you may have no receipt the university will accept.",
  },
  {
    title: "Keep the records",
    body: "A visa application, a scholarship, or a later question about tax may ask how you paid. Save the invoice, the transfer receipt, and the confirmation that the university or landlord received it. If you booked housing on a platform, check whether paying the landlord directly removes any protection described in that platform's terms.",
  },
] as const;

export default function MoneyTransferPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <JsonLd
        data={hubPageJsonLd({
          type: "WebPage",
          name: "Sending Money Abroad",
          path,
          description,
          items: moneyTransferPartners.map((partner) => ({
            name: partner.name,
            url: partner.url,
          })),
        })}
      />

      <ResourceHero
        eyebrow="Money abroad"
        title="Sending Money Abroad"
        lede="How international students pay tuition, rent, and living costs: a bank transfer compared with an online service, what fees to look for, and how a local bank account fits in."
      />

      <GuideBlock
        title="Bank transfer or an online service"
        intro="Both can be legitimate. The right one is the one your university or landlord will accept, that delivers the amount they asked for, in time."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {paymentRoutes.map((route) => (
            <article
              key={route.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">{route.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{route.body}</p>
            </article>
          ))}
        </div>
        <GuideCopy>
          <p className="mt-8">
            Rent and a housing deposit follow the same rule as tuition. Pay the
            name on the{" "}
            <Link
              href="/student-housing"
              className="font-semibold text-blue-700 hover:text-blue-800"
            >
              housing contract
            </Link>
            , not a different account suggested later in a chat.
          </p>
        </GuideCopy>
      </GuideBlock>

      <GuideBlock
        title="Exchange rates and hidden fees"
        intro="Compare the amount that leaves your account with the amount that arrives. That is the only comparison that includes the rate and every fee."
        tone="white"
      >
        <PointList items={feeQuestions} />
        <div className="mt-8">
          <GuideNote>
            <p>
              A provider can advertise no fee, or a very low fee, and still
              make its charge inside a weaker exchange rate. Ask for the rate
              and the fees together, for this payment, before you confirm.
            </p>
          </GuideNote>
        </div>
      </GuideBlock>

      <GuideBlock
        title="Opening a local bank account"
        intro="A local account is how you will pay everyday costs. Some employers can pay wages only into an account in that country. Banks set their own rules, so treat the list below as what to ask, not as a guarantee that you will be accepted."
      >
        <GuideCopy>
          <p>
            International students are commonly asked for a passport, a letter
            or document that shows they are enrolled, and something that shows
            where they live. If you do not have a lease yet, ask whether the
            bank accepts a university address letter. Some banks want an
            appointment. Take original documents.
          </p>
          <p>
            Ask what the account costs each month, what it costs to receive
            money from abroad, what a cash withdrawal costs, and whether you
            can open it before you have a local tax or identity number. A
            student account sometimes drops the monthly fee while you are
            enrolled. That is a question for the bank.
          </p>
          <p>
            Until the account is open, keep enough money somewhere you can
            access for the first weeks, without carrying a large amount of
            cash. A local account does not replace the need to pay tuition the
            way the invoice describes.
          </p>
        </GuideCopy>
      </GuideBlock>

      <GuideBlock title="Practical tips" tone="white">
        <PointList items={tips} />
      </GuideBlock>

      <GuideBlock
        id="where-to-compare"
        title="Services to compare"
        intro="Wise and Remitly are two online services students use for international payments. They are not the only options, and MatchMyStudy is not a bank. Follow your university or landlord's instructions if they conflict with a service you would otherwise prefer."
        width="wide"
      >
        <PartnerGrid partners={moneyTransferPartners} />
        <div className="mt-8">
          <GuideNote>
            <p>
              These buttons go to each provider&apos;s own website. Fees, rates,
              and delivery times change by country and are shown there before
              you pay. MatchMyStudy does not set those prices and does not
              handle the transfer.
            </p>
          </GuideNote>
        </div>
      </GuideBlock>

      <ResourcePager current={path} />
    </div>
  );
}
