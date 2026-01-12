import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center px-6 pt-12">
        <div className="max-w-6xl mx-auto w-full">
          <p className="text-[--accent] text-xs tracking-[0.15em] uppercase mb-10 animate-in font-medium">
            Founder · Writer
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.08] mb-20 animate-in delay-1 text-balance">
            Building{' '}
            <a 
              href="https://nativestack.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[--accent] hover:text-[--accent-dark] transition-colors duration-500 hover-line-accent font-medium italic focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
            >
              NativeStack AI
            </a>
            {' '}and exploring ideas through technology and words.
          </h1>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-5 text-lg md:text-xl animate-in delay-2">
            <Link 
              href="/about" 
              className="hover-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded transition-opacity duration-300 hover:opacity-80"
            >
              About me
            </Link>
            <span className="text-[--muted] text-sm" aria-hidden="true">·</span>
            <Link 
              href="/portfolio" 
              className="hover-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded transition-opacity duration-300 hover:opacity-80"
            >
              View work
            </Link>
            <span className="text-[--muted] text-sm" aria-hidden="true">·</span>
            <Link 
              href="/blog" 
              className="hover-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--secondary] focus-visible:rounded transition-opacity duration-300 hover:opacity-80"
            >
              Read writing
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-32 px-6 border-t border-[--border]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-20">
            <h2 className="text-xs tracking-[0.15em] text-[--accent] uppercase font-medium">
              Selected Work
            </h2>
            <Link 
              href="/portfolio" 
              className="text-sm text-[--muted] hover:text-[--accent] transition-colors duration-300 hover-line focus-visible:text-[--accent] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
            >
              View all →
            </Link>
          </div>
          
          <div className="space-y-0">
            <a 
              href="https://nativestack.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block py-12 border-b border-[--border] hover:border-[--accent]/40 transition-all duration-500 focus-visible:border-[--accent]/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[--accent] focus-visible:rounded"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <p className="text-[--muted] text-sm font-medium">2023 — Present</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl mb-5 group-hover:text-[--accent] group-focus-visible:text-[--accent] transition-colors duration-500">
                    NativeStack AI
                  </h3>
                  <p className="text-[--muted] text-lg leading-relaxed mb-6 max-w-2xl">
                    AI startup making artificial intelligence more accessible and practical. 
                    Leading product, engineering, and company strategy.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-[--accent] group-hover:text-[--accent-dark] transition-all duration-500 font-medium">
                    Visit website
                    <span className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-500 transform group-hover:translate-x-1.5">↗</span>
                  </span>
                </div>
              </div>
            </a>
            
            <Link 
              href="/portfolio" 
              className="group block py-12 border-b border-[--border] hover:border-[--accent]/40 transition-all duration-500 focus-visible:border-[--accent]/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[--accent] focus-visible:rounded"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <p className="text-[--muted] text-sm font-medium">2023</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl mb-5 group-hover:text-[--accent] group-focus-visible:text-[--accent] transition-colors duration-500">
                    Task Management App
                  </h3>
                  <p className="text-[--muted] text-lg leading-relaxed max-w-2xl">
                    Collaborative task management with real-time updates and team features.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link 
              href="/portfolio" 
              className="group block py-12 border-b border-[--border] hover:border-[--accent]/40 transition-all duration-500 last:border-0 focus-visible:border-[--accent]/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[--accent] focus-visible:rounded"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <p className="text-[--muted] text-sm font-medium">2022</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl mb-5 group-hover:text-[--accent] group-focus-visible:text-[--accent] transition-colors duration-500">
                    Weather Dashboard
                  </h3>
                  <p className="text-[--muted] text-lg leading-relaxed max-w-2xl">
                    Location-based weather forecasts with interactive maps and data visualization.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section className="py-32 px-6 border-t border-[--border]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-20">
            <h2 className="text-xs tracking-[0.15em] text-[--secondary] uppercase font-medium">
              Recent Writing
            </h2>
            <Link 
              href="/blog" 
              className="text-sm text-[--muted] hover:text-[--secondary] transition-colors duration-300 hover-line focus-visible:text-[--secondary] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--secondary] focus-visible:rounded"
            >
              View all →
            </Link>
          </div>
          
          <div className="space-y-0">
            <Link 
              href="/blog/getting-started-with-nextjs" 
              className="group block py-10 border-b border-[--border] hover:border-[--secondary]/40 transition-all duration-500 focus-visible:border-[--secondary]/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[--secondary] focus-visible:rounded"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <p className="text-[--muted] text-sm font-medium">January 2024</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4 group-hover:text-[--secondary] group-focus-visible:text-[--secondary] transition-colors duration-500">
                    Getting Started with Next.js
                  </h3>
                  <p className="text-[--muted] text-lg leading-relaxed max-w-2xl">
                    A comprehensive guide to building modern web applications with Next.js.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link 
              href="/blog/art-of-clean-code" 
              className="group block py-10 border-b border-[--border] hover:border-[--secondary]/40 transition-all duration-500 focus-visible:border-[--secondary]/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[--secondary] focus-visible:rounded"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <p className="text-[--muted] text-sm font-medium">January 2024</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4 group-hover:text-[--secondary] group-focus-visible:text-[--secondary] transition-colors duration-500">
                    The Art of Clean Code
                  </h3>
                  <p className="text-[--muted] text-lg leading-relaxed max-w-2xl">
                    Principles and practices for writing maintainable and elegant code.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link 
              href="/blog/journey-into-web-development" 
              className="group block py-10 border-b border-[--border] hover:border-[--secondary]/40 transition-all duration-500 last:border-0 focus-visible:border-[--secondary]/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[--secondary] focus-visible:rounded"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <p className="text-[--muted] text-sm font-medium">January 2024</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4 group-hover:text-[--secondary] group-focus-visible:text-[--secondary] transition-colors duration-500">
                    My Journey into Web Development
                  </h3>
                  <p className="text-[--muted] text-lg leading-relaxed max-w-2xl">
                    Reflecting on the path that led me to become a web developer.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-40 px-6 border-t border-[--border]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] mb-10 text-balance">
              Let's work together.
            </h2>
            <p className="text-[--muted] text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl">
              Have a project in mind, want to collaborate, or just want to say hello? 
              I'd love to hear from you.
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              <Link 
                href="/contact" 
                className="hover-line text-xl text-[--accent] hover:text-[--accent-dark] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
              >
                Get in touch →
              </Link>
              <span className="text-[--muted] text-sm" aria-hidden="true">·</span>
              <a 
                href="https://www.linkedin.com/in/danteocualesjr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover-line text-xl text-[--muted] hover:text-[--accent] transition-colors duration-300 focus-visible:text-[--accent] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
