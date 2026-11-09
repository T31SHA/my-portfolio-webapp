import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, ClipboardList, MapPin } from 'lucide-react'

const stats = [
  { value: 95.1, suffix: '%', decimals: 1, label: 'VARIANCE EXPLAINED', note: 'Explained variance, SPEI drought forecaster' },
  { value: 0.889, suffix: '', decimals: 3, label: 'ROC AUC', note: 'ROC AUC, Nairobi Flood Guard, best project of 2026' },
  { value: 8, suffix: '', decimals: 0, label: 'ASSIGNMENTS', note: 'MEAL and research assignments for World Bank, IGAD, IOM and AU' },
  { value: 147, suffix: '', decimals: 0, label: 'PAGES', note: 'Pages in open source Data/ML Handbook' },
]

function AnimatedStat({ value, suffix, decimals, label, note }: (typeof stats)[number]) {
  const [current, setCurrent] = useState(value)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return
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
      <dt className="stat-label">{label}</dt>
      <dd className="stat-value">{display}{suffix}</dd>
      <dd className="stat-note">{note}</dd>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="section-wrap about-section" aria-labelledby="about-title" data-reveal>
      <div className="about-panel">
        <div className="about-intro">
          <div>
            <h2 id="about-title" className="display about-title">HI, I&apos;M SHARAHBILL</h2>
            <p className="about-copy">
              Data analyst and ML engineer who ships forecasting, classification and computer vision models as live FastAPI and Streamlit apps. I lead MEAL and research at Cortech Consulting Group across 8 assignments<span className="desktop-about-copy"> for the World Bank, IGAD, IOM, African Union and the Federal Government of Somalia.</span>
            </p>
            <div className="about-more"><a href="#research" className="text-link light-link">More about me <ArrowUpRight aria-hidden="true" /></a><p className="signature">Sharahbill</p></div>
          </div>
          <div className="about-aside">
            <ul className="about-chips">
              <li><span className="chip-icon"><MapPin aria-hidden="true" /></span><span className="chip-copy"><span>BASED IN</span><strong>Nairobi, Kenya</strong></span></li>
              <li><span className="chip-icon"><BriefcaseBusiness aria-hidden="true" /></span><span className="chip-copy"><span>OPEN TO</span><strong>Data, ML &amp; research roles</strong></span></li>
              <li><span className="chip-icon"><ClipboardList aria-hidden="true" /></span><span className="chip-copy"><strong>MEAL &amp; research lead</strong></span></li>
            </ul>
          </div>
        </div>
        <dl className="stats-grid">
          {stats.map((stat) => <AnimatedStat key={stat.label} {...stat} />)}
        </dl>
      </div>
    </section>
  )
}
