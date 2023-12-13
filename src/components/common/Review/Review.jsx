import React, { memo, useEffect } from "react";
import Link from "next/link";
import s from "./Review.module.scss";
import ModalReviewContainer from "../ModalReview/ModalReviewContainer";
const Review = memo(
  ({ text, name, tourType, profileImg, textRef, isModal, setIsModal }) => {
    useEffect(() => {
      if (isModal) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [isModal]);

    return (
      <>
        {isModal && (
          <ModalReviewContainer
            text={text}
            name={name}
            tourType={tourType}
            profileImg={profileImg}
            setIsModal={setIsModal}
          />
        )}
        <Link
          href={"#review"}
          className={s.review}
          ref={textRef}
          onClick={() => setIsModal(true)}
        >
          <p className={s.reviewTextblock}>
            {text.split(" ").slice(0, 20).join(" ") + "..."}
          </p>

          <div className={s.profile}>
            <div className={s.profileTitle}>
              <h3 className={s.profileName}>{name}</h3>
              <div className={s.profileTour}>Тур: {tourType}</div>
            </div>
            <img src={profileImg} alt={name} className={s.profileImg} />
          </div>
        </Link>
      </>
    );
  }
);

export default Review;
