'use client'

import React, { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  category: string
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
    link: 'https://example.com',
    github: 'https://github.com/example',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates and team collaboration features.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    category: 'Web Application',
    link: 'https://example.com',
    github: 'https://github.com/example',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts and interactive maps.',
    technologies: ['React', 'Tailwind CSS', 'Weather API'],
    category: 'Frontend',
    link: 'https://example.com',
    github: 'https://github.com/example',
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support, syntax highlighting, and SEO optimization.',
    technologies: ['Next.js', 'Markdown', 'MDX'],
    category: 'Web Application',
    link: 'https://example.com',
    github: 'https://github.com/example',
  },
  {
    id: 5,
    title: 'Mobile App UI Design',
    description: 'UI/UX design for a fitness tracking mobile application with intuitive user flows.',
    technologies: ['Figma', 'Adobe XD', 'Prototyping'],
    category: 'Design',
  },
  {
    id: 6,
    title: 'API Integration Service',
    description: 'A microservice for integrating multiple third-party APIs with rate limiting and caching.',
    technologies: ['Node.js', 'Express', 'Redis', 'Docker'],
    category: 'Backend',
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
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A collection of my projects and work
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      View Project →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:underline font-medium"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

