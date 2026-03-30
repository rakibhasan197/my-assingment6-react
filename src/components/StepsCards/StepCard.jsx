import React from 'react';
import stepImg from '../../assets/user.png'

const StepCard = () => {
  return (
    <div className='mb-20'>
     <div className='text-center'>
      
       <h1 className='text-5xl font-bold'>Get Started in 3 Steps</h1>
      <p className='text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
     </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[80%] mx-auto p-8'>
        <div className='p-6 text-center items-center justify-center shadow-md rounded-md space-y-4 relative'>
          <span className='ml-55 mb-5 p-2 bg-linear-to-r from-purple-600 to-purple-400 rounded-full text-white'>01</span>
          <img className='mx-auto' src={stepImg} alt="" />
          <h3 className='text-xl font-semibold'>Create Account</h3>
          <p className='text-gray-400 mb-10'>Sign up for free in seconds. No credit card required to get started.</p>
        </div>
        <div className='p-6 text-center items-center justify-center shadow-md rounded-md space-y-4'>
           <span className='ml-55 mb-5 p-2 bg-linear-to-r from-purple-600 to-purple-400 rounded-full text-white'>02</span>
          <img className='mx-auto' src={stepImg} alt="" />
          <h3 className='text-xl font-semibold'>Create Account</h3>
          <p className='text-gray-400 mb-10'>Sign up for free in seconds. No credit card required to get started.</p>
        </div>
        <div className='p-6 text-center items-center justify-center shadow-md rounded-md space-y-4'>
           <span className='ml-55 mb-5 p-2 bg-linear-to-r from-purple-600 to-purple-400 rounded-full text-white'>03</span>
          <img className='mx-auto' src={stepImg} alt="" />
          <h3 className='text-xl font-semibold'>Create Account</h3>
          <p className='text-gray-400 mb-10'>Sign up for free in seconds. No credit card required to get started.</p>
        </div>
       
        
      </div>
    </div>
  );
};

export default StepCard;