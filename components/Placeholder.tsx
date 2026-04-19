type Props = {
  label?: string;
  caption?: string;
  ratio?: "4/5" | "5/4" | "4/3" | "16/9" | "1/1" | "3/4";
  className?: string;
  tone?: "cream" | "blue" | "mixed";
};

/**
 * Styled placeholder that stands in for real photography.
 * Keeps the visual rhythm of the design without external assets.
 */
export default function Placeholder({
  label = "Photography",
  caption,
  ratio = "4/5",
  className = "",
  tone = "cream",
}: Props) {
  const ratioClass = {
    "4/5": "aspect-[4/5]",
    "5/4": "aspect-[5/4]",
    "4/3": "aspect-[4/3]",
    "16/9": "aspect-[16/9]",
    "1/1": "aspect-square",
    "3/4": "aspect-[3/4]",
  }[ratio];

  const bg =
    tone === "blue"
      ? "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-cream-50"
      : tone === "mixed"
      ? "bg-gradient-to-br from-cream-200 via-cream-100 to-blue-900/10 text-blue-900"
      : "bg-gradient-to-br from-cream-200 via-cream-100 to-cream-50 text-blue-900";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line ${ratioClass} ${bg} ${className}`}
    >
      {/* noise grain */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(10,37,64,0.4) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(201,162,39,0.3) 0%, transparent 55%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <div className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-eyebrow opacity-80">
          <span className="inline-block h-[6px] w-[6px] bg-gold-500" />
          Image
        </div>
        <div>
          <div className="font-display text-lg leading-tight">{label}</div>
          {caption && (
            <div className="mt-1 text-[12px] opacity-70">{caption}</div>
          )}
        </div>
      </div>
    </div>
  );
}
