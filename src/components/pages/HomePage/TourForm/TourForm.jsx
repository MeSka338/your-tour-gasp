import React from "react";
import s from "./TourForm.module.scss";
import SectionTitle from "@/src/components/common/SectionTitle";
import Form from "@/src/components/common/Form";
const TourForm = () => {
  return (
    <section className={s.root}>
      <SectionTitle
        title={"Собери свой тур"}
        subtitle={`Идейные соображения высшего порядка, a также рамки и место обучения кадров`}
      />
      <Form />
    </section>
  );
};

export default TourForm;
