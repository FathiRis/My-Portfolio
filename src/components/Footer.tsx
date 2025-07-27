import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#03045E] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold font-montserrat mb-2">Risna Rimsiyan</h3>
            <p className="text-blue-200 font-opensans">IT Student & Developer</p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-blue-200 font-opensans">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>and</span>
            <Code className="w-4 h-4" />
            <span>by Risna Rimsiyan © 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;