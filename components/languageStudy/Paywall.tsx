import PurchaseButton from "./PurchaseButton";

export default function Paywall({
  title,
  message,
  product,
  skill,
  language,
  examVariant,
  actionLabel,
  showPurchase,
}: {
  title: string;
  message: string;
  product: "task_batch" | "mock_test";
  skill: string;
  language: string;
  examVariant?: string | null;
  actionLabel: string;
  showPurchase: boolean;
}) {
  return (
    <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-amber-950">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p id="language-study-purchase-note" className="mt-3 leading-7">
        {message}
      </p>
      {showPurchase ? (
        <PurchaseButton
          product={product}
          skill={skill}
          language={language}
          examVariant={examVariant}
          label={actionLabel}
        />
      ) : null}
    </section>
  );
}
