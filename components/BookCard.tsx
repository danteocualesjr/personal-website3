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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
      {/* Book Cover Placeholder */}
      <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
        {book.cover ? (
          <img src={book.cover} alt={book.title} className="h-full w-full object-cover" />
        ) : (
          <div className="text-white text-center p-4">
            <div className="text-4xl mb-2">📚</div>
            <div className="text-sm font-medium">{book.title}</div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {book.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              by {book.author}
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[book.status]}`}>
            {statusLabels[book.status]}
          </span>
        </div>
        
        <div className="mb-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {book.genre}
          </span>
        </div>
        
        {book.rating && (
          <div className="mb-3">
            <div className="flex items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Rating:</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < book.rating!
                        ? 'text-yellow-400'
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
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {book.notes}
          </p>
        )}
      </div>
    </div>
  )
}

