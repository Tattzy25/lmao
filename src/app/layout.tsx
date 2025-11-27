import type { Metadata } from 'next'
import './globals.css'
import FloatingActionMenu from '@/components/custom/FloatingActionMenu'

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
      <body className="font-sans antialiased">
        {children}
        <FloatingActionMenu />
      </body>
    </html>
  )
}
