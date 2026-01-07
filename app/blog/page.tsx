import Link from 'next/link'
import { getAllPosts } from '@/lib/markdown'

export const metadata = {
  title: 'Writing | Dante Cuales',
  description: 'Essays on AI, startups, and technology',
}

export default async function Blog() {
  const posts = await getAllPosts('blog')

  return (
    <div className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl mb-8 animate-in">
          Writing
        </h1>
        <p className="text-[--muted] text-xl mb-20 animate-in delay-1">
          Essays on technology, creativity, and life.
        </p>
        
        {posts.length === 0 ? (
          <p className="text-[--muted]">No posts yet.</p>
        ) : (
          <div className="space-y-16">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <p className="text-sm text-[--muted] mb-2">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </p>
                <h2 className="text-2xl md:text-3xl mb-3 group-hover:opacity-60 transition-opacity">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-[--muted]">
                    {post.excerpt}
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
