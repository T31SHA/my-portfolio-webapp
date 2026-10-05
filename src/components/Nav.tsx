import { Download } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Work', href: '#portfolio', id: 'portfolio' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export function Nav() {
  const [overHero, setOverHero] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const hero = document.getElementById('home')
    const onScroll = () => setOverHero(!hero || hero.getBoundingClientRect().bottom > 72)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.1, 0.5] },
    )
    links.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        overHero ? 'text-paper' : 'border-b border-ink/10 bg-paper/90 text-ink backdrop-blur-md',
      )}
      aria-label="Primary navigation"
    >
      <div className="flex items-center justify-between gap-4 px-[4vw] py-5 sm:py-6">
        <a href="#home" className="focus-ring flex shrink-0 items-baseline gap-3">
          <b className="font-display text-[22px] font-medium uppercase tracking-[0.14em]">S. Abdi</b>
          <span className="eyebrow hidden md:inline">Data Science</span>
        </a>
        <div className="flex items-center gap-[clamp(10px,2.4vw,34px)]">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={activeSection === link.id ? 'page' : undefined}
              className={cn(
                'focus-ring border-b border-transparent pb-1 text-[10px] font-semibold uppercase tracking-[0.24em] opacity-75 transition-opacity hover:opacity-100 sm:text-[11px]',
                activeSection === link.id && 'border-ochre opacity-100',
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/assets/sharahbil-abdi-cv.pdf"
            download
            className="focus-ring hidden items-center gap-2 border border-current px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition-colors hover:bg-ochre hover:text-ink sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" strokeWidth={1.5} />
            CV
          </a>
        </div>
      </div>
    </nav>
  )
}
