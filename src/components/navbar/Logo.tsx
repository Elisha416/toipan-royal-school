import React from 'react';

interface LogoProps {
  isScrolled: boolean;
}

const Logo = ({ isScrolled }: LogoProps) => {
  return (
    <a href="/" className="flex items-center group">
      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-royal-600 to-royal-700 flex items-center justify-center mr-3 shadow-lg transition-transform duration-300 group-hover:scale-105 overflow-hidden">
        <img 
          src="/Toipan00.jpg" 
          alt="Logo" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="transform transition-all duration-300">
        <h1 className={`font-playfair font-bold tracking-wide ${
          isScrolled ? 'text-primary text-lg' : 'text-white text-xl'
        }`}>TOIPAN ROYAL</h1>
        <h1 className={`font-playfair font-bold tracking-wide ${
          isScrolled ? 'text-primary text-lg' : 'text-white text-xl'
        }`}>SCHOOL</h1>
      </div>
    </a>
  );
};

export default Logo;