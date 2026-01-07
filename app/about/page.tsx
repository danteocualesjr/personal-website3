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
    <div className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            Get to know who I am and what I do
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Bio Section */}
        <section className="mb-12 animate-fade-in">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl font-bold mr-4">
                👤
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Biography
              </h2>
            </div>
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
        <section className="mb-12 animate-fade-in">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl font-bold mr-4">
                ⚡
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Skills & Technologies
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 text-purple-700 dark:text-purple-300 px-4 py-3 rounded-xl text-center font-semibold border border-purple-200 dark:border-purple-800 hover:scale-105 hover:shadow-lg transition-all duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="mb-12 animate-fade-in">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-xl font-bold mr-4">
                🎯
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Interests & Hobbies
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 px-5 py-2.5 rounded-full text-sm font-semibold border border-gray-200 dark:border-gray-600 hover:scale-105 hover:shadow-md transition-all duration-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Background */}
        <section className="animate-fade-in">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-xl font-bold mr-4">
                💼
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Professional Background
              </h2>
            </div>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-4 border-gradient-to-b from-purple-500 to-blue-500 border-purple-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Software Developer
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3">
                  Current Company • 2022 - Present
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Building scalable web applications and working with modern technologies
                  to deliver exceptional user experiences.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-4 border-blue-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Freelance Web Developer
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  Self-Employed • 2020 - 2022
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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

