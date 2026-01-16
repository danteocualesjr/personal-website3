import Link from 'next/link'
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Projects and ventures',
  openGraph: {
    title: 'Work | Dante Cuales',
    description: 'Projects and ventures',
    url: `${siteConfig.url}/portfolio`,
  },
  twitter: {
    card: 'summary',
    title: 'Work | Dante Cuales',
    description: 'Projects and ventures',
  },
}

const projects = [
  {
    title: 'NativeStack AI',
    description: 'AI startup making artificial intelligence more accessible and practical. Leading product, engineering, and company strategy.',
    tech: 'AI, Product, Strategy',
    year: '2023 — Present',
    link: 'https://nativestack.ai',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce with authentication, payments, and admin dashboard.',
    tech: 'Next.js, TypeScript, PostgreSQL, Stripe',
    year: '2023',
    link: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates.',
    tech: 'React, Node.js, Socket.io, MongoDB',
    year: '2022',
    link: 'https://example.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'Location-based weather forecasts with interactive maps.',
    tech: 'React, Tailwind CSS, Weather API',
    year: '2022',
    link: 'https://example.com',
  },
  {
    title: 'API Integration Service',
    description: 'Microservice for third-party API integration with caching.',
    tech: 'Node.js, Express, Redis, Docker',
    year: '2021',
  },
]

export default function Portfolio() {
  return (
    <div className="px-6 py-24 pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 animate-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-8">
            Work
          </h1>
          <p className="text-[--muted] text-xl md:text-2xl max-w-3xl leading-relaxed animate-in delay-1">
            A selection of projects I've worked on.
          </p>
        </div>
        
        <div className="space-y-0">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group py-12 border-b border-[--border] hover:border-[--accent]/40 transition-all duration-500 last:border-0 focus-within:border-[--accent]/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[--accent-bg] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="grid md:grid-cols-12 gap-8 items-start relative z-10">
                <div className="md:col-span-3">
                  <p className="text-[--muted] text-sm font-medium group-hover:text-[--accent] transition-colors duration-500">{project.year}</p>
                </div>
                <div className="md:col-span-9">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 group-hover:text-[--accent] transition-colors duration-500">
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover-line-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded inline-flex items-center gap-2"
                      >
                        {project.title}
                        <span className="text-[--accent] opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                      </a>
                    ) : (
                      project.title
                    )}
                  </h2>
                  <p className="text-[--muted] text-lg leading-relaxed mb-5 max-w-2xl group-hover:text-[--text] transition-colors duration-500">
                    {project.description}
                  </p>
                  <p className="text-sm text-[--muted] font-medium group-hover:text-[--accent] transition-colors duration-500">
                    {project.tech}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
