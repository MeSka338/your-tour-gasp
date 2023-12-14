import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import Review from "./Review";
import gsap from "gsap";

const ReviewContainer = memo(({ text, name, tourType, profileImg }) => {
  const textRef = useRef();
  const [click, setClick] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const reviewAnimation = useCallback(() => {
    setClick(!click);
    if (click === true) {
      gsap.to(
        textRef.current,

        {
          position: "absolute",

          zIndex: 10000,
        }
      );
    } else {
      gsap.to(
        textRef.current,

        {
          position: "auto",
        }
      );
    }
  }, []);

  useEffect(() => {
    reviewAnimation();
  }, []);

  return (
    <Review
      text={text}
      name={name}
      tourType={tourType}
      profileImg={profileImg}
      textRef={textRef}
      click={click}
      isModal={isModal}
      setIsModal={setIsModal}
    />
  );
});

export default ReviewContainer;
