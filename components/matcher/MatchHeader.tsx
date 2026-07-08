type Props = {
  title: string;
  subtitle: string;
};

export default function MatchHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-12">

      <h1 className="text-5xl font-bold mb-6">

        {title}

      </h1>

      <p className="text-slate-600 text-xl max-w-3xl mx-auto">

        {subtitle}

      </p>

    </div>
  );
}