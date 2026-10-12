import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, BookOpen, ChartColumn, Cpu, Database, GitBranch } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ProjectChart, type ChartId } from '@/components/ProjectCharts'
import { Reveal } from '@/components/Reveal'

type Tab = 'projects' | 'publications' | 'stack'

const projects = [
  {
    title: 'User Behaviour Prediction',
    description:
      'A product team needed five mobile-usage tiers, not a raw telemetry table. Logistic regression and a Random Forest were fit on 700 rows (battery, screen time, app use) with an 80/20 stratified split. Holdout accuracy and weighted F1 were both 1.00; the classes were highly separable.',
    tags: ['scikit-learn', 'Random Forest', 'Pandas'],
    chart: 'behaviour' as ChartId,
    href: 'https://github.com/T31SHA/User-Behaviour_Prediction',
  },
  {
    title: 'Customer Churn Prediction',
    description:
      'Churn was visible only after a telecom customer had already left. A leakage-safe pipeline on 3,333 accounts (about 15% churned) tuned a Random Forest for recall against a balanced logistic baseline, so likely leavers can be flagged before they cancel.',
    tags: ['scikit-learn', 'Random Forest', 'Pandas'],
    chart: 'churn' as ChartId,
    href: 'https://github.com/T31SHA/Customer-Churn_Prediction',
  },
  {
    title: 'NSE Stock Market Predictions',
    description:
      "Safaricom's daily move on the Nairobi Securities Exchange is large enough to matter to a portfolio. A Random Forest regressor trains on the first 80% of the year and tests on the last 20%, so the split stays forward-looking. Reported MAE on that holdout: KES 0.12.",
    tags: ['Random Forest', 'Time-series', 'Pandas'],
    chart: 'nse' as ChartId,
    href: 'https://github.com/T31SHA/NSE--Stock-Market_-Predictions',
  },
  {
    title: 'Drought Forecasting & Prediction',
    description:
      'A grid point in northwestern Algeria needed multi-month drought warning, not a historical chart. SARIMA, Ridge, XGBoost, and an LSTM were compared on 76 years of monthly SPEI and served in Streamlit. Best one-month SPEI-12 forecast: Ridge, R² 0.951, hit rate 98.3%.',
    tags: ['Ridge', 'XGBoost', 'Streamlit'],
    chart: 'drought' as ChartId,
    href: 'https://github.com/T31SHA/Drought-Forcasting_Prediction',
  },
  {
    title: 'Nairobi Flood Guard AI',
    description:
      'Flood response in Nairobi is reactive, and matatu routes still run through wards that flood. A team scored susceptibility from terrain, rainfall, and satellite extent, then rerouted road segments around high-risk wards. County-held-out XGBoost: ROC AUC 0.889, recall 0.80, precision 0.57.',
    tags: ['XGBoost', 'Spatial CV', 'Tableau'],
    chart: 'flood' as ChartId,
    href: 'https://github.com/T31SHA/Nairobi_Flood_Guard-AI',
  },
  {
    title: 'CassavaWatch',
    description:
      'Farmers and extension officers need a cassava diagnosis in the field, including offline and in Swahili. Three to six leaf photos per plant are classified as CBB, CBSD, CGM, CMD, or healthy, with treatment advice and an offline queue. Held-out accuracy on 500 balanced iCassava images: 75.2%.',
    tags: ['TensorFlow', 'TFLite', 'FastAPI'],
    chart: 'cassava' as ChartId,
    href: 'https://github.com/T31SHA/CassavaWatch',
  },
]

const skillGroups = [
  {
    label: 'Data',
    icon: Database,
    items: [
      ['Python', 'python'],
      ['Pandas', 'pandas'],
      ['NumPy', 'numpy'],
      ['SciPy', null],
    ],
  },
  {
    label: 'Modeling',
    icon: Cpu,
    items: [
      ['scikit-learn', 'scikitlearn'],
      ['TensorFlow', 'tensorflow'],
      ['PyTorch', 'pytorch'],
      ['Keras', 'keras'],
      ['MLflow', null],
    ],
  },
  {
    label: 'Visualization',
    icon: ChartColumn,
    items: [
      ['Matplotlib', 'matplotlib'],
      ['Plotly', 'plotly'],
      ['Tableau', null],
    ],
  },
  {
    label: 'Delivery',
    icon: GitBranch,
    items: [
      ['Git', 'git'],
      ['Bash', 'bash'],
    ],
  },
] as const

