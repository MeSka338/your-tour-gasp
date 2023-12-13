import React, { memo, useRef, useState } from "react";
import SelectTour from "./SelectTour";
import gsap from "gsap";

const SelectTourContainer = memo(({ selectTourRef }) => {
  const [menuArr, setMenuArr] = useState([
    { title: "Популярные", isSelect: true },
    { title: "Авторские", isSelect: false },
    { title: "Походы", isSelect: false },
    { title: "Сплавы", isSelect: false },
    { title: "Велопрогулки", isSelect: false },
  ]);

  const tourTitleRef = useRef();
  const listRef = useRef();
  const cardsRef = useRef();

  const handleChange = (key) => {
    let arr = [...menuArr];
    arr.forEach((item) => {
      item.isSelect = false;
    });
    arr[key].isSelect = true;

    setMenuArr(arr);
  };
  const tourTitleAnimation = () => {
    gsap.fromTo(
      tourTitleRef.current,
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
  const listAnimation = () => {
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
  const cardsAnimation = () => {
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
  return (
    <SelectTour
      menuArr={menuArr}
      tourTitleRef={tourTitleRef}
      listRef={listRef}
      cardsRef={cardsRef}
      onChange={handleChange}
      tourTitleAnimation={tourTitleAnimation}
      listAnimation={listAnimation}
      cardsAnimation={cardsAnimation}
      selectTourRef={selectTourRef}
    />
  );
});

export default SelectTourContainer;
