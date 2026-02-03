import { Link } from 'react-router-dom'
import './ServiceCards.css'
import './Header.css'

const services = [
  {
    id: 'strategy',
    title: 'Business Strategy',
    text:
      'Strategic clarity and decision support for organizations and founders navigating growth, change, and market complexity.',
    focuses: [
      'Business Transformation & Growth Strategy',
      'Business Launch & Venture Setup',
      'Product Strategy & Positioning',
      'Pricing Strategy & Value Design',
      'Marketing & Brand Strategy',
      'Personal & Professional Positioning'
    ],
    products: [
      'Business strategy roadmap',
      'Go-to-market plan',
      'Business model canvas & validation framework',
      'Product positioning framework',
      'Pricing structure model',
      'Brand strategy playbook'
    ]
  },
  {
    id: 'digital',
    title: 'Digital Transformation',
    text:
      'Digital enablement of strategy through platforms, tools, and execution frameworks that turn plans into scalable operations.',
    focuses: [
      'Digital Product & Service Enablement',
      'Marketing Technology & Automation',
      'Workflow & Process Digitalization',
      'Data & Performance Analytics',
      'Platform / Tool Selection & Alignment',
      'Execution Governance & Delivery Support'
    ],
    products: [
      'Company website or corporate site',
      'E-commerce webshop',
      'Landing page system',
      'Marketing automation setup',
      'Analytics dashboard',
      'CRM implementation',
      'Online brand ecosystem (web + social)'
    ]
  },
  {
    id: 'crossborder',
    title: 'Cross-Border Advisory',
    text:
      'Support for expansion across regions with market-entry planning, local adaptation, and culturally informed positioning.',
    focuses: [
      'International Market Entry & Launch',
      'Localized Brand & Go-to-Market Strategy',
      'Cross-Market Product & Pricing Adaptation',
      'Cultural Positioning & Messaging',
      'Partnership & Ecosystem Strategy',
      'Global Leadership & Personal Branding'
    ],
    products: [
      'Market entry strategy report',
      'Localized website version',
      'Regional brand adaptation kit',
      'Cross-market pricing model',
      'International go-to-market plan',
      'Personal leadership website',
      'Multilingual marketing assets'
    ]
  }
]

export default function ServiceCards() {
  return (
    <section className="servicesGrid" aria-label="Core service areas">
      {services.map(s => (
        <article key={s.id} className="serviceCard">
          <header className="serviceHeader">
            <h3 className="serviceTitle">{s.title}</h3>
            <p className="serviceText">{s.text}</p>
          </header>

          <div className="serviceBody">
            <p className="serviceMeta">Focus areas</p>
            <ul className="serviceFocusList">
              {s.focuses.map(f => (
                <li key={f} className="serviceFocusItem">{f}</li>
              ))}
            </ul>

            <p className="serviceMeta">Typical deliverables</p>
            <ul className="serviceDeliverables">
              {s.products.map(p => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <footer className="serviceFooter">
            <Link className="serviceLink" to={`/services#${s.id}`}>
              Explore {s.title}
              <span className="serviceLinkArrow" aria-hidden="true">→</span>
            </Link>
          </footer>
        </article>
      ))}
    </section>
  )
}
