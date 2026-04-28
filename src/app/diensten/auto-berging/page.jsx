import Link from 'next/link'
import PhoneIcon from '../../../components/PhoneIcon'
import FaqList from '../../../components/FaqList'

export const metadata = {
  title: 'Auto Berging – Sleepdienst24/7 | Professionele berging in heel Nederland',
  description: 'Auto na ongeluk of pech? Sleepdienst24/7 verzorgt professionele auto berging in heel Nederland. 24/7 beschikbaar, snel ter plaatse. Bel 085-5055202.',
}

const faqItems = [
  {
    question: 'Wat is het verschil tussen sleepdienst en berging?',
    answer: 'Een sleepdienst transporteert een rijklare of niet-rijklare auto naar een bestemming. Berging is specialistischer: het gaat om het veilig verwijderen van een voertuig na een ongeluk, uit een sloot, van een ontoegankelijke plek of in gevaarlijke situaties.',
  },
  {
    question: 'Werken jullie samen met verzekeraars?',
    answer: 'Wij kunnen direct schade- en pechmeldingen aan u of uw verzekeraar doorgeven. Wij werken samen met diverse verzekeraars. Informeer bij uw verzekeraar of onze dienst gedekt wordt.',
  },
  {
    question: 'Hoe snel zijn jullie na een ongeluk ter plaatse?',
    answer: 'Wij streven ernaar binnen 30 minuten bij u te zijn. Bij ernstige ongelukken waarbij ook hulpdiensten aanwezig zijn, stemmen wij onze aankomst af om de hulpverlening niet te hinderen.',
  },
  {
    question: 'Waar wordt mijn auto opgeslagen na berging?',
    answer: 'Wij brengen uw auto naar een garage naar keuze, uw eigen adres of een erkend bergingsdepot. U bepaalt de bestemming.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function AutoBergingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> › <Link href="/diensten">Diensten</Link> › Auto Berging</div>
          <h1>Auto Berging</h1>
          <p>Na een ongeluk of ernstige pech zorgen wij voor de veilige en professionele berging van uw voertuig. Dag en nacht beschikbaar in heel Nederland.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div>
              <h2>Professionele autoberging na pech of ongeluk</h2>
              <p>Na een aanrijding, uitwijkmanoeuvre of technisch defect kan uw voertuig in een moeilijk bereikbare of gevaarlijke positie terechtkomen. In dat geval is gespecialiseerde berging nodig — meer dan alleen een sleepwagen.</p>
              <p>Onze bergingsmonteurs hebben de juiste apparatuur en ervaring om voertuigen veilig te bergen in lastige situaties: van greppels en bermen tot krappe stadsstraten en snelwegbergingen.</p>

              <h3>Wanneer is berging nodig?</h3>
              <ul className="checklist">
                <li>Auto na een aanrijding niet meer rijvaardig</li>
                <li>Voertuig in een sloot, greppel of van een talud gereden</li>
                <li>Auto op een ontoegankelijke of gevaarlijke plek</li>
                <li>Voertuig staat het verkeer of nooddiensten in de weg</li>
                <li>Technisch defect waarbij slepen niet volstaat</li>
              </ul>

              <h3>Wat is inbegrepen bij berging?</h3>
              <ul className="checklist">
                <li>Beoordeling ter plaatse van de situatie</li>
                <li>Inzet van de juiste berging- en kraanmaterialen</li>
                <li>Veilige verwijdering van uw voertuig</li>
                <li>Transport naar garage, depot of bestemming naar keuze</li>
                <li>Coördinatie met politie of andere hulpdiensten indien nodig</li>
              </ul>

              <h3>Veelgestelde vragen</h3>
              <FaqList items={faqItems} />
            </div>

            <div>
              <div className="sticky-card">
                <div className="sticky-card-header">
                  <h3>Berging nodig?</h3>
                  <p>Direct geholpen — 24/7 beschikbaar</p>
                </div>
                <div className="sticky-card-body">
                  <a href="tel:+31855055202" className="btn btn-primary"><PhoneIcon size={15} /> 085-5055202</a>
                  <Link href="/contact" className="btn btn-ghost" style={{ marginBottom: '20px' }}>Offerte aanvragen</Link>
                  <div className="sticky-card-info">
                    <p>✓ Binnen 30 minuten ter plaatse</p>
                    <p>✓ Prijs vooraf duidelijk</p>
                    <p>✓ Betalen achteraf</p>
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
          <h2>Berging nodig?</h2>
          <p>Bel ons direct voor snelle hulp, dag en nacht.</p>
          <div className="cta-btns">
            <a href="tel:+31855055202" className="btn btn-primary"><PhoneIcon size={15} /> 085-5055202</a>
            <Link href="/contact" className="btn btn-outline-white">Offerte aanvragen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
