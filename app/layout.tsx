import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'ROC Solution - Premier IT Services & Technology Solutions',
  description: 'ROC Solution provides cutting-edge IT services including React.js, Node.js, React Native, AWS, and AI/ML solutions. Transform your business with our expert team.',
  keywords: 'React.js, Node.js, React Native, AWS, AI/ML, IT Services, Web Development, Mobile Development, Cloud Solutions',
  authors: [{ name: 'ROC Solution' }],
  openGraph: {
    title: 'ROC Solution - Premier IT Services & Technology Solutions',
    description: 'Transform your business with cutting-edge IT services and technology solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROC Solution - Premier IT Services & Technology Solutions',
    description: 'Transform your business with cutting-edge IT services and technology solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
