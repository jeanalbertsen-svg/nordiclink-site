import { Link } from 'react-router-dom'
import Section from '../components/Section.jsx'
import ServiceCards from '../components/ServiceCards.jsx'
import './Home.css'

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container heroInner">
          <div className="heroBadge">WELCOME</div>
          <h1 className="heroTitle">Nordic–Asia<br/>Strategy &amp; Tech<br/>Consulting</h1>
          <p className="heroLead">
            Support organizations across Nordic and Asian markets in
            strategy, IT governance, and digital transformation.
          </p>
          <div className="heroActions">
            <Link className="button buttonPrimary" to="/services">View Services</Link>
            <Link className="button buttonGhost" to="/contact">Book a Call</Link>
          </div>
        </div>
      </section>

      <Section
        title="WHAT WE DO"
        subtitle="Three focus areas designed for clarity, execution, and cross-border progress."
      >
        <ServiceCards />
      </Section>

      <Section title="WHO WE WORK WITH">
        <div className="copyGrid">
          <p>
            Collaboration with leaders and organizations seeking clarity, structure,
            and sustainable progress in a complex business environment.
          </p>
          <div className="card" role="note">
            <div className="cardTitle">TYPICAL ENGAGEMENT</div>
            <ul className="list">
              <li>Strategy workshops and decision support</li>
              <li>Digital roadmaps and governance frameworks</li>
              <li>Nordic–Asia market alignment and expansion</li>
            </ul>
            <Link className="button buttonPrimary" to="/contact">Start a Conversation</Link>
          </div>
        </div>
      </Section>

      <Section title="READY TO TALK?">
        <div className="ctaBar">
          <div>
            <div className="ctaTitle">A focused first call — no fluff.</div>
            <div className="ctaText">Share your context. Get a clear next step.</div>
          </div>
          <Link className="button buttonPrimary" to="/contact">Book a Call</Link>
        </div>
      </Section>
    </div>
  )
}
