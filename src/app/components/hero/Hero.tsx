import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import styles from "./Hero.module.css";
import Rectangle from "../../../../public/images/Rectangle 34.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container flex items-center flex-row gap-16 pt-32">
      {/* heroImage */}
      <div className={styles.heroImage}>
        <Image src={Rectangle} width={570} height={660} alt="" />
      </div>
      <div className={`${styles.heroContent} text-3xl mt-40 `}>
        <h2 className="font-black text-5xl text-primary pb-5">
          We Help You Realize Your Dream Property
        </h2>
        <p className="hero-text text-base  text-primary font-normal leading-7 mb-5">
          Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum. Fusce
          at dui tincidunt nulla semper venenatis at et magna. Mauris turpis
          lorem, ultricies vel justo sed, ultrices auctor nisi.
        </p>

        <p className="hero-text text-base  text-primary font-normal leading-7 mb-10">
          Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum. Fusce
          at dui tincidunt nulla semper.
        </p>

        <Link href="">
          <button className="w-44	h-14 flex items-center gap-1 px-7 flex-nowrap bg-primary">
            <span className="font-sans font-bold text-sm text-secondary uppercase	">
              read more
            </span>
            <span className="text-secondary h-8 w-8">
              <MdArrowOutward />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
