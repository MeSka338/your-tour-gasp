import React, { useEffect } from "react";
import HomeContainer from "../components/pages/HomePage/HomeContainer";
import Layout from "../components/common/Layout";

export default function HomePage() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <Layout>
        <main>
          <HomeContainer />
        </main>
      </Layout>
    </>
  );
}
