import Img from "../../../../public/images/Rectangle 1 (2).png";

import Image from "next/image";

const ImageComponent = () => {
  return (
    <Image src={Img} alt="" className="absolute -z-50 h-screen	w-full top-0" />
  );
};

export default ImageComponent;
