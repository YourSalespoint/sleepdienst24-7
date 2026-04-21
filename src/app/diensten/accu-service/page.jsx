import Link from 'next/link'
import PhoneIcon from '../../../components/PhoneIcon'
import FaqList from '../../../components/FaqList'

export const metadata = {
  title: 'Accu Service – Sleepdienst24/7 | Starthulp & accuvervanging ter plaatse',
  description: 'Lege accu en auto start niet? Sleepdienst24/7 geeft starthulp of vervangt uw accu ter plaatse. 24/7 bereikbaar in heel Nederland. Bel 085 060 7279.',
}

const faqItems = [
  {
    question: 'Kunnen jullie mijn accu ter plaatse vervangen?',
    answer: 'Ja, indien uw accu defect is en vervangen moet worden, doen wij dit ter plaatse. Wij hebben gangbare accutypes bij ons of regelen een passende accu snel.',
  },
  {
    question: 'Mijn auto start niet — is het altijd de accu?',
    answer: 'Niet altijd. Startproblemen kunnen ook komen door een defecte startmotor, brandstofprobleem of elektrisch defect. Onze monteur beoordeelt ter plaatse wat het probleem is.',
  },
  {
    question: 'Hoe snel zijn jullie?',
    answer: 'Wij streven ernaar binnen 30 minuten bij u te zijn, dag en nacht.',
  },
  {
    question: 'Rijden jullie ook als mijn accu thuis leeg is?',
    answer: 'Ja, wij komen ook thuis bij u langs. Of u nu in de garage staat, in een parkeergarage of langs de kant van de weg — wij rijden altijd uit.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
}

export default function AccuServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> › <Link href="/diensten">Diensten</Link> › Accu Service</div>
          <h1>Accu Service</h1>
          <p>Lege accu en uw auto start niet? Wij geven starthulp of vervangen uw accu ter plaatse, dag en nacht, door heel Nederland.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div>
              <h2>Snel geholpen bij accu pech</h2>
              <p>Een lege accu is één van de meest voorkomende oorzaken van autopech. Of uw auto ergens onderweg staat of thuis niet meer wil starten: onze monteur komt naar u toe met de juiste apparatuur.</p>
              <p>Wij geven starthulp met professionele jumpstarters of vervangen uw accu ter plaatse indien nodig. Geen gedoe, direct geholpen.</p>

              <h3>Wat doen wij bij accu pech?</h3>
              <ul className="checklist">
                <li>Test van de accu met professionele meetapparatuur</li>
                <li>Starthulp met jumpstarter of startkabels</li>
                <li>Accuvervanging ter plaatse indien nodig</li>
                <li>Controle van het laadsysteem (dynamo)</li>
                <li>Advies over de conditie van uw accu</li>
              </ul>

              <h3>Signalen dat uw accu problemen heeft</h3>
              <ul className="checklist">
                <li>Auto start traag of helemaal niet</li>
                <li>Accu is ouder dan 4 jaar</li>
                <li>Elektronica (ramen, verlichting) reageert traag</li>
                <li>Accu moet regelmatig worden bijgestart</li>
                <li>Waarschuwingslampje accu op dashboard</li>
              </ul>

              <h3>Veelgestelde vragen</h3>
              <FaqList items={faqItems} />
            </div>
            <div>
              <div className="sticky-card">
                <div className="sticky-card-header"><h3>Accu pech?</h3><p>Direct geholpen — 24/7 beschikbaar</p></div>
                <div className="sticky-card-body">
                  <a href="tel:+31850607279" className="btn btn-primary"><PhoneIcon size={15} /> 085 060 7279</a>
                  <Link href="/contact" className="btn btn-ghost" style={{ marginBottom: '20px' }}>Offerte aanvragen</Link>
                  <div className="sticky-card-info">
                    <p>✓ Binnen 30 minuten ter plaatse</p>
                    <p>✓ Professionele accutest</p>
                    <p>✓ Prijs vooraf duidelijk</p>
                    <p style={{ marginBottom: '20px' }}>✓ Heel Nederland</p>
                    <hr style={{ border: 'none', borderTop: '1px solid var(--gray-lt)', marginBottom: '16px' }} />
                    <p>Vragen? Mail <a href="mailto:info@sleepdienst24-7.nl">info@sleepdienst24-7.nl</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Accu pech?</h2>
          <p>Bel ons direct voor snelle hulp, dag en nacht.</p>
          <div className="cta-btns">
            <a href="tel:+31850607279" className="btn btn-primary"><PhoneIcon size={15} /> 085 060 7279</a>
            <Link href="/contact" className="btn btn-outline-white">Offerte aanvragen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
