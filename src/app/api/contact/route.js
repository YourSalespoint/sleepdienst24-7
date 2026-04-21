import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

export async function POST(request) {
  const { naam, telefoon, email, dienst, voertuig, locatie, bericht } = await request.json()

  if (!naam || !telefoon || !email || !bericht) {
    return Response.json({ error: 'Verplichte velden ontbreken.' }, { status: 400 })
  }

  const dienstLabel = dienst || 'Niet opgegeven'
  const voertuigLabel = voertuig || 'Niet opgegeven'
  const locatieLabel = locatie || 'Niet opgegeven'

  try {
    await transporter.sendMail({
      from: `"Website Sleepdienst24/7" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `Nieuw contactformulier van ${naam}`,
      text: `
Naam: ${naam}
Telefoon: ${telefoon}
E-mail: ${email}
Dienst: ${dienstLabel}
Voertuig: ${voertuigLabel}
Locatie: ${locatieLabel}

Bericht:
${bericht}
      `.trim(),
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Mail fout:', err)
    return Response.json({ error: 'Versturen mislukt.' }, { status: 500 })
  }
}
