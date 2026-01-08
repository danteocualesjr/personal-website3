import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/markdown'

export async function generateStaticParams() {
  const stories = await getAllPosts('fiction')
  return stories.map((story) => ({ slug: story.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const story = await getPostBySlug('fiction', params.slug)
  if (!story) return { title: 'Not Found' }
  return { title: `${story.title} | Dante Cuales` }
}

export default async function FictionStory({ params }: { params: { slug: string } }) {
  const story = await getPostBySlug('fiction', params.slug)
  if (!story) notFound()

  return (
    <div className="px-6 py-24 pt-32">
      <article className="max-w-4xl mx-auto">
        <Link 
          href="/fiction" 
          className="inline-flex items-center gap-2 text-[--muted] hover:text-[--text] transition-colors duration-300 mb-16 hover-line"
        >
          <span>←</span>
          Back to Fiction
        </Link>
        
        <header className="mb-16">
          <p className="text-[--muted] text-sm mb-6 uppercase tracking-wider">
            {new Date(story.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] mb-8 italic">
            {story.title}
          </h1>
          {story.excerpt && (
            <p className="text-xl md:text-2xl text-[--muted] leading-relaxed">
              {story.excerpt}
            </p>
          )}
        </header>
        
        <div 
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: story.content }} 
        />
        
        <footer className="mt-20 pt-12 border-t border-[--border]">
          <Link 
            href="/fiction" 
            className="inline-flex items-center gap-2 text-[--muted] hover:text-[--text] transition-colors duration-300 hover-line"
          >
            <span>←</span>
            More stories
          </Link>
        </footer>
      </article>
    </div>
  )
}
