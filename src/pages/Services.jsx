import { Link } from 'react-router-dom'
import Section from '../components/Section.jsx'
import ServiceCards from '../components/ServiceCards.jsx'
import './Home.css'
import servicesImg from "../assets/services.jpg";

export default function Home() {
  return (
    <div>

      <Section
        title="SERVICES"
      >
        <div className="servicesVisual">
          <img
            src={servicesImg}
            alt="Consulting engagement session"
            className="servicesImg"
          />
        </div>
        <ServiceCards />
      </Section>
    </div>
  )
}
