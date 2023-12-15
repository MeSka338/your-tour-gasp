import React, { memo } from 'react';
import s from './Card.module.scss';
import BtnSec from '../BtnSec';

const Card = memo(({ img, title, subtitle }) => (
  <div className={s.cardContainer}>
    <div className={s.card}>
      <div className={s.grad} />
      <img
        src={img}
        alt="img"
        className={s.cardBg}
      />
      <div className={s.titlesContainer}>
        <h3 className={s.cardTitle}>{title} </h3>
        <p className={s.cardSubtitle}>{subtitle}</p>
      </div>
      <BtnSec />
    </div>
  </div>
));

export default Card;
