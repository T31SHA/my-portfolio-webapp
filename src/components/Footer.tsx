import { ArrowUpRight, ArrowUp } from 'lucide-react'
import { book, site } from '@/lib/site'
import { Starburst, WireGlobe } from '@/components/EditorialMarks'

const navigation = [
  ['About', '#about'], ['Services', '#services'], ['Projects', '#work'],
  ['Experience', '#experience'], ['Skills', '#skills'], ['Contact', '#contact'],
]

export function Footer() {
  return (
    <footer className="section-wrap footer-section">
      <div className="footer-panel">
        <div className="footer-brand">
          <a href="#top" className="wordmark footer-wordmark">
            <Starburst className="wordmark-mark" color="var(--rust)" />
            <span><span>SHARAHBILL</span><span>MOHAMED ABDI</span></span>
          </a>
          <p>Data &amp; Machine Learning Engineer<br />MEAL &amp; Research</p>
        </div>
        <div className="footer-column">
          <h2>NAVIGATION</h2>
          <ul>{navigation.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
        </div>
        <div className="footer-column">
          <h2>LINKS</h2>
          <ul>
            <li><a href={site.cvHref} download={site.cvFilename}>CV (PDF) <ArrowUpRight aria-hidden="true" /></a></li>
            <li><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a></li>
            <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a></li>
            <li><a href={book.href} target="_blank" rel="noopener noreferrer">Wired for Discipline <ArrowUpRight aria-hidden="true" /></a></li>
            <li><a href={site.url} target="_blank" rel="noopener noreferrer">Live site <ArrowUpRight aria-hidden="true" /></a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>LET&apos;S CONNECT</h2>
          <ul>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={site.phoneHref}>{site.phone}</a></li>
          </ul>
        </div>
        <WireGlobe className="footer-globe" />
        <div className="footer-bottom">
          <p>© 2026 Sharahbill Mohamed Abdi · Nairobi, Kenya</p>
          <a href="#top">Back to top <ArrowUp aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  )
}
