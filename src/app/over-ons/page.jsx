import Link from 'next/link'
import PhoneIcon from '../../components/PhoneIcon'

export const metadata = {
  title: 'Over Ons – Sleepdienst24/7 | Uw betrouwbare partner bij pech',
  description: 'Leer meer over Sleepdienst24/7. Gecertificeerde professionals die dag en nacht voor u klaarstaan met sleepdienst, berging en pechhulp in heel Nederland.',
}

export default function OverOnsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            SMCF gecertificeerd
          </div>
          <div className="breadcrumb"><Link href="/">Home</Link> › Over Ons</div>
          <h1>Over Sleepdienst24/7</h1>
          <p>Wij zijn een gepassioneerd team van pechhulp-professionals dat dag en nacht voor u klaarstaat. Eerlijk, snel en betaalbaar.</p>
        </div>
      </section>

      {/* Verhaal */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            <div>
              <span className="label" style={{ display: 'inline-block', fontSize: '.78rem', fontWeight: '700', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--primary)', background: 'var(--light)', border: '1px solid #bfdbfe', padding: '4px 14px', borderRadius: '20px', marginBottom: '16px' }}>Ons verhaal</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: '800', color: 'var(--dark)', margin: '0 0 20px', lineHeight: 1.2 }}>Opgericht uit frustratie met slechte pechhulp</h2>
              <p style={{ color: 'var(--gray)', marginBottom: '16px' }}>Sleepdienst24/7 is ontstaan vanuit een eenvoudige gedachte: automobilisten verdienen betere hulp bij pech. Te vaak hoorden wij verhalen over lange wachttijden, onduidelijke kosten en onprofessioneel optreden.</p>
              <p style={{ color: 'var(--gray)', marginBottom: '16px' }}>Dat moest anders. Wij bieden transparante tarieven, snelle responstijden en gecertificeerde professionals. Geen abonnement, geen verborgen kosten. Gewoon eerlijke hulp wanneer u het nodig heeft.</p>
              <p style={{ color: 'var(--gray)', marginBottom: '32px' }}>Inmiddels helpen wij dagelijks automobilisten door heel Nederland: van grote steden tot kleine dorpen, van snelwegen tot woonstraten.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <span className="badge badge-blue">SMCF gecertificeerd</span>
                <span className="badge">Heel Nederland</span>
                <span className="badge">24/7 bereikbaar</span>
              </div>
            </div>

            <div className="tijdlijn">
              <div className="tijdlijn-item">
                <div className="jaar">Begin</div>
                <h4>Oprichting Sleepdienst24/7</h4>
                <p>Gestart met één wagen en een duidelijke missie: betrouwbare pechhulp zonder gedoe voor automobilisten in Nederland.</p>
              </div>
              <div className="tijdlijn-item">
                <div className="jaar">Groei</div>
                <h4>Uitbreiding vloot en diensten</h4>
                <p>Door groeiende vraag uitgebreid met meerdere voertuigen en aanvullende diensten: autotransport, bandenservice en slotservice.</p>
              </div>
              <div className="tijdlijn-item">
                <div className="jaar">Certificering</div>
                <h4>SMCF certificering behaald</h4>
                <p>Al onze monteurs zijn SMCF gecertificeerd, de branchestandaard voor kwaliteit en vakmanschap in de pechhulp.</p>
              </div>
              <div className="tijdlijn-item">
                <div className="jaar">Nu</div>
                <h4>Heel Nederland gedekt</h4>
                <p>Wij rijden door het gehele land, 24 uur per dag, 7 dagen per week, 365 dagen per jaar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarden */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header">
            <span className="label">Onze waarden</span>
            <h2>Waar wij voor staan</h2>
            <p>Drie kernwaarden sturen alles wat wij doen, van het eerste telefoontje tot het moment dat u weer veilig op weg bent.</p>
          </div>
          <div className="waarden-grid">
            <div className="waarde-card">
              <div className="waarde-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h4>Snelheid</h4>
              <p>Elke minuut wachten langs de weg is er één te veel. Wij rijden direct uit en streven altijd naar de kortst mogelijke wachttijd.</p>
            </div>
            <div className="waarde-card">
              <div className="waarde-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h4>Eerlijkheid</h4>
              <p>U weet vooraf wat het kost. Geen verrassingen achteraf, geen verborgen toeslagen. Eerlijke prijzen, eerlijke service.</p>
            </div>
            <div className="waarde-card">
              <div className="waarde-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>Kwaliteit</h4>
              <p>Gecertificeerde professionals met de juiste apparatuur. Wij doen het goed, of wij doen het niet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card"><strong>30 min</strong><span>Gemiddelde responstijd</span></div>
            <div className="stat-card"><strong>24/7</strong><span>Bereikbaar, 365 dagen per jaar</span></div>
            <div className="stat-card"><strong>4.8★</strong><span>Gemiddelde klantbeoordeling</span></div>
            <div className="stat-card"><strong>NL</strong><span>Heel Nederland gedekt</span></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Klaar om u te helpen</h2>
          <p>Pech of een vraag? Ons team staat dag en nacht voor u klaar. Bel direct of vraag een offerte aan.</p>
          <div className="cta-btns">
            <a href="tel:+31850607279" className="btn btn-primary"><PhoneIcon size={15} /> 085 060 7279</a>
            <Link href="/contact" className="btn btn-outline-white">Offerte aanvragen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
