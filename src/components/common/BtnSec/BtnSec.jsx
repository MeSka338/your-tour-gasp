import React from "react";
import Link from "next/link";

import s from "./BtnSec.module.scss";

const BtnSec = () => {
  return (
    <Link href="/" className={s.secondaryBtn}>
      <p className={s.secondaryBtnTitle}>Подробнее</p>
      <img
        className={s.secondaryBtnIcon}
        src="select-tour/arrow.svg"
        alt="arrow"
      />
    </Link>
  );
};

export default BtnSec;
