import React from "react";

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 mt-12">
    <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
      
      {/* Left side - Copyright */}
      <div className="text-gray-700">
        © {new Date().getFullYear()} MyLab. All rights reserved.
      </div>

      {/* Middle - Credits */}
      <div className="text-gray-700 text-center">
        Designed & Developed by{" "}
        <span className="font-semibold text-blue-700">
          Ramkrishna Mondal
        </span>{" "}
        &{" "}
        <span className="font-semibold text-blue-700">
          Vignesh Agarwal
        </span>
      </div>

      {/* Right side - Links */}
      <div className="flex gap-4">
        <a
          href="#"
          className="text-blue-600 hover:underline"
        >
          Privacy
        </a>
        <a
          href="#"
          className="text-blue-600 hover:underline"
        >
          Sitemap
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
