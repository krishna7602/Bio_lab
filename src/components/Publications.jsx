import React, { useEffect, useState } from "react";

const Publication = ({ title, authors, journal, year, link, description }) => (
  <li className="py-6">
    <h3 className="text-lg font-semibold text-blue-700 hover:underline">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </h3>
    <p className="text-sm text-gray-600">{authors}</p>
    <p className="italic text-gray-500">
      {journal}, {year}
    </p>
    <p className="mt-2 text-gray-700 text-justify">{description}</p>
  </li>
);

const Publications = () => {
  const [pubs, setPubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const res = await fetch("http://localhost:8001/api/v1/users/publications");
        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
          setPubs(data.data);
        } else {
          console.error("Invalid API response:", data);
        }
      } catch (error) {
        console.error("Error fetching publications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  return (
    <section id="publications" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Publications
      </h2>

      {loading ? (
        <p className="mt-6 text-gray-600">Loading publications...</p>
      ) : pubs.length > 0 ? (
        <ul className="mt-8 divide-y">
          {pubs.map((p) => (
            <Publication key={p._id} {...p} />
          ))}
        </ul>
      ) : (
        <p className="mt-6 text-gray-600">No publications found.</p>
      )}
    </section>
  );
};

export default Publications;
