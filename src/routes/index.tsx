import { createFileRoute } from '@tanstack/react-router'
import { Background } from '@/components/Background'
import { Book } from '@/components/Book'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Nav } from '@/components/Nav'
import { Research } from '@/components/Research'
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
        <Work />
        <Research />
        <Book />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
