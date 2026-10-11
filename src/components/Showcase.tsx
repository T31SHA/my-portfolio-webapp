import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/Reveal'

type Tab = 'projects' | 'publications' | 'stack'

const projects = [
  {
    title: 'User Behaviour Prediction',
    description:
      'A product team needed five mobile-usage tiers, not a raw telemetry table. Logistic regression and a Random Forest were fit on 700 rows (battery, screen time, app use) with an 80/20 stratified split. Holdout accuracy and weighted F1 were both 1.00; the classes were highly separable.',
    tags: ['scikit-learn', 'Random Forest', 'Pandas'],
    cover: '/assets/cover-01.svg',
    href: 'https://github.com/T31SHA/User-Behaviour_Prediction',
  },
  {
    title: 'Customer Churn Prediction',
    description:
      'Churn was visible only after a telecom customer had already left. A leakage-safe pipeline on 3,333 accounts (about 15% churned) tuned a Random Forest for recall against a balanced logistic baseline. Holdout recall on the churned class: [X%].',
    tags: ['scikit-learn', 'Random Forest', 'Pandas'],
    cover: '/assets/cover-02.svg',
    href: 'https://github.com/T31SHA/Customer-Churn_Prediction',
  },
  {
    title: 'NSE Stock Market Predictions',
    description:
      "Safaricom's daily move on the Nairobi Securities Exchange is large enough to matter to a portfolio. A Random Forest regressor trains on the first 80% of the year and tests on the last 20%, so the split stays forward-looking. Reported MAE on that holdout: KES 0.12.",
    tags: ['Random Forest', 'Time-series', 'Pandas'],
    cover: '/assets/cover-03.svg',
    href: 'https://github.com/T31SHA/NSE--Stock-Market_-Predictions',
  },
  {
    title: 'Drought Forecasting & Prediction',
    description:
      'A grid point in northwestern Algeria needed multi-month drought warning, not a historical chart. SARIMA, Ridge, XGBoost, and an LSTM were compared on 76 years of monthly SPEI and served in Streamlit. Best one-month SPEI-12 forecast: Ridge, R² 0.951, hit rate 98.3%.',
    tags: ['Ridge', 'XGBoost', 'Streamlit'],
    cover: '/assets/cover-04.svg',
    href: 'https://github.com/T31SHA/Drought-Forcasting_Prediction',
  },
  {
    title: 'Nairobi Flood Guard AI',
    description:
      'Flood response in Nairobi is reactive, and matatu routes still run through wards that flood. A team scored susceptibility from terrain, rainfall, and satellite extent, then rerouted road segments around high-risk wards. County-held-out XGBoost: ROC AUC 0.889, recall 0.80, precision 0.57.',
    tags: ['XGBoost', 'Spatial CV', 'Tableau'],
    cover: '/assets/cover-05.svg',
    href: 'https://github.com/T31SHA/Nairobi_Flood_Guard-AI',
  },
  {
    title: 'CassavaWatch',
    description:
      'Farmers and extension officers need a cassava diagnosis in the field, including offline and in Swahili. Three to six leaf photos per plant are classified as CBB, CBSD, CGM, CMD, or healthy, with treatment advice and an offline queue. Held-out accuracy on 500 balanced iCassava images: 75.2%.',
    tags: ['TensorFlow', 'TFLite', 'FastAPI'],
    cover: '/assets/cover-06.svg',
    href: 'https://github.com/T31SHA/CassavaWatch',
  },
]

const stack = [
  ['Python', 'python'],
  ['Pandas', 'pandas'],
  ['NumPy', 'numpy'],
  ['SciPy', null],
  ['scikit-learn', 'scikitlearn'],
  ['TensorFlow', 'tensorflow'],
  ['PyTorch', 'pytorch'],
  ['Keras', 'keras'],
  ['MLflow', null],
  ['Matplotlib', 'matplotlib'],
  ['Plotly', 'plotly'],
  ['Tableau', null],
  ['Git', 'git'],
  ['Bash', 'bash'],
] as const

