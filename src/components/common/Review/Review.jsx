import React, { useEffect, useRef, useState } from "react";
import ModalReview from "../ModalReview";
import Link from "next/link";
import s from "./Review.module.scss";
import gsap from "gsap";

const Review = ({
  text,
  name,
  tourType,
  profileImg,
  textRef,
  click,
  setClick,
  isModal,
  setIsModal,
  ReviewAnimation,
  // modalReview
  modalRef,
  ModalAnimation,
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
          ModalAnimation={ModalAnimation}
        />
      )}
      <Link
        href={"#review"}
        className={s.review}
        ref={textRef}
        onClick={() => setIsModal(true)}
      >
        <p className={s.review__textblock}>
          {click ? text : text.split(" ").slice(0, 20).join(" ") + "..."}
        </p>

        <div className={s.profile}>
          <div className={s.profile__title}>
            <h3 className={s.profile__name}>{name}</h3>
            <div className={s.profile__tour}>Тур: {tourType}</div>
          </div>
          <img src={profileImg} alt={name} className={s.profile__img} />
        </div>
      </Link>
    </>
  );
};

export default Review;
