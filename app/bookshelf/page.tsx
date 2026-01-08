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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-[--border]">
          <div>
            <p className="text-4xl md:text-5xl mb-2">{books.filter(b => b.status === 'read').length}</p>
            <p className="text-sm text-[--muted] uppercase tracking-wider">Read</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl mb-2">{books.filter(b => b.status === 'reading').length}</p>
            <p className="text-sm text-[--muted] uppercase tracking-wider">Reading</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl mb-2">{books.filter(b => b.status === 'want').length}</p>
            <p className="text-sm text-[--muted] uppercase tracking-wider">To Read</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl mb-2">{books.length}</p>
            <p className="text-sm text-[--muted] uppercase tracking-wider">Total</p>
          </div>
        </div>
        
        {/* Filter */}
        <div className="flex flex-wrap gap-4 mb-16 text-sm">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 transition-colors duration-300 hover-line ${
              filter === 'all' ? 'text-[--text]' : 'text-[--muted] hover:text-[--text]'
            }`}
          >
            All ({books.length})
          </button>
          <button 
            onClick={() => setFilter('read')}
            className={`px-4 py-2 transition-colors duration-300 hover-line ${
              filter === 'read' ? 'text-[--text]' : 'text-[--muted] hover:text-[--text]'
            }`}
          >
            Read ({books.filter(b => b.status === 'read').length})
          </button>
          <button 
            onClick={() => setFilter('reading')}
            className={`px-4 py-2 transition-colors duration-300 hover-line ${
              filter === 'reading' ? 'text-[--text]' : 'text-[--muted] hover:text-[--text]'
            }`}
          >
            Reading ({books.filter(b => b.status === 'reading').length})
          </button>
          <button 
            onClick={() => setFilter('want')}
            className={`px-4 py-2 transition-colors duration-300 hover-line ${
              filter === 'want' ? 'text-[--text]' : 'text-[--muted] hover:text-[--text]'
            }`}
          >
            To Read ({books.filter(b => b.status === 'want').length})
          </button>
        </div>
        
        {/* Books */}
        <div className="space-y-0">
          {filtered.map((book, i) => (
            <div key={i} className="py-8 border-b border-[--border] last:border-0">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-9">
                  <h3 className="text-xl md:text-2xl mb-2">{book.title}</h3>
                  <p className="text-[--muted] text-lg">{book.author}</p>
                </div>
                <div className="md:col-span-3 flex md:justify-end">
                  {book.rating && (
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < book.rating!
                              ? 'text-[--text]'
                              : 'text-[--border]'
                          }`}
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
