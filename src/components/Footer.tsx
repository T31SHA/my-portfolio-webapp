import { Github, Linkedin, Mail } from 'lucide-react'

const socials = [
  { label: 'GitHub', href: 'https://github.com/T31SHA', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sharahbill-abdi-6b3463362', icon: Linkedin },
  { label: 'Email', href: 'mailto:asharahbiil@gmail.com', icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-10 text-center">
        <div className="flex items-center gap-5">
          {socials.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="focus-ring text-muted-foreground transition-colors hover:text-foreground">
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </a>
          ))}
        </div>
        <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted-foreground">© {new Date().getFullYear()} Sharahbil Abdi</p>
      </div>
    </footer>
  )
}
