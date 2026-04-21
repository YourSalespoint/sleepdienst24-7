import Link from 'next/link'
import SleepLogo from './SleepLogo'
import PhoneIcon from './PhoneIcon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo" style={{ marginBottom: '16px', display: 'inline-flex' }}>
              <SleepLogo />
            </Link>
            <p>Professionele sleepdienst en pechhulp in heel Nederland. 24 uur per dag, 7 dagen per week bereikbaar. Geen abonnement nodig.</p>
          </div>

          <div className="footer-col">
            <h4>Diensten</h4>
            <ul>
              <li><Link href="/diensten/sleepdienst">Sleepdienst</Link></li>
              <li><Link href="/diensten/auto-berging">Auto Berging</Link></li>
              <li><Link href="/diensten/autotransport">Autotransport</Link></li>
              <li><Link href="/diensten/pechhulp">Pechhulp</Link></li>
              <li><Link href="/diensten/bandenservice">Bandenservice</Link></li>
              <li><Link href="/diensten/accu-service">Accu Service</Link></li>
              <li><Link href="/diensten/slotservice">Slotservice</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Navigatie</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/diensten">Alle diensten</Link></li>
              <li><Link href="/over-ons">Over ons</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/contact">Offerte aanvragen</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact-item">
              <span className="ic"><PhoneIcon size={14} /></span>
              <div>
                <a href="tel:+31850607279">085 060 7279</a><br />
                <small>24/7 bereikbaar</small>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="ic">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <div><a href="mailto:info@sleepdienst24-7.nl">info@sleepdienst24-7.nl</a></div>
            </div>
            <div className="footer-contact-item">
              <span className="ic">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </span>
              <div><a href="https://wa.me/31850607279">WhatsApp ons</a></div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Sleepdienst24/7 — Alle rechten voorbehouden</span>
          <span>KvK: 99466058</span>
        </div>
      </div>
    </footer>
  )
}
