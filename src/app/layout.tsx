import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scoovio - Premium Mobility Equipment Marketplace',
  description: 'Rent mobility scooters, wheelchairs, and baby strollers from verified partners for your destination adventures',
  icons: {
    icon: 'https://i.imgur.com/JQIz3Q6.png',
    shortcut: 'https://i.imgur.com/JQIz3Q6.png',
    apple: 'https://i.imgur.com/JQIz3Q6.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
