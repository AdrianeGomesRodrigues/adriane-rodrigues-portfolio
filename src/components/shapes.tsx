/**
 * Matisse-style paper cut-out shapes + Tarsila-inspired organic forms.
 * Purely decorative, drawn with SVG paths so they stay crisp and themeable.
 */

type ShapeProps = {
  className?: string;
};

export function LeafCutout({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 120 200" aria-hidden className={className} fill="none">
      <path
        d="M60 2C22 44 4 96 20 142c12 34 40 56 40 56s28-22 40-56C116 96 98 44 60 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BlobCutout({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={className} fill="none">
      <path
        d="M104 6c38-8 74 16 84 52 10 38-12 60-8 92 4 30-24 48-58 44-40-5-58 12-84-8C10 164 4 128 14 96 26 58 62 15 104 6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArchCutout({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 160 220" aria-hidden className={className} fill="none">
      <path d="M80 0c44 0 80 38 80 86v134H0V86C0 38 36 0 80 0Z" fill="currentColor" />
    </svg>
  );
}

export function SunCutout({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={className} fill="none">
      <circle cx="100" cy="100" r="52" fill="currentColor" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const x1 = 100 + Math.cos(a) * 68;
        const y1 = 100 + Math.sin(a) * 68;
        const x2 = 100 + Math.cos(a) * 92;
        const y2 = 100 + Math.sin(a) * 92;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="9"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export function WaveRule({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 320 12" aria-hidden className={className} fill="none" preserveAspectRatio="none">
      <path
        d="M0 6c20-8 40-8 60 0s40 8 60 0 40-8 60 0 40 8 60 0 40-8 60 0"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Small cut-out marker used beside section labels. */
export function SectionMark({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={className} fill="none">
      <path d="M20 2c10 6 18 12 18 18s-8 12-18 18C10 32 2 26 2 20S10 8 20 2Z" fill="currentColor" />
    </svg>
  );
}

/** Layered collage used in the hero. */
export function HeroCollage({ className }: ShapeProps) {
  return (
    <div className={className} aria-hidden>
      <div className="relative h-full w-full">
        <BlobCutout className="absolute -right-10 top-0 h-[240px] w-[240px] text-clay/70" />
        <LeafCutout className="absolute right-16 top-10 h-[210px] w-[126px] rotate-[14deg] text-sage/80" />
        <ArchCutout className="absolute right-0 bottom-0 h-[150px] w-[110px] text-accent/85" />
        <SunCutout className="absolute right-[150px] bottom-4 h-[92px] w-[92px] text-ochre" />
      </div>
    </div>
  );
}
