import React, { useEffect, useRef, useState } from "react";
import Arr from "@/utils/array";
import s from "./TravelPhoto.module.scss";
import SectionTitle from "@/src/components/common/SectionTitle";
import gsap from "gsap";

const TravelPhoto = ({
  gallery1Ref,
  gallery2Ref,
  gallery3Ref,
  setIsTablet,
  galleryAnimation,
  // section title
  titleRef,
  titleAnimation,
}) => {
  // const gallery_1Ref = useRef();
  // const gallery_2Ref = useRef();
  // const gallery_3Ref = useRef();

  // const [istablet, setIsTablet] = useState(false);

  // const margin = istablet ? 4 : 7;
  // const duration = 30;

  // const GalleryAnimation = (gallery_Ref, toLeft) => {
  //   let refWidth = gallery_Ref.current.clientWidth;

  //   gsap.fromTo(
  //     gallery_Ref.current,
  //     {
  //       x: toLeft ? refWidth / 4 + margin : -refWidth / 4 - margin,
  //     },
  //     {
  //       duration: duration,
  //       x: toLeft ? -refWidth / 4 - margin : refWidth / 4 + margin,
  //       repeat: -1,
  //       ease: "none",
  //     }
  //   );
  // };

  useEffect(() => {
    galleryAnimation(gallery1Ref, true);
    galleryAnimation(gallery2Ref, false);
    galleryAnimation(gallery3Ref, true);

    if (window.innerWidth <= 1024) setIsTablet(true);

    console.log("res");
  }, []);

  return (
    <section className={s.root}>
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
};

export default TravelPhoto;

const Images = ({ count, start, small }) => {
  return Arr(count, start).map((item, key) => {
    return (
      <img
        src={`/travel-photo/travel photo-${item}.jpg`}
        alt={item}
        key={key}
        className={small ? `${s.photo_small}` : `${s.photo}`}
      />
    );
  });
};
