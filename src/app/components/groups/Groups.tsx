import Image from "next/image";
import gropOne from "../../../../public/images/Group.png";
import gropTwo from "../../../../public/images/Group (1).png";
import gropThree from "../../../../public/images/Group (2).png";
import gropFour from "../../../../public/images/Group (3).png";
import styles from "./Groups.module.css";

export const Groups = () => {
  return (
    <div className="container flex items-start justify-between flex-row pt-14  ">
      <div className={`${styles.groupOne}`}>
        <Image src={gropOne} width={40} height={40} alt="" />
        <p className="mt-6 font-normal">Property Management</p>
      </div>

      <div className={`${styles.groupOne}`}>
        <Image src={gropTwo} width={40} height={40} alt="" />
        <p className=" mt-6 font-normal">Great support</p>
      </div>

      <div className={`${styles.groupOne}`}>
        <Image src={gropThree} width={40} height={40} alt="" />
        <p className="mt-6 font-normal">Mortgage Services</p>
      </div>

      <div className={`${styles.groupOne} border-r-0`}>
        <Image src={gropFour} width={40} height={40} alt="" />
        <p className="mt-6 font-normal	">Great support</p>
      </div>
    </div>
  );
};
