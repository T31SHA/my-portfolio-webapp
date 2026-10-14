import { Reveal } from '@/components/Reveal'

const roles = [
  {
    title: 'MEAL Officer / Research',
    org: 'Cortech Consulting Group',
    meta: 'Nairobi, Kenya · 2025 — Present',
    points: [
      'Lead the MEAL and research work on the firm’s 2025 and 2026 projects, including the eight assignments below.',
      'Set up a framework for every assignment so monitoring, evaluation and learning are planned before fieldwork starts.',
      'Run household and community surveys in KoboToolbox, then clean, analyse and model the data in Python.',
      'Write the evaluation and research reports that go to government, multilateral and NGO clients.',
    ],
  },
  {
    title: 'Data Analysis Trainer',
    org: 'Trainify Institute of Technology',
    meta: 'Nairobi · Remote / hybrid · Part-time',
    points: [
      'Teach Python data analysis — Pandas, NumPy and visualization — to multiple cohorts.',
      'Mentor students through a full project, from raw data to the final presentation.',
    ],
  },
]

const assignments = [
  ['2026', 'Federal Government of Somalia', 'Ministry of Agriculture & Irrigation — early warning and DRR training, with system design'],
  ['2026', 'IGAD', 'End-of-project evaluation of Improving Land Governance in the IGAD Region, Phase II'],
  ['2025', 'World Bank', 'Capacity assessment of Somalia’s Federal Member State Ministries of Health'],
  ['2025', 'IOM & African Union', 'Monitoring and implementation framework for the Free Movement of Persons Protocol'],
  ['2025', 'Heifer International Kenya', 'Agritech landscape study on scaling digital agriculture'],
  ['2025', 'Danish Refugee Council', 'Mapping financial service providers for refugees and host communities'],
  ['2025', 'Qatar Red Crescent', 'SME financing capacity building in Somalia'],
  ['2025', 'Welthungerhilfe', 'Evaluation of Chukua Control'],
]

const study = [
  ['BSc, Mathematics and Computing', 'The Open University of Kenya'],
  ['Data Science', 'Moringa School · April 2026'],
  ['Data Visualization with Python', 'Moringa School · 2025'],
]

export function Experience() {
  return (
    <section id="experience" className="bg-paper px-[6vw] py-[12vh] text-ink">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">04 &middot; Experience</p>
          <h2 className="display mt-6 text-[clamp(44px,6vw,88px)]">
            The research
            <br />
            <em className="text-umber">has a client.</em>
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-7 text-umber">
            Eight assignments in 2025 and 2026. I led the MEAL and research on each one, through Cortech Consulting Group.
          </p>
        </Reveal>

        <div className="mt-14 space-y-14">
          {roles.map((role) => (
            <article key={role.title} className="grid gap-6 border-t border-ink/20 pt-8 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-16">
              <div>
                <h3 className="display text-[clamp(28px,3vw,40px)]">{role.title}</h3>
                <p className="mt-3 text-sm font-semibold">{role.org}</p>
                <p className="mt-1 text-sm text-umber">{role.meta}</p>
              </div>
              <ul className="space-y-3 text-[15px] leading-7 text-umber">
                {role.points.map((point) => (
                  <li key={point} className="border-l border-ochre pl-4">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <p className="eyebrow">Selected assignments · Cortech</p>
          <div className="mt-6 border-b border-ink/20">
            {assignments.map(([year, client, detail]) => (
              <article key={`${year}-${client}`} className="grid gap-1 border-t border-ink/20 py-5 sm:grid-cols-[4.5rem_minmax(0,16rem)_1fr] sm:gap-6 sm:py-4">
                <p className="eyebrow pt-1">{year}</p>
                <h3 className="text-[15px] font-semibold leading-6">{client}</h3>
                <p className="text-sm leading-6 text-umber">{detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-ink/20 pt-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow">Education</p>
            <dl className="mt-5 space-y-4">
              {study.map(([credential, school]) => (
                <div key={credential}>
                  <dt className="text-[15px] font-semibold">{credential}</dt>
                  <dd className="text-sm text-umber">{school}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <p className="eyebrow">Recognition</p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-umber">
              <li>Top 10%, Kaggle Data Visualization Challenge.</li>
              <li>Member of the team behind Nairobi Flood Guard AI, named best project of 2026.</li>
              <li>Best Problem Solver, Moringa School bootcamp.</li>
              <li>ICDL certification.</li>
            </ul>
            <p className="mt-6 text-sm text-ink">
              Somali, native. English and Kiswahili, fluent.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
