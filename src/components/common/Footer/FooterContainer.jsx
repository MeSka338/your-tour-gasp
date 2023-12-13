import React from "react";
import Footer from "./Footer";

const FooterContainer = ({
  footerRef,
  arrowRef,
  arrowAnimtion,
  heroRef,
  scrollToAnimation,
}) => {
  return (
    <Footer
      footerRef={footerRef}
      arrowRef={arrowRef}
      arrowAnimtion={arrowAnimtion}
      heroRef={heroRef}
      scrollToAnimation={scrollToAnimation}
    />
  );
};

export default FooterContainer;
