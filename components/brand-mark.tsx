interface BrandMarkProps {
  size?: number;
  className?: string;
  gradientId?: string;
}

export function BrandMark({ size = 28, className, gradientId = 'brand-mark-arc' }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1="12" y1="8" x2="22" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="28" height="28" rx="7" fill="var(--accent)" />
      <path
        d="M20 8 A 7 7 0 1 0 20 20"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="20" cy="14" r="2.4" fill="#fff" />
    </svg>
  );
}
