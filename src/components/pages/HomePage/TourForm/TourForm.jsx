import React, { memo } from "react";
import s from "./TourForm.module.scss";
import Form from "@/src/components/common/Form";
import SectionTitleContainer from "@/src/components/common/SectionTitle/SectionTitleContainer";

const TourForm = memo(({ form, formAnimation, formRef }) => {
  return (
    <section className={s.root} ref={formRef}>
      <SectionTitleContainer
        title="Собери свой тур"
        subtitle="Идейные соображения высшего порядка, a также рамки и место обучения кадров"
      />
      <Form form={form} formAnimation={formAnimation} />
    </section>
  );
});

export default TourForm;
