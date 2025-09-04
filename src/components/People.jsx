import React from "react";

export default function People() {
  const members = [
    { name: "Neeraj", email: "neeraj.bt.19@nitj.ac.in" },
    { name: "Aakriti Aggarwal", email: "aakritia.bt.19@nitj.ac.in" },
    { name: "Nisha Rai", email: "nishar.bt.21@nitj.ac.in" },
    { name: "Anushree Pant", email: "anushreep.bt.22@nitj.ac.in" },
    { name: "Rishpreet Kaur", email: "rishpreetk.bt.22@nitj.ac.in" },
    { name: "Siddhartha Dan", email: "siddharthad.bt.22@nitj.ac.in / siddharthadan7@gmail.com" },
    { name: "Megha Mankoti", email: "megham.bt.22@nitj.ac.in" },
    { name: "Deepika Umrao", email: "deepikau.bt.22@nitj.ac.in" },
    { name: "Shivani Chauhan", email: "shivanic.bt.22@nitj.ac.in" },
    { name: "Supraja Chandra", email: "suprajac.bt.23@nitj.ac.in" },
    { name: "Sourav Singh Salaria", email: "souravss.bt.23@nitj.ac.in" },
    { name: "Vikash", email: "vikash.bt.23@nitj.ac.in" },
    { name: "Sandeep Shukla", email: "sandeepks.bt.23@nitj.ac.in" },
    { name: "Payal Guleria", email: "payalg.bt.23@nitj.ac.in" },
    { name: "Nisha Kumari Pandit", email: "nishakp.bt.23@nitj.ac.in" },
    { name: "Sundeep Kaur", email: "sundeepk.bt.23@nitj.ac.in" },
    { name: "Samay Shukla", email: "samayps.bt.23@nitj.ac.in" },
    { name: "Aditi Sarkar", email: "aditis.bt.23@nitj.ac.in" }
  ];

return (
    <section id="people" className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto text-center px-4">
            <h3 className="text-3xl font-extrabold mb-10 text-black tracking-tight">
                Lab Members
            </h3>

            {/* Members Grid */}
            <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                {members.map((member, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-50 border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition w-full max-w-xs"
                    >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                            {member.name.charAt(0)}
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{member.email}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
}
