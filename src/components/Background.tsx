import { education, experience, languages, recognition, skills } from '@/lib/content'

export function Background() {
  return (
    <section id="background" aria-labelledby="background-title" className="bg-paper py-[clamp(4.5rem,11vw,8rem)]">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16" data-reveal>
          <p className="label text-signal-ink">04 — Background</p>
          <h2 id="background-title" className="display text-[clamp(2.75rem,6.5vw,5.25rem)]">
            Mathematics, code and the field.
          </h2>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="grid content-start gap-12" data-reveal>
            <div>
              <h3 className="label text-muted">Experience</h3>
              <ul className="mt-4">
                {experience.map((job) => (
                  <li key={job.org} className="border-t py-5">
                    <p className="font-display text-xl font-semibold tracking-tight">{job.role}</p>
                    <p className="mt-1 text-[0.9375rem]">
                      {job.org}
                      <span className="text-muted">
                        {' · '}
                        {job.place}
                        {job.period ? ` · ${job.period}` : ''}
                      </span>
                    </p>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{job.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="label text-muted">Education</h3>
              <ul className="mt-4">
                {education.map(([credential, school]) => (
                  <li key={credential} className="border-t py-4">
                    <p className="font-semibold">{credential}</p>
                    <p className="text-[0.9375rem] text-muted">{school}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid content-start gap-12" data-reveal>
            <div>
              <h3 className="label text-muted">Recognition</h3>
              <ul className="mt-4 grid gap-px overflow-hidden rounded-[1.25rem] bg-ink/15 sm:grid-cols-2">
                {recognition.map(([mark, context]) => (
                  <li key={mark} className="bg-paper p-5">
                    <p className="font-display text-[1.5rem] font-semibold leading-tight tracking-tight">{mark}</p>
                    <p className="mt-1 text-[0.9375rem] text-muted">{context}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="label text-muted">Toolkit</h3>
              <dl className="mt-4">
                {skills.map(([area, tools]) => (
                  <div key={area} className="grid gap-1 border-t py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                    <dt className="font-semibold">{area}</dt>
                    <dd className="m-0 text-[0.9375rem] leading-relaxed text-muted">{tools}</dd>
                  </div>
                ))}
                <div className="grid gap-1 border-t py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="font-semibold">Languages</dt>
                  <dd className="m-0 text-[0.9375rem] leading-relaxed text-muted">{languages}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
