import Firstpage from "./(homes)/home-1/page";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home-1 || Hills & Hawaii",
  description: "Hills & Hawaii",
};

export default function page() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Firstpage />
    </>
  );
}
