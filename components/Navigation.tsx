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

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[--bg]/80 backdrop-blur-md border-b border-[--border]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/" 
            className="text-xl tracking-tight hover:opacity-70 transition-opacity duration-300"
          >
            Dante Cuales
          </Link>
          
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            <Link 
              href="/about" 
              className={`text-sm transition-colors duration-300 hover-line ${
                isActive('/about') ? 'text-[--text]' : 'text-[--muted] hover:text-[--text]'
              }`}
            >
              About
            </Link>
            <Link 
              href="/portfolio" 
              className={`text-sm transition-colors duration-300 hover-line ${
                isActive('/portfolio') ? 'text-[--text]' : 'text-[--muted] hover:text-[--text]'
              }`}
            >
              Work
            </Link>
            <Link 
              href="/blog" 
              className={`text-sm transition-colors duration-300 hover-line ${
                isActive('/blog') ? 'text-[--text]' : 'text-[--muted] hover:text-[--text]'
              }`}
            >
              Writing
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm transition-colors duration-300 hover-line ${
                isActive('/contact') ? 'text-[--text]' : 'text-[--muted] hover:text-[--text]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
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
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 py-8 space-y-6 border-t border-[--border] bg-[--bg]">
          <Link 
            href="/about" 
            className={`block text-2xl transition-opacity duration-300 ${isActive('/about') ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/portfolio" 
            className={`block text-2xl transition-opacity duration-300 ${isActive('/portfolio') ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
            onClick={() => setIsOpen(false)}
          >
            Work
          </Link>
          <Link 
            href="/blog" 
            className={`block text-2xl transition-opacity duration-300 ${isActive('/blog') ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
            onClick={() => setIsOpen(false)}
          >
            Writing
          </Link>
          <Link 
            href="/fiction" 
            className={`block text-2xl transition-opacity duration-300 ${isActive('/fiction') ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
            onClick={() => setIsOpen(false)}
          >
            Fiction
          </Link>
          <Link 
            href="/bookshelf" 
            className={`block text-2xl transition-opacity duration-300 ${isActive('/bookshelf') ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
            onClick={() => setIsOpen(false)}
          >
            Bookshelf
          </Link>
          <Link 
            href="/contact" 
            className={`block text-2xl transition-opacity duration-300 ${isActive('/contact') ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
