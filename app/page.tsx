import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center px-6 pt-12 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[--accent] blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[--secondary] blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.08] mb-20 animate-in text-balance">
            Building{' '}
            <a 
              href="https://nativestack.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[--accent] hover:text-[--accent-dark] transition-colors duration-500 hover-line-accent font-medium italic focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded relative inline-block"
            >
              NativeStack AI
            </a>
            {' '}and exploring ideas through technology and words.
          </h1>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-5 text-lg md:text-xl animate-in delay-1">
            <Link 
              href="/about" 
              className="hover-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded transition-all duration-300 hover:opacity-80 hover:translate-x-1"
            >
              About me
            </Link>
            <span className="text-[--muted] text-sm" aria-hidden="true">·</span>
            <Link 
              href="/portfolio" 
              className="hover-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded transition-all duration-300 hover:opacity-80 hover:translate-x-1"
            >
              View work
            </Link>
            <span className="text-[--muted] text-sm" aria-hidden="true">·</span>
            <Link 
              href="/blog" 
              className="hover-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--secondary] focus-visible:rounded transition-all duration-300 hover:opacity-80 hover:translate-x-1"
            >
              Read writing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
