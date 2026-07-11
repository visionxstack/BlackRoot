import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BlackRoot Hackathon Team',
    short_name: 'BlackRoot',
    description: 'BlackRoot is a multidisciplinary hackathon team from Nepal focused on software engineering, cybersecurity, AI, and building impactful technology solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
