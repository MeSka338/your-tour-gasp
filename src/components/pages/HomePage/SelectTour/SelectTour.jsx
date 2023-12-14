import React, { useEffect, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import s from "./SelectTour.module.scss";
import Arr from "@/utils/array";
import Card from "@/src/components/common/Card";

gsap.registerPlugin(ScrollTrigger);
const SelectTour = memo(
  ({
    menuArr,
    tourTitleRef,
    listRef,
    onChange,
    tourTitleAnimation,
    listAnimation,
    cardsRef,
    cardsAnimation,
    selectTourRef,
  }) => {
    useEffect(() => {
      tourTitleAnimation();
      listAnimation();
      cardsAnimation();
    }, []);

    return (
      <section className={s.root} ref={selectTourRef}>
        <h2 className={s.selectTourTitle} ref={tourTitleRef}>
          Выбери свой тур
        </h2>
        <ul
          className={s.selectTourMenu}
          ref={listRef}
          style={{ overflow: "hidden" }}
        >
          {menuArr.map((item, key) => {
            return (
              <li className={s.selectTourMenuItem} key={key}>
                <a
                  className={
                    item.isSelect
                      ? `${s.selectTourMenuLink} ${s.active}`
                      : `${s.selectTourMenuLink}`
                  }
                  onClick={() => onChange(key)}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className={s.selectTourOptions} ref={cardsRef}>
          {Arr(6, 1).map((item, key) => {
            return (
              <Card
                key={key}
                img={`select-tour/cardTourPhoto-${item}.jpg`}
                title="Путешествие в горах"
                subtitle="от 80 000 руб"
              />
            );
          })}
        </div>
      </section>
    );
  },
);

export default SelectTour;
