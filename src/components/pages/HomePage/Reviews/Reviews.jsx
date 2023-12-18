import React, { memo } from 'react';

import reviewData from 'constants/reviewData';
import SectionTitleContainer from 'components/SectionTitle/SectionTitleContainer';
import ReviewContainer from 'components/Review/ReviewContainer';

import s from './Reviews.module.scss';

const Reviews = memo(({ reviewsRef, modalAnimation, modalRef }) => (
  <section
    className={s.root}
    id="review"
    ref={reviewsRef}
  >
    <div className={s.reviwesTitle}>
      <SectionTitleContainer
        title="Отзывы наших путешественников"
        subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
      />
    </div>

    <div className={s.reviewWrapper}>
      {reviewData.map(item => (
        <ReviewContainer
          key={item}
          text={item.text}
          name={item.name}
          tourType={item.tourType}
          profileImg={item.profileImg}
          modalRef={modalRef}
          modalAnimation={modalAnimation}
        />
      ))}
    </div>
  </section>
));

export default Reviews;
