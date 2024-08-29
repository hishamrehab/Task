import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const Main = () => {
  return (
    <section className="flex items-center justify-center flex-col w-full h-screen bg-no-repeat bg-cover">
      <div className="container flex items-center flex-col gap-y-8 md:gap-y-12 max-w-screen-lg">
        <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic leading-tight text-center text-secondary">
          We Help You Realize Your Dream Property
        </h1>
        <Link href="">
          <button className="flex items-center justify-center gap-1 px-5 py-2 md:px-7 md:py-3 bg-secondary text-primary">
            <span className="text-sm md:text-base font-normal leading-5">
              Explore Properties
            </span>
            <MdArrowOutward className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Main;
