import { Metadata } from 'next'
import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact Us - ROC Solution | Get In Touch',
  description: 'Contact ROC Solution for your IT needs. Get in touch with our team to discuss your project requirements.',
  keywords: 'Contact ROC Solution, IT Consultation, Project Inquiry',
  openGraph: {
    title: 'Contact Us - ROC Solution',
    description: 'Get in touch with ROC Solution for your technology needs.',
  },
}

export default function Contact() {
  return (
    <>
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </>
  )
}
