import Hero from '@/components/Hero'
import ServicesPreview from '@/components/ServicesPreview'
import AboutPreview from '@/components/AboutPreview'
import TechStack from '@/components/TechStack'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <TechStack />
      <CTA />
    </>
  )
}
