import type { CSSProperties } from 'react'
import { ArrowUpRight, Medal } from 'lucide-react'
import { meal, recognition } from '@/lib/content'
import { SectionHeading } from '@/components/SectionHeading'
import { RotatingBadge } from '@/components/EditorialMarks'

const clientNames = [
  'World Bank', 'IGAD', 'IOM', 'African Union', 'Federal Government of Somalia',
  'Heifer International Kenya', 'Danish Refugee Council', 'Welthungerhilfe', 'Qatar Red Crescent',
]

const awards = [
  { mark: 'BEST OF 2026', award: 'Nairobi Flood Guard', tone: 'dark' },
  { mark: 'TOP 10%', award: 'Kaggle Data Visualization Challenge', tone: 'cream' },
  { mark: 'BEST PROBLEM SOLVER', award: 'Moringa School Bootcamp', tone: 'rust' },
]

export function Recognition() {
  return (
    <section id="recognition" className="section-wrap recognition-section" aria-labelledby="recognition-title">
      <span id="clients" className="anchor-alias" aria-hidden="true" />
      <SectionHeading label="CLIENTS & RECOGNITION" />
      <h2 id="recognition-title" className="sr-only">Clients and recognition</h2>
      <div className="awards-grid">
        {awards.map((item, index) => (
          <article className={`award-card award-${item.tone}`} key={item.mark} data-reveal style={{ '--reveal-delay': `${index * 60}ms` } as CSSProperties}>
            <span className="award-icon"><Medal aria-hidden="true" /></span>
            <div className="award-copy"><p className="award-mark display">{item.mark}</p><p className="award-name">{item.award}</p></div>
          </article>
        ))}
        <RotatingBadge id="recognition-badge-path" className="recognition-badge" />
      </div>

      <div className="client-strip" data-reveal aria-label="Clients and organisations">
        <p className="client-strip-title sr-only">Clients and partners</p>
        <ul>{clientNames.map((client) => <li key={client}>{client}</li>)}</ul>
      </div>

      <details id="research" className="research-details" data-reveal>
        <summary><span>Selected MEAL and research assignments</span><ArrowUpRight aria-hidden="true" /></summary>
        <p className="research-context">
          Evidence for programmes that have to deliver. MEAL Officer / Research at Cortech Consulting Group ({meal.period}), covering the assignment cycle from framework and fieldwork through analysis and reporting.
        </p>
        <ol className="meal-chain">
          {meal.chain.map((item) => <li key={item.step}><strong>{item.step}</strong><span>{item.detail}</span></li>)}
        </ol>
        <div className="assignment-years">
          {meal.assignments.map((group) => (
            <div key={group.year}>
              <h3 className="display">{group.year}</h3>
              <ul>{group.items.map(([client, detail]) => <li key={client}><strong>{client}</strong><span>{detail}</span></li>)}</ul>
            </div>
          ))}
        </div>
        <p className="additional-recognition"><strong>Additional recognition:</strong> {recognition[3][0]} {recognition[3][1]}.</p>
      </details>
    </section>
  )
}
