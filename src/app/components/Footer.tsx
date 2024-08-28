import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Frame33 from "../../../public/images/Frame 33 (1).png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-footerBg">
      <div className="container pt-p71 pb-p67">
        <div className="footer-top  h-h75 border-b border-borderCol">
          <div>
            <h3 className="font-black text-fs32 loading-lh39px text-primary mb-2">
              Subscribe to newsletter
            </h3>
            <p className="font-normal	text-lg loading-lh21">
              Sign up to receive the latest news
            </p>
          </div>

          <div className="w-w670 h-h72 bg-backgroundSecondary">
            <input
              className={` border-0 w-w515 h-h72 py-p23 font-sans	text-base font-normal leading-lh21 bg-backgroundSecondary text-primary outline-none	 `}
              type="email"
              placeholder="Enter your email address"
              id="email"
              required
            />
            <button className="w-44	h-14 flex justify-center items-center gap-1 bg-primary">
              <span className="font-sans font-bold text-sm text-secondary uppercase">
                Send Message
              </span>

              <MdArrowOutward className="text-secondary w-2.5	 h-2.5" />
            </button>
          </div>
        </div>

        {/* <div className="footer-bottom pt-16 pb-20 border-borderCol  border-b">
          <div className="flex justify-between ">
            <div>
              <Image
                src={Frame33}
                width={202.99}
                height={16}
                alt=""
                className="mb-4"
              />
              <p className="font-normal text-base	loading-lh19 mb-8">
                Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum.
                Fusce at dui tincidunt nulla semper.
              </p>

              <div className="flex  justify-between gap-4">
                <span className="text-FollowUsCol font-normal text-base loading-lh19">
                  Follow us on
                </span>
                <FaFacebookF className="text-primary w-5" />
                <FaXTwitter className="text-primary w-5" />
                <IoLogoInstagram className="text-primary w-5" />
                <CiYoutube className="text-primary w-5" />
              </div>
            </div>
            <div className="footer-links flex  direction-col gap-5 text-primary font-normal text-base	loading-lh19">
              <p>Main Links</p>
              <p>Home</p>
              <p>Services</p>
              <p>Contact us</p>
            </div>
            <div className="footer-links flex  direction-col gap-7 text-primary  text-lg	loading-lh21">
              <p>Quick Links</p>
              <p>Privacy policy</p>
              <p>Terms of Use</p>
            </div>
          </div>
        </div> */}
        {/* <p className="pt-6 text-center">
          All Copyrights are reserved by SIANCHES @2024
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
