import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import s from "./ModalReview.module.scss";
const ModalReview = ({
  text,
  profileImg,
  name,
  tourType,
  setIsModal,
  reviewRef,
  modalRef,
  ModalAnimation,
}) => {
  useEffect(() => {
    ModalAnimation();
  }, []);

  return (
    <div className={s.modal}>
      <div className={s.review} ref={modalRef}>
        <button className={s.closeBtn} onClick={() => setIsModal(false)}>
          <img src="/reviews/close.svg" alt="close" />
        </button>
        <p className={s.review__textblock}>{text}</p>

        <div className={s.profile}>
          <div className={s.profile__title}>
            <h3 className={s.profile__name}>{name}</h3>
            <div className={s.profile__tour}>Тур: {tourType}</div>
          </div>
          <img src={profileImg} alt={name} className={s.profile__img} />
        </div>
      </div>
    </div>
  );
};

export default ModalReview;
