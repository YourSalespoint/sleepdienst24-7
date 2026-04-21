import { LogoA, LogoB, LogoC, LogoD, LogoE } from '../../components/SleepLogo'

export const metadata = { title: 'Logo Varianten – Sleepdienst24/7' }

const logos = [
  {
    id: 'A',
    label: 'Variant A — Oranje truck-badge',
    desc: 'Warm en herkenbaar. Oranje icoon-badge met witte sleepwagen, blauwe merknaam.',
    component: LogoA,
    bg: '#ffffff',
    bgDark: '#f8fafc',
  },
  {
    id: 'B',
    label: 'Variant B — Blauw cirkel-embleem',
    desc: 'Autoriteit en vertrouwen. Donkerblauw ronde badge-stijl, klassiek en professioneel.',
    component: LogoB,
    bg: '#ffffff',
    bgDark: '#f8fafc',
  },
  {
    id: 'C',
    label: 'Variant C — Gradient ruit + gestapelde tekst',
    desc: 'Dynamisch en modern. Gradient ruit met oranje kraan-accent en SLEEP/DIENST-stack.',
    component: LogoC,
    bg: '#ffffff',
    bgDark: '#f8fafc',
  },
  {
    id: 'D',
    label: 'Variant D — Puur typografisch woordmerk',
    desc: 'Minimalistische 2026-stijl. Geen icoon, puur typografie. Sterk en modern.',
    component: LogoD,
    bg: '#ffffff',
    bgDark: '#f8fafc',
  },
  {
    id: 'E',
    label: 'Variant E — Zwarte cirkel + oranje accent',
    desc: 'Premium en strak. Zwarte cirkel met oranje cab, frisse pill-badge "24/7".',
    component: LogoE,
    bg: '#ffffff',
    bgDark: '#f8fafc',
  },
]

export default function LogosPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f1f5f9', padding: '48px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-block', fontSize: '.78rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#2563eb', background: '#eff6ff', border: '1px solid #bfdbfe', padding: '4px 16px', borderRadius: 20, marginBottom: 14 }}>
            Logo keuze
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a', margin: '0 0 10px' }}>5 Logo Varianten</h1>
          <p style={{ color: '#64748b', fontSize: '1rem' }}>Bekijk alle opties en geef aan welke je wil gebruiken.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {logos.map(({ id, label, desc, component: Logo }) => (
            <div key={id} style={{ background: 'white', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,.07)', border: '1px solid #e2e8f0' }}>

              {/* Label */}
              <div style={{ padding: '16px 28px 12px', borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ fontWeight: 800, fontSize: '.95rem', color: '#0f172a' }}>{label}</div>
                <div style={{ fontSize: '.85rem', color: '#64748b', marginTop: 3 }}>{desc}</div>
              </div>

              {/* Preview op wit */}
              <div style={{ padding: '36px 40px', display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '.72rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 12 }}>Normaal</div>
                  <Logo size="md" />
                </div>
                <div>
                  <div style={{ fontSize: '.72rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 12 }}>Groot</div>
                  <Logo size="lg" />
                </div>
                <div>
                  <div style={{ fontSize: '.72rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 12 }}>Klein</div>
                  <Logo size="sm" />
                </div>
              </div>

              {/* Preview op donkere achtergrond */}
              <div style={{ background: '#0f172a', padding: '28px 40px', display: 'flex', alignItems: 'center', gap: 40 }}>
                <div style={{ fontSize: '.72rem', fontWeight: 700, color: '#475569', letterSpacing: '.08em', textTransform: 'uppercase', marginRight: 20 }}>Op donker</div>
                <Logo size="md" />
              </div>

            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48, padding: '28px', background: 'white', borderRadius: 16, border: '1px solid #e2e8f0' }}>
          <p style={{ color: '#64748b', fontSize: '.95rem' }}>
            Geef aan welke variant (A t/m E) je wil gebruiken — of welke elementen je wil combineren.
            <br />Daarna pas ik de header, footer en favicon aan.
          </p>
        </div>

      </div>
    </div>
  )
}
