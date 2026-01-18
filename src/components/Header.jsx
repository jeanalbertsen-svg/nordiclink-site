// src/components/Header.jsx
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";

export default function Header({ mobileOpen, setMobileOpen }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  // Close services dropdown whenever mobile menu closes
  useEffect(() => {
    if (!mobileOpen) setServicesOpen(false);
  }, [mobileOpen]);

  // Prevent background scroll when overlay is open
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const closeAll = () => {
    setServicesOpen(false);
    setMobileOpen(false);
  };

  const goToService = (hash) => {
    // Navigate first, then close menu (hash anchors work after route changes)
    navigate(`/services${hash}`);
    closeAll();
  };

  return (
    <header className="header">
      <div className="container headerInner">
        {/* Burger */}
        <button
          className="menuBtn"
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Brand */}
        <Link to="/" className="brand" onClick={closeAll}>
          <span className="logoDesktop">
            <Logo
              size={60}
              fontSize={20}
              borderWidth={4}
              borderColor="#0B387C"
              nameSize={20}
              nameColor="rgba(255,255,255,0.82)"
              nameLetterSpacing="0.14em"
              nameMaxWidth={420}
              nameWhiteSpace="nowrap"
            />
          </span>

          <span className="logoMobile">
            <Logo
              size={56}
              fontSize={15}
              borderWidth={3}
              borderColor="#0B387C"
              nameSize={15}
              nameColor="rgba(255,255,255,0.82)"
              nameLetterSpacing="0.12em"
              nameMaxWidth={260}
              nameWhiteSpace="normal"
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="headerRight">
          <nav className="navDesktop">
            <NavLink to="/" className={({ isActive }) => (isActive ? "navActive" : "navLink")}>
              Home
            </NavLink>

            {/* Desktop Services dropdown */}
            <div className="navDropdown">
              <NavLink to="/services" className={({ isActive }) => (isActive ? "navActive" : "navLink")}>
                Services
              </NavLink>

              <div className="navDropdownPanel" aria-label="Services submenu">
                <button type="button" className="navDropItem" onClick={() => navigate("/services#strategy")}>
                  Business Strategy
                </button>
                <button type="button" className="navDropItem" onClick={() => navigate("/services#digital")}>
                  Digital Transformation
                </button>
                <button type="button" className="navDropItem" onClick={() => navigate("/services#crossborder")}>
                  Cross-Border Advisory
                </button>
              </div>
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

      {/* ✅ Mobile full-screen overlay menu (like your screenshot) */}
      {mobileOpen && (
        <div className="mobileOverlay" role="dialog" aria-modal="true" onClick={closeAll}>
          <div className="mobileOverlayInner" onClick={(e) => e.stopPropagation()}>
            {/* Close X */}
            <button className="mobileClose" type="button" onClick={closeAll} aria-label="Close menu">
              ✕
            </button>

            <nav className="mobileMenu" aria-label="Mobile navigation">
              <NavLink to="/" onClick={closeAll} className="mobileMenuLink">
                HOME
              </NavLink>

              {/* SERVICES (with dropdown that does NOT push other links) */}
              <div className="mobileServices">
                <button
                  type="button"
                  className="mobileMenuLink mobileMenuButton"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                >
                  SERVICES
                </button>

                {servicesOpen && (
                  <div className="mobileServicesPopover" onClick={(e) => e.stopPropagation()}>
                    <button type="button" className="mobileSubLink" onClick={() => goToService("#strategy")}>
                      Business Strategy
                    </button>
                    <button type="button" className="mobileSubLink" onClick={() => goToService("#digital")}>
                      Digital Transformation
                    </button>
                    <button type="button" className="mobileSubLink" onClick={() => goToService("#crossborder")}>
                      Cross-Border Advisory
                    </button>
                  </div>
                )}
              </div>

              <NavLink to="/about" onClick={closeAll} className="mobileMenuLink">
                WHO I WORK WITH
              </NavLink>

              <NavLink to="/contact" onClick={closeAll} className="mobileMenuLink">
                CONTACT
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
