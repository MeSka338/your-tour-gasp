import React, { useEffect } from "react";
import s from "./Hero.module.scss";
import BtnMain from "@/src/components/common/BtnMain";
import Header from "@/src/components/common/Header";

const Hero = ({
  heraderRef,
  subtitleRef,
  buttonRef,
  headerAnimation,
  buttonAnimation,
  subtitleAnimation,
  // header
  isFixed,
  navRef,
  navAnimation,
  updateScroll,
}) => {
  // const heraderRef = useRef();
  // const subtitleRef = useRef();
  // const buttonRef = useRef();

  // const headerAnimation = () => {
  //   gsap.fromTo(
  //     heraderRef.current.children,
  //     {
  //       opacity: 0,
  //       y: 100,
  //     },
  //     {
  //       y: 0,
  //       ease: "power1.easeOut",
  //       opacity: 1,
  //       stagger: {
  //         each: 0.2,
  //         from: "start",
  //       },
  //       delay: 1,
  //       duration: 1,
  //     }
  //   );
  // };
  // const buttonAnimation = () => {
  //   gsap.fromTo(
  //     buttonRef.current.children,
  //     {
  //       y: 100,
  //     },
  //     {
  //       y: 0,
  //       duration: 1,
  //       delay: 2,
  //     }
  //   );
  // };
  // const subtitleAnimation = () => {
  //   gsap.fromTo(
  //     subtitleRef.current,
  //     {
  //       y: 100,
  //     },
  //     {
  //       y: 0,
  //       duration: 1,
  //       delay: 2,
  //     }
  //   );
  // };

  useEffect(() => {
    headerAnimation();
    buttonAnimation();
    subtitleAnimation();
  }, []);
  return (
    <>
      <Header
        isFixed={isFixed}
        navRef={navRef}
        navAnimation={navAnimation}
        updateScroll={updateScroll}
      />
      <div className={s.root} id="hero">
        <div className={s.hero}>
          <div
            className={s.hero__title}
            ref={heraderRef}
            style={{ overflow: "hidden" }}
            data-scroll
            data-scroll-speed="0.2"
          >
            <div style={{ overflow: "hidden" }}>
              <h1>Идеальные</h1>
            </div>
            <div style={{ overflow: "hidden" }}>
              <h1>путешествия</h1>
            </div>
            <div style={{ overflow: "hidden" }}>
              <h1>существуют</h1>
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="0.15"
            className={s.hero__subtitle_wrapper}
          >
            <p className={s.hero__subtitle} ref={subtitleRef}>
              Идейные соображения высшего порядка, a также рамки и место
              обучения кадров
            </p>
          </div>

          <div
            ref={buttonRef}
            style={{ overflow: "hidden" }}
            data-scroll
            data-scroll-speed="0.1"
          >
            <BtnMain />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
