// =====================================================
// SleepLogo — 5 varianten
// Gebruik via: import SleepLogo, { LogoB, LogoC, LogoD, LogoE } from './SleepLogo'
// =====================================================

// Gedeelde sleepwagen SVG — duidelijke hijsarm (boom) schuin omhoog
// Viewbox 0 0 52 36 — cab rechts, laadbed links, arm diagonaal omhoog-links
function TowTruck({ fgColor = 'white', accentColor = '#f97316', bgColor = 'transparent', width = 52, height = 36 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 52 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* === LAADBED (links) === */}
      <rect x="3" y="18" width="22" height="9" rx="2.5" fill={fgColor} fillOpacity=".95"/>

      {/* === CABINE (rechts, hoger) === */}
      <rect x="24" y="11" width="18" height="16" rx="3" fill={fgColor} fillOpacity=".95"/>
      {/* Voorruit */}
      <rect x="25.5" y="12.5" width="11" height="9" rx="2" fill={bgColor === 'transparent' ? accentColor : bgColor} fillOpacity=".35"/>
      {/* Uitlaat */}
      <rect x="40" y="7" width="3" height="7" rx="1.5" fill={fgColor} fillOpacity=".4"/>

      {/* === HIJSARM / BOOM (sleutelkenmerk sleepwagen) === */}
      {/* Basis-balk schuin omhoog-links */}
      <line x1="27" y1="11" x2="10" y2="2" stroke={accentColor} strokeWidth="3.5" strokeLinecap="round"/>
      {/* Arm-versterking (dubbele lijn) */}
      <line x1="27" y1="11" x2="10" y2="2" stroke={fgColor} strokeWidth="1" strokeLinecap="round" strokeOpacity=".4"/>
      {/* Toppunt / katrol */}
      <circle cx="9.5" cy="2" r="3" fill={accentColor} stroke={fgColor} strokeWidth="1.2"/>
      {/* Kabel naar beneden */}
      <line x1="9.5" y1="5" x2="9.5" y2="17" stroke={fgColor} strokeWidth="1.2" strokeDasharray="2.5 2" strokeOpacity=".7"/>
      {/* Haak */}
      <path d="M9.5 17 Q9.5 21 13.5 21" stroke={fgColor} strokeWidth="1.8" strokeLinecap="round" fill="none" strokeOpacity=".85"/>

      {/* === WIELEN === */}
      {/* Achterwiel (links, onder laadbed) */}
      <circle cx="10" cy="29" r="6" fill={fgColor} fillOpacity=".95"/>
      <circle cx="10" cy="29" r="3" fill={accentColor}/>
      <circle cx="10" cy="29" r="1" fill={fgColor} fillOpacity=".7"/>
      {/* Voorzijwiel (rechts, onder cabine) */}
      <circle cx="36" cy="29" r="6" fill={fgColor} fillOpacity=".95"/>
      <circle cx="36" cy="29" r="3" fill={accentColor}/>
      <circle cx="36" cy="29" r="1" fill={fgColor} fillOpacity=".7"/>

      {/* Bumper/voorkant */}
      <rect x="40.5" y="22" width="4" height="5" rx="1.5" fill={fgColor} fillOpacity=".5"/>
    </svg>
  )
}

// ── LOGO A ── Oranje afgerond vierkant + blauwe tekst
export function LogoA({ size = 'md' }) {
  const s = size === 'lg' ? 1.6 : size === 'sm' ? 0.75 : 1
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 * s, flexShrink: 0 }}>
      <div style={{
        width: 46 * s, height: 46 * s,
        background: 'linear-gradient(135deg, #f97316, #ea580c)',
        borderRadius: 12 * s,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        boxShadow: `0 3px 10px rgba(249,115,22,.35)`,
      }}>
        <TowTruck width={34 * s} height={24 * s} fgColor="white" accentColor="rgba(255,255,255,.6)" bgColor="#f97316"/>
      </div>
      <div style={{ lineHeight: 1 }}>
        <div style={{ fontWeight: 900, fontSize: 17 * s, letterSpacing: '-.02em', color: '#0f172a', display: 'flex', alignItems: 'center', gap: 5 * s }}>
          <span>Sleepdienst</span>
          <span style={{ fontSize: 9 * s, fontWeight: 900, background: '#f97316', color: '#fff', padding: `${2 * s}px ${6 * s}px`, borderRadius: 4 * s }}>24/7</span>
        </div>
        <div style={{ fontSize: 10 * s, color: '#2563eb', marginTop: 4 * s, letterSpacing: '.04em' }}>Dag &amp; Nacht voor u klaar</div>
      </div>
    </div>
  )
}

