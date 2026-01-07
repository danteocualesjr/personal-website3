'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Work' },
    { href: '/blog', label: 'Blog' },
    { href: '/fiction', label: 'Fiction' },
    { href: '/bookshelf', label: 'Bookshelf' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/90 dark:bg-[#0f0f0f]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/" 
            className="font-serif text-2xl font-semibold text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            Your Name
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors link-underline"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-900 dark:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-6 py-8 bg-[#faf8f5] dark:bg-[#0f0f0f] border-t border-gray-200 dark:border-gray-800">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-4 text-lg text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors border-b border-gray-100 dark:border-gray-800 last:border-0"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
