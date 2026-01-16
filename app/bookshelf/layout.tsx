import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Bookshelf',
  description: 'Books that have shaped my thinking',
  openGraph: {
    title: 'Bookshelf | Dante Cuales',
    description: 'Books that have shaped my thinking',
    url: `${siteConfig.url}/bookshelf`,
  },
  twitter: {
    card: 'summary',
    title: 'Bookshelf | Dante Cuales',
    description: 'Books that have shaped my thinking',
  },
}

export default function BookshelfLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
