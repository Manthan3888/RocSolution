'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

export default function MissionVision() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-blue rounded-3xl blur-2xl opacity-20 pointer-events-none" />
            <div className="relative bg-navy-light/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 z-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-blue rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Our Mission</h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                To deliver exceptional IT solutions that empower businesses to thrive in the digital age.
                We combine technical expertise with innovative thinking to create solutions that drive
                real value and measurable results for our clients.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-blue rounded-3xl blur-2xl opacity-20 pointer-events-none" />
            <div className="relative bg-navy-light/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 z-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-blue rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Our Vision</h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                To be the leading IT solutions provider, recognized for innovation, excellence, and
                client success. We envision a future where technology seamlessly integrates with
                business goals, creating opportunities for growth and transformation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
