'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SleepLogo from './SleepLogo'
import PhoneIcon from './PhoneIcon'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href) => pathname === href
  const isDiensten = () => pathname.startsWith('/diensten')

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="logo">
            <SleepLogo />
          </Link>

          <nav className="main-nav">
            <Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link>
            <div className="nav-item">
              <Link href="/diensten" className={isDiensten() ? 'active' : ''}>Diensten</Link>
              <div className="dropdown">
                <Link href="/diensten/sleepdienst">Sleepdienst</Link>
                <Link href="/diensten/auto-berging">Auto Berging</Link>
                <Link href="/diensten/autotransport">Autotransport</Link>
                <Link href="/diensten/pechhulp">Pechhulp ter plaatse</Link>
                <Link href="/diensten/bandenservice">Bandenservice</Link>
                <Link href="/diensten/accu-service">Accu Service</Link>
                <Link href="/diensten/slotservice">Slotservice</Link>
              </div>
            </div>
            <Link href="/over-ons" className={isActive('/over-ons') ? 'active' : ''}>Over Ons</Link>
            <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
            <a href="tel:+31850607279" className="btn btn-primary nav-cta">
              <PhoneIcon size={15} /> 085 060 7279
            </a>
          </nav>

          <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu openen">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>

      <nav className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link href="/diensten" onClick={() => setMobileOpen(false)}>Diensten</Link>
        <Link href="/diensten/sleepdienst" className="mobile-sub" onClick={() => setMobileOpen(false)}>Sleepdienst</Link>
        <Link href="/diensten/auto-berging" className="mobile-sub" onClick={() => setMobileOpen(false)}>Auto Berging</Link>
        <Link href="/diensten/autotransport" className="mobile-sub" onClick={() => setMobileOpen(false)}>Autotransport</Link>
        <Link href="/diensten/pechhulp" className="mobile-sub" onClick={() => setMobileOpen(false)}>Pechhulp ter plaatse</Link>
        <Link href="/diensten/bandenservice" className="mobile-sub" onClick={() => setMobileOpen(false)}>Bandenservice</Link>
        <Link href="/diensten/accu-service" className="mobile-sub" onClick={() => setMobileOpen(false)}>Accu Service</Link>
        <Link href="/diensten/slotservice" className="mobile-sub" onClick={() => setMobileOpen(false)}>Slotservice</Link>
        <Link href="/over-ons" onClick={() => setMobileOpen(false)}>Over Ons</Link>
        <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
        <a href="tel:+31850607279" className="mobile-nav-call">
          <PhoneIcon size={15} /> Bel direct: 085 060 7279
        </a>
      </nav>
    </header>
  )
}
