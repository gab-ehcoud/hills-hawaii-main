import Favorites from "@/components/dasboard/Fevorite";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Dashboard-favorites || Hills & Hawaii",
  description: "Hills & Hawaii",
};

export default function DBFavoritesPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Favorites />
      </main>
    </>
  );
}
