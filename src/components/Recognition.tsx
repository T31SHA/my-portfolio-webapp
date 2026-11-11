import { meal, recognition } from '@/lib/content'
import { RotatingBadge } from '@/components/EditorialMarks'
import { SectionHeading } from '@/components/SectionHeading'

const lineOne = [
  ['World Bank', false],
  ['IGAD', true],
  ['IOM', false],
  ['African Union', true],
  ['Federal Government of Somalia', false],
  ['Heifer International Kenya', true],
  ['Danish Refugee Council', false],
] as const

const lineTwo = [
  ['Welthungerhilfe', true],
  ['Qatar Red Crescent', false],
] as const

const awards = [
  {
    mark: 'Best of 2026',
    name: 'Nairobi Flood Guard',
    note: 'Recognised as the best project of 2026',
    tone: 'dark',
    icon: '/design/icon-award-dark.svg',
  },
  {
    mark: 'Top 10%',
    name: 'Kaggle Data Visualization Challenge',
    tone: 'light',
    icon: '/design/icon-award-light.svg',
  },
  {
    mark: 'Best Problem Solver',
    name: 'Moringa School Bootcamp',
    tone: 'light',
    icon: '/design/icon-award-solver.svg',
  },
]

function ClientLine({ names, lead = false }: { names: readonly (readonly [string, boolean])[]; lead?: boolean }) {
  return (
    <p className="client-line">
      {lead ? <img src="/design/sparkle-rust-xs.svg" width={12} height={12} alt="" /> : null}
      {names.map(([name, olive], index) => (
        <span key={name} style={{ display: 'contents' }}>
          {index > 0 ? <img src="/design/sparkle-rust-xs.svg" width={12} height={12} alt="" /> : null}
          <span className={olive ? 'client-name olive' : 'client-name'}>{name}</span>
        </span>
      ))}
    </p>
  )
}

export function Recognition() {
  return (
    <section id="recognition" className="section-wrap recognition-section" aria-labelledby="recognition-title">
      <SectionHeading label="Clients & recognition" />
      <h2 id="recognition-title" className="sr-only">Clients and recognition</h2>
      <div className="recog-row">
        <div className="awards-grid">
          {awards.map((item) => (
            <article className={`award-card award-${item.tone}`} key={item.mark}>
              <span className="award-icon"><img src={item.icon} width={24} height={24} alt="" /></span>
              <div className="award-copy">
                <p className="award-mark display">{item.mark}</p>
                <p className="award-name">{item.name}</p>
                {item.note ? <p className="award-note">{item.note}</p> : null}
              </div>
            </article>
          ))}
        </div>
        <RotatingBadge id="recognition-badge-path" text="CLIENTS * PARTNERS * FIELD * " center="spark" className="recognition-badge" />
      </div>

      <div className="client-strip" aria-label="Clients and organisations">
        <ClientLine names={lineOne} />
        <ClientLine names={lineTwo} lead />
      </div>

      <details id="research" className="disclose">
        <summary>Selected MEAL and research assignments</summary>
        <p>
          Evidence for programmes that have to deliver. MEAL Officer / Research at Cortech Consulting Group ({meal.period}), covering the assignment cycle from framework and fieldwork through analysis and reporting.
        </p>
        <ol>
          {meal.chain.map((item) => <li key={item.step}><strong>{item.step}</strong> {item.detail}</li>)}
        </ol>
        {meal.assignments.map((group) => (
          <div key={group.year}>
            <h3>{group.year}</h3>
            <ul>{group.items.map(([client, detail]) => <li key={client}><strong>{client}</strong> {detail}</li>)}</ul>
          </div>
        ))}
        <p>Additional recognition: {recognition[3][0]} {recognition[3][1]}.</p>
      </details>
    </section>
  )
}
