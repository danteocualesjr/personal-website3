import Link from 'next/link'
import { getAllPosts, PostData } from '@/lib/markdown'

export const metadata = {
  title: 'Fiction | Personal Website',
  description: 'Creative writing, short stories, and imaginative narratives',
}

export default async function Fiction() {
  const stories = await getAllPosts('fiction')

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Fiction
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Creative writing and imaginative narratives
          </p>
        </div>

        {/* Stories List */}
        {stories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No fiction pieces yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {stories.map((story) => (
              <article
                key={story.slug}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(story.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  <Link
                    href={`/fiction/${story.slug}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {story.title}
                  </Link>
                </h2>
                {story.excerpt && (
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                    {story.excerpt}
                  </p>
                )}
                <Link
                  href={`/fiction/${story.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium inline-flex items-center"
                >
                  Read Story →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

