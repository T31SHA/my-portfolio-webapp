import { useEffect } from 'react'

// Server-rendered content is visible by default. After hydration, only [data-reveal] elements that
// start below the fold are hidden and faded in, so nothing above the fold waits on JavaScript.
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const pending = [...document.querySelectorAll<HTMLElement>('[data-reveal]')].filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight,
    )
    for (const el of pending) el.classList.add('reveal-wait')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.replace('reveal-wait', 'reveal-in')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    for (const el of pending) observer.observe(el)

    return () => observer.disconnect()
  }, [])
}
