import React, { useEffect, useState } from "react";

export default function UsefulLinks() {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const res = await fetch("http://localhost:8001/api/v1/users/getAllUsefullLinks");
        const data = await res.json();
        setLinks(data.data || []); // API response assumed as { success, data: [...] }
      } catch (error) {
        console.error("Error fetching useful links:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  return (
    <section className="py-16 bg-white border-b border-gray-200" id="useful-links">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h3 className="text-3xl font-extrabold mb-10 text-blue-700 tracking-tight text-center border-b-2 border-blue-600 inline-block pb-2">
          Useful Links
        </h3>

        {/* Table */}
        <div className="overflow-x-auto">
          {loading ? (
            <p className="text-gray-500 text-center">Loading useful links...</p>
          ) : links.length === 0 ? (
            <p className="text-gray-500 text-center">No links available.</p>
          ) : (
            <table className="w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Link</th>
                </tr>
              </thead>
              <tbody>
                {links.map((link, i) => (
                  <tr
                    key={link._id || i}
                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="p-4 font-medium text-gray-800">{link.name}</td>
                    <td className="p-4 text-gray-600">{link.category || "—"}</td>
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
          )}
        </div>
      </div>
    </section>
  );
}
