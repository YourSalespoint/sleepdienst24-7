import Link from 'next/link'
import PhoneIcon from '../../components/PhoneIcon'
import ContactForm from '../../components/ContactForm'
import FaqList from '../../components/FaqList'

export const metadata = {
  title: 'Contact – Sleepdienst24/7 | 24/7 bereikbaar',
  description: 'Neem contact op met Sleepdienst24/7. Bel 085 060 7279, stuur een WhatsApp of vul het contactformulier in. 24/7 bereikbaar voor sleepdienst en pechhulp in heel Nederland.',
}

const faqItems = [
  {
    question: 'Zijn jullie echt 24/7 bereikbaar?',
    answer: 'Ja, wij zijn 24 uur per dag, 7 dagen per week bereikbaar — ook op feestdagen en in het weekend. Pech houdt geen rekening met kantoortijden, en wij ook niet.',
  },
  {
    question: 'Hoe snel zijn jullie ter plaatse?',
    answer: 'Wij streven ernaar binnen 30 minuten bij u te zijn. De exacte tijd hangt af van uw locatie en de drukte op dat moment.',
  },
  {
    question: 'Wat zijn de kosten?',
    answer: 'De kosten zijn afhankelijk van de benodigde dienst, de afstand en uw locatie. U ontvangt altijd vooraf een transparante prijsopgave. Betalen doet u pas nadat wij u geholpen hebben.',
  },
  {
    question: 'Rijden jullie ook naar de snelweg?',
    answer: 'Ja, wij rijden door heel Nederland — ook langs de snelweg. Zorg voor uw eigen veiligheid door een veiligheidshesje aan te trekken en een gevarendriehoek te plaatsen.',
  },
  {
    question: 'Welke betaalmethoden accepteren jullie?',
    answer: 'Wij accepteren betaling per pin (via mobiele betaalterminal), iDEAL of contant. U betaalt altijd pas nadat de dienst naar tevredenheid is uitgevoerd.',
  },
  {
    question: 'Werken jullie ook voor bedrijven en transporteurs?',
    answer: 'Ja, wij werken ook voor zakelijke klanten, transportbedrijven en leasemaatschappijen. Neem contact op voor zakelijke tariefafspraken.',
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            24/7 bereikbaar
          </div>
          <div className="breadcrumb"><Link href="/">Home</Link> › Contact</div>
          <h1>Contact</h1>
          <p>Heeft u pech, een vraag of wilt u een offerte? Wij zijn dag en nacht bereikbaar via telefoon, WhatsApp of het formulier.</p>
        </div>
      </section>

      {/* Urgentiebalk */}
      <div style={{ background: 'var(--accent)', padding: '14px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <span style={{ color: 'white', fontWeight: '800', fontSize: '1rem' }}>Pech op dit moment?</span>
            <a href="tel:+31850607279" className="btn btn-outline-white" style={{ padding: '9px 22px', fontSize: '.9rem' }}>
              <PhoneIcon size={15} /> Bel direct: 085 060 7279
            </a>
            <a href="https://wa.me/31850607279" className="btn btn-outline-white" style={{ padding: '9px 22px', fontSize: '.9rem' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              WhatsApp ons
            </a>
          </div>
        </div>
      </div>

      {/* Contact grid */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--dark)', marginBottom: '8px' }}>Stuur ons een bericht</h2>
              <p style={{ color: 'var(--gray)', marginBottom: '32px' }}>Vul het formulier in en wij reageren zo snel mogelijk. Bij spoed kunt u beter direct bellen.</p>
              <ContactForm />
            </div>

            <div>
              <div className="contact-info-card">
                <h3>Contactgegevens</h3>
                <div className="contact-info-items">
                  <div className="contact-info-item">
                    <div className="icon"><PhoneIcon size={16} /></div>
                    <div>
                      <strong>Telefoon</strong>
                      <a href="tel:+31850607279">085 060 7279</a>
                      <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.5)', marginTop: '2px' }}>24/7 bereikbaar, ook feestdagen</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    </div>
                    <div>
                      <strong>WhatsApp</strong>
                      <a href="https://wa.me/31850607279">+31 85 060 7279</a>
                      <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.5)', marginTop: '2px' }}>Stuur een bericht, wij reageren snel</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div>
                      <strong>E-mail</strong>
                      <a href="mailto:info@sleepdienst24-7.nl">info@sleepdienst24-7.nl</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                      <strong>Beschikbaarheid</strong>
                      <p>Maandag t/m zondag<br />24 uur per dag</p>
                    </div>
                  </div>
                </div>
                <div className="contact-social">
                  <p>Volg ons op social media</p>
                  <div className="social-links">
                    <a href="#" className="social-link" title="Facebook">f</a>
                    <a href="#" className="social-link" title="Instagram">ig</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header">
            <span className="label">Veelgestelde vragen</span>
            <h2>Antwoorden op uw vragen</h2>
          </div>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <FaqList items={faqItems} />
          </div>
        </div>
      </section>
    </>
  )
}
