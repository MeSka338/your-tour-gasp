import React, { useEffect, memo } from 'react';
import gsap from 'gsap';
import s from './CustomCursor.module.scss';

const CustomCursor = memo(({ rootRef, cursoreMove, scaleAnimation }) => {
  useEffect(() => {
    gsap.set(rootRef.current, {
      xPercent: -50,
      yPercent: -50,
    });

    scaleAnimation();

    window.addEventListener('mousemove', e => cursoreMove(e));
  }, [rootRef, cursoreMove, scaleAnimation]);

  return (
    <div
      className={s.root}
      ref={rootRef}
    />
  );
});

export default CustomCursor;
