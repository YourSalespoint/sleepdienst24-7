import Link from 'next/link'
import PhoneIcon from '../../../components/PhoneIcon'
import FaqList from '../../../components/FaqList'

export const metadata = {
  title: 'Slotservice – Sleepdienst24/7 | Auto openen zonder schade',
  description: 'Sleutels in de auto of verloren? Sleepdienst24/7 opent uw voertuig schadevrij en snel. 24/7 bereikbaar in heel Nederland. Bel 085-5055202.',
}

const faqItems = [
  {
    question: 'Hoe openen jullie de auto zonder schade?',
    answer: 'Wij gebruiken professioneel slotservicegereedschap waarmee wij de meeste voertuigen schadevrij kunnen openen. Dit vereist vakkennis en de juiste tools — geen draadje of kapotte ruit.',
  },
  {
    question: 'Werkt dit bij alle automerken?',
    answer: 'Onze slotservice werkt bij de meeste gangbare automerken en -modellen. Bij moderne voertuigen met geavanceerde elektronische sloten kan het iets meer tijd kosten.',
  },
  {
    question: 'Moet ik kunnen aantonen dat het mijn auto is?',
    answer: 'Ja, wij vragen altijd om identificatie en het kentekenbewijs of bewijs van eigendom voordat wij een voertuig openen. Dit is voor uw eigen veiligheid en bescherming.',
  },
  {
    question: 'Hoe snel zijn jullie?',
    answer: 'Wij streven ernaar binnen 30 minuten bij u te zijn, ook midden in de nacht.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
}

export default function SlotservicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> › <Link href="/diensten">Diensten</Link> › Slotservice</div>
          <h1>Slotservice</h1>
          <p>Sleutels in de auto achtergelaten of verloren? Wij openen uw voertuig snel en schadevrij — dag en nacht, door heel Nederland.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div>
              <h2>Auto openen zonder beschadiging</h2>
              <p>Het overkomt iedereen wel eens: sleutels in de auto achtergelaten of verloren. Geen paniek — onze slotservice monteur komt snel naar u toe en opent uw voertuig professioneel, zonder schade aan het slot of de carrosserie.</p>
              <p>Wij gebruiken uitsluitend professioneel slotservicegereedschap en vragen altijd om identificatie. Zo bent u zeker van een veilige en wettige dienstverlening.</p>

              <h3>Wanneer heeft u slotservice nodig?</h3>
              <ul className="checklist">
                <li>Sleutels in de auto achtergelaten</li>
                <li>Sleutels verloren en geen reservesleutel beschikbaar</li>
                <li>Slot defect en auto kan niet worden geopend</li>
                <li>Centrale vergrendeling werkt niet meer</li>
                <li>Sleutel afgebroken in het slot</li>
              </ul>

              <h3>Wat is inbegrepen?</h3>
              <ul className="checklist">
                <li>Schadevrij openen van uw voertuig</li>
                <li>Controle van het slot na opening</li>
                <li>Advies over vervangend sleutelservice indien nodig</li>
                <li>Veiligheidscheck: identificatie vereist</li>
              </ul>

              <h3>Veelgestelde vragen</h3>
              <FaqList items={faqItems} />
            </div>
            <div>
              <div className="sticky-card">
                <div className="sticky-card-header"><h3>Sleutels in de auto?</h3><p>Direct geholpen — 24/7 beschikbaar</p></div>
                <div className="sticky-card-body">
                  <a href="tel:+31855055202" className="btn btn-primary"><PhoneIcon size={15} /> 085-5055202</a>
                  <Link href="/contact" className="btn btn-ghost" style={{ marginBottom: '20px' }}>Offerte aanvragen</Link>
                  <div className="sticky-card-info">
                    <p>✓ Binnen 30 minuten ter plaatse</p>
                    <p>✓ Schadevrij openen</p>
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
          <h2>Sleutels in de auto?</h2>
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
