import React from 'react';
import instagramImg from '../../assets/instagram.png';
import facebookImg from '../../assets/Facebook.png';
import twitterImg from '../../assets/Twitter.png';

const Footer = () => {
  return (
    <div className="bg-[#101727] w-full">

      <footer className="footer text-neutral-content px-6 md:px-10 lg:px-20 py-16 md:py-20 max-w-[90%] md:max-w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

        {/* Brand */}
        <div>
          <h1 className='text-2xl font-bold text-white'>DigiTools</h1>
          <p className='text-gray-400 mt-3 text-sm md:text-base'>
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <nav>
          <h6 className="text-white font-semibold mb-3">Product</h6>
          <a className="block text-gray-400 hover:text-white mb-2">Features</a>
          <a className="block text-gray-400 hover:text-white mb-2">Pricing</a>
          <a className="block text-gray-400 hover:text-white mb-2">Templates</a>
          <a className="block text-gray-400 hover:text-white">Integrations</a>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="text-white font-semibold mb-3">Company</h6>
          <a className="block text-gray-400 hover:text-white mb-2">About</a>
          <a className="block text-gray-400 hover:text-white mb-2">Blog</a>
          <a className="block text-gray-400 hover:text-white mb-2">Careers</a>
          <a className="block text-gray-400 hover:text-white">Press</a>
        </nav>

        {/* Resources */}
        <nav>
          <h6 className="text-white font-semibold mb-3">Resources</h6>
          <a className="block text-gray-400 hover:text-white mb-2">Documentation</a>
          <a className="block text-gray-400 hover:text-white mb-2">Help Center</a>
          <a className="block text-gray-400 hover:text-white mb-2">Community</a>
          <a className="block text-gray-400 hover:text-white">Contact</a>
        </nav>

        {/* Social */}
        <nav>
          <h6 className="text-white font-semibold mb-3">Social Links</h6>
          <div className='flex gap-4 mt-2'>
            <img src={instagramImg} alt="" className="w-6 h-6" />
            <img src={facebookImg} alt="" className="w-6 h-6" />
            <img src={twitterImg} alt="" className="w-6 h-6" />
          </div>
        </nav>

      </footer>

    </div>
  );
};

export default Footer;