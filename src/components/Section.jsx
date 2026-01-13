import './Section.css'

export default function Section({ title, subtitle, children }) {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHead">
          <h2 className="sectionTitle">{title}</h2>
          {subtitle ? <p className="sectionSubtitle">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  )
}
