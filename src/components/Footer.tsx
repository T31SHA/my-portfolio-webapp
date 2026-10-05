import { Github, Linkedin, Mail } from 'lucide-react'

const socials = [
  { label: 'GitHub', href: 'https://github.com/T31SHA', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sharahbill-abdi-6b3463362', icon: Linkedin },
  { label: 'Email', href: 'mailto:asharahbiil@gmail.com', icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink px-[6vw] py-10 text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-display text-[22px] font-medium uppercase tracking-[0.14em]">Sharahbil Abdi</p>
        <div className="flex items-center gap-6">
          {socials.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="focus-ring text-paper/60 transition-colors hover:text-ochre">
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </a>
          ))}
        </div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-paper/50">© {new Date().getFullYear()} &middot; Nairobi</p>
      </div>
    </footer>
  )
}
