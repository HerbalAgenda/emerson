import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emerson Naturals - Premium Wild-Harvested Kratom | 100% Pure Mitragyna Speciosa',
  description: 'Since 2016, Emerson Naturals has been dedicated to offering the highest quality wild-harvested kratom products. GMP certified, lab tested, and sustainably sourced for wholesale buyers.',
  keywords: 'kratom, mitragyna speciosa, wholesale, wild harvested, premium quality, GMP certified, lab tested, sustainable',
  icons: {
    icon: '/favicon.ico',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
