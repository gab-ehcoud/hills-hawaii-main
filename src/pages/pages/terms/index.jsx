import FooterOne from "@/components/layout/footers/FooterMain";
import Header3 from "@/components/layout/header/Header3";
import Content from "@/components/pages/terms/Content";
import PageHeader from "@/components/pages/terms/PageHeader";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Terms || Hills & Hawaii",
  description: "Hills & Hawaii",
};

export default function TermsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header3 />
        <PageHeader />
        <Content />
        <FooterOne />
      </main>
    </>
  );
}
