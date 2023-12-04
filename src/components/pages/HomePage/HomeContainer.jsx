import React, { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Home from "./Home";
const HomeContainer = () => {
  gsap.registerPlugin(ScrollTrigger);

  const heraderRef = useRef();
  const subtitleRef = useRef();
  const buttonRef = useRef();

  const [isFixed, setIsFixed] = useState(false);
  const navRef = useRef();

  // CustomCursor
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

  //   hero
  const headerAnimation = () => {
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
  };
  const buttonAnimation = () => {
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
  };
  const subtitleAnimation = () => {
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
  };
  // header
  const navAnimation = () => {
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
  };
  const updateScroll = () => {
    if (window.scrollY >= 450) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  // sectionTitle
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
  //   Review
  const textRef = useRef();
  const [click, setClick] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const ReviewAnimation = () => {
    setClick(!click);
    if (click === true) {
      gsap.to(
        textRef.current,

        {
          position: "absolute",

          zIndex: 10000,
        }
      );
    } else {
      gsap.to(
        textRef.current,

        {
          position: "auto",
          // zIndex: 10000,
        }
      );
    }
  };
  //   modalAnimation
  const modalRef = useRef();

  const ModalAnimation = () => {
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
      }
    );
  };

  // SelectTOur
  const [menuArr, setMenuArr] = useState([
    { title: "Популярные", isSelect: true },
    { title: "Авторские", isSelect: false },
    { title: "Походы", isSelect: false },
    { title: "Сплавы", isSelect: false },
    { title: "Велопрогулки", isSelect: false },
  ]);
  const TourTitleRef = useRef();
  const listRef = useRef();
  const cardsRef = useRef();

  const Change = (key) => {
    let arr = [...menuArr];
    arr.forEach((item) => {
      item.isSelect = false;
    });
    arr[key].isSelect = true;

    setMenuArr(arr);
  };

  const TourTitleAnimation = () => {
    gsap.fromTo(
      TourTitleRef.current,
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      },
      {
        scrollTrigger: listRef.current,

        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power1.out",
      }
    );
  };

  const ListAnimation = () => {
    gsap.fromTo(
      listRef.current.children,
      {
        y: 100,
      },
      {
        scrollTrigger: listRef.current,
        y: 0,
        stagger: {
          each: 0.2,
          // ease: "power1.out",
        },
      }
    );
  };

  const CardsRef = () => {
    gsap.fromTo(
      cardsRef.current.children,
      {
        scale: 0,
      },
      {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top center",
        },
        scale: 1,
        stagger: {
          each: 0.1,
          ease: "power1.out",
        },
      }
    );
  };
  //   TourForm
  //// Form
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

  //   Tour Photo
  const gallery_1Ref = useRef();
  const gallery_2Ref = useRef();
  const gallery_3Ref = useRef();

  const [istablet, setIsTablet] = useState(false);

  const margin = istablet ? 4 : 7;
  const duration = 30;

  const GalleryAnimation = (gallery_Ref, toLeft) => {
    let refWidth = gallery_Ref.current.clientWidth;

    gsap.fromTo(
      gallery_Ref.current,
      {
        x: toLeft ? refWidth / 4 + margin : -refWidth / 4 - margin,
      },
      {
        duration: duration,
        x: toLeft ? -refWidth / 4 - margin : refWidth / 4 + margin,
        repeat: -1,
        ease: "none",
      }
    );
  };
  //   Footer
  const footerRef = useRef();
  const arrowRef = useRef();

  const arrowAnimtion = () => {
    gsap.fromTo(
      arrowRef.current,
      {
        x: 200,
      },
      {
        scrollTrigger: {
          trigger: footerRef.current,
          toggleActions: "play none reverse none ",
          start: "top bottom",

          end: "top bottom",
        },
        x: 0,
      }
    );
  };

  return (
    <Home
      // CustomCursor
      rootRef={rootRef}
      cursoreMove={cursoreMove}
      scaleAnimation={scaleAnimation}
      // hero
      heraderRef={heraderRef}
      subtitleRef={subtitleRef}
      buttonRef={buttonRef}
      headerAnimation={headerAnimation}
      buttonAnimation={buttonAnimation}
      subtitleAnimation={subtitleAnimation}
      //   header
      isFixed={isFixed}
      navRef={navRef}
      navAnimation={navAnimation}
      updateScroll={updateScroll}
      //   review
      textRef={textRef}
      click={click}
      setClick={setClick}
      isModal={isModal}
      setIsModal={setIsModal}
      ReviewAnimation={ReviewAnimation}
      // sectionTitle
      titleRef={titleRef}
      TitleAnimation={TitleAnimation}
      //   modalAnimation
      modalRef={modalRef}
      ModalAnimation={ModalAnimation}
      //  SelectTour
      menuArr={menuArr}
      TourTitleRef={TourTitleRef}
      listRef={listRef}
      Change={Change}
      TourTitleAnimation={TourTitleAnimation}
      ListAnimation={ListAnimation}
      cardsRef={cardsRef}
      CardsRef={CardsRef}
      //   TourForm
      form={form}
      formAnimation={formAnimation}
      //   TourPhoto
      gallery_1Ref={gallery_1Ref}
      gallery_2Ref={gallery_2Ref}
      gallery_3Ref={gallery_3Ref}
      setIsTablet={setIsTablet}
      GalleryAnimation={GalleryAnimation}
      //   footer
      footerRef={footerRef}
      arrowRef={arrowRef}
      arrowAnimtion={arrowAnimtion}
    />
  );
};

export default HomeContainer;
