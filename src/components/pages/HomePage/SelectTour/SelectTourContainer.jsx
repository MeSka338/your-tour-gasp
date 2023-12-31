import React, { memo, useCallback, useRef, useState } from 'react';
import gsap from 'gsap';
import SelectTour from './SelectTour';

const SelectTourContainer = memo(({ selectTourRef }) => {
  const [menuArr, setMenuArr] = useState([
    { id: 1, title: 'Популярные', isSelect: true },
    { id: 2, title: 'Авторские', isSelect: false },
    { id: 3, title: 'Походы', isSelect: false },
    { id: 4, title: 'Сплавы', isSelect: false },
    { id: 5, title: 'Велопрогулки', isSelect: false },
  ]);

  const tourTitleRef = useRef();
  const listRef = useRef();
  const cardsRef = useRef();

  const handleChange = useCallback(
    key => {
      const arr = [...menuArr];
      arr.forEach(item => {
        item.isSelect = false;
      });
      arr[key].isSelect = true;

      setMenuArr(arr);
    },
    [menuArr]
  );
  const tourTitleAnimation = useCallback(() => {
    gsap.fromTo(
      tourTitleRef.current,
      {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      },
      {
        scrollTrigger: listRef.current,

        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1,
        ease: 'power1.out',
      }
    );
  }, []);
  const listAnimation = useCallback(() => {
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
          // ease: 'power1.out',
        },
      }
    );
  }, []);
  const cardsAnimation = useCallback(() => {
    gsap.fromTo(
      cardsRef.current.children,
      {
        scale: 0,
      },
      {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top center',
        },
        scale: 1,
        stagger: {
          each: 0.1,
          ease: 'power1.out',
        },
      }
    );
  }, []);
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
