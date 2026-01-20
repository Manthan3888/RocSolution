'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-blue rounded-3xl blur-2xl opacity-20 pointer-events-none" />
      <div className="relative bg-navy-light/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Send us a message</h2>
        {submitted ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center py-12"
          >
            <CheckCircle className="w-16 h-16 text-accent-light mx-auto mb-4" />
            <p className="text-xl text-white">Thank you! We&apos;ll get back to you soon.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-navy-dark border border-primary-500/20 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-navy-dark border border-primary-500/20 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-gray-300 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-navy-dark border border-primary-500/20 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="Your company"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-navy-dark border border-primary-500/20 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-blue rounded-lg text-white font-semibold text-base sm:text-lg glow-blue flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </form>
        )}
      </div>
    </motion.div>
  )
}
