import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content')

export interface PostData {
  slug: string
  title: string
  date: string
  excerpt?: string
  content: string
  [key: string]: any
}

export function getPostSlugs(directory: string): string[] {
  const fullPath = path.join(contentDirectory, directory)
  if (!fs.existsSync(fullPath)) {
    return []
  }
  return fs.readdirSync(fullPath)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
}

export async function getPostBySlug(
  directory: string,
  slug: string
): Promise<PostData | null> {
  const fullPath = path.join(contentDirectory, directory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)

  const contentHtml = processedContent.toString()

  return {
    slug,
    content: contentHtml,
    ...data,
  } as PostData
}

export async function getAllPosts(directory: string): Promise<PostData[]> {
  const slugs = getPostSlugs(directory)
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(directory, slug)
      return post
    })
  )

  return posts
    .filter((post): post is PostData => post !== null)
    .sort((a, b) => {
      const dateA = new Date(a.date || 0).getTime()
      const dateB = new Date(b.date || 0).getTime()
      return dateB - dateA
    })
}

