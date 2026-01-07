import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/markdown'

export async function generateStaticParams() {
  const posts = await getAllPosts('blog')
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug('blog', params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt || '',
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug('blog', params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20">
      <article className="py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-sm uppercase tracking-widest text-gray-500 dark:text-gray-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors mb-12"
          >
            <span className="mr-2">←</span>
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <p className="text-amber-600 dark:text-amber-400 text-sm mb-4">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 dark:text-white leading-[1.1] mb-6">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Divider */}
          <div className="w-16 h-px bg-amber-500 dark:bg-amber-400 mb-12"></div>

          {/* Content */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm uppercase tracking-widest text-gray-500 dark:text-gray-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <span className="mr-2">←</span>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
