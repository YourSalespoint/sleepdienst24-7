'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PhoneIcon from './PhoneIcon'

export default function ContactForm() {
  const router = useRouter()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    naam: '',
    telefoon: '',
    email: '',
    dienst: '',
    voertuig: '',
    locatie: '',
    bericht: '',
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        router.push('/bedankt')
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="naam">Naam *</label>
          <input type="text" id="naam" name="naam" placeholder="Uw naam" required value={form.naam} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="telefoon">Telefoonnummer *</label>
          <input type="tel" id="telefoon" name="telefoon" placeholder="06 12345678" required value={form.telefoon} onChange={handleChange} />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mailadres *</label>
        <input type="email" id="email" name="email" placeholder="uw@email.nl" required value={form.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="dienst">Dienst</label>
        <select id="dienst" name="dienst" value={form.dienst} onChange={handleChange}>
          <option value="">Selecteer een dienst (optioneel)</option>
          <option value="sleepdienst">Sleepdienst</option>
          <option value="auto-berging">Auto Berging</option>
          <option value="autotransport">Autotransport</option>
          <option value="pechhulp">Pechhulp ter plaatse</option>
          <option value="bandenservice">Bandenservice</option>
          <option value="accu-service">Accu Service</option>
          <option value="slotservice">Slotservice</option>
          <option value="anders">Anders / Weet ik niet</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="voertuig">Merk en model voertuig</label>
        <input type="text" id="voertuig" name="voertuig" placeholder="Bijv. Volkswagen Golf 2020" value={form.voertuig} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="locatie">Uw locatie (stad / adres)</label>
        <input type="text" id="locatie" name="locatie" placeholder="Bijv. A2 richting Utrecht, km 142" value={form.locatie} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="bericht">Bericht *</label>
        <textarea id="bericht" name="bericht" placeholder="Omschrijf uw situatie of vraag..." required value={form.bericht} onChange={handleChange}></textarea>
      </div>

      {error && (
        <p style={{ color: '#dc2626', fontWeight: '700', textAlign: 'center', marginBottom: '12px' }}>
          Er ging iets mis. Probeer het opnieuw of bel ons direct.
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '15px', borderRadius: '10px' }}
        disabled={loading}
      >
        {loading ? 'Versturen...' : 'Verstuur aanvraag'}
      </button>
      <p style={{ fontSize: '.82rem', color: 'var(--gray)', marginTop: '12px', textAlign: 'center' }}>
        Pech op dit moment? Bel ons direct op{' '}
        <a href="tel:+31855055202" style={{ color: 'var(--primary)', fontWeight: '700' }}>085-5055202</a>
      </p>
    </form>
  )
}
