"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent lg:bg-transparent p-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">Logo</div>

        {/* Links and Button */}
        <div className="hidden lg:flex space-x-6 items-center">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Services
          </a>

          {/* Dropdown Menu */}
          <div className="relative">
            <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
              More
            </button>
            {isOpen && (
              <div className="absolute top-full mt-2 w-32 bg-white text-black rounded-md shadow-lg">
                <a href="#" className="block px-4 py-2">
                  Option 1
                </a>
                <a href="#" className="block px-4 py-2">
                  Option 2
                </a>
                <a href="#" className="block px-4 py-2">
                  Option 3
                </a>
              </div>
            )}
          </div>

          {/* White Button */}
          <button className="bg-white text-black px-4 py-2 rounded-md">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <a href="#" className="block text-white px-4 py-2">
            Home
          </a>
          <a href="#" className="block text-white px-4 py-2">
            About
          </a>
          <a href="#" className="block text-white px-4 py-2">
            Services
          </a>
          <a href="#" className="block text-white px-4 py-2">
            More
          </a>
          <button className="bg-white text-black w-full px-4 py-2 mt-2 rounded-md">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
