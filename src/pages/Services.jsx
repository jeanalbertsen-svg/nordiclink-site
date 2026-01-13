import Section from '../components/Section.jsx'
import './Services.css'

export default function Services() {
  return (
    <div className="pageTop">
      <Section
        title="SERVICES"
        subtitle="Strategy, digital transformation, and cross-border advisory — designed for clarity and execution."
      >
        <div className="servicesStack">
          <article id="strategy" className="servicePanel">
            <h3>Business Strategy</h3>
            <p>
              Clear strategic direction for organizations operating in complex and evolving markets. The focus is on structured analysis, practical insight, and actionable outcomes — ensuring strategy is both well-defined and executable.
            </p>
            <div className="twoCol">
              <div>
                <div className="miniTitle">Common topics</div>
                <ul className="list">
                  <li>Strategic planning and operating models</li>
                  <li>Market positioning and growth strategy</li>
                  <li>Executive workshops and decision support</li>
                </ul>
              </div>
              <div>
                <div className="miniTitle">Typical deliverables</div>
                <ul className="list">
                  <li>Strategy narrative and roadmap</li>
                  <li>Prioritized initiatives and milestones</li>
                  <li>Success metrics and governance</li>
                </ul>
              </div>
            </div>
          </article>

          <article id="digital" className="servicePanel">
            <h3>Digital Transformation</h3>
            <p>
              Alignment of technology with business strategy through clear digital roadmaps, governance frameworks, and execution support. The result is purposeful modernization and sustainable digital capability.
            </p>
            <div className="twoCol">
              <div>
                <div className="miniTitle">Common topics</div>
                <ul className="list">
                  <li>Digital strategy and transformation roadmap</li>
                  <li>IT governance and portfolio prioritization</li>
                  <li>Process optimization and delivery model</li>
                </ul>
              </div>
              <div>
                <div className="miniTitle">Typical deliverables</div>
                <ul className="list">
                  <li>Target architecture principles</li>
                  <li>Governance and KPI framework</li>
                  <li>Implementation plan and cadence</li>
                </ul>
              </div>
            </div>
          </article>

          <article id="crossborder" className="servicePanel">
            <h3>Cross-Border Advisory</h3>
            <p>
              Strategic guidance for organizations operating across Nordic and Asian markets, addressing regulatory, operational, and cultural complexity to enable confident expansion and collaboration.
            </p>
            <div className="twoCol">
              <div>
                <div className="miniTitle">Common topics</div>
                <ul className="list">
                  <li>Market entry and partner strategy</li>
                  <li>Cross-cultural alignment and stakeholder mapping</li>
                  <li>Risk and compliance considerations</li>
                </ul>
              </div>
              <div>
                <div className="miniTitle">Typical deliverables</div>
                <ul className="list">
                  <li>Market landscape brief</li>
                  <li>Partner shortlists and engagement plan</li>
                  <li>Operating approach and governance</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </Section>
    </div>
  )
}
