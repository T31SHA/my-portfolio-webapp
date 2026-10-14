import { Download } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { site } from '@/lib/site'

const stats = [
  { value: '0.889', label: 'ROC AUC', note: 'Flood risk across 1,450 Kenyan wards, county-held-out' },
  { value: '95.1%', label: 'Variance', note: 'SPEI-12 drought, explained. 98.3% directional accuracy' },
  { value: '8', label: 'Assignments', note: 'MEAL and research for Cortech clients, 2025–2026' },
  { value: '10%', label: 'Kaggle', note: 'Top decile, Data Visualization Challenge' },
]

export function About() {
  return (
    <section id="about" className="bg-paper px-[6vw] py-[12vh] text-ink">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-20">
        <Reveal>
          <p className="eyebrow">02 &middot; Profile</p>
          <h2 className="display mt-6 text-[clamp(42px,5.6vw,84px)]">
            Forecasting, vision,
            <br />
            <em className="text-umber">and field research.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="md:pt-16">
          <p className="text-[17px] leading-[1.7] text-umber">
            I am a data and machine learning engineer, and I lead MEAL and research at Cortech Consulting Group in Nairobi. I design the frameworks and KoboToolbox surveys, analyse the data in Python, and write the reports. On the engineering side I build forecasting, classification and computer vision models and put them online.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={site.cvHref} download={site.cvFilename} className="btn-ink focus-ring">
              <Download className="h-4 w-4" strokeWidth={1.5} />
              Download CV
            </a>
            <a href="#portfolio" className="btn-line focus-ring">
              View the work
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.12} className="mx-auto mt-[8vh] max-w-6xl">
        <dl className="grid border-t border-ink/20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label, note }, index) => (
            <div key={label} className="border-b border-ink/20 py-8 sm:border-b-0 sm:border-l sm:px-6 sm:first:border-l-0 sm:first:pl-0 lg:py-10">
              <dt className="eyebrow">
                {String(index + 1).padStart(2, '0')} &middot; {label}
              </dt>
              <dd className="m-0">
                <span className="display mt-4 block text-[clamp(52px,5.4vw,84px)] leading-none">{value}</span>
                <span className="mt-3 block max-w-[16rem] text-sm leading-6 text-umber">{note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
