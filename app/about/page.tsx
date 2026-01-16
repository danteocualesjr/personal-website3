import type { Metadata } from 'next'
import StructuredData from '@/components/StructuredData'
import { siteConfig } from '@/lib/site'
import { getPersonSchema, getOrganizationSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'About',
  description: 'Founder of NativeStack AI and writer',
  openGraph: {
    title: 'About | Dante Cuales',
    description: 'Founder of NativeStack AI and writer',
    url: `${siteConfig.url}/about`,
  },
  twitter: {
    card: 'summary',
    title: 'About | Dante Cuales',
    description: 'Founder of NativeStack AI and writer',
  },
}

export default function About() {
  return (
    <>
      <StructuredData data={getPersonSchema()} />
      <StructuredData data={getOrganizationSchema()} />
      <div className="px-6 py-24 pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-24 animate-in">
          About
        </h1>
        
        <div className="space-y-12 text-xl md:text-2xl leading-relaxed animate-in delay-1">
          <p>
            I'm the founder of{' '}
            <a 
              href="https://nativestack.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[--accent] hover:text-[--accent-dark] transition-colors duration-500 hover-line-accent font-medium italic focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
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
          <h2 className="text-xs tracking-[0.15em] text-[--accent] uppercase mb-16 font-medium">
            Experience
          </h2>
          
          <div className="space-y-0">
            <div className="grid md:grid-cols-12 gap-8 py-10 border-b border-[--border] hover:border-[--accent]/30 transition-colors duration-500">
              <div className="md:col-span-3">
                <p className="text-[--muted] text-sm font-medium">2023 — Present</p>
              </div>
              <div className="md:col-span-9">
                <p className="text-xl md:text-2xl mb-3">Founder & CEO</p>
                <p className="text-[--muted] text-lg">
                  <a 
                    href="https://nativestack.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[--accent] hover:text-[--accent-dark] transition-colors duration-500 hover-line-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
                  >
                    NativeStack AI
                  </a>
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-12 gap-8 py-10 border-b border-[--border] last:border-0 hover:border-[--accent]/30 transition-colors duration-500">
              <div className="md:col-span-3">
                <p className="text-[--muted] text-sm font-medium">2020 — 2023</p>
              </div>
              <div className="md:col-span-9">
                <p className="text-xl md:text-2xl mb-3">Software Developer</p>
                <p className="text-[--muted] text-lg">Various companies</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills */}
        <div className="mt-40">
          <h2 className="text-xs tracking-[0.15em] text-[--secondary] uppercase mb-16 font-medium">
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
          <h2 className="text-xs tracking-[0.15em] text-[--accent] uppercase mb-16 font-medium">
            Connect
          </h2>
          
          <div className="space-y-6">
            <a 
              href="https://www.linkedin.com/in/danteocualesjr/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block hover-line text-xl w-fit text-[--accent] hover:text-[--accent-dark] transition-colors duration-500 focus-visible:text-[--accent-dark] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
            >
              LinkedIn
            </a>
            <a 
              href="https://nativestack.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block hover-line text-xl w-fit text-[--accent] hover:text-[--accent-dark] transition-colors duration-500 focus-visible:text-[--accent-dark] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
            >
              NativeStack AI
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="block hover-line text-xl w-fit text-[--muted] hover:text-[--accent] transition-colors duration-500 focus-visible:text-[--accent] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
            >
              your.email@example.com
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
