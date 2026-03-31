import React from 'react';

const Section = () => {
  return (
    <div className='bg-gradient-to-r from-purple-600 to-purple-400 mt-20 mb-20'>
      
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 py-15 px-6 md:px-20 max-w-[90%] md:max-w-[60%] mx-auto text-center'>
        
        <div>
          <h1 className='text-3xl md:text-5xl font-bold text-white'>50K+</h1>
          <p className='text-gray-400'>Active Users</p>
        </div>

        <div>
          <h1 className='text-3xl md:text-5xl font-bold text-white'>200+</h1>
          <p className='text-gray-400'>Premium Tools</p>
        </div>

        <div>
          <h1 className='text-3xl md:text-5xl font-bold text-white'>4.9</h1>
          <p className='text-gray-400'>Rating</p>
        </div>

      </div>

    </div>
  );
};

export default Section;