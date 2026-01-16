import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import StructuredData from '@/components/StructuredData'
import { getPostBySlug, getAllPosts } from '@/lib/markdown'
import { siteConfig } from '@/lib/site'
import { getArticleSchema } from '@/lib/structured-data'

export async function generateStaticParams() {
  const posts = await getAllPosts('blog')
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug('blog', params.slug)
  if (!post) {
    return {
      title: 'Not Found',
    }
  }

  const postUrl = `${siteConfig.url}/blog/${params.slug}`
  const postTitle = `${post.title} | Dante Cuales`
  const postDescription = post.excerpt || post.title

  return {
    title: post.title,
    description: postDescription,
    openGraph: {
      title: postTitle,
      description: postDescription,
      url: postUrl,
      type: 'article',
      publishedTime: post.date,
      authors: [siteConfig.author],
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: postTitle,
      description: postDescription,
      creator: siteConfig.twitterHandle,
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug('blog', params.slug)
  if (!post) notFound()

  const postUrl = `${siteConfig.url}/blog/${params.slug}`
  const articleSchema = getArticleSchema(
    post.title,
    postUrl,
    post.date,
    post.dateModified,
    post.excerpt || post.title
  )

  return (
    <>
      <StructuredData data={articleSchema} />
      <div className="px-6 py-24 pt-32">
      <article className="max-w-4xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-[--muted] hover:text-[--text] transition-colors duration-500 mb-20 hover-line group focus-visible:text-[--text] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--secondary] focus-visible:rounded"
        >
          <span className="transition-transform duration-500 group-hover:-translate-x-1">←</span>
          Back to Writing
        </Link>
        
        <header className="mb-20">
          <p className="text-[--muted] text-sm mb-8 uppercase tracking-wider">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] mb-10">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-xl md:text-2xl text-[--muted] leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
          )}
        </header>
        
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        <footer className="mt-24 pt-12 border-t border-[--border]">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-[--muted] hover:text-[--text] transition-all duration-500 hover-line group focus-visible:text-[--text] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--secondary] focus-visible:rounded"
          >
            <span className="transition-transform duration-500 group-hover:-translate-x-1">←</span>
            More writing
          </Link>
        </footer>
      </article>
    </div>
    </>
  )
}
