'use client'

import { useState } from 'react'

interface Book {
  title: string
  author: string
  genre: string
  rating?: number
  status: 'read' | 'reading' | 'want-to-read'
  notes?: string
}

const books: Book[] = [
  {
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    genre: 'Fiction',
    rating: 5,
    status: 'read',
    notes: 'A captivating story about ambition, love, and the price of fame.',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-Help',
    rating: 5,
    status: 'read',
    notes: 'Practical guide to building good habits and breaking bad ones.',
  },
  {
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    genre: 'Science Fiction',
    rating: 5,
    status: 'read',
    notes: 'An incredible space adventure with humor and heart.',
  },
  {
    title: 'The Midnight Library',
    author: 'Matt Haig',
    genre: 'Fiction',
    rating: 4,
    status: 'read',
    notes: 'A thought-provoking exploration of life choices and regrets.',
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    genre: 'Programming',
    rating: 5,
    status: 'read',
    notes: 'Essential reading for any serious software developer.',
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    rating: 5,
    status: 'read',
    notes: 'A masterpiece of science fiction world-building.',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt & David Thomas',
    genre: 'Programming',
    rating: 5,
    status: 'reading',
    notes: 'Learning practical approaches to software development.',
  },
  {
    title: 'Klara and the Sun',
    author: 'Kazuo Ishiguro',
    genre: 'Science Fiction',
    status: 'want-to-read',
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    genre: 'Programming',
    status: 'want-to-read',
  },
]

export default function Bookshelf() {
  const genres = ['All', 'Fiction', 'Science Fiction', 'Programming', 'Self-Help']
  const statuses = ['All', 'Read', 'Reading', 'Want to Read']
  
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')

  const filteredBooks = books.filter((book) => {
    const genreMatch = selectedGenre === 'All' || book.genre === selectedGenre
    const statusMatch = selectedStatus === 'All' || 
      (selectedStatus === 'Read' && book.status === 'read') ||
      (selectedStatus === 'Reading' && book.status === 'reading') ||
      (selectedStatus === 'Want to Read' && book.status === 'want-to-read')
    return genreMatch && statusMatch
  })

  const statusLabels = {
    'read': 'Read',
    'reading': 'Reading',
    'want-to-read': 'Want to Read',
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-600 dark:text-amber-400 text-sm uppercase tracking-[0.3em] mb-6 animate-slide-up">
            Bookshelf
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-gray-900 dark:text-white leading-[1.1] mb-8 animate-slide-up animation-delay-100">
            What I'm<br />
            <span className="italic">reading</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl animate-slide-up animation-delay-200">
            Books that have shaped my thinking and continue to inspire.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-200 dark:border-gray-800">
            <div>
              <p className="font-serif text-4xl text-gray-900 dark:text-white mb-2">
                {books.filter(b => b.status === 'read').length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                Books Read
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl text-gray-900 dark:text-white mb-2">
                {books.filter(b => b.status === 'reading').length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                Reading Now
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl text-gray-900 dark:text-white mb-2">
                {books.filter(b => b.status === 'want-to-read').length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                To Read
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl text-gray-900 dark:text-white mb-2">
                {books.length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                Total
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto space-y-6">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">
              Genre
            </p>
            <div className="flex flex-wrap gap-3">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-4 py-2 text-sm transition-colors ${
                    selectedGenre === genre
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                      : 'border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">
              Status
            </p>
            <div className="flex flex-wrap gap-3">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 text-sm transition-colors ${
                    selectedStatus === status
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                      : 'border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          {filteredBooks.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No books match your filters.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {filteredBooks.map((book, index) => (
                <div key={index} className="py-8 first:pt-0">
                  <div className="grid lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-2">
                      <div className="aspect-[2/3] bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-gray-900 w-full max-w-[120px]"></div>
                    </div>
                    
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                          {statusLabels[book.status]}
                        </span>
                        <span className="text-gray-300 dark:text-gray-700">·</span>
                        <span className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                          {book.genre}
                        </span>
                      </div>
                      <h2 className="font-serif text-xl md:text-2xl text-gray-900 dark:text-white mb-2">
                        {book.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        by {book.author}
                      </p>
                      {book.notes && (
                        <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">
                          {book.notes}
                        </p>
                      )}
                    </div>
                    
                    <div className="lg:col-span-3 flex lg:justify-end items-start">
                      {book.rating && (
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-lg ${
                                i < book.rating!
                                  ? 'text-amber-500 dark:text-amber-400'
                                  : 'text-gray-300 dark:text-gray-700'
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
          )}
        </div>
      </section>
    </div>
  )
}
