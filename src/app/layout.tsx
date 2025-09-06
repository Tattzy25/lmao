import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FloatingActionMenu from '@/components/FloatingActionMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scoovio - Premium Mobility Equipment Rental',
  description: 'Experience every destination without limits. Premium mobility solutions delivered anywhere.',
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
      <body className={inter.className}>
        {children}
        <FloatingActionMenu />
      </body>
    </html>
  )
}
