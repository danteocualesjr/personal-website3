interface Book {
  title: string
  author: string
  genre: string
  rating?: number
  status: 'read' | 'reading' | 'want-to-read'
  notes?: string
  cover?: string
}

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  const statusColors = {
    'read': 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300',
    'reading': 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300',
    'want-to-read': 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300',
  }

  const statusLabels = {
    'read': 'Read',
    'reading': 'Reading',
    'want-to-read': 'Want to Read',
  }

  return (
    <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Book Cover Placeholder */}
      <div className="relative h-64 bg-gradient-to-br from-purple-400 via-blue-400 to-indigo-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        {book.cover ? (
          <img src={book.cover} alt={book.title} className="h-full w-full object-cover" />
        ) : (
          <div className="text-white text-center p-4 relative z-10">
            <div className="text-5xl mb-3">📚</div>
            <div className="text-sm font-bold">{book.title}</div>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm ${statusColors[book.status]} border border-white/20`}>
            {statusLabels[book.status]}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {book.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
            by {book.author}
          </p>
        </div>
        
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 text-purple-700 dark:text-purple-300 text-xs font-bold rounded-lg border border-purple-200 dark:border-purple-800">
            {book.genre}
          </span>
        </div>
        
        {book.rating && (
          <div className="mb-4">
            <div className="flex items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400 mr-2 font-semibold">Rating:</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < book.rating!
                        ? 'text-yellow-400 drop-shadow-sm'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {book.notes && (
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
            {book.notes}
          </p>
        )}
      </div>
    </div>
  )
}

