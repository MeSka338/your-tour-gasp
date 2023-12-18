import React, { memo } from 'react';
import SectionTitleContainer from 'components/SectionTitle/SectionTitleContainer';
import Form from 'components/Form';

import s from './TourForm.module.scss';

const TourForm = memo(({ form, formAnimation, formRef }) => {
  return (
    <section
      className={s.root}
      ref={formRef}
    >
      <SectionTitleContainer
        title="Собери свой тур"
        subtitle="Идейные соображения высшего порядка, a также рамки и место обучения кадров"
      />
      <Form
        form={form}
        formAnimation={formAnimation}
      />
    </section>
  );
});

export default TourForm;
