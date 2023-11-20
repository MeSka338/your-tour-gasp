import React from "react";
import s from "./Card.module.scss";
import BtnSec from "../BtnSec";

const Card = ({ img, title, subtitle }) => {
  return (
    <div className={s.card_container}>
      <div className={s.card}>
        <div className={s.grad}></div>
        <img src={img} alt={`img`} className={s.card_bg} />
        <div className={s.titles_container}>
          <h3 className={s.card__title}>{title} </h3>
          <p className={s.card__subtitle}>{subtitle}</p>
        </div>
        <BtnSec />
      </div>
    </div>
  );
};

export default Card;
