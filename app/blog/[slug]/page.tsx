import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/markdown'

export async function generateStaticParams() {
  const posts = await getAllPosts('blog')
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug('blog', params.slug)
  if (!post) return { title: 'Not Found' }
  return { title: `${post.title} | Your Name` }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug('blog', params.slug)
  if (!post) notFound()

  return (
    <div className="px-6 py-20">
      <article className="max-w-3xl mx-auto">
        <Link 
          href="/blog" 
          className="text-[--muted] hover:text-[--text] transition-colors mb-16 block"
        >
          ← Back
        </Link>
        
        <header className="mb-16">
          <p className="text-[--muted] mb-4">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h1 className="text-4xl md:text-5xl mb-6">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-xl text-[--muted]">
              {post.excerpt}
            </p>
          )}
        </header>
        
        <div 
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>
    </div>
  )
}
