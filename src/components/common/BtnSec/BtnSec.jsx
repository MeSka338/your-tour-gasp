import React from "react";
import s from "./BtnSec.module.scss";
const BtnSec = () => {
  return (
    <a href="/" className={s.secondaryBtn}>
      <p className={s.secondaryBtnTitle}>Подробнее</p>
      <img
        className={s.secondaryBtnIcon}
        src="select-tour/arrow.svg"
        alt="arrow"
      />
    </a>
  );
};

export default BtnSec;
