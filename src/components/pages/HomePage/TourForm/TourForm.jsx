import React from "react";
import s from "./TourForm.module.scss";
import SectionTitle from "@/src/components/common/SectionTitle";
import Form from "@/src/components/common/Form";
const TourForm = ({ titleRef, titleAnimation, form, formAnimation }) => {
  return (
    <section className={s.root}>
      <SectionTitle
        title={"Собери свой тур"}
        subtitle={`Идейные соображения высшего порядка, a также рамки и место обучения кадров`}
        titleRef={titleRef}
        titleAnimation={titleAnimation}
      />
      <Form form={form} formAnimation={formAnimation} />
    </section>
  );
};

export default TourForm;
