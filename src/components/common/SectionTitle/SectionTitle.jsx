import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import s from "./SectionTitle.module.scss";
gsap.registerPlugin(ScrollTrigger);

const SectionTitle = ({ title, subtitle, titleRef, TitleAnimation }) => {
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
