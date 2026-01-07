'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[--bg]/95 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-xl tracking-tight">
            Your Name
          </Link>
          
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-[--muted] hover:text-[--text] transition-colors hover-line">
              About
            </Link>
            <Link href="/portfolio" className="text-[--muted] hover:text-[--text] transition-colors hover-line">
              Work
            </Link>
            <Link href="/blog" className="text-[--muted] hover:text-[--text] transition-colors hover-line">
              Writing
            </Link>
            <Link href="/contact" className="text-[--muted] hover:text-[--text] transition-colors hover-line">
              Contact
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
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
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="px-6 py-8 space-y-6 border-t border-[--border]">
          <Link href="/about" className="block text-2xl" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/portfolio" className="block text-2xl" onClick={() => setIsOpen(false)}>Work</Link>
          <Link href="/blog" className="block text-2xl" onClick={() => setIsOpen(false)}>Writing</Link>
          <Link href="/fiction" className="block text-2xl" onClick={() => setIsOpen(false)}>Fiction</Link>
          <Link href="/bookshelf" className="block text-2xl" onClick={() => setIsOpen(false)}>Bookshelf</Link>
          <Link href="/contact" className="block text-2xl" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}
