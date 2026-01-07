'use client'

import { useState } from 'react'

const books = [
  { title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', status: 'read', rating: 5 },
  { title: 'Atomic Habits', author: 'James Clear', status: 'read', rating: 5 },
  { title: 'Project Hail Mary', author: 'Andy Weir', status: 'read', rating: 5 },
  { title: 'The Midnight Library', author: 'Matt Haig', status: 'read', rating: 4 },
  { title: 'Clean Code', author: 'Robert C. Martin', status: 'read', rating: 5 },
  { title: 'Dune', author: 'Frank Herbert', status: 'read', rating: 5 },
  { title: 'The Pragmatic Programmer', author: 'Andrew Hunt', status: 'reading', rating: null },
  { title: 'Klara and the Sun', author: 'Kazuo Ishiguro', status: 'want', rating: null },
  { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', status: 'want', rating: null },
]

export default function Bookshelf() {
  const [filter, setFilter] = useState<'all' | 'read' | 'reading' | 'want'>('all')
  
  const filtered = filter === 'all' 
    ? books 
    : books.filter(b => b.status === filter)

  return (
    <div className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl mb-8 animate-in">
          Bookshelf
        </h1>
        <p className="text-[--muted] text-xl mb-12 animate-in delay-1">
          Books that have shaped my thinking.
        </p>
        
        {/* Stats */}
        <div className="flex gap-8 mb-12 text-sm">
          <span>{books.filter(b => b.status === 'read').length} read</span>
          <span className="text-[--muted]">{books.filter(b => b.status === 'reading').length} reading</span>
          <span className="text-[--muted]">{books.filter(b => b.status === 'want').length} to read</span>
        </div>
        
        {/* Filter */}
        <div className="flex gap-6 mb-16 text-sm">
          <button 
            onClick={() => setFilter('all')}
            className={filter === 'all' ? '' : 'text-[--muted]'}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('read')}
            className={filter === 'read' ? '' : 'text-[--muted]'}
          >
            Read
          </button>
          <button 
            onClick={() => setFilter('reading')}
            className={filter === 'reading' ? '' : 'text-[--muted]'}
          >
            Reading
          </button>
          <button 
            onClick={() => setFilter('want')}
            className={filter === 'want' ? '' : 'text-[--muted]'}
          >
            To Read
          </button>
        </div>
        
        {/* Books */}
        <div className="space-y-8">
          {filtered.map((book, i) => (
            <div key={i} className="group">
              <h3 className="text-xl mb-1">{book.title}</h3>
              <p className="text-[--muted]">
                {book.author}
                {book.rating && (
                  <span className="ml-3">
                    {'★'.repeat(book.rating)}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
