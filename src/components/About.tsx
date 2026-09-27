import { ArrowUpRight, BookOpen, Download, FolderGit2, Timer } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const stats = [
  { icon: FolderGit2, value: '6+', label: 'Projects', note: 'Shipped & open-source' },
  { icon: BookOpen, value: '1+', label: 'Publications', note: 'Published author' },
  { icon: Timer, value: '3+', label: 'Years of Experience', note: 'Growing with every dataset' },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="eyebrow">About me</p>
        <div className="glass-surface mt-6 max-w-3xl rounded-full px-5 py-4 sm:px-7 sm:py-5">
          <p className="text-xl font-medium tracking-tight sm:text-2xl">“Turning raw data into decisions that matter.”</p>
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a href="/assets/sharahbil-abdi-cv.pdf" download className="btn-pill focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">
            <Download className="mr-2 h-4 w-4" strokeWidth={1.5} />
            Download CV
          </a>
          <a href="#portfolio" className="btn-ghost focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">
            View Projects
          </a>
        </div>
      </Reveal>

      <Reveal className="mt-12" delay={0.08}>
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map(({ icon: Icon, value, label, note }, index) => (
            <article key={label} className="card-surface hover-lift p-5">
              <div className="flex items-start justify-between text-muted-foreground">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <p className="mt-8 text-4xl font-extrabold tracking-tight">{value}</p>
              <p className="mt-1 font-medium">{label}</p>
              <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted-foreground">{index === 2 ? 'Always learning' : note}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
