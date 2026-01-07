'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }, 1000)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-600 dark:text-amber-400 text-sm uppercase tracking-[0.3em] mb-6 animate-slide-up">
            Contact
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-gray-900 dark:text-white leading-[1.1] mb-8 animate-slide-up animation-delay-100">
            Let's<br />
            <span className="italic">connect</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl animate-slide-up animation-delay-200">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 dark:border-gray-800 focus:border-amber-500 dark:focus:border-amber-400 focus:ring-0 text-gray-900 dark:text-white text-lg transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 dark:border-gray-800 focus:border-amber-500 dark:focus:border-amber-400 focus:ring-0 text-gray-900 dark:text-white text-lg transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 dark:border-gray-800 focus:border-amber-500 dark:focus:border-amber-400 focus:ring-0 text-gray-900 dark:text-white text-lg resize-none transition-colors"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="py-4 text-amber-600 dark:text-amber-400">
                    Thank you for your message. I'll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm uppercase tracking-widest hover:bg-gray-800 dark:hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:pl-12 lg:border-l border-gray-200 dark:border-gray-800">
              <div className="space-y-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-4">
                    Email
                  </h3>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-xl text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-4">
                    Social
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xl text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xl text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xl text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-4">
                    Location
                  </h3>
                  <p className="text-xl text-gray-900 dark:text-white">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
