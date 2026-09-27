import { createFileRoute } from '@tanstack/react-router'
import { Toaster } from 'sonner'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Nav } from '@/components/Nav'
import { Preloader } from '@/components/Preloader'
import { Showcase } from '@/components/Showcase'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { useBackgroundTheme } from '@/hooks/use-background-theme'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Sharahbil Abdi — Data Scientist in Nairobi' },
      { name: 'description', content: 'Portfolio of Sharahbil Abdi, a Nairobi-based data scientist focused on machine learning, forecasting and applied analytics.' },
      { property: 'og:title', content: 'Sharahbil Abdi — Data Scientist in Nairobi' },
      { property: 'og:description', content: 'Machine learning, forecasting and applied analytics by Sharahbil Abdi.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: IndexPage,
})

function IndexPage() {
  const { theme, setTheme } = useBackgroundTheme()

  return (
    <div className={cn('theme-page relative isolate min-h-screen overflow-x-clip bg-background text-foreground', theme === 'blue' && 'theme-blue', theme === 'midnight' && 'theme-midnight')}>
      <div className="ambient-glow" aria-hidden="true" />
      <div className="grid-backdrop" aria-hidden="true" />
      <Preloader />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Showcase />
          <Contact />
        </main>
        <Footer />
        <Toaster position="bottom-left" toastOptions={{ classNames: { toast: 'border-border bg-surface text-foreground', title: 'text-foreground', description: 'text-muted-foreground' } }} />
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </div>
    </div>
  )
}
