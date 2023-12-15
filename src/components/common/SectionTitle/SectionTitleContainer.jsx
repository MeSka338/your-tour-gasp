import React, { memo, useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionTitle from './SectionTitle';

const SectionTitleContainer = memo(({ title, subtitle }) => {
  const titleRef = useRef();
  const titleAnimation = useCallback(() => {
    gsap.fromTo(
      titleRef.current,
      {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      },
      {
        scrollTrigger: titleRef.current,

        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1,
        ease: 'power1.out',
      }
    );
  }, []);
  useEffect(() => {
    titleAnimation();
  }, [titleAnimation]);
  return (
    <SectionTitle
      title={title}
      subtitle={subtitle}
      titleRef={titleRef}
    />
  );
});

export default SectionTitleContainer;
