import React, { memo } from 'react';
import s from './Stories.module.scss';
import CardBig from '@/src/components/common/CardBig';
import storiesData from '@/src/constants/storiesData';
import SectionTitleContainer from '@/src/components/common/SectionTitle/SectionTitleContainer';

const Stories = memo(({ storiesRef }) => {
  return (
    <section
      className={s.root}
      ref={storiesRef}
    >
      <SectionTitleContainer
        title="Истории путешествий"
        subtitle=" Идейные соображения высшего порядка, а также рамки и место обучениякадров"
      />
      {storiesData.map(item => {
        return (
          <CardBig
            key={item}
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
            subtitbleList={item.subtitbleList}
            socials={item.socials}
          />
        );
      })}
    </section>
  );
});

export default Stories;
