import { education, skills } from '@/lib/content'

const skillGroups = [
  { label: 'Programming & Data', chips: ['Python', 'Pandas', 'NumPy', 'SQL', 'Git', 'Jupyter'] },
  { label: 'Machine Learning', chips: ['scikit-learn', 'XGBoost', 'Optuna', 'SHAP', 'Time Series Forecasting'] },
  { label: 'Deep Learning', chips: ['TensorFlow', 'Keras', 'TFLite'] },
  { label: 'Deployment', chips: ['FastAPI', 'Streamlit', 'Docker', 'GitHub Actions', 'pytest'] },
  { label: 'Geospatial', chips: ['GeoPandas', 'OSMnx', 'Folium', 'Leaflet'] },
  { label: 'Research & MEAL', chips: ['MEAL Frameworks', 'Survey Design', 'KoboToolbox'] },
]

const jobs = [
  {
    date: '2025 to present',
    role: 'MEAL Officer / Research',
    org: 'Cortech Consulting Group, Nairobi',
    detail: 'Led MEAL and research on 8 assignments across 2025 and 2026 for government, multilateral and NGO clients. Designed MEAL frameworks, deployed KoboToolbox survey tools and wrote the evaluation and research reports.',
  },
  {
    date: 'Part-time / remote or hybrid',
    role: 'Data Analysis Trainer',
    org: 'Trainify Institute of Technology, Nairobi',
    detail: 'Taught Python data analysis (Pandas, NumPy, visualisation) to multiple cohorts and mentored students through end-to-end projects, from raw data to presented insights.',
  },
  {
    date: 'Apr 2026',
    role: 'Data Science',
    org: 'Moringa School',
    detail: 'Plus Data Visualization with Python (Moringa School, 2025) and a BSc in Mathematics and Computing in progress at The Open University of Kenya.',
  },
]

export function ExperienceSkills() {
  return (
    <section id="experience" className="section-wrap dark-section experience-section" aria-labelledby="experience-title">
      <h2 id="experience-title" className="sr-only">Skills and experience</h2>
      <div className="experience-grid">
        <div id="skills" className="skills-column">
          <h3 className="subsection-label mono">Skills &amp; toolkit</h3>
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <div className="skill-group-head">
                <h4>{group.label}</h4>
                <span className="skill-dots" aria-hidden="true"><i /><i /><i /><i /><i /></span>
              </div>
              <ul>{group.chips.map((chip) => <li key={chip}>{chip}</li>)}</ul>
            </div>
          ))}
          <details className="disclose">
            <summary>Full toolkit notes</summary>
            <dl>
              {skills.map(([area, detail]) => <div key={area}><dt>{area}</dt><dd>{detail}</dd></div>)}
            </dl>
          </details>
        </div>

        <div className="panel-rule" aria-hidden="true" />

        <div className="timeline-column">
          <h3 className="subsection-label mono">Experience &amp; education</h3>
          <ol className="timeline">
            {jobs.map((job) => (
              <li key={job.role}>
                <span className="rail" aria-hidden="true"><i /></span>
                <div className="job">
                  <p className="job-date mono">{job.date}</p>
                  <h4 className="job-role display">{job.role}</h4>
                  <p className="job-org">{job.org}</p>
                  <p>{job.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <details id="education" className="disclose">
            <summary>Education and certificates</summary>
            <ul>
              {education.map(([credential, institution]) => <li key={credential}><strong>{credential}</strong> {institution}</li>)}
              <li><strong>ICDL</strong> Certification</li>
            </ul>
          </details>
        </div>

        <div className="tv-column">
          <div className="tv-frame"><img src="/design/tv.svg" width={240} height={230} alt="Retro television displaying a wireframe globe" /></div>
          <p className="language-note">Somali / English / Kiswahili</p>
          <img className="tv-spark" src="/design/sparkle-note.svg" width={16} height={16} alt="" />
        </div>
      </div>
    </section>
  )
}
