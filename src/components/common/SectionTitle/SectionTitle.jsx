import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import s from "./SectionTitle.module.scss";
gsap.registerPlugin(ScrollTrigger);

const SectionTitle = ({ title, subtitle }) => {
  const titleRef = useRef();

  const TitleAnimation = () => {
    gsap.fromTo(
      titleRef.current,
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      },
      {
        scrollTrigger: titleRef.current,

        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power1.out",
      }
    );
  };

  useEffect(() => {
    TitleAnimation();
  }, []);
  return (
    <div className={s.root} ref={titleRef}>
      <h2 className={s.stories__title}>{title}</h2>
      <p className={s.stories__subtitle}>{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
