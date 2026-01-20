'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { logo: 32, text: 'text-sm', textSize: 'text-xs' },
    md: { logo: 48, text: 'text-xl', textSize: 'text-sm' },
    lg: { logo: 64, text: 'text-3xl', textSize: 'text-base' },
  }

  const currentSize = sizes[size]

  return (
    <div className="flex items-center space-x-2 sm:space-x-3 group">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex-shrink-0"
        style={{ width: `${currentSize.logo}px`, height: `${currentSize.logo}px` }}
      >
        <div className="absolute inset-0 bg-gradient-blue rounded-lg blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
        <div className="relative w-full h-full">
          <Image
            src="/logo.svg"
            alt="ROC Solution Logo"
            width={currentSize.logo}
            height={currentSize.logo}
            className="w-full h-full object-contain"
            priority
            loading="eager"
            unoptimized
          />
        </div>
      </motion.div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-white ${currentSize.text} leading-tight`}>ROC</span>
          <span className={`text-accent-light -mt-0.5 sm:-mt-1 ${currentSize.textSize} leading-tight`}>
            Solution
          </span>
        </div>
      )}
    </div>
  )
}
