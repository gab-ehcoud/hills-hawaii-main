import FooterOne from "@/components/layout/footers/FooterMain";
import Header3 from "@/components/layout/header/Header3";
import Activity from "@/components/pages/helpCenter/Activity";
import Faq from "@/components/pages/helpCenter/Faq";
import Hero from "@/components/pages/helpCenter/Hero";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Help center || Hills & Hawaii",
  description: "Hills & Hawaii",
};

export default function HelpCenterPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header3 />
        <Hero />
        <Activity />
        <Faq />
        <FooterOne />
      </main>
    </>
  );
}
