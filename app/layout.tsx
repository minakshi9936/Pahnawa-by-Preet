import type { Metadata } from 'next'
import './globals.css'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata: Metadata = {
  title: 'Pahnawa By Preets - Boutique Stitching & Designing',
  description: 'Your Partner in Exceptional Experiences. Premium custom clothing, bridal tailoring, and personalized fashion solutions.',
  keywords: 'boutique, stitching, tailoring, bridal wear, custom clothing, ethnic wear, designer consultation',
  openGraph: {
    title: 'Pahnawa By Preets - Boutique Stitching & Designing',
    description: 'Your Partner in Exceptional Experiences. Premium custom clothing, bridal tailoring, and personalized fashion solutions.',
    url: 'https://pahnawa.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B3A62" />
      </head>
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
