"use client";
import Image from "next/image";
import React, { useState } from "react";
import image from "../../../public/images/Frame 33 (2).png";
import Link from "next/link";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Group5 from "../../../public/images/Group (5).png";
import Love from "../../../public/images/Vector (6).png";
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setOpenMenu] = useState(false);

  return (
    <nav className="container bg-transparent pt-8 flex justify-between items-center md:mr-auto md:ml-auto">
      <Link href="">
        <Image
          src={image}
          alt=""
          className="md:w-[100px] lg:w-[180px] lg:h-auto xl:w-[267px] xl:h-[36px] "
        />
      </Link>

      <div className="hidden lg:flex space-x-6 items-center md:space-x-3  m-auto">
        <div className="flex items-center  md:gap-1 lg:gap-6 ">
          <Link
            href="#"
            className="text-secondary font-normal 	xl:text-base lg:text-xs loading-lh19"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-secondary font-normal 	xl:text-base lg:text-xs loading-lh19"
          >
            About us
          </Link>
          <Link
            href="#"
            className="text-secondary font-normal 	xl:text-base lg:text-xs loading-lh19"
          >
            services
          </Link>
          <Link
            href="#"
            className="text-secondary font-normal 	xl:text-base lg:text-xs loading-lh19"
          >
            Properties
          </Link>
          <Link
            href="#"
            className="text-secondary font-normal xl:text-base lg:text-xs 	loading-lh19 flex items-center gap-.5"
          >
            Our Partners
            <MdOutlineArrowDropDown className="w-5 h-6 text-hero" />
          </Link>{" "}
          <Link
            href="#"
            className="text-secondary font-normal 	xl:text-base lg:text-xs loading-lh19"
          >
            Contact us
          </Link>
          <Link
            href="#"
            className="text-secondary font-normal text-base	loading-lh19 flex items-center gap-2 border-r border-solid	border-navBorder pr-p17	"
          >
            <Image src={Group5} width={20.6} height={20.6} alt="" />
            <span className="cursor-pointer">Ar</span>
          </Link>
          <Image
            src={Love}
            width={26.05}
            height={24.08}
            alt=""
            className="cursor-pointer"
          />
        </div>

        <div className="relative">
          <Link
            href=""
            className="sm:hidden md:block md:w-[180px] md:h-[35px] lg:w-[210px] lg:h-[48px]"
          >
            <button className="md:px-2 lg:px-2 flex items-center gap-1 px-3 py-3 text-sm  bg-secondary text-primary font-normal ">
              Become an ambassador
              <MdArrowOutward className="h-3 w-3 ml-2" />
            </button>
          </Link>

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
      </div>

      <div className="lg:hidden">
        <button onClick={() => setOpenMenu(!menu)}>
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
        </button>
      </div>

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
