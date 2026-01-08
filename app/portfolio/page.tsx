import Link from 'next/link'

export const metadata = {
  title: 'Work | Dante Cuales',
  description: 'Projects and ventures',
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
              className="group py-10 border-b border-[--border] hover:border-[--text]/30 transition-all duration-500 last:border-0"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <p className="text-[--muted] text-sm font-medium">{project.year}</p>
                </div>
                <div className="md:col-span-9">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 group-hover:opacity-75 transition-opacity duration-300">
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover-line"
                      >
                        {project.title}
                        <span className="text-[--muted] ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
                      </a>
                    ) : (
                      project.title
                    )}
                  </h2>
                  <p className="text-[--muted] text-lg leading-relaxed mb-4 max-w-2xl">
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
