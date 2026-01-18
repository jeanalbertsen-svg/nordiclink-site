// src/components/Header.jsx
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import "./Header.css";


export default function Header({ mobileOpen, setMobileOpen }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  // Close the services dropdown whenever the mobile menu closes
  useEffect(() => {
    if (!mobileOpen) setServicesOpen(false);
  }, [mobileOpen]);

  const closeAll = () => {
    setServicesOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="header">
      <div className="container headerInner">
        {/* ✅ LEFT: burger (mobile only via CSS) */}
        <button
          className="menuBtn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* ✅ Brand */}
        <Link to="/" className="brand" onClick={() => closeAll()}>
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

      {/* ✅ Mobile menu */}
      {mobileOpen && (
        <div className="mobileNavWrap">
          {/* ✅ tap-outside backdrop for dropdown */}
          {servicesOpen && (
            <button
              className="mServicesBackdrop"
              aria-label="Close services menu"
              onClick={() => setServicesOpen(false)}
            />
          )}

          <div className="container mobileNav">
            <NavLink
              to="/"
              onClick={() => closeAll()}
              className={({ isActive }) => (isActive ? "mActive" : "mLink")}
            >
              Home
            </NavLink>

            {/* ✅ Services row + dropdown (doesn't push other links) */}
            <div className="mServicesWrap">
              <div className="mServicesRow">
                {/* Left side = go to Services page */}
                <NavLink
                  to="/services"
                  onClick={() => closeAll()}
                  className={({ isActive }) => (isActive ? "mActive mServicesMain" : "mLink mServicesMain")}
                >
                  Services
                </NavLink>

                {/* Right side = toggle dropdown */}
                <button
                  type="button"
                  className="mServicesToggle"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-label="Toggle services dropdown"
                  aria-expanded={servicesOpen}
                >
                  <span className={`chev ${servicesOpen ? "open" : ""}`} />
                </button>
              </div>

              {servicesOpen && (
                <div className="mServicesDropdown" role="menu">
                  <NavLink
                    to="/services?service=strategy"
                    onClick={() => closeAll()}
                    className="mSubLink"
                    role="menuitem"
                  >
                    Business Strategy
                  </NavLink>

                  <NavLink
                    to="/services?service=digital"
                    onClick={() => closeAll()}
                    className="mSubLink"
                    role="menuitem"
                  >
                    Digital Transformation
                  </NavLink>

                  <NavLink
                    to="/services?service=crossborder"
                    onClick={() => closeAll()}
                    className="mSubLink"
                    role="menuitem"
                  >
                    Cross-Border Advisory
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              onClick={() => closeAll()}
              className={({ isActive }) => (isActive ? "mActive" : "mLink")}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => closeAll()}
              className={({ isActive }) => (isActive ? "mActive" : "mLink")}
            >
              Contact
            </NavLink>

            <a href="/contact" className="button buttonPrimary mCta" onClick={() => closeAll()}>
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
