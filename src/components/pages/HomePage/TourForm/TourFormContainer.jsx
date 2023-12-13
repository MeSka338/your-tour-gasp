import React, { useRef } from "react";
import gsap from "gsap";
import TourForm from ".";

const TourFormContainer = ({ formRef }) => {
  // const titleRef = useref();
  const form = useRef();

  const formAnimation = () => {
    gsap.fromTo(
      form.current,
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: form.current,

          start: "top center",
        },
        opacity: 1,
      }
    );
  };
  return (
    <TourForm
      // titleRef={titleRef}
      // titleAnimation={titleAnimation}
      form={form}
      formAnimation={formAnimation}
      formRef={formRef}
    />
  );
};

export default TourFormContainer;
