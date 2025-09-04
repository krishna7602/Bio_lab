import React from "react";

export default function DirectorMessage() {
  const directorDetails = [
    { label: "Name", value: "Dr Prangya Ranjan Rout" },
    { label: "Designation", value: "Assistant Professor (Grade-I)" },
    { label: "Department", value: "Bio Technology" },
    {
      label: "Qualification",
      value: (
        <ul className="list-disc ml-5">
          <li>PhD Environmental Biotechnology (IIT Bhubaneswar)</li>
          <li>M.Tech Biotechnology (NIT Rourkela)</li>
          <li>B.Tech Biotechnology (BPUT Rourkela)</li>
        </ul>
      ),
    },
    {
      label: "Address",
      value:
        "Room No.- BT-215, Department of Biotechnology, Dr B R Ambedkar National Institute of Technology Jalandhar, Jalandhar, Punjab 144008",
    },
    { label: "Email", value: "routpr@nitj.ac.in" },
    { label: "Phone", value: "+918917379390" },
  ];

return (
    <section className="py-10 bg-white border-b border-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 px-4 md:px-8">
            <img
                src="https://v1.nitj.ac.in/images/faculty/23020279109.jpg"
                alt="Director"
                className="w-32 h-32 object-cover rounded-full border border-gray-300 mb-4 md:mb-0"
            />
            <div className="text-left w-full">
                <h3 className="text-xl font-bold mb-1">Dr Prangya Ranjan Rout</h3>
                <h4 className="text-md font-medium mb-2 text-gray-600">Assistant Professor (Grade-I)</h4>
                <p className="text-gray-700 max-w-2xl mb-4">
                    Dr Rout is an Environmental Biotechnologist with 10+ years of expertise in wastewater treatment, nutrient removal, and resource recovery. He has published 48 research articles, received multiple awards, and currently leads five major research projects. Dr Rout is committed to innovation, collaboration, and mentoring in biotechnology.
                </p>
                <ul className="bg-gray-50 p-3 rounded-lg border border-gray-200 mb-4">
                    {directorDetails.map((item, idx) => (
                        <li key={idx} className="mb-1 flex">
                            <span className="font-semibold w-32">{item.label}:</span>
                            <span className="ml-2">{item.value}</span>
                        </li>
                    ))}
                    <a
                    href="https://departments.nitj.ac.in/dept/bt/Faculty/6430447538bff038a7808ff4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    More Info
                </a>
                </ul>
                
            </div>
        </div>
    </section>
);
}
