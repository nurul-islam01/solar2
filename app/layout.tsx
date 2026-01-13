import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Solarid Australia - Premium Solar Panel Solutions',
  description: 'Solarid Australia offers high-quality flexible, portable, and rigid solar panels for RV, marine, balcony, and outdoor applications. 18+ years of expertise in custom solar solutions.',
  keywords: 'solar panels, flexible solar panels, portable solar panels, RV solar, marine solar, Australia solar, Solarid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
