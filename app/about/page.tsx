export const metadata = {
  title: 'About | Personal Website',
  description: 'Learn more about me, my background, and my interests',
}

export default function About() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js',
    'Node.js', 'Python', 'UI/UX', 'Writing'
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-amber-600 dark:text-amber-400 text-sm uppercase tracking-[0.3em] mb-6 animate-slide-up">
                About
              </p>
              <h1 className="font-serif text-5xl md:text-6xl font-medium text-gray-900 dark:text-white leading-[1.1] mb-8 animate-slide-up animation-delay-100">
                The story<br />
                <span className="italic">behind the work</span>
              </h1>
            </div>
            
            <div className="animate-slide-up animation-delay-200">
              {/* Abstract decorative element */}
              <div className="aspect-square relative">
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
                  <div className="bg-amber-500 dark:bg-amber-400"></div>
                  <div className="border-2 border-gray-900 dark:border-white"></div>
                  <div className="border-2 border-amber-500 dark:border-amber-400"></div>
                  <div className="bg-gray-900 dark:bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 px-6 lg:px-8 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-light">
              Hello! I'm a developer and writer with a passion for creating meaningful digital experiences and compelling narratives.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              My journey in technology began with curiosity—a desire to understand how things work and how they can be made better. Over the years, this curiosity has evolved into a career dedicated to crafting beautiful, functional applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              When I'm not writing code, you'll find me exploring new books, crafting fiction, or working on personal projects that blend my technical and creative interests. I believe in continuous learning and staying curious about the world around us.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              This website serves as my digital home—a space to share my work, thoughts, and creative endeavors with the world.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-amber-600 dark:text-amber-400 text-sm uppercase tracking-[0.3em] mb-4">
                Expertise
              </p>
              <h2 className="font-serif text-4xl font-medium text-gray-900 dark:text-white mb-8">
                Skills & Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-amber-600 dark:text-amber-400 text-sm uppercase tracking-[0.3em] mb-4">
                Experience
              </p>
              <h2 className="font-serif text-4xl font-medium text-gray-900 dark:text-white mb-8">
                Professional Journey
              </h2>
              
              <div className="space-y-8">
                <div className="border-l-2 border-amber-500 dark:border-amber-400 pl-6">
                  <h3 className="font-serif text-xl text-gray-900 dark:text-white mb-1">
                    Software Developer
                  </h3>
                  <p className="text-amber-600 dark:text-amber-400 text-sm mb-3">
                    Current Company · 2022 - Present
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Building scalable web applications with modern technologies.
                  </p>
                </div>
                
                <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-6">
                  <h3 className="font-serif text-xl text-gray-900 dark:text-white mb-1">
                    Freelance Developer
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mb-3">
                    Self-Employed · 2020 - 2022
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Created custom web solutions for diverse clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 lg:px-8 bg-gray-900 dark:bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-amber-400 text-sm uppercase tracking-[0.3em] mb-4">
              Philosophy
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-8">
              What I believe in
            </h2>
            <blockquote className="font-serif text-2xl md:text-3xl text-gray-300 italic leading-relaxed">
              "Good design is about solving problems elegantly. Great design is about solving the right problems beautifully."
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  )
}
