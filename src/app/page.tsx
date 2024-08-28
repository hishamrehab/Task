import Image from "next/image";
import Hero from "./components/hero/Hero";
import { Groups } from "./components/groups/Groups";
import { Properties } from "./components/Properties";
import Main from "./components/main/Main";
import RecentlyAdd from "./components/RecentlyAdd";
import SectionSix from "./components/SectionSix";
import Partners from "./components/Partners";
import SectionSeven from "./components/SectionSeven";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Main />
      <Hero />
      <Groups />
      <Properties />
      <RecentlyAdd />
      <SectionSix />
      <Partners />
      <SectionSeven />
      {/* <Footer />     */}
    </>
  );
}
