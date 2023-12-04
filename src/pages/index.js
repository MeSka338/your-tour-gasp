import React, { useEffect } from "react";
import HomeContainer from "../components/pages/HomePage/HomeContainer";

export default function HomePage() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <main>
        <HomeContainer />
      </main>
    </>
  );
}
