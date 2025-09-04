import React from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1579165466991-467135ad3110?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1579165466991-467135ad3110?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1614308456595-a59d48697ea8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
];

export default function Gallery() {
  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-extrabold mb-10 text-black tracking-tight">Gallery</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          {galleryImages.map((src, idx) => (
            <img key={idx} src={src} alt={`Gallery ${idx + 1}`} className="w-80 h-48 object-cover rounded-lg shadow grayscale border border-gray-300" />
          ))}
        </div>
      </div>
    </section>
  );
}
