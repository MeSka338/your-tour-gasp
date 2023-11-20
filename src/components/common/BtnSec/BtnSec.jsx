import React from "react";
import s from "./BtnSec.module.scss";
const BtnSec = () => {
  return (
    <a href="/" className={s.secondary_btn}>
      <p className={s.secondary_btn__title}>Подробнее</p>
      <img
        className={s.secondary_btn__icon}
        src="select-tour/arrow.svg"
        alt="arrow"
      />
    </a>
  );
};

export default BtnSec;
