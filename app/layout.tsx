import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://commercialpropertiesahmedabad.in'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Premium Commercial Spaces | Commercial Real Estate in India',
    template: '%s | Premium Commercial Spaces',
  },
  description:
    'Discover premium commercial real estate opportunities across India. Office spaces, retail shops, showrooms and more — powered by Slabs and Beams Realty. End-to-end property assistance with verified listings.',
  keywords: [
    'commercial real estate',
    'premium office spaces',
    'retail shops',
    'showrooms',
    'commercial property India',
    'Slabs and Beams Realty',
    'commercial investment',
    'property advisory',
    'office for lease',
    'commercial spaces',
  ],
  authors: [{ name: 'Slabs and Beams Realty' }],
  creator: 'Slabs and Beams Realty',
  publisher: 'Premium Commercial Spaces',
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
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Premium Commercial Spaces',
    title: 'Premium Commercial Spaces | Commercial Real Estate in India',
    description:
      'Discover premium commercial real estate opportunities across India. Office spaces, retail shops, showrooms and more — powered by Slabs and Beams Realty.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Premium Commercial Spaces',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Commercial Spaces | Commercial Real Estate in India',
    description:
      'Discover premium commercial real estate opportunities across India. Powered by Slabs and Beams Realty.',
    images: [`${siteUrl}/og-image.jpg`],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Premium Commercial Spaces',
  alternateName: 'Slabs and Beams Realty',
  url: siteUrl,
  description:
    'Premium commercial real estate agency specializing in office spaces, retail shops, and showrooms across India.',
  telephone: '+91-98765-43210',
  email: 'info@commercialpropertiesahmedabad.in',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  knowsAbout: [
    'Commercial Real Estate',
    'Office Spaces',
    'Retail Properties',
    'Property Investment',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
