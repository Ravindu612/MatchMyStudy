type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({
  current,
  total,
}: Props) {
  const percentage = (current / total) * 100;

  return (
    <div className="mb-10">

      <div className="flex justify-between mb-3">

        <span className="font-semibold">

          Question {current} of {total}

        </span>

        <span>{Math.round(percentage)}%</span>

      </div>

      <div className="w-full h-3 rounded-full bg-slate-200">

        <div
          className="h-3 rounded-full bg-blue-600 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />

      </div>

    </div>
  );
}