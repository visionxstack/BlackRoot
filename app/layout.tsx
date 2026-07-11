import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://blackroot.dev'),
  title: {
    default: 'BlackRoot | Hackathon Team, Builders & Innovators',
    template: '%s | BlackRoot',
  },
  description: 'BlackRoot is a multidisciplinary hackathon team from Nepal focused on software engineering, cybersecurity, AI, and building impactful technology solutions.',
  keywords: ['BlackRoot', 'BlackRoot Nepal', 'BlackRoot Hackathon Team', 'Nepal Hackathon Team', 'Cybersecurity Team Nepal', 'Student Innovation Team Nepal', 'Vision KC BlackRoot', 'DevBuddy', 'LeapFrog Connect', 'Trip Mandala', 'CrimeLink'],
  authors: [{ name: 'BlackRoot Team' }],
  creator: 'BlackRoot',
  publisher: 'BlackRoot',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'BlackRoot | Hackathon Team, Builders & Innovators',
    description: 'BlackRoot is a multidisciplinary hackathon team from Nepal focused on software engineering, cybersecurity, AI, and building impactful technology solutions.',
    url: 'https://blackroot.dev',
    siteName: 'BlackRoot',
    images: [
      {
        url: '/blackroot-logo.png', // Fallback, replaced by opengraph-image.png natively if provided
        width: 1200,
        height: 630,
        alt: 'BlackRoot Hackathon Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlackRoot | Hackathon Team, Builders & Innovators',
    description: 'BlackRoot is a multidisciplinary hackathon team from Nepal focused on software engineering, cybersecurity, AI, and building impactful technology solutions.',
    images: ['/blackroot-logo.png'], // Fallback
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://blackroot.dev/#organization',
        name: 'BlackRoot',
        url: 'https://blackroot.dev',
        logo: 'https://blackroot.dev/blackroot-logo.png',
        description: 'BlackRoot is a multidisciplinary hackathon team from Nepal focused on software engineering, cybersecurity, AI, and building impactful technology solutions.',
        sameAs: [
          'https://github.com/blackrootnepal',
          'https://www.linkedin.com/company/blackroot-nepal'
        ],
        founder: [
          { '@type': 'Person', name: 'Vision KC' },
          { '@type': 'Person', name: 'Pranish Khanal' },
          { '@type': 'Person', name: 'Rachana Tiwari' }
        ]
      },
      {
        '@type': 'Event',
        name: 'Relay Hack X LeapFrog Connect',
        startDate: '2026',
        location: { '@type': 'Place', name: 'Nepal' },
        organizer: { '@type': 'Organization', name: 'LeapFrog Technology' }
      },
      {
        '@type': 'Event',
        name: 'JunctionX Kathmandu & FinnoFest 2026',
        startDate: '2026-08',
        location: { '@type': 'Place', name: 'Kathmandu, Nepal' }
      },
      {
        '@type': 'Event',
        name: 'Nepal Police Hackathon 2026',
        startDate: '2026-06-14',
        location: { '@type': 'Place', name: 'Nepal Police Headquarters' }
      }
    ]
  }

  return (
    <html lang="en" className={`${archivo.variable} dark bg-background overflow-x-hidden`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
