import Link from 'next/link'
import { getAllPosts } from '@/lib/markdown'

export const metadata = {
  title: 'Fiction | Dante Cuales',
  description: 'Short stories and creative writing',
}

export default async function Fiction() {
  const stories = await getAllPosts('fiction')

  return (
    <div className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl mb-8 animate-in">
          Fiction
        </h1>
        <p className="text-[--muted] text-xl mb-20 animate-in delay-1">
          Short stories and creative writing.
        </p>
        
        {stories.length === 0 ? (
          <p className="text-[--muted]">No stories yet.</p>
        ) : (
          <div className="space-y-16">
            {stories.map((story) => (
              <Link 
                key={story.slug} 
                href={`/fiction/${story.slug}`}
                className="group block"
              >
                <p className="text-sm text-[--muted] mb-2">
                  {new Date(story.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </p>
                <h2 className="text-2xl md:text-3xl mb-3 group-hover:opacity-60 transition-opacity italic">
                  {story.title}
                </h2>
                {story.excerpt && (
                  <p className="text-[--muted]">
                    {story.excerpt}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
