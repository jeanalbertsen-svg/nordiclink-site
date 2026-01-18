// src/components/Header.jsx
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

export default function Header({ mobileOpen, setMobileOpen }) {
  const [servicesOpen, setServicesOpen] = useState(false);       // desktop dropdown
  const [mServicesOpen, setMServicesOpen] = useState(false);     // mobile dropdown

  const servicesWrapRef = useRef(null);
  const mServicesWrapRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const onDown = (e) => {
      if (servicesWrapRef.current && !servicesWrapRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (mServicesWrapRef.current && !mServicesWrapRef.current.contains(e.target)) {
        setMServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);

    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMServicesOpen(false);
  };

  const toggleMobile = () => {
    setMobileOpen((v) => {
      const next = !v;
      if (!next) setMServicesOpen(false);
      return next;
    });
  };

  return (
    <header className="header">
      <div className="container headerInner">
        {/* ✅ Burger (mobile only via CSS) */}
        <button
          className="menuBtn"
          onClick={toggleMobile}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen ? "true" : "false"}
        >
          <span />
          <span />
          <span />
        </button>

        {/* ✅ Brand */}
        <Link to="/" className="brand" onClick={closeAll}>
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
            <NavLink to="/" className={({ isActive }) => (isActive ? "navActive" : "navLink")} onClick={closeAll}>
              Home
            </NavLink>

            {/* ✅ Desktop Services dropdown (click-to-open, absolute popover) */}
            <div className="navDropdownWrap" ref={servicesWrapRef}>
              <button
                type="button"
                className={servicesOpen ? "navLink navLinkBtn navLinkBtnActive" : "navLink navLinkBtn"}
                onClick={() => setServicesOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={servicesOpen ? "true" : "false"}
              >
                Services
              </button>

              {servicesOpen && (
                <div className="navDropdown" role="menu">
                  <Link to="/services#strategy" className="navDropItem" role="menuitem" onClick={closeAll}>
                    Business Strategy
                  </Link>
                  <Link to="/services#digital" className="navDropItem" role="menuitem" onClick={closeAll}>
                    Digital Transformation
                  </Link>
                  <Link to="/services#crossborder" className="navDropItem" role="menuitem" onClick={closeAll}>
                    Cross-Border Advisory
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/about" className={({ isActive }) => (isActive ? "navActive" : "navLink")} onClick={closeAll}>
              About
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => (isActive ? "navActive" : "navLink")} onClick={closeAll}>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>

      {/* ✅ Mobile menu */}
      {mobileOpen && (
        <div className="mobileNavWrap">
          <div className="container mobileNav">
            <NavLink to="/" onClick={closeAll} className={({ isActive }) => (isActive ? "mActive" : "mLink")}>
              Home
            </NavLink>

            {/* ✅ Mobile Services dropdown (click-to-open popover, does NOT push links) */}
            <div className="mDropdownWrap" ref={mServicesWrapRef}>
              <button
                type="button"
                className={mServicesOpen ? "mLink mLinkBtn mLinkBtnActive" : "mLink mLinkBtn"}
                onClick={() => setMServicesOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={mServicesOpen ? "true" : "false"}
              >
                Services
              </button>

              {mServicesOpen && (
                <div className="mDropdown" role="menu">
                  <Link to="/services#strategy" className="mDropItem" role="menuitem" onClick={closeAll}>
                    Business Strategy
                  </Link>
                  <Link to="/services#digital" className="mDropItem" role="menuitem" onClick={closeAll}>
                    Digital Transformation
                  </Link>
                  <Link to="/services#crossborder" className="mDropItem" role="menuitem" onClick={closeAll}>
                    Cross-Border Advisory
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/about" onClick={closeAll} className={({ isActive }) => (isActive ? "mActive" : "mLink")}>
              About
            </NavLink>

            <NavLink to="/contact" onClick={closeAll} className={({ isActive }) => (isActive ? "mActive" : "mLink")}>
              Contact
            </NavLink>

            <a href="/contact" className="button buttonPrimary mCta" onClick={closeAll}>
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
