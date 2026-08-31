type Props = {
  title: string;
  icon: string;
  gradient: string;
  children: React.ReactNode;
};

export default function Section({
  title,
  icon,
  gradient,
  children,
}: Props) {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-10">

      <div
        style={{
          background: "#ffffff",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 15px 40px rgba(15,23,42,0.08)",
        }}
      >

        {/* Header */}

        <div
          style={{
            background: gradient,
            padding: "18px 28px",
          }}
        >
          <h2
            style={{
              color: "white",
              fontSize: "1.8rem",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span>{icon}</span>

            {title}
          </h2>
        </div>

        {/* Body */}

        <div
          style={{
            padding: "2rem",
          }}
        >
          {children}
        </div>

      </div>

    </section>
  );
}