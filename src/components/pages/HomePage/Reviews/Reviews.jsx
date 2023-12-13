import React, { memo } from "react";
import s from "./Reviews.module.scss";
import SectionTitle from "@/src/components/common/SectionTitle";
import Review from "@/src/components/common/Review";

import reviewData from "@/src/constants/reviewData";
import SectionTitleContainer from "@/src/components/common/SectionTitle/SectionTitleContainer";
import ReviewContainer from "@/src/components/common/Review/ReviewContainer";
const Reviews = memo(
  ({
    reviewsRef,

    modalAnimation,
    modalRef,
  }) => {
    return (
      <section className={s.root} id="review" ref={reviewsRef}>
        <div className={s.reviwesTitle}>
          <SectionTitleContainer
            title={"Отзывы наших путешественников"}
            subtitle={
              "Идейные соображения высшего порядка, а также рамки и место обучения кадров"
            }
          />
        </div>

        <div className={s.reviewWrapper}>
          {reviewData.map((item, key) => {
            return (
              <ReviewContainer
                key={key}
                text={item.text}
                name={item.name}
                tourType={item.tourType}
                profileImg={item.profileImg}
                // modalReview
                modalRef={modalRef}
                modalAnimation={modalAnimation}
              />
            );
          })}
        </div>
      </section>
    );
  }
);

export default Reviews;
