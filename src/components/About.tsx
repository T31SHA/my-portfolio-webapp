import { useEffect, useRef, useState } from 'react'
import { MaskIcon } from '@/components/EditorialMarks'

const stats = [
  {
    value: 95.1,
    suffix: '%',
    decimals: 1,
    desktop: 'Explained variance, SPEI drought forecaster',
    mobile: 'Explained variance, SPEI drought forecaster',
  },
  {
    value: 0.889,
    suffix: '',
    decimals: 3,
    desktop: 'ROC AUC, Nairobi Flood Guard, best project of 2026',
    mobile: 'ROC AUC, Nairobi Flood Guard',
  },
  {
    value: 8,
    suffix: '',
    decimals: 0,
    desktop: 'MEAL and research assignments for World Bank, IGAD, IOM and AU',
    mobile: 'MEAL and research assignments',
  },
  {
    value: 147,
    suffix: '',
    decimals: 0,
    desktop: 'Page open source Data/ML handbook, author',
    mobile: 'Page open source Data/ML handbook',
  },
]

function AnimatedStat({ value, suffix, decimals, desktop, mobile }: (typeof stats)[number]) {
  const [current, setCurrent] = useState(value)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      setCurrent(0)
      const started = performance.now()
      const tick = (now: number) => {
        const progress = Math.min(1, (now - started) / 1200)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCurrent(value * eased)
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.45 })
    observer.observe(element)
    return () => {
      observer.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [value])

  const display = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toLocaleString('en-US')
  return (
    <div className="stat" ref={ref}>
      <p className="stat-value">{display}{suffix}</p>
      <p className="stat-note note-desktop">{desktop}</p>
      <p className="stat-note note-mobile">{mobile}</p>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="section-wrap about-section" aria-labelledby="about-title">
      <div className="about-panel">
        <div className="about-intro">
          <div className="about-bio">
            <h2 id="about-title" className="display about-title">Hi, I&apos;m Sharahbill</h2>
            <p className="about-copy copy-desktop">
              Data analyst and ML engineer who ships forecasting, classification and computer vision models as live FastAPI and Streamlit apps. I lead MEAL and research at Cortech Consulting Group across 8 assignments for the World Bank, IGAD, IOM, the African Union and the Federal Government of Somalia.
            </p>
            <p className="about-copy copy-mobile">
              Data analyst and ML engineer who ships forecasting, classification and computer vision models as live FastAPI and Streamlit apps. I lead MEAL and research at Cortech Consulting Group across 8 assignments.
            </p>
            <div className="about-more">
              <a href="#research" className="more-link" onClick={() => document.getElementById('research')?.setAttribute('open', '')}>
                More about me
                <span className="more-badge"><MaskIcon src="/design/arrow-right.svg" size={13} /></span>
              </a>
              <p className="signature">Sharahbill</p>
            </div>
            <ul className="mobile-chips only-mobile">
              <li><MaskIcon src="/design/sparkle-rust.svg" size={10} />Based in Nairobi</li>
              <li><MaskIcon src="/design/sparkle-rust.svg" size={10} />Open to roles</li>
              <li><MaskIcon src="/design/sparkle-rust.svg" size={10} />MEAL &amp; research</li>
            </ul>
          </div>
          <div className="about-vrule" aria-hidden="true" />
          <ul className="about-chips">
            <li><span className="chip-badge"><img src="/design/icon-chip-pin.svg" width={16} height={16} alt="" /></span><span>Based in Nairobi, Kenya</span></li>
            <li><span className="chip-badge"><img src="/design/icon-chip-work.svg" width={16} height={16} alt="" /></span><span>Open to data, ML &amp; research roles</span></li>
            <li><span className="chip-badge"><img src="/design/icon-chip-meal.svg" width={16} height={16} alt="" /></span><span>MEAL &amp; research lead</span></li>
          </ul>
        </div>
        <div className="about-hrule" aria-hidden="true" />
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <span key={stat.desktop} style={{ display: 'contents' }}>
              {index > 0 ? <span className="stat-rule" aria-hidden="true" /> : null}
              <AnimatedStat {...stat} />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
