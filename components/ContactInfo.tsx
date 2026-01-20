'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@rocsolution.com',
    href: 'mailto:info@rocsolution.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Your City, Country',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM',
    href: '#',
  },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Contact Information</h2>
        <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
          We&apos;re here to help! Reach out to us through any of the following channels.
        </p>
      </div>

      <div className="space-y-4">
        {contactInfo.map((info, index) => {
          const Icon = info.icon
          return (
            <motion.a
              key={info.label}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-navy-light/50 backdrop-blur-sm border border-primary-500/20 rounded-xl hover:border-primary-500/50 transition-all group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-blue rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs sm:text-sm text-gray-400 mb-1">{info.label}</div>
                <div className="text-sm sm:text-base text-white font-medium break-words">{info.value}</div>
              </div>
            </motion.a>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 p-6 bg-gradient-blue/10 border border-primary-500/20 rounded-xl"
      >
        <MessageSquare className="w-8 h-8 text-accent-light mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Quick Response</h3>
        <p className="text-gray-300">
          We typically respond within 24 hours. For urgent matters, please call us directly.
        </p>
      </motion.div>
    </motion.div>
  )
}
