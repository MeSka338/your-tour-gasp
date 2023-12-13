import React, { memo, useEffect, useRef, useState } from "react";
import Arr from "@/utils/array";
import s from "./TravelPhoto.module.scss";
import SectionTitle from "@/src/components/common/SectionTitle";
import gsap from "gsap";

const TravelPhoto = memo(
  ({
    gallery1Ref,
    gallery2Ref,
    gallery3Ref,
    setIsTablet,
    galleryAnimation,
    gallerySecRef,
    scrollToSection,
    // section title
    titleRef,
    titleAnimation,
  }) => {
    useEffect(() => {
      galleryAnimation(gallery1Ref, true);
      galleryAnimation(gallery2Ref, false);
      galleryAnimation(gallery3Ref, true);
      if (window.innerWidth <= 1024) setIsTablet(true);

      console.log("res");
    }, []);

    return (
      <section className={s.root} ref={gallerySecRef}>
        <SectionTitle
          title={"Фотографии путешествий"}
          subtitle={
            "Идейные соображения высшего порядка, а также рамки и место обучения кадров"
          }
          titleRef={titleRef}
          titleAnimation={titleAnimation}
        />
        <div className={s.gallery} ref={gallery1Ref}>
          <Images count={4} start={1} small={false} />
          <Images count={4} start={1} small={false} />
        </div>
        <div className={`${s.gallery} ${s.grid_big} `} ref={gallery2Ref}>
          <Images count={5} start={5} small={true} />
          <Images count={5} start={5} small={true} />
        </div>
        <div className={s.gallery} ref={gallery3Ref}>
          <Images count={4} start={10} small={false} />
          <Images count={4} start={10} small={false} />
        </div>
      </section>
    );
  }
);

export default TravelPhoto;

const Images = memo(({ count, start, small }) => {
  return Arr(count, start).map((item, key) => {
    return (
      <img
        src={`/travel-photo/travel photo-${item}.jpg`}
        alt={item}
        key={key}
        className={small ? `${s.photoSmall}` : `${s.photo}`}
      />
    );
  });
});
