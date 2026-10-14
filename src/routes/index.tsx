import { createFileRoute } from '@tanstack/react-router'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Nav } from '@/components/Nav'
import { Showcase } from '@/components/Showcase'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Sharahbill Abdi — Data & Machine Learning Engineer' },
      {
        name: 'description',
        content:
          'Sharahbill Mohamed Abdi builds forecasting, classification and computer vision systems, and leads MEAL and research at Cortech Consulting Group in Nairobi.',
      },
      { property: 'og:title', content: 'Sharahbill Abdi — Data & Machine Learning Engineer' },
      {
        property: 'og:description',
        content: 'Live forecasting and machine learning systems, plus MEAL research for government, multilateral and NGO clients.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: IndexPage,
})

function IndexPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <About />
        <Showcase />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
