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
    <div className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Bookshelf
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4">
            Books I've read, loved, and recommend
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
              Filter by Genre
            </label>
            <div className="flex flex-wrap gap-3">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    selectedGenre === genre
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
              Filter by Status
            </label>
            <div className="flex flex-wrap gap-3">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    selectedStatus === status
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg'
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
        <div className="mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Reading Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent mb-2">
                {books.filter(b => b.status === 'read').length}
              </div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Books Read</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                {books.filter(b => b.status === 'reading').length}
              </div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Currently Reading</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-2">
                {books.filter(b => b.status === 'want-to-read').length}
              </div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Want to Read</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
              <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
                {books.length}
              </div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Total Books</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

