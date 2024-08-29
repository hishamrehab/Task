// import Image from "next/image";
// import { MdArrowOutward } from "react-icons/md";
// import Rectangle from "../../../../public/images/Rectangle 34.png";
// import Link from "next/link";

// const Hero = () => {
//   return (
//     <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16 pt-16 md:pt-32">
//       {/* heroImage */}
//       <div className="hidden md:block mt-10 md:mt-40">
//         <Image src={Rectangle} width={570} height={660} alt="" />
//       </div>
//       <div className="w-[573px] h-[357px] text-center md:text-left mt-10 md:mt-40">
//         <h2 className="font-black text-3xl md:text-5xl text-primary pb-5">
//           We Help You Realize Your Dream Property
//         </h2>
//         <p className="w-[492px] h-[74px] text-base text-primary font-normal leading-7 pb-5">
//           Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum. Fusce
//           at dui tincidunt nulla semper venenatis at et magna. Mauris turpis
//           lorem, ultricies vel justo sed, ultrices auctor nisi.
//         </p>

//         <p className="w-[492px] h-[74px] text-base text-primary font-normal leading-7 mb-10">
//           Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum. Fusce
//           at dui tincidunt nulla semper.
//         </p>

//         <Link href="">
//           <button className="w-44 h-14 flex items-center gap-1 px-7 bg-primary">
//             <span className="font-sans font-bold text-sm text-secondary uppercase">
//               read more
//             </span>
//             <span className="text-secondary h-8 w-8">
//               <MdArrowOutward />
//             </span>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Rectangle from "../../../../public/images/Rectangle 34.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16 m-auto">
      {/* Hero Image */}
      <div className="hidden md:block ">
        <Image src={Rectangle} alt="Hero Image" className="w-[100%] h-auto" />
      </div>

      {/* Hero Content */}
      <div className="text-center md:items-center md:m-auto  mt-10  max-w-lg">
        <h2 className="font-black text-3xl md:text-5xl text-primary pb-5">
          We Help You Realize Your Dream Property
        </h2>

        <p className="text-base text-primary font-normal leading-7 pb-5">
          Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum. Fusce
          at dui tincidunt nulla semper venenatis at et magna. Mauris turpis
          lorem, ultricies vel justo sed, ultrices auctor nisi.
        </p>

        <p className="text-base text-primary font-normal leading-7 mb-10">
          Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum. Fusce
          at dui tincidunt nulla semper.
        </p>

        <Link href="">
          <button className="w-[178px] h-[56px] flex items-center gap-1 px-7 py-3 bg-primary text-secondary font-bold text-sm uppercase">
            read more
            <MdArrowOutward className="h-4 w-4 ml-3" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
