export const metadata = {
  title: 'About | Your Name',
  description: 'About me',
}

export default function About() {
  return (
    <div className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl mb-16 animate-in">
          About
        </h1>
        
        <div className="space-y-8 text-xl leading-relaxed animate-in delay-1">
          <p>
            I'm a developer and writer based in San Francisco. I build digital 
            products and write about technology, creativity, and the human experience.
          </p>
          
          <p>
            My work focuses on creating simple, functional, and beautiful experiences. 
            I believe good design is invisible—it gets out of the way and lets 
            people accomplish what they came to do.
          </p>
          
          <p>
            When I'm not coding, I'm usually reading, writing fiction, or exploring 
            new places. I'm drawn to stories about people finding meaning in 
            unexpected places.
          </p>
        </div>
        
        {/* Experience */}
        <div className="mt-32">
          <h2 className="text-sm tracking-widest text-[--muted] uppercase mb-12">
            Experience
          </h2>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-3 gap-4">
              <p className="text-[--muted]">2022 — Present</p>
              <div className="md:col-span-2">
                <p className="font-medium">Software Developer</p>
                <p className="text-[--muted]">Current Company</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <p className="text-[--muted]">2020 — 2022</p>
              <div className="md:col-span-2">
                <p className="font-medium">Freelance Developer</p>
                <p className="text-[--muted]">Self-employed</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills */}
        <div className="mt-32">
          <h2 className="text-sm tracking-widest text-[--muted] uppercase mb-12">
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 text-[--muted]">
            <p>JavaScript / TypeScript</p>
            <p>React / Next.js</p>
            <p>Node.js</p>
            <p>Python</p>
            <p>HTML / CSS</p>
            <p>UI / UX Design</p>
          </div>
        </div>
        
        {/* Connect */}
        <div className="mt-32">
          <h2 className="text-sm tracking-widest text-[--muted] uppercase mb-12">
            Connect
          </h2>
          
          <div className="space-y-4">
            <a href="mailto:your.email@example.com" className="block hover-line w-fit">
              your.email@example.com
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block hover-line w-fit">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block hover-line w-fit">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
