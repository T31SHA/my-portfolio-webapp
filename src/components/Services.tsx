import { RotatingBadge } from '@/components/EditorialMarks'
import { MaskIcon } from '@/components/EditorialMarks'
import { SectionHeading } from '@/components/SectionHeading'

const services = [
  {
    title: 'Machine Learning',
    long: 'Classification and regression with scikit\u2011learn, XGBoost, Optuna and SHAP, benchmarked against baselines and explained.',
    short: 'scikit-learn, XGBoost, Optuna and SHAP, benchmarked and explained.',
    icon: '/design/icon-ml.svg',
    tone: 'rust',
    href: '#work',
  },
  {
    title: 'Forecasting & Time Series',
    long: 'Strictly chronological splits, 1, 3 and 6 month horizons and bootstrap prediction intervals a planner can read.',
    short: 'Chronological splits, 1, 3 and 6 month horizons, prediction intervals.',
    icon: '/design/icon-forecast.svg',
    tone: 'olive',
    href: '#work',
  },
  {
    title: 'Geospatial & Early Warning',
    long: 'Ward-level risk with GeoPandas, OSMnx and Folium, delivered through FastAPI, SMS and Streamlit.',
    short: 'GeoPandas, OSMnx and Folium, delivered through FastAPI, SMS and Streamlit.',
    icon: '/design/icon-geo.svg',
    tone: 'charcoal',
    href: '#work',
  },
  {
    title: 'MEAL & Research',
    long: 'MEAL frameworks, KoboToolbox surveys, analysis in Python and evaluation reports clients act on.',
    short: 'MEAL frameworks, KoboToolbox surveys and evaluation reports.',
    icon: '/design/icon-meal.svg',
    tone: 'rust',
    href: '#research',
  },
]

export function Services() {
  return (
    <section id="services" className="section-wrap services-section" aria-labelledby="services-title">
      <SectionHeading label="What I do" />
      <h2 id="services-title" className="sr-only">What I do</h2>
      <div className="services-row">
        <div className="service-grid">
          {services.map((service) => (
            <a key={service.title} href={service.href} className="service-card">
              <span className={`service-icon ${service.tone}`}><img src={service.icon} width={26} height={26} alt="" /></span>
              <span className="service-copy">
                <h3 className="service-title display">{service.title}</h3>
                <span className="service-description service-long">{service.long}</span>
                <span className="service-description service-short">{service.short}</span>
              </span>
              <span className="service-arrow"><MaskIcon src="/design/arrow-right.svg" size={14} /></span>
            </a>
          ))}
        </div>
        <RotatingBadge id="services-badge-path" text="DATA * MODELS * DECISIONS * " center="burst" className="services-badge" />
      </div>
    </section>
  )
}
