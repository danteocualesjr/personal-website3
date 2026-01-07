import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[--border]">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <Link href="/" className="text-xl tracking-tight">
              Dante Cuales
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            <div className="space-y-4">
              <Link href="/about" className="block text-[--muted] hover:text-[--text] transition-colors">About</Link>
              <Link href="/portfolio" className="block text-[--muted] hover:text-[--text] transition-colors">Work</Link>
              <Link href="/blog" className="block text-[--muted] hover:text-[--text] transition-colors">Writing</Link>
            </div>
            <div className="space-y-4">
              <Link href="/fiction" className="block text-[--muted] hover:text-[--text] transition-colors">Fiction</Link>
              <Link href="/bookshelf" className="block text-[--muted] hover:text-[--text] transition-colors">Bookshelf</Link>
              <Link href="/contact" className="block text-[--muted] hover:text-[--text] transition-colors">Contact</Link>
            </div>
            <div className="space-y-4">
              <a href="https://nativestack.ai" target="_blank" rel="noopener noreferrer" className="block text-[--muted] hover:text-[--text] transition-colors">NativeStack AI</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block text-[--muted] hover:text-[--text] transition-colors">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-[--muted] hover:text-[--text] transition-colors">Twitter</a>
              <a href="https://www.linkedin.com/in/danteocualesjr/" target="_blank" rel="noopener noreferrer" className="block text-[--muted] hover:text-[--text] transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[--border] text-[--muted] text-sm">
          © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
