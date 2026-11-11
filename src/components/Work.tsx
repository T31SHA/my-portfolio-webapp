import { caseStudies, furtherProjects, type CaseStudy, type Gauge } from '@/lib/content'
import { book, site } from '@/lib/site'
import { MaskIcon } from '@/components/EditorialMarks'
import { SectionHeading } from '@/components/SectionHeading'

const featured = [
  {
    id: 'flood-guard',
    num: '01',
    title: 'Nairobi Flood Guard',
    art: '/design/thumb-flood.svg',
    stat: '0.889 ROC AUC',
    summary: 'Geospatial ML team project. Flood early warning and matatu rerouting across 1,450 Kenyan wards. Best project of 2026.',
    href: 'https://nairobi-flood-guard-ai.netlify.app/',
    label: 'Nairobi-flood-guard-ai.netlify.app',
    arrow: true,
  },
  {
    id: 'drought',
    num: '02',
    title: 'SPEI Drought Forecaster',
    art: '/design/thumb-spei.svg',
    stat: '95.1% variance',
    summary: 'Time series forecasting of SPEI-12 drought for Oran, 1, 3 and 6 months ahead, from 76 years of monthly data.',
    href: 'https://drought-forcast.netlify.app/',
    label: 'Drought-forcast.netlify.app',
    arrow: true,
  },
  {
    id: 'cassavawatch',
    num: '03',
    title: 'CassavaWatch',
    art: '/design/thumb-cassava.svg',
    stat: '1.11 MB TFLite',
    summary: 'Computer vision, full-stack ML. Diagnoses cassava disease from 3 to 6 leaf photos, with English or Swahili advice.',
    href: 'https://cassavawatch.onrender.com/',
    label: 'Cassavawatch.onrender.com',
    arrow: false,
  },
  {
    id: 'handbook',
    num: '04',
    title: 'Data/ML Handbook',
    art: '/design/thumb-handbook.png',
    fill: true,
    stat: '147 pages',
    summary: 'Open source field guide from raw CSV to production: 23 sections, 89 figures and 50 code snippets run in CI.',
    label: 'Author / open source',
    arrow: false,
  },
]

const furtherCopy = [
  'Recall-optimised Random Forest on a leakage-safe pipeline.',
  'Forecast Safaricom (SCOM) prices with a chronological split.',
  'Classified users into five behavioural tiers from device telemetry.',
]
const furtherUnits = ['Telecom records', 'MAE', 'Users, five tiers']

function GaugeBar({ gauge }: { gauge: Gauge }) {
  const proportion = Math.max(0.004, Math.min(1, gauge.value / (gauge.max ?? 1)))
  return (
    <div className="detail-gauge">
      <div><span>{gauge.label}</span><strong>{gauge.display}</strong></div>
      <span className="gauge-track" aria-hidden="true"><span style={{ width: `${proportion * 100}%` }} /></span>
    </div>
  )
}

function ProjectNotes({ study }: { study: CaseStudy }) {
  return (
    <details className="disclose">
      <summary>Project notes for {study.title}</summary>
      <h4>Problem</h4>
      <p>{study.problem}</p>
      <h4>Approach</h4>
      <ol>{study.approach.map((step) => <li key={step}>{step}</li>)}</ol>
      {study.role ? <p>{study.role}</p> : null}
      <h4>Results</h4>
      <ul>{study.facts.map((fact) => <li key={fact.label}><strong>{fact.value}</strong> {fact.label}</li>)}</ul>
      <div>{study.gauges.map((gauge) => <GaugeBar key={gauge.label} gauge={gauge} />)}</div>
      <p><a href={study.code} target="_blank" rel="noopener noreferrer">Source on GitHub</a></p>
    </details>
  )
}

export function Work() {
  return (
    <section id="work" className="section-wrap work-section" aria-labelledby="work-title">
      <SectionHeading
        label="Featured work"
        action={(
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="github-pill">
            <span className="github-label">All projects on GitHub</span>
            <span className="github-badge"><MaskIcon src="/design/arrow-right.svg" size={11} /></span>
            <img className="github-only" src="/design/icon-github.svg" width={16} height={16} alt="" />
          </a>
        )}
      />
      <h2 id="work-title" className="sr-only">Featured work and projects</h2>

      <div className="featured-grid">
        {featured.map((project) => {
          const study = caseStudies.find((item) => item.id === project.id)
          return (
            <article id={project.id} className="project" key={project.id}>
              <div className="thumb">
                <img className={project.fill ? 'thumb-art thumb-handbook' : 'thumb-art'} src={project.art} alt="" />
                <span className="visual-stat">{project.stat}</span>
                {project.href ? (
                  <a className="play" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
                    <img src="/design/icon-arrow-ne.svg" width={18} height={18} alt="" />
                  </a>
                ) : (
                  <span className="play" aria-hidden="true"><img src="/design/icon-arrow-ne.svg" width={18} height={18} alt="" /></span>
                )}
              </div>
              <div className="project-meta">
                <span className="project-num mono">{project.num}</span>
                <h3 className="project-title display">{project.title}</h3>
              </div>
              <p className="project-summary">{project.summary}</p>
              {project.href ? (
                <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">
                  {project.label}
                  {project.arrow ? <MaskIcon src="/design/icon-arrow-ne.svg" size={10} /> : null}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <p className="project-link">{project.label}</p>
              )}
              {study ? <ProjectNotes study={study} /> : null}
            </article>
          )
        })}
      </div>

      <div className="further-grid">
        <h3 className="sr-only">Further projects</h3>
        {furtherProjects.map((project, index) => (
          <article key={project.title} className="further-card">
            <p className="figure"><strong>{project.figure}</strong><span>{furtherUnits[index]}</span></p>
            <h3>{project.title}</h3>
            <p className="blurb">{furtherCopy[index]}</p>
            <details className="disclose">
              <summary>Project notes for {project.title}</summary>
              <p>{project.detail}</p>
              <p><a href={project.code} target="_blank" rel="noopener noreferrer">Source on GitHub</a></p>
            </details>
          </article>
        ))}
        <article className="further-card book-card">
          <p className="book-kicker mono">A book / Jan 2026</p>
          <h3><a className="book-title" href={book.href} target="_blank" rel="noopener noreferrer">Wired for Discipline<span className="sr-only"> (opens in a new tab)</span></a></h3>
          <p className="blurb">My book on discipline and following through, published on Amazon.</p>
        </article>
      </div>
    </section>
  )
}
