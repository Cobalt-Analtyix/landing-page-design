import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SITE_URL } from '@/lib/constants'
import { SITE_NAME } from '@/lib/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Consumer insight, before the week is out.`,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Run surveys, analyze responses, and make clear, actionable decisions faster with Cobalt Analytix.',
  generator: 'Cobalt Analytix',
  icons: {
    icon: [
      {
        url: '/company_assets/Cobalt_C_Logo.png',
      },
    ],
    apple: '/company_assets/cobalt-logo-final-black.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f2f9fe',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