// ── LOGO B ── Donkerblauwe cirkel-badge + caps tekst
export function LogoB({ size = 'md' }) {
  const s = size === 'lg' ? 1.6 : size === 'sm' ? 0.75 : 1
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 13 * s, flexShrink: 0 }}>
      <div style={{
        width: 48 * s, height: 48 * s,
        background: '#1e40af',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        boxShadow: `0 3px 12px rgba(30,64,175,.4)`,
        position: 'relative',
      }}>
        {/* Dunne ring binnenin */}
        <div style={{ position: 'absolute', inset: 3 * s, borderRadius: '50%', border: `1px solid rgba(255,255,255,.2)` }}/>
        <TowTruck width={32 * s} height={22 * s} fgColor="white" accentColor="#60a5fa" bgColor="#1e40af"/>
      </div>
      <div style={{ lineHeight: 1 }}>
        <div style={{ fontWeight: 900, fontSize: 16 * s, letterSpacing: '.02em', color: '#0f172a' }}>
          SLEEPDIENST
        </div>
        <div style={{ fontWeight: 700, fontSize: 10.5 * s, color: '#1e40af', letterSpacing: '.12em', marginTop: 4 * s }}>
          24/7 · HEEL NEDERLAND
        </div>
      </div>
    </div>
  )
}

// ── LOGO C ── Gradient blauw afgerond vierkant + gestapelde tekst
export function LogoC({ size = 'md' }) {
  const s = size === 'lg' ? 1.6 : size === 'sm' ? 0.75 : 1
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 * s, flexShrink: 0 }}>
      <div style={{
        width: 46 * s, height: 46 * s,
        background: 'linear-gradient(140deg, #2563eb, #1e3a8a)',
        borderRadius: 13 * s,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        boxShadow: `0 3px 12px rgba(37,99,235,.35)`,
      }}>
        <TowTruck width={33 * s} height={23 * s} fgColor="white" accentColor="#f97316" bgColor="#2563eb"/>
      </div>
      <div style={{ lineHeight: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 * s }}>
          <span style={{ fontWeight: 900, fontSize: 21 * s, color: '#0f172a', letterSpacing: '-.03em' }}>SLEEP</span>
          <span style={{ fontWeight: 900, fontSize: 12 * s, color: '#f97316', letterSpacing: '.05em' }}>24/7</span>
        </div>
        <div style={{ fontWeight: 700, fontSize: 13 * s, color: '#2563eb', letterSpacing: '.1em', marginTop: 2 * s }}>DIENST</div>
      </div>
    </div>
  )
}

// ── LOGO D ── Puur typografisch woordmerk (geen icoon)
export function LogoD({ size = 'md' }) {
  const s = size === 'lg' ? 1.6 : size === 'sm' ? 0.75 : 1
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
      <div style={{ lineHeight: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          <span style={{ fontWeight: 900, fontSize: 22 * s, color: '#0f172a', letterSpacing: '-.04em', lineHeight: 1 }}>SLEEP</span>
          <span style={{ fontWeight: 900, fontSize: 22 * s, color: '#2563eb', letterSpacing: '-.04em', lineHeight: 1 }}>DIENST</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 * s, marginTop: 5 * s }}>
          <div style={{ height: 2.5, background: '#f97316', borderRadius: 2, width: 26 * s }}></div>
          <span style={{ fontWeight: 800, fontSize: 9.5 * s, color: '#f97316', letterSpacing: '.16em' }}>24 / 7 · HEEL NEDERLAND</span>
        </div>
      </div>
    </div>
  )
}

// ── LOGO E ── Donkere cirkel + oranje cab-accent + pill badge
export function LogoE({ size = 'md' }) {
  const s = size === 'lg' ? 1.6 : size === 'sm' ? 0.75 : 1
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 * s, flexShrink: 0 }}>
      <div style={{
        width: 46 * s, height: 46 * s,
        background: '#0f172a',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        boxShadow: `0 3px 12px rgba(0,0,0,.3)`,
      }}>
        <TowTruck width={32 * s} height={22 * s} fgColor="white" accentColor="#f97316" bgColor="#0f172a"/>
      </div>
      <div style={{ lineHeight: 1 }}>
        <div style={{ fontWeight: 900, fontSize: 17 * s, color: '#0f172a', letterSpacing: '-.02em' }}>
          Sleepdienst
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 * s, marginTop: 5 * s }}>
          <span style={{ fontWeight: 800, fontSize: 9.5 * s, background: '#f97316', color: 'white', padding: `${2.5 * s}px ${8 * s}px`, borderRadius: 20 * s, letterSpacing: '.04em' }}>24/7</span>
          <span style={{ fontSize: 9.5 * s, color: '#94a3b8', fontWeight: 600 }}>Heel Nederland</span>
        </div>
      </div>
    </div>
  )
}

// Default export = gebruik A als startpunt (wissel later)
export default LogoA
