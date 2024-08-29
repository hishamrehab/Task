import Img from "./Hero.png";

import Image from "next/image";

const ImageComponent = () => {
  return (
    <Image src={Img} alt="" className="absolute -z-50 h-screen	w-full top-0" />
  );
};

export default ImageComponent;
