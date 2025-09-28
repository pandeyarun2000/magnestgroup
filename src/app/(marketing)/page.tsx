"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Home, Brain, Sparkles, TrendingUp, Bot, Building2 } from 'lucide-react';

const MagnestSplitLanding = () => {
  const [hoveredSide, setHoveredSide] = useState<'realty' | 'ai' | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleRealtyClick = () => {
    window.open('https://realty.magnest.ca', '_blank');
  };

  const handleAIClick = () => {
    window.open('https://ai.magnest.ca', '_blank');
  };

  return (
    <div className="h-screen w-full overflow-hidden relative bg-black">
      {/* Video Background - Hidden on mobile for performance */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-black/20 z-20 hidden md:block"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
          }}
        />
        {/* Static gradient background for mobile */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-amber-900/30 md:hidden z-20" />
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover hidden md:block"
        >
          <source src="/assets/hero-background.mp4" type="video/mp4" />
        </video>
        
        {/* Mobile background pattern */}
        <div className="md:hidden absolute inset-0 bg-black">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-br from-yellow-500/20 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-tl from-blue-500/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`relative z-30 h-full ${isMobile ? 'flex flex-col' : 'flex h-full'}`}>
        {/* Top Brand Header - Hidden on mobile */}
        <div className="absolute top-4 md:top-8 left-1/2 transform -translate-x-1/2 z-40 hidden md:block">
          <div className="bg-white/5 backdrop-blur-md rounded-full px-4 py-2 md:px-6 md:py-3 border border-white/10">
            <h2 className="text-white font-light text-sm md:text-lg tracking-wider">
              Choose Your <span className="font-semibold">MAGNEST</span> Experience
            </h2>
          </div>
        </div>

        {/* Magnest Realty Side - Gold Theme */}
        <div 
          className={`${
            isMobile 
              ? 'flex-1 min-h-[50vh]' 
              : `flex-1 transition-all duration-700 ease-out ${
                  hoveredSide === 'realty' ? 'flex-[1.3]' : hoveredSide === 'ai' ? 'flex-[0.7]' : 'flex-1'
                }`
          } relative overflow-hidden cursor-pointer group`}
          onMouseEnter={() => !isMobile && setHoveredSide('realty')}
          onMouseLeave={() => !isMobile && setHoveredSide(null)}
          onClick={handleRealtyClick}
        >
          {/* Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-amber-600/10 to-orange-500/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Animated Background Elements - Reduced on mobile */}
          <div className={`absolute bg-gradient-to-r from-yellow-400/30 to-amber-500/30 rounded-full blur-3xl animate-pulse ${
            isMobile ? 'top-10 left-10 w-20 h-20' : 'top-20 left-20 w-32 h-32'
          }`} />
          <div className={`absolute bg-gradient-to-r from-amber-500/20 to-yellow-600/20 rounded-full blur-3xl animate-bounce ${
            isMobile ? 'bottom-16 right-8 w-28 h-28' : 'bottom-32 right-16 w-48 h-48'
          }`} style={{ animationDuration: '3s' }} />
          
          {/* Floating Particles - Fewer on mobile */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(isMobile ? 6 : 12)].map((_, i) => {
              const left = ((i * 37) % 100);
              const top = ((i * 53) % 100);
              const delay = (i * 0.3) % 4;
              const duration = 2 + ((i * 0.5) % 3);
              
              return (
                <div
                  key={i}
                  className={`absolute bg-yellow-400/60 rounded-full animate-ping ${
                    isMobile ? 'w-1 h-1' : 'w-2 h-2'
                  }`}
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`
                  }}
                />
              );
            })}
          </div>

          {/* Content */}
          <div className={`relative h-full flex flex-col justify-center items-center text-center ${
            isMobile ? 'p-6' : 'p-12'
          }`}>
            {/* Logo with glow effect */}
            <div className={`relative group-hover:scale-110 transition-transform duration-500 ${
              isMobile ? 'mb-4' : 'mb-8'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className={`relative bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full ${
                isMobile ? 'p-4' : 'p-6'
              }`}>
                <img 
                  src="/logo-light.png" 
                  alt="Magnest Realty Logo" 
                  className={`${isMobile ? 'w-8 h-8' : 'w-16 h-16'} object-contain`}
                />
              </div>
            </div>

            {/* Title with text effects */}
            <h1 className={`font-bold group-hover:scale-105 transition-transform duration-500 ${
              isMobile ? 'text-3xl mb-2' : 'text-5xl lg:text-6xl mb-4'
            }`}>
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Magnest
              </span>
              <br />
              <span className="text-white font-light">Realty</span>
            </h1>

            <p className={`text-yellow-100/90 group-hover:text-yellow-50 transition-colors leading-relaxed ${
              isMobile ? 'text-base mb-6 max-w-xs px-2' : 'text-xl mb-8 max-w-sm'
            }`}>
              Expert real estate guidance for buying, selling, and investing
            </p>

            {/* Enhanced Button */}
            <div className="relative group/btn">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-xl opacity-50 group-hover/btn:opacity-75 transition-opacity" />
              <button className={`relative bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold rounded-full flex items-center gap-3 transform group-hover/btn:scale-105 transition-all duration-300 shadow-2xl ${
                isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4'
              }`}>
                <Home className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                <span className={isMobile ? 'hidden' : 'inline'}>Explore </span>MAGNEST REALTY
                <ArrowRight className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} group-hover/btn:translate-x-1 transition-transform`} />
              </button>
            </div>

            {/* Decorative elements - Smaller on mobile */}
            <div className={`absolute opacity-30 group-hover:opacity-60 transition-opacity ${
              isMobile ? 'top-4 right-4' : 'top-8 right-8'
            }`}>
              <TrendingUp className={`${isMobile ? 'w-5 h-5' : 'w-8 h-8'} text-yellow-400`} />
            </div>
            <div className={`absolute opacity-30 group-hover:opacity-60 transition-opacity ${
              isMobile ? 'bottom-4 left-4' : 'bottom-8 left-8'
            }`}>
              <Sparkles className={`${isMobile ? 'w-4 h-4' : 'w-6 h-6'} text-amber-400 animate-pulse`} />
            </div>
          </div>

          {/* Side border glow */}
          <div className={`absolute ${isMobile ? 'bottom-0 left-0 w-full h-1' : 'right-0 top-0 h-full w-1'} bg-gradient-to-${isMobile ? 'r' : 'b'} from-transparent via-yellow-400/50 to-transparent group-hover:${isMobile ? 'h-2' : 'w-2'} transition-all duration-500`} />
        </div>

        {/* Center Divider */}
        <div className={`${isMobile ? 'h-px w-full' : 'w-px h-full'} bg-gradient-to-${isMobile ? 'r' : 'b'} from-transparent via-white/30 to-transparent relative z-40`}>
          <div className={`absolute ${isMobile ? 'top-1/2 left-1/2' : 'top-1/2 left-1/2'} transform -translate-x-1/2 -translate-y-1/2 ${
            isMobile ? 'w-8 h-8' : 'w-12 h-12'
          } bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center`}>
            <div className={`${isMobile ? 'w-1 h-1' : 'w-2 h-2'} bg-white rounded-full animate-pulse`} />
          </div>
        </div>

        {/* AI Magnest Side - Blue Theme */}
        <div 
          className={`${
            isMobile 
              ? 'flex-1 min-h-[50vh]' 
              : `flex-1 transition-all duration-700 ease-out ${
                  hoveredSide === 'ai' ? 'flex-[1.3]' : hoveredSide === 'realty' ? 'flex-[0.7]' : 'flex-1'
                }`
          } relative overflow-hidden cursor-pointer group`}
          onMouseEnter={() => !isMobile && setHoveredSide('ai')}
          onMouseLeave={() => !isMobile && setHoveredSide(null)}
          onClick={handleAIClick}
        >
          {/* Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/20 via-cyan-600/10 to-indigo-500/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Animated Background Elements */}
          <div className={`absolute bg-gradient-to-r from-blue-400/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse ${
            isMobile ? 'top-16 right-10 w-24 h-24' : 'top-32 right-20 w-40 h-40'
          }`} style={{ animationDelay: '1s' }} />
          <div className={`absolute bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-bounce ${
            isMobile ? 'bottom-10 left-8 w-32 h-32' : 'bottom-20 left-16 w-56 h-56'
          }`} style={{ animationDuration: '4s' }} />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(isMobile ? 8 : 15)].map((_, i) => {
              const left = ((i * 41) % 100);
              const top = ((i * 67) % 100);
              const delay = (i * 0.4) % 5;
              const duration = 1.5 + ((i * 0.3) % 2.5);
              
              return (
                <div
                  key={i}
                  className={`absolute bg-blue-400/70 rounded-full animate-ping ${
                    isMobile ? 'w-1 h-1' : 'w-1 h-1'
                  }`}
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`
                  }}
                />
              );
            })}
          </div>

          {/* Content */}
          <div className={`relative h-full flex flex-col justify-center items-center text-center ${
            isMobile ? 'p-6' : 'p-12'
          }`}>
            {/* Logo with glow effect */}
            <div className={`relative group-hover:scale-110 transition-transform duration-500 ${
              isMobile ? 'mb-4' : 'mb-8'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className={`relative bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full ${
                isMobile ? 'p-4' : 'p-6'
              }`}>
                <img 
                  src="/logomag.png" 
                  alt="AI Magnest Logo" 
                  className={`${isMobile ? 'w-8 h-8' : 'w-16 h-16'} object-contain`}
                />
              </div>
            </div>

            {/* Title with text effects */}
            <h1 className={`font-bold group-hover:scale-105 transition-transform duration-500 ${
              isMobile ? 'text-3xl mb-2' : 'text-5xl lg:text-6xl mb-4'
            }`}>
             <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Magnest
              </span>              
              <br />
              <span className="text-white font-light">AI</span>
            </h1>

            <p className={`text-blue-100/90 group-hover:text-blue-50 transition-colors leading-relaxed ${
              isMobile ? 'text-base mb-6 max-w-xs px-2' : 'text-xl mb-8 max-w-sm'
            }`}>
              AI-powered solution for smart asset management
            </p>

            {/* Enhanced Button */}
            <div className="relative group/btn">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-xl opacity-50 group-hover/btn:opacity-75 transition-opacity" />
              <button className={`relative bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-semibold rounded-full flex items-center gap-3 transform group-hover/btn:scale-105 transition-all duration-300 shadow-2xl ${
                isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4'
              }`}>
                <Bot className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                <span className={isMobile ? 'hidden' : 'inline'}>Explore </span>MAGNEST AI
                <ArrowRight className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} group-hover/btn:translate-x-1 transition-transform`} />
              </button>
            </div>

            {/* Decorative elements */}
            <div className={`absolute opacity-30 group-hover:opacity-60 transition-opacity ${
              isMobile ? 'top-4 left-4' : 'top-8 left-8'
            }`}>
              <Brain className={`${isMobile ? 'w-5 h-5' : 'w-8 h-8'} text-blue-400`} />
            </div>
            <div className={`absolute opacity-30 group-hover:opacity-60 transition-opacity ${
              isMobile ? 'bottom-4 right-4' : 'bottom-8 right-8'
            }`}>
              <Bot className={`${isMobile ? 'w-4 h-4' : 'w-6 h-6'} text-cyan-400 animate-pulse`} style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Side border glow */}
          <div className={`absolute ${isMobile ? 'top-0 left-0 w-full h-1' : 'left-0 top-0 h-full w-1'} bg-gradient-to-${isMobile ? 'r' : 'b'} from-transparent via-blue-400/50 to-transparent group-hover:${isMobile ? 'h-2' : 'w-2'} transition-all duration-500`} />
        </div>
      </div>

      {/* Bottom Hint */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 z-40 ${
        isMobile ? 'bottom-4' : 'bottom-8'
      }`}>
        <div className="flex items-center gap-2 text-white/60 text-sm">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" />
          <span className={isMobile ? 'text-xs' : 'text-sm'}>Tap to explore</span>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
    </div>
  );
};

export default MagnestSplitLanding;