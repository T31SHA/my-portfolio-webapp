import { createFileRoute } from '@tanstack/react-router'
import { Toaster } from 'sonner'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Nav } from '@/components/Nav'
import { Preloader } from '@/components/Preloader'
import { Showcase } from '@/components/Showcase'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Sharahbill Mohamed Abdi — Data/ML Engineer in Nairobi' },
      { name: 'description', content: 'Data/ML engineer in Nairobi. Classification, time-series forecasting, and decision-support systems, each with the holdout metric next to the decision.' },
      { property: 'og:title', content: 'Sharahbill Mohamed Abdi — Data/ML Engineer in Nairobi' },
      { property: 'og:description', content: 'Classification, forecasting, and decision-support systems by Sharahbill Mohamed Abdi, with the holdout metric next to the decision.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: IndexPage,
})

function IndexPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-paper text-ink">
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <About />
        <Showcase />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-left" toastOptions={{ classNames: { toast: '!rounded-none !border-ink/15 !bg-paper !text-ink', title: '!text-ink', description: '!text-umber' } }} />
    </div>
  )
}
