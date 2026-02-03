import Section from '../components/Section.jsx'

export default function About() {
  return (
    <div className="pageTop">
      <Section title="ABOUT" >
        <div className="aboutGrid">
          <div>
            <p>
              NordicLink Consulting supports organizations with strategy, digital transformation, and cross-border advisory. The goal is clear direction, strong governance, and structured execution.
            </p>

          </div>
          <div className="card">
            <div className="cardTitle">Core principles</div>
            <ul className="list">
              <li>Clarity over complexity</li>
              <li>Structured thinking, pragmatic delivery</li>
              <li>Cross-border context and local insight</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
