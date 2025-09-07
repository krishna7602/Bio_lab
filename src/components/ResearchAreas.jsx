import React, { useEffect, useState } from "react";
import axios from "axios";
import { Beaker, Cpu, Microscope, Atom, Dna, Activity } from "lucide-react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const iconMap = {
  "Computational Biology": Cpu,
  "Synthetic Biology": Beaker,
  "Imaging & Microscopy": Microscope,
  "Molecular Biotechnology": Dna,
  "Bioinformatics & Data Science": Activity,
  "Biophysics & Structural Biology": Atom,
};

const ResearchCard = ({ title, description, color, icon: Icon }) => (
  <div
    className={`p-6 rounded-2xl border ${color} bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition`}
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 text-white">
        <Icon size={24} />
      </div>
      <h3 className="ml-3 text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 text-justify">{description}</p>
  </div>
);

const ResearchAreas = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/research-areas/`
        );
        setAreas(res.data.data);
      } catch (err) {
        console.error("Error fetching research areas:", err);
      }
    };
    fetchAreas();
  }, []);

  // Assign border colors dynamically
  const borderColors = [
    "border-sky-100",
    "border-green-100",
    "border-pink-100",
    "border-purple-100",
    "border-yellow-100",
    "border-red-100",
  ];

  return (
    <section id="research" className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Research Areas
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Our lab explores diverse research domains that integrate biology,
          technology, and computation to solve real-world challenges.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {areas.map((a, i) => {
          const Icon = iconMap[a.title] || Cpu; // fallback icon
          const color = borderColors[i % borderColors.length];
          return (
            <ResearchCard
              key={a._id || i}
              title={a.title}
              description={a.description}
              color={color}
              icon={Icon}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ResearchAreas;
