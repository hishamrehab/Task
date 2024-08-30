import React from "react";
import styles from "./property.module.css";
import { MdArrowOutward } from "react-icons/md";
import Modern from "../../../../public/images/modern-residential-district-with-green-roof-balcony-generated-by-ai 1.png";
import Image from "next/image";

const Property = () => {
  return (
    <div
      className={`sm:pt-[80px] sm:text-center justify-center  md:pb-[80px] container flex items-center gap-9 bg-backgroundSecondary  ${styles.section}`}
    >
      <div className={`flex items-center flex-wrap ${styles.leftSection}`}>
        <h2 className="font-black text-3xl leading-10 text-black">
          Sell Your Property With SIANCHES
        </h2>
        <button className="w-44	h-14 flex items-center justify-center flex-row gap-1  flex-nowrap bg-primary ">
          <span className="font-normal text-base text-secondary">
            Sell your unit
          </span>
          <MdArrowOutward className="text-secondary h-[12px] w-[12px]" />
        </button>
      </div>

      <Image
        src={Modern}
        width={656}
        height={408}
        className="md:hidden lg:block"
        alt=""
      />
    </div>
  );
};

export default Property;
