import React, { useCallback, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Home from './Home';

const HomeContainer = () => {
  gsap.registerPlugin(ScrollTrigger);
  //   Footer
  const footerRef = useRef();
  const arrowRef = useRef();
  // CustomCursor
  const rootRef = useRef();

  const sectionRefList = {
    hero: useRef(),
    selectTour: useRef(),
    form: useRef(),
    reviews: useRef(),
    stories: useRef(),
  };
  const scaleAnim = gsap.timeline({ paused: true });

  const cursoreMove = useCallback(e => {
    gsap.to(rootRef.current, {
      x: e.clientX,
      y: e.clientY,
      ease: 'power1.out',

      stagger: {
        each: 0.1,
      },
    });
  }, []);

  const scaleAnimation = useCallback(() => {
    const targets = gsap.utils.toArray('a');
    scaleAnim.to(rootRef.current, {
      scale: 7,
      duration: 0.2,
    });
    targets.forEach(target => {
      target.addEventListener('mouseenter', () => {
        scaleAnim.play();
      });
      target.addEventListener('mouseleave', () => {
        scaleAnim.reverse();
      });
    });
  }, [scaleAnim]);

  const arrowAnimtion = useCallback(() => {
    gsap.fromTo(
      arrowRef.current,
      {
        x: 200,
      },
      {
        scrollTrigger: {
          trigger: footerRef.current,
          toggleActions: 'play none reverse none ',
          start: 'top bottom',

          end: 'top bottom',
        },
        x: 0,
      }
    );
  }, []);
  const scrollToAnimation = useCallback(sectionRef => {
    gsap.to(window, {
      duration: 2,
      ease: 'power4.out',
      scrollTo: {
        y: sectionRef.current,
      },
    });
  }, []);
  return (
    <Home
      // hero
      sectionRefList={sectionRefList}
      // CustomCursor
      rootRef={rootRef}
      cursoreMove={cursoreMove}
      scaleAnimation={scaleAnimation}
      //   footer
      footerRef={footerRef}
      arrowRef={arrowRef}
      arrowAnimtion={arrowAnimtion}
      //
      scrollToAnimation={scrollToAnimation}
    />
  );
};

export default HomeContainer;
