import React, { useEffect, useState } from "react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export default function FacultyProfile() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/faculty/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setFaculty(data.data);
        }
      })
      .catch((err) => console.error("Error fetching faculty:", err));
  }, []);

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
          Faculty Members
        </h2>

        {/* Responsive Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {faculty.map((person) => (
            <div
              key={person._id}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-2xl border border-gray-200 shadow hover:shadow-lg transition bg-white"
            >
              {/* Profile Image */}
              <img
                src={person.image}
                alt={person.name}
                className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-full border border-gray-300 flex-shrink-0"
              />

              {/* Info Section */}
              <div className="flex-1 text-left">
                <h3 className="text-xl font-bold text-gray-900">
                  {person.name}
                </h3>
                <h4 className="text-md font-medium text-blue-600 mb-2">
                  {person.designation}
                </h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {person.bio}
                </p>

                {/* Details */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm space-y-2">
                  <p>
                    <span className="font-semibold">Department:</span>{" "}
                    {person.department}
                  </p>
                  <p>
                    <span className="font-semibold">Qualification:</span>
                  </p>
                  <ul className="list-disc ml-6">
                    {person.qualifications.map((q, idx) => (
                      <li key={idx}>{q}</li>
                    ))}
                  </ul>
                  <p>
                    <span className="font-semibold">Address:</span>{" "}
                    {person.address}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    <a
                      href={`mailto:${person.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {person.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    {person.phone}
                  </p>
                  <p>
                    <span className="font-semibold">Publications:</span>{" "}
                    {person.achievements?.publications}
                  </p>
                  <p>
                    <span className="font-semibold">Projects:</span>{" "}
                    {person.achievements?.projects}
                  </p>
                  {person.achievements?.awards?.length > 0 && (
                    <div>
                      <span className="font-semibold">Awards:</span>
                      <ul className="list-disc ml-6 mt-1">
                        {person.achievements.awards.map((award, idx) => (
                          <li key={idx}>{award}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <div className="mt-4">
                  <a
                    href={`https://departments.nitj.ac.in/dept/bt/Faculty/${person._id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