function ProjectsPanel() {
  return (
    <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          className="group"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href={project.href} target="_blank" rel="noreferrer" className="focus-ring block" aria-label={`${project.title} on GitHub`}>
            <div className="overflow-hidden bg-ochre">
              <img
                src={project.cover}
                alt=""
                width={640}
                height={400}
                className="aspect-[16/10] w-full object-cover mix-blend-multiply grayscale transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-ink/20 pt-4">
              <span className="eyebrow">{String(index + 1).padStart(2, '0')}</span>
              <ArrowUpRight className="h-4 w-4 text-umber transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3 className="display mt-3 text-[30px] font-normal leading-[1.05]">{project.title}</h3>
          </a>
          <p className="mt-3 text-sm leading-6 text-umber">{project.description}</p>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-cobalt">{project.tags.join(' · ')}</p>
        </motion.article>
      ))}
    </div>
  )
}

function PublicationsPanel() {
  return (
    <div className="mx-auto max-w-3xl border-t border-ink/20">
      <a
        href="https://amazon.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Read Wired for Discipline on Amazon"
        className="focus-ring group flex items-center justify-between gap-6 border-b border-ink/20 py-8"
      >
        <div>
          <p className="eyebrow">Book &middot; Amazon &middot; Jan 2026</p>
          <p className="display mt-3 text-[clamp(32px,4vw,52px)]">Wired for Discipline</p>
        </div>
        <ArrowUpRight className="h-6 w-6 shrink-0 text-umber transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={1.25} />
      </a>
    </div>
  )
}

function StackPanel() {
  return (
    <div>
      <p className="mb-6 max-w-3xl text-sm leading-6 text-umber">
        Classification, regression, time-series forecasting, feature engineering, and model evaluation. The grid runs data, then modeling, then visualization, then delivery. Notebooks also use Seaborn, XGBoost, Streamlit, and FastAPI.
      </p>
      <div className="grid grid-cols-2 border-l border-t border-ink/20 sm:grid-cols-4 lg:grid-cols-7">
      {stack.map(([name, slug]) => (
        <div key={name} className="flex min-h-32 flex-col items-center justify-center gap-3 border-b border-r border-ink/20 p-4 text-center">
          {slug ? (
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`}
              alt=""
              width={30}
              height={30}
              className="h-[30px] w-[30px] opacity-80 grayscale sepia"
            />
          ) : (
            <span className="display flex h-[30px] w-[30px] items-center justify-center text-xl text-umber" aria-hidden="true">
              {name.slice(0, 2)}
            </span>
          )}
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-umber">{name}</span>
        </div>
      ))}
      </div>
    </div>
  )
}

export function Showcase() {
  const [tab, setTab] = useState<Tab>('projects')
  const tabs: { id: Tab; label: string }[] = [
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'stack', label: 'Skills' },
  ]

  return (
    <section id="portfolio" className="bg-paper-2 px-[6vw] py-[16vh] text-ink">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="eyebrow">03 &middot; Selected work</p>
            <h2 className="display mt-6 text-[clamp(44px,6.2vw,92px)]">Portfolio</h2>
            <p className="mt-4 max-w-md text-umber">Each project states the problem, the approach, and the holdout result.</p>
          </div>
          <div className="flex gap-6 sm:gap-9" role="tablist" aria-label="Portfolio sections">
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={tab === id}
                onClick={() => setTab(id)}
                className={cn(
                  'focus-ring border-b pb-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors',
                  tab === id ? 'border-ink text-ink' : 'border-transparent text-umber/70 hover:text-ink',
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 min-h-[26rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={tab}
              role="tabpanel"
              aria-label={tabs.find((item) => item.id === tab)?.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {tab === 'projects' ? <ProjectsPanel /> : tab === 'publications' ? <PublicationsPanel /> : <StackPanel />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
