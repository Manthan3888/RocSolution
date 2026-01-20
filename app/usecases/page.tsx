import { Metadata } from 'next'
import UseCasesContent from '@/components/UseCasesContent'

export const metadata: Metadata = {
  title: 'Use Cases - ROC Solution | Real-World Solutions',
  description: 'Explore real-world use cases and success stories of ROC Solution services including React.js, Node.js, React Native, AWS, and AI/ML implementations.',
  keywords: 'Use Cases, Case Studies, Success Stories, IT Solutions, Web Development Examples',
  openGraph: {
    title: 'Use Cases - ROC Solution',
    description: 'Real-world solutions and success stories from ROC Solution.',
  },
}

export default function UseCases() {
  return <UseCasesContent />
}
