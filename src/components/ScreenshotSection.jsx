// src/components/ScreenshotSection.jsx
import React, { useEffect, useRef } from "react";
import pulse from "../assets/pulse.png";
import radio from "../assets/radio.png";
import scrub from "../assets/scrub.png";
import tunes from "../assets/tunes.png";

const ScreenshotSection = () => {
  const containerRef = useRef(null);
  
  const features = [
    {
      img: pulse,
      title: "Social Media for Nurses with Community Chat",
      description:
        "Connect with fellow healthcare professionals in real-time chat rooms designed specifically for nursing communities. Share experiences, get advice, and build your professional network.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      img: radio,
      title: "Nurse Radio",
      description:
        "Curated audio content for healthcare professionals. Listen to medical news, relaxation tracks, and nursing-focused podcasts during your shifts or downtime.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      img: tunes,
      title: "Smart Playlists",
      description:
        "AI-powered music recommendations that adapt to your mood and schedule. Perfect playlists for hectic shifts, relaxing after work, or studying for certifications.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      img: scrub,
      title: "Scrub Reads",
      description:
        "Personalized medical literature recommendations. Stay updated with the latest research and clinical guidelines in an easily digestible format.",
      color: "from-amber-500 to-orange-600",
    },
  ];

  // Scroll animations
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".screenshot-item").forEach((el) => {
        const position = el.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.85) {
          el.classList.add("opacity-100", "translate-y-0");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20 bg-blue-200 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-900 to-blue-600 mb-4 leading-tight">
            Designed for Healthcare Heroes
          </h2>
          <p className="text-blue-400 text-lg md:text-xl max-w-2xl mx-auto">
            Features that understand the unique needs of nursing professionals 
            and help you connect, recharge, and grow.
          </p>
        </div>

        {/* Desktop Feature Grid */}
        <div className="hidden md:block space-y-15">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`screenshot-item transition-all duration-700 opacity-0 translate-y-10 rounded-3xl overflow-hidden`}
            >
              <div className={`bg-gradient-to-r ${feature.color} p-1 rounded-3xl`}>
                <div className="bg-gradient-to-b from-blue-800/30 to-blue-900/50 backdrop-blur-sm rounded-2xl">
                  <div className={`flex flex-col lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Text Area */}
                    <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                      <div className="inline-block bg-blue-800/50 px-4 py-1.5 rounded-full mb-6">
                        <span className="text-cyan-300 font-medium">Feature {index + 1}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-blue-100 mb-6">
                        {feature.description}
                      </p>
                    </div>

                    {/* Image Area */}
                    <div className="lg:w-1/2 relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-2xl"></div>
                      <div className="relative z-10 m-6">
                        <div className="absolute top-4 left-4 flex space-x-2 z-20">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="overflow-hidden rounded-xl border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                          <img
                            src={feature.img}
                            alt={feature.title}
                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div
          className="md:hidden flex overflow-x-auto pb-4 space-x-6 snap-x snap-mandatory hide-scrollbar mt-8"
          ref={containerRef}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="screenshot-item flex-shrink-0 w-[85vw] snap-center transition-all duration-700 opacity-0 translate-y-10"
            >
              <div
                className={`p-1 rounded-3xl bg-gradient-to-r ${feature.color}`}
              >
                <div className="bg-gradient-to-b from-blue-800/30 to-blue-900/50 backdrop-blur-sm rounded-2xl">
                  <div className="relative">
                    <div className="absolute top-4 left-4 flex space-x-2 z-20">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="overflow-hidden rounded-t-2xl">
                      <img
                        src={feature.img}
                        alt={feature.title}
                        className="w-full h-52 object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="inline-block bg-blue-800/50 px-3 py-1 rounded-full mb-4">
                      <span className="text-cyan-300 text-sm">Feature {index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-blue-100 text-sm mb-4">
                      {feature.description}
                    </p>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-2 px-5 rounded-full text-sm w-full">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default ScreenshotSection;