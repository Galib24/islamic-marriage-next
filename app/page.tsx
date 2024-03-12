import FifthSections from "@/components/FifthSections";
import FirstSection from "@/components/FirstSection";
import FourthSections from "@/components/FourthSections";
import { Myplan } from "@/components/Mobile/MyPlan/Myplan";
import SecondSection from "@/components/SecondSection";
import SisthSections from "@/components/SisthSections";
import ThirdSection from "@/components/ThirdSection";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <FourthSections></FourthSections>
      <FifthSections></FifthSections>
      <SisthSections></SisthSections>

      {/* mobile section */}


      <Myplan></Myplan>





    </>
  );
}
