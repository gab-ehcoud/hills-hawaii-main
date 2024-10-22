import FooterOne from "@/components/layout/footers/FooterMain";
import Header3 from "@/components/layout/header/Header3";
import UiElements from "@/components/pages/uiElements";
import PageHeader from "@/components/pages/uiElements/PageHeader";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "UI-elements || Hills & Hawaii",
  description: "Hills & Hawaii",
};

export default function UIElementsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header3 />
        <PageHeader />
        <UiElements />
        <FooterOne />
      </main>
    </>
  );
}
