import { ArrowDown, Download } from 'lucide-react'
import { SignalLine } from '@/components/SignalLine'
import { site } from '@/lib/site'

const readout = [
  { value: '0.889', label: 'ROC AUC', note: 'Flood risk, county-held-out', href: '#flood-guard' },
  { value: '95.1%', label: 'Variance explained', note: 'Drought, 1–6 months ahead', href: '#drought' },
  { value: '1.11 MB', label: 'Vision model', note: 'Cassava disease, on a phone', href: '#cassavawatch' },
  { value: '8', label: 'Client assignments', note: 'World Bank, IGAD, IOM & AU', href: '#research' },
]

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy pt-16 text-paper" aria-labelledby="hero-title">
      <SignalLine className="pointer-events-none absolute inset-x-0 bottom-[8.5rem] -z-10 h-[30%] w-full text-paper lg:bottom-[7rem] lg:left-[42%] lg:h-[55%] lg:w-[58%]" />

      <div className="wrap grid gap-12 pb-12 pt-[clamp(2.5rem,7vh,5rem)] lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:items-end lg:gap-16">
        <div>
          <p className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-mist">
            <img
              src="/assets/sharahbill-abdi.jpg"
              alt=""
              width={40}
              height={40}
              fetchPriority="low"
              className="h-10 w-10 rounded-full object-cover object-[50%_25%] ring-2 ring-signal lg:hidden"
            />
            <span className="hidden h-2 w-2 rounded-full bg-signal lg:inline-block" aria-hidden="true" />
            Data &amp; ML Engineer
            <span aria-hidden="true">/</span>
            MEAL &amp; Research
            <span aria-hidden="true">/</span>
            Nairobi
          </p>
          <h1 id="hero-title" className="display mt-6 text-[clamp(2.6rem,7.6vw,7rem)]">
            <span className="block whitespace-nowrap">Sharahbill</span>
            <span className="block whitespace-nowrap text-mist">Mohamed Abdi</span>
          </h1>
          <p className="mt-8 max-w-[38rem] text-[clamp(1.125rem,1.7vw,1.375rem)] leading-[1.5] text-paper">
            I build machine learning systems that ship as live apps, and I lead the research that tells development programmes
            what is working, for the World Bank, IGAD, IOM and the African Union.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#work" className="btn btn-signal">
              Read the case studies
              <ArrowDown className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </a>
            <a href={site.cvHref} download={site.cvFilename} className="btn btn-ghost">
              <Download className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              Download CV <span className="text-mist">PDF · {site.cvSize}</span>
            </a>
          </div>
        </div>

        <figure className="m-0 hidden max-w-[17.5rem] lg:block">
          <div className="relative overflow-hidden rounded-[1.25rem] ring-1 ring-rule-dark">
            <img
              src="/assets/sharahbill-abdi.jpg"
              alt="Sharahbill Mohamed Abdi speaking at a podium in a navy gown and orange stole"
              width={640}
              height={640}
              className="aspect-[4/5] w-full object-cover object-[50%_30%]"
              fetchPriority="low"
            />
          </div>
          <figcaption className="label mt-3 flex justify-between text-mist">
            <span>github/T31SHA</span>
            <span>Nairobi, KE</span>
          </figcaption>
        </figure>
      </div>

      <div className="border-t border-rule-dark bg-navy/80 backdrop-blur-sm">
        <dl className="wrap grid grid-cols-2 lg:grid-cols-4">
          {readout.map((item, i) => (
            <div
              key={item.label}
              className={`relative border-rule-dark py-6 ${i % 2 ? 'pl-5' : 'pr-5'} ${i % 2 ? 'border-l' : ''} ${i > 1 ? 'border-t lg:border-t-0' : ''} lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0`}
            >
              <dt className="label text-mist">{item.label}</dt>
              <dd className="m-0">
                <a href={item.href} className="group mt-2 block">
                  <span className="display block text-[clamp(1.875rem,3.4vw,2.75rem)] text-paper transition-colors group-hover:text-signal">
                    {item.value}
                  </span>
                  <span className="mt-1 block text-sm leading-snug text-mist">{item.note}</span>
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
