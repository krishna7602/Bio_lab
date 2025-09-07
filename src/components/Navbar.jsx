import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AdminAuthModal from "./AdminAuthModal";
import AdminDashboard from "./AdminDashboard";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoData, setLogoData] = useState(null);

  // Fetch logo + title from API
  useEffect(() => {
    fetch("http://localhost:8001/api/v1/users/logo/")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          // take the most recent logo (last item in array)
          const latestLogo = data.data[data.data.length - 1];
          setLogoData(latestLogo);
        }
      })
      .catch((err) => console.error("Error fetching logo:", err));
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          {logoData ? (
            <>
              <img
                src={logoData.logo}
                alt="Lab Logo"
                className="h-10 w-auto drop-shadow"
              />
              <p className="text-lg font-semibold text-sky-700 tracking-wide">
                {logoData.labname}
              </p>
            </>
          ) : (
            <p className="text-lg font-semibold text-sky-700">Loading...</p>
          )}
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center text-slate-700 font-medium">
          <a href="#home" className="hover:text-sky-600 transition-colors">
            Home
          </a>
          <a href="#research" className="hover:text-sky-600 transition-colors">
            Research
          </a>
          <a href="#people" className="hover:text-sky-600 transition-colors">
            People
          </a>
          <a href="#publications" className="hover:text-sky-600 transition-colors">
            Publications
          </a>
          <a href="#news" className="hover:text-sky-600 transition-colors">
            News
          </a>
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-sky-600 text-white rounded-md shadow hover:bg-sky-700 transition-colors"
          >
            Admin
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col p-4 gap-4 text-slate-700 font-medium">
            <a
              href="#home"
              className="hover:text-sky-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#research"
              className="hover:text-sky-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Research
            </a>
            <a
              href="#people"
              className="hover:text-sky-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              People
            </a>
            <a
              href="#publications"
              className="hover:text-sky-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Publications
            </a>
            <a
              href="#news"
              className="hover:text-sky-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </a>
            <button
              onClick={() => {
                setModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2 bg-sky-600 text-white rounded-md shadow hover:bg-sky-700 transition-colors"
            >
              Admin
            </button>
          </nav>
        </div>
      )}

      {modalOpen && <AdminAuthModal onClose={() => setModalOpen(false)} />}
      {dashboardOpen && <AdminDashboard />}
    </header>
  );
};

export default Navbar;
