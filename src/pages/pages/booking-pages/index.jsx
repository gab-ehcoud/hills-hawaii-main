import FooterOne from "@/components/layout/footers/FooterMain";
import Header3 from "@/components/layout/header/Header3";
import BookingPages from "@/components/pages/BookingPages";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Booking-page || Hills & Hawaii",
  description: "Hills & Hawaii",
};

export default function BookingPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header3 />
        <BookingPages />
        <FooterOne />
      </main>
    </>
  );
}
