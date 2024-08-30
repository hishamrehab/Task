import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Frame33 from "../../../public/images/Frame 1 (1).png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-footerBg overflow-hidden">
      <div className="container footer-content pt-p71">
        <div className="flex flex-col md:flex-row items-center justify-between pb-p67 border-b border-borderCol ">
          <div className=" w-full mb-6 md:mb-0  max-w-[550px]">
            <h3 className="font-black text-fs32 text-primary  leading-lh39px mb-2 text-center md:text-left">
              Subscribe to newsletter
            </h3>
            <p className="font-normal text-lg leading-lh21 text-primary text-center md:text-left">
              Sign up to receive the latest news
            </p>
          </div>

          <div className="w-full md:w-w670 flex flex-col md:flex-row items-center justify-center md:justify-end">
            <input
              className="border-0 w-full h-14 font-sans text-base font-normal leading-lh21 bg-backgroundSecondary text-primary outline-none mb-4 md:mb-0 "
              type="email"
              placeholder="Enter your email address"
              id="email"
              required
            />
            <button className="w-44 h-14 flex justify-center items-center gap-1 bg-primary">
              <span className="font-sans font-bold text-sm text-secondary">
                Subscribe
              </span>
              <MdArrowOutward className="text-secondary w-2.5 h-2.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between pt-[64px] pb-p76 border-b border-borderCol flex-wrap">
          <div className="mb-6 md:mb-0">
            <Image
              src={Frame33}
              width={202.99}
              height={16}
              alt=""
              className="mb-4 w-[202.99] h-[16]"
            />

            <p className="text-base font-normal leading-lh39px mb-8 w-[600px]">
              Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum.
              Fusce at dui tincidunt nulla semper.
            </p>

            <div className="flex gap-4">
              <span className="text-FollowUsCol font-normal text-base leading-lh19">
                Follow us on
              </span>
              <FaFacebookF className="text-primary w-5 cursor-pointer" />
              <FaXTwitter className="text-primary w-5 cursor-pointer" />
              <IoLogoInstagram className="text-primary w-5 cursor-pointer" />
              <CiYoutube className="text-primary w-5 cursor-pointer" />
            </div>
          </div>

          <div className="footer-links flex flex-col gap-5 text-primary font-normal text-base leading-lh19 flex-wrap mb-6 md:mb-0">
            <Link href="">Main Links</Link>
            <Link href="">Home</Link>
            <Link href="">Our Projects</Link>
            <Link href="">Services</Link>
            <Link href="">Contact us</Link>
          </div>

          <div className="footer-links flex flex-col gap-7 text-primary font-normal text-lg leading-lh21">
            <Link href="">Quick Links</Link>
            <Link href="">Privacy policy</Link>
            <Link href="">Terms of Use</Link>
          </div>
        </div>

        <p className="pt-6 text-center pb-4">
          All Copyrights are reserved by SIANCHES @2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
