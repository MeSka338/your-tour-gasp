import React, { memo } from "react";
import Footer from "./Footer";

const FooterContainer = memo(
  ({ footerRef, arrowRef, arrowAnimtion, heroRef, scrollToAnimation }) => {
    return (
      <Footer
        footerRef={footerRef}
        arrowRef={arrowRef}
        arrowAnimtion={arrowAnimtion}
        heroRef={heroRef}
        scrollToAnimation={scrollToAnimation}
      />
    );
  }
);

export default FooterContainer;
