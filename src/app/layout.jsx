import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title: 'Sleepdienst24/7 – Pech onderweg? Wij slepen u eruit',
  description: 'Auto pech onderweg? Sleepdienst24/7 staat dag en nacht voor u klaar. Sleepdienst, auto berging, autotransport en pechhulp in heel Nederland. Bel direct: 085 060 7279.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <GoogleTagManager gtmId="GTM-KWS5TN35" />
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
