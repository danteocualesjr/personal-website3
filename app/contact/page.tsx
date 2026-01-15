'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1000)
  }

  return (
    <div className="px-6 py-24 pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 animate-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-8">
            Contact
          </h1>
          <p className="text-[--muted] text-xl md:text-2xl max-w-3xl leading-relaxed animate-in delay-1">
            Have a project in mind? Let's talk.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-20">
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-12" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm text-[--muted] mb-4 uppercase tracking-wider font-medium transition-colors duration-300">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full bg-transparent border-b-2 border-[--border] py-5 focus:border-[--accent] focus:outline-none transition-all duration-500 text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded placeholder:text-[--muted]/50 hover:border-[--accent]/50"
                placeholder="Your name"
                aria-required="true"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm text-[--muted] mb-4 uppercase tracking-wider font-medium transition-colors duration-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full bg-transparent border-b-2 border-[--border] py-5 focus:border-[--accent] focus:outline-none transition-all duration-500 text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded placeholder:text-[--muted]/50 hover:border-[--accent]/50"
                placeholder="your@email.com"
                aria-required="true"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm text-[--muted] mb-4 uppercase tracking-wider font-medium transition-colors duration-300">
                Message
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={7}
                className="w-full bg-transparent border-b-2 border-[--border] py-5 focus:border-[--accent] focus:outline-none transition-all duration-500 resize-none text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded placeholder:text-[--muted]/50 hover:border-[--accent]/50"
                placeholder="Tell me about your project..."
                aria-required="true"
              />
            </div>
            
            {status === 'sent' && (
              <div 
                role="status" 
                aria-live="polite"
                className="text-lg text-[--accent] animate-in font-medium"
              >
                Message sent. I'll be in touch.
              </div>
            )}
            
            <button
              type="submit"
              disabled={status === 'sending'}
              className="hover-line text-lg md:text-xl text-[--accent] hover:text-[--accent-dark] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded font-medium hover:translate-x-1 inline-flex items-center gap-2 group"
              aria-busy={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
              {status !== 'sending' && <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>}
            </button>
          </form>
          
          <div className="md:col-span-2 space-y-16">
            <div>
              <p className="text-sm text-[--muted] mb-6 uppercase tracking-wider font-medium">
                Email
              </p>
              <a 
                href="mailto:your.email@example.com" 
                className="hover-line text-xl md:text-2xl text-[--muted] hover:text-[--accent] transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
              >
                your.email@example.com
              </a>
            </div>
            
            <div>
              <p className="text-sm text-[--muted] mb-6 uppercase tracking-wider font-medium">
                Social
              </p>
              <div className="space-y-5">
                <a 
                  href="https://www.linkedin.com/in/danteocualesjr/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover-line text-xl md:text-2xl w-fit text-[--accent] hover:text-[--accent-dark] transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://nativestack.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover-line text-xl md:text-2xl w-fit text-[--accent] hover:text-[--accent-dark] transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
                >
                  NativeStack AI
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover-line text-xl md:text-2xl w-fit text-[--muted] hover:text-[--accent] transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] focus-visible:rounded"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
