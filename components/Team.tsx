'use client'

import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Expert Developers',
    role: 'Full-Stack Team',
    description: 'Skilled professionals in React.js, Node.js, and modern web technologies',
  },
  {
    name: 'Mobile Specialists',
    role: 'React Native Experts',
    description: 'Creating seamless cross-platform mobile experiences',
  },
  {
    name: 'Cloud Architects',
    role: 'AWS Professionals',
    description: 'Designing scalable and secure cloud infrastructures',
  },
  {
    name: 'AI/ML Engineers',
    role: 'Data Scientists',
    description: 'Building intelligent solutions with machine learning',
  },
]

export default function Team() {
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
              Expert Team
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Meet the talented professionals behind ROC Solution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-blue rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none" />
              <div className="relative bg-navy-light/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 sm:p-8 text-center h-full hover:border-primary-500/50 transition-all z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-blue rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-accent-light mb-3 sm:mb-4 text-sm sm:text-base">{member.role}</p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
