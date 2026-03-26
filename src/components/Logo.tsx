export default function Logo({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle cx="100" cy="100" r="90" stroke="#c0c0c0" strokeWidth="3" fill="none" />
      {/* Inner glow circle */}
      <circle cx="100" cy="100" r="88" stroke="rgba(245,197,24,0.15)" strokeWidth="1" fill="none" />

      {/* Lightning bolt - main shape */}
      <path
        d="M120 20 L70 95 L100 95 L78 180 L140 98 L108 98 Z"
        fill="url(#boltGradient)"
        stroke="#c9a832"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Lightning bolt highlight */}
      <path
        d="M118 25 L72 93 L100 93 L80 175"
        fill="none"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Text: S.O.S */}
      <text
        x="100"
        y="82"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="22"
        fontWeight="bold"
        fill="#e8e8e8"
        letterSpacing="4"
      >
        S.O.S
      </text>

      {/* Text: Electric */}
      <text
        x="100"
        y="132"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="18"
        fontStyle="italic"
        fill="#e8e8e8"
        letterSpacing="2"
      >
        Electric
      </text>

      {/* Gradient definitions */}
      <defs>
        <linearGradient id="boltGradient" x1="78" y1="20" x2="140" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f5e6a3" />
          <stop offset="50%" stopColor="#e8c547" />
          <stop offset="100%" stopColor="#c9a832" />
        </linearGradient>
      </defs>
    </svg>
  );
}
