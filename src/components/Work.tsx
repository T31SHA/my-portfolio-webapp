import { ArrowUpRight, Github } from 'lucide-react'
import { caseStudies, furtherProjects, type CaseStudy, type Gauge } from '@/lib/content'

function GaugeBar({ gauge }: { gauge: Gauge }) {
  const v = Math.max(0.004, gauge.value / (gauge.max ?? 1))
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <span className="label text-muted">{gauge.label}</span>
        <span className="font-mono text-sm font-semibold tabular-nums">{gauge.display}</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink/10" aria-hidden="true">
        <div className="gauge-fill h-full rounded-full bg-signal-ink" style={{ ['--v' as string]: v }} />
      </div>
    </div>
  )
}

function CaseStudyArticle({ study, index }: { study: CaseStudy; index: number }) {
  const titleId = `${study.id}-title`
  return (
    <article id={study.id} aria-labelledby={titleId} className="grid gap-10 border-t border-ink py-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:py-20">
      <header className="lg:sticky lg:top-24 lg:self-start" data-reveal>
        <p className="label flex items-center gap-3 text-muted">
          <span className="text-signal-ink">{String(index + 1).padStart(2, '0')}</span>
          <span className="h-px w-8 bg-ink/30" aria-hidden="true" />
          {study.kind}
        </p>
        <h3 id={titleId} className="display mt-5 text-[clamp(2.25rem,4.6vw,3.75rem)]">
          {study.title}
        </h3>
        {study.note ? (
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1.5 text-sm font-medium text-paper">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
            {study.note}
          </p>
        ) : null}
        <p className="mt-8">
          <span className="display block text-[clamp(3.5rem,8vw,6rem)] text-signal-ink">{study.headline.value}</span>
          <span className="label mt-2 block text-muted">{study.headline.label}</span>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={study.live} target="_blank" rel="noopener noreferrer" className="btn bg-ink text-paper hover:bg-navy-2">
            Open live app
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            <span className="sr-only">: {study.title} (opens in a new tab)</span>
          </a>
          <a href={study.code} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <Github className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            Source
            <span className="sr-only">code for {study.title} on GitHub (opens in a new tab)</span>
          </a>
        </div>
      </header>

      <div className="grid gap-10" data-reveal>
        <div>
          <h4 className="label text-muted">Problem</h4>
          <p className="mt-3 font-display text-[clamp(1.375rem,2.3vw,1.875rem)] font-medium leading-[1.25] tracking-[-0.015em]">
            {study.problem}
          </p>
        </div>

        <div>
          <h4 className="label text-muted">Approach</h4>
          <ol className="mt-4 grid gap-0">
            {study.approach.map((step, i) => (
              <li key={step} className="grid grid-cols-[2.25rem_1fr] gap-2 border-t py-4 text-[1.0625rem] leading-relaxed">
                <span className="font-mono text-sm text-signal-ink">{String(i + 1).padStart(2, '0')}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          {study.role ? <p className="mt-2 text-sm italic text-muted">{study.role}</p> : null}
        </div>

        <div className="rounded-[1.25rem] bg-paper-2 p-6 sm:p-8">
          <h4 className="label text-muted">Results</h4>
          <dl className="mt-5 grid grid-cols-3 gap-x-4 gap-y-5 sm:gap-x-6">
            {study.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="sr-only">{fact.label}</dt>
                <dd className="m-0">
                  <span className="display block text-[clamp(1.375rem,5vw,2rem)]">{fact.value}</span>
                  <span className="mt-1 block text-sm leading-snug text-muted" aria-hidden="true">
                    {fact.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-7 grid gap-4 border-t pt-6">
            {study.gauges.map((gauge) => (
              <GaugeBar key={gauge.label} gauge={gauge} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="label text-muted">Stack</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {study.stack.map((tool) => (
              <li key={tool} className="rounded-full border px-3 py-1 font-mono text-[0.8125rem]">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="bg-paper py-[clamp(4.5rem,11vw,8rem)]">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16" data-reveal>
          <p className="label text-signal-ink">01 — Selected work</p>
          <div>
            <h2 id="work-title" className="display text-[clamp(2.75rem,6.5vw,5.25rem)]">
              Three systems, live, with the numbers attached.
            </h2>
            <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-muted">
              Each one is deployed and open source. The problem, what was built, how it was validated, and the result as
              measured on held-out data.
            </p>
          </div>
        </div>

        <div className="mt-16">
          {caseStudies.map((study, i) => (
            <CaseStudyArticle key={study.id} study={study} index={i} />
          ))}
        </div>

        <div className="border-t border-ink pt-14" data-reveal>
          <h3 className="label text-muted">Further projects</h3>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {furtherProjects.map((project) => (
              <li key={project.title} className="flex flex-col rounded-[1.25rem] border bg-paper p-6 transition-colors hover:border-ink/40">
                <p className="display text-[2.25rem] text-signal-ink">{project.figure}</p>
                <p className="label mt-1 text-muted">{project.figureLabel}</p>
                <h4 className="mt-6 font-display text-xl font-semibold tracking-tight">{project.title}</h4>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{project.detail}</p>
                <p className="mt-4 font-mono text-[0.8125rem] text-muted">{project.stack.join(' · ')}</p>
                <a href={project.code} target="_blank" rel="noopener noreferrer" className="link-arrow mt-auto pt-6 text-[0.9375rem]">
                  Source on GitHub
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">: {project.title} (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
