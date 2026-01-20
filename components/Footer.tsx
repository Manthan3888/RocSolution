'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import Logo from './Logo'

const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ],
  services: [
    { href: '/services#react', label: 'React.js' },
    { href: '/services#nodejs', label: 'Node.js' },
    { href: '/services#react-native', label: 'React Native' },
    { href: '/services#aws', label: 'AWS' },
    { href: '/services#ai-ml', label: 'AI/ML' },
  ],
}

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="relative bg-navy-dark border-t border-primary-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 inline-block">
              <Logo size="sm" showText={true} />
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Transforming businesses with cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-navy-light rounded-lg flex items-center justify-center text-gray-400 hover:text-accent-light hover:bg-primary-500/10 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent-light mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@rocsolution.com"
                  className="text-gray-400 hover:text-accent-light transition-colors text-sm"
                >
                  info@rocsolution.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent-light mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-accent-light transition-colors text-sm"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-light mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Your City, Country
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800/50 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} ROC Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
