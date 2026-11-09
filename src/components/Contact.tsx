import { ArrowUpRight, Github, Globe2, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { site } from '@/lib/site'
import { Starburst, WireGlobe } from '@/components/EditorialMarks'

const channels = [
  { label: 'EMAIL', value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: 'PHONE', value: site.phone, href: site.phoneHref, icon: Phone },
  { label: 'BASED IN', value: site.location, icon: MapPin },
  { label: 'GITHUB', value: 'github.com/T31SHA', href: site.github, icon: Github },
  { label: 'LINKEDIN', value: 'linkedin.com/in/sharahbill-abdi-6b3463362', href: site.linkedin, icon: Linkedin },
  { label: 'WEB', value: 'sharahbill-t31sha.netlify.app', href: site.url, icon: Globe2 },
]

export function Contact() {
  return (
    <section id="contact" className="section-wrap contact-section" aria-labelledby="contact-title">
      <div className="contact-panel">
        <Starburst className="contact-starburst" color="var(--cream)" />
        <WireGlobe className="contact-globe" />
        <div className="contact-main" data-reveal>
          <p className="contact-eyebrow">HAVE DATA AND A DECISION TO MAKE?</p>
          <h2 id="contact-title" className="display contact-title">LET&apos;S BUILD<br /><span>SOMETHING USEFUL</span></h2>
          <p>Have data and a decision to make? Open to data, machine learning and research roles, and to collaborations. In Nairobi or remote.</p>
          <a href={`mailto:${site.email}`} className="button button-paper">START A CONVERSATION <span className="button-arrow"><ArrowUpRight aria-hidden="true" /></span></a>
        </div>
        <dl className="contact-list" data-reveal>
          {channels.slice(0, 6).map((channel) => (
            <div key={channel.label}>
              <dt><span className="contact-icon"><channel.icon aria-hidden="true" /></span><span>{channel.label}</span></dt>
              <dd>{channel.href ? (
                <a href={channel.href} target={channel.href.startsWith('http') ? '_blank' : undefined} rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  {channel.value}{channel.href.startsWith('http') ? <ArrowUpRight aria-hidden="true" /> : null}
                </a>
              ) : channel.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
