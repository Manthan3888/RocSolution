'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText } from 'lucide-react'

export default function PrivacyContent() {
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
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Privacy </span>
            <span className="bg-gradient-blue bg-clip-text text-transparent">
              Policy
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
              1. Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              ROC Solution (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
              our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-accent-light" />
              2. Information We Collect
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">2.1 Personal Information</h3>
                <p className="leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Register for an account</li>
                  <li>Contact us through our website</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request information about our services</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">2.2 Automatically Collected Information</h3>
                <p className="leading-relaxed">
                  We may automatically collect certain information about your device, including information about your 
                  web browser, IP address, time zone, and some of the cookies that are installed on your device.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-accent-light" />
              3. How We Use Your Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information 
              only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>With service providers who assist us in operating our website</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or merger</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
              the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Right to access your personal information</li>
              <li>Right to rectify inaccurate information</li>
              <li>Right to request deletion of your information</li>
              <li>Right to object to processing of your information</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Links</h2>
            <p className="text-gray-300 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of 
              these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
              information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
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
