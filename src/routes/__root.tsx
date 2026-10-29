import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import displayFont from '@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2?url'
import { book, site } from '@/lib/site'
import '../styles.css'

const ogImage = `${site.url}/og.jpg`

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  image: `${site.url}/assets/sharahbill-abdi.jpg`,
  email: `mailto:${site.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
  worksFor: { '@type': 'Organization', name: 'Cortech Consulting Group' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'The Open University of Kenya' },
    { '@type': 'EducationalOrganization', name: 'Moringa School' },
  ],
  knowsAbout: ['Machine learning', 'Time-series forecasting', 'Computer vision', 'Monitoring and evaluation', 'Survey research', 'Python'],
  knowsLanguage: ['so', 'en', 'sw'],
  sameAs: [site.github, site.linkedin, book.href],
}

const bookLd = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: book.title,
  author: { '@type': 'Person', name: site.name },
  url: book.href,
  bookFormat: 'https://schema.org/EBook',
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: site.title },
      { name: 'description', content: site.description },
      { name: 'author', content: site.name },
      { name: 'theme-color', content: '#0f1e33' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:site_name', content: site.name },
      { property: 'og:title', content: site.title },
      { property: 'og:description', content: site.description },
      { property: 'og:url', content: `${site.url}/` },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Sharahbill Mohamed Abdi, Data & Machine Learning Engineer, MEAL & Research, Nairobi' },
      { property: 'og:locale', content: 'en_KE' },
      { property: 'profile:first_name', content: 'Sharahbill' },
      { property: 'profile:last_name', content: 'Abdi' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: site.title },
      { name: 'twitter:description', content: site.description },
      { name: 'twitter:image', content: ogImage },
    ],
    links: [
      { rel: 'canonical', href: `${site.url}/` },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'preload', href: displayFont, as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    ],
    scripts: [
      { type: 'application/ld+json', children: JSON.stringify(person) },
      { type: 'application/ld+json', children: JSON.stringify(bookLd) },
    ],
  }),
  component: RootDocument,
})

function RootDocument() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
