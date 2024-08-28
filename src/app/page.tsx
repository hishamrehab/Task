import Hero from "./components/hero/Hero";
import { Groups } from "./components/groups/Groups";
import { Properties } from "../../src/app/components/properties/Properties";
import Main from "./components/main/Main";
import RecentlyAdd from "./components/recentlyAdd/RecentlyAdd";
import SectionSix from "../../src/app/components/sectionSix/SectionSix";
import Partners from "./components/parners/Partners";
import SectionSeven from "./components/sectionSeven/SectionSeven";
import Footer from "./components/Footer";
import ImageComponent from "./components/Imagecomponent/ImageComponent";
export default function Home() {
  return (
    <>
      <ImageComponent />
      <Main />
      <Hero />
      <Groups />
      <Properties />
      <RecentlyAdd />
      <SectionSix />
      {/* <Partners /> */}
      <SectionSeven />
      <Footer />
    </>
  );
}
