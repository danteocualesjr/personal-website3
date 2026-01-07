import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="px-6 py-20 min-h-[60vh] flex items-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-6xl md:text-8xl mb-8">
          404
        </h1>
        <p className="text-[--muted] text-xl mb-8">
          Page not found.
        </p>
        <Link href="/" className="hover-line">
          Go home
        </Link>
      </div>
    </div>
  )
}
