import Link from 'next/link'
import { getAllPosts } from '@/lib/markdown'

export const metadata = {
  title: 'Fiction | Personal Website',
  description: 'Creative writing, short stories, and imaginative narratives',
}

export default async function Fiction() {
  const stories = await getAllPosts('fiction')

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-600 dark:text-amber-400 text-sm uppercase tracking-[0.3em] mb-6 animate-slide-up">
            Fiction
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-gray-900 dark:text-white leading-[1.1] mb-8 animate-slide-up animation-delay-100">
            Stories &<br />
            <span className="italic">narratives</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl animate-slide-up animation-delay-200">
            Creative writing exploring the human condition through fiction.
          </p>
        </div>
      </section>

      {/* Stories */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          {stories.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No stories yet. Check back soon.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-12">
              {stories.map((story) => (
                <Link
                  key={story.slug}
                  href={`/fiction/${story.slug}`}
                  className="group block"
                >
                  <div className="aspect-[3/2] bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-gray-900 mb-6"></div>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                    {new Date(story.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl text-gray-900 dark:text-white mb-4 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {story.title}
                  </h2>
                  {story.excerpt && (
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {story.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
