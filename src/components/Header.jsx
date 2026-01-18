// src/components/Header.jsx
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

export default function Header({ mobileOpen, setMobileOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Desktop dropdown (Services)
  const [deskServicesOpen, setDeskServicesOpen] = useState(false);
  const deskServicesRef = useRef(null);

  // ✅ Mobile dropdown (Services)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const mobileServicesRef = useRef(null);

  const isServicesRoute = location.pathname.startsWith("/services");

  // Close Services popovers when closing mobile menu
  useEffect(() => {
    if (!mobileOpen) setMobileServicesOpen(false);
  }, [mobileOpen]);

  // Close desktop dropdown on route change
  useEffect(() => {
    setDeskServicesOpen(false);
  }, [location.pathname, location.hash]);

  // Close popovers on outside click (desktop + mobile)
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

  const goService = (hash) => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setDeskServicesOpen(false);
    navigate(`/services${hash}`);
  };

  return (
    <header className="header">
      <div className="container headerInner">
        {/* ✅ Burger */}
        <button
          className="menuBtn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* ✅ Brand */}
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

        {/* ✅ Desktop nav */}
        <div className="headerRight">
          <nav className="navDesktop">
            <NavLink to="/" className={({ isActive }) => (isActive ? "navActive" : "navLink")}>
              Home
            </NavLink>

            {/* ✅ Desktop Services dropdown (overlay, does NOT push links) */}
            <div className="navDropdownWrap" ref={deskServicesRef}>
              <button
                type="button"
                className={`navLinkBtn ${isServicesRoute ? "navLinkBtnActive" : ""}`}
                aria-haspopup="menu"
                aria-expanded={deskServicesOpen}
                onClick={() => setDeskServicesOpen((v) => !v)}
              >
                <span className={isServicesRoute ? "navActive" : "navLink"}>Services</span>
              </button>

              {deskServicesOpen && (
                <div className="navDropdown" role="menu" aria-label="Services">
                  <button className="navDropItem" onClick={() => goService("")} role="menuitem">
                    Services Overview
                  </button>
                  <button className="navDropItem" onClick={() => goService("#strategy")} role="menuitem">
                    Business Strategy
                  </button>
                  <button className="navDropItem" onClick={() => goService("#digital")} role="menuitem">
                    Digital Transformation
                  </button>
                  <button className="navDropItem" onClick={() => goService("#crossborder")} role="menuitem">
                    Cross-Border Advisory
                  </button>
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

      {/* ✅ Mobile menu */}
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

            {/* ✅ Mobile Services dropdown (overlay, modern, no pushing) */}
            <div className="mServicesWrap" ref={mobileServicesRef}>
              <button
                type="button"
                className={`mLink mServicesBtn`}
                onClick={() => setMobileServicesOpen((v) => !v)}
                aria-expanded={mobileServicesOpen}
                aria-controls="m-services-dropdown"
              >
                <span>Services</span>
                <span className={`mChevron ${mobileServicesOpen ? "open" : ""}`} />
              </button>

              {/* ✅ Tap outside closes ONLY dropdown (not whole menu) */}
              {mobileServicesOpen && (
                <button
                  type="button"
                  className="mServicesBackdrop"
                  aria-label="Close services dropdown"
                  onClick={() => setMobileServicesOpen(false)}
                />
              )}

              {mobileServicesOpen && (
                <div id="m-services-dropdown" className="mServicesDropdown" role="menu">
                  <button className="mSubLink" onClick={() => goService("")} role="menuitem">
                    Services Overview
                  </button>
                  <button className="mSubLink" onClick={() => goService("#strategy")} role="menuitem">
                    Business Strategy
                  </button>
                  <button className="mSubLink" onClick={() => goService("#digital")} role="menuitem">
                    Digital Transformation
                  </button>
                  <button className="mSubLink" onClick={() => goService("#crossborder")} role="menuitem">
                    Cross-Border Advisory
                  </button>
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