function ProjectsPanel() {
  return (
    <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          className="group"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href={project.href} target="_blank" rel="noreferrer" className="focus-ring block">
            <div className="overflow-hidden bg-ink shadow-[0_18px_40px_-32px_rgba(36,26,18,0.9)] transition-shadow duration-300 group-hover:shadow-[0_22px_44px_-28px_rgba(36,26,18,0.85)]">
              <ProjectChart id={project.chart} />
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-ink/20 pt-4 transition-colors duration-300 group-hover:border-ochre">
              <span className="eyebrow">{String(index + 1).padStart(2, '0')}</span>
              <ArrowUpRight className="h-4 w-4 text-umber transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ochre" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3 className="display mt-3 text-[30px] font-normal leading-[1.05] text-pretty">{project.title}</h3>
          </a>
          <p className="mt-3 text-sm leading-6 text-pretty text-umber">{project.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="border border-cobalt/25 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cobalt transition-colors duration-300 group-hover:border-cobalt/50"
              >
                {tag}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  )
}

const publications = [
  {
    eyebrow: 'Book · Amazon · Jan 2026',
    title: 'Wired for Discipline',
    href: 'https://www.amazon.com/WIRED-DISCIPLINE-People-Execute-Anyway-ebook/dp/B0GFXK3RD2/ref=sr_1_2?sr=8-2',
    label: 'Read Wired for Discipline on Amazon',
    external: true,
  },
  {
    eyebrow: 'Reference · PDF · 2026',
    title: 'SQL Cheat Sheet',
    detail:
      'The complete reference for data work. A4, 25 sections, 3 appendices, and 88 code examples, tested on PostgreSQL 17. Standard SQL, PostgreSQL, MySQL, and SQL Server.',
    href: '/assets/sql-cheat-sheet.pdf',
    label: 'Download the SQL Cheat Sheet PDF',
    cover: '/assets/sql-cheat-sheet-cover.webp',
    external: false,
  },
] as const

function PublicationsPanel() {
  return (
    <div className="mx-auto max-w-3xl border-t border-ink/20">
      {publications.map((item) => (
        <a
          key={item.title}
          href={item.href}
          {...(item.external ? { target: '_blank', rel: 'noreferrer' } : { download: true })}
          aria-label={item.label}
          className="focus-ring group flex items-center justify-between gap-6 border-b border-ink/20 py-8 transition-colors duration-300 hover:border-ochre"
        >
          <div className="flex min-w-0 items-center gap-5">
            {'cover' in item ? (
              <img
                src={item.cover}
                alt=""
                width={72}
                height={102}
                className="h-[102px] w-[72px] shrink-0 object-cover"
              />
            ) : null}
            <div className="min-w-0">
              <p className="eyebrow flex items-center gap-2">
                <BookOpen className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                {item.eyebrow}
              </p>
              <p className="display mt-3 text-[clamp(32px,4vw,52px)]">{item.title}</p>
              {'detail' in item ? <p className="mt-3 max-w-xl text-sm leading-6 text-pretty text-umber">{item.detail}</p> : null}
            </div>
          </div>
          <ArrowUpRight className="h-6 w-6 shrink-0 text-umber transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={1.25} />
        </a>
      ))}
    </div>
  )
}

function StackPanel() {
  return (
    <div>
      <p className="mb-8 max-w-3xl text-sm leading-6 text-pretty text-umber">
        Classification, regression, time-series forecasting, feature engineering, and model evaluation. The grid runs data, then modeling, then visualization, then delivery. Notebooks also use Seaborn, XGBoost, Streamlit, and FastAPI.
      </p>
      <div className="grid items-start gap-6 sm:grid-cols-2">
        {skillGroups.map(({ label, icon: Icon, items }) => (
          <section key={label} aria-label={label} className="border border-ink/15">
            <h3 className="eyebrow flex items-center gap-2.5 border-b border-ink/15 px-4 py-3">
              <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              {label}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3">
              {items.map(([name, slug]) => (
                <div
                  key={name}
                  className="group/skill flex min-h-28 flex-col items-center justify-center gap-3 border-b border-r border-ink/10 p-4 text-center transition-colors duration-300 hover:bg-paper"
                >
                  {slug ? (
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`}
                      alt=""
                      width={30}
                      height={30}
                      loading="lazy"
                      decoding="async"
                      className="h-[30px] w-[30px] opacity-80 grayscale sepia transition duration-300 group-hover/skill:opacity-100 group-hover/skill:grayscale-0 group-hover/skill:sepia-0"
                    />
                  ) : (
                    <span className="display flex h-[30px] w-[30px] items-center justify-center text-xl text-umber" aria-hidden="true">
                      {name.slice(0, 2)}
                    </span>
                  )}
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-umber">{name}</span>
                </div>
              ))}
            </div>
          </section>
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
                  'focus-ring border-b pb-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors duration-300',
                  tab === id ? 'border-ink text-ink' : 'border-transparent text-umber/70 hover:border-ochre/70 hover:text-ink',
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
