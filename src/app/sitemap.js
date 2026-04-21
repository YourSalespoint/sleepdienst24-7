export default function sitemap() {
  const base = 'https://sleepdienst24-7.nl'
  const now = new Date()

  const routes = [
    '',
    '/over-ons',
    '/contact',
    '/diensten',
    '/diensten/sleepdienst',
    '/diensten/auto-berging',
    '/diensten/autotransport',
    '/diensten/pechhulp',
    '/diensten/bandenservice',
    '/diensten/accu-service',
    '/diensten/slotservice',
  ]

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/diensten/') ? 0.8 : 0.7,
  }))
}
