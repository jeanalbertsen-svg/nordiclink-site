import { useMemo, useState } from "react";
import Section from "../components/Section.jsx";
import "./Services.css";

// ✅ Import your own images (replace filenames as needed)
import strategyImg from "../assets/strategy.jpg";
import digitalImg from "../assets/digital.jpg";
import crossborderImg from "../assets/crossborder.jpg";

export default function Services() {
  const services = useMemo(
    () => [
      {
        id: "strategy",
        label: "Business Strategy",
        image: strategyImg,
        intro:
          "Clear strategic direction for organizations operating in complex and evolving markets. The focus is on structured analysis, practical insight, and actionable outcomes — ensuring strategy is both well-defined and executable.",
        topics: [
          "Strategic planning and operating models",
          "Market positioning and growth strategy",
          "Executive workshops and decision support",
        ],
        deliverables: [
          "Strategy narrative and roadmap",
          "Prioritized initiatives and milestones",
          "Success metrics and governance",
        ],
      },
      {
        id: "digital",
        label: "Digital Transformation",
        image: digitalImg,
        intro:
          "Alignment of technology with business strategy through clear digital roadmaps, governance frameworks, and execution support. The result is purposeful modernization and sustainable digital capability.",
        topics: [
          "Digital strategy and transformation roadmap",
          "IT governance and portfolio prioritization",
          "Process optimization and delivery model",
        ],
        deliverables: [
          "Target architecture principles",
          "Governance and KPI framework",
          "Implementation plan and cadence",
        ],
      },
      {
        id: "crossborder",
        label: "Cross-Border Advisory",
        image: crossborderImg,
        intro:
          "Strategic guidance for organizations operating across Nordic and Asian markets, addressing regulatory, operational, and cultural complexity to enable confident expansion and collaboration.",
        topics: [
          "Market entry and partner strategy",
          "Cross-cultural alignment and stakeholder mapping",
          "Risk and compliance considerations",
        ],
        deliverables: [
          "Market landscape brief",
          "Partner shortlists and engagement plan",
          "Operating approach and governance",
        ],
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState("strategy");
  const selected = services.find((s) => s.id === selectedId) ?? services[0];

  return (
    <div className="pageTop">
      <Section
        title="SERVICES"
        subtitle="Strategy, digital transformation, and cross-border advisory — designed for clarity and execution."
      >
        {/* ✅ Dropdown */}
        <div className="servicesPicker">
          <label className="label" htmlFor="serviceSelect">
            Choose a service
          </label>

          <select
            id="serviceSelect"
            className="serviceSelect"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
          >
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        {/* ✅ Single service view (NO BOX) */}
        <div id={selected.id} className="serviceView">
          <img
            className="serviceImage"
            src={selected.image}
            alt={selected.label}
            loading="lazy"
          />

          <div className="serviceContent">
            {/* ✅ Adds spacing from image via CSS */}
            <h3 className="serviceTitle">{selected.label}</h3>
            <p className="serviceIntro">{selected.intro}</p>

            <div className="twoCol">
              <div>
                <div className="miniTitle">Common topics</div>
                <ul className="list">
                  {selected.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="miniTitle">Typical deliverables</div>
                <ul className="list">
                  {selected.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
