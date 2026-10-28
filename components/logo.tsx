export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="as-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="0.55" stopColor="#F43F5E" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      <path
        d="M24 2 43 13v22L24 46 5 35V13Z"
        fill="#0F172A"
        stroke="url(#as-grad)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontSize="19"
        fontWeight="800"
        fontFamily="system-ui, sans-serif"
        letterSpacing="-1"
        fill="url(#as-grad)"
      >
        AS
      </text>
    </svg>
  );
}