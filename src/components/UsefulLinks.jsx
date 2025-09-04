import React from "react";

const links = [
  { name: "Ministry of New and Renewable Energy", url: "https://mnre.gov.in/" },
  { name: "Bioenergy Portal", url: "https://biourja.mnre.gov.in/" },
  { name: "Biogas Portal", url: "https://biourja.mnre.gov.in/" },
  { name: "Akshay Urja Portal", url: "https://akshayurja.gov.in/res/renw-all-india-cp" },
  { name: "Amrit Mahotsav Portal", url: "https://amritmahotsav.nic.in/" },
];

export default function UsefulLinks() {
  return (
    <section className="py-16 bg-white border-b border-gray-200" id="useful-links">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h3 className="text-3xl font-extrabold mb-10 text-blue-700 tracking-tight text-center border-b-2 border-blue-600 inline-block pb-2">
          Useful Links
        </h3>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Link</th>
              </tr>
            </thead>
            <tbody>
              {links.map((link, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium text-gray-800">{link.name}</td>
                  <td className="p-4">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Visit →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
