import React, { useRef, useState } from "react";
import gsap from "gsap";
import TravelPhoto from ".";

const TravelPhotoContainer = () => {
  const gallery1Ref = useRef();
  const gallery2Ref = useRef();
  const gallery3Ref = useRef();

  const [istablet, setIsTablet] = useState(false);

  const margin = istablet ? 4 : 7;
  const duration = 30;

  const galleryAnimation = (galleryRef, toLeft) => {
    const refWidth = galleryRef.current.clientWidth;

    gsap.fromTo(
      galleryRef.current,
      {
        x: toLeft ? refWidth / 4 + margin : -refWidth / 4 - margin,
      },
      {
        duration,
        x: toLeft ? -refWidth / 4 - margin : refWidth / 4 + margin,
        repeat: -1,
        ease: "none",
      }
    );
  };
  return (
    <TravelPhoto
      gallery1Ref={gallery1Ref}
      gallery2Ref={gallery2Ref}
      gallery3Ref={gallery3Ref}
      setIsTablet={setIsTablet}
      galleryAnimation={galleryAnimation}
    />
  );
};

export default TravelPhotoContainer;
