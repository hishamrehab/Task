import Image from "next/image";
import gropOne from "../../../../public/images/Group.png";
import gropTwo from "../../../../public/images/Group (1).png";
import gropThree from "../../../../public/images/Group (2).png";
import gropFour from "../../../../public/images/Group (3).png";

export const Groups = () => {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-between pt-14 pb-14  m-auto flex-wrap ">
      <div className="sm:pt-[40px] md:pt-[0px] flex flex-col items-center md:border-r border-gray-200 md:pr-24 ">
        <Image src={gropOne} width={40} height={40} alt="Property Management" />
        <p className="mt-6 font-normal text-center">Property Management</p>
      </div>

      <div className="sm:pt-[40px] md:pt-[0px] flex flex-col items-center md:border-r border-gray-200 md:pr-24">
        <Image src={gropTwo} width={40} height={40} alt="Great Support" />
        <p className="mt-6 font-normal text-center">Great Support</p>
      </div>

      <div className=" sm:pt-[40px] md:pt-[0px] flex flex-col items-center md:border-r border-gray-200 md:pr-24">
        <Image src={gropThree} width={40} height={40} alt="Mortgage Services" />
        <p className="mt-6 font-normal text-center">Mortgage Services</p>
      </div>

      <div className="sm:pt-[40px] md:pt-[0px] flex flex-col items-center">
        <Image src={gropFour} width={40} height={40} alt="Great Support" />
        <p className="mt-6 font-normal text-center">Great Support</p>
      </div>
    </div>
  );
};
