import FooterOne from "@/components/layout/footers/FooterMain";
import Header3 from "@/components/layout/header/Header3";
import Login from "@/components/pages/Login";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Login || Hills & Hawaii",
  description: "Hills & Hawaii",
};

export default function LoginPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header3 />
        <Login />
        <FooterOne />
      </main>
    </>
  );
}
