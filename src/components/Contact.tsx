import { site } from '@/lib/site'
import { MaskIcon } from '@/components/EditorialMarks'

const channels = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, icon: '/design/icon-mail.svg' },
  { label: 'Phone', value: site.phone, href: site.phoneHref, icon: '/design/icon-phone.svg' },
  { label: 'Based in', value: site.location, icon: '/design/icon-pin.svg' },
  { label: 'GitHub', value: 'github.com/T31SHA', href: site.github, icon: '/design/icon-github.svg' },
  { label: 'LinkedIn', value: 'in/sharahbill-abdi-6b3463362', href: site.linkedin, icon: '/design/icon-linkedin.svg' },
  { label: 'Web', value: 'sharahbill-t31sha.netlify.app', href: site.url, icon: '/design/icon-web.svg' },
]

export function Contact() {
  return (
    <section id="contact" className="section-wrap contact-section" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div className="cta-head">
          <p className="cta-kicker mono">Have data and a decision to make?</p>
          <h2 id="contact-title" className="display cta-title">Let&apos;s build<span>Something useful</span></h2>
          <div className="cta-body">
            <p>Open to data, machine learning and research roles, and to collaborations. In Nairobi or remote.</p>
            <a href={`mailto:${site.email}`} className="button button-paper">
              Start a conversation
              <span className="button-badge"><MaskIcon src="/design/arrow-right.svg" size={16} /></span>
            </a>
          </div>
        </div>
        <dl className="contact-list">
          {channels.map((channel) => (
            <div className="contact-row" key={channel.label}>
              <dt className="contact-badge"><img src={channel.icon} width={16} height={16} alt="" /></dt>
              <dd className="contact-copy">
                <small>{channel.label}</small>
                {channel.href ? (
                  <a href={channel.href} target={channel.href.startsWith('http') ? '_blank' : undefined} rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {channel.value}
                  </a>
                ) : <strong>{channel.value}</strong>}
              </dd>
            </div>
          ))}
        </dl>
        <div className="cta-art" aria-hidden="true">
          <img className="globe" src="/design/globe-wire.svg" alt="" />
          <span className="cta-burst mask-icon" style={{ maskImage: 'url(/design/starburst.svg)', WebkitMaskImage: 'url(/design/starburst.svg)' }} />
        </div>
      </div>
    </section>
  )
}
