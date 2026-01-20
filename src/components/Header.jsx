// src/components/Header.jsx
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

export default function Header({ mobileOpen, setMobileOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [deskServicesOpen, setDeskServicesOpen] = useState(false);
  const deskServicesRef = useRef(null);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const mobileServicesRef = useRef(null);

  // Close mobile services when closing menu
  useEffect(() => {
    if (!mobileOpen) setMobileServicesOpen(false);
  }, [mobileOpen]);

  // Close desktop dropdown on route change
  useEffect(() => {
    setDeskServicesOpen(false);
  }, [location.pathname, location.hash]);

  // Close on outside click
  useEffect(() => {
    function onDocClick(e) {
      if (deskServicesRef.current && !deskServicesRef.current.contains(e.target)) {
        setDeskServicesOpen(false);
      }
      if (mobileServicesRef.current && !mobileServicesRef.current.contains(e.target)) {
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

  // ESC closes
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") {
        setDeskServicesOpen(false);
        setMobileServicesOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const goService = (hash) => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setDeskServicesOpen(false);
    navigate(`/services${hash}`);
  };

  return (
    <header className="header">
      <div className="container headerInner">
        <button
          className="menuBtn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <Link
          to="/"
          className="brand"
          onClick={() => {
            setMobileOpen(false);
            setMobileServicesOpen(false);
            setDeskServicesOpen(false);
          }}
        >
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
          <nav className="navDesktop" aria-label="Primary">
            <NavLink to="/" className={({ isActive }) => (isActive ? "navActive" : "navLink")}>
              Home
            </NavLink>

            <div className="navDropdownWrap" ref={deskServicesRef}>
              <div className="navServicesRow">
                <NavLink
                  to="/services"
                  onClick={() => setDeskServicesOpen(false)}
                  className={({ isActive }) => (isActive ? "navActive" : "navLink")}
                >
                  Services
                </NavLink>

                <button
                  type="button"
                  className={`navChevronBtn ${deskServicesOpen ? "open" : ""}`}
                  aria-haspopup="menu"
                  aria-expanded={deskServicesOpen}
                  aria-label={deskServicesOpen ? "Close Services menu" : "Open Services menu"}
                  onClick={() => setDeskServicesOpen((v) => !v)}
                >
                  <span className="navChevron" />
                </button>
              </div>

              {deskServicesOpen && (
                <div className="navDropdown navDropdownModern" role="menu" aria-label="Services">
                  <button className="svcItem" onClick={() => goService("")} role="menuitem">
                    <span className="svcIcon" aria-hidden="true">🧭</span>
                    <span className="svcText">
                      <span className="svcTitle">Services Overview</span>
                      <span className="svcDesc">Explore how we help you grow and execute</span>
                    </span>
                  </button>

                  <button className="svcItem" onClick={() => goService("#strategy")} role="menuitem">
                    <span className="svcIcon" aria-hidden="true">📌</span>
                    <span className="svcText">
                      <span className="svcTitle">Business Strategy</span>
                      <span className="svcDesc">Positioning, roadmaps, market and growth strategy</span>
                    </span>
                  </button>

                  <button className="svcItem" onClick={() => goService("#digital")} role="menuitem">
                    <span className="svcIcon" aria-hidden="true">⚡</span>
                    <span className="svcText">
                      <span className="svcTitle">Digital Transformation</span>
                      <span className="svcDesc">Modernization, tools, operating model and delivery</span>
                    </span>
                  </button>

                  <button className="svcItem" onClick={() => goService("#crossborder")} role="menuitem">
                    <span className="svcIcon" aria-hidden="true">🌍</span>
                    <span className="svcText">
                      <span className="svcTitle">Cross-Border Advisory</span>
                      <span className="svcDesc">Nordic–Asia partnerships, expansion and execution</span>
                    </span>
                  </button>

                  <div className="svcFooter">
                    <NavLink to="/services" className="svcAll" onClick={() => setDeskServicesOpen(false)}>
                      View all services
                    </NavLink>
                  </div>
                </div>
              )}
            </div>

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
              onClick={() => {
                setMobileOpen(false);
                setMobileServicesOpen(false);
              }}
              className={({ isActive }) => (isActive ? "mActive" : "mLink")}
            >
              Home
            </NavLink>

            <div className="mServicesWrap" ref={mobileServicesRef}>
              <button
                type="button"
                className="mLink mServicesBtn"
                onClick={() => setMobileServicesOpen((v) => !v)}
                aria-expanded={mobileServicesOpen}
                aria-controls="m-services-dropdown"
              >
                <span>Services</span>
                <span className={`mChevron ${mobileServicesOpen ? "open" : ""}`} />
              </button>

              {mobileServicesOpen && (
                <button
                  type="button"
                  className="mServicesBackdrop"
                  aria-label="Close services dropdown"
                  onClick={() => setMobileServicesOpen(false)}
                />
              )}

              {mobileServicesOpen && (
                <div
                  id="m-services-dropdown"
                  className="mServicesDropdown mServicesDropdownModern"
                  role="menu"
                  aria-label="Services"
                >
                  <button className="mSvcItem" onClick={() => goService("")} role="menuitem">
                    <span className="mSvcIcon" aria-hidden="true">🧭</span>
                    <span className="mSvcText">
                      <span className="mSvcTitle">Services Overview</span>
                      <span className="mSvcDesc">Start here</span>
                    </span>
                  </button>

                  <button className="mSvcItem" onClick={() => goService("#strategy")} role="menuitem">
                    <span className="mSvcIcon" aria-hidden="true">📌</span>
                    <span className="mSvcText">
                      <span className="mSvcTitle">Business Strategy</span>
                      <span className="mSvcDesc">Roadmaps and growth</span>
                    </span>
                  </button>

                  <button className="mSvcItem" onClick={() => goService("#digital")} role="menuitem">
                    <span className="mSvcIcon" aria-hidden="true">⚡</span>
                    <span className="mSvcText">
                      <span className="mSvcTitle">Digital Transformation</span>
                      <span className="mSvcDesc">Modernize and automate</span>
                    </span>
                  </button>

                  <button className="mSvcItem" onClick={() => goService("#crossborder")} role="menuitem">
                    <span className="mSvcIcon" aria-hidden="true">🌍</span>
                    <span className="mSvcText">
                      <span className="mSvcTitle">Cross-Border Advisory</span>
                      <span className="mSvcDesc">Nordic–Asia execution</span>
                    </span>
                  </button>

                  <NavLink
                    to="/services"
                    className="mSvcAll"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    View all services
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              onClick={() => {
                setMobileOpen(false);
                setMobileServicesOpen(false);
              }}
              className={({ isActive }) => (isActive ? "mActive" : "mLink")}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => {
                setMobileOpen(false);
                setMobileServicesOpen(false);
              }}
              className={({ isActive }) => (isActive ? "mActive" : "mLink")}
            >
              Contact
            </NavLink>

            <a
              href="/contact"
              className="button buttonPrimary mCta"
              onClick={() => {
                setMobileOpen(false);
                setMobileServicesOpen(false);
              }}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
