import React from 'react';
import instagramImg from '../../assets/instagram.png';
import facebookImg from '../../assets/Facebook.png';
import twitterImg from '../../assets/Twitter.png';

const Footer = () => {
  return (
<div className="bg-[#101727]">
   <footer className="footer sm:footer-horizontal text-neutral-content p-10 max-w-[80%] mx-auto  py-20">
  <div>
    <h1 className='text-2xl font-bold text-white'>DigiTools</h1>
    <p className='text-gray-400'>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
  </div>
  <nav>
    <h6 className="footer-title">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
  </nav>
  <nav>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <div className='flex gap-4'>
      <img src={instagramImg} alt="" />
    <img src={facebookImg} alt="" />
    <img src={twitterImg} alt="" />
    </div>
  </nav>
</footer>
</div>
  );
};

export default Footer;