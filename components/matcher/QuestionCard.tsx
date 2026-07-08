import { motion } from "framer-motion";

type Props = {
  title: string;
  options: string[];
  value?: string;
  onSelect: (value: string) => void;
};

export default function QuestionCard({
  title,
  options,
  value,
  onSelect,
}: Props) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200">

      <h2 className="text-2xl font-bold mb-8">

        {title}

      </h2>

      <div className="grid gap-4">

        {options.map((option) => (

          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`rounded-2xl border p-4 text-left transition

            ${
              value === option

                ? "bg-blue-600 text-white border-blue-600"

                : "hover:bg-slate-100 border-slate-300"

            }`}
          >
            {option}
          </button>

        ))}

      </div>

    </div>
  );
}