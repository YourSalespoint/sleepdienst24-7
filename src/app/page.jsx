import Link from 'next/link'
import PhoneIcon from '../components/PhoneIcon'
import FaqList from '../components/FaqList'
import TowTruckIcon from '../components/TowTruckIcon'

const faqItems = [
  {
    question: 'Wat kost een sleepdienst?',
    answer: 'De kosten van een sleepdienst hangen af van de afstand, uw locatie en het tijdstip. U ontvangt altijd vooraf een transparante prijsopgave, zonder verrassingen achteraf. Betalen doet u pas nadat wij u geholpen hebben, per pin, iDEAL of contant.',
  },
  {
    question: 'Hoe snel is de sleepwagen bij mij?',
    answer: 'Wij streven ernaar binnen 30 minuten bij u ter plaatse te zijn. Na uw melding rijdt onze dichtstbijzijnde monteur direct naar u toe, ook midden in de nacht en op feestdagen.',
  },
  {
    question: 'Rijden jullie ook \'s nachts, in het weekend en op feestdagen?',
    answer: 'Ja, Sleepdienst24/7 is 24 uur per dag, 7 dagen per week bereikbaar, ook op zondag, zaterdagavond en tijdens feestdagen. Pech houdt geen rekening met kantoortijden, en wij ook niet.',
  },
  {
    question: 'Heb ik een ANWB-lidmaatschap of wegenwacht-abonnement nodig?',
    answer: 'Nee. U betaalt alleen wanneer u daadwerkelijk hulp nodig heeft. Geen maandelijkse kosten, geen abonnement, geen verplichtingen. Bel ons gewoon als u pech heeft.',
  },
  {
    question: 'Naar welke bestemming kunnen jullie mijn auto slepen?',
    answer: 'U bepaalt de bestemming. Wij brengen uw auto naar een garage naar keuze, uw eigen adres, een dealer of een ander gewenst adres in Nederland. Wij rijden door heel Nederland.',
  },
  {
    question: 'Wat moet ik doen als mijn auto pech heeft op de snelweg?',
    answer: 'Rijd zo snel mogelijk naar de vluchtstrook. Zet uw alarmlichten aan, trek een veiligheidshesje aan en plaats een gevarendriehoek op minimaal 30 meter afstand. Wacht achter de vangrail — niet naast de auto. Bel ons daarna direct op 085 060 7279.',
  },
  {
    question: 'Mijn auto is total loss na een ongeluk. Kunnen jullie helpen?',
    answer: 'Ja, wij verzorgen ook berging na ongelukken. Wij coördineren indien nodig met de politie of andere hulpdiensten en brengen uw voertuig veilig naar een bergingsdepot of garage naar keuze.',
  },
  {
    question: 'Werken jullie ook voor bedrijven en leasemaatschappijen?',
    answer: 'Ja, wij helpen ook zakelijke klanten: transportbedrijven, leasemaatschappijen, garages en particuliere verhuurders. Neem contact op voor zakelijke afspraken en tarieven.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export const metadata = {
  title: 'Sleepdienst24/7 – Pech onderweg? Wij slepen u eruit',
  description: 'Auto pech onderweg? Sleepdienst24/7 staat dag en nacht voor u klaar. Sleepdienst, auto berging, autotransport en meer in heel Nederland. Bel direct: 085 060 7279.',
}

function TruckIllustration() {
  return (
    <svg width="100%" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Ground shadow */}
      <ellipse cx="250" cy="272" rx="210" ry="12" fill="#e2e8f0" fillOpacity="0.7"/>

      {/* === Car being towed (left) === */}
      <rect x="28" y="162" width="162" height="48" rx="12" fill="#dbeafe"/>
      <rect x="52" y="130" width="112" height="40" rx="10" fill="#93c5fd" fillOpacity="0.85"/>
      <rect x="58" y="135" width="44" height="27" rx="5" fill="#eff6ff" fillOpacity="0.9"/>
      <rect x="108" y="135" width="44" height="27" rx="5" fill="#eff6ff" fillOpacity="0.9"/>
      <rect x="28" y="174" width="12" height="18" rx="3" fill="#fbbf24"/>
      <rect x="178" y="174" width="12" height="18" rx="3" fill="#f97316" fillOpacity="0.9"/>
      <circle cx="72" cy="214" r="22" fill="#1e293b"/>
      <circle cx="72" cy="214" r="12" fill="#334155"/>
      <circle cx="72" cy="214" r="4" fill="#475569"/>
      <circle cx="162" cy="214" r="22" fill="#1e293b"/>
      <circle cx="162" cy="214" r="12" fill="#334155"/>
      <circle cx="162" cy="214" r="4" fill="#475569"/>

      {/* === Flatbed platform === */}
      <rect x="22" y="192" width="228" height="10" rx="3" fill="#cbd5e1"/>
      <rect x="18" y="200" width="236" height="7" rx="2" fill="#94a3b8"/>

      {/* === Crane arm === */}
      <rect x="232" y="88" width="13" height="118" rx="4" fill="#f97316"/>
      <rect x="200" y="76" width="60" height="11" rx="4" fill="#f97316" transform="rotate(-25 230 95)"/>
      <circle cx="228" cy="92" r="7" fill="#ea580c"/>
      <line x1="214" y1="98" x2="116" y2="162" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 4"/>
      <circle cx="116" cy="163" r="5" fill="#64748b"/>
      <path d="M116 168 Q116 178 126 178 Q136 178 136 168" stroke="#64748b" strokeWidth="3" fill="none" strokeLinecap="round"/>

      {/* === Tow truck cab === */}
      <rect x="252" y="124" width="200" height="80" rx="12" fill="#2563eb"/>
      <rect x="262" y="132" width="122" height="54" rx="8" fill="#93c5fd" fillOpacity="0.72"/>
      <rect x="405" y="130" width="47" height="74" rx="8" fill="#1d4ed8"/>
      <rect x="252" y="164" width="153" height="5" rx="2" fill="white" fillOpacity="0.18"/>
      {/* Door stripe */}
      <rect x="278" y="148" width="88" height="26" rx="5" fill="white" fillOpacity="0.12"/>
      {/* Exhaust */}
      <rect x="434" y="96" width="10" height="32" rx="3" fill="#475569"/>
      <circle cx="439" cy="89" r="6" fill="#cbd5e1" fillOpacity="0.5"/>
      <circle cx="442" cy="81" r="4" fill="#cbd5e1" fillOpacity="0.3"/>
      {/* Headlight */}
      <rect x="443" y="142" width="14" height="20" rx="4" fill="#fbbf24" fillOpacity="0.9"/>
      <rect x="443" y="166" width="14" height="9" rx="3" fill="#f97316"/>
      {/* Wheels */}
      <circle cx="300" cy="218" r="24" fill="#1e293b"/>
      <circle cx="300" cy="218" r="13" fill="#334155"/>
      <circle cx="300" cy="218" r="4.5" fill="#475569"/>
      <circle cx="378" cy="218" r="24" fill="#1e293b"/>
      <circle cx="378" cy="218" r="13" fill="#334155"/>
      <circle cx="378" cy="218" r="4.5" fill="#475569"/>
      <circle cx="430" cy="218" r="22" fill="#1e293b"/>
      <circle cx="430" cy="218" r="12" fill="#334155"/>
      <circle cx="430" cy="218" r="4" fill="#475569"/>

      {/* Speed lines */}
      <line x1="2" y1="202" x2="24" y2="202" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round"/>
      <line x1="0" y1="216" x2="18" y2="216" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round"/>
      <line x1="5" y1="230" x2="22" y2="230" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round"/>

      {/* Decorative dots */}
      <circle cx="468" cy="58" r="5" fill="#dbeafe"/>
      <circle cx="484" cy="78" r="3.5" fill="#bfdbfe"/>
      <circle cx="455" cy="88" r="4" fill="#eff6ff"/>
      <circle cx="476" cy="42" r="2.5" fill="#93c5fd" fillOpacity="0.6"/>
    </svg>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              24/7 beschikbaar in heel Nederland
            </div>
            <h1>Pech onderweg?<br /><em>Wij slepen u eruit</em></h1>
            <p className="hero-desc">Onze gecertificeerde monteurs rijden dag en nacht uit, van Amsterdam tot Maastricht. Sleepdienst, berging, autotransport en meer. Transparante prijs, snel ter plaatse.</p>
            <div className="hero-btns">
              <a href="tel:+31850607279" className="btn btn-primary">
                <PhoneIcon size={15} /> Bel direct: 085 060 7279
              </a>
              <Link href="/contact" className="btn btn-outline-white">Offerte aanvragen</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><strong>30 min</strong><span>Responstijd</span></div>
              <div className="hero-stat"><strong>24/7</strong><span>Bereikbaar</span></div>
              <div className="hero-stat"><strong>NL</strong><span>Heel Nederland</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== USP BAR ===== */}
      <div className="usp-bar">
        <div className="container">
          <div className="usp-bar-inner">
            <div className="usp-bar-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              24/7 bereikbaar
            </div>
            <div className="dot"></div>
            <div className="usp-bar-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Prijs vooraf duidelijk
            </div>
            <div className="dot"></div>
            <div className="usp-bar-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Geen abonnement nodig
            </div>
            <div className="dot"></div>
            <div className="usp-bar-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              SMCF gecertificeerd
            </div>
            <div className="dot"></div>
            <div className="usp-bar-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Betalen achteraf
            </div>
          </div>
        </div>
      </div>

      {/* ===== DIENSTEN ===== */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header">
            <span className="label">Onze diensten</span>
            <h2>Alles onder één dak — dag en nacht</h2>
            <p>Of u nu langs de snelweg staat, op een parkeerterrein of thuis in de straat: wij komen naar u toe met de juiste middelen.</p>
          </div>
          <div className="diensten-grid">

            <div className="dienst-card">
              <div className="dienst-card-icon">
                <TowTruckIcon size={24} />
              </div>
              <h3>Sleepdienst</h3>
              <p>Auto staat langs de weg en rijdt niet meer? Wij slepen uw voertuig veilig naar uw gewenste bestemming: garage, thuis of dealer.</p>
              <Link href="/diensten/sleepdienst" className="link">Meer informatie</Link>
            </div>

            <div className="dienst-card">
              <div className="dienst-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3>Auto Berging</h3>
              <p>Na een ongeluk of ernstige pech zorgen wij voor de veilige berging van uw voertuig. Snel, professioneel en met alle benodigde apparatuur.</p>
              <Link href="/diensten/auto-berging" className="link">Meer informatie</Link>
            </div>

            <div className="dienst-card">
              <div className="dienst-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="5 17 3 17 3 7 13 7 13 17 10 17"/>
                  <path d="M13 9h4l4 4v4h-2"/>
                  <circle cx="7.5" cy="17.5" r="1.5"/><circle cx="17.5" cy="17.5" r="1.5"/>
                </svg>
              </div>
              <h3>Autotransport</h3>
              <p>Auto gekocht op afstand of moet uw voertuig elders naartoe? Wij verzorgen veilig autotransport door heel Nederland, ook voor oldtimers.</p>
              <Link href="/diensten/autotransport" className="link">Meer informatie</Link>
            </div>

            <div className="dienst-card">
              <div className="dienst-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3>Pechhulp ter plaatse</h3>
              <p>Kleine problemen lossen wij direct op locatie op. Motor start niet, elektrisch probleem of iets anders? Onze monteur kijkt het ter plaatse na.</p>
              <Link href="/diensten/pechhulp" className="link">Meer informatie</Link>
            </div>

            <div className="dienst-card">
              <div className="dienst-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3>Bandenservice</h3>
              <p>Lekke band onderweg? Wij verwisselen uw band ter plaatse. Heeft u geen reserveband? We zorgen voor een oplossing zodat u veilig verder kunt.</p>
              <Link href="/diensten/bandenservice" className="link">Meer informatie</Link>
            </div>

            <div className="dienst-card">
              <div className="dienst-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  {/* Accu body */}
                  <rect x="1" y="7" width="18" height="10" rx="2"/>
                  {/* Positieve pool (rechtsboven) */}
                  <path d="M22 11v2" strokeWidth="2.5"/>
                  {/* Bliksemschicht (lading) */}
                  <path d="M11 10l-3 2h4l-3 4"/>
                </svg>
              </div>
              <h3>Accu Service</h3>
              <p>Lege accu en auto start niet? Wij geven starthulp of vervangen uw accu ter plaatse. Snel geholpen met de juiste apparatuur.</p>
              <Link href="/diensten/accu-service" className="link">Meer informatie</Link>
            </div>

            <div className="dienst-card" style={{ gridColumn: 'span 1' }}>
              <div className="dienst-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3>Slotservice</h3>
              <p>Sleutels in de auto achtergelaten of verloren? Onze slotservice opent uw voertuig snel en schadevrij, zonder dat de auto beschadigt.</p>
              <Link href="/diensten/slotservice" className="link">Meer informatie</Link>
            </div>

          </div>
        </div>
      </section>

      {/* ===== WAAROM WIJ ===== */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            <div>
              <span className="label" style={{ display: 'inline-block', fontSize: '.78rem', fontWeight: '700', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--primary)', background: 'var(--light)', border: '1px solid #bfdbfe', padding: '4px 14px', borderRadius: '20px', marginBottom: '16px' }}>Waarom Sleepdienst24/7?</span>
              <h2 style={{ fontSize: 'clamp(1.7rem,3vw,2.3rem)', fontWeight: '800', color: 'var(--dark)', margin: '0 0 18px', lineHeight: '1.2' }}>De hulp die u verdient, precies wanneer u het nodig heeft</h2>
              <p style={{ color: 'var(--gray)', marginBottom: '32px', fontSize: '1rem' }}>Wij begrijpen hoe stressvol pech onderweg is. Daarom doen wij er alles aan om u zo snel mogelijk te helpen. Eerlijk, transparant en professioneel.</p>
              <Link href="/over-ons" className="btn btn-blue">Meer over ons</Link>
            </div>
            <div className="why-grid">
              <div className="why-item">
                <div>
                  <h4>Binnen 30 minuten ter plaatse</h4>
                  <p>Wij streven ernaar om u binnen 30 minuten te bereiken, op elk tijdstip van de dag of nacht.</p>
                </div>
              </div>
              <div className="why-item">
                <div>
                  <h4>SMCF gecertificeerd</h4>
                  <p>Al onze monteurs zijn gecertificeerd en zorgvuldig gescreend voor de hoogste kwaliteit.</p>
                </div>
              </div>
              <div className="why-item">
                <div>
                  <h4>Geen verborgen kosten</h4>
                  <p>U ontvangt altijd een duidelijke prijsopgave vooraf. Betalen doet u pas nadat wij u geholpen hebben.</p>
                </div>
              </div>
              <div className="why-item">
                <div>
                  <h4>Geen abonnement</h4>
                  <p>U betaalt alleen wanneer u daadwerkelijk hulp nodig heeft. Geen verplichtingen, geen maandelijkse kosten.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header">
            <span className="label">Onze cijfers</span>
            <h2>Vertrouwd door automobilisten door heel Nederland</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-card"><strong>30 min</strong><span>Gemiddelde responstijd</span></div>
            <div className="stat-card"><strong>24/7</strong><span>Beschikbaar, ook feestdagen</span></div>
            <div className="stat-card"><strong>4.8★</strong><span>Gemiddelde beoordeling</span></div>
            <div className="stat-card"><strong>100%</strong><span>Geen verborgen kosten</span></div>
          </div>
        </div>
      </section>

      {/* ===== HOE WERKT HET ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="label">Hoe werkt het?</span>
            <h2>In drie stappen geholpen</h2>
            <p>Wij maken het zo makkelijk mogelijk. Bel ons, wij komen naar u toe en u betaalt pas achteraf.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              {
                nr: '1',
                title: 'Bel of app ons',
                desc: 'Bel 085 060 7279 of stuur een WhatsApp. Wij nemen direct op en vragen naar uw locatie en probleem.',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.17h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.09 6.09l1.71-1.71a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z"/>
                  </svg>
                ),
              },
              {
                nr: '2',
                title: 'Wij rijden uit',
                desc: 'Onze dichtstbijzijnde monteur rijdt direct naar u toe. Gemiddeld zijn wij binnen 30 minuten bij u.',
                icon: <TowTruckIcon size={28} />,
              },
              {
                nr: '3',
                title: 'Probleem opgelost, betalen achteraf',
                desc: 'Wij lossen uw probleem op. U betaalt pas nadat u geholpen bent, per pin, iDEAL of contant.',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ),
              },
            ].map((stap) => (
              <div key={stap.nr} style={{
                background: 'var(--white)',
                border: '1px solid var(--gray-lt)',
                borderRadius: '16px',
                padding: '36px 28px',
                textAlign: 'center',
                position: 'relative',
              }}>
                <div style={{
                  width: 56,
                  height: 56,
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-lt))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: 'white',
                }}>
                  {stap.icon}
                </div>
                <div style={{
                  position: 'absolute',
                  top: 18,
                  right: 22,
                  fontSize: '.72rem',
                  fontWeight: 900,
                  color: 'var(--primary)',
                  background: 'var(--light)',
                  border: '1px solid #bfdbfe',
                  borderRadius: '20px',
                  padding: '2px 10px',
                }}>Stap {stap.nr}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '10px' }}>{stap.title}</h3>
                <p style={{ color: 'var(--gray)', fontSize: '.9rem', lineHeight: 1.65 }}>{stap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="label">Veelgestelde vragen</span>
            <h2>Alles wat u wil weten over onze sleepdienst</h2>
            <p>Heeft u een andere vraag? Bel ons direct op <a href="tel:+31850607279" style={{ color: 'var(--primary)', fontWeight: 700 }}>085 060 7279</a>. Wij zijn er altijd.</p>
          </div>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <FaqList items={faqItems} />
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <div className="container">
          <h2>Pech onderweg? Bel ons direct</h2>
          <p>Onze specialisten staan 24 uur per dag, 7 dagen per week voor u klaar, ook op feestdagen en in het weekend.</p>
          <div className="cta-btns">
            <a href="tel:+31850607279" className="btn btn-primary">
              <PhoneIcon size={15} /> 085 060 7279
            </a>
            <Link href="/contact" className="btn btn-outline-white">Offerte aanvragen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
