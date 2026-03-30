
import React from 'react';
import bannerImg from '../../assets/banner.png'
import playImg from '../../assets/play.png'



const Banner = () => {
  return (
    <div className="hero  max-w-[80%] mx-auto mt-10">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <img
      src={bannerImg}
      className="max-w-sm rounded-lg shadow-lg"
    />
    <div className='space-y-4'>
      <span className='btn py-1 px-4 rounded-full bg-linear-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent'><div className='p-2 bg-purple-500 rounded-full'></div>New: AI-Powered Tools Available</span>
      <h1 className="text-4xl font-bold">Supercharge Your <br />Digital Workflow</h1>
      <p className="py-6 text-gray-500">
        Access premium AI tools, design assets, templates, and productivity
        software—all in one place. Start creating faster today.

        Explore Products
      </p>
      <div className=' flex gap-2'>
        <button className="btn btn-primary rounded-4xl">Explore Products</button>
        <button className="btn btn-outline rounded-4xl border-purple-500 bg-linear-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"><img src={playImg} alt="" />Watch Demo</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Banner;