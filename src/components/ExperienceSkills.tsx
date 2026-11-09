import { ArrowUpRight } from 'lucide-react'
import { education, experience, languages, skills } from '@/lib/content'
import { RetroTV, Starburst } from '@/components/EditorialMarks'

const skillGroups = [
  { label: 'Programming & Data', chips: ['Python', 'Pandas', 'NumPy', 'SQL', 'Git', 'Jupyter'] },
  { label: 'Machine Learning', chips: ['scikit-learn', 'XGBoost', 'Optuna', 'SHAP', 'Forecasting'] },
  { label: 'Deep Learning', chips: ['TensorFlow', 'Keras', 'Computer Vision', 'TFLite'] },
  { label: 'Deployment', chips: ['FastAPI', 'Streamlit', 'Render', 'Docker', 'pytest'] },
  { label: 'Geospatial', chips: ['GeoPandas', 'OSMnx', 'Folium', 'Leaflet'] },
  { label: 'Research & MEAL', chips: ['KoboToolbox', 'Survey Design', 'Evaluation', 'Reporting'] },
]

export function ExperienceSkills() {
  return (
    <section id="experience" className="section-wrap dark-section experience-section" aria-labelledby="experience-title">
      <span id="background" className="anchor-alias" aria-hidden="true" />
      <h2 id="experience-title" className="sr-only">Skills and experience</h2>
      <div className="experience-grid">
        <div id="skills" className="skills-column" data-reveal>
          <h3 className="subsection-label">Skills &amp; Toolkit</h3>
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <div className="skill-group-head"><h4>{group.label}</h4><span className="skill-dots" aria-hidden="true"><i /><i /><i /><i /><i /></span></div>
              <ul>{group.chips.map((chip) => <li key={chip}>{chip}</li>)}</ul>
            </div>
          ))}
          <details className="dark-details">
            <summary>Full toolkit notes <ArrowUpRight aria-hidden="true" /></summary>
            <dl>
              {skills.map(([area, detail]) => <div key={area}><dt>{area}</dt><dd>{detail}</dd></div>)}
            </dl>
          </details>
        </div>

        <div className="timeline-column" data-reveal>
          <h3 className="subsection-label">Experience &amp; Education</h3>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.org}>
                <p className="timeline-date">{job.period || 'PART-TIME'}</p>
                <h4 className="timeline-role display">{job.role.replace(' (Part-time)', '')}</h4>
                <p className="timeline-org">{job.org} · {job.place}</p>
                <p>{job.detail}</p>
              </li>
            ))}
            <li>
              <p className="timeline-date">APR 2026</p>
              <h4 className="timeline-role display">Data Science</h4>
              <p className="timeline-org">Moringa School</p>
              <p>Data science training at Moringa School.</p>
            </li>
          </ol>
          <details id="education" className="dark-details education-details">
            <summary>Education and certificates <ArrowUpRight aria-hidden="true" /></summary>
            <ul>
              {education.map(([credential, institution]) => <li key={credential}><strong>{credential}</strong><span>{institution}</span></li>)}
              <li><strong>ICDL</strong><span>Certification</span></li>
            </ul>
            <p><strong>Languages:</strong> {languages}</p>
          </details>
        </div>

        <div className="tv-column" data-reveal>
          <div className="tv-frame"><RetroTV className="retro-tv" /></div>
          <p className="language-note">Somali / English / Kiswahili</p>
          <Starburst className="tv-sparkle" color="var(--rust)" />
        </div>
      </div>
    </section>
  )
}
