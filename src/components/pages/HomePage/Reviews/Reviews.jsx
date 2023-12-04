import React from "react";
import s from "./Reviews.module.scss";
import SectionTitle from "@/src/components/common/SectionTitle";
import Review from "@/src/components/common/Review";
const Reviews = ({
  // review
  textRef,
  click,
  setClick,
  isModal,
  setIsModal,
  ReviewAnimation,

  // seactiontitle
  titleRef,
  TitleAnimation,
  // modalAnimfaion
  ModalAnimation,
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
          TitleAnimation={TitleAnimation}
        />
      </div>

      <div className={s.review_wrapper}>
        <Review
          text={
            "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития."
          }
          name={"Мария"}
          tourType={"Вдали от дома"}
          profileImg={"/reviews/mari.png"}
          textRef={textRef}
          click={click}
          setClick={setClick}
          isModal={isModal}
          setIsModal={setIsModal}
          ReviewAnimation={ReviewAnimation}
          // modalReview
          modalRef={modalRef}
          ModalAnimation={ModalAnimation}
        />

        <Review
          text={
            "Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития."
          }
          name={"Павел"}
          tourType={"Путешествие в горы"}
          profileImg={"/reviews/pavel.png"}
          textRef={textRef}
          click={click}
          setClick={setClick}
          isModal={isModal}
          setIsModal={setIsModal}
          ReviewAnimation={ReviewAnimation}
          // modalReview
          modalRef={modalRef}
          ModalAnimation={ModalAnimation}
        />
      </div>
    </section>
  );
};

export default Reviews;
