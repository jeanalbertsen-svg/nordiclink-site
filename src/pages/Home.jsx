import { Link } from 'react-router-dom'
import Section from '../components/Section.jsx'
import ServiceCards from '../components/ServiceCards.jsx'
import './Home.css'
import engagementImg from "../assets/engagement.jpg";


export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container heroInner">
          <div className="heroBadge">WELCOME</div>
          <h1 className="heroTitle">NORDIC-ASIA<br/>STRATEGY &amp; TECH<br/>CONSULTING</h1>
          <p className="heroLead">
            Support organizations across Nordic and Asian markets in
            strategy, IT governance, and digital transformation.
          </p>
          <div className="heroActions">
            <Link className="button buttonPrimary" to="/services">View Services</Link>
          </div>
        </div>
      </section>


      <Section title="WHO WE WORK WITH">
        <div className="copyGrid">
          <p>
            We collaborate with leaders and organizations seeking clarity, structure,
            and sustainable progress in a complex business environment.
            </p>
        </div>
        <div className="engagementVisual">
          <img
            src={engagementImg}
            alt="Consulting engagement session"
            className="engagementImg"
          />

          <div className="engagementContent">
            <Link to="/contact" className="button buttonGhost1">
              Contact Us
            </Link>
          </div>
        </div>


      </Section>
    </div>
  )
}
