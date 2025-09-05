import React, { useEffect, useState } from "react";

export default function News() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await fetch("http://localhost:8001/api/v1/users/getAllAnnouncement");
        const data = await res.json();

        const announcements = data.data || [];
        setNewsItems(announcements);

        if (announcements.length > 0) {
          setShowPopup(true);
        }
      } catch (error) {
        console.error("Error fetching announcements:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    if (isNaN(date)) return dateStr;
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section id="news" className="py-16 bg-white border-b border-gray-200 relative">
      <div className="container mx-auto px-4">
        {/* Added px-4 here to give left/right spacing */}
        <h3 className="text-3xl font-extrabold mb-10 text-black tracking-tight text-center">
          News & Updates
        </h3>

        {loading ? (
          <p className="text-gray-500 text-center">Loading announcements...</p>
        ) : newsItems.length === 0 ? (
          <p className="text-gray-500 text-center">No announcements available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((news) => (
                <div
                  key={news._id}
                  className={`p-6 rounded-2xl shadow border transition mx-2
                    ${
                      news.important
                        ? "bg-blue-600 border-blue-700 text-white"
                        : "bg-white border-gray-300 text-black"
                    }`}
                >
                  <h4 className="text-xl font-semibold mb-2">
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:underline ${
                        news.important ? "text-white" : "text-blue-700"
                      }`}
                    >
                      {news.title}
                    </a>
                  </h4>
                  <p className="text-sm">{formatDate(news.date)}</p>
                  {news.important && (
                    <p className="text-yellow-300 font-bold mt-2">🔥 Important</p>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Popup */}
      {showPopup && newsItems.length > 0 && (
        <div className="fixed bottom-10 right-10 w-full max-w-md bg-white border border-blue-400 shadow-2xl rounded-xl p-6 z-50">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-3 right-3 text-gray-600 hover:text-black text-lg font-bold"
          >
            ✖
          </button>

          <h4 className="text-2xl font-bold text-blue-700 mb-4">
            Latest Announcements
          </h4>
          <ul className="list-disc pl-5 space-y-2">
            {newsItems
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(0, 5)
              .map((item) => (
                <li key={item._id} className="text-gray-800">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    {item.title}
                  </a>{" "}
                  <span className="text-sm text-gray-500">
                    ({formatDate(item.date)})
                  </span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </section>
  );
}
