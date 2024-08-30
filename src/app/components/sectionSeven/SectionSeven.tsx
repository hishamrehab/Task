import React from "react";
import { MdWifiCalling2, MdMailOutline, MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import handPresenting from "../../../../public/images/hand-presenting-model-house-home-loan-campaign 1.png";

const SectionSeven = () => {
  return (
    <div className="relative z-5 pt-[184px] mx-auto sm:pt-10">
      <div className="container flex flex-col md:flex-row items-start justify-center gap-8 md:gap-32 h-auto md:h-[827px]">
        <div className="sm:w-full md:w-1/2 flex flex-col mt-16 md:mt-0">
          <h3 className="text-2xl sm:text-xl md:text-3xl font-black mb-8 sm:mb-4 text-primary">
            We'll help you find a place you'll love!
          </h3>

          <div className="flex items-center gap-4 mb-4">
            <MdWifiCalling2 className="w-6 h-6 text-primary" />
            <div className="text-left">
              <p className="text-sm font-normal">Phone Number</p>
              <p className="text-sm font-normal">314-555-0123</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MdMailOutline className="w-6 h-6 text-primary" />
            <div className="text-left">
              <p className="text-sm font-normal">Email Address</p>
              <p className="text-sm font-normal">SIANCHES@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border border-borderColor w-full md:w-[570px] h-auto md:h-[734px] p-4 md:p-12">
          <h3 className="text-2xl font-black mb-4 text-primary">Contact us</h3>
          <p className="text-base font-normal leading-6 text-primary mb-8">
            We will respond as soon as we receive your message.
          </p>

          <label
            htmlFor="name"
            className="block text-base font-normal text-primary mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            className="w-full h-16 bg-gray-100 border border-gray-300 p-3 mb-6 text-sm font-normal outline-none text-gray-700"
            required
          />

          <label
            htmlFor="email"
            className="block text-base font-normal text-primary mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="w-full h-16 bg-gray-100 border border-gray-300 p-3 mb-6 text-sm font-normal outline-none text-gray-700"
            required
          />

          <label
            htmlFor="number"
            className="block text-base font-normal text-primary mb-2"
          >
            Phone Number
          </label>
          <input
            id="number"
            type="number"
            placeholder="Enter your phone number"
            className="w-full h-16 bg-gray-100 border border-gray-300 p-3 mb-6 text-sm font-normal outline-none text-gray-700"
            required
          />

          <label
            htmlFor="message"
            className="block text-base font-normal text-primary mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            className="w-full h-28 bg-gray-100 border border-gray-300 p-3 mb-6 text-sm font-normal outline-none text-gray-700"
            required
          ></textarea>

          <button className="w-full md:w-44 h-14 flex justify-center items-center gap-2 bg-primary text-secondary font-bold text-sm uppercase">
            Send Message
            <MdArrowOutward className="w-4 h-4" />
          </button>
        </div>

        <Image
          className="sm:hidden  md:block md:w-[400px] md:h-[300px] xl:w-[595px] xl:h-[412px] absolute z-0 bottom-0 left-0"
          src={handPresenting}
          width={595}
          height={412}
          alt="Hand presenting a model house"
        />
      </div>
    </div>
  );
};

export default SectionSeven;
