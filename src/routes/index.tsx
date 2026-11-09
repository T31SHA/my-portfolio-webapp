import { createFileRoute } from '@tanstack/react-router'
import { Contact } from '@/components/Contact'
import { About } from '@/components/About'
import { ExperienceSkills } from '@/components/ExperienceSkills'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Nav } from '@/components/Nav'
import { Recognition } from '@/components/Recognition'
import { Services } from '@/components/Services'
import { Work } from '@/components/Work'
import { useReveal } from '@/lib/useReveal'

export const Route = createFileRoute('/')({
  component: IndexPage,
})

function IndexPage() {
  useReveal()

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Services />
        <ExperienceSkills />
        <Work />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
