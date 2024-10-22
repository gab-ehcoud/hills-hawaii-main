import FooterOne from "@/components/layout/footers/FooterMain";
import Header3 from "@/components/layout/header/Header3";
import ContactForm from "@/components/pages/contact/ContactForm";
import Locations from "@/components/pages/contact/Locations";
import Map from "@/components/pages/contact/Map";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Contact || Hills & Hawaii",
  description: "Hills & Hawaii",
};

export default function ContactPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header3 />
        <Map />
        <Locations />
        <ContactForm />

        <FooterOne />
      </main>
    </>
  );
}
