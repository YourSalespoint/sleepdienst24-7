export default function TowTruckIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Laadbed */}
      <rect x="1" y="12" width="12" height="7" rx="1.5"/>
      {/* Cabine (hoger dan laadbed) */}
      <rect x="13" y="8" width="9" height="11" rx="1.5"/>
      {/* Voorruit */}
      <rect x="14.5" y="9.5" width="5.5" height="5" rx="1"/>
      {/* Hijsarm schuin omhoog-links */}
      <line x1="15" y1="8" x2="6" y2="2"/>
      {/* Katrol aan uiteinde arm */}
      <circle cx="5.5" cy="2" r="1.5"/>
      {/* Haak (J-vorm) */}
      <path d="M5.5 3.5 Q5.5 7.5 9 7.5"/>
      {/* Wielen */}
      <circle cx="5" cy="20.5" r="2.5"/>
      <circle cx="18" cy="20.5" r="2.5"/>
    </svg>
  )
}
