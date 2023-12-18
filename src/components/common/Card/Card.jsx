import React, { memo } from 'react';
import BtnSec from 'components/BtnSec';
import s from './Card.module.scss';

const Card = memo(({ img, title, subtitle }) => {
  return (
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
  );
});

export default Card;
