import React, { memo, useRef, useState } from "react";
import gsap from "gsap";
import Reviews from "./Reviews";

const ReviewsContainer = memo(({ reviewsRef }) => {
  const textRef = useRef();
  const [click, setClick] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const reviewAnimation = () => {
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
  };
  //   modalAnimation
  const modalRef = useRef();

  const modalAnimation = () => {
    gsap.fromTo(
      modalRef.current,
      {
        scale: 0,
        rotate: "-90deg",
      },
      {
        duration: 1,
        scale: 1,
        rotate: "0",
        width: "auto",
        height: "auto",
      }
    );
  };

  return (
    <Reviews
      textRef={textRef}
      click={click}
      setClick={setClick}
      isModal={isModal}
      setIsModal={setIsModal}
      reviewAnimation={reviewAnimation}
      //   modalAnimation
      modalRef={modalRef}
      modalAnimation={modalAnimation}
      reviewsRef={reviewsRef}
    />
  );
});

export default ReviewsContainer;
