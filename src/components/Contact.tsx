import { Download } from 'lucide-react'
import { type FormEvent } from 'react'
import { Reveal } from '@/components/Reveal'
import { site } from '@/lib/site'

const channels = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { label: 'Phone', value: site.phone, href: site.phoneHref },
  { label: 'LinkedIn', value: 'sharahbill-abdi', href: site.linkedin },
  { label: 'GitHub', value: 'T31SHA', href: site.github },
]

export function Contact() {
  const submitMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="bg-ink px-[6vw] py-[12vh] text-paper">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">05 &middot; Contact</p>
          <h2 className="display mt-6 text-[clamp(44px,6vw,88px)]">
            Open to the
            <br />
            <em className="text-ochre">right problem.</em>
          </h2>
          <p className="mt-6 max-w-xl text-paper/70">
            Data, machine learning and research roles, plus collaborations. Nairobi, and remote.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <Reveal delay={0.06}>
            <a href={`mailto:${site.email}`} className="focus-ring display block break-all text-[clamp(28px,3.4vw,46px)] leading-[1.15] hover:text-ochre">
              {site.email}
            </a>
            <dl className="mt-10 border-t border-paper/15">
              {channels.map((channel) => (
                <div key={channel.label} className="grid grid-cols-[6.5rem_1fr] items-baseline gap-4 border-b border-paper/15 py-4">
                  <dt className="eyebrow">{channel.label}</dt>
                  <dd className="m-0">
                    <a href={channel.href} className="focus-ring text-sm hover:text-ochre" {...(channel.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>
                      {channel.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
            <a href={site.cvHref} download={site.cvFilename} className="btn-ink focus-ring mt-8 !bg-paper !text-ink hover:!bg-ochre">
              <Download className="h-4 w-4" strokeWidth={1.5} />
              Download CV
            </a>
          </Reveal>

          <Reveal delay={0.12}>
            <h3 className="display text-[34px] font-normal">Write from here</h3>
            <p className="mt-2 text-sm leading-6 text-paper/60">Opens your email app with the note ready to send. Nothing is stored on this site.</p>
            <form className="mt-8 space-y-3" onSubmit={submitMessage}>
              <label className="block">
                <span className="sr-only">Name</span>
                <input required name="name" type="text" placeholder="Name" autoComplete="name" className="field-line" />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input required name="email" type="email" placeholder="Email" autoComplete="email" className="field-line" />
              </label>
              <label className="block">
                <span className="sr-only">Message</span>
                <textarea required name="message" placeholder="What are you hiring for?" rows={4} className="field-line resize-none" />
              </label>
              <button type="submit" className="btn-line focus-ring mt-6">
                Open email
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
