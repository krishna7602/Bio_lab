import React, { useState } from "react";
import Logo from "../assets/react.svg"

const Navbar = () => {
  const [open, setOpen] = useState(false);
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
                <a href="#contact" className="px-4 py-2 bg-sky-600 text-white rounded-md shadow hover:bg-sky-700 transition-colors">Contact</a>
            </nav>
            <button className="md:hidden p-2 rounded hover:bg-slate-100 transition" onClick={() => setOpen(!open)} aria-label="menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>
        </div>
        {open && (
            <div className="md:hidden bg-white border-t shadow">
                <nav className="flex flex-col gap-2 px-6 py-4 font-medium text-slate-700">
                    <a href="#home" className="py-2 hover:text-sky-600 transition-colors">Home</a>
                    <a href="#research" className="py-2 hover:text-sky-600 transition-colors">Research</a>
                    <a href="#people" className="py-2 hover:text-sky-600 transition-colors">People</a>
                    <a href="#publications" className="py-2 hover:text-sky-600 transition-colors">Publications</a>
                    <a href="#news" className="py-2 hover:text-sky-600 transition-colors">News</a>
                    <a href="#contact" className="py-2 text-sky-600 font-semibold hover:bg-sky-50 rounded transition-colors">Contact</a>
                </nav>
            </div>
        )}
    </header>
);
};

export default Navbar