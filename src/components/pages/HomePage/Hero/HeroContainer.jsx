import React, { useCallback, useRef, useState } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

import Hero from ".";
const HeroContainer = ({ sectionRefList, scrollToAnimation }) => {
  const [isFixed, setIsFixed] = useState(false);

  const heraderRef = useRef();
  const subtitleRef = useRef();
  const buttonRef = useRef();
  const navRef = useRef();

  const headerAnimation = useCallback(() => {
    gsap.fromTo(
      heraderRef.current.children,
      {
        opacity: 0,
        y: 100,
      },
      {
        y: 0,
        ease: "power1.easeOut",
        opacity: 1,
        stagger: {
          each: 0.2,
          from: "start",
        },
        delay: 1,
        duration: 1,
      }
    );
  }, []);

  const buttonAnimation = useCallback(() => {
    gsap.fromTo(
      buttonRef.current.children,
      {
        y: 100,
      },
      {
        y: 0,
        duration: 1,
        delay: 2,
      }
    );
  }, []);

  const subtitleAnimation = useCallback(() => {
    gsap.fromTo(
      subtitleRef.current,
      {
        y: 100,
      },
      {
        y: 0,
        duration: 1,
        delay: 2,
      }
    );
  }, []);

  const navAnimation = useCallback(() => {
    gsap.fromTo(
      navRef.current.children,
      {
        opacity: 0,
        x: -100,
      },
      {
        x: 0,
        ease: "power1.easeOut",
        opacity: 1,
        stagger: {
          each: 0.4,
          from: "start",
        },

        duration: 1,
      }
    );
  }, []);

  const updateScroll = useCallback(() => {
    if (window.scrollY >= 450) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }, []);

  return (
    <Hero
      heraderRef={heraderRef}
      subtitleRef={subtitleRef}
      buttonRef={buttonRef}
      headerAnimation={headerAnimation}
      buttonAnimation={buttonAnimation}
      subtitleAnimation={subtitleAnimation}
      // header
      isFixed={isFixed}
      navRef={navRef}
      navAnimation={navAnimation}
      updateScroll={updateScroll}
      sectionRefList={sectionRefList}
      scrollToAnimation={scrollToAnimation}
    />
  );
};

export default HeroContainer;
