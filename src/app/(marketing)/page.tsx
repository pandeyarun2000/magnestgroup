"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Home, Brain, Sparkles, TrendingUp, Bot, Building2 } from 'lucide-react';
import Image from 'next/image';

const MagnestSplitLanding = () => {
  const [hoveredSide, setHoveredSide] = useState<'realty' | 'ai' | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleRealtyClick = () => {
    window.open('https://realty.magnest.ca', '_blank');
  };

  const handleAIClick = () => {
    window.open('https://ai.magnest.ca', '_blank');
  };

  return (
    <div className="h-screen w-full overflow-hidden relative bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-black/20 z-20"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
          }}
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/hero-background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main Content */}
      <div className="relative z-30 h-full flex">
        {/* Magnest Realty Side - Gold Theme */}
        <div 
          className={`flex-1 relative overflow-hidden transition-all duration-700 ease-out cursor-pointer group ${
            hoveredSide === 'realty' ? 'flex-[1.3]' : hoveredSide === 'ai' ? 'flex-[0.7]' : 'flex-1'
          }`}
          onMouseEnter={() => setHoveredSide('realty')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={handleRealtyClick}
        >
          {/* Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-amber-600/10 to-orange-500/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-yellow-400/30 to-amber-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-r from-amber-500/20 to-yellow-600/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '3s' }} />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => {
              // Use deterministic values based on index for consistent SSR/client rendering
              const left = ((i * 37) % 100);
              const top = ((i * 53) % 100);
              const delay = (i * 0.3) % 4;
              const duration = 2 + ((i * 0.5) % 3);
              
              return (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400/60 rounded-full animate-ping"
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
          <div className="relative h-full flex flex-col justify-center items-center p-12 text-center">
             {/* Logo with glow effect */}
            <div className="relative mb-8 group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gradient-to-r from-yellow-400 to-amber-500 p-6 rounded-full">
                <Image 
                  src="/logo-light.png" 
                  alt="Magnest Realty Logo" 
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>

            {/* Title with text effects */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 group-hover:scale-105 transition-transform duration-500">
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Magnest
              </span>
              <br />
              <span className="text-white font-light">Realty</span>
            </h1>

            <p className="text-xl text-yellow-100/90 mb-8 max-w-sm leading-relaxed group-hover:text-yellow-50 transition-colors">
              Expert real estate guidance for buying, selling, and investing
            </p>

            {/* Enhanced Button */}
            <div className="relative group/btn">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-xl opacity-50 group-hover/btn:opacity-75 transition-opacity" />
              <button className="relative bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold px-8 py-4 rounded-full flex items-center gap-3 transform group-hover/btn:scale-105 transition-all duration-300 shadow-2xl">
                <Home className="w-5 h-5" />
                Explore MAGNEST REALTY
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-8 right-8 opacity-30 group-hover:opacity-60 transition-opacity">
              <TrendingUp className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="absolute bottom-8 left-8 opacity-30 group-hover:opacity-60 transition-opacity">
              <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
            </div>
          </div>

          {/* Side border glow */}
          <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-yellow-400/50 to-transparent group-hover:w-2 transition-all duration-500" />
        </div>

        {/* Center Divider */}
        <div className="w-px bg-gradient-to-b from-transparent via-white/30 to-transparent relative z-40">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>

        {/* AI Magnest Side - Blue Theme */}
        <div 
          className={`flex-1 relative overflow-hidden transition-all duration-700 ease-out cursor-pointer group ${
            hoveredSide === 'ai' ? 'flex-[1.3]' : hoveredSide === 'realty' ? 'flex-[0.7]' : 'flex-1'
          }`}
          onMouseEnter={() => setHoveredSide('ai')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={handleAIClick}
        >
          {/* Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/20 via-cyan-600/10 to-indigo-500/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Animated Background Elements */}
          <div className="absolute top-32 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-16 w-56 h-56 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '4s' }} />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => {
              // Use deterministic values based on index for consistent SSR/client rendering
              const left = ((i * 41) % 100);
              const top = ((i * 67) % 100);
              const delay = (i * 0.4) % 5;
              const duration = 1.5 + ((i * 0.3) % 2.5);
              
              return (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/70 rounded-full animate-ping"
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
          <div className="relative h-full flex flex-col justify-center items-center p-12 text-center">
            {/* Logo with glow effect */}
            <div className="relative mb-8 group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gradient-to-r from-blue-400 to-cyan-500 p-6 rounded-full">
                <Image 
                  src="/logomag.png" 
                  alt="AI Magnest Logo" 
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>

            {/* Title with text effects */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 group-hover:scale-105 transition-transform duration-500">
             <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Magnest
              </span>              
              <br />
              <span className="text-white font-light">AI</span>
            </h1>

            <p className="text-xl text-blue-100/90 mb-8 max-w-sm leading-relaxed group-hover:text-blue-50 transition-colors">
              AI-powered solution for smart asset management
            </p>

            {/* Enhanced Button */}
            <div className="relative group/btn">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-xl opacity-50 group-hover/btn:opacity-75 transition-opacity" />
              <button className="relative bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-3 transform group-hover/btn:scale-105 transition-all duration-300 shadow-2xl">
                <Bot className="w-5 h-5" />
                Explore MAGNEST AI
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-8 left-8 opacity-30 group-hover:opacity-60 transition-opacity">
              <Brain className="w-8 h-8 text-blue-400" />
            </div>
            <div className="absolute bottom-8 right-8 opacity-30 group-hover:opacity-60 transition-opacity">
              <Bot className="w-6 h-6 text-cyan-400 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Side border glow */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent group-hover:w-2 transition-all duration-500" />
        </div>
      </div>

      {/* Top Brand Header */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-white/5 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
          <h2 className="text-white font-light text-lg tracking-wider">
            Choose Your <span className="font-semibold">MAGNEST</span> Experience
          </h2>
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex items-center gap-2 text-white/60 text-sm">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" />
          <span>Click to explore</span>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
    </div>
  );
};

export default MagnestSplitLanding;