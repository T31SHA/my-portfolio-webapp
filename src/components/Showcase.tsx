import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const featured = [
  {
    title: 'Nairobi Flood Guard AI',
    kicker: 'Geospatial machine learning',
    mark: 'Best project of 2026',
    metric: '0.889',
    metricLabel: 'ROC AUC',
    summary: 'Flood early warning and matatu rerouting for 1,450 Kenyan wards, with SMS alerts.',
    detail:
      'Calibrated XGBoost reached recall 0.80 on county-held-out spatial cross-validation. It beat logistic regression, random forest and the neural network we tested against it.',
    tags: ['Python', 'GeoPandas', 'OSMnx', 'XGBoost', 'FastAPI', 'Streamlit', 'Folium', 'Docker'],
    live: 'https://nairobi-flood-guard.streamlit.app',
    code: 'https://github.com/T31SHA/Nairobi_Flood_Guard-AI',
  },
  {
    title: 'SPEI Drought Forecasting',
    kicker: 'Time-series forecasting',
    metric: '95.1%',
    metricLabel: 'Variance explained',
    summary: 'SPEI-12 drought, 1, 3 and 6 months ahead, with 98.3% directional accuracy.',
    detail:
      'Optuna-tuned XGBoost on 76 years of monthly climate data from Oran, Algeria, with SHAP and bootstrap intervals.',
    tags: ['Python', 'XGBoost', 'Optuna', 'SHAP', 'Streamlit', 'Plotly'],
    live: 'https://drought-intelligence.streamlit.app',
    code: 'https://github.com/T31SHA/Drought-Forcasting_Prediction',
  },
  {
    title: 'CassavaWatch',
    kicker: 'Computer vision',
    metric: '1.11 MB',
    metricLabel: 'TFLite model',
    summary: 'Cassava disease diagnosis from leaf photos, in English or Swahili, with offline queueing.',
    detail: 'MobileNetV3Small at 75.2% accuracy, quantized to fit a 512 MB server.',
    tags: ['TensorFlow', 'TFLite', 'FastAPI', 'Leaflet', 'pytest', 'Render'],
    live: 'https://cassavawatch.onrender.com',
    code: 'https://github.com/T31SHA/CassavaWatch',
  },
]

const supporting = [
  {
    title: 'Customer Churn Prediction',
    result: '3,333 records',
    detail: 'Random Forest tuned for recall. About 15% churn. Daytime charges, 3+ service calls and international plans drove it.',
    code: 'https://github.com/T31SHA/Customer-Churn_Prediction',
  },
  {
    title: 'NSE Stock Price Forecasting',
    result: 'KES 0.60 MAE',
    detail: 'Safaricom prices from 2025 NSE data. Lag and calendar features, chronological 80/20 split.',
    code: 'https://github.com/T31SHA/NSE--Stock-Market_-Predictions',
  },
  {
    title: 'Mobile User Behaviour',
    result: '700 users',
    detail: 'Five behavioural tiers. App usage 25.6%, battery drain 22.8%, app count 20.3%.',
    code: 'https://github.com/T31SHA/User-Behaviour_Prediction',
  },
]

const skills = [
  ['Machine learning', 'Classification, regression, time series, tuning. scikit-learn, XGBoost, Optuna, SHAP.'],
  ['Deep learning', 'Computer vision and transfer learning. TensorFlow, Keras, TFLite.'],
  ['Deployment', 'FastAPI, Streamlit, Render, Docker, GitHub Actions, pytest.'],
  ['Programming', 'Python, Pandas, NumPy, SQLite, SQLAlchemy, Git, Jupyter.'],
  ['Analysis', 'Tableau, Plotly, Matplotlib, Seaborn, GeoPandas, OSMnx, Folium.'],
  ['MEAL & research', 'Frameworks, KoboToolbox surveys, household studies, evaluation reports.'],
]

