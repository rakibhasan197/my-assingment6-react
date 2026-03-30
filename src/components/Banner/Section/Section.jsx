import React from 'react';

const Section = () => {
  return (
    <div className='border-purple-500 bg-linear-to-r from-purple-600 to-purple-400 mt-20 mb-20'>
      <div className='flex gap-30 py-15 px-20 max-w-[60%] mx-auto'>
        <div>
        <h1 className='text-5xl font-bold text-white'>50K+</h1>
        <p className='text-gray-400'>Active Users</p>
      </div>
      <div>
        <h1 className='text-5xl font-bold text-white'>200+</h1>
        <p className='text-gray-400'>Premium Tools</p>
      </div>
      <div>
        <h1 className='text-5xl font-bold text-white'>4.9</h1>
        <p className='text-gray-400'>Rating</p>
      </div>
      </div>
    </div>
  );
};

export default Section;