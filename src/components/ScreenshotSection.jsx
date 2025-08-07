// src/components/ScreenshotSection.jsx
import React, { useEffect, useRef } from 'react';
import pulse from "../assets/pulse.png";
import radio from "../assets/radio.png";
import scrub from "../assets/scrub.png";
import tunes from "../assets/tunes.png";

const ScreenshotSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.screenshot-item');
      elements.forEach(el => {
        const position = el.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.8) {
          el.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Feature data with descriptions
  const features = [
    {
      img: pulse,
      title: "Social Media for Nurses with community chat",
      description: "Real-time monitoring with beautiful visualizations that help you understand your data at a glance.",
      color: "bg-gradient-to-r from-indigo-500 to-purple-600"
    },
    {
      img: radio,
      title: "Nurse Radio",
      description: "Intuitive controls to fine-tune your audio experience with precision waveform manipulation.",
      color: "bg-gradient-to-r from-cyan-500 to-blue-600"
    },
    {
      img: tunes,
      title: "Smart Playlists",
      description: "Music recommendations that adapt to your listening habits and preferences.",
      color: "bg-gradient-to-r from-emerald-500 to-teal-600"
    },
    {
      img: scrub,
      title: "Scrub Reads",
      description: "Effortlessly navigate through content with our precision timeline control.",
      color: "bg-gradient-to-r from-amber-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Simple. Intuitive. Powerful.
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Experience the future of media interaction with our cutting-edge features designed for both creators and consumers.
          </p>
        </div>
        
        {/* Desktop layout - grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`screenshot-item p-6 rounded-3xl backdrop-blur-lg bg-gray-800/30 border border-gray-700 transition-all duration-700 opacity-0 translate-y-10 ${feature.color}`}
            >
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-300">
                <div className="relative">
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <img 
                    src={feature.img} 
                    alt={feature.title}
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile layout - horizontal scroll */}
        <div className="md:hidden flex overflow-x-auto pb-8 space-x-6 snap-x snap-mandatory hide-scrollbar" ref={containerRef}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="screenshot-item flex-shrink-0 w-[85vw] snap-center transition-all duration-700 opacity-0 translate-y-10"
            >
              <div className={`p-5 rounded-3xl backdrop-blur-lg bg-gray-800/30 border border-gray-700 ${feature.color}`}>
                <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative">
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <img 
                      src={feature.img} 
                      alt={feature.title}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Glowing decoration elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default ScreenshotSection;