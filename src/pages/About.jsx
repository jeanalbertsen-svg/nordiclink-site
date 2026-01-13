import Section from '../components/Section.jsx'

export default function About() {
  return (
    <div className="pageTop">
      <Section title="ABOUT" subtitle="A focused consulting partner across Nordic and Asian markets.">
        <div className="aboutGrid">
          <div>
            <p>
              Nordic Link Consulting supports organizations with strategy, digital transformation, and cross-border advisory. The goal is clear direction, strong governance, and structured execution.
            </p>
            <p>
              Engagements are designed to be practical: clear scope, transparent deliverables, and measurable outcomes.
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
