import Section from "../components/Section.jsx";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="pageTop">
        <Section
          title="CONTACT"
        >
          {/* ✅ New header */}
          <h2 className="contactHeadline">Get in touch</h2>
          <p>For partnership and more information, send a message and we'll respond</p>

          {/* ✅ Email inside card */}
          <div className="contactCard">
            <div className="contactRow">
              <span className="contactLabel">Email</span>
              <a
                className="contactEmail"
                href="mailto:info@nordiclinkconsulting.dk"
              >
                info@nordiclinkconsulting.dk
              </a>
            </div>
          </div>
        </Section>
      </div>
  );
}
