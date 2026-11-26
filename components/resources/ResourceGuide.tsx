import Link from "next/link";
import { resourceGuides } from "@/data/resourceGuides";
import {
  LANGUAGE_STUDY_HREF,
  LANGUAGE_STUDY_LABEL,
} from "@/lib/languageStudy/paths";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700";

export function ResourceHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-20 text-center text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 font-semibold tracking-wide">{eyebrow}</p>
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
          {lede}
        </p>
      </div>
    </section>
  );
}

export function GuideBlock({
  id,
  title,
  intro,
  children,
  tone = "muted",
  width = "default",
}: {
  id?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  tone?: "muted" | "white";
  width?: "default" | "wide";
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 ${tone === "white" ? "bg-white px-6 py-16" : "px-6 py-16"}`}
    >
      <div
        className={
          width === "wide" ? "mx-auto max-w-7xl" : "mx-auto max-w-5xl"
        }
      >
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          {title}
        </h2>
        {intro ? (
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            {intro}
          </p>
        ) : null}
        <div className={intro ? "mt-8" : "mt-6"}>{children}</div>
      </div>
    </section>
  );
}

export function GuideCopy({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl space-y-4 text-lg leading-8 text-slate-600">
      {children}
    </div>
  );
}

export function InfoGrid({
  items,
}: {
  items: readonly { title: string; body: string; icon: string }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="text-3xl" aria-hidden="true">
            {item.icon}
          </div>
          <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
          <p className="mt-3 leading-7 text-slate-600">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function PointList({
  items,
}: {
  items: readonly { title: string; body: string }[];
}) {
  return (
    <ol className="space-y-4">
      {items.map((item, index) => (
        <li
          key={item.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h3 className="text-xl font-bold text-slate-900">
            <span className="mr-2 text-blue-600" aria-hidden="true">
              {index + 1}.
            </span>
            {item.title}
          </h3>
          <p className="mt-3 leading-7 text-slate-600">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function GuideNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-8">
      <div className="max-w-3xl space-y-3 text-lg leading-8 text-slate-700">
        {children}
      </div>
    </div>
  );
}

export function ResourcePager({ current }: { current: string }) {
  const links = [
    ...resourceGuides
      .filter((guide) => guide.href !== current)
      .map((guide) => ({ href: guide.href, label: guide.label })),
    { href: "/study-online", label: "Study Online" },
    { href: LANGUAGE_STUDY_HREF, label: LANGUAGE_STUDY_LABEL },
  ];

  return (
    <section className="px-6 py-12 text-center">
      <h2 className="text-lg font-semibold text-slate-900">
        More on MatchMyStudy
      </h2>
      <div className="mx-auto mt-6 flex max-w-5xl flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`inline-flex items-center justify-center rounded-xl border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white ${focus}`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/"
          className={`inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 ${focus}`}
        >
          ← Back to MatchMyStudy
        </Link>
      </div>
    </section>
  );
}
