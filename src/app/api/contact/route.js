import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { naam, telefoon, email, dienst, voertuig, locatie, bericht } = body

    if (!naam || !telefoon || !email || !bericht) {
      return NextResponse.json({ error: 'Verplichte velden ontbreken' }, { status: 400 })
    }

    // SMTP wordt geconfigureerd bij live-gang via Vercel env vars
    // Zie CLAUDE.md voor de Nodemailer configuratie instructies
    console.log('Contactformulier ontvangen:', { naam, telefoon, email, dienst, voertuig, locatie, bericht })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Serverfout' }, { status: 500 })
  }
}
