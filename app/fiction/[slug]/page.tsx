import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/markdown'

export async function generateStaticParams() {
  const stories = await getAllPosts('fiction')
  return stories.map((story) => ({
    slug: story.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const story = await getPostBySlug('fiction', params.slug)
  
  if (!story) {
    return {
      title: 'Story Not Found',
    }
  }

  return {
    title: `${story.title} | Fiction`,
    description: story.excerpt || '',
  }
}

export default async function FictionStory({ params }: { params: { slug: string } }) {
  const story = await getPostBySlug('fiction', params.slug)

  if (!story) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/fiction"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
        >
          ← Back to Fiction
        </Link>

        {/* Story */}
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          <header className="mb-8">
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(story.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
              {story.title}
            </h1>
            {story.excerpt && (
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {story.excerpt}
              </p>
            )}
          </header>

          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: story.content }}
          />
        </article>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/fiction"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Fiction
          </Link>
        </div>
      </div>
    </div>
  )
}

