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
  return { title: `${story.title} | Your Name` }
}

export default async function FictionStory({ params }: { params: { slug: string } }) {
  const story = await getPostBySlug('fiction', params.slug)
  if (!story) notFound()

  return (
    <div className="px-6 py-20">
      <article className="max-w-3xl mx-auto">
        <Link 
          href="/fiction" 
          className="text-[--muted] hover:text-[--text] transition-colors mb-16 block"
        >
          ← Back
        </Link>
        
        <header className="mb-16">
          <p className="text-[--muted] mb-4">
            {new Date(story.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h1 className="text-4xl md:text-5xl mb-6 italic">
            {story.title}
          </h1>
          {story.excerpt && (
            <p className="text-xl text-[--muted]">
              {story.excerpt}
            </p>
          )}
        </header>
        
        <div 
          className="prose"
          dangerouslySetInnerHTML={{ __html: story.content }} 
        />
      </article>
    </div>
  )
}
