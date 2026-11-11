import { site } from '@/lib/site'

const clients = ['World Bank', 'IGAD', 'IOM', 'African Union', 'FGS']

export function Hero() {
  return (
    <section id="top" className="hero section-wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="pill"><img src="/design/sparkle-rust.svg" width={10} height={10} alt="" />Data analyst &amp; ML engineer</p>
        <h1 id="hero-title" className="hero-title">
          <span>I turn data</span>
          <span className="rust-text">Into decisions</span>
          <span>That matter</span>
        </h1>
        <p className="hero-description">
          I build machine learning systems that ship as live apps, and I lead the research that tells development programmes what is working, for the World Bank, IGAD, IOM and the African Union.
        </p>
        <div className="button-row">
          <a href="#work" className="button button-primary">
            View projects
            <span className="button-badge"><img src="/design/arrow-right.svg" width={16} height={16} alt="" /></span>
          </a>
          <a href={site.cvHref} download={site.cvFilename} className="button button-ghost">
            View CV
            <span className="button-badge"><img src="/design/arrow-right.svg" width={16} height={16} alt="" /></span>
          </a>
        </div>
        <div className="assignments" aria-label="Selected client experience">
          <span className="assignments-label">Assignments for</span>
          <span className="assignments-rule" aria-hidden="true" />
          <ul>
            {clients.map((client, index) => (
              <li key={client}>
                {index > 0 ? <img src="/design/sparkle-rust-sm.svg" width={8} height={8} alt="" /> : null}
                {client}
              </li>
            ))}
          </ul>
          <img className="globe-mini" src="/design/globe-mini.svg" width={30} height={30} alt="" />
        </div>
      </div>

      <div className="hero-art">
        <div className="hero-art-inner">
          <img className="art-orbit" src="/design/orbit.svg" width={560} height={560} alt="" />
          <div className="art-olive" aria-hidden="true"><img src="/design/globe-wire.svg" width={150} height={150} alt="" /></div>
          <img className="art-sun" src="/design/rust-sun.svg" width={470} height={470} alt="" />
          <div className="art-portrait">
            <img src="/design/portrait.png" alt="Sharahbill Mohamed Abdi speaking at a podium" width={400} height={400} />
          </div>
          <img className="art-dot" src="/design/orbit-dot.svg" width={12} height={12} alt="" />
          <div className="monogram" aria-label="Sharahbill Abdi"><span>S</span><i /><span>A</span></div>
          <img className="art-grid" src="/design/grid-card.svg" width={220} height={210} alt="" />
          <div className="art-note">
            <img src="/design/sparkle-note.svg" width={16} height={16} alt="" />
            <p>Three systems, live, with the numbers attached.</p>
          </div>
          <img className="art-burst" src="/design/starburst.svg" width={130} height={130} alt="" />
          <img className="spark spark-a" src="/design/sparkle-charcoal.svg" width={16} height={16} alt="" />
          <img className="spark spark-b" src="/design/sparkle-charcoal-lg.svg" width={26} height={26} alt="" />
          <img className="spark spark-c" src="/design/sparkle-rust-xs.svg" width={12} height={12} alt="" />
          <img className="spark spark-m1" src="/design/sparkle-charcoal.svg" alt="" />
          <img className="spark spark-m2" src="/design/sparkle-rust.svg" alt="" />
        </div>
      </div>
    </section>
  )
}
