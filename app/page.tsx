import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to My Personal Website
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Developer, Writer, and Creative Thinker
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More About Me
            </Link>
            <Link
              href="/portfolio"
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Explore My Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/blog"
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Blog
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Thoughts, insights, and updates on technology, life, and everything in between.
              </p>
            </Link>
            
            <Link
              href="/fiction"
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Fiction
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creative writing, short stories, and imaginative narratives.
              </p>
            </Link>
            
            <Link
              href="/bookshelf"
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Bookshelf
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Books I've read, loved, and recommend. Discover my reading journey.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Preview */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Recent Blog Posts
            </h2>
            <Link
              href="/blog"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder blog posts */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                January 15, 2024
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Getting Started with Next.js
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                A comprehensive guide to building modern web applications with Next.js...
              </p>
              <Link
                href="/blog/getting-started-with-nextjs"
                className="text-blue-600 dark:text-blue-400 hover:underline mt-4 inline-block"
              >
                Read More →
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                January 10, 2024
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                The Art of Clean Code
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Principles and practices for writing maintainable and elegant code...
              </p>
              <Link
                href="/blog/art-of-clean-code"
                className="text-blue-600 dark:text-blue-400 hover:underline mt-4 inline-block"
              >
                Read More →
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                January 5, 2024
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                My Journey into Web Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Reflecting on the path that led me to become a web developer...
              </p>
              <Link
                href="/blog/journey-into-web-development"
                className="text-blue-600 dark:text-blue-400 hover:underline mt-4 inline-block"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

