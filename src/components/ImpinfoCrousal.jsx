import React from "react";

const notifications = [
  "📢 Applications open for Junior Research Fellows (Deadline: 15 Sep 2025)",
  "🎉 NABL Accreditation achieved (ISO/IEC 17025:2017)",
  "📅 5th International Conference on Bioenergy Research – Oct 6-9, 2025",
  "🚀 New Publication in Nature Methods by our lab team",
];

const ImpinfoCrousal = () => {
  return (
    <div className="w-full bg-blue-600 text-white py-2 overflow-hidden relative">
      <div className="whitespace-nowrap animate-scroll px-6">
        {notifications.map((note, i) => (
          <span key={i} className="mx-10 font-medium">
            {note}
          </span>
        ))}
      </div>

      {/* CSS animation inside Tailwind */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(50%); }   /* Start at center */
            100% { transform: translateX(-100%); } 
          }
          .animate-scroll {
            display: inline-block;
            min-width: 100%;
            animation: scroll 25s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default ImpinfoCrousal;
