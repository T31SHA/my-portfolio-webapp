import type { CSSProperties } from 'react'
import { ArrowUpRight, ChartNoAxesCombined, ClipboardCheck, MapPin, Network } from 'lucide-react'
import { RotatingBadge } from '@/components/EditorialMarks'
import { SectionHeading } from '@/components/SectionHeading'

const services = [
  {
    title: 'Machine Learning',
    description: 'scikit-learn, XGBoost, Optuna and SHAP, benchmarked and explained.',
    icon: Network,
    tone: 'rust',
  },
  {
    title: 'Forecasting & Time Series',
    description: 'Chronological splits, 1, 3 and 6 month horizons, prediction intervals.',
    icon: ChartNoAxesCombined,
    tone: 'olive',
  },
  {
    title: 'Geospatial & Early Warning',
    description: 'GeoPandas, OSMnx and Folium, delivered through FastAPI, SMS and Streamlit.',
    icon: MapPin,
    tone: 'charcoal',
  },
  {
    title: 'MEAL & Research',
    description: 'MEAL frameworks, KoboToolbox surveys and evaluation reports.',
    icon: ClipboardCheck,
    tone: 'rust',
  },
]

export function Services() {
  return (
    <section id="services" className="section-wrap services-section" aria-labelledby="services-title">
      <SectionHeading label="WHAT I DO" />
      <h2 id="services-title" className="sr-only">What I do</h2>
      <div className="services-row">
        <div className="service-grid">
          {services.map(({ title, description, icon: Icon, tone }, index) => (
            <a key={title} href={index === 3 ? '#research' : '#work'} className="service-card" data-reveal style={{ '--reveal-delay': `${index * 60}ms` } as CSSProperties}>
              <span className={`service-icon ${tone}`}><Icon aria-hidden="true" /></span>
              <div className="service-copy">
                <h3 className="service-title display">{title}</h3>
                <span className="service-description">{description}</span>
              </div>
              <span className="service-arrow"><ArrowUpRight aria-hidden="true" /></span>
            </a>
          ))}
        </div>
        <RotatingBadge id="services-badge-path" className="services-badge" />
      </div>
    </section>
  )
}
