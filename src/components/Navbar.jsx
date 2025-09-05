import React, { useState } from "react";
import Logo from "../assets/react.svg";
import AdminAuthModal from "./AdminAuthModal";
import AdminDashboard from "./AdminDashboard";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Lab Logo" className="h-10 w-auto drop-shadow" />
          <p className="text-lg font-semibold text-sky-700 tracking-wide">Biotechnology Lab</p>
        </div>
        <nav className="hidden md:flex gap-8 items-center text-slate-700 font-medium">
          <a href="#home" className="hover:text-sky-600 transition-colors">Home</a>
          <a href="#research" className="hover:text-sky-600 transition-colors">Research</a>
          <a href="#people" className="hover:text-sky-600 transition-colors">People</a>
          <a href="#publications" className="hover:text-sky-600 transition-colors">Publications</a>
          <a href="#news" className="hover:text-sky-600 transition-colors">News</a>
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-sky-600 text-white rounded-md shadow hover:bg-sky-700 transition-colors"
          >
            Admin
          </button>
        </nav>
      </div>

      {modalOpen && <AdminAuthModal onClose={() => setModalOpen(false)} />}
      {dashboardOpen && <AdminDashboard />}
    </header>
  );
};

export default Navbar;
