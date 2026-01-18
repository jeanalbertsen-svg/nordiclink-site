// src/components/Layout.jsx
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close menu when navigating
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="appShell">
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
