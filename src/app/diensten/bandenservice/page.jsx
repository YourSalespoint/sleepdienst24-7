import Link from 'next/link'
import PhoneIcon from '../../../components/PhoneIcon'
import FaqList from '../../../components/FaqList'

export const metadata = {
  title: 'Bandenservice – Sleepdienst24/7 | Lekke band onderweg? Wij helpen',
  description: 'Lekke band onderweg? Sleepdienst24/7 verwisselt uw band ter plaatse of zorgt voor een passende oplossing. 24/7 beschikbaar in heel Nederland. Bel 085-5055202.',
}

const faqItems = [
  {
    question: 'Wat als ik geen reserveband heb?',
    answer: 'Geen probleem. Wij kijken ter plaatse naar de beste oplossing: een noodreparatie, een tijdelijke reserveband of transport naar een bandenshop of garage.',
  },
  {
    question: 'Verwisselen jullie alle typen banden?',
    answer: 'Ja, wij verwisselen banden van personenauto\'s, bestelwagens en lichte bedrijfsvoertuigen. Van zomerbanden en winterbanden tot all-seasons.',
  },
  {
    question: 'Kunnen jullie ook een lekke band repareren?',
    answer: 'In sommige gevallen is een noodreparatie ter plaatse mogelijk. Of een band gerepareerd kan worden hangt af van de locatie en ernst van de beschadiging.',
  },
  {
    question: 'Hoe snel zijn jullie bij mij?',
    answer: 'Wij streven ernaar binnen 30 minuten bij u te zijn. Na uw melding rijdt onze dichtstbijzijnde monteur direct naar u toe.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
}

export default function BandenservicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> › <Link href="/diensten">Diensten</Link> › Bandenservice</div>
          <h1>Bandenservice</h1>
          <p>Lekke band onderweg? Wij verwisselen uw band ter plaatse of zorgen voor een passende oplossing. 24/7 beschikbaar in heel Nederland.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div>
              <h2>Lekke band? Wij lossen het op</h2>
              <p>Een lekke band kan iedereen overkomen, op de snelweg, in de stad of midden in de nacht. Onze monteur komt snel naar u toe en zorgt dat u veilig verder kunt rijden.</p>
              <p>Of u nu een reserveband heeft of niet: wij kijken ter plaatse naar de beste oplossing. Van bandverwisseling tot noodreparatie of transport naar een bandenshop.</p>

              <h3>Wat kan er bij uw band misgaan?</h3>
              <ul className="checklist">
                <li>Lekke band door spijker, schroef of ander object</li>
                <li>Klapband bij hoge snelheid</li>
                <li>Band beschadigd door pothole of stoeprand</li>
                <li>Band versleten of te oud</li>
                <li>Ventielprobleem waarbij de band langzaam leegloopt</li>
              </ul>

              <h3>Wat doen wij ter plaatse?</h3>
              <ul className="checklist">
                <li>Beoordeling van de beschadiging</li>
                <li>Verwisseling met uw reserveband indien aanwezig</li>
                <li>Noodreparatie indien mogelijk</li>
                <li>Regelen van transport naar bandenshop of garage</li>
                <li>Veiligheidscheck van de overige banden</li>
              </ul>

              <h3>Veelgestelde vragen</h3>
              <FaqList items={faqItems} />
            </div>
            <div>
              <div className="sticky-card">
                <div className="sticky-card-header"><h3>Lekke band?</h3><p>Direct geholpen — 24/7 beschikbaar</p></div>
                <div className="sticky-card-body">
                  <a href="tel:+31855055202" className="btn btn-primary"><PhoneIcon size={15} /> 085-5055202</a>
                  <Link href="/contact" className="btn btn-ghost" style={{ marginBottom: '20px' }}>Offerte aanvragen</Link>
                  <div className="sticky-card-info">
                    <p>✓ Binnen 30 minuten ter plaatse</p>
                    <p>✓ Geen reserveband? Geen probleem</p>
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
          <h2>Lekke band?</h2>
          <p>Bel ons direct — wij zijn er altijd voor u.</p>
          <div className="cta-btns">
            <a href="tel:+31855055202" className="btn btn-primary"><PhoneIcon size={15} /> 085-5055202</a>
            <Link href="/contact" className="btn btn-outline-white">Offerte aanvragen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
