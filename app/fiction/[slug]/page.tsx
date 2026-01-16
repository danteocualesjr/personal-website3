import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getPostBySlug, getAllPosts } from '@/lib/markdown'
import { siteConfig } from '@/lib/site'

export async function generateStaticParams() {
  const stories = await getAllPosts('fiction')
  return stories.map((story) => ({ slug: story.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const story = await getPostBySlug('fiction', params.slug)
  if (!story) {
    return {
      title: 'Not Found',
    }
  }

  const storyUrl = `${siteConfig.url}/fiction/${params.slug}`
  const storyTitle = `${story.title} | Dante Cuales`
  const storyDescription = story.excerpt || story.title

  return {
    title: story.title,
    description: storyDescription,
    openGraph: {
      title: storyTitle,
      description: storyDescription,
      url: storyUrl,
      type: 'article',
      publishedTime: story.date,
      authors: [siteConfig.author],
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: storyTitle,
      description: storyDescription,
      creator: siteConfig.twitterHandle,
    },
  }
}

export default async function FictionStory({ params }: { params: { slug: string } }) {
  const story = await getPostBySlug('fiction', params.slug)
  if (!story) notFound()

  return (
    <div className="px-6 py-24 pt-32">
      <article className="max-w-4xl mx-auto">
        <Link 
          href="/fiction" 
          className="inline-flex items-center gap-2 text-[--muted] hover:text-[--text] transition-colors duration-500 mb-20 hover-line focus-visible:text-[--text] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--secondary] focus-visible:rounded"
        >
          <span className="transition-transform duration-500 group-hover:-translate-x-1">←</span>
          Back to Fiction
        </Link>
        
        <header className="mb-20">
          <p className="text-[--muted] text-sm mb-8 uppercase tracking-wider">
            {new Date(story.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] mb-10 italic">
            {story.title}
          </h1>
          {story.excerpt && (
            <p className="text-xl md:text-2xl text-[--muted] leading-relaxed max-w-3xl">
              {story.excerpt}
            </p>
          )}
        </header>
        
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: story.content }} 
        />
        
        <footer className="mt-24 pt-12 border-t border-[--border]">
          <Link 
            href="/fiction" 
            className="inline-flex items-center gap-2 text-[--muted] hover:text-[--text] transition-all duration-500 hover-line group focus-visible:text-[--text] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--secondary] focus-visible:rounded"
          >
            <span className="transition-transform duration-500 group-hover:-translate-x-1">←</span>
            More stories
          </Link>
        </footer>
      </article>
    </div>
  )
}
