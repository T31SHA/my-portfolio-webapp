import { Download } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const stats = [
  { value: '6+', label: 'Projects', note: 'Shipped and open-source' },
  { value: '1+', label: 'Publications', note: 'Published author' },
  { value: '3+', label: 'Years', note: 'Always learning' },
]

export function About() {
  return (
    <section id="about" className="bg-paper px-[6vw] py-[16vh] text-ink">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.25fr_1fr] md:gap-20">
        <Reveal>
          <p className="eyebrow">02 &middot; About me</p>
          <h2 className="display mt-6 text-[clamp(44px,6.2vw,92px)]">
            Simplicity, scalability,
            <br />
            <em className="text-umber">and impact.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="md:pt-14">
          <p className="text-[17px] leading-[1.7] text-umber">
            I am a data-focused technologist with a strong interest in data science, machine learning, and building systems that solve real-world problems. I focus on transforming raw data into clear, actionable insights that support effective decision-making.
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
                <span className="display mt-4 block text-[clamp(64px,7vw,108px)] leading-none">{value}</span>
                <span className="mt-3 block text-sm text-umber">{note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
