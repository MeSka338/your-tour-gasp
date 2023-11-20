import React, { useEffect, useState, useRef } from "react";
import s from "./CustomCursor.module.scss";
import gsap from "gsap";

const CustomCursor = () => {
  const rootRef = useRef();

  const scaleAnim = gsap.timeline({ paused: true });

  const cursoreMove = (e) => {
    gsap.to(rootRef.current, {
      x: e.clientX,
      y: e.clientY,
      ease: "power1.out",

      stagger: {
        each: 0.1,
      },
    });
  };

  const scaleAnimation = () => {
    const targets = gsap.utils.toArray("a");

    scaleAnim.to(rootRef.current, {
      scale: 7,
      duration: 0.2,
    });

    targets.forEach((target) => {
      target.addEventListener("mouseenter", (e) => {
        scaleAnim.play();
      });

      target.addEventListener("mouseleave", (e) => {
        scaleAnim.reverse();
      });
    });
  };

  useEffect(() => {
    gsap.set(rootRef.current, {
      xPercent: -50,
      yPercent: -50,
    });

    scaleAnimation();

    window.addEventListener("mousemove", (e) => cursoreMove(e));
  }, []);

  return <div className={s.root} ref={rootRef}></div>;
};

export default CustomCursor;
