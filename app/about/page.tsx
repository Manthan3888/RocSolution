import { Metadata } from 'next'
import AboutHero from '@/components/AboutHero'
import MissionVision from '@/components/MissionVision'
import Team from '@/components/Team'
import Stats from '@/components/Stats'

export const metadata: Metadata = {
  title: 'About Us - ROC Solution | Our Story & Mission',
  description: 'Learn about ROC Solution, our mission, vision, and the expert team behind our cutting-edge IT solutions.',
  keywords: 'About ROC Solution, IT Company, Technology Team, Mission, Vision',
  openGraph: {
    title: 'About Us - ROC Solution',
    description: 'Learn about ROC Solution and our mission to transform businesses with technology.',
  },
}

export default function About() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <Stats />
      <Team />
    </>
  )
}
