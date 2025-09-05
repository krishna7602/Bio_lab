import React, { useEffect, useState } from "react";

const ImpinfoCrousal = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await fetch("http://localhost:8001/api/v1/users/getAllAnnouncement");
        const data = await res.json();

        // Filter only important announcements
        // Filter important announcements
        
        const importantNotes = data.data
          .filter((a) => a.important)
          .map((a) =>
            a.link
              ? `📢 ${a.title} (${a.date}) → ${a.link}`
              : `📢 ${a.title} (${a.date})`
          );

        // Add "Go News" section if needed
        importantNotes.push("📰 Go News: Check out the latest updates on our News page!");

        setNotifications(importantNotes);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="w-full bg-blue-600 text-white py-2 overflow-hidden relative">
      <div className="whitespace-nowrap animate-scroll px-6">
        {notifications.length > 0 ? (
          notifications.map((note, i) => (
            <span key={i} className="mx-10 font-medium">
              {note}
            </span>
          ))
        ) : (
          <span className="mx-10 font-medium">No important updates</span>
        )}
      </div>

      {/* CSS animation inside Tailwind */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(50%); }
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
