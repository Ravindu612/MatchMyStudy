import Link from "next/link";

type Props = {
  name: string;
  score: number;
  description: string;
  href: string;
};

export default function ResultCard({
  name,
  score,
  description,
  href,
}: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

      <div className="flex justify-between items-center mb-5">

        <div>

          <h2 className="text-3xl font-bold">

            {name}

          </h2>

          <p className="text-slate-500">

            Recommended for you

          </p>

        </div>

        <div className="bg-blue-600 text-white rounded-full px-5 py-3 text-xl font-bold">

          {score}%

        </div>

      </div>

      <p className="text-slate-600 leading-7 mb-6">

        {description}

      </p>

      <Link
  href={href}
  className="inline-block rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition"
>
  Learn More →
</Link>

    </div>
  );
}