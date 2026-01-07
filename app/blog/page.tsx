import Link from 'next/link'
import { getAllPosts } from '@/lib/markdown'

export const metadata = {
  title: 'Blog | Personal Website',
  description: 'Thoughts, insights, and updates on technology, life, and everything in between',
}

export default async function Blog() {
  const posts = await getAllPosts('blog')

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-600 dark:text-amber-400 text-sm uppercase tracking-[0.3em] mb-6 animate-slide-up">
            Blog
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-gray-900 dark:text-white leading-[1.1] mb-8 animate-slide-up animation-delay-100">
            Thoughts &<br />
            <span className="italic">reflections</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl animate-slide-up animation-delay-200">
            Essays on technology, creativity, and the intersection of both.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No posts yet. Check back soon.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {posts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block py-12 first:pt-0"
                >
                  <div className="grid lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-3">
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    
                    <div className="lg:col-span-8">
                      <h2 className="font-serif text-2xl md:text-3xl text-gray-900 dark:text-white mb-4 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                    
                    <div className="lg:col-span-1 flex justify-end">
                      <span className="text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity text-2xl">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
