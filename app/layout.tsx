import '@/app/ui/global.css'
import {inter} from '@/app/ui/fonts'
import {Metadata} from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    url: 'https://next-learn-dashboard.vercel.sh',
  },
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ['nextjs', 'dashboard', 'learn'],
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
