import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const featured = [
  {
    title: 'Nairobi Flood Guard AI',
    kicker: 'Geospatial ML · Best project of 2026',
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
    summary: 'Forecasts SPEI-12 drought 1, 3 and 6 months ahead, with 98.3% directional accuracy.',
    detail:
      'Optuna-tuned XGBoost trained on 76 years of monthly climate data from Oran, Algeria, with SHAP explanations and bootstrap intervals.',
    tags: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'Optuna', 'SHAP', 'Streamlit', 'Plotly'],
    live: 'https://drought-intelligence.streamlit.app',
    code: 'https://github.com/T31SHA/Drought-Forcasting_Prediction',
  },
  {
    title: 'CassavaWatch',
    kicker: 'Computer vision · Full-stack',
    metric: '1.11 MB',
    metricLabel: 'TFLite model',
    summary:
      'Diagnoses cassava disease from 3 to 6 leaf photos, with English or Swahili advice, offline queueing and outbreak alerts.',
    detail:
      'Fine-tuned MobileNetV3Small to 75.2% accuracy, then quantized so the model fits a 512 MB free-tier server.',
    tags: ['TensorFlow', 'TFLite', 'FastAPI', 'SQLite', 'Leaflet', 'Qwen API', 'pytest', 'Render'],
    live: 'https://cassavawatch.onrender.com',
    code: 'https://github.com/T31SHA/CassavaWatch',
  },
]

const supporting = [
  {
    title: 'Customer Churn Prediction',
    detail:
      'Random Forest tuned for recall on 3,333 telecom records, about 15% churn. Biggest drivers: daytime charges, 3+ service calls and international plans. Risk export ready for Tableau.',
    code: 'https://github.com/T31SHA/Customer-Churn_Prediction',
  },
  {
    title: 'NSE Stock Price Forecasting',
    detail:
      'Predicted Safaricom (SCOM) prices from 2025 NSE data with an MAE of KES 0.60, using lag and calendar features. Chronological 80/20 split, so the model never saw future prices.',
    code: 'https://github.com/T31SHA/NSE--Stock-Market_-Predictions',
  },
  {
    title: 'Mobile User Behaviour',
    detail:
      'Sorted 700 mobile users into five behavioural tiers from device telemetry. App usage time (25.6%), battery drain (22.8%) and app count (20.3%) mattered most.',
    code: 'https://github.com/T31SHA/User-Behaviour_Prediction',
  },
]

const skills = [
  ['Machine learning', 'Classification, regression, time series, feature engineering, tuning, CRISP-DM. scikit-learn, XGBoost, Optuna, SHAP.'],
  ['Deep learning', 'Computer vision and transfer learning. TensorFlow, Keras, TFLite quantization.'],
  ['Deployment', 'FastAPI, REST, Streamlit, Render, Docker, GitHub Actions, pytest, Qwen API.'],
  ['Programming', 'Python, Pandas, NumPy, SQLite, SQLAlchemy, Git, Jupyter.'],
  ['Analysis', 'EDA and statistical analysis. Tableau, Plotly, Matplotlib, Seaborn, GeoPandas, OSMnx, Folium.'],
  ['MEAL & research', 'Frameworks, survey design, household and community surveys, KoboToolbox, evaluation reporting.'],
]

function ExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="focus-ring inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] hover:text-cobalt"
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
    </a>
  )
}

export function Showcase() {
  return (
    <section id="portfolio" className="bg-paper-2 px-[6vw] py-[12vh] text-ink">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">03 &middot; Selected work</p>
          <h2 className="display mt-6 text-[clamp(44px,6vw,88px)]">Three systems you can open.</h2>
          <p className="mt-5 max-w-xl text-[17px] leading-7 text-umber">
            Live apps, with the result beside the title.
          </p>
        </Reveal>

        <div className="mt-12 border-b border-ink/20">
          {featured.map((project, index) => (
            <article key={project.title} className="case-row border-t border-ink/20 py-10 md:py-12">
              <p className="case-index eyebrow">{String(index + 1).padStart(2, '0')}</p>
              <div className="case-body">
                <p className="eyebrow !text-cobalt">{project.kicker}</p>
                <h3 className="display mt-3 text-[clamp(34px,4vw,56px)]">{project.title}</h3>
                <p className="mt-4 max-w-2xl text-[16px] leading-7">{project.summary}</p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-umber">{project.detail}</p>
                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-umber">{project.tags.join(' · ')}</p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                  <ExternalLink href={project.live}>Live app</ExternalLink>
                  <ExternalLink href={project.code}>Source</ExternalLink>
                </div>
              </div>
              <div className="case-metric-value">
                <p className="display text-[clamp(40px,4.6vw,68px)] leading-none">{project.metric}</p>
                <p className="eyebrow mt-2 md:mt-3">{project.metricLabel}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <p className="eyebrow">Also on GitHub</p>
          <div className="mt-6 border-b border-ink/20">
            {supporting.map((project, index) => (
              <article key={project.title} className="grid gap-3 border-t border-ink/20 py-6 sm:grid-cols-[4.5rem_1fr_auto] sm:items-start sm:gap-8">
                <p className="eyebrow pt-1">{String(index + 4).padStart(2, '0')}</p>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-umber">{project.detail}</p>
                </div>
                <ExternalLink href={project.code}>Source</ExternalLink>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <p className="eyebrow">Toolkit</p>
          <h3 className="display mt-4 text-[clamp(32px,4vw,52px)]">What I actually use.</h3>
          <dl className="mt-8 grid border-t border-l border-ink/20 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(([name, detail]) => (
              <div key={name} className="border-r border-b border-ink/20 p-6">
                <dt className="eyebrow !text-cobalt">{name}</dt>
                <dd className="mt-3 text-sm leading-6 text-ink">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
