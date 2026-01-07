'use client'

import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  category: string
  year: string
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with user authentication, payment processing, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    category: 'Web Application',
    year: '2024',
    link: 'https://example.com',
    github: 'https://github.com/example',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates and team collaboration features.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    category: 'Web Application',
    year: '2023',
    link: 'https://example.com',
    github: 'https://github.com/example',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts and interactive maps.',
    technologies: ['React', 'Tailwind CSS', 'Weather API'],
    category: 'Frontend',
    year: '2023',
    link: 'https://example.com',
    github: 'https://github.com/example',
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support, syntax highlighting, and SEO optimization.',
    technologies: ['Next.js', 'Markdown', 'MDX'],
    category: 'Web Application',
    year: '2023',
    link: 'https://example.com',
    github: 'https://github.com/example',
  },
  {
    id: 5,
    title: 'Mobile App UI Design',
    description: 'UI/UX design for a fitness tracking mobile application with intuitive user flows.',
    technologies: ['Figma', 'Adobe XD', 'Prototyping'],
    category: 'Design',
    year: '2022',
  },
  {
    id: 6,
    title: 'API Integration Service',
    description: 'A microservice for integrating multiple third-party APIs with rate limiting and caching.',
    technologies: ['Node.js', 'Express', 'Redis', 'Docker'],
    category: 'Backend',
    year: '2022',
    github: 'https://github.com/example',
  },
]

export default function Portfolio() {
  const categories = ['All', 'Web Application', 'Frontend', 'Backend', 'Design']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-600 dark:text-amber-400 text-sm uppercase tracking-[0.3em] mb-6 animate-slide-up">
            Portfolio
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-gray-900 dark:text-white leading-[1.1] mb-8 animate-slide-up animation-delay-100">
            Selected<br />
            <span className="italic">work</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl animate-slide-up animation-delay-200">
            A collection of projects I've worked on, from web applications to design systems.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group py-12 first:pt-0 last:pb-0"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-1 text-sm text-gray-500 dark:text-gray-500">
                    {project.year}
                  </div>
                  
                  <div className="lg:col-span-7">
                    <h2 className="font-serif text-2xl md:text-3xl text-gray-900 dark:text-white mb-4 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-4 flex gap-4 lg:justify-end">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors link-underline"
                      >
                        Visit
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors link-underline"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 dark:text-white mb-8">
            Interested in working together?
          </h2>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm uppercase tracking-widest hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  )
}
