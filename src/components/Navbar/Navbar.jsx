import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = ({ carts }) => {
  return (
    <div className="navbar bg-base-100 max-w-[90%] mx-auto">

      {/* LEFT */}
      <div className="navbar-start">

        {/* Mobile menu button */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden">
            ☰
          </div>

          {/* Mobile menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Logo */}
        <a className="text-2xl md:text-3xl bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent p-4 font-bold">
          DigiTools
        </a>
      </div>

      {/* CENTER (desktop only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          <li className="font-semibold text-[#474849]">Products</li>
          <li className="font-semibold text-[#474849]">Features</li>
          <li className="font-semibold text-[#474849]">Pricing</li>
          <li className="font-semibold text-[#474849]">Testimonials</li>
          <li className="font-semibold text-[#474849]">FAQ</li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-4">

        {/* Cart */}
        <div className="relative flex items-center">
          <CiShoppingCart className="text-2xl" />

          {carts.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              {carts.length}
            </span>
          )}
        </div>

        {/* Login (hide mobile) */}
        <p className="hidden md:block font-semibold text-[#474849]">
          Login
        </p>

        {/* Button */}
        <button className="btn bg-gradient-to-r from-purple-600 to-purple-400 rounded-full text-white px-4 md:px-6">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;