import Link from 'next/link'
import { getAllPosts } from '@/lib/markdown'

export const metadata = {
  title: 'Writing | Dante Cuales',
  description: 'Essays on AI, startups, and technology',
}

export default async function Blog() {
  const posts = await getAllPosts('blog')

  return (
    <div className="px-6 py-24 pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 animate-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-8">
            Writing
          </h1>
          <p className="text-[--muted] text-xl md:text-2xl max-w-3xl leading-relaxed animate-in delay-1">
            Essays on AI, startups, and technology.
          </p>
        </div>
        
        {posts.length === 0 ? (
          <p className="text-[--muted] text-lg">No posts yet.</p>
        ) : (
          <div className="space-y-0">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group block py-10 border-b border-[--border] hover:border-[--text]/30 transition-all duration-500 last:border-0"
              >
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-3">
                    <p className="text-[--muted] text-sm font-medium">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3 group-hover:opacity-75 transition-opacity duration-300">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-[--muted] text-lg leading-relaxed max-w-2xl">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
