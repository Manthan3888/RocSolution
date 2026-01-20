'use client'

import { motion } from 'framer-motion'
import { Search, Code, Rocket, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We analyze your requirements and understand your business goals',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Our team builds your solution using best practices and modern technologies',
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description: 'We deploy your solution with proper testing and optimization',
  },
  {
    icon: CheckCircle,
    title: 'Support',
    description: 'Ongoing maintenance and support to ensure your success',
  },
]

export default function Process() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-navy-dark/50">
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
              Process
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            A proven methodology for delivering exceptional results
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-blue transform -translate-y-1/2" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="relative bg-navy-light/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 sm:p-8 text-center hover:border-primary-500/50 transition-all">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-blue rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {index + 1}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
