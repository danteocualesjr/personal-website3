import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center px-6">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 animate-in">
            Developer & writer creating thoughtful 
            digital experiences and exploring ideas 
            through words.
          </h1>
          <div className="flex gap-6 animate-in delay-2">
            <Link href="/portfolio" className="hover-line">
              View work
            </Link>
            <Link href="/about" className="hover-line">
              About me
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-32 px-6 border-t border-[--border]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm tracking-widest text-[--muted] uppercase mb-16">
            Selected Work
          </h2>
          
          <div className="space-y-16">
            <Link href="/portfolio" className="group block">
              <p className="text-[--muted] mb-2">2024</p>
              <h3 className="text-3xl md:text-4xl group-hover:opacity-60 transition-opacity">
                E-Commerce Platform
              </h3>
            </Link>
            
            <Link href="/portfolio" className="group block">
              <p className="text-[--muted] mb-2">2023</p>
              <h3 className="text-3xl md:text-4xl group-hover:opacity-60 transition-opacity">
                Task Management App
              </h3>
            </Link>
            
            <Link href="/portfolio" className="group block">
              <p className="text-[--muted] mb-2">2023</p>
              <h3 className="text-3xl md:text-4xl group-hover:opacity-60 transition-opacity">
                Weather Dashboard
              </h3>
            </Link>
          </div>
          
          <div className="mt-16">
            <Link href="/portfolio" className="hover-line">
              All projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section className="py-32 px-6 border-t border-[--border]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm tracking-widest text-[--muted] uppercase mb-16">
            Recent Writing
          </h2>
          
          <div className="space-y-12">
            <Link href="/blog/getting-started-with-nextjs" className="group block">
              <p className="text-[--muted] text-sm mb-2">January 2024</p>
              <h3 className="text-2xl md:text-3xl group-hover:opacity-60 transition-opacity">
                Getting Started with Next.js
              </h3>
            </Link>
            
            <Link href="/blog/art-of-clean-code" className="group block">
              <p className="text-[--muted] text-sm mb-2">January 2024</p>
              <h3 className="text-2xl md:text-3xl group-hover:opacity-60 transition-opacity">
                The Art of Clean Code
              </h3>
            </Link>
            
            <Link href="/blog/journey-into-web-development" className="group block">
              <p className="text-[--muted] text-sm mb-2">January 2024</p>
              <h3 className="text-2xl md:text-3xl group-hover:opacity-60 transition-opacity">
                My Journey into Web Development
              </h3>
            </Link>
          </div>
          
          <div className="mt-16">
            <Link href="/blog" className="hover-line">
              All posts →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-32 px-6 border-t border-[--border]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-8">
            Let's work together.
          </h2>
          <p className="text-[--muted] text-xl mb-8 max-w-xl">
            Have a project in mind? I'd love to hear about it.
          </p>
          <Link href="/contact" className="hover-line text-xl">
            Get in touch →
          </Link>
        </div>
      </section>
    </div>
  )
}
