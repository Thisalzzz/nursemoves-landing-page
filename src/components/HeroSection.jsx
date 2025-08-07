// src/components/HeroSection.jsx
import React, { useEffect } from 'react';
import logo from '../assets/logo1.jpg';
import hero from '../assets/hero.png';

const HeroSection = () => {
  useEffect(() => {
    const logoElement = document.querySelector('.logo-container');
    if (logoElement) {
      setTimeout(() => {
        logoElement.classList.add('animate-float');
      }, 100);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .logo-glow {
          transition: all 0.7s ease;
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.8), 
                      0 0 50px rgba(59, 130, 246, 0.4);
        }
        .logo-container:hover .logo-glow {
          box-shadow: 0 0 40px rgba(59, 130, 246, 1), 
                      0 0 60px rgba(59, 130, 246, 0.6);
        }
        .button-glow {
          transition: all 0.3s ease;
        }
        .button-glow:hover {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.7);
          transform: translateY(-3px) scale(1.02);
        }
        .text-glow {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
        }
      `}</style>

      {/* Modern Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.7)_100%)]"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 20 + 5;
          const isBlue = Math.random() > 0.5;
          return (
            <div 
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor: isBlue ? 'rgba(59, 130, 246, 0.3)' : 'rgba(255, 255, 255, 0.2)',
                animation: `float ${Math.random() * 6 + 4}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 2}s`,
                filter: 'blur(1px)'
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Bouncing Logo Container */}
          <div className="mb-12 flex justify-center">
            <div className="logo-container bg-white p-1 rounded-full transform transition-all duration-500 hover:scale-105">
              <div className="logo-glow rounded-full p-2">
                <img 
                  src={logo} 
                  alt="NurseMoves Logo" 
                  className="w-40 h-40 object-contain rounded-full border-4 border-white"
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-glow">
            <span className="text-[#ddf508]">NurseMoves</span>: Shift Your Career, Effortlessly
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto bg-black/30 py-4 px-6 rounded-xl backdrop-blur-sm border border-white/10">
            Connect with flexible healthcare opportunities on your terms
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="button-glow bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 flex items-center justify-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Download for Android
            </button>
            <button className="button-glow bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 flex items-center justify-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Download for iOS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
