import Link from 'next/link'
import PhoneIcon from '../../../components/PhoneIcon'
import FaqList from '../../../components/FaqList'
import TowTruckIcon from '../../../components/TowTruckIcon'

export const metadata = {
  title: 'Sleepdienst – Sleepdienst24/7 | Veilig weggesleept in heel Nederland',
  description: 'Auto rijdt niet meer? Sleepdienst24/7 sleept uw voertuig veilig naar uw bestemming. 24/7 beschikbaar, transparante prijs, snel ter plaatse. Bel 085-5055202.',
}

const faqItems = [
  {
    question: 'Hoe snel bent u bij mij ter plaatse?',
    answer: 'Wij streven ernaar binnen 30 minuten bij u te zijn. De exacte tijd hangt af van uw locatie en de drukte op dat moment.',
  },
  {
    question: 'Naar welke bestemming sleept u mijn auto?',
    answer: 'Wij slepen uw auto naar elke gewenste bestemming in Nederland: een garage naar keuze, uw eigen oprit of een dealer. U bepaalt de bestemming.',
  },
  {
    question: 'Wat zijn de kosten van een sleepdienst?',
    answer: 'De kosten zijn afhankelijk van de afstand en uw locatie. U ontvangt altijd vooraf een transparante prijsopgave. U betaalt pas nadat de dienst is uitgevoerd.',
  },
  {
    question: 'Slepen jullie ook grote voertuigen of bestelwagens?',
    answer: 'Ja, wij hebben de apparatuur voor personenauto\'s, bestelwagens en lichte bedrijfsvoertuigen. Neem contact op voor specifieke wensen.',
  },
  {
    question: 'Wat moet ik doen terwijl ik op jullie wacht?',
    answer: 'Zorg voor uw eigen veiligheid: zet uw waarschuwingslichten aan, trek een veiligheidshesje aan en plaats een gevarendriehoek. Wacht op een veilige plek buiten het verkeer.',
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

export default function SleepdienstPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="page-hero">
        <div className="container">
          <div className="page-hero-badge">
            <TowTruckIcon size={12} />
            Heel Nederland, dag &amp; nacht
          </div>
          <div className="breadcrumb"><Link href="/">Home</Link> › <Link href="/diensten">Diensten</Link> › Sleepdienst</div>
          <h1>Sleepdienst</h1>
          <p>Auto staat stil en rijdt niet meer? Wij slepen uw voertuig snel en veilig naar uw gewenste bestemming. 24/7 bereikbaar in heel Nederland.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div>
              <h2>Wat houdt onze sleepdienst in?</h2>
              <p>Wanneer uw auto niet meer rijdt door motorpech, een ongeluk of een technisch defect, komt onze sleepdienst naar u toe. Wij laden uw voertuig veilig op de dieplader en brengen het naar elke bestemming die u wenst.</p>
              <p>Of u nu langs de snelweg staat, op een parkeerterrein of midden in een woonwijk: wij rijden dag en nacht naar u toe. U hoeft niet te wachten tot de volgende ochtend of een dure alarmcentrale te bellen.</p>

              <h3>Wat is inbegrepen?</h3>
              <ul className="checklist">
                <li>Directe uitrijding na uw telefonische melding</li>
                <li>Veilig laden en vastzetten van uw voertuig</li>
                <li>Transport naar uw gewenste bestemming in Nederland</li>
                <li>Begeleiding en communicatie tijdens het hele proces</li>
                <li>Aflevering op locatie naar wens</li>
              </ul>

              <h3>Wanneer heeft u een sleepdienst nodig?</h3>
              <ul className="checklist">
                <li>Motor start niet en het probleem is niet ter plaatse op te lossen</li>
                <li>Auto is betrokken bij een ongeluk en niet meer rijvaardig</li>
                <li>Versnellingsbak, motor of ander technisch defect</li>
                <li>Voertuig staat op de verkeerde plek of moet worden verplaatst</li>
                <li>Auto staat met pech langs de snelweg</li>
              </ul>

              <h3>Werkgebied</h3>
              <p>Wij zijn actief door heel Nederland, van Groningen tot Maastricht en van de Randstad tot Zeeland. Ook op snelwegen, provinciale wegen en in afgelegen gebieden rijden wij uit.</p>

              <h3>Veelgestelde vragen</h3>
              <FaqList items={faqItems} />
            </div>

            <div>
              <div className="sticky-card">
                <div className="sticky-card-header">
                  <h3>Sleepdienst nodig?</h3>
                  <p>Direct geholpen — 24/7 beschikbaar</p>
                </div>
                <div className="sticky-card-body">
                  <a href="tel:+31855055202" className="btn btn-primary">
                    <PhoneIcon size={15} /> 085-5055202
                  </a>
                  <Link href="/contact" className="btn btn-ghost" style={{ marginBottom: '20px' }}>Offerte aanvragen</Link>
                  <div className="sticky-card-info">
                    <p>✓ Binnen 30 minuten ter plaatse</p>
                    <p>✓ Prijs vooraf duidelijk</p>
                    <p>✓ Betalen achteraf</p>
                    <p>✓ Heel Nederland</p>
                    <p style={{ marginBottom: '20px' }}>✓ Geen abonnement nodig</p>
                    <hr style={{ border: 'none', borderTop: '1px solid var(--gray-lt)', marginBottom: '16px' }} />
                    <p>Vragen? Mail naar <a href="mailto:info@sleepdienst24-7.nl">info@sleepdienst24-7.nl</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Sleepdienst nodig?</h2>
          <p>Bel ons direct of vraag een vrijblijvende offerte aan. Wij zijn er altijd voor u.</p>
          <div className="cta-btns">
            <a href="tel:+31855055202" className="btn btn-primary"><PhoneIcon size={15} /> 085-5055202</a>
            <Link href="/contact" className="btn btn-outline-white">Offerte aanvragen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
