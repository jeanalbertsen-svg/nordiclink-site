// src/components/Header.jsx
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

export default function Header({ mobileOpen, setMobileOpen }) {
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const mobileServicesRef = useRef(null);
  const navigate = useNavigate();

  // close services popover when closing mobile menu
  useEffect(() => {
    if (!mobileOpen) setMobileServicesOpen(false);
  }, [mobileOpen]);

  // close popover on outside click
  useEffect(() => {
    function onDocClick(e) {
      if (!mobileServicesRef.current) return;
      if (!mobileServicesRef.current.contains(e.target)) {
        setMobileServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
    };
  }, []);

  const goService = (hash) => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    navigate(`/services${hash}`);
  };

  return (
    <header className="header">
      <div className="container headerInner">
        <button
          className="menuBtn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>

        <Link to="/" className="brand" onClick={() => setMobileOpen(false)}>
          <span className="logoDesktop">
            <Logo
              size={60}
              fontSize={20}
              borderWidth={4}
              borderColor="#0B387C"
              nameSize={20}
              nameColor="rgba(255,255,255,0.72)"
              nameLetterSpacing="0.14em"
              nameMaxWidth={420}
              nameWhiteSpace="nowrap"
            />
          </span>

          <span className="logoMobile">
            <Logo
              size={60}
              fontSize={15}
              borderWidth={3}
              borderColor="#0B387C"
              nameSize={15}
              nameColor="rgba(255,255,255,0.72)"
              nameLetterSpacing="0.12em"
              nameMaxWidth={260}
              nameWhiteSpace="normal"
            />
          </span>
        </Link>

        <div className="headerRight">
          <nav className="navDesktop">
            <NavLink to="/" className={({ isActive }) => (isActive ? "navActive" : "navLink")}>
              Home
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? "navActive" : "navLink")}>
              Services
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "navActive" : "navLink")}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "navActive" : "navLink")}>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobileNavWrap">
          <div className="container mobileNav">
            <NavLink
              to="/"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => (isActive ? "mActive" : "mLink")}
            >
              Home
            </NavLink>

            {/* ✅ SERVICES with modern popover */}
            <div className="mobileServices" ref={mobileServicesRef}>
              <button
                type="button"
                className={`mLink mobileServicesBtn ${mobileServicesOpen ? "mobileServicesBtnOpen" : ""}`}
                onClick={() => setMobileServicesOpen((v) => !v)}
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-popover"
              >
                <span>Services</span>
                <span className={`chev ${mobileServicesOpen ? "chevUp" : ""}`}>▾</span>
              </button>

              {mobileServicesOpen && (
                <div id="mobile-services-popover" className="mobileServicesPopover">
                  <div className="mobilePopoverLabel">SERVICES</div>

                  <button className="mobileSubLink" onClick={() => goService("#strategy")}>
                    Business Strategy
                  </button>
                  <button className="mobileSubLink" onClick={() => goService("#digital")}>
                    Digital Transformation
                  </button>
                  <button className="mobileSubLink" onClick={() => goService("#crossborder")}>
                    Cross-Border Advisory
                  </button>
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => (isActive ? "mActive" : "mLink")}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => (isActive ? "mActive" : "mLink")}
            >
              Contact
            </NavLink>

            <a
              href="/contact"
              className="button buttonPrimary mCta"
              onClick={() => setMobileOpen(false)}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
