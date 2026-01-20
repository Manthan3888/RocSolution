import { Metadata } from 'next'
import ServicesHero from '@/components/ServicesHero'
import ServiceDetails from '@/components/ServiceDetails'
import Process from '@/components/Process'

export const metadata: Metadata = {
  title: 'Services - ROC Solution | React.js, Node.js, React Native, AWS, AI/ML',
  description: 'Comprehensive IT services including React.js development, Node.js solutions, React Native mobile apps, AWS cloud services, and AI/ML solutions.',
  keywords: 'React.js Services, Node.js Development, React Native Apps, AWS Cloud Services, AI ML Solutions, Web Development, Mobile Development',
  openGraph: {
    title: 'Services - ROC Solution',
    description: 'Explore our comprehensive IT services and technology solutions.',
  },
}

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServiceDetails />
      <Process />
    </>
  )
}
