import React, { useState, useEffect } from "react";

// FULL TIN IMAGE SET
const images = [
  "/assets/images/chamomile-tin.jpg",
  "/assets/images/cocoa-dream-tin.jpg",
  "/assets/images/jasmine-wisper-tin.jpg",
  "/assets/images/lavender-tin.jpg",
  "/assets/images/vanila-honey-tin.jpg"
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // switches every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto h-72 overflow-hidden rounded-3xl shadow-xl">
      <img
        src={images[index]}
        alt="SnugBrew Tin"
        className="w-full h-full object-cover transition-all duration-700 opacity-95"
      />
    </div>
  );
}
