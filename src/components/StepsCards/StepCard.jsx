import React from 'react';
import stepImg from '../../assets/user.png';

const StepCard = () => {
  return (
    <div className='my-20'>

      {/* Heading */}
      <div className='text-center px-4'>
        <h1 className='text-3xl md:text-5xl font-bold'>
          Get Started in 3 Steps
        </h1>
        <p className='text-gray-400 mt-2 text-sm md:text-base'>
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90%] md:max-w-[80%] mx-auto p-4 md:p-8'>

        {/* Card 1 */}
        <div className='p-6 text-center shadow-md rounded-md space-y-4 relative'>

          <span className='absolute top-4 right-4 px-3 py-1 text-sm bg-gradient-to-r from-purple-600 to-purple-400 rounded-full text-white'>
            01
          </span>

          <img className='mx-auto' src={stepImg} alt="" />

          <h3 className='text-xl font-semibold'>Create Account</h3>

          <p className='text-gray-400'>
            Sign up for free in seconds. No credit card required to get started.
          </p>

        </div>

        {/* Card 2 */}
        <div className='p-6 text-center shadow-md rounded-md space-y-4 relative'>

          <span className='absolute top-4 right-4 px-3 py-1 text-sm bg-gradient-to-r from-purple-600 to-purple-400 rounded-full text-white'>
            02
          </span>

          <img className='mx-auto' src={stepImg} alt="" />

          <h3 className='text-xl font-semibold'>Choose Tool</h3>

          <p className='text-gray-400'>
            Pick from our collection of premium digital tools easily.
          </p>

        </div>

        {/* Card 3 */}
        <div className='p-6 text-center shadow-md rounded-md space-y-4 relative'>

          <span className='absolute top-4 right-4 px-3 py-1 text-sm bg-gradient-to-r from-purple-600 to-purple-400 rounded-full text-white'>
            03
          </span>

          <img className='mx-auto' src={stepImg} alt="" />

          <h3 className='text-xl font-semibold'>Start Using</h3>

          <p className='text-gray-400'>
            Start using tools instantly and boost your productivity.
          </p>

        </div>

      </div>

    </div>
  );
};

export default StepCard;