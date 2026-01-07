export const metadata = {
  title: 'About | Personal Website',
  description: 'Learn more about me, my background, and my interests',
}

export default function About() {
  const skills = [
    'JavaScript/TypeScript',
    'React/Next.js',
    'Node.js',
    'Python',
    'HTML/CSS',
    'Git',
    'UI/UX Design',
    'Problem Solving',
  ]

  const interests = [
    'Web Development',
    'Creative Writing',
    'Reading',
    'Photography',
    'Travel',
    'Music',
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Get to know who I am and what I do
          </p>
        </div>

        {/* Bio Section */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Biography
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Hello! I'm a passionate developer and creative writer with a love for building
                beautiful, functional web applications and crafting compelling narratives.
                My journey in technology began with curiosity and has evolved into a career
                dedicated to creating meaningful digital experiences.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                When I'm not coding, you'll find me exploring new books, writing fiction,
                or working on personal projects that combine my technical and creative interests.
                I believe in continuous learning and staying curious about the world around us.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                This website serves as a space to share my work, thoughts, and creative endeavors.
                Feel free to explore my portfolio, read my blog, or check out my fiction writing.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg text-center font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Interests & Hobbies
            </h2>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Background */}
        <section>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Professional Background
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  Software Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Current Company • 2022 - Present
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Building scalable web applications and working with modern technologies
                  to deliver exceptional user experiences.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  Freelance Web Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Self-Employed • 2020 - 2022
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Worked with various clients to create custom web solutions and
                  establish their online presence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

