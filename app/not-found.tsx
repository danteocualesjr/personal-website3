import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-amber-600 dark:text-amber-400 text-sm uppercase tracking-[0.3em] mb-6">
          Error 404
        </p>
        <h1 className="font-serif text-6xl md:text-8xl font-medium text-gray-900 dark:text-white mb-8">
          Page not<br />
          <span className="italic">found</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-12">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm uppercase tracking-widest hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
