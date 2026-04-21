'use client'
import { useState, useEffect } from 'react'

function gtag() {
  window.dataLayer = window.dataLayer || []
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments)
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [analytics, setAnalytics] = useState(true)
  const [marketing, setMarketing] = useState(true)

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) setVisible(true)
  }, [])

  function acceptAll() {
    gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    })
    localStorage.setItem('cookie_consent', 'all')
    setVisible(false)
  }

  function acceptSelection() {
    gtag('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: marketing ? 'granted' : 'denied',
      ad_user_data: marketing ? 'granted' : 'denied',
      ad_personalization: marketing ? 'granted' : 'denied',
    })
    localStorage.setItem('cookie_consent', JSON.stringify({ analytics, marketing }))
    setVisible(false)
  }

  return (
    <>
      {!visible && (
        <button className="cookie-trigger" onClick={() => { setShowDetails(false); setVisible(true) }} aria-label="Cookieinstellingen">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
            <path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/>
          </svg>
          <span>Cookies</span>
        </button>
      )}
      {visible && (
        <div className="cookie-overlay">
          <div className="cookie-banner">
            <div className="cookie-content">
              <p className="cookie-title">Wij gebruiken cookies</p>
              <p className="cookie-desc">
                We gebruiken cookies om het websiteverkeer te analyseren en uw ervaring te verbeteren.{' '}
                <button className="cookie-details-toggle" onClick={() => setShowDetails(!showDetails)}>
                  {showDetails ? 'Minder opties' : 'Instellingen aanpassen'}
                </button>
              </p>
              {showDetails && (
                <div className="cookie-options">
                  <label className="cookie-checkbox disabled">
                    <input type="checkbox" checked disabled readOnly />
                    <span><strong>Functioneel</strong> — noodzakelijk voor de website</span>
                  </label>
                  <label className="cookie-checkbox">
                    <input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} />
                    <span><strong>Analytisch</strong> — inzicht in bezoekersgedrag</span>
                  </label>
                  <label className="cookie-checkbox">
                    <input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} />
                    <span><strong>Marketing</strong> — gepersonaliseerde advertenties</span>
                  </label>
                </div>
              )}
            </div>
            <div className="cookie-actions">
              <button className="btn btn-ghost cookie-btn-selection" onClick={acceptSelection}>Selectie accepteren</button>
              <button className="btn btn-primary cookie-btn-all" onClick={acceptAll}>Alles accepteren</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
