import Link from 'next/link'
import { getAllPosts } from '@/lib/markdown'
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Fiction',
  description: 'Short stories and creative writing',
  openGraph: {
    title: 'Fiction | Dante Cuales',
    description: 'Short stories and creative writing',
    url: `${siteConfig.url}/fiction`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fiction | Dante Cuales',
    description: 'Short stories and creative writing',
  },
}

export default async function Fiction() {
  const stories = await getAllPosts('fiction')

  return (
    <div className="px-6 py-24 pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 animate-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-8">
            Fiction
          </h1>
          <p className="text-[--muted] text-xl md:text-2xl max-w-3xl leading-relaxed animate-in delay-1">
            Short stories and creative writing.
          </p>
        </div>
        
        {stories.length === 0 ? (
          <p className="text-[--muted] text-lg">No stories yet.</p>
        ) : (
          <div className="space-y-0">
            {stories.map((story) => (
              <Link 
                key={story.slug} 
                href={`/fiction/${story.slug}`}
                className="group block py-12 border-b border-[--border] hover:border-[--secondary]/40 transition-all duration-500 last:border-0 focus-visible:border-[--secondary]/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[--secondary] focus-visible:rounded relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[--secondary-bg] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="grid md:grid-cols-12 gap-8 items-start relative z-10">
                  <div className="md:col-span-3">
                    <p className="text-[--muted] text-sm font-medium group-hover:text-[--secondary] transition-colors duration-500">
                      {new Date(story.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                      })}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 group-hover:text-[--secondary] transition-colors duration-500 italic">
                      {story.title}
                    </h2>
                    {story.excerpt && (
                      <p className="text-[--muted] text-lg leading-relaxed max-w-2xl group-hover:text-[--text] transition-colors duration-500">
                        {story.excerpt}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
