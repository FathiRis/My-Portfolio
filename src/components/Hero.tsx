import React from 'react';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-[#03045E] mb-4 font-montserrat">
            Risna Rimsiyan
          </h1>
          <p className="text-2xl md:text-3xl text-[#0077B6] font-medium mb-6 font-montserrat">
            Passionate IT Student & Developer
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-opensans">
            Motivated IT student with expertise in building practical solutions using Java, Python, and PHP. 
            Thrive in collaborative environments with strong problem-solving skills.
          </p>
        </div>
        
        <div className="flex justify-center items-center space-x-6 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100">
          <a href="tel:+1234567890" className="flex items-center justify-center w-12 h-12 bg-[#0077B6] text-white rounded-full hover:bg-[#023e8a] transition-colors duration-300">
            <Phone size={20} />
          </a>
          <a href="mailto:risna@example.com" className="flex items-center justify-center w-12 h-12 bg-[#0077B6] text-white rounded-full hover:bg-[#023e8a] transition-colors duration-300">
            <Mail size={20} />
          </a>
          <a href="https://linkedin.com" className="flex items-center justify-center w-12 h-12 bg-[#0077B6] text-white rounded-full hover:bg-[#023e8a] transition-colors duration-300">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com" className="flex items-center justify-center w-12 h-12 bg-[#0077B6] text-white rounded-full hover:bg-[#023e8a] transition-colors duration-300">
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;