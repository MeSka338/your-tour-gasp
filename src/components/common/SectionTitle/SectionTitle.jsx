import React, { useRef, useEffect, memo } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import s from "./SectionTitle.module.scss";
gsap.registerPlugin(ScrollTrigger);

const SectionTitle = memo(({ title, subtitle, titleRef }) => {
  return (
    <div className={s.root} ref={titleRef}>
      <h2 className={s.storiesTitle}>{title}</h2>
      <p className={s.storiesSubtitle}>{subtitle}</p>
    </div>
  );
});

export default SectionTitle;
