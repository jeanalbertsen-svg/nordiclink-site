import { Link } from 'react-router-dom'
import './ServiceCards.css'
import "./Header.css";

const services = [
  {
    title: 'Business Strategy',
    text:
      'Clear strategic direction for organizations operating in complex and evolving markets — structured analysis, practical insight, and actionable outcomes.',
    to: '/services#strategy'
  },
  {
    title: 'Digital Transformation',
    text:
      'Alignment of technology with business strategy through digital roadmaps, governance frameworks, and execution support.',
    to: '/services#digital'
  },
  {
    title: 'Cross-Border Advisory',
    text:
      'Strategic guidance across Nordic and Asian markets, addressing regulatory, operational, and cultural complexity for confident expansion.',
    to: '/services#crossborder'
  }
]

export default function ServiceCards() {
  return (
    <div className="grid3">
      {services.map(s => (
        <article key={s.title} className="serviceCard">
          <h3 className="serviceTitle">{s.title}</h3>
          <p className="serviceText">{s.text}</p>
          <Link to={s.to} className="serviceLink">Learn more →</Link>
        </article>
      ))}
    </div>
  )
}
