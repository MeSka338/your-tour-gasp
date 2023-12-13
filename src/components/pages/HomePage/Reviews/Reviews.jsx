import React from "react";
import s from "./Reviews.module.scss";
import SectionTitle from "@/src/components/common/SectionTitle";
import Review from "@/src/components/common/Review";

import reviewData from "@/src/constants/reviewData";
const Reviews = ({
  // review
  textRef,
  click,
  setClick,
  isModal,
  setIsModal,
  reviewAnimation,

  // seactiontitle
  titleRef,
  titleAnimation,
  // modalAnimfaion
  modalAnimation,
  modalRef,
}) => {
  return (
    <section className={s.root} id="review">
      <div className={s.reviwes__title}>
        <SectionTitle
          title={"Отзывы наших путешественников"}
          subtitle={
            "Идейные соображения высшего порядка, а также рамки и место обучения кадров"
          }
          titleRef={titleRef}
          titleAnimation={titleAnimation}
        />
      </div>

      <div className={s.review_wrapper}>
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
};

export default Reviews;
