import React from "react";
import HomeBanner from "../../Components/HomeBanner";
import About from "@/Components/AboutComponent";
import Community from "@/Components/Community";
import CulturalActivities from "@/Components/CulturalActivities";
import Reporting from "@/Components/Reporting";
import Principal from "@/Components/Principal";
import Teachers from "@/Components/Teachers";

function Page() {
  return (
    <>
      <HomeBanner />
      <About />
      <Community />
      <Teachers />
      <Principal />
      <CulturalActivities />
      <Reporting />
    </>
  );
}

export default Page;
