import { Download } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const stats = [
  { value: '6+', label: 'Projects', note: 'Open-source ML, forecasting, and decision support' },
  { value: '1', label: 'Book', note: 'Wired for Discipline, January 2026' },
  { value: '3+', label: 'Years', note: 'Modeling, forecasting, and analyst training' },
]

export function About() {
  return (
    <section id="about" className="bg-paper px-[6vw] py-[16vh] text-ink">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.25fr_1fr] md:gap-20">
        <Reveal>
          <p className="eyebrow">02 &middot; About me</p>
          <h2 className="display mt-6 text-[clamp(44px,6.2vw,92px)]">
            From raw data
            <br />
            <em className="text-umber">to the decision.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="md:pt-14">
          <p className="text-[17px] leading-[1.7] text-pretty text-umber">
            I am Sharahbill Mohamed Abdi, a data/ML engineer in Nairobi. I take a messy table through to a model, a holdout metric, and the decision that metric is supposed to change, across telecom, markets, climate, and agriculture.
          </p>
          <ul className="mt-6 space-y-3 text-[17px] leading-[1.7] text-umber">
            <li className="grid grid-cols-[0.7rem_1fr] gap-3">
              <span className="mt-[0.55em] h-1.5 w-1.5 bg-ochre" aria-hidden="true" />
              <span>
                Teach Python data analysis (Pandas, NumPy, and visualization) to multiple cohorts as a part-time Data Analysis Trainer at Trainify Institute of Technology, Nairobi (remote/hybrid), so each cohort can open a raw file and work it themselves.
              </span>
            </li>
            <li className="grid grid-cols-[0.7rem_1fr] gap-3">
              <span className="mt-[0.55em] h-1.5 w-1.5 bg-ochre" aria-hidden="true" />
              <span>
                Guide those cohorts from a raw dataset to an analysis they can explain: the cleaning, the chart, and the recommendation they would hand to a stakeholder.
              </span>
            </li>
          </ul>
          <p className="mt-6 text-[17px] leading-[1.7] text-pretty text-umber">
            Data Science at Moringa School (ongoing), after Data Visualization with Python (2025). ICDL certified. Best Problem Solver, Moringa School Bootcamp. Top 10% in a Kaggle Data Visualization Challenge.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/assets/sharahbil-abdi-cv.pdf" download className="btn-ink focus-ring">
              <Download className="h-4 w-4" strokeWidth={1.5} />
              Download CV
            </a>
            <a href="#portfolio" className="btn-line focus-ring">
              View work
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.12} className="mx-auto mt-[12vh] max-w-6xl">
        <dl className="grid border-t border-ink/20 sm:grid-cols-3">
          {stats.map(({ value, label, note }, index) => (
            <div key={label} className="border-b border-ink/20 py-8 sm:border-b-0 sm:border-l sm:px-8 sm:first:border-l-0 sm:first:pl-0">
              <dt className="eyebrow">
                {String(index + 1).padStart(2, '0')} &middot; {label}
              </dt>
              <dd className="m-0">
                <span className="display mt-5 block text-[clamp(64px,7vw,108px)] tabular-nums leading-none">{value}</span>
                <span className="mt-4 block text-sm leading-relaxed text-pretty text-umber">{note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
