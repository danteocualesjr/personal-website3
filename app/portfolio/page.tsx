import Link from 'next/link'

export const metadata = {
  title: 'Work | Your Name',
  description: 'Selected projects',
}

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce with authentication, payments, and admin dashboard.',
    tech: 'Next.js, TypeScript, PostgreSQL, Stripe',
    year: '2024',
    link: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates.',
    tech: 'React, Node.js, Socket.io, MongoDB',
    year: '2023',
    link: 'https://example.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'Location-based weather forecasts with interactive maps.',
    tech: 'React, Tailwind CSS, Weather API',
    year: '2023',
    link: 'https://example.com',
  },
  {
    title: 'Blog Platform',
    description: 'Modern blog with markdown support and SEO optimization.',
    tech: 'Next.js, MDX',
    year: '2023',
  },
  {
    title: 'API Integration Service',
    description: 'Microservice for third-party API integration with caching.',
    tech: 'Node.js, Express, Redis, Docker',
    year: '2022',
  },
]

export default function Portfolio() {
  return (
    <div className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl mb-8 animate-in">
          Work
        </h1>
        <p className="text-[--muted] text-xl mb-20 max-w-2xl animate-in delay-1">
          A selection of projects I've worked on.
        </p>
        
        <div className="space-y-20">
          {projects.map((project, i) => (
            <div key={i} className="group">
              <div className="grid md:grid-cols-4 gap-6">
                <p className="text-[--muted]">{project.year}</p>
                <div className="md:col-span-3">
                  <h2 className="text-2xl md:text-3xl mb-4">
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group-hover:opacity-60 transition-opacity"
                      >
                        {project.title}
                        <span className="text-[--muted] ml-2">↗</span>
                      </a>
                    ) : (
                      project.title
                    )}
                  </h2>
                  <p className="text-[--muted] mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm text-[--muted]">
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
