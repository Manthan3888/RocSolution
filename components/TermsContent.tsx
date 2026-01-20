'use client'

import { motion } from 'framer-motion'
import { FileText, Scale, AlertCircle, Shield } from 'lucide-react'

export default function TermsContent() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-blue rounded-2xl mb-6">
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Terms and </span>
            <span className="bg-gradient-blue bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-navy-light/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 sm:p-8 md:p-10 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-accent-light" />
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using the ROC Solution website and services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-accent-light" />
              2. Use License
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Permission is granted to temporarily access the materials on ROC Solution&apos;s website for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under 
              this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Services Description</h2>
            <p className="text-gray-300 leading-relaxed">
              ROC Solution provides IT services including but not limited to web development, mobile app development, 
              cloud services, and AI/ML solutions. We reserve the right to modify, suspend, or discontinue any service 
              at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. User Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Maintaining the confidentiality of your account information</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and complete information</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>Not using our services for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-accent-light" />
              5. Disclaimer
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The materials on ROC Solution&apos;s website are provided on an &apos;as is&apos; basis. ROC Solution makes 
              no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without 
              limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or 
              non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Limitations</h2>
            <p className="text-gray-300 leading-relaxed">
              In no event shall ROC Solution or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability to 
              use the materials on ROC Solution&apos;s website, even if ROC Solution or a ROC Solution authorized 
              representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              All content, features, and functionality of the website, including but not limited to text, graphics, logos, 
              icons, images, and software, are the exclusive property of ROC Solution and are protected by international 
              copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Payment Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For paid services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Payment terms will be specified in individual service agreements</li>
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>We reserve the right to change our pricing at any time</li>
              <li>Late payments may result in service suspension</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We may terminate or suspend your access to our services immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right 
              to use the service will cease immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with applicable laws. Any disputes 
              relating to these terms shall be subject to the exclusive jurisdiction of the courts in the applicable 
              jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              ROC Solution reserves the right to revise these terms of service at any time without notice. By using this 
              website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-navy-dark rounded-lg">
              <p className="text-white font-semibold">ROC Solution</p>
              <p className="text-gray-300">Email: info@rocsolution.com</p>
              <p className="text-gray-300">Phone: +1 (234) 567-890</p>
            </div>
          </section>
        </motion.div>
      </div>
    </section>
  )
}
