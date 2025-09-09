import React, { useEffect, useState } from "react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export default function People() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/getAllStudent`);
        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
          setMembers(data.data);
        } else {
          console.error("Invalid API response:", data);
        }
      } catch (error) {
        console.error("Error fetching members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <section id="people" className="py-16 bg-white border-b border-gray-200">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-3xl font-extrabold mb-10 text-black tracking-tight">
          Lab Members
        </h3>

        {loading ? (
          <p className="text-gray-600">Loading members...</p>
        ) : (
          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {members.map((member, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition w-full max-w-xs"
              >
                {/* Profile Image or Fallback Initial */}
                {member.imageUrl ? (
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-16 h-16 mx-auto mb-4 rounded-full object-cover border"
                  />
                ) : (
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    {member.name?.charAt(0) || "?"}
                  </div>
                )}

                {/* Member Info */}
                <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{member.role}</p>
                <p className="text-sm text-gray-600 mt-1">{member.category}</p>
                <p className="text-sm text-gray-500 mt-1">{member.email}</p>
                <p className="text-xs text-gray-500 mt-2">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-3 text-sm">
                  {member.socialLinks?.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      LinkedIn
                    </a>
                  )}
                  {member.socialLinks?.github && (
                    <a
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:underline"
                    >
                      Resume
                    </a>
                  )}
                  {member.socialLinks?.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:underline"
                    >
                      Twitter
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
