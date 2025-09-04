import React from "react";

const Publication = ({ title, authors, journal, year, link, desc }) => (
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
    <p className="mt-2 text-gray-700 text-justify">{desc}</p>
  </li>
);

const Publications = () => {
  const pubs = [
    {
      title: "Fast and Accurate Sequence Alignment with Hybrid AI Models",
      authors: "R. Mondal, A. Singh, J. Doe",
      journal: "Bioinformatics",
      year: 2024,
      link: "#",
      desc: "This paper introduces a hybrid algorithm combining dynamic programming with deep learning to achieve faster sequence alignment. The method improves accuracy by 15% while reducing computational costs, enabling large-scale genome comparisons and personalized medicine applications.",
    },
    {
      title: "High-Resolution Imaging Pipeline for Cellular Dynamics",
      authors: "A. Researcher, R. Mondal, M. Brown",
      journal: "Nature Methods",
      year: 2023,
      link: "#",
      desc: "We present a novel imaging pipeline integrating super-resolution microscopy with automated image analysis. This framework allows real-time tracking of organelles and proteins, providing new insights into intracellular dynamics and disease mechanisms.",
    },
    {
      title: "Synthetic Biology Approaches for Sustainable Bioproduction",
      authors: "J. Smith, R. Mondal, N. Patel",
      journal: "ACS Synthetic Biology",
      year: 2023,
      link: "#",
      desc: "This work demonstrates the design of engineered microbes for cost-effective biofuel production. By optimizing genetic circuits and metabolic pathways, we achieved a 40% increase in yield compared to conventional approaches, with significant environmental benefits.",
    },
    {
      title: "Deep Learning in Structural Biology: Predicting Protein-Protein Interactions",
      authors: "R. Mondal, K. Lee, S. Gupta",
      journal: "Nature Communications",
      year: 2022,
      link: "#",
      desc: "This study applies graph neural networks to predict protein-protein interactions at atomic resolution. The framework outperforms traditional docking methods and provides interpretable insights for drug discovery and protein engineering.",
    },
    {
      title: "Omics Data Integration for Biomarker Discovery",
      authors: "M. Brown, R. Mondal, P. Kumar",
      journal: "BMC Genomics",
      year: 2021,
      link: "#",
      desc: "We propose a multi-omics integration pipeline that combines genomics, transcriptomics, and proteomics data. The system successfully identified novel biomarkers for cancer diagnosis, with potential applications in personalized healthcare.",
    },
  ];

  return (
    <section id="publications" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Publications
      </h2>
      <ul className="mt-8 divide-y">
        {pubs.map((p) => (
          <Publication key={p.title} {...p} />
        ))}
      </ul>
    </section>
  );
};

export default Publications;
