import { ArrowUpRight, Download } from 'lucide-react'
import { site } from '@/lib/site'

const channels = [
  { label: 'Phone', value: site.phone, href: site.phoneHref },
  { label: 'LinkedIn', value: 'sharahbill-abdi', href: site.linkedin },
  { label: 'GitHub', value: 'T31SHA', href: site.github },
  { label: 'Based in', value: site.location },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-ink py-[clamp(4.5rem,11vw,8rem)] text-paper">
      <div className="wrap">
        <div data-reveal>
          <p className="label text-signal">05 — Contact</p>
          <h2 id="contact-title" className="display mt-6 max-w-[14ch] text-[clamp(2.75rem,7.5vw,6.25rem)]">
            Have data and a decision to make?
          </h2>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-mist">
            Open to data, machine learning and research roles, and to collaborations. In Nairobi or remote.
          </p>
        </div>

        <div className="mt-14 grid gap-12 border-t border-rule-dark pt-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16" data-reveal>
          <div>
            <p className="label text-mist">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block break-all font-display text-[clamp(1.75rem,4.4vw,3.25rem)] font-semibold tracking-tight underline decoration-signal decoration-2 underline-offset-[0.2em] transition-colors hover:text-signal"
            >
              {site.email}
            </a>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={site.cvHref} download={site.cvFilename} className="btn btn-signal">
                <Download className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                Download CV <span className="font-normal">PDF · {site.cvSize}</span>
              </a>
            </div>
          </div>

          <dl className="grid content-start">
            {channels.map((channel) => (
              <div key={channel.label} className="grid grid-cols-[6.5rem_1fr] items-baseline gap-4 border-b border-rule-dark py-4 first:pt-0">
                <dt className="label text-mist">{channel.label}</dt>
                <dd className="m-0 min-w-0 break-words">
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="link-arrow"
                      {...(channel.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {channel.value}
                      {channel.href.startsWith('http') ? (
                        <>
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                          <span className="sr-only">(opens in a new tab)</span>
                        </>
                      ) : null}
                    </a>
                  ) : (
                    channel.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
