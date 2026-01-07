'use client'

import { useState } from 'react'
import BookCard from '@/components/BookCard'

export default function Bookshelf() {
  const books = [
    {
      title: 'The Seven Husbands of Evelyn Hugo',
      author: 'Taylor Jenkins Reid',
      genre: 'Fiction',
      rating: 5,
      status: 'read' as const,
      notes: 'A captivating story about ambition, love, and the price of fame.',
    },
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      genre: 'Self-Help',
      rating: 5,
      status: 'read' as const,
      notes: 'Practical guide to building good habits and breaking bad ones.',
    },
    {
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      genre: 'Science Fiction',
      rating: 5,
      status: 'read' as const,
      notes: 'An incredible space adventure with humor and heart.',
    },
    {
      title: 'The Midnight Library',
      author: 'Matt Haig',
      genre: 'Fiction',
      rating: 4,
      status: 'read' as const,
      notes: 'A thought-provoking exploration of life choices and regrets.',
    },
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      genre: 'Programming',
      rating: 5,
      status: 'read' as const,
      notes: 'Essential reading for any serious software developer.',
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      genre: 'Science Fiction',
      rating: 5,
      status: 'read' as const,
      notes: 'A masterpiece of science fiction world-building.',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt & David Thomas',
      genre: 'Programming',
      rating: 5,
      status: 'reading' as const,
      notes: 'Learning practical approaches to software development.',
    },
    {
      title: 'Klara and the Sun',
      author: 'Kazuo Ishiguro',
      genre: 'Science Fiction',
      status: 'want-to-read' as const,
    },
    {
      title: 'Designing Data-Intensive Applications',
      author: 'Martin Kleppmann',
      genre: 'Programming',
      status: 'want-to-read' as const,
    },
  ]

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

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Bookshelf
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Books I've read, loved, and recommend
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Filter by Genre
            </label>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedGenre === genre
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Filter by Status
            </label>
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedStatus === status
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Books Grid */}
        {filteredBooks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No books found matching your filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Reading Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {books.filter(b => b.status === 'read').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Books Read</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {books.filter(b => b.status === 'reading').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Currently Reading</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {books.filter(b => b.status === 'want-to-read').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Want to Read</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {books.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Books</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

