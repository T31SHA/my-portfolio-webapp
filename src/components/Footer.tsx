import { Github, Linkedin, Mail } from 'lucide-react'
import { site } from '@/lib/site'

const socials = [
  { label: 'GitHub', href: site.github, icon: Github },
  { label: 'LinkedIn', href: site.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${site.email}`, icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink px-[6vw] py-10 text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-[22px] font-medium uppercase tracking-[0.14em]">{site.shortName}</p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/50">Data &amp; ML · MEAL &amp; Research · Nairobi</p>
        </div>
        <div className="flex items-center gap-6">
          {socials.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})} aria-label={label} className="focus-ring text-paper/60 transition-colors hover:text-ochre">
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </a>
          ))}
        </div>
        <p className="text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/50 sm:text-right">
          <a href={site.cvHref} download={site.cvFilename} className="focus-ring hover:text-ochre">
            Download CV
          </a>
          <span className="mt-1.5 block">© {new Date().getFullYear()} · {site.location}</span>
        </p>
      </div>
    </footer>
  )
}
