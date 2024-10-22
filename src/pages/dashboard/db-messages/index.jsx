import Messages from "@/components/dasboard/Messages";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Dashboard-messages || Hills & Hawaii",
  description: "Hills & Hawaii",
};

export default function DBMessagesPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Messages />
      </main>
    </>
  );
}
