import React from "react";
import s from "./CardBig.module.scss";
import BtnSec from "../BtnSec";

const CardBig = ({ img, title, subtitle, subtitbleList, socials }) => {
  return (
    <div className={s.card_container_big}>
      <div className={s.card_big}>
        <img className={s.card_bg} src={img} alt="card_bg" />
        <div className={s.grad_2}></div>
        <div className={s.card_big__content}>
          <h3 className={s.crad_big__title}>{title}</h3>
          <p className={s.card_big__subtitle}>{subtitle}</p>
          {subtitbleList && (
            <ul className={s.card_big__subtitle_list}>
              <li className={s.subtitle_list__item}>вкусная еда</li>
              <li className={s.subtitle_list__item}>дешевый транспорт</li>
              <li className={s.subtitle_list__item}>красивый город</li>
            </ul>
          )}
          <BtnSec />
          <div className={s.card__socials}>
            {socials &&
              socials.map((item, key) => {
                return (
                  <a href="/" key={key} className={s.socials_item}>
                    {item}
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBig;
