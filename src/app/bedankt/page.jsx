'use client'

import Link from 'next/link'
import PhoneIcon from '../../components/PhoneIcon'

export default function BedanktPage() {
  return (
    <>
      <section className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>

            <div className="bedankt-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>

            <span className="label" style={{ display: 'inline-block', fontSize: '.78rem', fontWeight: '700', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--primary)', background: 'var(--light)', border: '1px solid #bfdbfe', padding: '4px 14px', borderRadius: '20px', marginBottom: '16px' }}>Aanvraag ontvangen</span>

            <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '900', color: 'var(--dark)', marginBottom: '16px', lineHeight: 1.2 }}>
              Bedankt voor uw <span style={{ color: 'var(--primary)' }}>aanvraag!</span>
            </h1>
            <p style={{ color: 'var(--gray)', fontSize: '1.05rem', marginBottom: '12px' }}>
              Uw bericht is goed ontvangen. Wij nemen zo snel mogelijk contact met u op — bij spoed kunt u ons ook direct bellen.
            </p>

            <div className="stappen-card" style={{ textAlign: 'left' }}>
              <h3>Wat gebeurt er nu?</h3>
              <div className="stap-item">
                <div className="stap-nr">1</div>
                <div>
                  <h4>Wij beoordelen uw aanvraag</h4>
                  <p>Uw bericht wordt direct bekeken door ons team.</p>
                </div>
              </div>
              <div className="stap-item">
                <div className="stap-nr">2</div>
                <div>
                  <h4>U hoort binnen 1 werkdag van ons</h4>
                  <p>Wij nemen contact op via telefoon of e-mail met een prijsopgave.</p>
                </div>
              </div>
              <div className="stap-item">
                <div className="stap-nr">3</div>
                <div>
                  <h4>Wij rijden naar u toe</h4>
                  <p>Zodra u akkoord gaat, rijden wij direct naar uw locatie uit.</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '36px' }}>
              <Link href="/" className="btn btn-blue">Terug naar home</Link>
              <a href="tel:+31855055202" className="btn btn-outline">
                <PhoneIcon size={15} /> 085-5055202
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
