import React from "react";
import HomeBanner from "../../Components/HomeBanner";

import WhatWeOffer from "@/Components/Teachers";
import Community from "@/Components/Community";
import CulturalActivities from "@/Components/CulturalActivities";
import Reporting from "@/Components/Reporting";
import AboutComponent from "@/Components/AboutComponent";

function Page() {
  return (
    <>
      <HomeBanner />
      <AboutComponent />
      <WhatWeOffer />
      <Community />
      <CulturalActivities />
      <Reporting />
    </>
  );
}

export default Page;
