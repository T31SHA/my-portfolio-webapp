import { book, site } from '@/lib/site'

const navigation = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Projects', '#work'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
]

export function Footer() {
  return (
    <footer className="section-wrap footer-section">
      <div className="footer-panel">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="wordmark footer-wordmark">
              <span className="wordmark-mark footer-mark"><img src="/design/starburst.svg" width={44} height={44} alt="" /></span>
              <span className="wordmark-name"><span>SHARAHBILL</span><span>MOHAMED ABDI</span></span>
            </a>
            <p>Data &amp; Machine Learning Engineer / MEAL &amp; Research</p>
          </div>
          <div className="footer-column">
            <h2 className="mono">Navigation</h2>
            <ul>{navigation.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
          </div>
          <div className="footer-column">
            <h2 className="mono">Links</h2>
            <ul>
              <li><a href={site.cvHref} download={site.cvFilename}>CV (PDF)</a></li>
              <li><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href={book.href} target="_blank" rel="noopener noreferrer">Wired for Discipline</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h2 className="mono">Let&apos;s connect</h2>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={site.phoneHref}>{site.phone}</a></li>
              <li>{site.location}</li>
            </ul>
          </div>
          <span
            className="footer-globe mask-icon"
            style={{ maskImage: 'url(/design/globe-wire.svg)', WebkitMaskImage: 'url(/design/globe-wire.svg)' }}
            aria-hidden="true"
          />
        </div>
        <div className="footer-rule" aria-hidden="true" />
        <div className="footer-bottom">
          <p>© 2026 Sharahbill Mohamed Abdi · Nairobi, Kenya</p>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
