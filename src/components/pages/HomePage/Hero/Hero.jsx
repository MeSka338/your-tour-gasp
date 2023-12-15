import React, { memo, useEffect } from 'react';
import s from './Hero.module.scss';
import BtnMain from '@/src/components/common/BtnMain';
import Header from '@/src/components/common/Header';

const Hero = memo(
  ({
    heraderRef,
    subtitleRef,
    buttonRef,
    headerAnimation,
    buttonAnimation,
    subtitleAnimation,
    // header
    isFixed,
    navRef,
    navAnimation,
    updateScroll,
    scrollToAnimation,
    sectionRefList,
  }) => {
    useEffect(() => {
      headerAnimation();
      buttonAnimation();
      subtitleAnimation();
    }, [buttonAnimation, headerAnimation, subtitleAnimation]);
    return (
      <>
        <Header
          isFixed={isFixed}
          navRef={navRef}
          navAnimation={navAnimation}
          updateScroll={updateScroll}
          scrollToAnimation={scrollToAnimation}
          sectionRefList={sectionRefList}
        />
        <div
          className={s.root}
          id="hero"
          ref={sectionRefList.hero}
        >
          <div className={s.hero}>
            <div
              className={s.hero__title}
              ref={heraderRef}
              style={{ overflow: 'hidden' }}
              data-scroll
              data-scroll-speed="0.2"
            >
              <div style={{ overflow: 'hidden' }}>
                <h1>Идеальные</h1>
              </div>
              <div style={{ overflow: 'hidden' }}>
                <h1>путешествия</h1>
              </div>
              <div style={{ overflow: 'hidden' }}>
                <h1>существуют</h1>
              </div>
            </div>
            <div
              data-scroll
              data-scroll-speed="0.15"
              className={s.heroSubtitleWrapper}
            >
              <p
                className={s.heroSubtitle}
                ref={subtitleRef}
              >
                Идейные соображения высшего порядка, a также рамки и место
                обучения кадров
              </p>
            </div>

            <div
              ref={buttonRef}
              style={{ overflow: 'hidden' }}
              data-scroll
              data-scroll-speed="0.1"
            >
              <BtnMain />
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default Hero;
