import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Perkfi',
  description: 'Perkfi is Next Stock incentive Platform',
  generator: 'Perkfi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
