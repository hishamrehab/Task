import { MdArrowOutward } from "react-icons/md";
import styles from "./main.module.css";

const Main = () => {
  return (
    <section
      className={`container flex items-center justify-center flex-col  ${styles.main} w-full h-screen bg-no-repeat bg-cover	 `}
    >
      <div
        className={`${styles.heroBanner} flex items-center flex-col gap-y-12`}
      >
        <h1 className="font-black text-7xl italic leading-tight text-center text-hero">
          We Help You Realize Your Dream Property
        </h1>

        <button
          className={`flex items-center justify-center ${styles.MainButton}  gap-1 px-7 bg-hero`}
        >
          <span className="text-base font-normal leading-5 text-primary">
            Explore Properties
          </span>

          <MdArrowOutward className="text-primary w-2.5	h-2.5" />
        </button>
      </div>
    </section>
  );
};

export default Main;
