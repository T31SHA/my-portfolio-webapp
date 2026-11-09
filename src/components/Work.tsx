import type { CSSProperties } from 'react'
import { ArrowUpRight, Github } from 'lucide-react'
import { caseStudies, furtherProjects, type CaseStudy, type Gauge } from '@/lib/content'
import { book, site } from '@/lib/site'
import { ProjectThumb, type ProjectThumbVariant } from '@/components/EditorialMarks'
import { SectionHeading } from '@/components/SectionHeading'

const thumbById: Record<string, ProjectThumbVariant> = {
  'flood-guard': 'flood',
  drought: 'drought',
  cassavawatch: 'cassava',
}

function GaugeBar({ gauge }: { gauge: Gauge }) {
  const proportion = Math.max(0.004, Math.min(1, gauge.value / (gauge.max ?? 1)))
  return (
    <div className="detail-gauge">
      <div><span>{gauge.label}</span><strong>{gauge.display}</strong></div>
      <span className="gauge-track" aria-hidden="true"><span style={{ width: `${proportion * 100}%` }} /></span>
    </div>
  )
}

function ProjectDetails({ study }: { study: CaseStudy }) {
  return (
    <details className="project-details">
      <summary>Project notes <ArrowUpRight aria-hidden="true" /></summary>
      <div className="project-detail-copy">
        <h4>Problem</h4>
        <p>{study.problem}</p>
        <h4>Approach</h4>
        <ol>{study.approach.map((step) => <li key={step}>{step}</li>)}</ol>
        {study.role ? <p className="project-role-note">{study.role}</p> : null}
        <h4>Results</h4>
        <ul className="project-facts">{study.facts.map((fact) => <li key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></li>)}</ul>
        <div className="project-gauges">{study.gauges.map((gauge) => <GaugeBar key={gauge.label} gauge={gauge} />)}</div>
        <h4>Tools</h4>
        <ul className="mini-tags">{study.stack.map((tool) => <li key={tool}>{tool}</li>)}</ul>
      </div>
    </details>
  )
}

function FeaturedCard({ study, index }: { study: CaseStudy; index: number }) {
  const variant = thumbById[study.id] ?? 'flood'
  const title = study.id === 'drought' ? 'SPEI Drought Forecaster' : study.title
  const liveHost = new URL(study.live).hostname.toUpperCase()
  return (
    <article id={study.id} className="project-card" data-reveal style={{ '--reveal-delay': `${index * 60}ms` } as CSSProperties}>
      <div className={`project-visual project-visual-${variant}`}><ProjectThumb variant={variant} /><span className="visual-stat">{study.headline.value} <small>{study.headline.label}</small></span></div>
      <div className="project-card-body">
        <p className="project-tag">{study.kind}</p>
        <h3 className="display project-title">{title}</h3>
        <p className="project-result"><strong>{study.headline.value}</strong><span>{study.headline.label}</span></p>
        <p className="project-summary">{study.problem}{study.note ? ` ${study.note}.` : ''}</p>
        <div className="project-actions">
          <a href={study.live} target="_blank" rel="noopener noreferrer" className="project-url">{liveHost}<ArrowUpRight aria-hidden="true" /><span className="sr-only"> for {title} (opens in a new tab)</span></a>
          <a href={study.code} target="_blank" rel="noopener noreferrer" aria-label={`Source code for ${study.title} on GitHub`} className="icon-link"><Github aria-hidden="true" /></a>
        </div>
        <ProjectDetails study={study} />
      </div>
    </article>
  )
}

export function Work() {
  return (
    <section id="work" className="section-wrap work-section" aria-labelledby="work-title">
      <SectionHeading
        label="FEATURED WORK"
        action={<a href={site.github} target="_blank" rel="noopener noreferrer" className="button button-ghost compact-button">ALL PROJECTS ON GITHUB <ArrowUpRight aria-hidden="true" /></a>}
      />
      <h2 id="work-title" className="sr-only">Featured work and projects</h2>

      <div className="featured-grid">
        {caseStudies.map((study, index) => <FeaturedCard key={study.id} study={study} index={index} />)}
        <article id="book" className="project-card handbook-card" data-reveal style={{ '--reveal-delay': '180ms' } as CSSProperties}>
          <div className="project-visual project-visual-handbook"><ProjectThumb variant="handbook" /><span className="visual-stat">147 <small>Pages</small></span></div>
          <div className="project-card-body">
            <p className="project-tag">OPEN SOURCE REFERENCE</p>
            <h3 className="display project-title">Data/ML Handbook</h3>
            <p className="project-result"><strong>147</strong><span>pages</span></p>
            <p className="project-summary">Open-source Data/ML reference.</p>
          </div>
        </article>
      </div>

      <div className="further-work" data-reveal>
        <h3 className="sr-only">Further projects</h3>
        <div className="further-grid">
          {furtherProjects.map((project, index) => (
            <article key={project.title} className="further-card" data-reveal style={{ '--reveal-delay': `${index * 60}ms` } as CSSProperties}>
              <p className="further-metric display">{project.figure}</p>
              <p className="further-label">{project.figureLabel}</p>
              <h4 className="display">{project.title}</h4>
              <p className="further-stack">{project.stack.join(' · ')}</p>
              <details className="project-details compact-details">
                <summary>Project notes <ArrowUpRight aria-hidden="true" /></summary>
                <p>{project.detail}</p>
              </details>
              <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-link">SOURCE ON GITHUB <ArrowUpRight aria-hidden="true" /><span className="sr-only"> for {project.title} (opens in a new tab)</span></a>
            </article>
          ))}
          <article className="further-card book-card" data-reveal>
            <p className="further-metric display">JAN 2026</p>
            <p className="further-label">PUBLISHED ON AMAZON</p>
            <h4 className="display">{book.title}</h4>
            <p className="book-description">My book on discipline and following through, published on Amazon in {book.published}. The same habit that gets a model from notebook to live app.</p>
            <a href={book.href} target="_blank" rel="noopener noreferrer" className="text-link">READ ON AMAZON <ArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          </article>
        </div>
      </div>
    </section>
  )
}
