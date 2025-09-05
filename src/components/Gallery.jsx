import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get("http://localhost:8001/api/v1/users/gallery/");
        setGalleryImages(res.data.data || []); // assuming { success, data: [...] }
      } catch (err) {
        console.error("Failed to fetch gallery", err);
      }
    };
    fetchGallery();
  }, []);

  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-extrabold mb-10 text-black tracking-tight">
          Gallery
        </h3>

        <div className="flex justify-center gap-6 flex-wrap">
          {galleryImages.length > 0 ? (
            galleryImages.map((item, idx) => (
              <img
                key={idx}
                src={item.imageUrl} // backend returns { title, imageUrl }
                alt={item.title || `Gallery ${idx + 1}`}
                className="w-80 h-48 object-cover rounded-lg shadow grayscale border border-gray-300"
              />
            ))
          ) : (
            <p className="text-gray-500">No images available</p>
          )}
        </div>
      </div>
    </section>
  );
}
