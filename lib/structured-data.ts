import { siteConfig } from './site'

export interface PersonSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  jobTitle?: string
  worksFor?: {
    '@type': string
    name: string
    url: string
  }
  sameAs?: string[]
  description?: string
}

export interface OrganizationSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  description?: string
  founder?: {
    '@type': string
    name: string
  }
}

export interface ArticleSchema {
  '@context': string
  '@type': string
  headline: string
  description?: string
  image?: string
  datePublished: string
  dateModified?: string
  author: {
    '@type': string
    name: string
    url?: string
  }
  publisher: {
    '@type': string
    name: string
    url: string
  }
  mainEntityOfPage: {
    '@type': string
    '@id': string
  }
}

export interface WebSiteSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  description: string
  publisher: {
    '@type': string
    name: string
  }
}

export function getPersonSchema(): PersonSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: 'Founder & CEO',
    worksFor: {
      '@type': 'Organization',
      name: 'NativeStack AI',
      url: 'https://nativestack.ai',
    },
    sameAs: [
      'https://www.linkedin.com/in/danteocualesjr/',
      'https://nativestack.ai',
    ],
    description: siteConfig.description,
  }
}

export function getOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NativeStack AI',
    url: 'https://nativestack.ai',
    description: 'AI startup making artificial intelligence more accessible and practical',
    founder: {
      '@type': 'Person',
      name: siteConfig.name,
    },
  }
}

export function getArticleSchema(
  title: string,
  url: string,
  datePublished: string,
  dateModified?: string,
  description?: string,
  image?: string
): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description || title,
    image: image || `${siteConfig.url}${siteConfig.ogImage}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: siteConfig.author,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

export function getWebSiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
    },
  }
}
