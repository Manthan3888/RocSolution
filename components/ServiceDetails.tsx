'use client'

import { motion } from 'framer-motion'
import { Code, Server, Smartphone, Cloud, Brain, CheckCircle } from 'lucide-react'

const services = [
  {
    id: 'react',
    icon: Code,
    title: 'React.js Development',
    description: 'Build modern, responsive, and high-performance web applications with React.js',
    features: [
      'Custom React.js Applications',
      'Component-Based Architecture',
      'State Management Solutions',
      'Performance Optimization',
      'Responsive Design',
      'Progressive Web Apps',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'nodejs',
    icon: Server,
    title: 'Node.js Solutions',
    description: 'Scalable backend services, APIs, and server-side solutions with Node.js',
    features: [
      'RESTful & GraphQL APIs',
      'Microservices Architecture',
      'Real-time Applications',
      'Database Integration',
      'Authentication & Security',
      'Server Optimization',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'react-native',
    icon: Smartphone,
    title: 'React Native Development',
    description: 'Cross-platform mobile applications for iOS and Android with React Native',
    features: [
      'iOS & Android Apps',
      'Native Performance',
      'Code Reusability',
      'App Store Deployment',
      'Push Notifications',
      'Offline Capabilities',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'aws',
    icon: Cloud,
    title: 'AWS Cloud Services',
    description: 'Comprehensive cloud infrastructure and deployment solutions on AWS',
    features: [
      'Cloud Architecture Design',
      'Serverless Solutions',
      'CI/CD Pipelines',
      'Scalable Infrastructure',
      'Security & Compliance',
      'Cost Optimization',
    ],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    id: 'ai-ml',
    icon: Brain,
    title: 'AI/ML Services',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Chatbots & AI Assistants',
      'Data Science Solutions',
    ],
    color: 'from-indigo-500 to-purple-500',
  },
]

export default function ServiceDetails() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                  <motion.div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2 sm:space-x-3">
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent-light flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 0 ? 'lg:order-2' : ''}>
                  <motion.div
                    className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />
                    <div className="absolute inset-0 bg-navy-light/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl flex items-center justify-center">
                      <Icon className="w-24 h-24 sm:w-32 sm:h-32 text-primary-500/30" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
