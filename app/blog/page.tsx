import { Metadata } from 'next'
import BlogContent from '@/components/BlogContent'

export const metadata: Metadata = {
  title: 'Blog - ROC Solution | Latest Tech News & Insights',
  description: 'Read the latest articles, insights, and updates from ROC Solution about React.js, Node.js, React Native, AWS, AI/ML, and more.',
  keywords: 'Tech Blog, React.js Blog, Node.js Articles, AWS Tutorials, AI/ML News, Web Development Blog',
  openGraph: {
    title: 'Blog - ROC Solution',
    description: 'Latest tech news, insights, and tutorials from ROC Solution.',
  },
}

export default function Blog() {
  return <BlogContent />
}
