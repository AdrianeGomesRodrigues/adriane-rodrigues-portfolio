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

/** Concentric complete rings — abstract, architectural. */
export function ArcLines({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden className={className} fill="none">
      <circle cx="60" cy="60" r="57" stroke="currentColor" strokeWidth="2" />
      <circle cx="60" cy="60" r="39" stroke="currentColor" strokeWidth="2" />
      <circle cx="60" cy="60" r="21" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/** Concentric rings with a dot — fully drawn, perfectly centered. */
export function ContourLines({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden className={className} fill="none">
      <circle cx="60" cy="60" r="57" stroke="currentColor" strokeWidth="2" />
      <circle cx="60" cy="60" r="34" stroke="currentColor" strokeWidth="2" />
      <circle cx="60" cy="60" r="8" fill="currentColor" />
    </svg>
  );
}


/** A complete ring, always fully visible. */
export function RingShape({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden className={className} fill="none">
      <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="2.5" />
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
        <BlobCutout className="drift-slow absolute right-0 top-0 h-[210px] w-[210px] text-clay/60" />
        <ArcLines className="drift-sway absolute right-6 bottom-0 h-[110px] w-[110px] text-accent/70" />
        <ContourLines className="drift-medium absolute left-0 top-12 h-[130px] w-[130px] text-clay/45" />
      </div>
    </div>
  );
}

