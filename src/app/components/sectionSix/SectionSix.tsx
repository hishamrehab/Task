import React from "react";
import styles from "./sectionSix.module.css";
import { MdArrowOutward } from "react-icons/md";
import Modern from "../../../../public/images/wooden-keychain-white 1.png";
import Image from "next/image";

const SectionSix = () => {
  return (
    <div
      className={`container flex items-center justify-between bg-backgroundSecondary   ${styles.section}`}
    >
      <div>
        <Image src={Modern} width={498} height={351} alt="" />
      </div>
      <div className={`flex items-center flex-wrap ${styles.leftSection}`}>
        <h2 className="font-black text-3xl leading-10 text-black">
          Become an ambassador
        </h2>
        <button className="w-44	h-14 flex items-center justify-center flex-row gap-1  flex-nowrap bg-primary">
          <span className="font-sans font-bold text-sm text-secondary capitalize">
            Register Now
          </span>
          <MdArrowOutward className="text-secondary h-hArrow w-wArrow" />
        </button>
      </div>
    </div>
  );
};

export default SectionSix;
