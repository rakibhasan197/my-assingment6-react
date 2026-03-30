import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 max-w-[80%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden"></div>
          <ul
            tabIndex={-1} // ✅ Fixed: string → number
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <ul className="p-2">
                <li>Products</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>FAQ</li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="text-3xl bg-linear-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent p-4 font-bold">
          DigiTools
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          <li className="font-semibold text-[#474849]">Products</li>
          <li className="font-semibold text-[#474849]">Features</li>
          <li className="font-semibold text-[#474849]">Pricing</li>
          <li className="font-semibold text-[#474849]">Testimonials</li>
          <li className="font-semibold text-[#474849]">FAQ</li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <CiShoppingCart />
        <p className="font-semibold text-[#474849]">Login</p>
        <button className="btn bg-linear-to-r from-purple-600 to-purple-400 rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;