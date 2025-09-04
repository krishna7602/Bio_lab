import React, { useState, useEffect } from "react";
import { X } from "lucide-react"; // icon for close button

const announcements = [
  {
    title:
      "5th International Conference on Recent Advance in Bioenergy Research (ICRABR)",
    date: "6th - 9th October 2025",
    link: "https://icrabr.com/",
  },
  {
    title: "NABL accreditation for Testing (ISO/IEC 17025:2017)",
    date: "Sep 2025",
    link: "#",
  },
  {
    title: "Recruitment for Junior Research Fellows",
    date: "Aug 2025",
    link: "#",
  },
];

export default function WhatsNew() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (announcements.length > 0) {
      setShowPopup(true); // show popup with all announcements
    }
  }, []);

  return (
    <>
      {/* Popup for ALL announcements */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-xl shadow-lg p-6 max-w-2xl w-full border border-gray-200">
            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-bold mb-4 text-blue-700 border-b pb-2">
              📢 Latest Announcements
            </h3>

            <ul className="space-y-4">
              {announcements.map((item, i) => (
                <li
                  key={i}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">{item.date}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View Details →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* What's New Section (permanent table view) */}
      <section className="py-16 bg-white border-b border-gray-200" id="news">
        <div className="max-w-4xl mx-auto px-8">
          <h3 className="text-3xl font-extrabold mb-10 text-blue-700 tracking-tight text-center border-b-2 border-blue-600 inline-block pb-2">
            What's New
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Link</th>
                </tr>
              </thead>
              <tbody>
                {announcements.map((item, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="p-4 font-medium text-gray-800">
                      {item.title}
                    </td>
                    <td className="p-4 text-gray-600">{item.date}</td>
                    <td className="p-4">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
