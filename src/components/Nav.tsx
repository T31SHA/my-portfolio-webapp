import { useEffect, useRef, useState } from 'react'
import { site } from '@/lib/site'
import { MaskIcon } from '@/components/EditorialMarks'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const wasOpen = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target.id) setActive(visible.target.id)
    }, { rootMargin: '-38% 0px -54% 0px' })
    for (const link of links) {
      const section = document.getElementById(link.id)
      if (section) observer.observe(section)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      observer.disconnect()
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    if (open) {
      wasOpen.current = true
      menuRef.current?.querySelector<HTMLAnchorElement>('a[href]')?.focus()
    } else if (wasOpen.current) {
      wasOpen.current = false
      toggleRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    const trapFocus = (event: KeyboardEvent) => {
      if (!open || event.key !== 'Tab' || !menuRef.current) return
      const items = [...menuRef.current.querySelectorAll<HTMLElement>('a[href], button')]
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }
    window.addEventListener('keydown', trapFocus)
    return () => window.removeEventListener('keydown', trapFocus)
  }, [open])

  return (
    <header className="nav-wrap">
      <nav className="nav-bar" aria-label="Primary navigation">
        <a href="#top" className="wordmark" aria-label="Sharahbill Abdi, back to top" onClick={() => setOpen(false)}>
          <span className="wordmark-mark"><img src="/design/starburst.svg" width={30} height={30} alt="" /></span>
          <span className="wordmark-name"><span>SHARAHBILL</span><span>ABDI</span></span>
        </a>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} aria-current={active === link.id ? 'location' : undefined} className={active === link.id ? 'is-active' : ''}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="button button-primary nav-cta" href="#contact">
          Let&apos;s talk
          <span className="button-badge"><img src="/design/arrow-right.svg" width={16} height={16} alt="" /></span>
        </a>
        <button
          type="button"
          ref={toggleRef}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <svg viewBox="0 0 18 18" aria-hidden="true"><path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          ) : (
            <svg viewBox="0 0 18 18" aria-hidden="true"><path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          )}
        </button>
      </nav>
      <div id="mobile-menu" ref={menuRef} className={`mobile-menu${open ? ' is-open' : ''}`} aria-hidden={!open} aria-modal={open ? 'true' : undefined} role="dialog" aria-label="Navigation menu">
        <nav aria-label="Mobile navigation" inert={!open}>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={() => setOpen(false)} aria-current={active === link.id ? 'location' : undefined}>
                  <span>{link.label}</span>
                  <MaskIcon src="/design/arrow-right.svg" size={16} />
                </a>
              </li>
            ))}
          </ul>
          <a href={site.cvHref} download={site.cvFilename} className="button button-primary mobile-cv" onClick={() => setOpen(false)}>
            View CV
            <span className="button-badge"><img src="/design/arrow-right.svg" width={16} height={16} alt="" /></span>
          </a>
        </nav>
      </div>
    </header>
  )
}
