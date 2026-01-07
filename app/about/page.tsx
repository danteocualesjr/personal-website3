export const metadata = {
  title: 'About | Dante Cuales',
  description: 'Founder of NativeStack AI and writer',
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
            I'm the founder of{' '}
            <a 
              href="https://nativestack.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-line"
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
        <div className="mt-32">
          <h2 className="text-sm tracking-widest text-[--muted] uppercase mb-12">
            Experience
          </h2>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-3 gap-4">
              <p className="text-[--muted]">2023 — Present</p>
              <div className="md:col-span-2">
                <p className="font-medium">Founder & CEO</p>
                <p className="text-[--muted]">
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
            
            <div className="grid md:grid-cols-3 gap-4">
              <p className="text-[--muted]">2020 — 2023</p>
              <div className="md:col-span-2">
                <p className="font-medium">Software Developer</p>
                <p className="text-[--muted]">Various companies</p>
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
            <a 
              href="https://www.linkedin.com/in/danteocualesjr/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block hover-line w-fit"
            >
              LinkedIn
            </a>
            <a 
              href="https://nativestack.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block hover-line w-fit"
            >
              NativeStack AI
            </a>
            <a href="mailto:your.email@example.com" className="block hover-line w-fit">
              your.email@example.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
