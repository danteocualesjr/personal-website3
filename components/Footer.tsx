import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[--border] mt-40 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[--accent] blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[--secondary] blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          <div className="col-span-2 md:col-span-1">
            <Link 
              href="/" 
              className="text-xl tracking-tight hover:opacity-70 transition-all duration-500 block mb-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded hover:translate-x-0.5"
            >
              Dante Cuales
            </Link>
            <p className="text-sm text-[--muted]">
              Founder & Writer
            </p>
          </div>
          
          <div>
            <p className="text-xs text-[--muted] uppercase tracking-wider mb-6 font-medium">Pages</p>
            <div className="space-y-4">
              <Link 
                href="/about" 
                className="block text-[--muted] hover:text-[--accent] transition-colors duration-500 hover-line w-fit focus-visible:text-[--accent] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
              >
                About
              </Link>
              <Link 
                href="/portfolio" 
                className="block text-[--muted] hover:text-[--accent] transition-colors duration-500 hover-line w-fit focus-visible:text-[--accent] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
              >
                Work
              </Link>
              <Link 
                href="/blog" 
                className="block text-[--muted] hover:text-[--secondary] transition-colors duration-500 hover-line w-fit focus-visible:text-[--secondary] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--secondary] focus-visible:rounded"
              >
                Writing
              </Link>
            </div>
          </div>
          
          <div>
            <p className="text-xs text-[--muted] uppercase tracking-wider mb-6 font-medium">More</p>
            <div className="space-y-4">
              <Link 
                href="/fiction" 
                className="block text-[--muted] hover:text-[--secondary] transition-colors duration-500 hover-line w-fit focus-visible:text-[--secondary] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--secondary] focus-visible:rounded"
              >
                Fiction
              </Link>
              <Link 
                href="/bookshelf" 
                className="block text-[--muted] hover:text-[--accent] transition-colors duration-500 hover-line w-fit focus-visible:text-[--accent] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
              >
                Bookshelf
              </Link>
              <Link 
                href="/contact" 
                className="block text-[--muted] hover:text-[--accent] transition-colors duration-500 hover-line w-fit focus-visible:text-[--accent] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <p className="text-xs text-[--muted] uppercase tracking-wider mb-6 font-medium">Online</p>
            <div className="space-y-4">
              <a 
                href="https://nativestack.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-[--muted] hover:text-[--accent] transition-colors duration-500 hover-line w-fit focus-visible:text-[--accent] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
              >
                NativeStack AI
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-[--muted] hover:text-[--accent] transition-colors duration-500 hover-line w-fit focus-visible:text-[--accent] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
              >
                GitHub
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-[--muted] hover:text-[--accent] transition-colors duration-500 hover-line w-fit focus-visible:text-[--accent] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
              >
                Twitter
              </a>
              <a 
                href="https://www.linkedin.com/in/danteocualesjr/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-[--muted] hover:text-[--accent] transition-colors duration-500 hover-line w-fit focus-visible:text-[--accent] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-12 border-t border-[--border] text-sm text-[--muted] relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--border] to-transparent"></div>
          <p className="relative z-10">© {new Date().getFullYear()} Dante Cuales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
