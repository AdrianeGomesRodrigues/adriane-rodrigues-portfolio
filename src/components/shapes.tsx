/**
 * Abstract cut-out shapes and line motifs (Matisse / Tarsila inspired).
 * Purely decorative, drawn with SVG so they stay crisp and themeable.
 */

type ShapeProps = {
  className?: string;
};

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

/** Concentric open arcs — abstract, architectural. */
export function ArcLines({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 200 120" aria-hidden className={className} fill="none">
      <path d="M4 116a96 96 0 0 1 192 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M34 116a66 66 0 0 1 132 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M64 116a36 36 0 0 1 72 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/** Loose abstract contour, Tarsila-like. */
export function ContourLines({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 220 220" aria-hidden className={className} fill="none">
      <path
        d="M20 180c-14-52 8-108 56-134 42-23 96-6 112 34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M50 186c-10-42 8-86 46-106 32-17 74-6 88 26"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="150" cy="152" r="30" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export function WaveRule({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 320 20" aria-hidden className={className} fill="none">
      <path
        d="M2 10c20-7 40-7 60 0s40 7 60 0 40-7 60 0 40 7 60 0 38-7 76 0"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Layered abstract collage used in the hero. */
export function HeroCollage({ className }: ShapeProps) {
  return (
    <div className={className} aria-hidden>
      <div className="relative h-full w-full">
        <BlobCutout className="absolute right-0 top-0 h-[230px] w-[230px] text-clay/60" />
        <ArcLines className="absolute right-6 bottom-2 h-[110px] w-[190px] text-accent/70" />
        <ContourLines className="absolute right-[140px] top-6 h-[150px] w-[150px] text-sage/80" />
      </div>
    </div>
  );
}
