import Link from 'next/link'
import PhoneIcon from '../../../components/PhoneIcon'
import FaqList from '../../../components/FaqList'

export const metadata = {
  title: 'Autotransport – Sleepdienst24/7 | Veilig transport door heel Nederland',
  description: 'Auto gekocht op afstand of oldtimer te transporteren? Sleepdienst24/7 verzorgt veilig autotransport door heel Nederland. Bel 085 060 7279.',
}

const faqItems = [
  {
    question: 'Transporteren jullie ook oldtimers of speciale voertuigen?',
    answer: 'Ja, wij transporteren oldtimers, sportwagens en andere bijzondere voertuigen met extra zorg. Uw voertuig wordt zorgvuldig vastgezet en beschermd tijdens het transport.',
  },
  {
    question: 'Hoe ver rijden jullie voor autotransport?',
    answer: 'Wij verzorgen autotransport door heel Nederland. Voor transport naar het buitenland kunt u contact opnemen voor een offerte op maat.',
  },
  {
    question: 'Kan ik mijn auto laten ophalen bij een particulier of garage?',
    answer: 'Ja, wij halen uw auto op bij elk gewenst adres: particulier, garage, veiling of dealer — en leveren af op uw gewenste locatie.',
  },
  {
    question: 'Is het transport verzekerd?',
    answer: 'Uw voertuig is tijdens het transport gedekt. Vraag bij het maken van de afspraak naar de specifieke dekkingsvoorwaarden.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
}

export default function AutotransportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> › <Link href="/diensten">Diensten</Link> › Autotransport</div>
          <h1>Autotransport</h1>
          <p>Auto gekocht op afstand of te transporteren naar een nieuwe locatie? Wij verzorgen veilig autotransport door heel Nederland — ook voor oldtimers en speciale voertuigen.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div>
              <h2>Betrouwbaar autotransport in heel Nederland</h2>
              <p>Autotransport is meer dan alleen een auto van A naar B brengen. Wij zorgenvoor een veilige, professionele overkomst — of het nu gaat om een auto die u online heeft gekocht, een voertuig dat u verkoopt aan iemand verderop in het land, of een oldtimer die extra voorzichtig behandeld moet worden.</p>
              <p>Met onze vlakke diepladers en ervaren chauffeurs garanderen wij dat uw voertuig onbeschadigd aankomt op de gewenste bestemming.</p>

              <h3>Voor wie is autotransport geschikt?</h3>
              <ul className="checklist">
                <li>Auto gekocht bij een dealer of particulier op afstand</li>
                <li>Oldtimer of sportwagen die niet op eigen kracht mag rijden</li>
                <li>Voertuig dat na reparatie opgehaald moet worden</li>
                <li>Verhuizing met meerdere voertuigen</li>
                <li>Zakelijk: vlootbeheer en leasevoertuig verplaatsingen</li>
              </ul>

              <h3>Wat is inbegrepen?</h3>
              <ul className="checklist">
                <li>Ophalen op uw gewenste adres</li>
                <li>Veilig laden en vastzetten van uw voertuig</li>
                <li>Transport naar de gewenste bestemming in Nederland</li>
                <li>Aflevering en losrijden op locatie</li>
                <li>Documentatie en communicatie tijdens het transport</li>
              </ul>

              <h3>Veelgestelde vragen</h3>
              <FaqList items={faqItems} />
            </div>
            <div>
              <div className="sticky-card">
                <div className="sticky-card-header"><h3>Autotransport aanvragen?</h3><p>Vrijblijvende offerte op maat</p></div>
                <div className="sticky-card-body">
                  <a href="tel:+31850607279" className="btn btn-primary"><PhoneIcon size={15} /> 085 060 7279</a>
                  <Link href="/contact" className="btn btn-ghost" style={{ marginBottom: '20px' }}>Offerte aanvragen</Link>
                  <div className="sticky-card-info">
                    <p>✓ Heel Nederland</p>
                    <p>✓ Oldtimers welkom</p>
                    <p>✓ Prijs vooraf duidelijk</p>
                    <p style={{ marginBottom: '20px' }}>✓ Professionele dieplader</p>
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
          <h2>Autotransport nodig?</h2>
          <p>Vraag een vrijblijvende offerte aan of bel ons direct.</p>
          <div className="cta-btns">
            <a href="tel:+31850607279" className="btn btn-primary"><PhoneIcon size={15} /> 085 060 7279</a>
            <Link href="/contact" className="btn btn-outline-white">Offerte aanvragen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
