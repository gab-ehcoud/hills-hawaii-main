import FooterThree from "@/components/layout/footers/FooterThree";
import Header3 from "@/components/layout/header/Header3";
import Register from "@/components/pages/Register";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Register || Hills & Hawaii",
  description: "Hills & Hawaii",
};

export default function RegisterPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header3 />
        <Register />
        <FooterThree />
      </main>
    </>
  );
}
