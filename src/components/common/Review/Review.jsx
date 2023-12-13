import React, { memo, useEffect, useRef, useState } from "react";
import ModalReview from "../ModalReview";
import Link from "next/link";
import s from "./Review.module.scss";
import gsap from "gsap";
const Review = memo(
  ({
    text,
    name,
    tourType,
    profileImg,
    textRef,
    click,
    setClick,
    isModal,
    setIsModal,
    reviewAnimation,
    // modalReview
    modalRef,
    modalAnimation,
  }) => {
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
          <ModalReview
            text={text}
            name={name}
            tourType={tourType}
            profileImg={profileImg}
            setIsModal={setIsModal}
            reviewRef={textRef}
            modalRef={modalRef}
            modalAnimation={modalAnimation}
          />
        )}
        <Link
          href={"#review"}
          className={s.review}
          ref={textRef}
          onClick={() => setIsModal(true)}
        >
          <p className={s.reviewTextblock}>
            {click ? text : text.split(" ").slice(0, 20).join(" ") + "..."}
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
