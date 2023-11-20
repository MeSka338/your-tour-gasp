import React, { useRef } from "react";
import s from "./BtnMain.module.scss";
const BtnMain = () => {
  const btnRef = useRef();
  return (
    <a href="/" className={s.root} ref={btnRef}>
      Найти тур
    </a>
  );
};

export default BtnMain;
