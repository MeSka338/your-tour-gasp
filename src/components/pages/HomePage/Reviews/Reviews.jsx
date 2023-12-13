import React, { memo } from "react";
import s from "./Reviews.module.scss";
import SectionTitle from "@/src/components/common/SectionTitle";
import Review from "@/src/components/common/Review";

import reviewData from "@/src/constants/reviewData";
import SectionTitleContainer from "@/src/components/common/SectionTitle/SectionTitleContainer";
const Reviews = memo(
  ({
    // review
    textRef,
    click,
    setClick,
    isModal,
    setIsModal,
    reviewAnimation,
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
              <Review
                key={key}
                text={item.text}
                name={item.name}
                tourType={item.tourType}
                profileImg={item.profileImg}
                textRef={textRef}
                click={click}
                setClick={setClick}
                isModal={isModal}
                setIsModal={setIsModal}
                reviewAnimation={reviewAnimation}
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
