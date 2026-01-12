'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[--bg]/80 backdrop-blur-md border-b border-[--border] transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/" 
            className="text-xl tracking-tight hover:opacity-70 transition-opacity duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
            aria-label="Home"
          >
            Dante Cuales
          </Link>
          
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/about" 
              className={`text-sm transition-colors duration-500 hover-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded ${
                isActive('/about') ? 'text-[--accent]' : 'text-[--muted] hover:text-[--accent]'
              }`}
            >
              About
            </Link>
            <Link 
              href="/portfolio" 
              className={`text-sm transition-colors duration-500 hover-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded ${
                isActive('/portfolio') ? 'text-[--accent]' : 'text-[--muted] hover:text-[--accent]'
              }`}
            >
              Work
            </Link>
            <Link 
              href="/blog" 
              className={`text-sm transition-colors duration-500 hover-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--secondary] focus-visible:rounded ${
                isActive('/blog') ? 'text-[--secondary]' : 'text-[--muted] hover:text-[--secondary]'
              }`}
            >
              Writing
            </Link>
            <Link 
              href="/fiction" 
              className={`text-sm transition-colors duration-500 hover-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--secondary] focus-visible:rounded ${
                isActive('/fiction') ? 'text-[--secondary]' : 'text-[--muted] hover:text-[--secondary]'
              }`}
            >
              Fiction
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm transition-colors duration-500 hover-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded ${
                isActive('/contact') ? 'text-[--accent]' : 'text-[--muted] hover:text-[--accent]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 -mr-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <div className="w-6 space-y-1.5">
              <span className={`block h-px bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-px bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-px bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-10 space-y-8 border-t border-[--border] bg-[--bg]/95 backdrop-blur-md">
          <Link 
            href="/about" 
            className={`block text-2xl transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded ${
              isActive('/about') ? 'opacity-100 text-[--accent] font-medium' : 'opacity-70 hover:opacity-100 hover:text-[--accent]'
            }`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/portfolio" 
            className={`block text-2xl transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded ${
              isActive('/portfolio') ? 'opacity-100 text-[--accent] font-medium' : 'opacity-70 hover:opacity-100 hover:text-[--accent]'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Work
          </Link>
          <Link 
            href="/blog" 
            className={`block text-2xl transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--secondary] focus-visible:rounded ${
              isActive('/blog') ? 'opacity-100 text-[--secondary] font-medium' : 'opacity-70 hover:opacity-100 hover:text-[--secondary]'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Writing
          </Link>
          <Link 
            href="/fiction" 
            className={`block text-2xl transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--secondary] focus-visible:rounded ${
              isActive('/fiction') ? 'opacity-100 text-[--secondary] font-medium' : 'opacity-70 hover:opacity-100 hover:text-[--secondary]'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Fiction
          </Link>
          <Link 
            href="/bookshelf" 
            className={`block text-2xl transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded ${
              isActive('/bookshelf') ? 'opacity-100 text-[--accent] font-medium' : 'opacity-70 hover:opacity-100 hover:text-[--accent]'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Bookshelf
          </Link>
          <Link 
            href="/contact" 
            className={`block text-2xl transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded ${
              isActive('/contact') ? 'opacity-100 text-[--accent] font-medium' : 'opacity-70 hover:opacity-100 hover:text-[--accent]'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
