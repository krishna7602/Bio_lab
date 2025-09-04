import React from "react";

const newsItems = [
  { title: "Lab receives major grant", date: "Aug 2025" },
  { title: "New publication accepted", date: "Jul 2025" },
];

export default function News() {
  return (
    <section id="news" className="py-16 bg-white border-b border-gray-200">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-extrabold mb-10 text-black tracking-tight">News & Updates</h3>
        <div className="space-y-6">
          {newsItems.map((news, i) => (
            <div key={i} className="p-6 bg-black rounded-2xl shadow border border-gray-800">
              <h4 className="text-xl font-semibold text-white">{news.title}</h4>
              <p className="text-gray-300">{news.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
