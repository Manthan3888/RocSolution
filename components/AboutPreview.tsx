'use client'

import { motion } from 'framer-motion'
import { Target, Users, Award, Zap } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Delivering excellence in every project',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled professionals dedicated to your success',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'Industry-leading standards and best practices',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Cutting-edge solutions for modern challenges',
  },
]

export default function AboutPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-navy-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-white">About </span>
              <span className="bg-gradient-blue bg-clip-text text-transparent">
                ROC Solution
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              We are a premier IT solutions company specializing in modern web and mobile development,
              cloud infrastructure, and artificial intelligence. Our team combines technical expertise
              with business acumen to deliver solutions that drive real results.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              With years of experience in React.js, Node.js, React Native, AWS, and AI/ML technologies,
              we help businesses transform their digital presence and achieve their goals.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className="px-8 py-4 bg-gradient-blue rounded-lg text-white font-semibold text-lg glow-blue inline-block cursor-pointer"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-navy-light/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-4 sm:p-6 hover:border-primary-500/50 transition-all"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-blue rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
