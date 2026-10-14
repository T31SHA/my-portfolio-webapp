import { Download } from 'lucide-react'
import { useEffect, useState } from 'react'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Work', href: '#portfolio', id: 'portfolio' },
  { label: 'Experience', href: '#experience', id: 'experience' },
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
    for (const id of ['about', ...links.map((link) => link.id)]) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }

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
      <div className="flex items-center justify-between gap-2 px-3 py-3.5 min-[400px]:px-[4vw] min-[400px]:py-4 sm:py-5">
        <a href="#home" className="focus-ring flex shrink-0 items-baseline gap-3 whitespace-nowrap">
          <b className="font-display text-[18px] font-medium uppercase tracking-[0.08em] min-[400px]:text-[20px] min-[400px]:tracking-[0.12em] sm:text-[22px] sm:tracking-[0.14em]">S. Abdi</b>
          <span className="eyebrow hidden lg:inline">Data &amp; ML</span>
        </a>
        <div className="flex shrink-0 items-center gap-2 whitespace-nowrap min-[400px]:gap-[clamp(8px,1.6vw,28px)]">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={activeSection === link.id ? 'true' : undefined}
              className={cn(
                'focus-ring border-b border-transparent pb-1 text-[9px] font-semibold uppercase tracking-[0.1em] opacity-75 transition-opacity hover:opacity-100 min-[400px]:text-[10px] min-[400px]:tracking-[0.16em] sm:tracking-[0.22em] sm:text-[11px]',
                activeSection === link.id && 'border-ochre opacity-100',
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.cvHref}
            download={site.cvFilename}
            className="focus-ring inline-flex shrink-0 items-center gap-1 border border-current px-2 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-ochre hover:text-ink min-[400px]:gap-1.5 min-[400px]:px-2.5 min-[400px]:py-2 min-[400px]:text-[10px] min-[400px]:tracking-[0.16em] sm:gap-2 sm:px-3.5 sm:tracking-[0.22em]"
          >
            <Download className="h-3.5 w-3.5" strokeWidth={1.5} />
            CV
          </a>
        </div>
      </div>
    </nav>
  )
}
