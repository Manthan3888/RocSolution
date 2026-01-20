'use client'

import { motion } from 'framer-motion'
import { Code, Server, Smartphone, Cloud, Brain, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Code,
    title: 'React.js Development',
    description: 'Build modern, responsive web applications with React.js',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Server,
    title: 'Node.js Solutions',
    description: 'Scalable backend services and APIs with Node.js',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Smartphone,
    title: 'React Native',
    description: 'Cross-platform mobile apps for iOS and Android',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Cloud,
    title: 'AWS Cloud Services',
    description: 'Cloud infrastructure and deployment solutions',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Brain,
    title: 'AI/ML Services',
    description: 'Intelligent solutions powered by artificial intelligence',
    color: 'from-indigo-500 to-purple-500',
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
            <span className="text-white">Our </span>
            <span className="bg-gradient-blue bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-light/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all pointer-events-none" />
                <div className="relative bg-navy-light/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 sm:p-8 h-full hover:border-primary-500/50 transition-all z-10">
                  <motion.div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-6`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-accent-light hover:text-accent-light/80 group-hover:gap-2 gap-1 transition-all"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/services"
              className="px-8 py-4 bg-gradient-blue rounded-lg text-white font-semibold text-lg glow-blue inline-flex items-center gap-2 cursor-pointer"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
