import FooterMain from "@/components/layout/footers/FooterMain";
import Header3 from "../../../components/layout/header/Header3";
import PageHeader from "@/components/tourSingle/PageHeader";
import TourSlider from "@/components/tourSingle/TourSlider";
import SingleOne from "@/components/tourSingle/pages/SingleOne";
import { allTour } from "@/data/tours";
import { useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Tour-single-1 || Hills & Hawaii",
  description: "Hills & Hawaii",
};

export default function TourSinglePage1() {
  let params = useParams();
  const id = params.id;
  const tour = allTour.find((item) => item.id == id) || allTour[0];

  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header3 />
        <PageHeader />
        <SingleOne tour={tour} />
        <TourSlider />
        <FooterMain />
      </main>
    </>
  );
}
