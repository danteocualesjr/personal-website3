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
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-10">
            <div>
              <label className="block text-sm text-[--muted] mb-3 uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full bg-transparent border-b-2 border-[--border] py-4 focus:border-[--text] focus:outline-none transition-colors duration-300 text-lg"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm text-[--muted] mb-3 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full bg-transparent border-b-2 border-[--border] py-4 focus:border-[--text] focus:outline-none transition-colors duration-300 text-lg"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm text-[--muted] mb-3 uppercase tracking-wider">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={6}
                className="w-full bg-transparent border-b-2 border-[--border] py-4 focus:border-[--text] focus:outline-none transition-colors duration-300 resize-none text-lg"
                placeholder="Tell me about your project..."
              />
            </div>
            
            {status === 'sent' && (
              <p className="text-lg text-[--muted]">Message sent. I'll be in touch.</p>
            )}
            
            <button
              type="submit"
              disabled={status === 'sending'}
              className="hover-line text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
          </form>
          
          <div className="md:col-span-2 space-y-12">
            <div>
              <p className="text-sm text-[--muted] mb-4 uppercase tracking-wider">
                Email
              </p>
              <a href="mailto:your.email@example.com" className="hover-line text-xl">
                your.email@example.com
              </a>
            </div>
            
            <div>
              <p className="text-sm text-[--muted] mb-4 uppercase tracking-wider">
                Social
              </p>
              <div className="space-y-4">
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
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover-line text-xl w-fit"
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
