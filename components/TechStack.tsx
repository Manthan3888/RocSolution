'use client'

import { motion } from 'framer-motion'

const technologies = [
  'React.js',
  'Node.js',
  'React Native',
  'AWS',
  'AI/ML',
  'TypeScript',
  'Next.js',
  'MongoDB',
  'PostgreSQL',
  'Docker',
  'Kubernetes',
  'GraphQL',
]

export default function TechStack() {
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
              Technology Stack
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            We work with the latest and greatest technologies
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                type: 'spring',
                stiffness: 200,
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-navy-light/50 backdrop-blur-sm border border-primary-500/20 rounded-full text-white text-sm sm:text-base font-medium hover:border-primary-500/50 hover:bg-primary-500/10 transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
