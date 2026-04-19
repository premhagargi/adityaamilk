type Props = {
  children: React.ReactNode;
  tone?: "light" | "dark";
};

export default function SectionEyebrow({ children, tone = "light" }: Props) {
  const color = tone === "dark" ? "text-gold-400" : "text-blue-900";
  return (
    <div
      className={`inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-eyebrow ${color}`}
    >
      <span className="inline-block h-[6px] w-[6px] bg-gold-500" />
      <span className="inline-block h-px w-10 bg-gold-500" />
      {children}
    </div>
  );
}
