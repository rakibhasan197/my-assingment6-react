import React from 'react';

const PricingCard = () => {
  return (
    <div className='px-4 md:px-10 lg:px-0 space-y-6'>

      <h1 className='text-2xl md:text-3xl font-bold text-center'>
        Simple, Transparent Pricing
      </h1>

      <p className='text-gray-400 text-center text-sm md:text-base'>
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                      gap-6 md:gap-8 lg:gap-10 
                      max-w-6xl mx-auto mb-20 mt-10">

        {/* Card 1 */}
        <div className="p-6 shadow-md rounded-md bg-white">
          <h2 className="text-xl font-bold">Starter</h2>
          <p className='text-gray-400 text-sm'>Perfect for getting started</p>

          <p className='mt-3'>
            <span className='text-3xl font-bold'>$0</span>
            <span className='text-gray-400'>/month</span>
          </p>

          <ul className="mt-6 flex flex-col gap-2 text-sm">
            <li className="text-gray-500">✔ Access to 10 free tools</li>
            <li className="text-gray-500">✔ Basic templates</li>
            <li className="text-gray-500">✔ Community support</li>
            <li className="text-gray-500">✔ 1 project per month</li>
          </ul>

          <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 py-2 px-6 rounded-full text-white">
            Get Started Free
          </button>
        </div>

        {/* Card 2 (Featured) */}
        <div className="p-6 shadow-md rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white">

          <h2 className="text-xl font-bold">Pro</h2>
          <p className='text-sm text-gray-200'>Best for professionals</p>

          <p className='mt-3'>
            <span className='text-3xl font-bold'>$29</span>
            <span className='text-gray-200'>/month</span>
          </p>

          <ul className="mt-6 flex flex-col gap-2 text-sm">
            <li>✔ Access to all premium tools</li>
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
            <li>✔ Cloud sync</li>
            <li>✔ Advanced analytics</li>
            <li>✔ Unlimited projects</li>
          </ul>

          <button className="mt-6 w-full bg-white text-purple-600 py-2 px-6 rounded-full font-semibold">
            Start Pro Trial
          </button>
        </div>

        {/* Card 3 */}
        <div className="p-6 shadow-md rounded-md bg-white">

          <h2 className="text-xl font-bold">Business</h2>
          <p className='text-gray-400 text-sm'>For growing teams</p>

          <p className='mt-3'>
            <span className='text-3xl font-bold'>$99</span>
            <span className='text-gray-400'>/month</span>
          </p>

          <ul className="mt-6 flex flex-col gap-2 text-sm">
            <li className="text-gray-500">✔ Everything in Pro</li>
            <li className="text-gray-500">✔ Team collaboration</li>
            <li className="text-gray-500">✔ Custom integrations</li>
            <li className="text-gray-500">✔ Dedicated support</li>
            <li className="text-gray-500">✔ SLA guarantee</li>
            <li className="text-gray-500">✔ Custom branding</li>
          </ul>

          <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 py-2 px-6 rounded-full text-white">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default PricingCard;