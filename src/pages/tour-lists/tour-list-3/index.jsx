import FooterMain from "@/components/layout/footers/FooterMain";
import Header3 from "@/components/layout/header/Header3";
import PageHeader from "@/components/tours/PageHeader";
import TourList2 from "@/components/tours/TourList2";
import TourTypes from "../../../components/tours/TourTypes";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Tour-list-3 || Hills & Hawaii",
  description: "Hills & Hawaii",
};

export default function TourListPage3() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <div className="container  bg-[url('/img/hero/3/bg-hill.jpg')]">
          <Header3 />
          <PageHeader />
          <div className="container mb-40">
            <TourTypes />
          </div>
          <TourList2 />
          <FooterMain />
        </div>
      </main>
    </>
  );
}
