import { Metadata } from 'next'
import TermsContent from '@/components/TermsContent'

export const metadata: Metadata = {
  title: 'Terms and Conditions - ROC Solution',
  description: 'ROC Solution Terms and Conditions - Read our terms of service and usage policies.',
  keywords: 'Terms and Conditions, Terms of Service, ROC Solution',
  openGraph: {
    title: 'Terms and Conditions - ROC Solution',
    description: 'Read our terms of service and usage policies.',
  },
}

export default function Terms() {
  return <TermsContent />
}
