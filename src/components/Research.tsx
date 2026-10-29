import { meal } from '@/lib/content'

export function Research() {
  const count = meal.assignments.reduce((n, group) => n + group.items.length, 0)

  return (
    <section id="research" aria-labelledby="research-title" className="bg-paper-2 py-[clamp(4.5rem,11vw,8rem)]">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16" data-reveal>
          <p className="label text-signal-ink">02 — MEAL &amp; research</p>
          <div>
            <h2 id="research-title" className="display text-[clamp(2.75rem,6.5vw,5.25rem)]">
              Evidence for programmes that have to deliver.
            </h2>
            <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-muted">
              As {meal.role} at {meal.org} ({meal.period}), I lead Monitoring, Evaluation, Accountability and Learning for
              government, multilateral and NGO clients, and own the whole chain from framework to final report.
            </p>
          </div>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-[1.25rem] bg-ink/15 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
          {meal.chain.map((item, i) => (
            <li key={item.step} className="relative bg-paper p-6 lg:p-7">
              <span className="font-mono text-sm text-signal-ink">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-6 font-display text-[1.75rem] font-semibold tracking-tight">{item.step}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{item.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div data-reveal>
            <h3 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-semibold leading-tight tracking-tight">
              Selected assignments
            </h3>
            <p className="mt-3 max-w-sm text-muted">
              {count} client assignments from the 2025–2026 consulting portfolio I lead MEAL and research for.
            </p>
          </div>
          <div className="grid gap-12" data-reveal>
            {meal.assignments.map((group) => (
              <div key={group.year}>
                <h4 className="display text-[2.5rem] text-signal-ink">{group.year}</h4>
                <ul className="mt-4 border-b border-ink/20">
                  {group.items.map(([client, detail]) => (
                    <li key={client} className="grid gap-1 border-t border-ink/20 py-5 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-8">
                      <p className="font-semibold leading-snug">{client}</p>
                      <p className="text-[0.9375rem] leading-relaxed text-muted">{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
