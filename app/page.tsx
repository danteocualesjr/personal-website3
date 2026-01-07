import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-24 px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center animate-fade-in-up">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold">
              Welcome
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Personal Website
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4 font-light">
            Developer, Writer, and
          </p>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-12 font-light">
            Creative Thinker
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
            >
              Learn More About Me
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white border-2 border-purple-200 dark:border-purple-800 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Explore My Content
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/blog"
              className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center text-2xl">
                  ✍️
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Blog
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Thoughts, insights, and updates on technology, life, and everything in between.
                </p>
                <span className="inline-block mt-4 text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Read More →
                </span>
              </div>
            </Link>
            
            <Link
              href="/fiction"
              className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center text-2xl">
                  📖
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Fiction
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Creative writing, short stories, and imaginative narratives.
                </p>
                <span className="inline-block mt-4 text-indigo-600 dark:text-indigo-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Read More →
                </span>
              </div>
            </Link>
            
            <Link
              href="/bookshelf"
              className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mb-4 flex items-center justify-center text-2xl">
                  📚
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Bookshelf
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Books I've read, loved, and recommend. Discover my reading journey.
                </p>
                <span className="inline-block mt-4 text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Explore →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                Recent Blog Posts
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            </div>
            <Link
              href="/blog"
              className="hidden md:flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold group"
            >
              View All
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder blog posts */}
            <Link
              href="/blog/getting-started-with-nextjs"
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 mb-4 rounded-full"></div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
                January 15, 2024
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Getting Started with Next.js
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                A comprehensive guide to building modern web applications with Next.js...
              </p>
              <span className="text-purple-600 dark:text-purple-400 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
                Read More →
              </span>
            </Link>
            
            <Link
              href="/blog/art-of-clean-code"
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500 mb-4 rounded-full"></div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
                January 10, 2024
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                The Art of Clean Code
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                Principles and practices for writing maintainable and elegant code...
              </p>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
                Read More →
              </span>
            </Link>
            
            <Link
              href="/blog/journey-into-web-development"
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 mb-4 rounded-full"></div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
                January 5, 2024
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                My Journey into Web Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                Reflecting on the path that led me to become a web developer...
              </p>
              <span className="text-blue-600 dark:text-blue-400 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
                Read More →
              </span>
            </Link>
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold"
            >
              View All Posts
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

