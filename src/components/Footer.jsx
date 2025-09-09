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
        <a href="https://linkedin.com/in/ramkrishna-mondal-b73b09294/" target="_blank" className="font-semibold text-blue-700">
          Ramkrishna Mondal
        </a>{" "}
        &{" "}
        <a href="https://www.linkedin.com/in/vighnesh-aggarwal-703155267/" target="_blank" className="font-semibold text-blue-700">
          Vignesh Agarwal
        </a>
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
