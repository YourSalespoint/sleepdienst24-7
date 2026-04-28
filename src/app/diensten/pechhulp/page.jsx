import Link from 'next/link'
import PhoneIcon from '../../../components/PhoneIcon'
import FaqList from '../../../components/FaqList'

export const metadata = {
  title: 'Pechhulp ter plaatse – Sleepdienst24/7 | Direct geholpen onderweg',
  description: 'Pech onderweg? Sleepdienst24/7 komt met diagnostische apparatuur naar u toe. Direct geholpen, transparante prijs, 24/7 bereikbaar. Bel 085-5055202.',
}

const faqItems = [
  {
    question: 'Welke problemen lossen jullie ter plaatse op?',
    answer: 'Wij kunnen veel problemen direct oplossen: startproblemen, lekke banden, lege accu, verkeerd tanken, elektrische problemen en meer. Is het probleem te groot? Dan slepen wij uw auto naar een garage.',
  },
  {
    question: 'Hebben jullie diagnostische apparatuur bij u?',
    answer: 'Ja, onze monteurs rijden uit met professionele diagnosematerialen en gereedschap voor de meeste gangbare problemen.',
  },
  {
    question: 'Wat als het probleem niet ter plaatse opgelost kan worden?',
    answer: 'Als het probleem groter is dan verwacht, schakelen wij naadloos over op onze sleepdienst en brengen wij uw auto naar een garage naar keuze.',
  },
  {
    question: 'Zijn jullie ook bereikbaar op de snelweg?',
    answer: 'Ja, wij rijden ook naar pechmeldingen langs snelwegen. Zet uw wagen op de vluchtstrook, zet uw alarmlichten aan en wacht buiten het voertuig achter de vangrail.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
}

export default function PechhulpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> › <Link href="/diensten">Diensten</Link> › Pechhulp ter plaatse</div>
          <h1>Pechhulp ter plaatse</h1>
          <p>Pech onderweg maar de auto hoeft niet per se gesleept? Onze monteur komt met de juiste apparatuur naar u toe en lost het probleem direct op locatie op.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div>
              <h2>Direct geholpen, zonder sleepkosten</h2>
              <p>Niet elke autopech vereist een sleepdienst. Vaak is het probleem kleiner dan u denkt en kan onze monteur het direct ter plaatse oplossen. Dat scheelt tijd, moeite en kosten.</p>
              <p>Onze monteurs rijden uit met professioneel gereedschap en diagnosemateriaal. Wij beoordelen ter plaatse wat er aan de hand is en lossen het zo snel mogelijk op zodat u uw weg kunt vervolgen.</p>

              <h3>Veelvoorkomende problemen die wij ter plaatse oplossen</h3>
              <ul className="checklist">
                <li>Lege accu: starthulp of accuvervanging</li>
                <li>Lekke band: verwisselen of noodreparatie</li>
                <li>Verkeerd getankt: leegpompen van de tank</li>
                <li>Elektrisch defect: diagnose en eenvoudige reparaties</li>
                <li>Brandstoftekort: wij brengen brandstof mee</li>
                <li>Sleutels in de auto: slotservice</li>
                <li>Overige kleine technische defecten</li>
              </ul>

              <h3>Kan het probleem niet worden opgelost?</h3>
              <p>Mocht het probleem te groot zijn voor een reparatie ter plaatse, dan schakelen wij direct over op onze sleepdienst. U heeft slechts één contactpunt nodig en wij regelen de rest.</p>

              <h3>Veelgestelde vragen</h3>
              <FaqList items={faqItems} />
            </div>
            <div>
              <div className="sticky-card">
                <div className="sticky-card-header"><h3>Pechhulp nodig?</h3><p>Direct geholpen — 24/7 beschikbaar</p></div>
                <div className="sticky-card-body">
                  <a href="tel:+31855055202" className="btn btn-primary"><PhoneIcon size={15} /> 085-5055202</a>
                  <Link href="/contact" className="btn btn-ghost" style={{ marginBottom: '20px' }}>Offerte aanvragen</Link>
                  <div className="sticky-card-info">
                    <p>✓ Binnen 30 minuten ter plaatse</p>
                    <p>✓ Diagnose ter plaatse</p>
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
          <h2>Pech onderweg?</h2>
          <p>Bel ons direct — wij zijn er altijd voor u, dag en nacht.</p>
          <div className="cta-btns">
            <a href="tel:+31855055202" className="btn btn-primary"><PhoneIcon size={15} /> 085-5055202</a>
            <Link href="/contact" className="btn btn-outline-white">Offerte aanvragen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
