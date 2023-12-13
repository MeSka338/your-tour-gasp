import React, { memo } from "react";
import s from "./Stories.module.scss";
import CardBig from "@/src/components/common/CardBig";
import SectionTitle from "@/src/components/common/SectionTitle/SectionTitle";
import storiesData from "@/src/constants/storiesData";
const Stories = memo(({ titleRef, titleAnimation, storiesRef }) => {
  return (
    <section className={s.root} ref={storiesRef}>
      <SectionTitle
        title={"Истории путешествий"}
        subtitle={
          " Идейные соображения высшего порядка, а также рамки и место обучениякадров"
        }
        // sectionTitle
        titleRef={titleRef}
        titleAnimation={titleAnimation}
      />
      {storiesData.map((item, key) => {
        return (
          <CardBig
            key={key}
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
