import { useEffect, useState } from "react";

import img1 from "../assets/hero.jpeg";
import img2 from "../assets/gwengtar-dp.jpg";
import img3 from "../assets/img2.jpeg";

const slides = [
  {
    image: img1,
    title: "Infinite Innovations",
    subtitle: "Getting It Right First Time, Every Time",
  },
  {
    image: img2,
    title: "Powering Reliable Infrastructure",
    subtitle: "Efficiency, Stability, and Performance",
  },
  {
    image: img3,
    title: "Engineering the Future",
    subtitle: "Smart Solutions for Modern Systems",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay for readability */}
          <div className=""></div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 text-white">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-lg sm:text-2xl font-medium drop-shadow-md">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}