import { Link } from 'react-router-dom'
import Section from '../components/Section.jsx'

export default function NotFound() {
  return (
    <Section title="Page not found">
      <p className="muted">The page you’re looking for doesn’t exist.</p>
      <Link className="button buttonPrimary" to="/">Go home</Link>
    </Section>
  )
}
