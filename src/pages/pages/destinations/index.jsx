import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import SpacialOffer from "@/components/homes/others/SpacialOffer";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import FooterOne from "@/components/layout/footers/FooterMain";
import Header3 from "@/components/layout/header/Header3";
import Hero from "@/components/pages/destinations/Hero";
import Information from "@/components/pages/destinations/Information";
import TourList1 from "@/components/pages/destinations/TourList";
import TourSlider from "@/components/pages/destinations/TourSlider";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Destinations || Hills & Hawaii",
  description: "Hills & Hawaii",
};

export default function DestinationsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header3 />
        <Hero />
        <SpacialOffer />
        <TourSlider />
        <TourList1 />
        <TestimonialOne />
        <Information />
        <ArticlesOne />
        <FooterOne />
      </main>
    </>
  );
}
