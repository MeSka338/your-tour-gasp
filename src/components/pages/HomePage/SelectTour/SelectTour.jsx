import React, { useEffect, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Card from 'components/Card';
import Arr from 'utils/Array';

import s from './SelectTour.module.scss';

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
    }, [cardsAnimation, listAnimation, tourTitleAnimation]);

    return (
      <section
        className={s.root}
        ref={selectTourRef}
      >
        <h2
          className={s.selectTourTitle}
          ref={tourTitleRef}
        >
          Выбери свой тур
        </h2>
        <ul
          className={s.selectTourMenu}
          ref={listRef}
          style={{ overflow: 'hidden' }}
        >
          {menuArr.map((item, key) => {
            return (
              <li
                className={s.selectTourMenuItem}
                key={item.key}
              >
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
        <div
          className={s.selectTourOptions}
          ref={cardsRef}
        >
          {Arr(6, 1).map(item => {
            return (
              <Card
                key={item}
                img={`select-tour/cardTourPhoto-${item}.jpg`}
                title="Путешествие в горах"
                subtitle="от 80 000 руб"
              />
            );
          })}
        </div>
      </section>
    );
  }
);

export default SelectTour;
