import Link from 'next/link'
import PhoneIcon from '../../components/PhoneIcon'
import TowTruckIcon from '../../components/TowTruckIcon'

export const metadata = {
  title: 'Diensten – Sleepdienst24/7 | Alles bij pech onderweg',
  description: 'Sleepdienst24/7 biedt sleepdienst, auto berging, autotransport, pechhulp, bandenservice, accu service en slotservice — heel Nederland, 24/7.',
}

const diensten = [
  {
    slug: 'sleepdienst',
    title: 'Sleepdienst',
    desc: 'Auto staat langs de weg? Wij slepen uw voertuig veilig naar uw gewenste bestemming.',
    icon: <TowTruckIcon size={28} />,
  },
  {
    slug: 'auto-berging',
    title: 'Auto Berging',
    desc: 'Na een ongeluk of ernstige pech zorgen wij voor professionele berging van uw voertuig.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    slug: 'autotransport',
    title: 'Autotransport',
    desc: 'Veilig autotransport door heel Nederland — voor aankopen op afstand, oldtimers en meer.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="5 17 3 17 3 7 13 7 13 17 10 17"/>
        <path d="M13 9h4l4 4v4h-2"/>
        <circle cx="7.5" cy="17.5" r="1.5"/><circle cx="17.5" cy="17.5" r="1.5"/>
      </svg>
    ),
  },
  {
    slug: 'pechhulp',
    title: 'Pechhulp ter plaatse',
    desc: 'Kleine problemen lossen wij direct op locatie op met diagnostische apparatuur.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    slug: 'bandenservice',
    title: 'Bandenservice',
    desc: 'Lekke band onderweg? Wij verwisselen uw band ter plaatse of zoeken een passende oplossing.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    slug: 'accu-service',
    title: 'Accu Service',
    desc: 'Lege accu? Wij geven starthulp of vervangen uw accu ter plaatse, snel en vakkundig.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="7" width="18" height="10" rx="2"/>
        <path d="M22 11v2" strokeWidth="2.5"/>
        <path d="M11 10l-3 2h4l-3 4"/>
      </svg>
    ),
  },
  {
    slug: 'slotservice',
    title: 'Slotservice',
    desc: 'Sleutels in de auto? Wij openen uw voertuig schadevrij, snel en professioneel.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
]

export default function DienstenPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> › Diensten</div>
          <h1>Onze Diensten</h1>
          <p>Van sleepdienst tot slotservice — wij bieden alles wat u nodig heeft bij pech of transport van uw voertuig.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="diensten-grid">
            {diensten.map((d) => (
              <div key={d.slug} className="dienst-card">
                <div className="dienst-card-icon">{d.icon}</div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
                <Link href={`/diensten/${d.slug}`} className="link">Meer informatie</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Direct hulp nodig?</h2>
          <p>Bel ons direct of vraag een offerte aan. Wij zijn er altijd voor u.</p>
          <div className="cta-btns">
            <a href="tel:+31855055202" className="btn btn-primary"><PhoneIcon size={15} /> 085-5055202</a>
            <Link href="/contact" className="btn btn-outline-white">Offerte aanvragen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
