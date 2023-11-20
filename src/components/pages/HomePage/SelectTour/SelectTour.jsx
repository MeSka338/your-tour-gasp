import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import s from "./SelectTour.module.scss";
import Arr from "@/utils/array";
import Card from "@/src/components/common/Card";

gsap.registerPlugin(ScrollTrigger);

const data = [
  { title: "Популярные", isSelect: true },
  { title: "Авторские", isSelect: false },
  { title: "Походы", isSelect: false },
  { title: "Сплавы", isSelect: false },
  { title: "Велопрогулки", isSelect: false },
];

const SelectTour = () => {
  const [menuArr, setMenuArr] = useState(data);
  const titleRef = useRef();
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
  const TitleAnimation = () => {
    gsap.fromTo(
      titleRef.current,
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
  useEffect(() => {
    TitleAnimation();
    ListAnimation();
    CardsRef();
  }, []);

  return (
    <section className={s.root}>
      <h2 className={s.select_tour__title} ref={titleRef}>
        Выбери свой тур
      </h2>
      <ul
        className={s.select_tour__menu}
        ref={listRef}
        style={{ overflow: "hidden" }}
      >
        {menuArr.map((item, key) => {
          return (
            <li className={s.select_tour_menu__item} key={key}>
              <a
                className={
                  item.isSelect
                    ? `${s.select_tour_menu__link} ${s.active}`
                    : `${s.select_tour_menu__link}`
                }
                onClick={() => Change(key)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className={s.select_tour__options} ref={cardsRef}>
        {Arr(6, 1).map((item, key) => {
          return (
            <Card
              key={key}
              img={`select-tour/cardTourPhoto-${item}.jpg`}
              title={"Путешествие в горах"}
              subtitle={"от 80 000 руб"}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SelectTour;
