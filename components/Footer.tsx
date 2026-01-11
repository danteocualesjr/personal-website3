import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[--border] mt-32">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          <div className="col-span-2 md:col-span-1">
            <Link 
              href="/" 
              className="text-xl tracking-tight hover:opacity-70 transition-opacity duration-300 block mb-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
            >
              Dante Cuales
            </Link>
            <p className="text-sm text-[--muted]">
              Founder & Writer
            </p>
          </div>
          
          <div>
            <p className="text-xs text-[--muted] uppercase tracking-wider mb-6 font-medium">Pages</p>
            <div className="space-y-3">
              <Link 
                href="/about" 
                className="block text-[--muted] hover:text-[--accent] transition-colors duration-300 hover-line w-fit focus-visible:text-[--accent]"
              >
                About
              </Link>
              <Link 
                href="/portfolio" 
                className="block text-[--muted] hover:text-[--accent] transition-colors duration-300 hover-line w-fit focus-visible:text-[--accent]"
              >
                Work
              </Link>
              <Link 
                href="/blog" 
                className="block text-[--muted] hover:text-[--secondary] transition-colors duration-300 hover-line w-fit focus-visible:text-[--secondary]"
              >
                Writing
              </Link>
            </div>
          </div>
          
          <div>
            <p className="text-xs text-[--muted] uppercase tracking-wider mb-6 font-medium">More</p>
            <div className="space-y-3">
              <Link 
                href="/fiction" 
                className="block text-[--muted] hover:text-[--secondary] transition-colors duration-300 hover-line w-fit focus-visible:text-[--secondary]"
              >
                Fiction
              </Link>
              <Link 
                href="/bookshelf" 
                className="block text-[--muted] hover:text-[--accent] transition-colors duration-300 hover-line w-fit focus-visible:text-[--accent]"
              >
                Bookshelf
              </Link>
              <Link 
                href="/contact" 
                className="block text-[--muted] hover:text-[--accent] transition-colors duration-300 hover-line w-fit focus-visible:text-[--accent]"
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <p className="text-xs text-[--muted] uppercase tracking-wider mb-6 font-medium">Online</p>
            <div className="space-y-3">
              <a 
                href="https://nativestack.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-[--muted] hover:text-[--accent] transition-colors duration-300 hover-line w-fit focus-visible:text-[--accent]"
              >
                NativeStack AI
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-[--muted] hover:text-[--accent] transition-colors duration-300 hover-line w-fit focus-visible:text-[--accent]"
              >
                GitHub
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-[--muted] hover:text-[--accent] transition-colors duration-300 hover-line w-fit focus-visible:text-[--accent]"
              >
                Twitter
              </a>
              <a 
                href="https://www.linkedin.com/in/danteocualesjr/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-[--muted] hover:text-[--accent] transition-colors duration-300 hover-line w-fit focus-visible:text-[--accent]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-12 border-t border-[--border] text-sm text-[--muted]">
          © {new Date().getFullYear()} Dante Cuales. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
