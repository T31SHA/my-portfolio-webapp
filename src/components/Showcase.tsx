import { AnimatePresence, motion } from 'motion/react'
import { ExternalLink, Github } from 'lucide-react'
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
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          className="card-surface hover-lift overflow-hidden"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-1.5 border-b border-foreground/10 bg-foreground/[0.04] px-4 py-3 backdrop-blur-xl" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
            <span className="ml-2 h-2 w-1/2 rounded-full bg-muted-foreground/20" />
          </div>
          <img
            src={project.cover}
            alt={`${project.title} project cover`}
            width={640}
            height={400}
            className="aspect-[16/10] w-full object-cover grayscale"
          />
          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold leading-6">{project.title}</h3>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="focus-ring shrink-0 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-foreground/15 bg-foreground/[0.04] px-2 py-1 font-mono text-[0.575rem] uppercase tracking-[0.1em] text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  )
}

function PublicationsPanel() {
  return (
    <div className="mx-auto max-w-2xl divide-y divide-border">
      <article className="flex items-center justify-between gap-5 py-5">
        <div>
          <p className="font-semibold tracking-tight">WIRED FOR DISCIPLINE</p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">Amazon · Jan 2026</p>
        </div>
        <a
          href="https://amazon.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Read Wired for Discipline on Amazon"
          className="focus-ring text-muted-foreground transition-colors hover:text-foreground"
        >
          <ExternalLink className="h-5 w-5" strokeWidth={1.5} />
        </a>
      </article>
    </div>
  )
}

function StackPanel() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
      {stack.map(([name, slug]) => (
        <div key={name} className="card-surface flex min-h-28 flex-col items-center justify-center gap-3 p-4 text-center">
          {slug ? (
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`}
              alt={`${name} icon`}
              width={32}
              height={32}
              className="h-8 w-8 grayscale"
            />
          ) : (
            <span className="flex h-8 w-8 items-center justify-center border border-border font-mono text-sm text-muted-foreground" aria-hidden="true">
              {name.slice(0, 2).toUpperCase()}
            </span>
          )}
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.09em] text-muted-foreground">{name}</span>
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
    { id: 'stack', label: 'Tech Stack' },
  ]

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal className="text-center">
        <p className="eyebrow">Selected work</p>
        <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Portfolio Showcase</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Selected work across machine learning, forecasting and applied analytics.</p>
      </Reveal>

      <Reveal className="mt-9" delay={0.08}>
        <div className="glass-surface mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full p-1" role="tablist" aria-label="Portfolio sections">
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={cn(
                'focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none whitespace-nowrap rounded-full px-4 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm',
                tab === id && 'bg-foreground/10 text-foreground shadow-sm shadow-black/10',
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 min-h-[26rem]">
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
    </section>
  )
}
