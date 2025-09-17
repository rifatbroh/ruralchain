import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image:
      // "https://i.pinimg.com/736x/4a/7c/d5/4a7cd5d569fb0fb7798944b028b752f9.jpg",
      "https://i.pinimg.com/1200x/33/d1/8a/33d18afb120687dbc47ca5c13710d33b.jpg",
    title: "Your Health, Your Control",
    desc: "Secure and offline-first health memory system for everyone.",
    btn: "Get Started",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/1200x/43/bf/cc/43bfcc17f25e22631610ec2972a84b1c.jpg",
    title: "AI-Powered Care",
    desc: "Smart health insights with AI assistance anytime, anywhere.",
    btn: "Learn More",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/1200x/0d/d9/fc/0dd9fc526120e130691bca5618d4c85b.jpg",
    title: "For Rural & Remote Areas",
    desc: "Access healthcare records without internet interruptions.",
    btn: "Join Us",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity  duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out transform scale-100 hover:scale-110"
          />
          {/* Overlay with a subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/30"></div>

          {/* Text Content */}
          <div
            className={`absolute inset-0 flex flex-col justify-center items-start px-12 md:px-24 text-white transition-opacity duration-1000 ease-in-out ${
              index === current
                ? "opacity-100 animate-slide-in-up"
                : "opacity-0"
            }`}
          >
            <h1 className="text-4xl md:ml-12 md:text-6xl font-extrabold drop-shadow-lg transition-transform duration-700 delay-300">
              {slide.title}
            </h1>
            <p className="mt-4 md:ml-12 text-lg md:text-xl max-w-xl drop-shadow-md transition-transform duration-700 delay-500">
              {slide.desc}
            </p>
            <button className="mt-6 md:ml-12 px-8 py-4 bg-emerald-400 text-slate-900 rounded-full shadow-xl font-bold transition transform hover:scale-105 hover:bg-emerald-500 duration-700 delay-700">
              {slide.btn}
            </button>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 transform ${
              current === index
                ? "bg-emerald-400 scale-125"
                : "bg-white/50 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
