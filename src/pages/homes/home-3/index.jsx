import ArticlesTwo from "../../../components/homes/articles/ArticlesTwo";
import BannerFive from "../../../components/homes/banners/BannerFive";
// import HillLanding from "../../..//components/homes/heros/Hero3";
import TourSlider2 from "../../../components/homes/tours/TourSlider2";
import FooterThree from "../../../components/layout/footers/FooterThree";
import Header3 from "../../../components/layout/header/Header3";
import React from "react";
import Tour2 from "../../../components/homes/tours/Tour2";
import HeroLanding from "../../../components/homes/heros/Hero2";
import TrendingDestinations from "../../../components/homes/destinations/TrendingDestinations";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home-3 || Hills & Hawaii",
  description: "Hills & Hawaii",
};

export default function HomePage3() {
  // theme, setTheme
  const [theme, setTheme] = React.useState("light");

  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header3 theme={theme} setTheme={setTheme} />
        <HeroLanding theme={theme} />
        {/* Need to add it later */}
        {/* <PopulerDestinations /> */}
        {/* <DestinationsThree /> */}
        <Tour2 />
        <TourSlider2 />
        <TrendingDestinations />
        <BannerFive />

        {/* Need to add it later */}
        {/* <TestimonialsTwo /> */}

        {/* <FeaturesFour /> */}

        <ArticlesTwo />
        {/* Need to add it later */}

        {/* <LinksList /> */}
        {/* <BannerSix /> */}
        <FooterThree />
      </main>
    </>
  );
}
