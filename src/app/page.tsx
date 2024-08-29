"use client";
import Hero from "./components/hero/Hero";
import { Groups } from "./components/groups/Groups";
import { Properties } from "../../src/app/components/properties/Properties";
import Main from "./components/main/Main";
import RecentlyAdd from "./components/recentlyAdd/RecentlyAdd";
import SectionSix from "../../src/app/components/sectionSix/SectionSix";
// import { Partners } from "./components/partners/Partners";
import PartnersPage from "./components/partners/PartnersPage";
import SectionSeven from "./components/sectionSeven/SectionSeven";
import Footer from "./components/Footer";
import { useRouter } from "next/navigation";
import ImageComponent from "./ImageComponent";

export default function Home() {
  // const router = useRouter();
  // const token = localStorage.getItem("token");

  // if (!token) {
  //   return router.push("/login");
  // }
  return (
    <>
      <ImageComponent />
      <Main />
      <Hero />
      <Groups />
      <Properties />
      <RecentlyAdd />
      <SectionSix />
      <PartnersPage />
      <SectionSeven />
      <Footer />
    </>
  );
}
