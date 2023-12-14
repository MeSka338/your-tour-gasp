import React, { useRef } from "react";
import Link from "next/link";

import s from "./BtnMain.module.scss";

const BtnMain = () => {
  const btnRef = useRef();
  return (
    <Link href="/" className={s.root} ref={btnRef}>
      Найти тур
    </Link>
  );
};

export default BtnMain;
