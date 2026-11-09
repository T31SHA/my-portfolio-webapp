import { ArrowUpRight } from 'lucide-react'
import { site } from '@/lib/site'
import { Sparkle, Starburst, WireGlobe } from '@/components/EditorialMarks'

const earlyClients = ['World Bank', 'IGAD', 'IOM', 'African Union', 'FGS']

export function Hero() {
  return (
    <section id="top" className="hero section-wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><Sparkle /> DATA ANALYST &amp; ML ENGINEER</p>
        <h1 id="hero-title" className="display hero-title">
          <span>I TURN DATA</span>
          <span className="rust-text">INTO DECISIONS</span>
          <span>THAT MATTER</span>
        </h1>
        <p className="hero-description">
            I build machine learning systems that ship as live apps, and I lead the research that tells development programmes
            what is working, for the World Bank, IGAD, IOM and the African Union.
        </p>
        <div className="button-row">
          <a href="#work" className="button button-primary">VIEW PROJECTS <span className="button-arrow"><ArrowUpRight aria-hidden="true" /></span></a>
          <a href={site.cvHref} download={site.cvFilename} className="button button-ghost">VIEW CV <span className="button-arrow"><ArrowUpRight aria-hidden="true" /></span></a>
        </div>
        <div className="trusted-row" aria-label="Selected client experience">
          <span className="trusted-label">ASSIGNMENTS FOR</span>
          <ul>
            {earlyClients.map((client) => <li key={client}>{client}</li>)}
          </ul>
        </div>
      </div>

      <div className="hero-art" aria-label="Portrait of Sharahbill Mohamed Abdi">
        <div className="hero-globe-panel" aria-hidden="true"><WireGlobe /></div>
        <div className="portrait-orbit" aria-hidden="true"><span /></div>
        <div className="portrait-disc">
          <img src="/assets/sharahbill-abdi.jpg" alt="Sharahbill Mohamed Abdi speaking at a podium" width="640" height="640" fetchPriority="high" />
        </div>
        <div className="monogram-badge" aria-label="Sharahbill Abdi"><span>S</span><span>A</span></div>
        <Starburst className="hero-starburst" color="var(--rust)" />
        <div className="hero-grid-card" aria-hidden="true"><span className="grid-sun" /></div>
        <div className="hero-note">Three systems, live, with the numbers attached.</div>
      </div>
    </section>
  )
}
