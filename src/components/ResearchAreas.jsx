import React from "react";
import { Beaker, Cpu, Microscope, Atom, Dna, Activity } from "lucide-react";

const ResearchCard = ({ title, desc, color, icon: Icon }) => (
  <div
    className={`p-6 rounded-2xl border ${color} bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition`}
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 text-white">
        <Icon size={24} />
      </div>
      <h3 className="ml-3 text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 text-justify">{desc}</p>
  </div>
);

const ResearchAreas = () => {
  const areas = [
    {
      title: "Computational Biology",
      desc: "We design algorithms and models to study DNA, proteins, and cellular pathways. By integrating genomics and proteomics, our research accelerates biological discoveries and supports personalized medicine through systems-level insights.",
      color: "border-sky-100",
      icon: Cpu,
    },
    {
      title: "Synthetic Biology",
      desc: "Our work focuses on engineering microbes for sustainable production of fuels, chemicals, and medicines. We build genetic circuits and metabolic pathways to create innovative, eco-friendly solutions in healthcare and industry.",
      color: "border-green-100",
      icon: Beaker,
    },
    {
      title: "Imaging & Microscopy",
      desc: "Using advanced microscopy and computational image analysis, we visualize cells, proteins, and biomolecular interactions in real time. Our goal is to uncover biological mechanisms invisible to conventional imaging methods.",
      color: "border-pink-100",
      icon: Microscope,
    },
    {
      title: "Molecular Biotechnology",
      desc: "We manipulate DNA, RNA, and proteins with tools like CRISPR and recombinant technology. This enables novel therapeutic molecules, enzymes, and diagnostics while deepening our understanding of gene regulation and function.",
      color: "border-purple-100",
      icon: Dna,
    },
    {
      title: "Bioinformatics & Data Science",
      desc: "By applying AI, machine learning, and omics integration, we analyze large-scale biological data. Our pipelines identify biomarkers, predict disease outcomes, and drive drug discovery through computational insights.",
      color: "border-yellow-100",
      icon: Activity,
    },
    {
      title: "Biophysics & Structural Biology",
      desc: "We study proteins and nucleic acids using X-ray, cryo-EM, and NMR. Structural insights reveal molecular function, guiding the design of drugs, enzymes, and biomaterials for biotechnological applications.",
      color: "border-red-100",
      icon: Atom,
    },
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
        {areas.map((a) => (
          <ResearchCard key={a.title} {...a} />
        ))}
      </div>
    </section>
  );
};

export default ResearchAreas;
