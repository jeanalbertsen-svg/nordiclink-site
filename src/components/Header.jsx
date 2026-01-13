// src/components/Header.jsx
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Header({ mobileOpen, setMobileOpen }) {
  return (
    <header className="header">
      <div className="container headerInner">
        {/* ✅ LEFT: burger (mobile only via CSS) */}
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
        <Link to="/" className="brand" onClick={() => setMobileOpen(false)}>
          {/* ✅ DESKTOP LOGO */}
          <span className="logoDesktop">
            <Logo
              size={60}                 // ✅ BIGGER box on desktop
              fontSize={20}
              borderWidth={4}
              borderColor="#0B387C"
              nameSize={20}
              nameColor="rgba(255,255,255,0.72)"
              nameLetterSpacing="0.14em"
              nameMaxWidth={420}        // ✅ desktop can be wider
              nameWhiteSpace="nowrap"   // ✅ keep it in one line on desktop
            />
          </span>

          {/* ✅ MOBILE LOGO */}
          <span className="logoMobile">
            <Logo
              size={40}                 // ✅ smaller box on mobile
              fontSize={12}
              borderWidth={3}
              borderColor="#0B387C"
              nameSize={12}
              nameColor="rgba(255,255,255,0.72)"
              nameLetterSpacing="0.12em"
              nameMaxWidth={260}        // ✅ mobile wrap width
              nameWhiteSpace="normal"   // ✅ allow wrapping on mobile
            />
          </span>
        </Link>

        {/* ✅ RIGHT: desktop nav + CTA */}
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

          <a href="/contact" className="button buttonPrimary headerCta">
            Book a Call
          </a>
        </div>
      </div>

      {/* ✅ Mobile menu */}
      {mobileOpen && (
        <div className="mobileNavWrap">
          <div className="container mobileNav">
            <NavLink to="/" onClick={() => setMobileOpen(false)} className={({ isActive }) => (isActive ? "mActive" : "mLink")}>
              Home
            </NavLink>
            <NavLink to="/services" onClick={() => setMobileOpen(false)} className={({ isActive }) => (isActive ? "mActive" : "mLink")}>
              Services
            </NavLink>
            <NavLink to="/about" onClick={() => setMobileOpen(false)} className={({ isActive }) => (isActive ? "mActive" : "mLink")}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={() => setMobileOpen(false)} className={({ isActive }) => (isActive ? "mActive" : "mLink")}>
              Contact
            </NavLink>

            <a href="/contact" className="button buttonPrimary mCta" onClick={() => setMobileOpen(false)}>
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
