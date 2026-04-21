import { SVGProps } from "react";

type Variant = "full" | "rays" | "seal" | "divider" | "corner";

interface SunMarkProps extends Omit<SVGProps<SVGSVGElement>, "viewBox"> {
  variant?: Variant;
  /** Height of the rendered SVG in px (width scales from viewBox). */
  size?: number;
  /** Override the gold color (e.g. for light-on-dark vs dark-on-light). */
  rayColor?: string;
  /** Background color when variant === "full" or "seal". */
  bgColor?: string;
}

/**
 * Adityaa brand mark — a rising-sun motif with capsule rays and a half-arc.
 * Reuse across sections, dividers, and corners to reinforce visual identity.
 *
 * Variants:
 *  - full      : rounded blue tile with rays + arc (logo-seal feel)
 *  - seal      : circular blue seal with rays + arc inside
 *  - rays      : transparent — rays + arc only, inherit currentColor
 *  - divider   : small centered motif for section breaks
 *  - corner    : quarter-bleed decorative corner (rays fan from origin)
 */
export default function SunMark({
  variant = "rays",
  size = 96,
  rayColor = "#D4AF37",
  bgColor = "#27398F",
  className,
  ...rest
}: SunMarkProps) {
  // Ray geometry — 7 capsules fanning symmetrically around (120, 120)
  // [angle, y, height] — outer rays shorter, centered rays longer
  const rays: Array<[number, number, number]> = [
    [-72, 50, 30],
    [-48, 38, 42],
    [-24, 26, 54],
    [0, 18, 62],
    [24, 26, 54],
    [48, 38, 42],
    [72, 50, 30],
  ];

  if (variant === "corner") {
    // Rays fan from bottom-left origin (0,0 is top-left but we translate)
    return (
      <svg
        viewBox="0 0 180 180"
        width={size}
        height={size}
        aria-hidden
        className={className}
        {...rest}
      >
        <g transform="translate(0,180)">
          {rays.map(([angle, y, h], i) => (
            <rect
              key={i}
              x={-5}
              y={-y - h}
              width={10}
              height={h}
              rx={5}
              fill={rayColor}
              transform={`rotate(${angle - 45})`}
            />
          ))}
          <path
            d="M -28 0 A 40 40 0 0 1 28 -0"
            fill="none"
            stroke={rayColor}
            strokeWidth={12}
            strokeLinecap="round"
            transform="rotate(-45)"
          />
        </g>
      </svg>
    );
  }

  const arc = (
    <path
      d="M 60 120 A 60 60 0 0 1 180 120"
      fill="none"
      stroke={rayColor}
      strokeWidth={14}
      strokeLinecap="round"
    />
  );

  const raysGroup = (
    <g>
      {rays.map(([angle, y, h], i) => (
        <rect
          key={i}
          x={115}
          y={y}
          width={10}
          height={h}
          rx={5}
          fill={rayColor}
          transform={`rotate(${angle} 120 120)`}
        />
      ))}
    </g>
  );

  if (variant === "seal") {
    return (
      <svg
        viewBox="0 0 240 240"
        width={size}
        height={size}
        aria-hidden
        className={className}
        {...rest}
      >
        <circle cx={120} cy={120} r={120} fill={bgColor} />
        {raysGroup}
        {arc}
      </svg>
    );
  }

  if (variant === "full") {
    return (
      <svg
        viewBox="0 0 240 160"
        width={size}
        height={size}
        aria-hidden
        className={className}
        {...rest}
      >
        <rect x={0} y={0} width={240} height={160} rx={16} fill={bgColor} />
        <g transform="translate(0, 20)">
          {raysGroup}
          {arc}
        </g>
      </svg>
    );
  }

  if (variant === "divider") {
    return (
      <svg
        viewBox="0 0 240 140"
        width={size}
        height={size}
        aria-hidden
        className={className}
        {...rest}
      >
        {raysGroup}
        {arc}
      </svg>
    );
  }

  // rays (default) — transparent, no background
  return (
    <svg
      viewBox="0 0 240 140"
      width={size}
      height={size}
      aria-hidden
      className={className}
      {...rest}
    >
      {raysGroup}
      {arc}
    </svg>
  );
}
