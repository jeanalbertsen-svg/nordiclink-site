// src/components/Header.jsx
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

export default function Header({ mobileOpen, setMobileOpen }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const location = useLocation();

  // Close dropdown + mobile menu on route/hash change
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (!servicesRef.current) return;
      if (!servicesRef.current.contains(e.target)) setServicesOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Close dropdown on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setServicesOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const navClass = ({ isActive }) => (isActive ? "navActive" : "navLink");

  return (
    <header className="header">
      <div className="container headerInner">
        {/* ✅ LEFT: burger (mobile only via CSS) */}
      <button
        className="menuBtn"
        onClick={() => setMobileOpen?.((v) => !v)}
        aria-label="Toggle menu"
        type="button"
      >
        <span />
        <span />
        <span />
      </button>


        {/* ✅ Brand */}
        <Link to="/" className="brand" onClick={() => setMobileOpen(false)}>
          {/* ✅ DESKTOP LOGO */}
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

          {/* ✅ MOBILE LOGO */}
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

        {/* ✅ RIGHT: desktop nav */}
        <div className="headerRight">
          <nav className="navDesktop" aria-label="Primary">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            {/* ✅ Services dropdown (desktop) */}
            <div className="navDropdown" ref={servicesRef}>
              <button
                type="button"
                className={`navLink navDropdownBtn ${
                  location.pathname === "/services" ? "navActive" : ""
                }`}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
                onMouseEnter={() => setServicesOpen(true)}
              >
                Services <span className={`caret ${servicesOpen ? "caretUp" : ""}`} />
              </button>

              {servicesOpen && (
                <div
                  className="dropdownMenu"
                  role="menu"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink to="/services#strategy" className="dropdownItem" role="menuitem">
                    Business Strategy
                  </NavLink>
                  <NavLink to="/services#digital" className="dropdownItem" role="menuitem">
                    Digital Transformation
                  </NavLink>
                  <NavLink to="/services#crossborder" className="dropdownItem" role="menuitem">
                    Cross-Border Advisory
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navClass}>
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
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => (isActive ? "mActive" : "mLink")}
            >
              Home
            </NavLink>

            {/* ✅ Services group + sublinks */}
            <div className="mGroup">
              <NavLink
                to="/services"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => (isActive ? "mActive" : "mLink")}
              >
                Services
              </NavLink>

              <div className="mSubLinks">
                <NavLink
                  to="/services#strategy"
                  onClick={() => setMobileOpen(false)}
                  className="mSublink"
                >
                  Business Strategy
                </NavLink>

                <NavLink
                  to="/services#digital"
                  onClick={() => setMobileOpen(false)}
                  className="mSublink"
                >
                  Digital Transformation
                </NavLink>

                <NavLink
                  to="/services#crossborder"
                  onClick={() => setMobileOpen(false)}
                  className="mSublink"
                >
                  Cross-Border Advisory
                </NavLink>
              </div>
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
