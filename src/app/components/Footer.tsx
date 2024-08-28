import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
// import Frame33 from "../../../public/images/Frame 33 (1).png";
import Frame33 from "../../../public/images/Frame 33 (1).png";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-footerBg overflow-hidden">
      <div className="container footer-content pt-p71 ">
        <div className="flex items-center justify-between pb-p67 border-b border-borderCol">
          <div className="w-w399 h-h75">
            <h3 className="font-black text-fs32 text-primary loading-lh39px mb-2">
              Subscribe to newsletter
            </h3>
            <p className="font-normal text-lg	loading-lh21 text-primary">
              Sign up to receive the latest news
            </p>
          </div>

          <div className="w-w670  bg-backgroundSecondary flex">
            <input
              className={` border-0 w-w516 font-sans	text-base font-normal leading-lh21 bg-backgroundSecondary text-primary outline-none	 `}
              type="email"
              placeholder="Enter your email address"
              id="email"
              required
            />
            <button className="w-44	h-14 flex justify-center items-center gap-1 bg-primary">
              <span className="font-sans font-bold text-sm text-secondary ">
                Subscribe
              </span>

              <MdArrowOutward className="text-secondary w-2.5	 h-2.5" />
            </button>
          </div>
        </div>

        <div className="flex justify-between pt-14 pb-p76 border-b border-borderCol">
          <div>
            <Image
              src={Frame33}
              width={202.99}
              height={16}
              alt=""
              className="bg-primary mb-4"
            />

            <p className="text-base	 font-normal	loading-lh39px mb-8">
              Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum.
              Fusce at dui tincidunt nulla semper.
            </p>

            <div className="flex gap-4">
              <span className="text-FollowUsCol font-normal text-base loading-lh19">
                Follow us on
              </span>
              <FaFacebookF className="text-primary w-5" />
              <FaXTwitter className="text-primary w-5" />
              <IoLogoInstagram className="text-primary w-5" />
              <CiYoutube className="text-primary w-5" />
            </div>
          </div>
          <div className="footer-links flex  flex-col	 gap-5 text-primary font-normal text-base	loading-lh19">
            <p>Main Links</p>
            <p>Home</p>
            <p>Services</p>
            <p>Contact us</p>
          </div>
          <div className="footer-links flex  flex-col	 gap-7 text-primary font-normal  text-lg	loading-lh21">
            <p>Quick Links</p>
            <p>Privacy policy</p>
            <p>Terms of Use</p>
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
