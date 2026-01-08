export const metadata = {
  title: 'About | Dante Cuales',
  description: 'Founder of NativeStack AI and writer',
}

export default function About() {
  return (
    <div className="px-6 py-24 pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-20 animate-in">
          About
        </h1>
        
        <div className="space-y-10 text-xl md:text-2xl leading-relaxed animate-in delay-1">
          <p>
            I'm the founder of{' '}
            <a 
              href="https://nativestack.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-line font-medium italic"
            >
              NativeStack AI
            </a>
            , an AI startup focused on making artificial intelligence more accessible and practical. 
            I lead product, engineering, and company strategy.
          </p>
          
          <p>
            Before starting NativeStack, I worked as a software developer building products across 
            various domains. That experience taught me what users actually need versus what 
            technologists think they need.
          </p>
          
          <p>
            I also write—both technical essays about building companies and products, and fiction 
            that explores what it means to be human in an increasingly technological world. 
            Writing helps me think clearly; sharing it helps others think with me.
          </p>
          
          <p>
            I believe the best technology feels invisible. It doesn't demand attention; it enables 
            focus. That philosophy guides everything I build and write.
          </p>
        </div>
        
        {/* Experience */}
        <div className="mt-40">
          <h2 className="text-xs tracking-[0.15em] text-[--muted] uppercase mb-16 font-medium">
            Experience
          </h2>
          
          <div className="space-y-0">
            <div className="grid md:grid-cols-12 gap-8 py-8 border-b border-[--border]">
              <div className="md:col-span-3">
                <p className="text-[--muted] text-sm font-medium">2023 — Present</p>
              </div>
              <div className="md:col-span-9">
                <p className="text-xl md:text-2xl mb-2">Founder & CEO</p>
                <p className="text-[--muted] text-lg">
                  <a 
                    href="https://nativestack.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover-line"
                  >
                    NativeStack AI
                  </a>
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-12 gap-8 py-8 border-b border-[--border] last:border-0">
              <div className="md:col-span-3">
                <p className="text-[--muted] text-sm font-medium">2020 — 2023</p>
              </div>
              <div className="md:col-span-9">
                <p className="text-xl md:text-2xl mb-2">Software Developer</p>
                <p className="text-[--muted] text-lg">Various companies</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills */}
        <div className="mt-40">
          <h2 className="text-xs tracking-[0.15em] text-[--muted] uppercase mb-16 font-medium">
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-6 text-lg text-[--muted]">
            <p>JavaScript / TypeScript</p>
            <p>React / Next.js</p>
            <p>Node.js</p>
            <p>Python</p>
            <p>HTML / CSS</p>
            <p>UI / UX Design</p>
          </div>
        </div>
        
        {/* Connect */}
        <div className="mt-40">
          <h2 className="text-xs tracking-[0.15em] text-[--muted] uppercase mb-16 font-medium">
            Connect
          </h2>
          
          <div className="space-y-6">
            <a 
              href="https://www.linkedin.com/in/danteocualesjr/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block hover-line text-xl w-fit"
            >
              LinkedIn
            </a>
            <a 
              href="https://nativestack.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block hover-line text-xl w-fit"
            >
              NativeStack AI
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="block hover-line text-xl w-fit"
            >
              your.email@example.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
