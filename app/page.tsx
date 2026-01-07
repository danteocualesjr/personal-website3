import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-amber-600 dark:text-amber-400 text-sm uppercase tracking-[0.3em] mb-6 animate-slide-up">
                Welcome
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 dark:text-white leading-[1.1] mb-8 animate-slide-up animation-delay-100">
                Developer,<br />
                Writer &<br />
                <span className="italic text-amber-600 dark:text-amber-400">Creative</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mb-10 leading-relaxed animate-slide-up animation-delay-200">
                I build thoughtful digital experiences and write stories that explore the human condition.
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-300">
                <Link
                  href="/portfolio"
                  className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm uppercase tracking-widest hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  View Work
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border border-gray-900 dark:border-white text-gray-900 dark:text-white text-sm uppercase tracking-widest hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
                >
                  About Me
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-fade-in animation-delay-400">
              <div className="relative">
                {/* Abstract decorative element */}
                <div className="aspect-square max-w-md">
                  <div className="relative w-full h-full">
                    <div className="absolute top-0 right-0 w-3/4 h-3/4 border-2 border-amber-500 dark:border-amber-400"></div>
                    <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-amber-100 dark:bg-amber-900/30"></div>
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gray-900 dark:bg-white flex items-center justify-center">
                      <span className="font-serif text-6xl text-white dark:text-gray-900 italic">✦</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-32 px-6 lg:px-8 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-amber-600 dark:text-amber-400 text-sm uppercase tracking-[0.3em] mb-4">
                Explore
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-gray-900 dark:text-white">
                Featured Content
              </h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="group block">
              <div className="aspect-[4/3] bg-gradient-to-br from-rose-100 to-rose-50 dark:from-rose-900/20 dark:to-gray-900 mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                  ✍️
                </div>
              </div>
              <h3 className="font-serif text-2xl text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                Blog
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Essays on technology, creativity, and life.
              </p>
            </Link>
            
            <Link href="/fiction" className="group block">
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900/20 dark:to-gray-900 mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                  📖
                </div>
              </div>
              <h3 className="font-serif text-2xl text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                Fiction
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Short stories and creative narratives.
              </p>
            </Link>
            
            <Link href="/bookshelf" className="group block">
              <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900/20 dark:to-gray-900 mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                  📚
                </div>
              </div>
              <h3 className="font-serif text-2xl text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                Bookshelf
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Books that shaped my thinking.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Writing Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-amber-600 dark:text-amber-400 text-sm uppercase tracking-[0.3em] mb-4">
                Latest
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-gray-900 dark:text-white">
                Recent Writing
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden md:block text-sm uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors link-underline"
            >
              View All
            </Link>
          </div>
          
          <div className="space-y-0 divide-y divide-gray-200 dark:divide-gray-800">
            <Link href="/blog/getting-started-with-nextjs" className="group block py-8 first:pt-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">January 15, 2024</p>
                  <h3 className="font-serif text-2xl md:text-3xl text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    Getting Started with Next.js
                  </h3>
                </div>
                <span className="text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity text-2xl">
                  →
                </span>
              </div>
            </Link>
            
            <Link href="/blog/art-of-clean-code" className="group block py-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">January 10, 2024</p>
                  <h3 className="font-serif text-2xl md:text-3xl text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    The Art of Clean Code
                  </h3>
                </div>
                <span className="text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity text-2xl">
                  →
                </span>
              </div>
            </Link>
            
            <Link href="/blog/journey-into-web-development" className="group block py-8 last:pb-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">January 5, 2024</p>
                  <h3 className="font-serif text-2xl md:text-3xl text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    My Journey into Web Development
                  </h3>
                </div>
                <span className="text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity text-2xl">
                  →
                </span>
              </div>
            </Link>
          </div>
          
          <div className="mt-12 md:hidden">
            <Link
              href="/blog"
              className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors link-underline"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-6 lg:px-8 bg-gray-900 dark:bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8">
            Let's create something<br />
            <span className="italic text-amber-400">together</span>
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can work together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-white text-gray-900 text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
