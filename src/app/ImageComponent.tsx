import Img from "./Hero.png";

import Image from "next/image";

const ImageComponent = () => {
  return (
    <Image src={Img} alt="" className="absolute -z-50 h-screen	w-[100%] top-0" />
  );
};

export default ImageComponent;
