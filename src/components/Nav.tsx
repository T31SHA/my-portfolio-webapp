import { Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Work', id: 'work' },
  { label: 'Research', id: 'research' },
  { label: 'Book', id: 'book' },
  { label: 'Background', id: 'background' },
  { label: 'Contact', id: 'contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      if (window.scrollY < window.innerHeight * 0.5) setActive('')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    for (const { id } of links) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }

    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
      observer.disconnect()
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 text-paper transition-[background-color,box-shadow] duration-300',
        open ? 'bg-navy' : scrolled ? 'bg-navy/95 shadow-[0_1px_0_var(--color-rule-dark)] backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <nav className="wrap flex h-16 items-center justify-between gap-4" aria-label="Primary">
        <a href="#top" className="flex items-center gap-2.5 font-display text-[1.05rem] font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-signal text-[0.8rem] font-bold text-ink" aria-hidden="true">
            S
          </span>
          <span>
            Sharahbill<span className="hidden min-[400px]:inline"> M. Abdi</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={cn(
                  'text-[0.9375rem] text-mist transition-colors hover:text-paper',
                  active === link.id && 'text-paper underline decoration-signal decoration-2 underline-offset-[0.5em]',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={site.cvHref} download={site.cvFilename} className="btn btn-signal !min-h-10 !px-4 text-sm">
            <Download className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            <span>
              CV<span className="sr-only"> (PDF, {site.cvSize})</span>
            </span>
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-rule-dark md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-rule-dark md:hidden">
        <ul className="wrap py-3">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-rule-dark py-3.5 font-display text-2xl font-semibold tracking-tight last:border-0"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
