'use client'

import { motion } from 'framer-motion'
import { Briefcase, TrendingUp, Users, Zap, CheckCircle } from 'lucide-react'

const useCases = [
  {
    id: 1,
    title: 'E-Commerce Platform Development',
    industry: 'Retail',
    challenge: 'A retail company needed a scalable e-commerce platform to handle high traffic and provide seamless shopping experience.',
    solution: 'Built a modern React.js frontend with Node.js backend, integrated payment gateways, and deployed on AWS for scalability.',
    results: [
      '300% increase in online sales',
      '50% reduction in page load time',
      '99.9% uptime achieved',
      'Seamless mobile experience',
    ],
    technologies: ['React.js', 'Node.js', 'AWS', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Healthcare Mobile Application',
    industry: 'Healthcare',
    challenge: 'A healthcare provider required a mobile app for patient management, appointment scheduling, and telemedicine capabilities.',
    solution: 'Developed a React Native cross-platform app with secure backend APIs, HIPAA-compliant infrastructure, and real-time features.',
    results: [
      '40% increase in patient engagement',
      '60% reduction in appointment no-shows',
      'Secure patient data management',
      'Available on iOS and Android',
    ],
    technologies: ['React Native', 'Node.js', 'AWS', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'AI-Powered Analytics Dashboard',
    industry: 'Finance',
    challenge: 'A financial institution needed real-time analytics and predictive insights for better decision-making.',
    solution: 'Implemented AI/ML models for predictive analytics, built interactive dashboards with React.js, and deployed on AWS cloud infrastructure.',
    results: [
      '25% improvement in decision accuracy',
      'Real-time data processing',
      'Predictive insights for risk management',
      'Scalable cloud infrastructure',
    ],
    technologies: ['React.js', 'AI/ML', 'AWS', 'Python'],
  },
  {
    id: 4,
    title: 'SaaS Platform for Project Management',
    industry: 'Technology',
    challenge: 'A startup needed a comprehensive project management SaaS platform with collaboration features and integrations.',
    solution: 'Created a full-stack solution with React.js frontend, Node.js microservices architecture, and AWS cloud deployment.',
    results: [
      '10,000+ active users',
      '99.5% customer satisfaction',
      'Seamless third-party integrations',
      'Scalable microservices architecture',
    ],
    technologies: ['React.js', 'Node.js', 'AWS', 'GraphQL'],
  },
  {
    id: 5,
    title: 'Real-Time Communication Platform',
    industry: 'Communication',
    challenge: 'A company required a real-time messaging and video conferencing platform for remote teams.',
    solution: 'Built a React.js web app and React Native mobile app with WebSocket-based real-time communication and AWS infrastructure.',
    results: [
      'Sub-second message delivery',
      'HD video conferencing',
      'Works across all platforms',
      'Highly scalable architecture',
    ],
    technologies: ['React.js', 'React Native', 'Node.js', 'AWS'],
  },
  {
    id: 6,
    title: 'IoT Data Management System',
    industry: 'Manufacturing',
    challenge: 'A manufacturing company needed to collect, process, and analyze data from IoT sensors across multiple facilities.',
    solution: 'Developed a comprehensive IoT platform with Node.js backend, AI/ML analytics, and AWS IoT Core integration.',
    results: [
      'Real-time monitoring of 10,000+ devices',
      'Predictive maintenance capabilities',
      '30% reduction in downtime',
      'Automated alert system',
    ],
    technologies: ['Node.js', 'AI/ML', 'AWS IoT', 'React.js'],
  },
]

export default function UseCasesContent() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-blue rounded-2xl mb-6">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Use </span>
            <span className="bg-gradient-blue bg-clip-text text-transparent">
              Cases
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world solutions and success stories showcasing how we help businesses transform with technology
          </p>
        </motion.div>

        <div className="space-y-12">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-blue rounded-3xl blur-2xl opacity-10 pointer-events-none" />
              <div className="relative bg-navy-light/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 sm:p-8 md:p-10 z-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-blue rounded-xl flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 bg-primary-500/20 text-accent-light text-xs font-medium rounded-full">
                          {useCase.industry}
                        </span>
                      </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      {useCase.title}
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-accent-light" />
                          Challenge
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {useCase.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-accent-light" />
                          Solution
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {useCase.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-96">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-light" />
                      Results
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {useCase.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {useCase.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-500/20 text-accent-light text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-navy-light/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8">
            <Users className="w-12 h-12 text-accent-light mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your business with our proven solutions.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-blue rounded-lg text-white font-semibold glow-blue"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
