import React, { memo, useEffect } from 'react';
import Arr from '@/utils/array';
import s from './TravelPhoto.module.scss';
import SectionTitleContainer from '@/src/components/common/SectionTitle/SectionTitleContainer';

const TravelPhoto = memo(
  ({
    gallery1Ref,
    gallery2Ref,
    gallery3Ref,
    setIsTablet,
    galleryAnimation,
    gallerySecRef,
  }) => {
    useEffect(() => {
      galleryAnimation(gallery1Ref, true);
      galleryAnimation(gallery2Ref, false);
      galleryAnimation(gallery3Ref, true);
      if (window.innerWidth <= 1024) setIsTablet(true);
    }, [gallery1Ref, gallery2Ref, gallery3Ref, galleryAnimation, setIsTablet]);

    return (
      <section
        className={s.root}
        ref={gallerySecRef}
      >
        <SectionTitleContainer
          title="Фотографии путешествий"
          subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
        />
        <div
          className={s.gallery}
          ref={gallery1Ref}
        >
          <Images
            count={4}
            start={1}
            small={false}
          />
          <Images
            count={4}
            start={1}
            small={false}
          />
        </div>
        <div
          className={`${s.gallery} ${s.grid_big} `}
          ref={gallery2Ref}
        >
          <Images
            count={5}
            start={5}
            small
          />
          <Images
            count={5}
            start={5}
            small
          />
        </div>
        <div
          className={s.gallery}
          ref={gallery3Ref}
        >
          <Images
            count={4}
            start={10}
            small={false}
          />
          <Images
            count={4}
            start={10}
            small={false}
          />
        </div>
      </section>
    );
  }
);

export default TravelPhoto;

const Images = memo(({ count, start, small }) => {
  return Arr(count, start).map(item => {
    return (
      <img
        src={`/travel-photo/travel photo-${item}.jpg`}
        alt={item}
        key={item}
        className={small ? `${s.photoSmall}` : `${s.photo}`}
      />
    );
  });
});
