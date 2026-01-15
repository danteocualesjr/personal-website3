'use client'

import { useState } from 'react'

const books = [
  { title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', status: 'read', rating: 5 },
  { title: 'Atomic Habits', author: 'James Clear', status: 'read', rating: 5 },
  { title: 'Project Hail Mary', author: 'Andy Weir', status: 'read', rating: 5 },
  { title: 'The Midnight Library', author: 'Matt Haig', status: 'read', rating: 4 },
  { title: 'Clean Code', author: 'Robert C. Martin', status: 'read', rating: 5 },
  { title: 'Dune', author: 'Frank Herbert', status: 'read', rating: 5 },
  { title: 'The Pragmatic Programmer', author: 'Andrew Hunt', status: 'reading' },
  { title: 'Klara and the Sun', author: 'Kazuo Ishiguro', status: 'want' },
  { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', status: 'want' },
]

export default function Bookshelf() {
  const [filter, setFilter] = useState<'all' | 'read' | 'reading' | 'want'>('all')
  
  const filtered = filter === 'all' 
    ? books 
    : books.filter(b => b.status === filter)

  return (
    <div className="px-6 py-24 pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 animate-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-8">
            Bookshelf
          </h1>
          <p className="text-[--muted] text-xl md:text-2xl max-w-3xl leading-relaxed animate-in delay-1">
            Books that have shaped my thinking.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-20 border-b border-[--border]">
          <div className="animate-in delay-1">
            <p className="text-4xl md:text-5xl lg:text-6xl mb-3 font-medium">{books.filter(b => b.status === 'read').length}</p>
            <p className="text-sm text-[--muted] uppercase tracking-wider font-medium">Read</p>
          </div>
          <div className="animate-in delay-2">
            <p className="text-4xl md:text-5xl lg:text-6xl mb-3 font-medium">{books.filter(b => b.status === 'reading').length}</p>
            <p className="text-sm text-[--muted] uppercase tracking-wider font-medium">Reading</p>
          </div>
          <div className="animate-in delay-3">
            <p className="text-4xl md:text-5xl lg:text-6xl mb-3 font-medium">{books.filter(b => b.status === 'want').length}</p>
            <p className="text-sm text-[--muted] uppercase tracking-wider font-medium">To Read</p>
          </div>
          <div className="animate-in delay-4">
            <p className="text-4xl md:text-5xl lg:text-6xl mb-3 font-medium">{books.length}</p>
            <p className="text-sm text-[--muted] uppercase tracking-wider font-medium">Total</p>
          </div>
        </div>
        
        {/* Filter */}
        <div className="flex flex-wrap gap-4 mb-20 text-sm">
          <button 
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 transition-all duration-500 hover-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded hover:translate-x-0.5 ${
              filter === 'all' ? 'text-[--accent] font-medium' : 'text-[--muted] hover:text-[--accent]'
            }`}
          >
            All ({books.length})
          </button>
          <button 
            onClick={() => setFilter('read')}
            className={`px-5 py-2.5 transition-all duration-500 hover-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded hover:translate-x-0.5 ${
              filter === 'read' ? 'text-[--accent] font-medium' : 'text-[--muted] hover:text-[--accent]'
            }`}
          >
            Read ({books.filter(b => b.status === 'read').length})
          </button>
          <button 
            onClick={() => setFilter('reading')}
            className={`px-5 py-2.5 transition-all duration-500 hover-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--secondary] focus-visible:rounded hover:translate-x-0.5 ${
              filter === 'reading' ? 'text-[--secondary] font-medium' : 'text-[--muted] hover:text-[--secondary]'
            }`}
          >
            Reading ({books.filter(b => b.status === 'reading').length})
          </button>
          <button 
            onClick={() => setFilter('want')}
            className={`px-5 py-2.5 transition-all duration-500 hover-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--muted] focus-visible:rounded hover:translate-x-0.5 ${
              filter === 'want' ? 'text-[--text] font-medium' : 'text-[--muted] hover:text-[--text]'
            }`}
          >
            To Read ({books.filter(b => b.status === 'want').length})
          </button>
        </div>
        
        {/* Books */}
        <div className="space-y-0">
          {filtered.map((book, i) => (
            <div 
              key={i} 
              className="group py-10 border-b border-[--border] hover:border-[--accent]/40 transition-all duration-500 last:border-0 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[--accent-bg] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="grid md:grid-cols-12 gap-8 items-start relative z-10">
                <div className="md:col-span-9">
                  <h3 className="text-xl md:text-2xl lg:text-3xl mb-3 group-hover:text-[--accent] transition-colors duration-500">{book.title}</h3>
                  <p className="text-[--muted] text-lg group-hover:text-[--text] transition-colors duration-500">{book.author}</p>
                </div>
                <div className="md:col-span-3 flex md:justify-end items-start">
                  {book.rating && (
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xl transition-all duration-500 group-hover:scale-110 ${
                            i < book.rating!
                              ? 'text-[--accent]'
                              : 'text-[--border]'
                          }`}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
