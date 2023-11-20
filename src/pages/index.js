import React, { useEffect } from "react";
import HomePage from "../components/pages/HomePage";
import Layout from "../components/common/Layout";

export default function Home() {
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
          <HomePage />
        </main>
      </Layout>
    </>
  );
}
