import { Metadata } from 'next'
import PrivacyContent from '@/components/PrivacyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy - ROC Solution',
  description: 'ROC Solution Privacy Policy - Learn how we collect, use, and protect your personal information.',
  keywords: 'Privacy Policy, Data Protection, ROC Solution',
  openGraph: {
    title: 'Privacy Policy - ROC Solution',
    description: 'Learn how we collect, use, and protect your personal information.',
  },
}

export default function Privacy() {
  return <PrivacyContent />
}
