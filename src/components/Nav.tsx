import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    links.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <motion.nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled && 'border-b border-foreground/10 bg-background/45 shadow-lg shadow-black/10 backdrop-blur-2xl',
      )}
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-1 px-5 py-4 sm:gap-3 sm:py-5">
        <a
          href="#home"
          className="focus-ring shrink-0 font-mono text-xs tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
        >
          sharahbil.dev
        </a>
        <div className="glass-surface flex min-w-0 items-center gap-0 rounded-full p-1 sm:gap-0.5">
          {links.map((link) => {
            const active = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'focus-ring whitespace-nowrap rounded-full px-1.5 py-1.5 text-[0.58rem] text-muted-foreground transition-colors hover:text-foreground sm:px-3 sm:text-sm',
                  active && 'bg-foreground/10 text-foreground shadow-sm shadow-black/10',
                )}
              >
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}
