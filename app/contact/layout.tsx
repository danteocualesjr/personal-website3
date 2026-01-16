import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Have a project in mind? Let\'s talk.',
  openGraph: {
    title: 'Contact | Dante Cuales',
    description: 'Have a project in mind? Let\'s talk.',
    url: `${siteConfig.url}/contact`,
  },
  twitter: {
    card: 'summary',
    title: 'Contact | Dante Cuales',
    description: 'Have a project in mind? Let\'s talk.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
