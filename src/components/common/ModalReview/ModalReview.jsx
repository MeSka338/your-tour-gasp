import React, { useEffect, memo } from "react";
import s from "./ModalReview.module.scss";

const ModalReview = memo(
  ({
    text,
    profileImg,
    name,
    tourType,
    setIsModal,
    modalRef,
    modalAnimation,
  }) => {
    useEffect(() => {
      modalAnimation();
    }, [modalAnimation]);

    return (
      <div className={s.modal}>
        <div className={s.review} ref={modalRef}>
          <button
            type="button"
            className={s.closeBtn}
            onClick={() => setIsModal(false)}
          >
            <img src="/reviews/close.svg" alt="close" />
          </button>
          <p className={s.review__textblock}>{text}</p>

          <div className={s.profile}>
            <div className={s.profileTitle}>
              <h3 className={s.profileName}>{name}</h3>
              <div className={s.profileTour}>Тур: {tourType}</div>
            </div>
            <img src={profileImg} alt={name} className={s.profileImg} />
          </div>
        </div>
      </div>
    );
  }
);

export default ModalReview;
