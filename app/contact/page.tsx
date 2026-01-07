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
    <div className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl mb-8 animate-in">
          Contact
        </h1>
        <p className="text-[--muted] text-xl mb-16 animate-in delay-1">
          Have a project in mind? Let's talk.
        </p>
        
        <div className="grid md:grid-cols-2 gap-20">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm text-[--muted] mb-2">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full bg-transparent border-b border-[--border] py-3 focus:border-[--text] focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm text-[--muted] mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full bg-transparent border-b border-[--border] py-3 focus:border-[--text] focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm text-[--muted] mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="w-full bg-transparent border-b border-[--border] py-3 focus:border-[--text] focus:outline-none transition-colors resize-none"
              />
            </div>
            
            {status === 'sent' && (
              <p className="text-sm">Message sent. I'll be in touch.</p>
            )}
            
            <button
              type="submit"
              disabled={status === 'sending'}
              className="hover-line disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
          </form>
          
          <div className="space-y-8">
            <div>
              <p className="text-sm text-[--muted] mb-2">Email</p>
              <a href="mailto:your.email@example.com" className="hover-line">
                your.email@example.com
              </a>
            </div>
            
            <div>
              <p className="text-sm text-[--muted] mb-2">Social</p>
              <div className="space-y-2">
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
      </div>
    </div>
  )
}
