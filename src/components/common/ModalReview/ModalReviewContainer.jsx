import React, { memo, useCallback, useRef } from "react";
import gsap from "gsap";
import ModalReview from "./ModalReview";

const ModalReviewContainer = memo(
  ({ text, profileImg, name, tourType, setIsModal }) => {
    const modalRef = useRef();

    const modalAnimation = useCallback(() => {
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
        },
      );
    }, []);

    return (
      <ModalReview
        modalAnimation={modalAnimation}
        modalRef={modalRef}
        text={text}
        name={name}
        tourType={tourType}
        profileImg={profileImg}
        setIsModal={setIsModal}
      />
    );
  },
);

export default ModalReviewContainer;
