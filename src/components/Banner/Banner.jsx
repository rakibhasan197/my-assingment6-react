import React from 'react';
import bannerImg from '../../assets/banner.png';
import playImg from '../../assets/play.png';

const Banner = () => {
  return (
    <div className="hero max-w-[90%] md:max-w-[80%] mx-auto mt-6 md:mt-10">
      
      <div className="hero-content flex-col md:flex-row-reverse gap-8 md:gap-12">
        
        {/* Image */}
        <img
          src={bannerImg}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-lg"
        />

        {/* Text */}
        <div className="space-y-4 text-center md:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-purple-400">
            <div className="p-1 bg-purple-500 rounded-full"></div>
            <span className="text-sm bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Supercharge Your <br className="hidden sm:block" /> Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-sm sm:text-base md:text-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3">
            
            <button className="btn btn-primary rounded-full px-6">
              Explore Products
            </button>

            <button className="btn btn-outline border-purple-500 flex items-center justify-center gap-2 rounded-full px-6">
              <img src={playImg} alt="" className="w-4 h-4" />
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                Watch Demo
              </span>
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;