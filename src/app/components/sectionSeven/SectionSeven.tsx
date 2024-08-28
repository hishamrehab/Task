import React from "react";
import styles from "./sectionSeven.module.css";
import { MdWifiCalling2, MdMailOutline } from "react-icons/md";

import Image from "next/image";
import handPresenting from "../../../../public/images/hand-presenting-model-house-home-loan-campaign 1.png";
import { MdArrowOutward } from "react-icons/md";

const SectionSeven = () => {
  return (
    <div className="relative z-5">
      <div
        className={`container  flex items-start justify-between gap-32 
                ${styles.sectionSeven}`}
      >
        <div
          className={`flex flex-col flex-start mt-16 ${styles.sectionSevenLeft}`}
        >
          <h3 className="text-3xl block font-black mb-14 text-primary">
            We'll help you find a place you'll love!
          </h3>

          <div className="flex items-center gap-4">
            <MdWifiCalling2 className="w-6	h-6 text-primary" />
            <div className="text-left">
              <p className="mb-2 text-sm font-normal">Phone Number</p>
              <p className="mb-2 text-sm font-normal">314-555-0123</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MdMailOutline className="w-6 h-6 text-primary" />
            <div className="text-left">
              <p className="mb-2 text-sm font-normal">Email Address</p>
              <p className="mb-2 text-sm font-normal">SIANCHES@gmail.com </p>
            </div>
          </div>
        </div>

        <div
          className={` border border-borderColor ${styles.sectionSevenRight}`}
        >
          <div className="section-seven-right-content text-left p-12">
            <h3 className="text-2xl font-black mb-1 text-primary">
              Contact us
            </h3>

            <p className="text-base	font-normal leading-6 text-primary mb-8">
              We will respond as soon as we receive your message.
            </p>

            <label
              htmlFor="name"
              className="block text-base font-normal text-primary "
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className={`${styles.input}  pt-6 pb-6 pl-6 mb-6 text-sm font-normal outline-0 text-inputColor`}
              required
            />

            <label
              htmlFor="email"
              className="text-base font-normal text-primary"
            >
              Email Address
            </label>
            <input
              className={`${styles.input}  pt-6 pb-6 pl-6 mb-6 text-sm font-normal outline-0 text-inputColor`}
              placeholder="Enter your email address"
              required
              type="email"
              name=""
              id="email"
            />

            <label
              htmlFor="number"
              className="text-base font-normal text-primary"
            >
              Phone Number
            </label>
            <input
              className={`${styles.input}  pt-6 pb-6 pl-6 mb-6 text-sm font-normal outline-0 text-inputColor`}
              placeholder="Enter your phone number"
              required
              type="number"
              name=""
              id="number"
            />

            <label
              htmlFor="number"
              className="block text-base font-normal text-primary"
            >
              Message
            </label>

            <textarea
              required
              name=""
              id="message"
              placeholder="Enter your message"
              className={`${styles.textarea}  pt-6 pb-6 pl-6 mb-6 text-sm font-normal outline-0 text-inputColor`}
            ></textarea>

            <div className="flex justify-between">
              <span></span>
              <button className="w-44	h-14 flex justify-center items-center gap-1 bg-primary float-left">
                <span className="font-sans font-bold text-sm text-secondary uppercase ">
                  Send Message
                </span>
                <MdArrowOutward className="text-secondary w-2.5	 h-2.5" />
              </button>
            </div>
          </div>
        </div>
        <Image
          className="absolute z-0 bottom-0 left-0"
          src={handPresenting}
          width={595}
          height={412}
          alt=""
        />
      </div>
    </div>
  );
};

export default SectionSeven;
