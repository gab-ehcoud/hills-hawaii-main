import DbBooking from "@/components/dasboard/DbBooking";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Dashboard-booking || Hills & Hawaii",
  description: "Hills & Hawaii",
};

export default function DBBookingPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <DbBooking />
      </main>
    </>
  );
}
