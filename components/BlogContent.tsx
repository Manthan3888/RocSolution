'use client'

import { motion } from 'framer-motion'
import { BookOpen, Calendar, ArrowRight, Code, Cloud, Brain, Smartphone } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React.js: A Complete Guide for Beginners',
    excerpt: 'Learn the fundamentals of React.js and start building modern web applications with this comprehensive beginner-friendly guide.',
    category: 'React.js',
    date: '2024-01-15',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Building Scalable Backend Services with Node.js',
    excerpt: 'Discover best practices for creating robust and scalable server-side applications using Node.js and modern JavaScript.',
    category: 'Node.js',
    date: '2024-01-10',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'Cross-Platform Mobile Development with React Native',
    excerpt: 'Explore how React Native enables you to build native mobile apps for both iOS and Android using a single codebase.',
    category: 'React Native',
    date: '2024-01-05',
    icon: Smartphone,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'AWS Cloud Architecture: Best Practices for 2024',
    excerpt: 'Learn about the latest AWS services and architectural patterns to build scalable and cost-effective cloud solutions.',
    category: 'AWS',
    date: '2023-12-28',
    icon: Cloud,
    color: 'from-orange-500 to-yellow-500',
  },
  {
    id: 5,
    title: 'Introduction to AI/ML: Machine Learning Fundamentals',
    excerpt: 'A beginner-friendly introduction to artificial intelligence and machine learning concepts and their real-world applications.',
    category: 'AI/ML',
    date: '2023-12-20',
    icon: Brain,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 6,
    title: 'Modern Web Development: Trends and Technologies in 2024',
    excerpt: 'Stay updated with the latest trends, tools, and technologies shaping the future of web development.',
    category: 'Web Development',
    date: '2023-12-15',
    icon: Code,
    color: 'from-blue-500 to-indigo-500',
  },
]

export default function BlogContent() {
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
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="bg-gradient-blue bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest insights, tutorials, and news from the world of technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const Icon = post.icon
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-light/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all pointer-events-none" />
                <div className="relative bg-navy-light/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 h-full hover:border-primary-500/50 transition-all z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-primary-500/20 text-accent-light text-xs font-medium rounded-full mb-4">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-accent-light transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-accent-light hover:text-accent-light/80 group-hover:gap-2 gap-1 transition-all text-sm font-medium"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">More articles coming soon!</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-blue rounded-lg text-white font-semibold hover:scale-105 transition-transform"
          >
            Subscribe to our newsletter
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
