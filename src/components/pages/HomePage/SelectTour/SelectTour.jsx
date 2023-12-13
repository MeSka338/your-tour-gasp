import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import s from "./SelectTour.module.scss";
import Arr from "@/utils/array";
import Card from "@/src/components/common/Card";

gsap.registerPlugin(ScrollTrigger);

const SelectTour = ({
  menuArr,
  tourTitleRef,
  listRef,
  onChage,
  tourTitleAnimation,
  listAnimation,
  cardsRef,
  cardsAnimation,
}) => {
  useEffect(() => {
    tourTitleAnimation();
    listAnimation();
    cardsAnimation();
  }, []);

  return (
    <section className={s.root}>
      <h2 className={s.select_tour__title} ref={tourTitleRef}>
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
                onClick={() => onChage(key)}
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
