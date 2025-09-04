import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606206873764-fd15e242df52?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=1525&auto=format&fit=crop"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: false
  };

  return (
    <section className="bg-black text-white w-full">
      <div className="relative w-full">
        {/* Full-width Slider */}
        <Slider {...settings}>
          {images.map((src, idx) => (
            <div key={idx} className="w-full">
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-[90vh] object-cover"
              />
            </div>
          ))}
        </Slider>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Biotechnology Lab
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Advancing science through innovation, collaboration, and discovery.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
