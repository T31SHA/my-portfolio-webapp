import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-rule-dark bg-ink text-mist">
      <div className="wrap flex flex-col gap-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.role} · {site.location}
        </p>
        <p className="flex gap-5">
          <a href={site.cvHref} download={site.cvFilename} className="hover:text-paper">
            CV (PDF)
          </a>
          <a href="#top" className="hover:text-paper">
            Back to top
          </a>
        </p>
      </div>
    </footer>
  )
}
