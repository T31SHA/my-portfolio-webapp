import { Reveal } from '@/components/Reveal'

const cortech = [
  'Lead MEAL and research on the firm’s 2025 and 2026 projects, including the assignments below.',
  'Set the framework before fieldwork, so monitoring, evaluation and learning are planned.',
  'Run household and community surveys in KoboToolbox, then clean, analyse and model the data in Python.',
  'Write the evaluation and research reports for government, multilateral and NGO clients.',
]

const ledger = [
  {
    year: '2026',
    items: [
      ['Federal Government of Somalia', 'Ministry of Agriculture & Irrigation — early warning and DRR training, with system design'],
      ['IGAD', 'End-of-project evaluation of Improving Land Governance in the IGAD Region, Phase II'],
    ],
  },
  {
    year: '2025',
    items: [
      ['World Bank', 'Capacity assessment of Somalia’s Federal Member State Ministries of Health'],
      ['IOM & African Union', 'Monitoring and implementation framework for the Free Movement of Persons Protocol'],
      ['Heifer International Kenya', 'Agritech landscape study on scaling digital agriculture'],
      ['Danish Refugee Council', 'Mapping financial service providers for refugees and host communities'],
      ['Qatar Red Crescent', 'SME financing capacity building in Somalia'],
      ['Welthungerhilfe', 'Evaluation of Chukua Control'],
    ],
  },
]

const study = [
  ['BSc, Mathematics and Computing', 'The Open University of Kenya'],
  ['Data Science', 'Moringa School, April 2026'],
  ['Data Visualization with Python', 'Moringa School, 2025'],
]

const marks = [
  ['Kaggle', 'Top 10%, Data Visualization Challenge'],
  ['Flood Guard', 'Best project of 2026'],
  ['Moringa', 'Best Problem Solver'],
  ['ICDL', 'Certified'],
]

export function Experience() {
  return (
    <section id="experience" className="bg-paper px-[6vw] py-[12vh] text-ink">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">04 &middot; Experience</p>
          <h2 className="display mt-5 text-[clamp(44px,6vw,84px)]">
            The research
            <br />
            <em>has a client.</em>
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-7 text-umber">
            Eight assignments in 2025 and 2026. I led the MEAL and research on each one, through Cortech Consulting Group.
          </p>
        </Reveal>

        <article className="mt-14 border-t border-ink/15 pt-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="display text-[clamp(34px,4vw,52px)]">MEAL Officer / Research</h3>
              <p className="mt-3 text-[15px] font-medium">Cortech Consulting Group</p>
            </div>
            <p className="text-sm text-umber">Nairobi · 2025 — Present</p>
          </div>
          <ol className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {cortech.map((point, index) => (
              <li key={point} className="border-t border-ink/10 pt-4">
                <span className="eyebrow">{String(index + 1).padStart(2, '0')}</span>
                <p className="mt-3 text-[15px] leading-7 text-umber">{point}</p>
              </li>
            ))}
          </ol>
        </article>

        <article className="mt-8 grid gap-3 border-t border-ink/15 py-7 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-10">
          <div>
            <h3 className="display text-[clamp(28px,3vw,36px)]">Data Analysis Trainer</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-umber">
              Trainify Institute of Technology. Python for multiple cohorts — Pandas, NumPy and visualization — from raw data through to the final presentation.
            </p>
          </div>
          <p className="text-sm text-umber">Nairobi · Part-time</p>
        </article>

        <div className="mt-16">
          <p className="eyebrow">Client ledger · Cortech</p>
          <div className="mt-8 space-y-12">
            {ledger.map((group) => (
              <div key={group.year} className="grid gap-6 md:grid-cols-[7.5rem_1fr] md:gap-10">
                <p className="display text-[42px] leading-none text-ochre">{group.year}</p>
                <div className="border-b border-ink/15">
                  {group.items.map(([client, detail]) => (
                    <article key={client} className="grid gap-1 border-t border-ink/15 py-5 md:grid-cols-[minmax(0,16rem)_1fr] md:items-baseline md:gap-8">
                      <h3 className="text-[16px] font-medium leading-6">{client}</h3>
                      <p className="text-sm leading-6 text-umber">{detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-12 border-t border-ink/15 pt-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow">Education</p>
            <dl className="mt-6 space-y-5">
              {study.map(([credential, school]) => (
                <div key={credential} className="border-t border-ink/10 pt-4">
                  <dt className="text-[17px] font-medium leading-6">{credential}</dt>
                  <dd className="mt-1 text-sm leading-6 text-umber">{school}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <p className="eyebrow">Recognition</p>
            <ul className="mt-6 grid grid-cols-2 gap-px bg-ink/10">
              {marks.map(([label, note]) => (
                <li key={label} className="bg-paper px-4 py-5">
                  <p className="eyebrow">{label}</p>
                  <p className="mt-2 text-sm leading-6">{note}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-umber">Somali, native. English and Kiswahili, fluent.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