function ExternalLink({ href, children, light = false }: { href: string; children: string; light?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`focus-ring inline-flex items-center gap-1.5 border-b pb-1 text-[11px] font-medium uppercase tracking-[0.16em] ${light ? 'border-paper/40 text-paper hover:border-ochre hover:text-ochre' : 'border-ink/25 hover:border-cobalt hover:text-cobalt'}`}
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
    </a>
  )
}

export function Showcase() {
  const [lead, ...rest] = featured

  return (
    <section id="portfolio" className="bg-paper-2 px-[6vw] py-[12vh] text-ink">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">03 &middot; Selected work</p>
          <h2 className="display mt-5 text-[clamp(44px,6vw,84px)]">Three systems you can open.</h2>
          <p className="mt-5 max-w-xl text-[17px] leading-7 text-umber">Live apps. The figure is the result.</p>
        </Reveal>

        <article className="mt-12 bg-ink px-6 py-8 text-paper sm:px-10 sm:py-12 md:px-14 md:py-14">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="eyebrow">01 &middot; {lead.kicker}</p>
              {lead.mark ? <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.16em] text-ochre">{lead.mark}</p> : null}
            </div>
            <div className="shrink-0 text-right">
              <p className="display text-[clamp(40px,5vw,68px)] leading-none text-ochre">{lead.metric}</p>
              <p className="eyebrow mt-2 !text-paper/70">{lead.metricLabel}</p>
            </div>
          </div>
          <h3 className="display mt-8 max-w-3xl text-[clamp(40px,5.4vw,72px)]">{lead.title}</h3>
          <p className="mt-5 max-w-2xl text-[17px] leading-7">{lead.summary}</p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-paper/65">{lead.detail}</p>
          <p className="mt-6 max-w-2xl text-[11px] font-medium uppercase tracking-[0.14em] text-paper/45">{lead.tags.join(' · ')}</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <ExternalLink href={lead.live} light>Live app</ExternalLink>
            <ExternalLink href={lead.code} light>Source</ExternalLink>
          </div>
        </article>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {rest.map((project, index) => (
            <article key={project.title} className="flex flex-col border border-ink/10 bg-paper px-6 py-7 sm:px-8 sm:py-8">
              <div className="flex items-start justify-between gap-4">
                <p className="eyebrow !text-cobalt">{String(index + 2).padStart(2, '0')} &middot; {project.kicker}</p>
                <div className="shrink-0 text-right">
                  <p className="display text-[clamp(32px,3vw,44px)] leading-none">{project.metric}</p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-umber">{project.metricLabel}</p>
                </div>
              </div>
              <h3 className="display mt-6 text-[clamp(32px,3vw,44px)]">{project.title}</h3>
              <p className="mt-4 text-[15px] leading-7">{project.summary}</p>
              <p className="mt-2 text-sm leading-6 text-umber">{project.detail}</p>
              <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.14em] text-umber/80">{project.tags.join(' · ')}</p>
              <div className="mt-auto flex flex-wrap gap-x-7 gap-y-3 pt-7">
                <ExternalLink href={project.live}>Live app</ExternalLink>
                <ExternalLink href={project.code}>Source</ExternalLink>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <p className="eyebrow">Also shipped</p>
          <div className="mt-5 border-b border-ink/15">
            {supporting.map((project, index) => (
              <article key={project.title} className="grid gap-3 border-t border-ink/15 py-6 sm:grid-cols-[3.5rem_1fr_auto] sm:items-baseline sm:gap-8">
                <p className="eyebrow">{String(index + 4).padStart(2, '0')}</p>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="text-[17px] font-medium tracking-tight">{project.title}</h3>
                    <p className="display text-[22px] leading-none text-umber">{project.result}</p>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-umber">{project.detail}</p>
                </div>
                <ExternalLink href={project.code}>Source</ExternalLink>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <p className="eyebrow">Toolkit</p>
          <h3 className="display mt-4 text-[clamp(32px,4vw,52px)]">What the work is built with.</h3>
          <dl className="mt-8 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(([name, detail]) => (
              <div key={name} className="bg-paper-2 px-5 py-6">
                <dt className="text-[15px] font-medium">{name}</dt>
                <dd className="mt-2 text-sm leading-6 text-umber">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
