import React, { memo } from "react";
import s from "./CardBig.module.scss";
import BtnSec from "../BtnSec";

const CardBig = memo(({ img, title, subtitle, subtitbleList, socials }) => {
  return (
    <div className={s.cardContainerBig}>
      <div className={s.cardBig}>
        <img className={s.cardBg} src={img} alt="cardBg" />
        <div className={s.grad2}></div>
        <div className={s.cardBigContentd2}>
          <h3 className={s.cradBigTitle}>{title}</h3>
          <p className={s.cardBigSubtitle}>{subtitle}</p>
          {subtitbleList && (
            <ul className={s.cardBigSubtitleList}>
              <li className={s.subtitleListItem}>вкусная еда</li>
              <li className={s.subtitleListItem}>дешевый транспорт</li>
              <li className={s.subtitleListItem}>красивый город</li>
            </ul>
          )}
          <BtnSec />
          <div className={s.cardSocials}>
            {socials &&
              socials.map((item, key) => {
                return (
                  <a href="/" key={key} className={s.socialsItem}>
                    {item}
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
});

export default CardBig;
