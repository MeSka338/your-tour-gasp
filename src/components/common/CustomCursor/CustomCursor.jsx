import React, { useEffect, useState, useRef, memo } from "react";
import s from "./CustomCursor.module.scss";
import gsap from "gsap";

const CustomCursor = memo(({ rootRef, cursoreMove, scaleAnimation }) => {
  useEffect(() => {
    gsap.set(rootRef.current, {
      xPercent: -50,
      yPercent: -50,
    });

    scaleAnimation();

    window.addEventListener("mousemove", (e) => cursoreMove(e));
  }, []);

  return <div className={s.root} ref={rootRef}></div>;
});

export default CustomCursor;
