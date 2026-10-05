import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/Reveal'

type Tab = 'projects' | 'publications' | 'stack'

const projects = [
  {
    title: 'User Behaviour Prediction',
    description: 'Predictive model analyzing user behavior patterns to support product and engagement decisions.',
    tags: ['Python', 'scikit-learn', 'Pandas'],
    cover: '/assets/cover-01.svg',
    href: 'https://github.com/T31SHA/User-Behaviour_Prediction',
  },
  {
    title: 'Customer Churn Prediction',
    description: 'Machine learning model identifying at-risk customers to support retention strategy.',
    tags: ['XGBoost', 'Pandas', 'Matplotlib'],
    cover: '/assets/cover-02.svg',
    href: 'https://github.com/T31SHA/Customer-Churn_Prediction',
  },
  {
    title: 'NSE Stock Market Predictions',
    description: 'Time-series forecasting for Nairobi Securities Exchange stock movements.',
    tags: ['Python', 'Time-series', 'Jupyter'],
    cover: '/assets/cover-03.svg',
    href: 'https://github.com/T31SHA/NSE--Stock-Market_-Predictions',
  },
  {
    title: 'Drought Forecasting & Prediction',
    description: 'Multi-horizon SPEI drought forecasts for northwestern Algeria, built from 76 years of climate data.',
    tags: ['Python', 'XGBoost', 'Streamlit'],
    cover: '/assets/cover-04.svg',
    href: 'https://github.com/T31SHA/Drought-Forcasting_Prediction',
  },
  {
    title: 'Nairobi Flood Guard AI',
    description: 'Flood susceptibility analysis and matatu route optimization for flood-aware travel in Kenya.',
    tags: ['Flood Risk', 'Route Optimization', 'Tableau'],
    cover: '/assets/cover-05.svg',
    href: 'https://github.com/T31SHA/Nairobi_Flood_Guard-AI',
  },
  {
    title: 'CassavaWatch',
    description: 'Mobile-first cassava disease diagnosis with treatment advice in English or Swahili, including offline support.',
    tags: ['Python', 'Plant Disease', 'Offline-ready'],
    cover: '/assets/cover-06.svg',
    href: 'https://github.com/T31SHA/CassavaWatch',
  },
]

const stack = [
  ['Python', 'python'],
  ['Pandas', 'pandas'],
  ['NumPy', 'numpy'],
  ['scikit-learn', 'scikitlearn'],
  ['TensorFlow', 'tensorflow'],
  ['PyTorch', 'pytorch'],
  ['Keras', 'keras'],
  ['Matplotlib', 'matplotlib'],
  ['Plotly', 'plotly'],
  ['Bash', 'bash'],
  ['Git', 'git'],
  ['SciPy', null],
  ['mlflow', null],
  ['Tableau', null],
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
  )
}

export function Showcase() {
  const [tab, setTab] = useState<Tab>('projects')
  const tabs: { id: Tab; label: string }[] = [
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'stack', label: 'Tech stack' },
  ]

  return (
    <section id="portfolio" className="bg-paper-2 px-[6vw] py-[16vh] text-ink">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="eyebrow">03 &middot; Selected work</p>
            <h2 className="display mt-6 text-[clamp(44px,6.2vw,92px)]">Portfolio</h2>
            <p className="mt-4 max-w-md text-umber">Machine learning, forecasting and applied analytics, from Nairobi outward.</p>
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
