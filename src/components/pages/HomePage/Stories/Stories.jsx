import React, { memo } from 'react';
import CardBig from 'components/CardBig';
import storiesData from 'constants/storiesData';
import SectionTitleContainer from 'components/SectionTitle/SectionTitleContainer';
import s from './Stories.module.scss';

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
